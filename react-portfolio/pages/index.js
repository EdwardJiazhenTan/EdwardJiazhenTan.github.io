import Head from 'next/head';
import About from "../src/pages/About";
import Home from "../src/pages/Home";
import Navbar from "../src/components/Navbar";
import Work from "../src/pages/Work";
import Contact from "../src/pages/Contact";
import Projects from "../src/pages/Projects";
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

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Edward Tan's Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>
        <Navbar />
        <TrackedHome />
        <TrackedWork />
        <TrackedAbout />
        <TrackedProjects />
        <TrackedContact />
      </div>
    </>
  );
}
