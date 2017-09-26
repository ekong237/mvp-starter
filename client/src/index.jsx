import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import RecipeList from './components/RecipeList.jsx';
import data from './data.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      page: data,
      favorites: []
    }
  }
// on save click, will add items to database and update favorites state
  onLike(){

  }

  onSearch(searchInput){
    console.log('searching...', JSON.stringify(searchInput))
    
    $.ajax({
      method: 'POST',
      url: 'http://localhost:3000/recipes',
      contentType: 'application/json',
      data: JSON.stringify({input: searchInput}),
      success: (successfulDataFromAPI) => {
        // show user the data searched
        console.log('successful data>', successfulDataFromAPI)
        // data is an obj with recipe property as arr of obj
        // obj has recipe_id property



        this.setState({
          page: successfulDataFromAPI
        })

      },
      error: (error) => {
        console.log('ajax error!', error)
      }
    })

    
  }

  componentDidMount(){
    // $.ajax({
    //   url: '/recipes/favorites',
    //   method: 'GET',
    //   data: searchParams,
    //   contentType: 'application/json',
    //   success: (searchResults) => {
    //     console.log('>', searchResults);
    //   },
    //   error: (err) => {
    //     console.log(err);
    //   }
    // })
  }

  render () {
    console.log('data', data)
    return (<div>
      <h1>Recipe List</h1>
        <div className="search">
          <input type="text" className="searchInput"></input>
          <button onClick = { ()=>this.onSearch($('.searchInput').val()) }>search</button>
        </div>
        
        <div>
          {console.log('state page:', this.state.page)}
          <RecipeList recipes={this.state.page} onClick = { ()=>this.onLike() } />
          
        </div>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));