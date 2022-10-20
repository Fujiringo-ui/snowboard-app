import React from "react";
import styles from "src/sass/components/Items/weather.module.scss";

const Weather = (props) => {
    const{weather}=props

    return (
        <div className={styles.weather}>
            <h2 className={styles.font}>天気</h2>
            <div className={styles.tenki}>
                <div className={styles.value}>{weather}</div>
            </div>
        </div>
    )
}

export default Weather;