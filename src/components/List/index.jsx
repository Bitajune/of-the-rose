import React, { Component } from 'react';
import GoogleMap from '../GoolgeMap'

class List extends Component {
    state = {
        data: [],
        errorState: null,
        loading: false,
    };

    componentDidMount = () => {
        // this.setState({
        //     data: this.props.data
        // })
    }

    render() {

        console.log(this.props.data, "i am props")
        console.log(this.state.data, "i am data")
        return (
            <div >
                {
                    this.props.data.map((d, idx) =>
                        <div className="searchDiv" style={{ display: "flex", justifyContent: 'space-between', height: '19rem' }}>
                            <ul className="listDiv">
                                <h3 className="searchTitle">{d.name} </h3>
                                <li className="searchDisplay">{d.price}</li>
                                <li className="searchDisplay">{d.display_phone}</li>
                                <li className="searchDisplay">{d.location.display_address}</li>
                                <li className="searchDisplay"><a class="siteLink" href={d.url} target="_blank">
                                    Yelp Page</a></li>
                            </ul>
                            <div><GoogleMap coordinates={d.coordinates} /></div>
                        </div>
                    )
                }
            </ div>
        )
    }
}

export default List