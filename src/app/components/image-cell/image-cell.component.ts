import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-cell',
  templateUrl: './image-cell.component.html',
  styleUrls: ['./image-cell.component.scss']
})
export class ImageCellComponent {
  @Input() value: string = '';
}
