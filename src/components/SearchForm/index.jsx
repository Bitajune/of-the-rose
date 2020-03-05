import React, { Component } from 'react';

class SearchForm extends Component {
    constructor() {
        super();
        this.state = {
            searchLocationQuery: ""
        }
    }

    handleSearchChange = (e) => {
        this.setState({
            searchLocationQuery: e.target.value
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault();

        this.props.onFormSubmit(this.state.searchLocationQuery)
    }

    render() {
        return (
            <div>
                <form onSubmit={(e) => this.handleFormSubmit(e)}>
                    <input
                        type='text'
                        placeholder='Enter City'
                        value={this.state.searchLocationQuery}
                        onChange={this.handleSearchChange}
                        className='searchInput'
                    />
                </form>
            </div>
        );
    }
}

export default SearchForm