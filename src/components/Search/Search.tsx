import React, {  } from 'react';
import {ReactComponent as SearchIcon} from 'assets/icon-search.svg';
import styles from './Search.module.scss';
import Button from 'components/Button/Button';

interface SearchProps {
  hasError: boolean,
  onSubmit: (text: string) => void,
}

interface FormFields {
  username: HTMLInputElement,
}

const Search = ({hasError, onSubmit}: SearchProps) => { 

  const submitHandler = (event: React.FormEvent<HTMLFormElement & FormFields>) => {
    event.preventDefault();
    
    const text = event.currentTarget.username.value;

    if (text.trim()) {
      onSubmit(text);
      event.currentTarget.reset();
    }
  }

  return (
    <form onSubmit={submitHandler} autoComplete='off'>
      <div className={styles.search}>
        <label htmlFor='search' className={styles.label}>
          <SearchIcon/>
        </label>
        <input
          id='search'
          placeholder='Search Github username'
          name='username'
          type='text'
          className={styles.input}
        />
        {hasError && ( 
          <div className={styles.error}>
            No result
          </div>
        )} 
        <Button>Search</Button>
      </div>
    </form>
  );
};

export default Search;
