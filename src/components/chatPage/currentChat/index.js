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
    fetch(`//localhost:3000/chats/${this.chat._id}`, {
      method: 'GET',
      headers: new Headers({
        'x-access-token': localStorage.getItem('token'),
      })
    })
      .then(response => response.json())
      .then((data) => {
        if (!data) { throw new Error(404); }
        return data;
      })
      .then((chatData) => {
        this.chatData = chatData;
        return this.render();
      })
      .catch(err => console.error(err));
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
    this.sendPanelWrap.appendChild(new SendForm({ usersData: this.usersData,
      chatId: this.chat._id,
      getChat: this.getChat }));
  }
}

export default CurrentChat;
