import styles from './styles.css';

class MenuConversation {
  constructor() {
    this.element = document.createElement('a');
    this.element.classList.add(styles['menu-conversation']);
    this.render();

    return this.element;
  }
  render() {
    this.element.innerHTML = `
      <div class="${styles['menu-conversation-icon']}">
        <span></span>
        <span></span>
        <span></span>
      </div>
     `;
  }
}

export default MenuConversation;
