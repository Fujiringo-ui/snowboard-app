import React from 'react';
import { SnowParkLayout } from 'src/components/Layout';
import {
  SnowCover,
  SnowQuality,
  SnowAmount,
  Weather,
  MaxTemp,
  Park,
  Wind,
} from 'src/components/Items';
import { FlexRow } from 'src/components/Flex';
import { useLocation } from 'react-router-dom';
import api from 'src/api/park.json';
import styles from 'src/sass/Pages/SecondPage.module.scss';

const SecondPage = () => {
  const search = useLocation().search;
  const query = new URLSearchParams(search);
  const parkName = query.get('park_name');
  const matchPark = Object.keys(api).includes(parkName) ? api[parkName] : {};

  return Object.keys(api).includes(parkName) ? (
    <SnowParkLayout parkName={matchPark.park_name} amountSnow={matchPark.amount_snow}>
      <FlexRow justifyContent={'center'}>
        <SnowCover amountSnow={matchPark.amount_snow} />
      </FlexRow>
      <SnowQuality quality={matchPark.quality} />
      <SnowAmount amount={matchPark.amount} />
      <Weather weather={matchPark.weather} />
      <MaxTemp maxtemp={matchPark.max_temp} mintemp={matchPark.min_temp} />
      <Park park={matchPark.park} />
      <Wind wind={matchPark.wind} />
    </SnowParkLayout>
  ) : (
    <SnowParkLayout>
      <div className={styles.error}>Not found</div>
    </SnowParkLayout>
  );
};

export default SecondPage;
