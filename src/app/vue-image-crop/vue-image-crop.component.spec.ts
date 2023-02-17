import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VueImageCropComponent } from './vue-image-crop.component';

describe('VueImageCropComponent', () => {
  let component: VueImageCropComponent;
  let fixture: ComponentFixture<VueImageCropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VueImageCropComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VueImageCropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
