import styles from './styles.css';

import Header from '../header';
import ChatPage from '../chatPage';

class Layout {
  constructor({ container }) {
    this.container = container;
    this.container.classList.add(styles.app);
    this.render();

    return this.container;
  }

  render() {
    this.container.appendChild(new Header());
    this.container.appendChild(new ChatPage());
  }
}

export default Layout;
