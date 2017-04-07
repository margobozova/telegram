import styles from './styles.css';

class Header {
  constructor() {
    this.element = document.createElement('header');
    this.element.classList.add(styles.header);
    this.element.innerHTML = this.render();

    return this.element;
  }

  render() {
    return `
      <a href="" class="${styles['header-dropdown']}">
        <div class="${styles['hamburger-menu']}">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <a class="${styles.logo}">Telegram</a>
      </a>
      <a href="" class="${styles['header-contact-status']}">
        <span class="${styles['name-conversation']}">Юра</span>
        <span class="${styles['status-conversation']}">last seen 28 minutes ago</span>
      </a>
      <a href="" class="${styles['search-in-conversation']}"></a>
      <a href="" class="${styles['menu-conversation']}">
        <div class="${styles['menu-conversation-icon']}">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </a>
    `;
  }
}

export default Header;
