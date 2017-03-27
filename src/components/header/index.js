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
      <a class="${styles.logo}">Telegram</a>
    `;
  }
}

export default Header;
