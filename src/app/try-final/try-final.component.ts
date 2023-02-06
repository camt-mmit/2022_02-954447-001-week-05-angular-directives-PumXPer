import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-try-final',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './try-final.component.html',
  styleUrls: ['./try-final.component.scss']
})
export class TryFinalComponent {
  items = [{value:0}, {value:0}];

  onChange(index: number, value: number):void {
    this.items[index].value = value;
    console.log(index,value,this.items);
  }

  add():void {
    this.items.push({value:0});
  }

  delete(index: number):void {
    this.items.splice(index,1);
  }

  getResult(): string {
    return this.items.map((item) => item.value).join(', ');
  }
}
