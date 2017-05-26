import styles from './styles.css';
import ContactItem from './contactItem';

class ContactList {
  constructor({ onContactClick }) {
    const user = localStorage.getItem('user');
    this.onContactClick = onContactClick;
    this.element = document.createElement('div');
    this.element.classList.add(styles['contact-list']);

    fetch('//localhost:3000/users', {
      method: 'GET',
      headers: new Headers({
        'x-access-token': JSON.parse(user).token
      })
    })
      .then(response => response.json())
      .then((data) => {
        if (!data) { throw new Error(404); }
        return data;
      })
      .then((users) => {
        this.users = users;
        return this.render();
      })
      .catch(err => console.error(err));

    return this.element;
  }

  render() {
    this.element.innerHTML = '';
    this.users.forEach(user => (
      this.element.appendChild(new ContactItem({ user, onContactClick: this.onContactClick }))
    ));
  }
}

export default ContactList;
