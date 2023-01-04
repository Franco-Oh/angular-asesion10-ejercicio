import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteC3Component } from './componente-c3.component';

describe('ComponenteC3Component', () => {
  let component: ComponenteC3Component;
  let fixture: ComponentFixture<ComponenteC3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteC3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteC3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
