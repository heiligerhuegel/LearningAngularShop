import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
})
export class StarComponent implements OnInit {
  @Input() rating: number = 0;
  cropWidth: number = 75;

  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
    this.cropWidth = (this.rating * 75) / 5;
  }

  onClick(): void {
    this.ratingClicked.emit(`Rating: ${this.rating}`);
  }
}
