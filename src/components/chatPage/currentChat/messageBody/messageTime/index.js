import styles from './styles.css';

class MessageTime {
  constructor() {
    this.element = document.createElement('span');
    this.element.classList.add(styles['message-time']);
    this.time = '5:14:52 PM';
    this.render();

    return this.element;
  }
  render() {
    this.element.innerHTML = this.time;
  }
}

export default MessageTime;
