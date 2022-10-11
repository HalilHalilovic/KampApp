
import NavBar from "../components/navBar/header";
import styles from "../styles/Home.module.css";
import AboutUs from "../components/aboutUsComponent/about";
export default function About() {
  return <div className={styles.Container}>
    <NavBar/>
    <AboutUs/>
  </div>;
}
