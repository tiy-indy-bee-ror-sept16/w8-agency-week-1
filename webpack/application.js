// console.log("Hello everyone!");
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import Home from './components/Home'
import Items from './components/Items'
import Music from './components/Music'
import Farming from './components/Farming'
import NationalParks from './components/NationalParks'
import Movies from './components/Movies'
import SearchResults from './components/SearchResults'
import Checkout from './components/Checkout'
import Login from './components/Login'

// import { sharedState, attachSharedState, detachSharedState } from 'react-helpers/dist/sharedState'

// sharedState({
//     apiToken: sessionStorage.getItem('api_token')
// })

// window.path = window.location.href.includes('github') ? '/w6d4-make-chirp' : ''
// makes global var called path

document.addEventListener('DOMContentLoaded', function(event) {
    ReactDOM.render(// talk with back-end about
        <Router history ={browserHistory}>
            <Route path="/" component={Home} />
            <Route path="/items" component={Items}>
                <Route path="/music" component={Music} />
                <Route path="/farming" component={Farming} />
                <Route path="/nationalparks" component={NationalParks} />
                <Route path="/movies" component={Movies} />
            </Route>
            <Route path="/searchresults" component={SearchResults} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/login" component={Login} />
        </Router> ,
        document.querySelector('#app')
    )
})
