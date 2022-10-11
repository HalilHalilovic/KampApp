import style from "./header.module.css";
import Link from "next/link";

function NavBar(params) {
  return (
    <div className={style.navContainer}>
      <div className={style.imgWrap}>
        <Link href="/">
          <a>KampLogo</a>
        </Link>
      </div>

      <nav className={style.nav}>
        <ul className={style.navUl}>
          <li className={style.navLi}>
            <Link href="/events">Gallery</Link>
          </li>
          <li className={style.navLi}>
            <Link href="/about">About Us</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
