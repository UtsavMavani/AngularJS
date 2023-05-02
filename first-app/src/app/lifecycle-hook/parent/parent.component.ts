import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  // Sends data to child
  messageToChild = 'Parent message to child';
  users = ['utsav', 'dhruvil', 'kenil'];
  user = {
    id: 1,
    name: "utsav",
    email: "utsav@gmail.com"
  }

  isShow:boolean = false;

  displayChild() {
    this.isShow = !this.isShow;
  }

  // Recieves data from child
  messageFromChild: string = "";

  constructor() {
    console.log("Parent constructor");
  }

  ngOnInit(): void {
    console.log("Parent ngOnInit");
  }
}
