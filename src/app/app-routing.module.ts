import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppNgCropImageComponent} from "./app-ng-crop-image/app-ng-crop-image.component";

const routes: Routes = [
  {
    path: 'app-ng-crop-image',
    component: AppNgCropImageComponent
  },

  { path: '', redirectTo: 'app-ng-crop-image', pathMatch: 'full' },
  { path: '**', redirectTo: 'app-ng-crop-image' },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
