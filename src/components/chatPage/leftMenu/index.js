import styles from './styles.css';
import SearchChat from './searchChat';
import ChatList from './chatList';

class LeftMenu {
  constructor() {
    this.element = document.createElement('div');
    this.element.classList.add(styles['left-menu']);
    this.render();

    return this.element;
  }
  render() {
    this.element.appendChild(new SearchChat());
    this.element.appendChild(new ChatList());
  }
}

export default LeftMenu;
