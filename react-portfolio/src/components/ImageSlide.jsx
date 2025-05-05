// src/components/ImageSlide.jsx
import React, { useState } from "react";
import { useSprings, animated, to as interpolate } from "@react-spring/web";
import { useDrag } from "react-use-gesture";

import ed1 from "../photos/edward1.jpeg";
import ed2 from "../photos/edward2.jpeg";
import ed3 from "../photos/edward3.jpeg";
import ed4 from "../photos/edward4.jpeg";
import ed5 from "../photos/edward5.jpeg";

const cards = [ed1, ed2, ed3, ed4, ed5];

// spring helpers…
const to = (i) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
});
const from = () => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });
const trans = (r, s) =>
  `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`;

export default function ImageSlide() {
  const [gone] = useState(() => new Set());
  const [springs, api] = useSprings(cards.length, (i) => ({
    ...to(i),
    from: from(i),
  }));

  const bind = useDrag(
    ({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
      const trigger = velocity > 0.2,
        dir = xDir < 0 ? -1 : 1;
      if (!down && trigger) gone.add(index);
      api.start((i) => {
        if (i !== index) return;
        const isGone = gone.has(index);
        return {
          x: isGone ? (200 + window.innerWidth) * dir : down ? mx : 0,
          rot: mx / 100 + (isGone ? dir * 10 * velocity : 0),
          scale: down ? 1.1 : 1,
          delay: undefined,
          config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
        };
      });
      if (!down && gone.size === cards.length)
        setTimeout(() => {
          gone.clear();
          api.start((i) => to(i));
        }, 600);
    },
  );

  return (
    <div className="flex justify-center items-center bg-ctp-base p-8">
      <div className="grid grid-cols-3 gap-6 w-full max-w-4xl">
        {springs.map(({ x, y, rot, scale }, i) => (
          <animated.div
            key={i}
            {...bind(i)}
            className=" h-80 w-40 bg-contain bg-no-repeat bg-center rounded-xl shadow-2xl cursor-grab active:cursor-grabbing"
            style={{
              transform: interpolate(
                [x, y, rot, scale],
                (x, y, r, s) => `translate3d(${x}px,${y}px,0) ${trans(r, s)}`,
              ),
              backgroundImage: `url(${cards[i]})`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
