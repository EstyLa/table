import { Component } from '@angular/core';
import { DataService } from '../../data.service'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  scheme$!: Observable<any>;
  headers: Array<string> = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.scheme$ = this.dataService.getData();
    this.scheme$.subscribe(x => console.log(x))
    this.scheme$.subscribe((results) => {
      results.forEach((result: any) => {
        let array = [];
        array.push(...result.cells.map((x: { header: any; }) => x = x.header));
        const set = new Set(array);
        this.headers = Array.from(set);
      });
    });
  }
  }


