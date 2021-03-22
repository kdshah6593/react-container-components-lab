import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends React.Component {
    constructor() {
        super();

        this.state = {
            searchTerm: "",
            reviews: []
        }
    }

    handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        })
      }

    handleSubmit = event => {
        event.preventDefault()
        fetch(URL + `&query=${this.state.searchTerm}`)
        .then(response => response.json())
        .then(data => this.setState({ reviews: data.results }))
    }

    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="searchTerm">Search Movie Reviews</label>
                    <input type="text" id="searchTerm" name="searchTerm" onChange={this.handleChange} />
                    <input type="submit" value="Search" />
                </form>
                
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer;