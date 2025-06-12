import PerformanceMonitor from './PerformanceMonitor';
import UserActivityTracker from './UserActivityTracker';
import * as Sentry from '@sentry/react';

export const MonitoringProvider = ({ children }) => {
  return (
    <>
      <PerformanceMonitor />
      <UserActivityTracker />
      {children}
    </>
  );
};

// Utility for custom error tracking
export const trackError = (error, context = {}) => {
  Sentry.captureException(error, { 
    extra: context
  });
};

// Utility for custom event tracking
export const trackEvent = (name, data = {}) => {
  Sentry.captureMessage(`Event: ${name}`, {
    level: 'info',
    extra: data
  });
};

export default {
  MonitoringProvider,
  trackError,
  trackEvent
}; 