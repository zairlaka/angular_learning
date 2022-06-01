
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'length-converter',
  templateUrl: './lengthConverter.component.html',
  styleUrls: ['./lengthConverter.component.scss']
})
export class LengthConverter implements OnInit {
  left: any = 0;
  right: any = 0;
  left_unit: string = 'km';
  right_unit: string = 'km';

  changed(value, unit){
    console.log("%cleft_unit -> " + this.left_unit, 'background-color: yellow;');
    console.log("right_unit -> " + this.right_unit);
    console.log("unit -> " + unit);
    console.log("value -> " + value);
    var cal = 0;
    if (value) {
      if (unit === 'left'){
        if (this.left_unit === 'km' && this.right_unit === 'm')
          { cal = value * 1000 }
        else if (this.left_unit === 'km' && this.right_unit === 'cm')
          { cal = value * 1000 * 100 }
        else if (this.left_unit === 'm' && this.right_unit === 'km')
          { cal = value / 1000 }
        else if (this.left_unit === 'm' && this.right_unit === 'cm')
          { cal = value * 100 }
        else if (this.left_unit === 'cm' && this.right_unit === 'km')
          { cal = value / 1000 / 100 }
        else if (this.left_unit === 'cm' && this.right_unit === 'm')
          { cal = value / 1000 }
        else { cal = value * 1; }
        this.right = cal;
      } else {
        if (this.right_unit === 'km' && this.left_unit === 'm')
          { cal = value * 1000 }
        else if (this.right_unit === 'km' && this.left_unit === 'cm')
          { cal = value * 1000 * 100 }
        else if (this.right_unit === 'm' && this.left_unit === 'km')
          { cal = value / 1000 }
        else if (this.right_unit === 'm' && this.left_unit === 'cm')
          { cal = value * 100 }
        else if (this.right_unit === 'cm' && this.left_unit === 'm')
          { cal = value / 100 }
        else if (this.right_unit === 'cm' && this.left_unit === 'km')
          { cal = value / 1000 / 100 }
        else { cal = value * 1; }
        this.left = cal;
      }
    } else {
      this.left = 0;
      this.right = 0;
    }
  }

  lengthOptions = [
    {
      id: 0,
      label: 'Kilometre',
      unit: 'km'
    },
    {
      id: 1,
      label: 'Metre',
      unit: 'm'
    },
    {
      id: 2,
      label: 'Centimetre',
      unit: 'cm'
    }
  ];

  ngOnInit() {

  }
}
