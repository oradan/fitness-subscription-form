import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[floatinLabels]'
})
export class FloatinLabelsDirective {

  constructor(private elRef:ElementRef) {
    console.log(this.elRef.nativeElement)
   }

}
