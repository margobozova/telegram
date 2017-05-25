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
    const user = localStorage.getItem('user');
    this.userName = JSON.parse(localStorage.getItem('user')).name;
    const owner = this.usersData.find(element => element.name === this.userName);

    fetch(`//localhost:3000/chats/${this.chatId}`, {
      method: 'PUT',
      headers: new Headers({
        'Content-Type': 'application/json',
        'x-access-token': JSON.parse(user).token
      }),
      body: JSON.stringify({ message: messageValue, user: owner._id })
    })
      .then(response => response.json())
      .then((data) => {
        if (!data) { throw new Error(404); }

        return data;
      })
      .then((chat) => {
        this.chat = chat;
        this.getChat(this.chat);

        return true;
      })
      .catch(err => console.error(err));
  }

  render() {
    this.element.innerHTML = `
      <textarea name="text-message" placeholder="Write a message..."></textarea>
      <button type="submit">SEND</button>
    `;
  }
}

export default TextMessage;
