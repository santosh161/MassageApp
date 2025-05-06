import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent implements OnInit {

  conversationId = '';
  userMessages: string[] = [];
  draft = '';
  
  constructor(private route: ActivatedRoute) {}
  
  ngOnInit() {
    this.conversationId = this.route.snapshot.paramMap.get('id') || '';
    this.loadDraft();
    this.loadMessages();
  }
  
  loadMessages() {
    const data = localStorage.getItem(`messages-${this.conversationId}`);
    this.userMessages = data ? JSON.parse(data) : [];
  }
  
  sendMessage(newMsg: string) {
    if (!newMsg) return;
    this.userMessages.push(newMsg);
    localStorage.setItem(`messages-${this.conversationId}`, JSON.stringify(this.userMessages));
    localStorage.removeItem(`draft-${this.conversationId}`);
  }
  
  saveDraft(draft: string) {
    localStorage.setItem(`draft-${this.conversationId}`, draft);
  }
  
  loadDraft() {
    const saved = localStorage.getItem(`draft-${this.conversationId}`);
    this.draft = saved || '';
  }
  

}
