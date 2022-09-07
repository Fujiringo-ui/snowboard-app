import React from "react";
import styles from "src/sass/components/Form/search_box.module.scss";

const SearchBox = () => {
    return (
        <div className={styles.search_box}>
            <input className={styles.search_box__input} type="search" name="search" placeholder="スキー場を入力してください" />
            <button type="submit" className={styles.search_box__button} >
                <i class="fas fa-search fa-fw"></i>
            </button>
        </div>
    )
}

export default SearchBox;