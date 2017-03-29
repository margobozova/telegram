import styles from './styles.css';
import SearchForm from './searchForm';

class SearchChat {
  constructor() {
    this.element = document.createElement('div');
    this.element.classList.add(styles['search-chat']);
    this.render();

    return this.element;
  }

  render() {
    this.element.appendChild(new SearchForm());
  }
}

export default SearchChat;
