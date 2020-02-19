import React, { Component } from 'react';
import { connect } from 'react-redux'; // HOC
import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import * as actionTypes from '../store/actions';

class Persons extends Component {
  render () {
    return (
      <div>
        <h1>PERSONS: { this.props.persons }</h1>
        <AddPerson personAdded={ () => this.props.onStorePerson(this.props.persons) } />
        { this.props.storedPersons.map(strPerson => (
          <Person
            key={ strPerson.id }
            name={ strPerson.name }
            age={ strPerson.age }
            clicked={ () => this.props.onDeletePerson(strPerson.id) } />
        )) }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    storedPersons: state.persons
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onStorePerson: (person) => dispatch({ type: actionTypes.ADD_PERSON, person: person }),
    onDeletePerson: (id) => dispatch({ type: actionTypes.DELETE_PERSON, personElId: id })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
