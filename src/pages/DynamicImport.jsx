import React, { lazy, Suspense, useState } from "react";

const LazyComponent = lazy(() => import("../components/HeavyComponent"));

const DynamicImport = () => {
  const [isVisible, setIsvisible] = useState(false);

  return (
    <div>
      <h1>Dynamic Import</h1>
      <button onClick={() => setIsvisible(!isVisible)}>Click</button>
      {isVisible && (
        <Suspense fallback={<div>Loading...</div>}>
          <LazyComponent />
        </Suspense>
      )}

      {/* when not using lazy */}
      {/* the component is loaded even if it is not visible */}
      {/* {isVisible && <LazyComponent />} */}

      {/* when not using lazy */}
    </div>
  );
};

export default DynamicImport;
