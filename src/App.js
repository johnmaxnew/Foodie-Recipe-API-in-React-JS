import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import Button from '@mui/material/Button';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@material-ui/core/Container';
import Card from './components/Card'
// import Tile from './components/Tile'


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

        </header>
        <div className="content">

          <Container maxWidth={false}>
            <Box >
              <Grid  className="gridd" container spacing={2}>
                  <Grid className="gridd" item xs={12} sm={6} md={4}>
                      {recipes.map(recipe => {
                        return  <Card item xs={12} sm={6} md={4} recipe={ recipe } />;
                      })}
                  </Grid>
              </Grid>
            </Box>
          </Container>





          <div class="row pb-5 mb-4">



        
<div class="col-lg-3 col-md-6 mb-4 mb-lg-0">

    <div class="card rounded shadow-sm border-0">
        <div class="card-body p-0">
            <div class="bg-primary px-5 py-4 text-center card-img-top"><img src="https://d19m59y37dris4.cloudfront.net/university/1-1-1/img/teacher-4.jpg" alt="..." width="100" class="rounded-circle mb-2 img-thumbnail d-block mx-auto"/>
                <h5 class="text-white mb-0">Emma Nevoresky</h5>
                <p class="small text-white mb-0">Elite user</p>
            </div>
            <div class="px-5 py-4 text-center">
                <h5 class="mb-0">Mark Rockwell</h5>
                <p class="small text-muted">CEO - Consultant</p>
            </div>
        </div>
    </div>
</div>

<div class="col-lg-3 col-md-6 mb-4 mb-lg-0">

    <div class="card rounded shadow-sm border-0">
        <div class="card-body p-0">
            <div class="bg-success px-5 py-4 text-center card-img-top"><img src="https://d19m59y37dris4.cloudfront.net/university/1-1-1/img/teacher-2.jpg" alt="..." width="100" class="rounded-circle mb-2 img-thumbnail d-block mx-auto"/>
                <h5 class="text-white mb-0">Samuel Hardy</h5>
                <p class="small text-white mb-0">Elite user</p>
            </div>
            <div class="px-5 py-4 text-center">
                <h5 class="mb-0">Mark Rockwell</h5>
                <p class="small text-muted">CEO - Consultant</p>
            </div>
        </div>
    </div>
</div>

<div class="col-lg-3 col-md-6 mb-4 mb-lg-0">

    <div class="card rounded shadow-sm border-0">
        <div class="card-body p-0">
            <div class="bg-info px-5 py-4 text-center card-img-top"><img src="https://d19m59y37dris4.cloudfront.net/university/1-1-1/img/teacher-7.jpg" alt="..." width="100" class="rounded-circle mb-2 img-thumbnail d-block mx-auto"/>
                <h5 class="text-white mb-0">Tom Sunderland</h5>
                <p class="small text-white mb-0">Elite user</p>
            </div>
            <div class="px-5 py-4 text-center">
                <h5 class="mb-0">Mark Rockwell</h5>
                <p class="small text-muted">CEO - Consultant</p>
            </div>
        </div>
    </div>
</div>

<div class="col-lg-3 col-md-6 mb-4 mb-lg-0">

    <div class="card rounded shadow-sm border-0">
        <div class="card-body p-0">
            <div class="bg-warning px-5 py-4 text-center card-img-top"><img src="https://d19m59y37dris4.cloudfront.net/university/1-1-1/img/teacher-1.jpg" alt="..." width="100" class="rounded-circle mb-2 img-thumbnail d-block mx-auto"/>
                <h5 class="text-white mb-0">John Tarly</h5>
                <p class="small text-white mb-0">Elite user</p>
            </div>
            <div class="px-5 py-4 text-center">
                <h5 class="mb-0">Mark Rockwell</h5>
                <p class="small text-muted">CEO - Consultant</p>
            </div>
        </div>
    </div>
</div>


</div>









        </div>
      </div>
    </div>
  );
}

export default App;
