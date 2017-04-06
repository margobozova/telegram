import styles from './styles.css';

class ChatItem {
  constructor() {
    this.cover = '/images/kabaii.jpg';
    this.name = 'Юрий Кабай';
    this.message = 'Прііівєєєт';
    this.time = '12:30 PM';

    this.element = document.createElement('div');
    this.element.classList.add(styles['chat-item']);

    this.render();

    return this.element;
  }
  render() {
    this.element.innerHTML = `
      <a href="" class="${styles.content}">
        <img class="${styles.cover}" src="${this.cover}"/>
          <span class="${styles.name}">${this.name}</span>
          <span class="${styles.message}">${this.message}</span>
        <span class="${styles.time}">${this.time}</span>
      </a>
    `;
  }
}

export default ChatItem;
