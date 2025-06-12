import { useEffect, useRef } from 'react';
import * as Sentry from '@sentry/react';

// A hook to track component render time and interactions
const useComponentTracker = (componentName) => {
  const renderStart = useRef(performance.now());
  const interactionCount = useRef(0);

  useEffect(() => {
    // Track component render time
    const renderTime = performance.now() - renderStart.current;
    
    if (renderTime > 100) { // Only log slow renders (>100ms)
      Sentry.addBreadcrumb({
        category: 'performance',
        message: `${componentName} rendered in ${renderTime.toFixed(2)}ms`,
        level: renderTime > 300 ? 'warning' : 'info' // Mark as warning if >300ms
      });
    }

    // Track component mount
    Sentry.addBreadcrumb({
      category: 'component',
      message: `${componentName} mounted`,
      level: 'debug'
    });

    return () => {
      // Track component unmount
      Sentry.addBreadcrumb({
        category: 'component',
        message: `${componentName} unmounted after ${interactionCount.current} interactions`,
        level: 'debug'
      });
    };
  }, [componentName]);

  // Return a function to track interactions with this component
  const trackInteraction = (action) => {
    interactionCount.current += 1;
    Sentry.addBreadcrumb({
      category: 'interaction',
      message: `${action} on ${componentName}`,
      level: 'info'
    });
  };

  return trackInteraction;
};

export default useComponentTracker; 