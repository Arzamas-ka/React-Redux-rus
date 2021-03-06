import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';
import ErrorButton from '../error-button/error-button';
import Spinner from '../spinner/spinner';
import './person-details.css';

export default class PersonDetails extends Component {
  swapiService = new SwapiService();

  state = {
    person: null,
    loading: false
  };

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      return this.updatePerson();
    }
  }

  updatePerson() {
    const { personId } = this.props;

    if (!personId) {
      return;
    }

    this.setState({ loading: true });

    this.swapiService.getPerson(personId).then(person => {
      this.setState({ person, loading: false });
    });
  }

  render() {
    if (!this.state.person) {
      return <span>Selected a person from a list</span>;
    }

    if (this.state.loading) {
      return (
        <div className="person-details card">
          <Spinner />
        </div>
      );
    }

    const { id, name, gender, birthYear, eyeColor } = this.state.person;

    return (
      <div className="person-details card">
        <img
          className="person-image"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
          alt="starwars"
        />

        <div className="card-body">
          <h4>
            {name} {this.props.personId}
          </h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span style={{ color: 'red' }}>{eyeColor}</span>
            </li>
            <li className="list-group-item">
              <ErrorButton styles={{ margin: 0 }} />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
