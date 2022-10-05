import classes from "./event-item.module.css";

function EventItem(props) {
  const {image} = props;


  return (
    <div className={classes.item}>
      <img src={image} alt="" />
    </div>
  );
}

export default EventItem;
