import React, { Component } from 'react';

class ReadContent extends Component {
  render() {
    console.log('Content render');
    return (
      <article id="primary">
        <h2>{this.props.title}</h2>
        <p>
            {
            this.props.desc.split('\n').map( line => {
                return (<span>{line}<br/></span>)
            })
            }
        </p>
      </article>
    );
  }
}

export default ReadContent;