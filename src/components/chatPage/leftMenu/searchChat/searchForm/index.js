import styles from './styles.css';


class SearchForm {
  constructor() {
    this.element = document.createElement('form');
    this.element.classList.add(styles['search-form']);
    this.render();

    return this.element;
  }
  render() {
    this.element.innerHTML = `
      <input id="search-button" type="submit" value=""/>
      <input id="chat-search" type="search" placeholder="Search"/>
      `;
  }
}

export default SearchForm;
