import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

import { NgMatIconsComponent } from './ng-mat-icons.component';

@Component({
  template: `<nmi-icon [name]="name" [size]="size" [color]="color" [inactive]="inactive"></nmi-icon>`,
})
export class TestHostComponent {
  name: string;
  size: string;
  color: string;
  inactive: boolean;
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
      spyOn(console, 'warn').and.callFake(() => {});
      fixture = TestBed.createComponent(NgMatIconsComponent);
      component = fixture.componentInstance;
    });

    afterEach(() => {
      expect(console.warn).toHaveBeenCalledTimes(0);
    });

    it('should create', () => {
      fixture.detectChanges();
      expect(component).toBeTruthy();
    });

    it('should display icon from name', () => {
      component.name = 'face';
      fixture.detectChanges();

      expect(fixture.nativeElement.textContent).toBe('face');
    });

    it('should display icon from uppercase name', () => {
      component.name = 'FACE';
      fixture.detectChanges();

      expect(fixture.nativeElement.textContent).toBe('face');
    });

    it('should warn when invalid name is set', () => {
      component.name = 'not existing name';
      fixture.detectChanges();

      expect(console.warn).toHaveBeenCalledTimes(1);
      expect(console.warn).toHaveBeenCalledWith(
        'Ng Material Icons: Invalid name: not existing name'
      );
      expect(fixture.nativeElement.textContent).toBe('');
      (console.warn as jasmine.Spy).calls.reset();
    });

    it('should display icon when numeric character reference is given', () => {
      component.name = '&#xe855;';
      fixture.detectChanges();

      expect(fixture.nativeElement.textContent).toBe('&#xe855;');
    });

    it('should display icon when numeric character reference is given in uppercase', () => {
      component.name = '&#XE855;';
      fixture.detectChanges();

      expect(fixture.nativeElement.textContent).toBe('&#xe855;');
    });

    it('should display icon when code point is given', () => {
      component.name = 'e855';
      fixture.detectChanges();

      expect(fixture.nativeElement.textContent).toBe('&#xe855;');
    });

    it('should set aria-hidden to true when no label is given', () => {
      component.name = 'face';
      fixture.detectChanges();

      const icon: HTMLElement = fixture.nativeElement;
      expect(icon.textContent).toBe('face');
      expect(icon.attributes.getNamedItem('aria-hidden').value).toBe('true');
    });

    it('should set aria-label when label is set and aria-hidden should not be set', () => {
      component.name = 'face';
      component.label = 'Person';
      fixture.detectChanges();

      const icon: HTMLElement = fixture.nativeElement;
      expect(icon.textContent).toBe('face');
      expect(icon.attributes.getNamedItem('aria-label').value).toBe('Person');
      expect(icon.attributes.getNamedItem('aria-hidden').value).toBe('false');
    });

    it('should not set size by default', () => {
      component.name = 'face';
      fixture.detectChanges();

      const icon: HTMLElement = fixture.nativeElement;
      expect(icon.textContent).toBe('face');
      expect(icon.classList.contains('size-sm')).toBe(false);
      expect(icon.classList.contains('size-md')).toBe(false);
      expect(icon.classList.contains('size-lg')).toBe(false);
      expect(icon.classList.contains('size-xl')).toBe(false);
    });

    it('should set size class from size input (sm)', () => {
      component.name = 'face';
      component.size = 'sm';
      fixture.detectChanges();

      const icon: HTMLElement = fixture.nativeElement;
      expect(icon.textContent).toBe('face');
      expect(icon.classList.contains('size-sm')).toBe(true);
      expect(icon.classList.contains('size-md')).toBe(false);
      expect(icon.classList.contains('size-lg')).toBe(false);
      expect(icon.classList.contains('size-xl')).toBe(false);
    });

    it('should set size class from size input (18)', () => {
      component.name = 'face';
      component.size = '18';
      fixture.detectChanges();

      const icon: HTMLElement = fixture.nativeElement;
      expect(icon.textContent).toBe('face');
      expect(icon.classList.contains('size-sm')).toBe(true);
      expect(icon.classList.contains('size-md')).toBe(false);
      expect(icon.classList.contains('size-lg')).toBe(false);
      expect(icon.classList.contains('size-xl')).toBe(false);
    });

    it('should set size class from size input (md)', () => {
      component.name = 'face';
      component.size = 'md';
      fixture.detectChanges();

      const icon: HTMLElement = fixture.nativeElement;
      expect(icon.textContent).toBe('face');
      expect(icon.classList.contains('size-sm')).toBe(false);
      expect(icon.classList.contains('size-md')).toBe(true);
      expect(icon.classList.contains('size-lg')).toBe(false);
      expect(icon.classList.contains('size-xl')).toBe(false);
    });

    it('should set size class from size input (24)', () => {
      component.name = 'face';
      component.size = '24';
      fixture.detectChanges();

      const icon: HTMLElement = fixture.nativeElement;
      expect(icon.textContent).toBe('face');
      expect(icon.classList.contains('size-sm')).toBe(false);
      expect(icon.classList.contains('size-md')).toBe(true);
      expect(icon.classList.contains('size-lg')).toBe(false);
      expect(icon.classList.contains('size-xl')).toBe(false);
    });

    it('should set size class from size input (lg)', () => {
      component.name = 'face';
      component.size = 'lg';
      fixture.detectChanges();

      const icon: HTMLElement = fixture.nativeElement;
      expect(icon.textContent).toBe('face');
      expect(icon.classList.contains('size-sm')).toBe(false);
      expect(icon.classList.contains('size-md')).toBe(false);
      expect(icon.classList.contains('size-lg')).toBe(true);
      expect(icon.classList.contains('size-xl')).toBe(false);
    });

    it('should set size class from size input (36)', () => {
      component.name = 'face';
      component.size = '36';
      fixture.detectChanges();

      const icon: HTMLElement = fixture.nativeElement;
      expect(icon.textContent).toBe('face');
      expect(icon.classList.contains('size-sm')).toBe(false);
      expect(icon.classList.contains('size-md')).toBe(false);
      expect(icon.classList.contains('size-lg')).toBe(true);
      expect(icon.classList.contains('size-xl')).toBe(false);
    });

    it('should set size class from size input (xl)', () => {
      component.name = 'face';
      component.size = 'xl';
      fixture.detectChanges();

      const icon: HTMLElement = fixture.nativeElement;
      expect(icon.textContent).toBe('face');
      expect(icon.classList.contains('size-sm')).toBe(false);
      expect(icon.classList.contains('size-md')).toBe(false);
      expect(icon.classList.contains('size-lg')).toBe(false);
      expect(icon.classList.contains('size-xl')).toBe(true);
    });

    it('should set size class from size input (48)', () => {
      component.name = 'face';
      component.size = '48';
      fixture.detectChanges();

      const icon: HTMLElement = fixture.nativeElement;
      expect(icon.textContent).toBe('face');
      expect(icon.classList.contains('size-sm')).toBe(false);
      expect(icon.classList.contains('size-md')).toBe(false);
      expect(icon.classList.contains('size-lg')).toBe(false);
      expect(icon.classList.contains('size-xl')).toBe(true);
    });

    it('should warn when invalid size is set', () => {
      component.name = 'face';
      component.size = '30';
      fixture.detectChanges();

      const icon: HTMLElement = fixture.nativeElement;
      expect(icon.textContent).toBe('face');
      expect(icon.classList.contains('size-sm')).toBe(false);
      expect(icon.classList.contains('size-md')).toBe(false);
      expect(icon.classList.contains('size-lg')).toBe(false);
      expect(icon.classList.contains('size-xl')).toBe(false);
      expect(console.warn).toHaveBeenCalledTimes(1);
      expect(console.warn).toHaveBeenCalledWith(
        'Ng Material Icons: Invalid size: 30'
      );
      (console.warn as jasmine.Spy).calls.reset();
    });

    it('should set color to dark', () => {
      component.name = 'face';
      component.color = 'dark';
      fixture.detectChanges();

      const icon: HTMLElement = fixture.nativeElement;
      expect(icon.textContent).toBe('face');
      expect(icon.classList.contains('dark')).toBe(true);
      expect(icon.classList.contains('light')).toBe(false);
      expect(icon.classList.contains('inactive')).toBe(false);
    });

    it('should set color to dark and inactive', () => {
      component.name = 'face';
      component.color = 'dark';
      component.inactive = true;
      fixture.detectChanges();

      const icon: HTMLElement = fixture.nativeElement;
      expect(icon.textContent).toBe('face');
      expect(icon.classList.contains('dark')).toBe(true);
      expect(icon.classList.contains('light')).toBe(false);
      expect(icon.classList.contains('inactive')).toBe(true);
    });

    it('should set color to light', () => {
      component.name = 'face';
      component.color = 'light';
      fixture.detectChanges();

      const icon: HTMLElement = fixture.nativeElement;
      expect(icon.textContent).toBe('face');
      expect(icon.classList.contains('dark')).toBe(false);
      expect(icon.classList.contains('light')).toBe(true);
      expect(icon.classList.contains('inactive')).toBe(false);
    });

    it('should set color to dark and inactive', () => {
      component.name = 'face';
      component.color = 'light';
      component.inactive = true;
      fixture.detectChanges();

      const icon: HTMLElement = fixture.nativeElement;
      expect(icon.textContent).toBe('face');
      expect(icon.classList.contains('dark')).toBe(false);
      expect(icon.classList.contains('light')).toBe(true);
      expect(icon.classList.contains('inactive')).toBe(true);
    });

    it('should warn if invalid color', () => {
      component.name = 'face';
      component.color = 'blue';
      fixture.detectChanges();

      const icon: HTMLElement = fixture.nativeElement;
      expect(icon.textContent).toBe('face');
      expect(icon.classList.contains('dark')).toBe(false);
      expect(icon.classList.contains('light')).toBe(false);
      expect(icon.classList.contains('inactive')).toBe(false);
      expect(console.warn).toHaveBeenCalledTimes(1);
      expect(console.warn).toHaveBeenCalledWith(
        'Ng Material Icons: Invalid color: blue'
      );
      (console.warn as jasmine.Spy).calls.reset();
    });

    it('should warn if inactive is set without color', () => {
      component.name = 'face';
      component.inactive = true;
      fixture.detectChanges();

      const icon: HTMLElement = fixture.nativeElement;
      expect(icon.textContent).toBe('face');
      expect(icon.classList.contains('dark')).toBe(false);
      expect(icon.classList.contains('light')).toBe(false);
      expect(icon.classList.contains('inactive')).toBe(false);
      expect(console.warn).toHaveBeenCalledTimes(1);
      expect(console.warn).toHaveBeenCalledWith(
        'Ng Material Icons: Color must be set for inactive'
      );
      (console.warn as jasmine.Spy).calls.reset();
    });
  });

  // Need to test inside host component for ChangeDetection.OnPush
  // https://github.com/angular/angular/issues/12313
  describe('inside HostComponent', () => {
    let component: TestHostComponent;
    let fixture: ComponentFixture<TestHostComponent>;

    beforeEach(() => {
      spyOn(console, 'warn');
      fixture = TestBed.createComponent(TestHostComponent);
      component = fixture.componentInstance;
    });

    afterEach(() => {
      expect(console.warn).toHaveBeenCalledTimes(0);
    });

    it('should update icon when name is updated', () => {
      component.name = 'fullscreen';
      fixture.detectChanges();
      expect(fixture.nativeElement.textContent).toBe('fullscreen');

      component.name = 'e156';
      fixture.detectChanges();
      expect(fixture.nativeElement.textContent).toBe('&#xe156;');
    });

    it('should update icon size', () => {
      component.name = 'fullscreen';
      component.size = 'sm';
      fixture.detectChanges();

      const icon: HTMLElement = fixture.nativeElement.querySelector('nmi-icon');
      expect(icon.classList.contains('size-sm')).toBe(true);
      expect(icon.classList.contains('size-lg')).toBe(false);

      component.size = 'lg';
      fixture.detectChanges();
      expect(icon.classList.contains('size-sm')).toBe(false);
      expect(icon.classList.contains('size-lg')).toBe(true);
    });

    it('should update icon color', () => {
      component.name = 'fullscreen';
      component.color = 'dark';
      fixture.detectChanges();

      const icon: HTMLElement = fixture.nativeElement.querySelector('nmi-icon');
      expect(icon.classList.contains('dark')).toBe(true);
      expect(icon.classList.contains('light')).toBe(false);

      component.color = 'light';
      fixture.detectChanges();
      expect(icon.classList.contains('dark')).toBe(false);
      expect(icon.classList.contains('light')).toBe(true);
    });

    it('should update icon inactivity', () => {
      component.name = 'fullscreen';
      component.color = 'dark';
      component.inactive = false;
      fixture.detectChanges();

      const icon: HTMLElement = fixture.nativeElement.querySelector('nmi-icon');
      expect(icon.classList.contains('dark')).toBe(true);
      expect(icon.classList.contains('light')).toBe(false);
      expect(icon.classList.contains('inactive')).toBe(false);

      component.inactive = true;
      fixture.detectChanges();
      expect(icon.classList.contains('dark')).toBe(true);
      expect(icon.classList.contains('light')).toBe(false);
      expect(icon.classList.contains('inactive')).toBe(true);
    });
  });
});
