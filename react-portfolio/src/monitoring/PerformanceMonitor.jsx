import { useEffect } from 'react';
import * as Sentry from '@sentry/react';

const PerformanceMonitor = () => {
  useEffect(() => {
    // Track page load time
    if (window.performance) {
      const pageNav = window.performance.getEntriesByType('navigation')[0];
      if (pageNav) {
        Sentry.captureMessage(
          `Page loaded in ${pageNav.loadEventEnd - pageNav.startTime}ms`, 
          { level: 'info' }
        );
      }
    }

    // Report browser info
    Sentry.setContext('browser', {
      userAgent: navigator.userAgent,
      language: navigator.language,
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight
      }
    });

    // Track memory usage if available
    const trackMemory = () => {
      if (performance.memory) {
        Sentry.setContext('memory', {
          jsHeapSizeLimit: performance.memory.jsHeapSizeLimit,
          totalJSHeapSize: performance.memory.totalJSHeapSize,
          usedJSHeapSize: performance.memory.usedJSHeapSize
        });
      }
    };

    // Track memory every 30 seconds
    const memoryInterval = setInterval(trackMemory, 30000);
    trackMemory();

    return () => {
      clearInterval(memoryInterval);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor; 