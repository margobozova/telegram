import styles from './styles.css';
import UserPhoto from './userPhoto';
import UserName from './userName';
import UserMessage from './userMessage';
import MessageTime from './messageTime';

class MessageBody {
  constructor() {
    this.element = document.createElement('div');
    this.element.classList.add(styles['message-body']);

    this.render();

    return this.element;
  }
  render() {
    this.element.appendChild(new UserPhoto());
    this.element.appendChild(new UserName());
    this.element.appendChild(new UserMessage());
    this.element.appendChild(new MessageTime());
  }
}

export default MessageBody;
