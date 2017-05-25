import styles from './styles.css';

class MessageTime {
  constructor({ messageData }) {
    this.messageData = messageData;
    this.time = this.messageData.date.split('T').reduce((a, b) => `${b.slice(0, 5)} ${a.slice(5, 10)}`);
    this.element = document.createElement('span');
    this.element.classList.add(styles['message-time']);
    this.render();

    return this.element;
  }
  render() {
    this.element.innerHTML = this.time;
  }
}

export default MessageTime;
