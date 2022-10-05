import style from "./openingTime.module.css";
import Image from "next/image";
import HeadSvg from "./images/timeBannerSvg.svg";
import DownSvg from "./images/timeBannerSvgDown.svg";
function OpeningTimeComponent(params) {
  return (
    <div className={style.mainTimeWrap}>
      <div className={style.TimeTittle}>
        <div className={style.timeHeadSvg}>
          <Image layout="responsive"  src={HeadSvg}></Image>
        </div>
        <div className={style.TittleWrap}>
          <h1>Opening Hours</h1>
        </div>
      </div>
      <div className={style.cardsWrap}>
        <div className={style.card}>
          <div className={style.titleCard}>Morning</div>
          <div className={style.contentCard}>08:30 - 12:30</div>
        </div>
        <div className={style.card}>
          <div className={style.titleCard}>Afternoon Session</div>
          <div className={style.contentCard}>12:30 - 13:30</div>
        </div>
        <div className={style.card}>
          <div className={style.titleCard}>Full Day</div>
          <div className={style.contentCard}>08:30 - 13:30</div>
        </div>
      </div>
      <div className={style.timeDownSvg}>
          <Image layout="responsive"  src={DownSvg}></Image>
        </div>
    </div>
  );
}

export default OpeningTimeComponent;
