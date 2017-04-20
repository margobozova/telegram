import styles from './styles.css';
import MessageBody from './messageBody';
import SendForm from './sendForm';

class CurrentChat {
  constructor() {
    this.element = document.createElement('div');
    this.element.classList.add(styles['current-chat-page']);

    this.messagePageWrap = document.createElement('div');
    this.messagePageWrap.classList.add(styles['message-page']);

    this.messageItemWrap = document.createElement('div');
    this.messageItemWrap.classList.add(styles['message-item']);

    this.sendPanelWrap = document.createElement('div');
    this.sendPanelWrap.classList.add(styles['send-panel']);
    this.render();
  }

  getChat(chat) {
    console.log(chat);
  }
  render() {
    this.element.appendChild(this.messagePageWrap);
    this.messagePageWrap.appendChild(this.messageItemWrap);
    this.messageItemWrap.appendChild(new MessageBody());
    this.messagePageWrap.appendChild(this.sendPanelWrap);
    this.sendPanelWrap.appendChild(new SendForm());
  }
}

export default CurrentChat;
