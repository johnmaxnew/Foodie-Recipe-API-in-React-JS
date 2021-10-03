import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import Button from '@mui/material/Button';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@material-ui/core/Container';
import Card from './components/Card'
// import Tile from './components/Tile'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

function App() {
  const YOUR_APP_ID = "bb998e7e"; 
  const YOUR_APP_KEY = "17e9fb108d9e4c5522d35e32034aa9ee";

  const [query, setquery] = useState("")
  const [recipes, setrecipes] = useState([])

  var url = `https://api.edamam.com/search?q=${query}&
  app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&&calories=591-722&health=alcohol-free`
  // var url = `https://api.edamam.com/search?q=${query}&app_id=bb998e7e&app_key=17e9fb108d9e4c5522d35e32034aa9ee&from=0&to=3&calories=591-722&health=alcohol-free`

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
        <header className="App-header">
          <h3  className="header_title">Foodie Recipes</h3>
          <form className="search" onSubmit={onSubmit}>
            <input type="text" className="search-input" placeholder="Search recipes..." 
            value={query} onChange={(e) => setquery(e.target.value)}/>
            <Button type="submit" variant="contained">Search</Button>
          </form>


          {/* <div>
            {recipes.map(recipe => {
              return  <Tile recipe={ recipe } />;
            })}
          </div> */}

        </header>
        <div className="content">

          <Container maxWidth={false}>
            <Box sx={{ flexGrow: 1 }}>
              <Grid  container spacing={2}>
                  <Grid item xs={12} sm={6} md={4}>
                      {recipes.map(recipe => {
                        return  <Card recipe={ recipe } />;
                      })}
                  </Grid>
              </Grid>
            </Box>
          </Container>


            <ImageList sx={{ width: 500, height: 450 }}>
            {recipes.map(recipe => {
                <ImageListItem key={recipes.recipe}>

                  
                  {/* <img
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                  />
                  <ImageListItemBar
                    title={item.title}
                    subtitle={<span>by: {item.author}</span>}
                    position="below"
                  /> */}

                  return  <Card recipe={ recipe } />;
                </ImageListItem>
              })}
            </ImageList>


        </div>
      </div>
    </div>
  );
}

export default App;
