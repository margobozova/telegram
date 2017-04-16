import styles from './styles.css';

class TextMessage {
  constructor() {
    this.element = document.createElement('form');
    this.element.classList.add(styles['form-wrap']);
    this.render();

    return this.element;
  }
  render() {
    this.element.innerHTML = `
      <textarea name="text-message" placeholder="Write a message..."></textarea>
    `;
  }
}

export default TextMessage;
