import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent {
  @Input() cardTitle = "";
  @Input() imgSource = "";
  @Input() description = "";
  @Input() Id = 0;
  constructor(){
    
  }
}
