import { isNgTemplate } from '@angular/compiler';
import {Component, OnInit, EventEmitter, Input, Output} from '@angular/core';
import { Item } from '../../types/Item';

@Component({
  selector: 'data-form',
  templateUrl: './dataForm.component.html',
  styleUrls: ['./dataForm.component.scss']
})

export class DataForm implements OnInit {
  @Output() onItemAdded: EventEmitter<Item> = new EventEmitter<Item>();
  isSong: boolean = false;
  name_in: string = 'zair';
  genre_in: string = 'coke studio';
  creator_in: string = 'Rohail imran';
  type_in: string = 'Book';
  totalTime_in: number = 0;
  

  ngOnInit() {

  }

  onItem(){
    this.onItemAdded.emit({
      id: 0,
      name: this.name_in,
      genre: this.genre_in,
      creator: this.creator_in,
      type: this.type_in,
      totalTime: this.totalTime_in
    })
    console.log("we are setting value after bind custom (onItem) event on add button => " + this.name_in);
  }

  onRadioChange(value){
    value === "Song" ? this.isSong = true : this.isSong = false;
  }

}
// export interface Item {
//   name: string;
//   genre: string;
//   creator: string;
//   type: string;
//   totalTime?: number;
// }
