import styles from './styles.css';

class HeaderContactStatus {
  constructor() {
    this.element = document.createElement('a');
    this.element.classList.add(styles['header-contact-status']);
    this.userName = JSON.parse(localStorage.getItem('user')).name;
    this.render();

    return this.element;
  }
  render() {
    this.element.innerHTML = `
       <span class="${styles['name-conversation']}">${this.userName}</span>
    `;
  }
}

export default HeaderContactStatus;

