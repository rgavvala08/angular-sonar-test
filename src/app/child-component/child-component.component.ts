import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent {

  @Input() formGroup!: FormGroup;

  @Output() sendDataToParent = new EventEmitter<void>();

  @Output() resetDataInParent = new EventEmitter<void>();

  public sendData(): void {
    this.sendDataToParent.emit();
  }

   public resetData(): void {
    this.resetDataInParent.emit();
  }


}
