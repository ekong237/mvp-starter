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
    this.onSearch = this.onSearch.bind(this);
    this.onLikeClick = this.onLikeClick.bind(this);
  }
// on save click, will add items to database and update favorites state
  onLikeClick(selectedObj){
    console.log('like clicked at', selectedObj);
    

    $.ajax({
      method: 'POST',
      url: 'http://localhost:3000/recipes/favorites',
      contentType: 'application/json',
      data: JSON.stringify({favorited: selectedObj}),
      success: (successfulFavoritesAdd) => {
        console.log('posted to favorites, result>>>:', successfulFavoritesAdd)
        this.state.favorites.push(successfulFavoritesAdd);
        this.setState({
          favorites: this.state.favorites
        });
        console.log("favorites", this.state.favorites);
      }
        
    })
  }

  onSearch(searchInput){
    console.log('searching...', JSON.stringify(searchInput))
    
    $.ajax({
      method: 'POST',
      url: 'http://localhost:3000/recipes',
      contentType: 'application/json',
      data: JSON.stringify({input: searchInput}),
      success: (successfulDataFromAPI) => {
        // data is an obj with recipe property as arr of obj
        // obj has recipe_id property
        // show user the data searched
        // this.getRecipes();
        this.setState({
          page: successfulDataFromAPI
        })
      },
      error: (error) => {
        console.log('ajax error!', error)
      }
    })
  }

  getRecipes(favorites) {
    favorites = favorites || '';
    $.ajax({
      url: 'http://localhost:3000/recipes/'+favorites,
      method: 'GET',
      contentType: 'application/json',
      success: (dbresults) => {
        console.log('DB RESULTS:', dbresults)
        // var resultsToObj = JSON.parse(dbresults);
        this.setState({ page : dbresults})
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  onFavoriteClick(){
    this.getRecipes('favorites');
  }

  //favorites tab
  componentDidMount(){
    this.getRecipes();
  }

  render () {
    return (<div>
      <h1>Recipe List</h1>
        <div className="search">
          <input type="text" className="searchInput"></input>
          <button onClick = { ()=>this.onSearch($('.searchInput').val()) }>search</button>
          <p></p><button onClick={()=>this.onFavoriteClick()}>Favorites</button>
        </div>
        
        <div>
          {console.log('state page:', this.state.page)}
          <RecipeList recipes={this.state.page} onLikeClick={this.onLikeClick} />
          
        </div>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));