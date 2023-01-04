import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteC2Component } from './componente-c2.component';

describe('ComponenteC2Component', () => {
  let component: ComponenteC2Component;
  let fixture: ComponentFixture<ComponenteC2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteC2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteC2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
