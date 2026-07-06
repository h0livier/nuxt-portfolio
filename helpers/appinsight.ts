import { ApplicationInsights } from '@microsoft/applicationinsights-web'

export const useAppInsights = () => {
  const appInsights = new ApplicationInsights({ config: {
    connectionString: 'InstrumentationKey=bf3e35c3-9ac8-4484-af62-8a2884950fd8;IngestionEndpoint=https://westeurope-5.in.applicationinsights.azure.com/;LiveEndpoint=https://westeurope.livediagnostics.monitor.azure.com/;ApplicationId=cc12fe65-e7ca-464a-8c4b-382e34c42263'
  }});

  appInsights.loadAppInsights();

  const trackPageView = (name: string, uri: string) => {
    appInsights.startTrackPage(name);
    appInsights.trackPageView({ name, uri });
  };

  const trackTrace = (message: string) => {
    appInsights.trackTrace({ message });
  };

  const trackEvent = (message: string) => {
    appInsights.trackEvent({ name: message });
  }

  return {
    trackPageView,
    trackTrace,
    trackEvent
  };
}