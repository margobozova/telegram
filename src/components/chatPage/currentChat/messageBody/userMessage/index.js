import styles from './styles.css';

class UserMessage {
  constructor() {
    this.element = document.createElement('span');
    this.element.classList.add(styles['user-message']);
    this.message = 'Кабай каже: "Прііівєєт"';
    this.render();

    return this.element;
  }
  render() {
    this.element.innerHTML = this.message;
  }
}

export default UserMessage;
