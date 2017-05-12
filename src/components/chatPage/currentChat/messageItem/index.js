import styles from './styles.css';
import UserPhoto from './userPhoto';
import UserName from './userName';
import UserMessage from './userMessage';
import MessageTime from './messageTime';

class MessageItem {
  constructor({ messageData, usersData }) {
    this.messageData = messageData;
    this.usersData = usersData;
    this.element = document.createElement('div');
    this.element.classList.add(styles['message-item']);
    this.render();

    return this.element;
  }
  render() {
    this.currentUser = this.usersData.filter(element => (element._id === this.messageData.user));
    this.messageText = this.messageData.message;
    this.image = this.currentUser[0].image;
    this.name = this.currentUser[0].name;
    this.element.appendChild(new UserPhoto({ image: this.image }));
    this.element.appendChild(new UserName({ name: this.name }));
    this.element.appendChild(new UserMessage({ messageText: this.messageText }));
    this.element.appendChild(new MessageTime());
  }
}

export default MessageItem;
