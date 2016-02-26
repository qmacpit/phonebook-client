import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { contacts } from '../actions/actions';

class App extends Component {
  
  constructor(props) {
    super(props);    
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(contacts());
  }

  render() {
    return (
      <div>
        <h3>Phonebook</h3>        
        {
          this.props.contacts.map
          ? this.props.contacts.map((current, index) => {
            return (
              <div key={index}>
                <Link to={`/details/${current.id}`}>{current.name}</Link>
              </div>
            )
          })
          : ''
        }
        <br/>
        <Link to='/about'>about</Link>
      </div>
    );
  }
}

function mapStateToProps(state) {  
  return {
    contacts: state.contacts
  }
}

export default connect(mapStateToProps)(App)