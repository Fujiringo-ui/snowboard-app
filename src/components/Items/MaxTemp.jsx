import React from 'react';
import styles from 'src/sass/components/Items/max_temp.module.scss';

const MaxTemp = (props) => {
  const { maxtemp, mintemp } = props;

  return (
    <div className={styles.max_temp}>
      <h2 className={styles.font}>最高気温/最低気温</h2>
      <div className={styles.temp}>
        <div className={styles.value}>
          <span className={styles.red}>{maxtemp}</span>
          <span className={styles.line}>&ensp; / &ensp;</span>
          <span className={styles.blue}>{mintemp}</span>
        </div>
      </div>
    </div>
  );
};

export default MaxTemp;
