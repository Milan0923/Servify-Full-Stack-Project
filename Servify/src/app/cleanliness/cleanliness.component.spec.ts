import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanlinessComponent } from './cleanliness.component';

describe('CleanlinessComponent', () => {
  let component: CleanlinessComponent;
  let fixture: ComponentFixture<CleanlinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CleanlinessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CleanlinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
