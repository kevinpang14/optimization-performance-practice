import React, { lazy, Suspense, useState } from "react";
import { useInView } from "react-intersection-observer";

const LazyComponent = lazy(() => import("../components/HeavyComponent"));

export default function ImportOnVisibility() {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.1,
  });

  return (
    <>
      <div>Import On Visibility</div>
      <div style={{ height: "150vh" }}></div>
      <div ref={ref}>
        {inView && (
          <Suspense fallback={<div>Loading...</div>}>
            <LazyComponent />
            {console.log(entry)}
          </Suspense>
        )}
      </div>
    </>
  );
}
