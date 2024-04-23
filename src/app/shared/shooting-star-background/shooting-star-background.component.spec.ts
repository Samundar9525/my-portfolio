import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShootingStarBackgroundComponent } from './shooting-star-background.component';

describe('ShootingStarBackgroundComponent', () => {
  let component: ShootingStarBackgroundComponent;
  let fixture: ComponentFixture<ShootingStarBackgroundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShootingStarBackgroundComponent]
    });
    fixture = TestBed.createComponent(ShootingStarBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
