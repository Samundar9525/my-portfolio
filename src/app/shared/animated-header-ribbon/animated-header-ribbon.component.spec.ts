import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedHeaderRibbonComponent } from './animated-header-ribbon.component';

describe('AnimatedHeaderRibbonComponent', () => {
  let component: AnimatedHeaderRibbonComponent;
  let fixture: ComponentFixture<AnimatedHeaderRibbonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimatedHeaderRibbonComponent]
    });
    fixture = TestBed.createComponent(AnimatedHeaderRibbonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
