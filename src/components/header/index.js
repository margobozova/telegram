import styles from './styles.css';
import HeaderContactStatus from './headerContactStatus';
import HeaderDropdown from './headerDropdown';
import SearchInConversation from './searchInConversation';
import MenuConversation from './menuConversation';

class Header {
  constructor() {
    this.element = document.createElement('header');
    this.element.classList.add(styles.header);
    this.render();

    return this.element;
  }

  render() {
    this.element.appendChild(new HeaderDropdown());
    this.element.appendChild(new HeaderContactStatus());
    this.element.appendChild(new SearchInConversation());
    this.element.appendChild(new MenuConversation());
  }
}

export default Header;
