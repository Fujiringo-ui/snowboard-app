import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from 'src/sass/components/Form/search_box.module.scss';

const SearchBox = () => {
  const [parkName, setParkName] = useState('');
  const navigate = useNavigate();

  return (
    <div className={styles.search_box}>
      <input
        className={styles.search_box__input}
        type="search"
        name="search"
        placeholder="スキー場を入力してください"
        value={parkName}
        onChange={(event) => {
          setParkName(event.target.value);
        }}
      />
      <button
        type="submit"
        className={styles.search_box__button}
        onClick={() => {
          navigate(`/snowpark?park_name=${parkName}`);
        }}
      >
        <i class="fas fa-search fa-fw"></i>
      </button>
    </div>
  );
};

export default SearchBox;
