import style from "./contactComponent.module.css";
import Cloud from "./cloudComponents/cloud";
import Image from "next/image";
import facebookSvg from './SvgElements/facebook.svg'
import whatsUpSvg from './SvgElements/whatsUp.svg'
import instagramSvg from './SvgElements/intagram.svg'
import mapImg from './image/Simple-Location-Picker.webp'
import Link from "next/link";
function Contact(params) {
  return (
    <div className={style.mainContactDiv}>
      <div className={style.contactContentWrap}>
        <div className={style.contactTextContentWrap}>
            <div className={style.CloudContainer}>
                <Cloud/>
            </div>
          <div className={style.contactText}>
            <h3 className={style.sectionDescription}>Contact</h3>
            <h1 className={style.tittle}>Contact us or visit us </h1>
            <div className={style.itemContactWrap}>
            <div className={style.itemContact}>
              <Link  href={"https://facebook.com/"}><Image className={style.linkItem} src={facebookSvg}></Image></Link>
            </div>
            <div className={style.itemContact}>
            <Link href={"https://wa.me/38972569188"}><Image className={style.linkItem} src={whatsUpSvg}></Image></Link>
              
            </div>
            <div className={style.itemContact}>
            <Link href={"https://instagram.com"}><Image className={style.linkItem} src={instagramSvg}></Image></Link>
            </div>
            </div>
            
          </div>
        </div>

        <div className={style.Map}>
          {/* <iframe className={style.GoogleMap}
            
            referrerpolicy="no-referrer-when-downgrade"
            src="https://maps.google.com/maps?"
            allowfullscreen
          ></iframe> */}

          <Image src={mapImg}></Image>
        </div>
      </div>
    </div>
  );
}

export default Contact;
