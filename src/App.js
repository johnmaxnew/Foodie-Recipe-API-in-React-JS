import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import Button from '@mui/material/Button';
import Card from './components/Card'


function App() {

  const YOUR_APP_ID = process.env.YOUR_APP_ID;
  const YOUR_APP_KEY = process.env.YOUR_APP_KEY;

  const [query, setquery] = useState("")
  const [recipes, setrecipes] = useState([])
  const [choice, setchoice] = useState("gluten-free")

  var url = `https://api.edamam.com/search?q=${query}&
  app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&&calories=591-722&health=${choice}`

  async function getRecipes(){
    var result = await axios.get(url);
    setrecipes(result.data.hits);
    console.log(result.data);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  }

  return (
    <div className="App">

      <div className="main">
        <header className="app-header mb-2">
          <h1  className="header_title">FoodPass</h1>
          <h5  className="desc">Search Recipes</h5>
          <form className="search mt-3" onSubmit={onSubmit}>
            <input type="text" className="search-input" placeholder="Search recipes..." 
            value={query} onChange={(e) => setquery(e.target.value)}/>
            <Button type="submit" variant="contained">Search</Button>
            <select name="" id="" className="choice">
              <option value="gluten-free" onClick={() => setchoice("gluten-free")}>gluten-free</option> 
              <option value="vegan" onClick={() => setchoice("vegan")}>vegan</option> 
              <option value="vegetarian" onClick={() => setchoice("vegetarian")}>vegetarian</option> 
              <option value="paleo" onClick={() => setchoice("paleo")}>paleo</option> 
              <option value="dairy-free" onClick={() => setchoice("dairy-free")}>dairy-free</option> 
              <option value="wheat-free" onClick={() => setchoice("wheat-free")}>wheat-free</option> 
              <option value="fat-free" onClick={() => setchoice("fat-free")}>fat-free</option> 
              <option value="low-sugar" onClick={() => setchoice("low-sugar")}>low-sugar</option> 
              <option value="egg-free" onClick={() => setchoice("egg-free")}>egg-free</option> 
              <option value="peanut-free" onClick={() => setchoice("peanut-free")}>peanut-free</option> 
              <option value="tree-nut-free" onClick={() => setchoice("tree-nut-free")}>tree-nut-free</option> 
              <option value="soy-free" onClick={() => setchoice("soy-free")}>soy-free</option> 
              <option value="fish-free" onClick={() => setchoice("fish-free")}>fish-free</option> 
              <option value="shellfish-free" onClick={() => setchoice("shellfish-free")}>shellfish-free</option> 

            </select>
          </form>

        </header>
        <div className="content">

          <div className="row pb-5 mb-4 mt-3">
              {recipes.map(recipe => {
                return  <Card item xs={12} sm={6} md={4} recipe={ recipe } />;
              })}
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
