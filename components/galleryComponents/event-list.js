import EventItem from "./event-item";
import classes from './event-list.module.css';

function EventList(props) {
  const { items } = props;

  return (
    <div className={classes.list}>
      {items.map((event) => (
        <EventItem
          key ={event.id}
          id={event.id}
          date={event.date}
          image={event.image}
        />
      ))}
    </div>
  );
}

export default EventList;
