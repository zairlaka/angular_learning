import {Component} from '@angular/core';
import { Item } from './types/Item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  colorOptions: string[] = ['#5d77f5', '#0fd085', '#ffba5b', '#f95e62', 'lightpink'];
  initialColor: string = 'black';

  // ========== user list book or song
  Book: string = 'Book';
  Song: string = 'Song';

  books: Item[] = [{id: 1, name: "zair", genre: "pop", creator: "MJ", type: "Book"}];
  songs: Item[] = [];
  name: string;
  genre: string;
  creator: string;
  type: string;
  totalTime?: number;

  onItemAdded(item) {
    console.log('onItemAdded item-> ' + item)
    if(item.type === "Book"){
      debugger
      let id = !this.books.length == true ? 1 : this.books[this.books.length -1 ].id + 1;
      this.books.push({
        id: id,
        name: item.name,
        genre: item.genre,
        creator: item.creator,
        type: item.type
      });
    }else {
      let id = !this.songs.length == true ? 1 : this.songs[this.songs.length -1 ].id + 1;
      this.songs.push({
        id: id,
        name: item.name,
        genre: item.genre,
        creator: item.creator,
        type: item.type,
        totalTime: item.totalTime
      });
    }
  }


  onItemDelete(item) {
    console.log(item);
    console.log('Delete is working')
    if(item.type === "Book"){
      this.books = this.books.filter(i => {
        if(i.id !== item.id){
          return i;
        }
      });
    }else {
      this.songs = this.songs.filter(i => {
        if(i.id !== item.id){
          return i;
        }
      });
    }
  }

  // ========== holiday checker
  title = 'Holiday Checker';

  holidayList: Holiday[] = [{
    date: '01-01-2021',
    name: "New Year's Day",
    day: 'Friday'
  },
  {
    date: '02-15-2021',
    name: "President's Day",
    day: 'Monday'
  },
  {
    date: '05-09-2021',
    name: "Mother's Day",
    day: 'Sunday'
  },
  {
    date: '07-04-2021',
    name: "Independence Day",
    day: 'Sunday'
  },
  {
    date: '09-06-2021',
    name: "Labor Day",
    day: 'Monday'
  },
  {
    date: '10-11-2021',
    name: "Columbus Day",
    day: 'Monday'
  },
  {
    date: '12-25-2021',
    name: "Christmas Day",
    day: 'Saturday'
  }]
}

export interface Holiday {
  date: string;
  name: string;
  day: string;
}