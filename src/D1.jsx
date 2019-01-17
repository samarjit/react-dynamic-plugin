import React from 'react';

class D1 extends React.Component {
  constructor(){
    super()
    console.log("loaded D1 constructor")
  }
  render() {
    console.log("rendering D1")
    return (

      <div>
        D1 loaded from plugin
      </div>

    );
  }

};

export default D1;