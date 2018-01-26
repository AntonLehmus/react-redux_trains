import React, { Component } from "react";
import { connect } from 'react-redux';
import Autosuggest from 'react-autosuggest';
import { reduxForm, Field } from 'redux-form';

import {fetchStations} from '../actions';

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
        console.log(values);
    }

  render() {
    const { handleSubmit } = this.props;

    return (
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <div className="input-group">
                <Field
                    name="station"
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
    return { stations: state.stations };
}


export default reduxForm ({
    form: 'SearchForm'
})(connect(mapStateToProps, { fetchStations }) (SearchBar));