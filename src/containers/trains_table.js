import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import _ from 'lodash';

import {fetchTrains} from '../actions';


class TrainsTable extends Component {

    componentDidUpdate() {
        
        if(this.props.activeStation && _.isEmpty(this.props.trains)){
            const stationShortCode = this.props.activeStation.stationShortCode;
            this.props.fetchTrains(stationShortCode);
        }
    }

    render() {
        if(!this.props.activeStation){
            return(
                <div className="col-xs-12">
                    <h4>Please select a station</h4>
                </div>
            );
        }
        

        console.log(this.props);
        return(
            <div>
            <h3>{ this.props.activeStation.stationName }</h3>
                <div className="row">
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
            </div>
        );
    };

}

function mapStateToProps(state) {
    return { trains: state.trains, activeStation: state.activeStation };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchTrains },dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps) (TrainsTable);