import React, { Component } from 'react';
import { connect } from 'react-redux';
import Autosuggest from 'react-autosuggest';
import { reduxForm, Field } from 'redux-form';
import { bindActionCreators} from 'redux';

import {fetchStations} from '../actions';
import {selectStation} from '../actions';

class SearchBar extends Component {

    componentDidMount() {
        this.props.fetchStations();
    }

    renderField(field) {
        return(
            <input
                {...field.input}
                id={field.id}
                type={field.type}
                className={field.className}
                placeholder={field.placeholder}
            />
        );
    }

    onSubmit(values){

        //dirty,dirty bodge for Helsinkis double stations
        _.isEqual(_.lowerCase(values.stationName),"helsinki") ? values.stationName = "Helsinki asema" :'';

        //find user's station from stations array
        const station = _.find(this.props.stations,
            function(o) { return _.isEqual(_.lowerCase(o.stationName), _.lowerCase(values.stationName)); } );

        if(station) {
            this.props.selectStation(station);
        }
    }

  render() {
    const { handleSubmit } = this.props;

    return (
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <div className="input-group">
                <Field
                    name="stationName"
                    id="search_bar"
                    type="text"
                    className="form-control"
                    placeholder="Search for station"
                    component={this.renderField}
                />
                <span className="input-group-btn">
                    <button className="btn btn-primary" type="submit" id="search_submit"><i className="fa fa-search "></i> Go!</button>
                </span>
            </div>
      </form>
    );
  }

}

function mapStateToProps(state) {
    return { 
        stations: state.stations
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectStation, fetchStations },dispatch);
}

export default reduxForm ({
    form: 'SearchForm'
})(connect(mapStateToProps, mapDispatchToProps) (SearchBar));