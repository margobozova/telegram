import styles from './styles.css';

class SearchInConversation {
  constructor() {
    this.element = document.createElement('a');
    this.element.classList.add(styles['search-in-conversation']);

    return this.element;
  }
}

export default SearchInConversation;
