import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.scss']
})
export class MessageInputComponent implements OnInit {

  
  @Input() conversationId = '';
  @Input() initialDraft = '';
  @Output() send = new EventEmitter<string>();
  @Output() draftChange = new EventEmitter<string>();
  
  message = '';
  
  ngOnInit() {
    this.message = this.initialDraft;
  }
  
  onInput() {
    this.draftChange.emit(this.message);
  }
  
  onSend() {
    if (this.message.trim()) {
      this.send.emit(this.message.trim());
      this.message = '';
      this.draftChange.emit('');
    }
  }
  

}
