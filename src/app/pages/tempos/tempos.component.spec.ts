import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemposComponent } from './tempos.component';

describe('TemposComponent', () => {
  let component: TemposComponent;
  let fixture: ComponentFixture<TemposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TemposComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
