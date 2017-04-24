import styles from './styles.css';

class UserPhoto {
  constructor({ image }) {
    this.image = image;
    this.element = document.createElement('span');
    this.element.classList.add(styles['user-photo']);
    this.element.style.backgroundImage = `url(/images/avatars/${this.image})`;

    return this.element;
  }
}

export default UserPhoto;
