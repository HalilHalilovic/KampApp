import Image from 'next/image';
import style from './cloudSvg.module.css';
import cloudSvg from "./image/cloud.svg";
function Cloud() {
    return <div className={style.cloudSvgWrap}>
    <Image width={100} height={100} src={cloudSvg}></Image>
    <Image width={100} height={100} src={cloudSvg}></Image>
    <Image width={100} height={100} src={cloudSvg}></Image>
  </div>
}

export default Cloud;