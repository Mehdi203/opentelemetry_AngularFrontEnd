import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  ZipkinExporterModule,
  CompositePropagatorModule,
  OtelWebTracerModule,
} from '@jufab/opentelemetry-angular-interceptor';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ZipkinExporterModule,
    BrowserModule,
    AppRoutingModule,
    //Insert propagator module
    CompositePropagatorModule,
    OtelWebTracerModule.forRoot(environment.openTelemetryConfig),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


