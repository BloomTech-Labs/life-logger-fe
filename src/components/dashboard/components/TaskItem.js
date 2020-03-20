import React, { useState } from "react";
import { Card } from "../styles/index";
import { useDispatch} from "react-redux";
import { deleteEvent } from "../../../store/actions/index"


const TaskItem = props => {
    const dispatch = useDispatch()
    const [toggleCard, setToggleCard] = useState(false);

    const handleDelete = e => {
        e.preventDefault()

        dispatch(deleteEvent(props.event.id))
    }
    return(
        <Card onClick={() => setToggleCard(!toggleCard)}>
            <div className="card-header-con">
                    <div className="card-title">
                        <h2>{props.event.title}</h2>
                    </div>
            </div>
           { toggleCard &&
            <> 
            <div className="event-info">
                <h1>testing</h1>
            </div>
            <div>
                <button>Edit</button>
                <button onClick={handleDelete}>Delete</button>
            </div>
            </>}
        </Card>
    );
};
export default TaskItem;