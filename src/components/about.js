import React, { Component } from 'react';

class About extends Component {  

  goBack(){
    this.context.router.goBack();
  }

  render() {
    return (
      <div>
        <h1>About</h1>
        <p onClick={this.goBack.bind(this)}>back</p>
      </div>
    );
  }
}

About.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default About