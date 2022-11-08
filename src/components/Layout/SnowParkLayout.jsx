import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from 'src/sass/components/Layout/Link.module.scss';
import FallSnow from 'src/lib/FallSnow';
import { Snow } from 'src/components/Items';

const SnowParkLayout = (props) => {
  const { children, parkName, amountSnow } = props;

  useEffect(() => {
    FallSnow(amountSnow);
  }, []);

  return (
    <div className={styles.layout__wrapper}>
      <div className={styles.layout}>
        <div className={styles.layout__header}>
          <Link className={styles.link} to="/">
            <div className={styles.link__one} />
          </Link>
          <div className={styles.park_name}>{parkName}</div>
          <div className={styles.layout__header__duct}></div>
        </div>
        {children}
        <Snow />
      </div>
    </div>
  );
};

export default SnowParkLayout;
