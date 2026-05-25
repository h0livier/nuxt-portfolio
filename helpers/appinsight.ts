import { ApplicationInsights } from '@microsoft/applicationinsights-web'

export const useAppInsights = () => {
  const appInsights = new ApplicationInsights({ config: {
    connectionString: 'InstrumentationKey=aac73a8b-510f-4525-843a-e54cbbbe14eb;IngestionEndpoint=https://westeurope-5.in.applicationinsights.azure.com/;LiveEndpoint=https://westeurope.livediagnostics.monitor.azure.com/;ApplicationId=7af01294-4236-42da-ac72-6850cb146164'
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