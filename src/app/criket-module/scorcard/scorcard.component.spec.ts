import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScorcardComponent } from './scorcard.component';

describe('ScorcardComponent', () => {
  let component: ScorcardComponent;
  let fixture: ComponentFixture<ScorcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScorcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScorcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
