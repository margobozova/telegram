import styles from './styles.css';

class Authorisation {
  constructor() {
    this.element = document.createElement('div');
    this.element.classList.add(styles['authorisation-wrap']);
    this.formAutorithation = document.createElement('form');
    this.formAutorithation.classList.add(styles['form-wrap']);
    this.formAutorithation.addEventListener('submit', this.onSubmit.bind(this));
    this.render();

    return this.element;
  }

  onSubmit(ev) {
    ev.preventDefault();

    const name = ev.target.children.name.value;
    const password = ev.target.children.password.value;

    if (!name || name.length === 0) { return false; }
    if (!password || password.length === 0) { return false; }

    fetch('//localhost:3000/login', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({ user: { name, password } })
    })
      .then(response => response.json())
      .then(data => localStorage.setItem('token', data.token));

    return true;
  }

  render() {
    this.element.appendChild(this.formAutorithation);
    this.formAutorithation.innerHTML = `
      <input type="text" name="name" placeholder="Name"></input>
      <input type="password" name="password" placeholder="Password"></input>
      <button type="submit">SIGN IN</button>
    `;
  }
}

export default Authorisation;
