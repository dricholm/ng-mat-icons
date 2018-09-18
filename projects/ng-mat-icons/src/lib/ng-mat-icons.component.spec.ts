import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

import { NgMatIconsComponent } from './ng-mat-icons.component';

@Component({
  template: `<nmi-icon [name]="name"></nmi-icon>`,
})
export class TestHostComponent {
  name: string;
}

describe('NgMatIconsComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgMatIconsComponent, TestHostComponent],
    }).compileComponents();
  }));

  describe('standalone', () => {
    let component: NgMatIconsComponent;
    let fixture: ComponentFixture<NgMatIconsComponent>;

    beforeEach(() => {
      fixture = TestBed.createComponent(NgMatIconsComponent);
      component = fixture.componentInstance;
    });

    it('should create', () => {
      fixture.detectChanges();
      expect(component).toBeTruthy();
    });

    it('should display icon from name', () => {
      component.name = 'face';
      fixture.detectChanges();

      expect(
        fixture.nativeElement.querySelector('i.material-icons').textContent
      ).toBe('face');
    });

    it('should display icon from uppercase name', () => {
      component.name = 'FACE';
      fixture.detectChanges();

      expect(
        fixture.nativeElement.querySelector('i.material-icons').textContent
      ).toBe('face');
    });

    it('should warn when invalid name is given', () => {
      spyOn(console, 'warn').and.callFake(() => {});
      component.name = 'not existing name';
      fixture.detectChanges();

      expect(console.warn).toHaveBeenCalledTimes(1);
      expect(console.warn).toHaveBeenCalledWith(
        'Ng Material Icons: Invalid name given: not existing name'
      );
      expect(
        fixture.nativeElement.querySelector('i.material-icons').textContent
      ).toBe('');
    });

    it('should display icon when numeric character reference is given', () => {
      component.name = '&#xe855;';
      fixture.detectChanges();

      expect(
        fixture.nativeElement.querySelector('i.material-icons').textContent
      ).toBe('&#xe855;');
    });

    it('should display icon when numeric character reference is given in uppercase', () => {
      component.name = '&#XE855;';
      fixture.detectChanges();

      expect(
        fixture.nativeElement.querySelector('i.material-icons').textContent
      ).toBe('&#xe855;');
    });

    it('should display icon when code point is given', () => {
      component.name = 'e855';
      fixture.detectChanges();

      expect(
        fixture.nativeElement.querySelector('i.material-icons').textContent
      ).toBe('&#xe855;');
    });

    it('should set aria-hidden to true when no label is given', () => {
      component.name = 'face';
      fixture.detectChanges();

      const icon: HTMLElement = fixture.nativeElement.querySelector(
        'i.material-icons'
      );
      expect(icon.textContent).toBe('face');
      expect(icon.attributes.getNamedItem('aria-hidden').value).toBe('true');
    });

    it('should set aria-label when label is set and aria-hidden should not be set', () => {
      component.name = 'face';
      component.label = 'Person';
      fixture.detectChanges();

      const icon: HTMLElement = fixture.nativeElement.querySelector(
        'i.material-icons'
      );
      expect(icon.textContent).toBe('face');
      expect(icon.attributes.getNamedItem('aria-label').value).toBe('Person');
      expect(icon.attributes.getNamedItem('aria-hidden').value).toBe('false');
    });
  });

  // Need to test inside host component for ChangeDetection.OnPush
  // https://github.com/angular/angular/issues/12313
  describe('inside HostComponent', () => {
    let component: TestHostComponent;
    let fixture: ComponentFixture<TestHostComponent>;

    beforeEach(() => {
      fixture = TestBed.createComponent(TestHostComponent);
      component = fixture.componentInstance;
    });

    it('should update icon when name is updated', () => {
      component.name = 'fullscreen';
      fixture.detectChanges();
      expect(
        fixture.nativeElement.querySelector('i.material-icons').textContent
      ).toBe('fullscreen');

      component.name = 'e156';
      fixture.detectChanges();
      expect(
        fixture.nativeElement.querySelector('i.material-icons').textContent
      ).toBe('&#xe156;');
    });
  });
});
