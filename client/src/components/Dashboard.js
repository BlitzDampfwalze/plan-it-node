import React from 'react';
import {connect} from 'react-redux';

// import List from './list';
// import AddForm from './add-form';

// import {addList, fetchBoard} from '../actions';

import './Dashboard.css';

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

        return 
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

Dashboard.defaultProps = {
    // title: 'Board'
};

const mapStateToProps = state => ({
    // lists: state.lists
});

export default connect(mapStateToProps)(Dashboard);
