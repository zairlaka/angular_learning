import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';

import {AppComponent} from './app.component';
import {ColorPickerComponent} from './color-picker/color-picker.component';
import { LengthConverter } from './lengthConverter/lengthConverter.component';
import { DataForm } from './userListApp/dataForm/dataForm.component';
import { DataList } from './userListApp/dataList/dataList.component';
import {HolidayChecker} from './holidayChecker/holidayChecker.component';


@NgModule({
  declarations: [
    AppComponent,
    ColorPickerComponent,
    LengthConverter,
    DataForm,
    DataList,
    HolidayChecker
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
