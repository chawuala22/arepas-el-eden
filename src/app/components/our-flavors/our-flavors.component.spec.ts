import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurFlavorsComponent } from './our-flavors.component';

describe('OurFlavorsComponent', () => {
  let component: OurFlavorsComponent;
  let fixture: ComponentFixture<OurFlavorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurFlavorsComponent]
    });
    fixture = TestBed.createComponent(OurFlavorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
