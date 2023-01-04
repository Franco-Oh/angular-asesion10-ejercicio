import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteC1Component } from './componente-c1.component';

describe('ComponenteC1Component', () => {
  let component: ComponenteC1Component;
  let fixture: ComponentFixture<ComponenteC1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteC1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteC1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
