import styles from './styles.css';
import OwnerPhoto from './ownerPhoto';
import TextMessage from './textMessage';

class SendForm {
  constructor({ usersData, chatId, messages, getChat }) {
    this.user = JSON.parse(localStorage.getItem('user')).name;
    this.getChat = getChat;
    this.messages = messages;
    this.chatId = chatId;
    this.usersData = usersData;
    this.urlUser = this.usersData.find(element => element.name === this.user).image;
    this.element = document.createElement('div');
    this.element.classList.add(styles['send-form']);

    this.render();

    return this.element;
  }

  render() {
    this.element.appendChild(new OwnerPhoto({ urlUser: this.urlUser }));
    this.element.appendChild(new TextMessage({ usersData: this.usersData,
      chatId: this.chatId,
      getChat: this.getChat }));
  }
}

export default SendForm;
