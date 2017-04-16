import styles from './styles.css';

class SenderPhoto {
  constructor() {
    this.element = document.createElement('span');
    this.element.classList.add(styles['sender-photo']);

    return this.element;
  }
}

export default SenderPhoto;
