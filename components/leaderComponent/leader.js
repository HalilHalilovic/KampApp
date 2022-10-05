import style from "./leader.module.css";
import Image from "next/image";
import leaderGirl from "./images/leaderGirl.png";
function LeaderComponent() {
  return (
    <div className={style.leaderComponentWrap}>
      <div className={style.leaderContentWrap}>
        <div className={style.leaderTextWrap}>
          <h1 className={style.leaderTittle}>Creating confident leaders</h1>
          <p className={style.leaderPara}>
            Leadership is key to supporting and sustaining quality in early
            childhood education and care settings and for creating a
            stimulating environment for both staff and children. Effective
            leadership establishes a set of organisational conditions that
            positively influence process quality, working conditions and staff
            engagement in continuous professional learning and growth.
          </p>
        </div>
        <div className={style.leaderImgWrap}>
          <div className={style.leaderImg}>
            <Image src={leaderGirl}></Image>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeaderComponent;
