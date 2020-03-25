import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeinnerline'
})
export class RemoveinnerlinePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.replace(/[-]+/mig," ").replace(/\b(\w)/mig,(e)=>e.toUpperCase())
  }

}
