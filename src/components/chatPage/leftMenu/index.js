import styles from './styles.css';
import SearchChat from './searchChat';
import ChatList from './chatList';
import ContactList from './contactList';
import ChatListButton from './chatListButton';
import ContactListButton from './contactListButton';


class LeftMenu {
  constructor({ onChatSelect }) {
    const user = localStorage.getItem('user');
    this.token = JSON.parse(user).token;

    this.onChatSelect = onChatSelect;
    this.element = document.createElement('div');
    this.element.classList.add(styles['left-menu']);
    this.isChatList = true;
    this.render();

    return this.element;
  }

  onClick = (isChatList) => {
    if (this.isChatList === isChatList) { return false; }
    this.isChatList = isChatList;
    return this.render();
  };

  onContactClick = (_id) => {
    fetch('//localhost:3000/chats/connect-contact', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
        'x-access-token': this.token,
      }),
      body: JSON.stringify({ contactId: _id })
    })
      .then(res => res.json())
      .then((data) => {
        if (!data) { throw new Error(404); }
        this.onClick(true);
        this.onChatSelect({ _id: data._id });
      });
  };

  render() {
    this.element.innerHTML = '';
    this.element.appendChild(new SearchChat());

    if (this.isChatList) {
      this.element.appendChild(new ChatList({ onChatSelect: this.onChatSelect }));
    } else {
      this.element.appendChild(new ContactList({ onContactClick: this.onContactClick }));
    }

    this.element.appendChild(new ChatListButton({ onClick: this.onClick }));
    this.element.appendChild(new ContactListButton({ onClick: this.onClick }));
  }
}

export default LeftMenu;
