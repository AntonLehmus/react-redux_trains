import React, { Component } from "react";
import { connect } from 'react-redux';


class TrainsTable extends Component {

    render() {

        console.log(this.props.trains);
        return(
            <div className="row">
            <h3>{this.props.activeStation ? this.props.activeStation.stationName :''}</h3>
                <table className="table table-striped">
                    <thead className="thead-inverse">
                        <tr>
                            <th>Train</th>
                            <th>Arriving</th>
                            <th>Departing</th>
                            <th>From</th>
                            <th>To</th>
                            <th>Platform</th>
                            <th>Cancelled</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
        );
    };

}

function mapStateToProps(state) {
    return { trains: state.trains, activeStation: state.activeStation };
}

export default connect(mapStateToProps) (TrainsTable);