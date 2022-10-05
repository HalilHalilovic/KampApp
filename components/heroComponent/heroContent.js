import style from "./heroContent.module.css";
import Image from "next/image";
import HeroImg from "./images/HeroImg.webp";
import Link from "next/link";
function Hero(params) {
  return (
    <div className={style.mainHeroWrap}>
      <div className={style.contentHeroWrap}>
        <div className={style.textContentWrap}>
          <h1  className={style.textContentTittle}>Welcome to Kamp Daycare </h1>
          <p>
            At Kamp nursery, we pride ourselves on a highly successful partnership
            working between parents, children, and the nursery in order to
            achieve the very best care and education for each individual child.
          </p>
          <div className={style.buttonWrap}>
            <Link href="/about">
              <a className={style.buttonAbout}>Learn More</a>
            </Link>
          </div>
        </div>

        <div className={style.imgContentWrap}>
          <div className={style.imgWrapBg}>
            <div className={style.HeroImg}>
              <Image src={HeroImg}></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
