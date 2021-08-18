import React from "react";

import CITY_DATA from "../Pages/City-Data";
import CityShow from "./City-Show.component"

class CityItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: CITY_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ ...otherCollectionProps}) => (
          <CityShow {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default CityItem;