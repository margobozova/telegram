import styles from './styles.css';

class CurrentChat {
  constructor() {
    this.element = document.createElement('div');
    this.element.classList.add(styles['current-chat-page']);
    this.render();

    return this.element;
  }
  render() {
    this.element.innerHTML = `
      <div class="${styles['message-page']}">
        <div class="${styles['message-item']}">
          <div class="${styles['message-body']}">
            <span class="${styles['user-photo']}"></span>
            <span class="${styles['user-name']}">Юрій Кабай</span>
            <span class="${styles['user-message']}">Кабай каже: "Прііівєєт"</span>
            <span class="${styles['message-time']}" >5:14:52 PM</span>
          </div>
        </div>
        <div class="${styles['send-pannel']}">
          <div class="${styles['send-form']}">
            <span class="${styles['owner-photo']}"></span>
            <form>
              <textarea name="text-message" placeholder="Write a message..."></textarea>
            </form>
            <button class="${styles['button-send']}">SEND</button>
            <span class="${styles['sender-photo']}"></span>
          </div>
        </div>
      </div>
    `;
  }
}

export default CurrentChat;
