import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnChanges {

  @Input()
  headerList: any = [];

  @Input()
  entities: any = [];

  @Input()
  buttons: any = [];

  @Output()
  buttonClickEmitter = new EventEmitter();
  
  constructor() { }

  ngOnChanges(): void {
  }

  getField(entity : any, field : string){
    if(!field.includes('.')){
      return entity[field];
    }
    const fieldParts = field.split('.');
    
    for(let part of fieldParts){
      entity = entity[part];
    }
    return entity;
  }

  onButtonClick(entity: any, label: string){
    this.buttonClickEmitter.emit({
      entityKey: entity,
      labelKey : label
    });
  }

}
