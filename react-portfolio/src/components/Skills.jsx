// src/components/Skills.jsx
import React, { useRef, useState, useEffect } from "react";
import { useSpring, a } from "@react-spring/web";
import useMeasure from "react-use-measure";
import styled from "styled-components";

/* ------------------------------------------------------------------ */
/*  Icons                                                             */
/* ------------------------------------------------------------------ */
const MinusSquareO = (props) => (
  <svg {...props} viewBox="64 -65 897 897">
    <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0-51-21t-21-51v-753q0-29 21-50.5t51-21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30-21.5 51t-51.5 21v0zM732 347h-442q-14 0-25 10.5t-11 25.5q0 15 11 25.5t25 10.5h442q14 0 25-10.5t11-25.5q0-15-11-25.5t-25-10.5z" />
  </svg>
);
const PlusSquareO = (props) => (
  <svg {...props} viewBox="64 -65 897 897">
    <path d="M888 760v0v0v-753h-752v753h752zM888 832h-752q-30 0-51-21t-21-51v-753q0-29 21-50.5t51-21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30-21.5 51t-51.5 21zM732 420h-184v183q0 15-10.5 25.5t-25.5 10.5q-14 0-25-10.5t-11-25.5v-183h-184q-15 0-25.5-11t-10.5-25q0-15 10.5-25.5t25.5-10.5h184v-183q0-15 11-25.5t25-10.5q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5q0 14-10.5 25t-25.5 11z" />
  </svg>
);
const CloseSquareO = (props) => (
  <svg {...props} viewBox="64 -65 897 897">
    <path d="M717.5 589.5q-10.5 10.5-25.5 10.5t-26-10l-154-155-154 155q-11 10-26 10t-25.5-10.5-10.5-25.5 11-25l154-155-154-155q-11-10-11-25t10.5-25.5 25.5-10.5 26 10l154 155 154-155q11-10 26-10t25.5 10.5 10.5 25-11 25.5l-154 155 154 155q11 10 11 25t-10.5 25.5-25.5 10.5zM888 760v0v0v-753h-752v753h752zM888 832h-752q-30 0-51-21t-21-51v-753q0-29 21-50.5t51-21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30-21.5 51t-51.5 21z" />
  </svg>
);
const Icons = { PlusSquareO, MinusSquareO, CloseSquareO };

/* ------------------------------------------------------------------ */
/*  Tree helpers                                                      */
/* ------------------------------------------------------------------ */
function usePrevious(value) {
  const ref = useRef();
  useEffect(() => void (ref.current = value), [value]);
  return ref.current;
}

const Tree = React.memo(({ children, name, defaultOpen = false, style }) => {
  const [open, setOpen] = useState(defaultOpen);
  const prevOpen = usePrevious(open);
  const [ref, { height: viewH }] = useMeasure();
  const { height, opacity, y } = useSpring({
    from: { height: 0, opacity: 0, y: 0 },
    to: { height: open ? viewH : 0, opacity: open ? 1 : 0, y: open ? 0 : 20 },
  });
  const Icon =
    Icons[`${children ? (open ? "Minus" : "Plus") : "Close"}SquareO`];
  return (
    <Frame>
      <Icon
        style={{ ...toggle, opacity: children ? 1 : 0.3 }}
        onClick={() => setOpen(!open)}
      />
      <Title style={style}>{name}</Title>
      <Content
        style={{
          opacity,
          height: open && prevOpen === open ? "auto" : height,
        }}
      >
        <a.div ref={ref} style={{ y }} children={children} />
      </Content>
    </Frame>
  );
});

/* ------------------------------------------------------------------ */
/*  Main component                                                    */
/* ------------------------------------------------------------------ */
export default function Skills() {
  return (
    <Container name="skills">
      <Tree name="Skills" defaultOpen>
        <Tree name="Languages">
          <Tree name="Python" />
          <Tree name="Java" />
          <Tree name="JavaScript / TypeScript" />
          <Tree name="C" />
          <Tree name="Rust" />
          <Tree name="Swift" />
          <Tree name="R" />
          <Tree name="SQL" />
        </Tree>

        <Tree name="Frameworks & Libraries">
          <Tree name="React (+ Three.js, WASM)" />
          <Tree name="Node.js / Express" />
          <Tree name="Django & Flask / FastAPI" />
          <Tree name="Next.js" />
          <Tree name="Tailwind CSS" />
          <Tree name="Spring Boot" />
          <Tree name="PyTorch / NumPy / Pandas" />
          <Tree name="OpenAI SDK" />
        </Tree>

        <Tree name="Cloud & DevOps">
          <Tree name="AWS (EC2, S3, Lambda, ECR)" />
          <Tree name="Docker & Kubernetes" />
          <Tree name="Terraform" />
          <Tree name="GitHub Actions (CI/CD)" />
          <Tree name="Prometheus + Grafana" />
        </Tree>

        <Tree name="Databases">
          <Tree name="PostgreSQL" />
          <Tree name="MySQL" />
          <Tree name="Redis" />
        </Tree>

        <Tree name="Tooling & Workflow">
          <Tree name="Neovim + tmux + Aerospace WM" />
          <Tree name="Linux (System‑level tuning)" />
          <Tree name="Notion (project planning)" />
        </Tree>
      </Tree>
    </Container>
  );
}

/* ------------------------------------------------------------------ */
/*  Styled‑components & shared styles                                 */
/* ------------------------------------------------------------------ */
const Container = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 30px;
  text-color: #a6adc8;
  font-family: ui-monospace, monospace;
  user-select: none;
`;
const Frame = styled.div`
  position: relative;
  padding: 4px 0 0;
  overflow-x: hidden;
`;
const Title = styled.span`
  vertical-align: middle;
`;
const Content = styled(a.div)`
  will-change: transform, opacity, height;
  margin-left: 6px;
  padding-left: 14px;
  border-left: 1px dashed rgba(255, 255, 255, 0.4);
  overflow: hidden;
`;
const toggle = {
  width: "1em",
  height: "1em",
  marginRight: 10,
  cursor: "pointer",
  verticalAlign: "middle",
};
