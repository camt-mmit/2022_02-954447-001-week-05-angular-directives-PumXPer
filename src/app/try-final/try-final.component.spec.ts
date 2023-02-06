import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TryFinalComponent } from './try-final.component';

describe('TryFinalComponent', () => {
  let component: TryFinalComponent;
  let fixture: ComponentFixture<TryFinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TryFinalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TryFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
