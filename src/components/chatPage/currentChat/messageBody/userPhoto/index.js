import styles from './styles.css';

class UserPhoto {
  constructor() {
    this.element = document.createElement('span');
    this.element.classList.add(styles['user-photo']);

    return this.element;
  }
}

export default UserPhoto;
