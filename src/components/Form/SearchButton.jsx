import React from "react";
import styles from "src/sass/components/Form/search_button.module.scss";

const SearchButton = () => {
    return (
        <>
        <button type="submit" className={styles.search_button} ></button>
        <span className={styles.search_button__white_circle}></span>
        </>
    )
}

export default SearchButton;