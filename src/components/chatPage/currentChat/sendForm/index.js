import styles from './styles.css';
import OwnerPhoto from './ownerPhoto';
import TextMessage from './textMessage';
import SenderPhoto from './senderPhoto';

class SendForm {
  constructor({ usersData, chatId, messages, getChat }) {
    this.getChat = getChat;
    this.messages = messages;
    this.chatId = chatId;
    this.usersData = usersData;
    this.element = document.createElement('div');
    this.element.classList.add(styles['send-form']);

    this.render();

    return this.element;
  }

  render() {
    this.element.appendChild(new OwnerPhoto({ usersData: this.usersData }));
    this.element.appendChild(new TextMessage({ usersData: this.usersData,
      chatId: this.chatId,
      getChat: this.getChat }));
    this.element.appendChild(new SenderPhoto({ usersData: this.usersData }));
  }
}

export default SendForm;
