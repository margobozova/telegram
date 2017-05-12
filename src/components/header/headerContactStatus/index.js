import styles from './styles.css';

class HeaderContactStatus {
  constructor() {
    this.element = document.createElement('a');
    this.element.classList.add(styles['header-contact-status']);
    this.render();

    return this.element;
  }
  render() {
    this.element.innerHTML = `
       <span class="${styles['name-conversation']}">Юра</span>
       <span class="${styles['status-conversation']}">last seen 28 minutes ago</span>
    `;
  }
}

export default HeaderContactStatus;

