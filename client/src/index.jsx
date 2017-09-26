import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import RecipeList from './components/RecipeList.jsx';
import data from './data.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      input: '',
      
    }
  }

  onSearch(){
    this.setState({

    })
  }

  render () {
    console.log('data', data)
    return (<div>
      <h1>Recipe List</h1>
        <div className="search">
          <input type="text" value={this.state.input} ></input><button>search</button>
        </div>
        <div>
          <RecipeList recipes={data}/>
        </div>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));