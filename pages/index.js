import Hero from "../components/heroComponent/heroContent";
import NavBar from "../components/navBar/header";
import OpeningTimeComponent from "../components/openingTimeComponent/openingTime";
import styles from "../styles/Home.module.css";
import Info from "../components/InfoComponent/info";
import LeaderComponent from "../components/leaderComponent/leader";
import HealthyFoodComponent from "../components/healthyFoodComponent/healtyComponent";
import TeacherSection from "../components/teacherComponents/teacherCard";
import CloudsSvg from "../UI/cloudsSvg/cloudSvg";
import Contact from "../components/contactComponent/contactComponent";
import Footer from "../components/footerComponent/footer";

export default function Home() {
  return (
    <div className={styles.Container}>
      <NavBar />
      <Hero />
      <OpeningTimeComponent />
      <Info />
      <LeaderComponent />
      <HealthyFoodComponent />
      <CloudsSvg />
      <TeacherSection />
      <Contact />
      <Footer></Footer>
    </div>
  );
}
