import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import { fetchEvents } from '../actions/event';

import EventCard from './EventCard';
import EventCardCreate from './EventCardCreate';

// import List from './list';
// import AddForm from './add-form';

// import {addList, fetchBoard} from '../actions';

import "../style/dashboard.css";

export class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.props.dispatch(fetchEvents());
    }

    // addList(title) {
    //     this.props.dispatch(addList(title));
    // }

    render() {

        // const lists = this.props.lists.map((list, index) => (
        //     <li className="list-wrapper" key={index}>
        //         <List index={index} {...list} />
        //     </li>
        // ));
        console.log(this.props.events, 'events')
        const events = this.props.events.map((event, index) => (
            <EventCard index={index} key={index} {...event} />
        ))

        console.log('event', events)



        return (
            <div className="event-card-wrapper">
                {events}
                <EventCardCreate />
            </div>
        );
        // (
        // <div className="board">
        //     <h2>{this.props.title}</h2>
        //     <ul className="lists">
        //         {lists}
        //         <li className="add-list-wrapper">
        //             <AddForm
        //                 type="list"
        //                 onAdd={title => this.addList(title)}
        //             />
        //         </li>
        //     </ul>
        // </div>
        // );
    }
}

const mapStateToProps = (state) => {
    const { events } = state.protected_data;
    console.log(events, 'events')
    return {
        events: state.protected_data.events,
        protectedData: state.protected_data.data
    }
}

const mapDispatchToProps = ({
    // setHeaderText: setHeaderText
})

export default connect(mapStateToProps)(withRouter(Dashboard));

// Dashboard.defaultProps = {
//     // title: 'Board'
// };

// const mapStateToProps = state => ({
//     // lists: state.lists
// });

