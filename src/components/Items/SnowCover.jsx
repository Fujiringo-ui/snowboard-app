import React from "react";
import styles from "src/sass/components/Items/snow_cover.module.scss";
import { Spacer } from "../Utility";

const SnowCover = (props) => {
    const{amountSnow}=props

    return (
        <div className={styles.snow_cover}>
            <h2 className={styles.font}>積雪量</h2>
            <div className={styles.cover}>
                <Spacer size={50} horizontal/>
                <div className={styles.amount}>{amountSnow}</div>
                <div className={styles.cm}>cm</div>
            </div>
        </div>
    )
}

export default SnowCover;