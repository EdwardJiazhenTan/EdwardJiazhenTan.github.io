import { useEffect } from 'react';
import * as Sentry from '@sentry/react';

const UserActivityTracker = () => {
  useEffect(() => {
    let lastActivity = Date.now();
    let pageViews = 0;
    let scrollDepth = 0;
    
    // Track user session duration
    const updateActivity = () => {
      lastActivity = Date.now();
    };

    // Track page views
    pageViews++;
    Sentry.setContext('engagement', { pageViews });

    // Track scroll depth
    const handleScroll = () => {
      const currentScroll = window.scrollY + window.innerHeight;
      const maxScroll = document.body.scrollHeight;
      const scrollPercentage = Math.round((currentScroll / maxScroll) * 100);
      
      if (scrollPercentage > scrollDepth) {
        scrollDepth = scrollPercentage;
        if (scrollDepth % 25 === 0) { // Log at 25%, 50%, 75%, 100%
          Sentry.addBreadcrumb({
            category: 'ui.scroll',
            message: `Scrolled to ${scrollDepth}%`,
            level: 'info'
          });
        }
      }
    };

    // Track clicks
    const handleClick = (e) => {
      const target = e.target.tagName.toLowerCase();
      const nearestButton = e.target.closest('button');
      const nearestLink = e.target.closest('a');
      const elementInfo = nearestButton 
        ? `button: ${nearestButton.textContent || nearestButton.id || 'unnamed'}`
        : nearestLink
          ? `link: ${nearestLink.href || nearestLink.textContent || nearestLink.id || 'unnamed'}`
          : `${target}`;

      Sentry.addBreadcrumb({
        category: 'ui.click',
        message: `Clicked ${elementInfo}`,
        level: 'info'
      });
    };

    // Update session info before page unload
    const handleBeforeUnload = () => {
      const sessionDuration = Math.round((Date.now() - lastActivity) / 1000);
      Sentry.setContext('session', {
        duration: `${sessionDuration} seconds`,
        maxScrollDepth: `${scrollDepth}%`
      });
    };

    // Event listeners
    window.addEventListener('mousemove', updateActivity);
    window.addEventListener('keypress', updateActivity);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('click', handleClick);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('mousemove', updateActivity);
      window.removeEventListener('keypress', updateActivity);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('click', handleClick);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default UserActivityTracker; 