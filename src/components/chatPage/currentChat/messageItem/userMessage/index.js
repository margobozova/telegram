import styles from './styles.css';

class UserMessage {
  constructor({ messageText }) {
    this.element = document.createElement('span');
    this.element.classList.add(styles['user-message']);
    this.messageText = messageText;
    this.render();

    return this.element;
  }
  render() {
    this.element.innerHTML = this.messageText;
  }
}

export default UserMessage;
