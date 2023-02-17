import { NgModule } from '@angular/core';
import { BrowserModule, HAMMER_GESTURE_CONFIG, HammerModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AppNgCropImageComponent} from "./app-ng-crop-image/app-ng-crop-image.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LyHammerGestureConfig, LY_THEME, LY_THEME_NAME, StyleRenderer, LyTheme2 } from '@alyle/ui';
import { MinimaLight } from '@alyle/ui/themes/minima';
import { VueImageCropComponent } from './vue-image-crop/vue-image-crop.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    AppNgCropImageComponent,
    VueImageCropComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HammerModule,
  ],
  providers: [{ provide: HAMMER_GESTURE_CONFIG, useClass: LyHammerGestureConfig }, StyleRenderer, LyTheme2, { provide: LY_THEME_NAME, useValue: 'minima-light' }, { provide: LY_THEME, useClass: MinimaLight, multi: true }]
})
export class AppModule { }
