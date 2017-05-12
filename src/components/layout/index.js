import styles from './styles.css';

import Header from '../header';
import ChatPage from '../chatPage';
import Authorisation from '../authorisation';

class Layout {
  constructor({ container }) {
    this.container = container;
    this.container.classList.add(styles.app);
    this.authorisationCount = false;
    if (this.authorisationCount) { this.render(); } else (this.authorisation());

    return this.container;
  }

  render() {
    this.container.appendChild(new Header());
    this.container.appendChild(new ChatPage());
  }
  authorisation() {
    this.container.appendChild(new Authorisation());
  }
}

export default Layout;
