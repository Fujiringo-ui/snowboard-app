import React from "react";
import styles from "src/sass/components/Items/park.module.scss";

const Park = (props) => {
    const{park}=props

    return (
        <div className={styles.park}>
            <h2 className={styles.font}>パーク</h2>
            <div className={styles.infor}>
                <div className={styles.value}>{park}</div>
            </div>
        </div>
    )
}

export default Park;