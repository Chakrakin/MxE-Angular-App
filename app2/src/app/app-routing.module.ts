import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import {WorkPlanComponent} from './work-plan/work-plan.component';

const routes: Routes = [
  { path: 'workplan', component: WorkPlanComponent },
  { path: 'devices', loadChildren: () => import('./device/device.module').then(m => m.DeviceModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/app2'},
  ]
})
export class AppRoutingModule { }
