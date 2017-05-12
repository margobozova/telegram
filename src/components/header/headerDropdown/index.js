import styles from './styles.css';

class HeaderDropdown {
  constructor() {
    this.element = document.createElement('a');
    this.element.classList.add(styles['header-dropdown']);
    this.render();

    return this.element;
  }
  render() {
    this.element.innerHTML = `             
        <div class="${styles['hamburger-menu']}">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <a class="${styles.logo}">Telegram</a>
    `;
  }
}

export default HeaderDropdown;
