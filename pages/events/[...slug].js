import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/galleryComponents/event-list";
import ResultsTitle from "../../components/galleryComponents/results-title";
import { Fragment } from "react";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert.js";
import NavBar from "../../components/navBar/header";

function FilteredEventsPage(params) {
  const router = useRouter();
  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }
  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (isNaN(numYear) || isNaN(numMonth)) {
    return (
      <div class="center">
         <ErrorAlert><p>Invalid filter.</p></ErrorAlert> 
        <div >
          <Button link="/events">Show All Events</Button>
        </div>
      </div>
    );
  }
  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });
  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <div class="center">
        <ErrorAlert><p>No Photos found for this date.</p></ErrorAlert>
        <div >
          <Button link="/events">Go Back</Button>
        </div>
      </div>
    );
  }
  const date = new Date(numYear, numMonth - 1);
  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </Fragment>
  );
}

export default FilteredEventsPage;
