"use client";

import React from "react";
import dynamic from "next/dynamic";

const ThreadsScene = dynamic(() => import("@/components/ThreadsScene"), {
  ssr: false,
});

const ThreadsPage = () => {
  return (
    <div className="w-screen h-screen">
      <ThreadsScene
        color={[1.0, 0.5, 0.3]}
        amplitude={1.2}
        distance={0.8}
        enableMouseInteraction={true}
      />
    </div>
  );
};

export default ThreadsPage;
