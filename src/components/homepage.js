import React from 'react'
import ReactDOM, { render } from 'react-dom';
import logo from '../images/myImage.jpeg'
import '../scss/home.css'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import ReactFile from '../components/react.js'
const Home=()=>(
    <main>
        <header className="home">
            <h1 className="greetings">Hola!</h1>
            <h1 className="welcome">Welcome to my notebook</h1>
        </header>
        <img src={logo} className="home-logo" alt="Eshika Mahajan, Intern, PS" />
      
        <section>
            <h2>Let's take a tour!</h2>
            <BrowserRouter>
            <Link to = '/react' style={{textDecoration:"none"}}><button>React</button></Link> 
            <button>HTML</button>
            <button>JS</button>
            
            <Switch>
            
                <Route path="/react">
                    <ReactFile/>
                </Route>
            </Switch>
            </BrowserRouter>
            
            
        </section>
    </main>
)      


       

export default Home