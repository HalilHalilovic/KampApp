import style from "./info.module.css";
import CloudsComponent from "../../UI/cloudsSvg/cloudSvg";
import Image from "next/image";
import teacherImg from "./images/TeacherAndChild.webp";
import Link from "next/link";
function Info(params) {
  return (
    <div className={style.infoMainWrap}>
      <CloudsComponent />
      <div className={style.infoContentWrap}>
        <div className={style.contentWrap}>
          <div className={style.imageWrapContainer}>
            <div className={style.imgBgContainer}>
              <div className={style.ImgTeacher}>
                <Image src={teacherImg} alt="" />
              </div>
            </div>
          </div>
          <div className={style.textInfoContent}>
            <div className={style.textInfoWrap}>
              <h1 className={style.textInfoTittle}>Where work and play come together</h1>
              <p className={style.textInfoPara}>
                We are extremely proud of our nursery with its warm caring, homely and family
                orientated atmosphere. With us, children learn with confidence in a fun, safe and
                stimulating environment We value each child individually and look forward to sharing
                with you the exciting leaps your child will take during the time with us.
              </p>
              <p className={style.textInfoPara}>We Hope to see you soon.</p>
              <Link href="#meetUs">
                <a className={style.button}>Get to Know Us</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <CloudsComponent />
    </div>
  );
}

export default Info;
