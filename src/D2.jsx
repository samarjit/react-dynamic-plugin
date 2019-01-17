import React from 'react';



export default class D2 extends React.Component {

  constructor(){
    super();
    console.log('D2 loading')
  }

  render () {
    console.log('D2 rendering')
    return <div>{this.props.children}</div>
  }

};


