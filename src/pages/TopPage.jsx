import React from "react";
import { Link } from "react-router-dom";
import { TopAd } from "src/components/Items";
import styles from "src/sass/pages/top_page.module.scss"

const TopPage = () => {
    const ads = [
        "ad 1",
        "ad 2",
        "ad 3",
    ]

    return (
        <div>
            <h1 className={styles.header}>top page</h1>
            {ads.map((ad) =>
                (<TopAd ad_content={ad}/>)
            )}
            <Link to="/about">About</Link>
        </div>
    )
}

export default TopPage;