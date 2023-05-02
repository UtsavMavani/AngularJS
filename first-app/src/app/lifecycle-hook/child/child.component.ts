import { 
  Component,
  Input, 
  OnChanges, 
  OnInit, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy 
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
}) 

export class ChildComponent implements OnInit, OnChanges, DoCheck, 
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  // Recieves data from parent
  @Input() message: string = "";
  @Input() users: string[] = [];
  @Input() user: any = {};

  // You can change the name of input property
  // @Input('message') msg: string = "";

  constructor() {
    console.log("Child constructor called");
  }

  ngOnChanges() {
    console.log("Child ngOnChange called");
  }

  ngOnInit() {
    console.log("Child ngOnInit called");
  }

  ngDoCheck() {
    console.log("Child ngDoCheck called");
  }

  ngAfterContentInit() {
    console.log("Child ngAfterContentInit called");
  }

  ngAfterContentChecked() {
    console.log("Child ngAfterContentChecked called");
  }

  ngAfterViewInit() {
    console.log("Child ngAfterViewInit called");
  }

  ngAfterViewChecked() {
    console.log("Child ngAfterViewChecked called");
  }

  ngOnDestroy() {
    console.log("Child ngDestroy called");
  }

}
