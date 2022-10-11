import style from "./about.module.css";
import Image from "next/image";
import AboutUsImg from "./images/AboutUsImg.jpg";
import SignatureImg from "./images/SIGNATURE.png";
function aboutUs(params) {
  return (
    <div className={style.aboutMainWrap}>
      <div className={style.aboutContentWrap}>
        <div className={style.aboutContent}>
          <div className={style.aboutTittle}>
            <h1 className={style.tittle}>OUR STORY</h1>
            <div className={style.divLine}></div>
          </div>
          <div className={style.aboutParagraph}>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
          <div className={style.foundersSignatureWrap}>
            <div className={style.signature}>
              <Image src={SignatureImg} alt=""></Image>
              <h3 className={style.founterName}>John Doe</h3>
              <p className={style.founderProffesion}>Co-Founder | CEO</p>
            </div>
            <div className={style.signature}>
              <Image src={SignatureImg} alt=""></Image>
              <h3 className={style.founterName}>Jaine Doe</h3>
              <p className={style.founderProffesion}>Co-Founder | COO</p>
            </div>
          </div>
        </div>

        <div className={style.aboutImgWrap}>
          <Image
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="contain"
            src={AboutUsImg}
            alt=""
          ></Image>
        </div>
      </div>
    </div>
  );
}

export default aboutUs;
