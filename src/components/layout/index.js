import styles from './styles.css';

import Header from '../header';
import ChatPage from '../chatPage';
import Authorisation from '../authorisation';

class Layout {
  constructor({ container }) {
    this.container = container;
    this.container.classList.add(styles.app);
    const token = localStorage.getItem('token');
    this.isAuthorized = !!token;

    this.render();
    return this.container;
  }

  authorize = () => {
    this.isAuthorized = true;
    this.render();
  };

  render() {
    this.container.innerHTML = '';

    if (this.isAuthorized) {
      this.container.appendChild(new Header());
      this.container.appendChild(new ChatPage());
    } else {
      this.container.appendChild(new Authorisation({ authorize: this.authorize }));
    }
  }
}

export default Layout;
