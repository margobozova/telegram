import styles from './styles.css';

class TextMessage {
  constructor({ usersData, chatId, getChat }) {
    this.getChat = getChat;
    this.chatId = chatId;
    this.usersData = usersData;
    this.element = document.createElement('form');
    this.element.classList.add(styles['form-wrap']);
    this.element.addEventListener('submit', this.putMessage.bind(this));
    this.render();

    return this.element;
  }

  putMessage(ev) {
    ev.preventDefault();
    const messageValue = ev.target.children['text-message'].value;
    const root = this.usersData.find(element => element.name === 'Root');
    const body = JSON.stringify({ message: messageValue, user: root._id });
    this.xhr = new XMLHttpRequest();
    this.xhr.open('PUT', `http://localhost:3000/chats/${this.chatId}`);
    this.xhr.setRequestHeader('Content-Type', 'application/json');
    this.xhr.send(body);

    this.xhr.onreadystatechange = () => {
      if (this.xhr.readyState !== 4) { return false; }
      if (this.xhr.status !== 200) { return console.error(this.xhr.status); }
      this.chat = JSON.parse(this.xhr.response);
      this.getChat(this.chat);

      return true;
    };
  }

  render() {
    this.element.innerHTML = `
      <textarea name="text-message" placeholder="Write a message..."></textarea>
      <button type="submit">SEND</button>
    `;
  }
}

export default TextMessage;
