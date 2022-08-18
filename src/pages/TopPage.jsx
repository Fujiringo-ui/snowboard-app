import React from "react";
import { Link } from "react-router-dom";
import styles from "src/sass/pages/top_page.module.scss"

const TopPage = () => {
    return (
        <div>
            <h1 className={styles.header}>top page</h1>
            <Link to="/about">About</Link>
        </div>
    )
}

export default TopPage;