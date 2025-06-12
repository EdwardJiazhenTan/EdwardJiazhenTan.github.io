import About from "./pages/About";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import { MonitoringProvider } from "./monitoring";
import * as Sentry from "@sentry/react";

// Create a higher order component with Sentry performance monitoring
const withSentryRouteTracing = (Component, routeName) => {
  return () => {
    // This lets Sentry know when routes change
    Sentry.addBreadcrumb({
      category: 'navigation',
      message: `Visited ${routeName}`,
      level: 'info'
    });
    
    return <Component />;
  };
};

// Wrap components with route tracing
const TrackedHome = withSentryRouteTracing(Home, "Home");
const TrackedWork = withSentryRouteTracing(Work, "Work");
const TrackedAbout = withSentryRouteTracing(About, "About");
const TrackedProjects = withSentryRouteTracing(Projects, "Projects");
const TrackedContact = withSentryRouteTracing(Contact, "Contact");

function App() {
  return (
    <MonitoringProvider>
      <div>
        <Navbar />
        <TrackedHome />
        <TrackedWork />
        <TrackedAbout />
        <TrackedProjects />
        <TrackedContact />
      </div>
    </MonitoringProvider>
  );
}

export default App;
