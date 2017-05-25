import styles from './styles.css';

class ContactItem {
  constructor({ user }) {
    this.user = user;
    this.cover = this.user.image;
    this.name = this.user.name;

    this.element = document.createElement('div');
    this.element.classList.add(styles['contact-item']);

    this.render();

    return this.element;
  }

  render() {
    this.element.innerHTML = `
      <a class="${styles.content}">
        <img class="${styles.cover}" src="images/avatars/${this.cover}"/>
        <span class="${styles.name}">${this.name}</span>
      </a>
    `;
  }
}

export default ContactItem;
