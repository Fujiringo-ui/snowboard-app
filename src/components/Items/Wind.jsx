import React from "react";
import styles from "src/sass/components/Items/wind.module.scss";

const Wind = (props) => {
    const{wind}=props

    return (
        <div className={styles.wind}>
            <h2 className={styles.font}>風速</h2>
            <div className={styles.speed}>
                <div className={styles.value}>{wind}</div>
            </div>
        </div>
    )
}

export default Wind;