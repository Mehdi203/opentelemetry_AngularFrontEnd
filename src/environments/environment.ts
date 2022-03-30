import { DiagLogLevel } from '@opentelemetry/api';
import {
  OpenTelemetryConfig
} from '@jufab/opentelemetry-angular-interceptor';

interface IEnvironment {
  production: boolean;
  urlTest: string;
  openTelemetryConfig: OpenTelemetryConfig;
}

// Example to configure the angular-interceptor library
export const environment: IEnvironment = {
  production: false,
  urlTest: 'http://localhost:4200',
  openTelemetryConfig: {
    commonConfig: {
      console: true, // Display trace on console
      production: true, // Send Trace with BatchSpanProcessor (true) or SimpleSpanProcessor (false)
      serviceName: 'instrumentation-example', // Service name send in trace
      probabilitySampler: '1', // 75% sampling
      logLevel: DiagLogLevel.ALL //ALL Log, DiagLogLevel is an Enum from @opentelemetry/api
    },
    zipkinConfig: {
      url: 'http://localhost:9411/api/v2/spans'
    },
    b3PropagatorConfig: {
      multiHeader: '0' //Value : 'O' (single), '1' (multi)
    },
    instrumentationConfig: {
      xmlHttpRequest: true,
      fetch: true,
      documentLoad: true,
    }
  }
};

// import { ZipkinCollectorConfig } from '../../../../dist/opentelemetry-interceptor/lib/configuration/opentelemetry-config';
//import { zipkinConfig } from '../../../opentelemetry-interceptor/__mocks__/data/config.mock';

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.