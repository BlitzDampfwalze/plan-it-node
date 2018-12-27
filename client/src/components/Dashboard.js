import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import EventCard from './EventCard';

// import List from './list';
// import AddForm from './add-form';

// import {addList, fetchBoard} from '../actions';

import "../style/dashboard.css";

export class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        // this.props.dispatch(fetchBoard());
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

        return (
            <div className="event-card-wrapper">
                <EventCard />
                <EventCard /> 
                <EventCard />
                <EventCard />
                <EventCard />            
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

const mapStateToProps = (state) => ({
    // navbar: state.navbar
})

const mapDispatchToProps = ({
    // setHeaderText: setHeaderText
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Dashboard));

// Dashboard.defaultProps = {
//     // title: 'Board'
// };

// const mapStateToProps = state => ({
//     // lists: state.lists
// });

