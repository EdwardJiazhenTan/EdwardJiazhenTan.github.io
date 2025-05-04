import React from "react";

/* Tailwind classes for Catppuccin Mocha colours */
const cls = {
  brace: "text-ctp-sky",
  key: "text-ctp-mauve",
  punct: "text-ctp-overlay0",
  string: "text-ctp-green",
  number: "text-ctp-yellow",
  bool: "text-ctp-pink",
  array: "text-ctp-peach",
};

/* Render any JS value with minimal highlighting */
function Value({ v }) {
  if (Array.isArray(v))
    return (
      <>
        <span className={cls.array}>[</span>
        {v.map((item, i) => (
          <React.Fragment key={i}>
            <Value v={item} />
            {i < v.length - 1 && <span className={cls.punct}>, </span>}
          </React.Fragment>
        ))}
        <span className={cls.array}>]</span>
      </>
    );

  const t = typeof v;
  if (t === "string") return <span className={cls.string}>"{v}"</span>;
  if (t === "number") return <span className={cls.number}>{v}</span>;
  if (t === "boolean") return <span className={cls.bool}>{String(v)}</span>;
  return <span>{String(v)}</span>;
}

export default function JsonBlock({ data }) {
  // Build each line’s content as an array of React nodes
  const entries = Object.entries(data);
  const lines = [];

  // Opening brace
  lines.push([<span className={cls.brace}>{"{"}</span>]);

  // Key/value lines
  entries.forEach(([k, v], idx) => {
    const fragments = [
      "\u00A0\u00A0", // two spaces
      <span className={cls.key} key={`${k}-key`}>{`"${k}"`}</span>,
      <span className={cls.punct} key={`${k}-colon`}>
        :{" "}
      </span>,
      <Value v={v} key={`${k}-val`} />,
    ];
    if (idx < entries.length - 1) {
      fragments.push(
        <span className={cls.punct} key={`${k}-comma`}>
          ,
        </span>,
      );
    }
    lines.push(fragments);
  });

  // Closing brace
  lines.push([<span className={cls.brace}>{"}"}</span>]);

  return (
    <pre className="bg-ctp-surface0 rounded-lg p-4 font-mono text-sm leading-6 shadow-md">
      {lines.map((frags, i) => (
        <code
          key={i}
          className="typewriter-line"
          style={{
            animation:
              /* type over 0.6s, staggered by 0.6s per line */
              `typing-json-line 0.6s steps(30,end) ${i * 0.6}s forwards, ` +
              `blink-cursor .7s step-end infinite ${i * 0.6}s`,
          }}
        >
          {frags}
        </code>
      ))}
    </pre>
  );
}
