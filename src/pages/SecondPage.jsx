import React from "react";
import { SnowParkLayout } from "src/components/Layout";
import { SnowCover, SnowQuality,SnowAmount,Weather, MaxTemp, Park, Wind} from "src/components/Items";
import { FlexRow } from "src/components/Flex";
import { useLocation } from "react-router-dom";
import api from "src/api/park.json"

const SecondPage = () => {
  const search = useLocation().search;
  const query = new URLSearchParams(search);
  const parkName = query.get("park_name")
  const matchPark = Object.keys(api).includes(parkName) ? api[parkName] : {}

  return Object.keys(api).includes(parkName) ?
    <SnowParkLayout parkName={matchPark.park_name}>
      <FlexRow justifyContent={"center"}>
        <SnowCover amountSnow={matchPark.amount_snow}/>
      </FlexRow>
      <SnowQuality quality={matchPark.quality} />
      <SnowAmount amount={matchPark.amount} />
      <Weather weather={matchPark.weather}/>
      <MaxTemp maxtemp={matchPark.max_temp} mintemp={matchPark.min_temp}/>
      <Park park={matchPark.park}/>
      <Wind wind={matchPark.wind}/>
    </SnowParkLayout>
    : 
    <SnowParkLayout>
      <div style={{fontSize: 35, textAlign: "center"}}>検索結果がありません</div>
    </SnowParkLayout>
}

export default SecondPage;