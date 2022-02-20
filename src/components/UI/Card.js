//Card has shadow and rounded box-radius properties.
import './Card.css'

function Card(props) {
    const classes = 'card ' + props.className;
    return (
        <div className={classes}>{props.children}</div> //displays all elements inside the Card wrap
    )
};

export default Card;