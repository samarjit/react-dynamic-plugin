import App from './App';
import vendor from './vendor';

export function load() {
    window.React = vendor.React; 
    //This line becomes React.createElement(...) -> React will be null if not defined on window.
    vendor.ReactDOM.render(<App/>, document.getElementById('output'));
}