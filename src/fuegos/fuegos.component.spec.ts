import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuegosComponent } from './fuegos.component';

describe('FuegosComponent', () => {
  let component: FuegosComponent;
  let fixture: ComponentFixture<FuegosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FuegosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
