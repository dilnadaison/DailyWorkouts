import React, { lazy, Suspense } from 'react';

const LazyComponent = lazy(() => import('./LazyComponent'));

function CodeSpiliting() {
  return (
    <div>
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />  
    </Suspense>
  </div>
  )
}

export default CodeSpiliting