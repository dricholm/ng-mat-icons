import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgMatIconsComponent } from './ng-mat-icons.component';

describe('NgMatIconsComponent', () => {
  let component: NgMatIconsComponent;
  let fixture: ComponentFixture<NgMatIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgMatIconsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgMatIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
