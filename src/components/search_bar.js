import React, { Component } from "react";
import { connect } from 'react-redux';
import Autosuggest from 'react-autosuggest';

import {fetchStations} from '../actions';

class SearchBar extends Component {

    componentDidMount() {
        this.props.fetchStations();
    }


  render() {
    return (
        <form>
            <div className="input-group">
                <input
                    type="text" className="form-control" placeholder="Search for station"
                    id="search_bar"
                />
                <span className="input-group-btn">
                    <button className="btn" type="submit" id="search_submit"><i className="fa fa-search "></i> Go!</button>
                </span>
            </div>
      </form>
    );
  }

}

function mapStateToProps(state) {
    return { stations: state.stations };
}

export default connect(mapStateToProps, { fetchStations }) (SearchBar);