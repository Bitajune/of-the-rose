import React, { Component } from 'react';

class List extends Component {
    state = {
        data: [],
        errorState: null,
        loading: false,
    };



    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         data: [],
    //         errorState: null,
    //         loading: false,
    //     };
    // }



    componentDidMount = () => {
        // this.setState({
        //     data: this.props.data
        // })
    }

    // componentDidUpdate(prevProps, prevState) {
    //     if (this.props.searchLocationQuery !== prevProps.searchLocationQuery) {
    //         this.setState({
    //             results: [],
    //         }, () => this.getRestaurantsFromApi(this.props.searchLocationQuery))
    //     }
    // }
    // renderRestaurantInfo() {

    //     const RestaruantList = this.state.results.map((result) => {

    //         return (
    //             <div
    //                 className="RestaurantInfo"
    //                 key={result.id}
    //             >
    //                 <img src={result.image_url} alt="" className="RestaurantInfo__img" />
    //                 <h2 className="heading-tertiary RestaurantInfo__name">{result.name}</h2>

    //                 <p className="RestaurantInfo__para">
    //                     <FontAwesomeIcon
    //                         icon="map-marker-alt"
    //                         className="RestaurantInfo__icon"
    //                         aria-label="address:" />
    //                     {result.location.display_address[0]}, {result.location.display_address[1]}
    //                 </p>

    //                 <p className="RestaurantInfo__para">
    //                     <FontAwesomeIcon
    //                         icon="phone"
    //                         className="RestaurantInfo__icon"
    //                         aria-label="phone number:" />
    //                     {result.phone}
    //                 </p>

    //                 <img
    //                     src={require(`../../assets/yelp_stars/regular/${result.rating}.png`)}
    //                     alt={`yelp ratings: ${result.rating}/5`}
    //                     className="RestaurantInfo__rating" />

    //                 <p className="RestaurantInfo__reviewCount"> Based on {result.review_count} Reviews</p>

    //                 <a
    //                     href={result.url}
    //                     className="RestaurantInfo__website">
    //                     More infomration on Yelp
    //                 </a>

    //             </div>
    //         );
    //     });

    render() {

        console.log(this.props.data, "i am props")
        console.log(this.state.data, "i am data")
        return (
            <ul>
                {this.props.data.map((d, idx) =>
                    <li>
                        <ul className="listDiv">
                            <h3>{d.name} </h3>
                            <li>{d.price}</li>
                            <li>{d.phone}</li>
                        </ul>
                    </li>

                )}
            </ul>
        )
    }
}

export default List