import styles from './styles.css';

class ButtonSend {
  constructor() {
    this.element = document.createElement('button');
    this.element.classList.add(styles['button-send']);
    this.render();

    return this.element;
  }
  render() {
    this.element.innerHTML = 'SEND';
  }
}

export default ButtonSend;

