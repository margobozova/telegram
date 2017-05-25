import styles from './styles.css';

class OwnerPhoto {
  constructor({ urlUser }) {
    this.urlUser = urlUser;
    this.element = document.createElement('span');
    this.element.classList.add(styles['owner-photo']);
    this.element.style.backgroundImage = `url(images/avatars/${this.urlUser})`;

    return this.element;
  }
}

export default OwnerPhoto;
