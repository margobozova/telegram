import styles from './styles.css';

class UserName {
  constructor() {
    this.element = document.createElement('span');
    this.element.classList.add(styles['user-name']);
    this.render();

    return this.element;
  }
  render() {
    this.element.innerHTML = 'Юрій Кабай';
  }
}

export default UserName;
