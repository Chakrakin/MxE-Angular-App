import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceComponent } from './device.component';
import {DeviceRoutesModule} from './device.routes.module';

@NgModule({
  declarations: [DeviceComponent],
  imports: [
    CommonModule,
    DeviceRoutesModule
  ],
})
export class DeviceModule { }
