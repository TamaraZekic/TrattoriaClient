import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Input()
  label : string = '';

  @Output()
  newEventEmit = new EventEmitter();

  input : string = '';

  constructor() { } 

  ngOnInit(): void {
  }

  addFilterInput(){
    this.newEventEmit.emit(this.input);
  }

}
