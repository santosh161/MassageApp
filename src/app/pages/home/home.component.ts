import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // conversations = ['Marketing', 'Engineering', 'Sales'];


  conversations = [
    { name: 'Marketing', userMessage: 'Marketing message', updatedAt: '2025-05-06' },
    { name: 'Engineering', userMessage: 'Engineering message', updatedAt: '2025-05-06' },
    { name: 'Sales', userMessage: 'Sales message', updatedAt: '2025-05-05' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
