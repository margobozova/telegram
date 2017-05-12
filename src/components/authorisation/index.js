import styles from './styles.css';

class Authorisation {
  constructor() {
    this.element = document.createElement('div');
    this.element.classList.add(styles['authorisation-wrap']);
    this.formAutorithation = document.createElement('form');
    this.formAutorithation.classList.add(styles['form-wrap']);
    this.render();

    return this.element;
  }
  render() {
    this.element.appendChild(this.formAutorithation);
    this.formAutorithation.innerHTML = `
      <input type="text" name="name" placeholder="Name"></input>
      <input type="text" name="password" placeholder="Password"></input>
      <button type="submit">SIGN IN</button>
    `;
  }
}

export default Authorisation;
