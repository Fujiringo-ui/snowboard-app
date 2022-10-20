import React from "react";
import styles from "src/sass/components/Items/snow_quality.module.scss";

const SnowQuality = (props) => {
    const{quality}=props

    return (
        <div className={styles.snow_quality}>
            <h2 className={styles.font}>雪質</h2>
            <div className={styles.quality}>
                <div className={styles.value}>{quality}</div>
            </div>
        </div>
    )
}

export default SnowQuality;