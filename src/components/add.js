import React, { Component } from 'react';
import { connect } from 'react-redux';

import { newContact } from '../actions/actions';

class Add extends Component {  

  constructor(props) {
    super(props);
    this.state = {
      contact: {}
    }
  }

  goBack(){
    this.context.router.goBack();
  }

  bindOnChangeHandler(param) {
    let me = this;
    return function(e) {
      e.stopPropagation();
      let { value } = e.target;
      let { contact } = me.state;
      contact[param] = value;
      me.setState({ contact });
    }
  }

  onSubmit(e) {
    let me = this;
    e.preventDefault();    
    let { dispatch } = this.props;
    dispatch(newContact(this.state.contact))
    .then(() => {
      me.goBack();
    })
  }

  render() {
    return (
      <div>
        <h3>Add new contact</h3>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div>name</div>
          <input type="text" onChange={this.bindOnChangeHandler('name')}/>
          <div>mobile</div>
          <input type="text" onChange={this.bindOnChangeHandler('mobile')}/>
          <div>email</div>
          <input type="text" onChange={this.bindOnChangeHandler('email')}/>
          <button type="submit">add</button>
        </form>
      </div>
    );
  }
}

Add.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default connect()(Add)