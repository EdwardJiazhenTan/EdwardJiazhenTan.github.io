# Monitoring Setup for Portfolio Site

This document describes the monitoring system implemented in this React portfolio site, which uses Sentry for error tracking and performance monitoring.

## Setup

The monitoring system consists of:

1. **Sentry Integration** - Main error tracking and monitoring service
2. **Performance Monitoring** - Tracks page load times and browser metrics
3. **User Activity Tracking** - Monitors user engagement and interactions
4. **Component-level Tracking** - Custom hook for tracking component performance

## Getting Started

1. Create a Sentry account at [sentry.io](https://sentry.io)
2. Create a new project and get your DSN
3. Replace `YOUR_SENTRY_DSN` in `src/main.jsx` with your actual DSN

## Key Files

- `src/main.jsx` - Sentry initialization
- `src/monitoring/index.js` - Main monitoring provider and utility functions
- `src/monitoring/PerformanceMonitor.jsx` - Tracks page load and browser metrics
- `src/monitoring/UserActivityTracker.jsx` - Tracks user interactions and session data
- `src/monitoring/useComponentTracker.js` - Custom hook for component-level tracking

## Usage

### Basic Error Tracking

Errors are automatically captured by Sentry. For manual error tracking:

```javascript
import { trackError } from "./monitoring";

try {
  // Your code
} catch (error) {
  trackError(error, {
    context: "Additional context",
    userId: "user-123",
  });
}
```

### Custom Event Tracking

```javascript
import { trackEvent } from "./monitoring";

// Track a custom event
trackEvent("button_click", {
  buttonId: "submit-form",
  section: "contact",
});
```

### Component Performance Tracking

```javascript
import useComponentTracker from "./monitoring/useComponentTracker";

const MyComponent = () => {
  const trackComponent = useComponentTracker("MyComponent");

  const handleClick = () => {
    // Log this interaction
    trackComponent("button-clicked");

    // Your code
  };

  return <button onClick={handleClick}>Click Me</button>;
};
```

## Key Metrics Tracked

### Performance

- Page load time
- Component render time
- Memory usage
- Browser information

### User Engagement

- Session duration
- Page views
- Scroll depth
- Click interactions
- Navigation patterns

### Errors

- JavaScript exceptions
- API request failures
- Component errors (via ErrorBoundary)

## Dashboard

Monitor all these metrics in your Sentry dashboard. Key views include:

1. **Performance** - Page load times and slow transactions
2. **Issues** - Errors and exceptions
3. **User Feedback** - If using Sentry's feedback widget
4. **Release Health** - Crash-free sessions and users

## Customization

Adjust tracking parameters in respective files:

- Sampling rate in `main.jsx`
- Memory tracking interval in `PerformanceMonitor.jsx`
- Interaction tracking in `UserActivityTracker.jsx`
