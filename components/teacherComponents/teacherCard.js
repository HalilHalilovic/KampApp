import classes from "./teacherCard.module.css";
import Image from "next/image";
import Link from "next/link";
import TeacherMaleImg from "./images/TeacherImg.jpg";
import TeacherFemaleImg from "./images/TeacherFimg.jpg";
import facebookImg from "..//contactComponent/SvgElements/facebook.svg";
import instagramImg from "..//contactComponent/SvgElements/intagram.svg";
import twitterImg from "..//contactComponent/SvgElements/whatsUp.svg";

function TeacherComponent(params) {
  return (
    <div id="meetUs" className={classes.mainContentComponent}>
      <div className={classes.tittleMainSection}>
        <h1>MEET OUR STAFF</h1>
      </div>
      <div className={classes.wrapCardComponent}>
        <div className={classes.teacherCard}>
          <div className={classes.imgWrapper}>
            <Image className={classes.img} width={200} height={200} src={TeacherMaleImg} alt="" />
          </div>
          <h1 className={classes.teacherName}>John Doe</h1>
          <div className={classes.textProfession}>
            <h3 className={classes.proffessiontitle}>Profession Here</h3>
            <p className={classes.proffessionParagraph}>
              Short description of my work experience and dedication to child care
            </p>
          </div>
          <div className={classes.teacherSocial}>
            <Link href={"https://facebook.com/"}>
              <Image
                className={classes.socialMediaItem}
                width={48}
                height={48}
                src={facebookImg}
                alt=""
              />
            </Link>
            <Link href={"https://instagram.com/"}>
              <Image
                className={classes.socialMediaItem}
                width={48}
                height={48}
                src={instagramImg}
                alt=""
              />
            </Link>
            <Link href={"https://wa.me/0000000"}>
              <Image
                className={classes.socialMediaItem}
                width={48}
                height={48}
                src={twitterImg}
                alt=""
              />
            </Link>
          </div>
        </div>
        <div className={classes.teacherCard}>
          <div className={classes.imgWrapper}>
            <Image className={classes.img} width={200} height={200} src={TeacherFemaleImg} alt="" />
          </div>
          <h1 className={classes.teacherName}>Jaine Doe</h1>
          <div className={classes.textProfession}>
            <h3 className={classes.proffessiontitle}>Profession Here</h3>
            <p className={classes.proffessionParagraph}>
              Short description of my work experience and dedication to child care
            </p>
          </div>
          <div className={classes.teacherSocial}>
            <Link href={"https://facebook.com/"}>
              <Image
                className={classes.socialMediaItem}
                width={48}
                height={48}
                src={facebookImg}
                alt=""
              ></Image>
            </Link>
            <Link href={"https://instagram.com/"}>
              <Image
                className={classes.socialMediaItem}
                width={48}
                height={48}
                src={instagramImg}
                alt=""
              />
            </Link>
            <Link href={"https://wa.me/000000000"}>
              <Image
                className={classes.socialMediaItem}
                width={48}
                height={48}
                src={twitterImg}
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherComponent;
