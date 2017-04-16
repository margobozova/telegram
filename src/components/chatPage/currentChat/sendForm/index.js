import styles from './styles.css';
import OwnerPhoto from './ownerPhoto';
import TextMessage from './textMessage';
import ButtonSend from './buttonSend';
import SenderPhoto from './senderPhoto';

class SendForm {
  constructor() {
    this.element = document.createElement('div');
    this.element.classList.add(styles['send-form']);

    this.render();

    return this.element;
  }
  render() {
    this.element.appendChild(new OwnerPhoto());
    this.element.appendChild(new TextMessage());
    this.element.appendChild(new ButtonSend());
    this.element.appendChild(new SenderPhoto());
  }
}

export default SendForm;
