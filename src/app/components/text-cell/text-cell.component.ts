import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-cell',
  templateUrl: './text-cell.component.html',
  styleUrls: ['./text-cell.component.scss']
})
export class TextCellComponent {
  @Input() value: string = '';
}
