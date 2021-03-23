import React, { useState } from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

import weather from '../images/weather.jfif'
import counter from '../images/counter.png'

import '../scss/react.css'

import Weather from '../components/weather'

const ReactFile = () => {

    const [apps,setApps] = useState([
                                        {learning:'Weather',content:'Lets checkout the weather today',logo:{weather},link:'/weather'},
                                        {learning:'Counter',content:'Lets do some number today',logo:{counter},link:'/counter'}
                                    ])
    return(
        <div className="react-learnings">
            {apps.map((item)=>{
                return <article className="learnings">
                    <figure>
                    <img src={counter} className="react-logo" alt={item.learning} />
                    <figcaption> <h3>{item.learning}: {item.content}</h3>
                   
                    <BrowserRouter>
                    <Link to = {item.link} style={{textDecoration:"none"}}>
                    <button>GO!</button>      
                    </Link>               
                    <Switch>                    
                        <Route path="/weather">
                            <Weather/>
                        </Route>
                    </Switch>
                    </BrowserRouter>
                    </figcaption>
                        
                        
                    </figure>                    
                </article>

            
            })}
        </div>
    )
}
export default ReactFile