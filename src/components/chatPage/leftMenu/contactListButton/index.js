import styles from './styles.css';

class ContactListButton {
  constructor({ onClick }) {
    this.onClick = onClick;
    this.element = document.createElement('button');
    this.element.classList.add(styles['contact-list-button']);
    this.render();
    this.element.addEventListener('click', () => this.onClick(false));

    return this.element;
  }
  render() {
    this.element.innerHTML = '<i class="material-icons">account_box</i>';
  }
}

export default ContactListButton;
