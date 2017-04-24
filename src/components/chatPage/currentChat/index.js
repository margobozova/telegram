import styles from './styles.css';
import MessageItem from './messageItem';
import SendForm from './sendForm';

class CurrentChat {
  constructor() {
    this.getChat = this.getChat.bind(this);

    this.element = document.createElement('div');
    this.element.classList.add(styles['current-chat-page']);

    this.messagePageWrap = document.createElement('div');
    this.messagePageWrap.classList.add(styles['message-page']);

    this.sendPanelWrap = document.createElement('div');
    this.sendPanelWrap.classList.add(styles['send-panel']);
  }

  getChat(chat) {
    this.chat = chat;
    this.xhr = new XMLHttpRequest();
    this.xhr.open('GET', `http://localhost:3000/chats/${this.chat._id}`);
    this.xhr.send();
    this.xhr.onreadystatechange = () => {
      if (this.xhr.readyState !== 4) { return false; }
      if (this.xhr.status !== 200) { return console.error(this.xhr.status); }
      this.chatData = JSON.parse(this.xhr.response);

      return this.render();
    };
  }
  render() {
    this.element.appendChild(this.messagePageWrap);
    this.messagePageWrap.innerHTML = '';
    this.messages = this.chatData.messages;
    this.usersData = this.chatData.users;
    this.messages.forEach(messageData => (
      this.messagePageWrap.appendChild(new MessageItem({ messageData, usersData: this.usersData }))
    ));

    this.messagePageWrap.appendChild(this.sendPanelWrap);
    this.sendPanelWrap.innerHTML = '';
    this.sendPanelWrap.appendChild(new SendForm({ messages: this.messages,
      usersData: this.usersData }));
  }
}

export default CurrentChat;
