import { 
  Component, 
  EventEmitter, 
  Output 
} from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})

export class Child2Component {

  // Sends data to parent
  @Output() public childEvent = new EventEmitter();

  fireEvent() {
    this.childEvent.emit("Child message to parent");
  }

}
