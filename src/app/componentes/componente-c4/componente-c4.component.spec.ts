import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteC4Component } from './componente-c4.component';

describe('ComponenteC4Component', () => {
  let component: ComponenteC4Component;
  let fixture: ComponentFixture<ComponenteC4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteC4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteC4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
