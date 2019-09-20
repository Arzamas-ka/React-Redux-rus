import React, { Component } from "react";

import ItemList from "../item-list/item-list";
import PersonDetails from "../person-details/person-details";
import "../people-page/people-page.css";
import ErrorIndicator from "../error-indicator/error-indicator";

export default class PeoplePage extends Component {
  state = {
    selectedPerson: null,
    hasError: false
  };

  onPersonSelected = selectedPerson => {
    this.setState({
      selectedPerson: 2
    });
  };

  componentDidCatch(error, info) {
    this.setState({
      hasError: true
    });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    return (
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList onItemSelected={this.onPersonSelected} />
        </div>
        <div className="col-md-6">
          <PersonDetails personId={this.state.selectedPerson} />
        </div>
      </div>
    );
  }
}
