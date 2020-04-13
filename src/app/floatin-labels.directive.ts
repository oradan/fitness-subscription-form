import { Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';


@Directive({
  selector: '[floatingLabels]'
})
export class FloatinLabelsDirective implements OnInit {
  @Input('floatingLabels') bindingEl: any;
  _submmitted: boolean;
  label = this.elRef.nativeElement.previousElementSibling;

  constructor(private elRef: ElementRef) { }

  ngOnInit() { this.initDirective() }

  @Input()
  set reset(sub: boolean) {
    this.label.classList.remove("focused")
  };
  @HostListener('focus') onFocus() { this.addClassFocused() }
  @HostListener('blur') onBlur() { this.removeClassFocused() }
  @HostListener('change') onChange() { this.initDirective()}
  //this.bindingEl[propName].length > 0 in case when the filds are prefield by another service
  private initDirective() {
    let propName = this.elRef.nativeElement.name;
    if ((this.elRef.nativeElement.value.length || this.bindingEl[propName].length > 0)) {
      this.label.classList.add("focused")
    } else { this.label.classList.remove("focused"); }
  }

  private addClassFocused() {
    this.label.classList.add("focused")
  }

  private removeClassFocused() {
    let val = this.elRef.nativeElement.value.replace(/^\s*[^\S]/mig, "");
    this.elRef.nativeElement.value = val;
    if (this.elRef.nativeElement.value === "") {
      this.label.classList.remove("focused");
    }
  }
}
