import styles from './styles.css';
import SearchChat from './searchChat';
import ChatList from './chatList';
import ContactList from './contactList';
import ChatListButton from './chatListButton';
import ContactListButton from './contactListButton';


class LeftMenu {
  constructor({ onChatSelect }) {
    this.onChatSelect = onChatSelect;
    this.element = document.createElement('div');
    this.element.classList.add(styles['left-menu']);
    this.isCklicked = true;
    this.render();

    return this.element;
  }

  onClick = (ev) => {
    ev.preventDefault();
    this.isCklicked = !this.isCklicked;
    this.render();
  }

  render() {
    this.element.innerHTML = '';
    this.element.appendChild(new SearchChat());
    if (this.isCklicked) {
      this.element.appendChild(new ChatList({ onChatSelect: this.onChatSelect,
        onClick: this.onClick }));
    } else {
      this.element.appendChild(new ContactList({ onClick: this.onClick }));
    }
    this.element.appendChild(new ChatListButton({ onClick: this.onClick }));
    this.element.appendChild(new ContactListButton({ onClick: this.onClick }));
  }
}

export default LeftMenu;
