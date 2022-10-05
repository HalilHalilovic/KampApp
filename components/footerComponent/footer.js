import svgFooter from "./images/footerSvg.svg";
import Image from "next/image";
import style from "./footer.module.css";
import Cloud from "..//../UI/cloud/singleCloud";
import Link from "next/link";
function Footer(params) {
  return (
    <div className={style.mainFooterWrap}>
      <div className={style.svgWrap}>
        <Image src={svgFooter}></Image>
      </div>
      <div className={style.contentWrap}>
        <div className={style.cloudWrap}>
          <Cloud />
        </div>
        <div className={style.content}>
            <h1>Logo</h1>
            <ul className={style.listLinkItems}>
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/'}>Stuff</Link></li>
                <li><Link href={'/'}>Gallery</Link></li>
                <li><Link href={'/'}>About Us</Link></li>
            </ul>
         
        </div>
        <div className={style.cloudWrap}>
          <Cloud />
        </div>
      </div>
      <p><small>&copy; Copyright 2022, Kamp</small> </p>
    </div>
  );
}

export default Footer;
