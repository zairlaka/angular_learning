import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Item} from "../../types/Item";

@Component({
  selector: 'data-list',
  templateUrl: './dataList.component.html',
  styleUrls: ['./dataList.component.scss']
})
export class DataList implements OnInit {
  @Input() dataList: Item[];
  @Input() dataType: string;
  @Output() onItemDelete: EventEmitter<Item> = new EventEmitter<Item>();

  onDeleteClick(item){
    console.log("click on bin")// + index + type);
    this.onItemDelete.emit(item);
  }


  ngOnInit() {

  }
}
