import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import TrainsTable from './trains_table';


export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <TrainsTable />
      </div>
    );
  }
}
