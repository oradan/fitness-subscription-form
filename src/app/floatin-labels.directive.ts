import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[floatingLabels]'
})
export class FloatinLabelsDirective {

  constructor(private elRef: ElementRef) { }
  @HostListener('focus', ['$event.srcElement.labels[0]'])
  onFocus(el) {
    el.classList.add("focused")
  }
  @HostListener('blur', ['$event.srcElement.labels[0]'])
  onBlur(el) {
    this.elRef.nativeElement.value.replace(/\s/g, "");
    console.log(this.elRef.nativeElement.value === "")
    console.log(this.elRef.nativeElement.value.replace(/\s/g, "").length)
    if (this.elRef.nativeElement.value === "") {
      el.classList.remove("focused");
    }
  }
}
