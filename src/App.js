import React from 'react';
import logo from './logo.svg';
import './App.css';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function transform(offset) {
  const cos = Math.cos(offset);
  const sin = Math.sin(offset);
  return { transform: `matrix3d(${sin}, ${-cos}, ${sin}, 0, ${-cos}, ${sin}, 0, 0, 0, ${cos}, ${cos}, ${sin}, 0, 0, 0, 1)` };
}

class App extends React.Component {
  state = { styleOne: {}, styleTwo: {}};

  onMouseMove = (event) => {
      this.setState({
          styleOne: transform(-event.clientX / event.clientY),
          styleTwo: transform(event.clientX / event.clientY)
      });
  }

  render() {
      return <div onMouseMove={this.onMouseMove}>
      <div className = "panel" style={this.state.styleOne} />
      <div className = "panel" style={this.state.styleTwo} />
      </div>
  }
}

export default App;
