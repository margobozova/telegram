import styles from './styles.css';

class OwnerPhoto {
  constructor() {
    this.element = document.createElement('span');
    this.element.classList.add(styles['owner-photo']);

    return this.element;
  }
}

export default OwnerPhoto;
