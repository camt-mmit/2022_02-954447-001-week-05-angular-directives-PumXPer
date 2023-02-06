import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export type InputType = { value: number };
export type SectionType = InputType[];


@Component({
  selector: 'app-assignment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.scss']
})

export class AssignmentComponent {
  sections:SectionType[] = [this.createSection()];
  items = [{value:0}];

  private createInput(): InputType {
    return{ value : 0 }
  }

  private createSection(): InputType[] {
    return [this.createInput()];
  }

  addSection():void {
    this.sections.push(this.createSection());
  }

  removeSection(index: number):void {
    this.sections.splice(index, 1);
  }

  addInput(section: InputType[]):void {
    section.push(this.createInput());
  }

  removeInput(section: InputType[], index: number):void {
    section.splice(index, 1);
  }

  onChange(input: InputType, value: number ):void {
    input.value = value;
    // console.log(index,value,section);
  }

  getResult(section: SectionType): number {
    return section
      .map((input) => input.value)
      .reduce((carry, value) => carry + value, 0);
  }
}
