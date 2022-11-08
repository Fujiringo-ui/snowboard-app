import React from 'react';
import { FlexColumn, FlexRow } from 'src/components/Flex';
import { SearchBox } from 'src/components/Form';
import { Spacer } from 'src/components/Utility';
import styles from 'src/sass/Pages/TopPage.module.scss';
import snowy from 'src/images/snowy-logo-high.png';

const TopPage = () => {
  return (
    <div className={styles.TopPage}>
      <FlexColumn>
        <Spacer size={200} />
        <FlexRow justifyContent={'center'}>
          <object aria-label={'logo'} data={snowy} />
        </FlexRow>
        <Spacer size={120} />
        <FlexRow justifyContent={'center'}>
          <SearchBox />
        </FlexRow>
      </FlexColumn>
    </div>
  );
};

export default TopPage;
