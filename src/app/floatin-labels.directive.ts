import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';


@Directive({
  selector: '[floatingLabels]'
})
export class FloatinLabelsDirective implements OnInit {
  @Input('floatingLabels') bindinEl: any;
  
  label = this.elRef.nativeElement.previousElementSibling;

  constructor(private elRef: ElementRef) { }

  ngOnInit() { this.initDirective() }

  @HostListener('focus') onFocus() { this.addClassFocused() }
  @HostListener('blur') onBlur() { this.removeClassFocused() }

  private initDirective() {
    let propName = this.elRef.nativeElement.name;
    if ((this.elRef.nativeElement.value.length || this.bindinEl[propName].length > 0)) {
      this.label.classList.add("focused")
    }
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
