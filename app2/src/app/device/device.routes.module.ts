import {NgModule} from '@angular/core';
import {Route, RouterModule, Routes} from '@angular/router';
import {DeviceComponent} from './device.component';

const routes: Routes = [
    {path: '**', component: DeviceComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DeviceRoutesModule {

}
