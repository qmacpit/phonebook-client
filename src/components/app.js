import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { contacts, filterContacts } from '../actions/actions';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state ={
      searchTerm: ""
    }
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(contacts());
  }

  performDispatch(func) {
    const { dispatch } = this.props
    dispatch(func()); 
  }

  filter(e) {
    e.preventDefault();
    let { value } = e.target;
    console.log(value);
    this.setState({
      searchTerm: value
    })
    this.performDispatch(() => {
      return filterContacts(value);  
    });    
  }

  render() {
    console.log(this.state);
    return (
      <div>            
        {
          this.props.contacts.map
          ? (
              <div className="six columns">
                <h5>Contacts</h5>  
                <input type="text" className="u-full-width" value={this.state.searchTerm} onChange={this.filter.bind(this)}/>
                <ul>
                  {
                  this.props.contacts.map((current, index) => {                        
                    return (
                      <li key={index}>
                        <Link to={`/details/${current.id}`}>{current.name}</Link>
                      </li>
                    )
                  })
                  }
                </ul>
                <Link className='button' to='/add'>add new</Link>
              </div>
            )            
          : ''
        }                
        <div className="six columns">
          {this.props.children}
        </div>
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