import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

import { NgMatIconsComponent } from './ng-mat-icons.component';

@Component({
  template: `<nmi-icon [name]="name" [size]="size"></nmi-icon>`,
})
export class TestHostComponent {
  name: string;
  size: string;
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

    it('should warn when invalid name is given', () => {
      component.name = 'not existing name';
      fixture.detectChanges();

      expect(console.warn).toHaveBeenCalledTimes(1);
      expect(console.warn).toHaveBeenCalledWith(
        'Ng Material Icons: Invalid name given: not existing name'
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

    it('should set size to default md when not given', () => {
      component.name = 'face';
      fixture.detectChanges();

      const icon: HTMLElement = fixture.nativeElement;
      expect(icon.textContent).toBe('face');
      expect(icon.classList.contains('size-sm')).toBe(false);
      expect(icon.classList.contains('size-md')).toBe(true);
      expect(icon.classList.contains('size-lg')).toBe(false);
      expect(icon.classList.contains('size-xl')).toBe(false);
    });

    it('should size class from size input (sm)', () => {
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

    it('should size class from size input (18)', () => {
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

    it('should size class from size input (md)', () => {
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

    it('should size class from size input (24)', () => {
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

    it('should size class from size input (lg)', () => {
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

    it('should size class from size input (36)', () => {
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

    it('should size class from size input (xl)', () => {
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

    it('should size class from size input (48)', () => {
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

    it('should warn when invalid size is given', () => {
      component.name = 'face';
      component.size = '30';
      fixture.detectChanges();

      const icon: HTMLElement = fixture.nativeElement;
      expect(icon.textContent).toBe('face');
      expect(icon.classList.contains('size-sm')).toBe(false);
      expect(icon.classList.contains('size-md')).toBe(true);
      expect(icon.classList.contains('size-lg')).toBe(false);
      expect(icon.classList.contains('size-xl')).toBe(false);
      expect(console.warn).toHaveBeenCalledTimes(1);
      expect(console.warn).toHaveBeenCalledWith(
        'Ng Material Icons: Invalid size given: 30'
      );
      (console.warn as jasmine.Spy).calls.reset();
    });

    it('should not set font-size if set to inherit', () => {
      component.name = 'face';
      component.size = 'inherit';
      fixture.detectChanges();

      const icon: HTMLElement = fixture.nativeElement;
      expect(icon.textContent).toBe('face');
      expect(icon.classList.contains('size-sm')).toBe(false);
      expect(icon.classList.contains('size-md')).toBe(false);
      expect(icon.classList.contains('size-lg')).toBe(false);
      expect(icon.classList.contains('size-xl')).toBe(false);
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
  });
});
