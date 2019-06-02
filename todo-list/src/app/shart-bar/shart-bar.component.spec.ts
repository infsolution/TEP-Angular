import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShartBarComponent } from './shart-bar.component';

describe('ShartBarComponent', () => {
  let component: ShartBarComponent;
  let fixture: ComponentFixture<ShartBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShartBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShartBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
