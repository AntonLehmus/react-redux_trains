import React, { Component } from "react";
import { connect } from 'react-redux';


class TrainsTable extends Component {

    render() {

        console.log(this.props.trains);
        //TODO: Loop trough this.props.trains)
        return(
            <div>
               
            </div>
        );
    };

}

function mapStateToProps(state) {
    return { trains: state.trains };
}

export default connect(mapStateToProps) (TrainsTable);