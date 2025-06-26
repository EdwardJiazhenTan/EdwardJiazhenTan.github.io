import '../src/index.css';
import { ParallaxProvider } from "react-scroll-parallax";
import { MonitoringProvider } from "../src/monitoring";
import * as Sentry from "@sentry/react";

// Initialize Sentry with advanced configuration
Sentry.init({
  dsn: "https://36c65bb1e34bb762199c456d6a747423@o4509273191350272.ingest.us.sentry.io/4509475536830464",
  sendDefaultPii: true,
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration()
  ],
  tracesSampleRate: 1.0,
  tracePropagationTargets: ["localhost", /^https:\/\/edwardjiazhentan\.github\.io/],
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
  environment: process.env.NODE_ENV
});

export default function App({ Component, pageProps }) {
  return (
    <Sentry.ErrorBoundary fallback={<p>An error has occurred</p>}>
      <ParallaxProvider>
        <MonitoringProvider>
          <Component {...pageProps} />
        </MonitoringProvider>
      </ParallaxProvider>
    </Sentry.ErrorBoundary>
  );
}
