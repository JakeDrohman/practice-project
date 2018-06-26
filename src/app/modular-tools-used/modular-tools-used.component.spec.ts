import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModularToolsUsedComponent } from './modular-tools-used.component';

describe('ModularToolsUsedComponent', () => {
  let component: ModularToolsUsedComponent;
  let fixture: ComponentFixture<ModularToolsUsedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModularToolsUsedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModularToolsUsedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
