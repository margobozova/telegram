import styles from './styles.css';

class UserName {
  constructor({ name }) {
    this.name = name;
    this.element = document.createElement('span');
    this.element.classList.add(styles['user-name']);
    this.render();

    return this.element;
  }
  render() {
    this.element.innerHTML = this.name;
  }
}

export default UserName;
