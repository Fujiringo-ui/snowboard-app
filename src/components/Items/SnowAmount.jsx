import React from "react";
import styles from "src/sass/components/Items/snow_amount.module.scss";

const SnowAmount = (props) => {
    const{amount}=props

    return (
        <div className={styles.snow_amount}>
            <h2 className={styles.font}>降雪量</h2>
            <div className={styles.amount}>
                <div className={styles.value}>{amount}</div>
            </div>
        </div>
    )
}

export default SnowAmount;