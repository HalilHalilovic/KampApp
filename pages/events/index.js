import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/galleryComponents/event-list";
import EventsSearch from "../../components/galleryComponents/events-search.js";
import { useRouter } from "next/router";
import Footer from "../../components/footerComponent/footer";
import NavBar from "../../components/navBar/header";


function AllEventsPage(params) {
    const router = useRouter();
  const events = getAllEvents();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`
    router.push(fullPath)
  }
  return (
    <div>
      <NavBar></NavBar>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
      <Footer/>
    </div>
    
  );
}

export default AllEventsPage;
