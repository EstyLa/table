import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { TableRowComponent } from './components/table-row/table-row.component';
import { TableCellComponent } from './components/table-cell/table-cell.component';
import { TextCellComponent } from './components/text-cell/text-cell.component';
import { CheckboxCellComponent } from './components/checkbox-cell/checkbox-cell.component';
import { ImageCellComponent } from './components/image-cell/image-cell.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TableRowComponent,
    TableCellComponent,
    TextCellComponent,
    CheckboxCellComponent,
    ImageCellComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
