import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNgCropImageComponent } from './app-ng-crop-image.component';

describe('AppNgCropImageComponent', () => {
  let component: AppNgCropImageComponent;
  let fixture: ComponentFixture<AppNgCropImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppNgCropImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppNgCropImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
