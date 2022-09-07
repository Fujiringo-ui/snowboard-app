import React from "react";
import styles from "src/sass/components/Items/top_ad.module.scss";

const TopAd = (props) => {
    return <div className={styles.wrapper}>{props.ad_content}</div>
}

export default TopAd;