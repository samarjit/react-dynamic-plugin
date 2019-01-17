class App extends window.React.Component {

  constructor(){
    super();
    this.state = {};
    this.state.components = [];
    this.pluginRegistry = [];
  }
  
  loadPlugins() {

    fetch("./dist/"+this.state.pluginName+".plugin.js")
    .then((resp) => resp.text())
    .then((resp)=>{
        this.state.components.push(this.state.pluginName);
        this.pluginRegistry[this.state.pluginName] =  eval(resp).default;
        this.forceUpdate();
    });
  
    this.forceUpdate();
  }


  render() {
    return (

      <div>

        <h2>Dynamic Components Loading</h2>
        <input type="text"  onChange={ (e) => this.state.pluginName = e.target.value} placeholder="Plugin Name D1,D2,...D4 etc"/>
        <button onClick={this.loadPlugins.bind(this)}>Load</button>
        <div>
        {this.state.components.map((componentId) => {
          let Component = this.pluginRegistry[componentId];
          return <Component>{componentId}</Component>;
        })}
        </div>
        
      </div>

    );
  }
}

export default App;