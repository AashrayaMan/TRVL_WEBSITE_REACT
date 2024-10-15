import React, { useContext } from 'react';
import { TourContext } from '../Context/Context';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrum/Breadcrum';
import Tour_display from '../Components/Tour_display/Tour_display';

const Travels = () => {
  const { all_product } = useContext(TourContext);
  const { name } = useParams();

  // Check if name is defined and has a valid value
  if (name) {
    const destiny = all_product.find(e => e.name === name);
    console.log("destiny:", destiny);

    // Check if destiny is defined before rendering the components
    if (destiny) {
      return (
        <div>
          <Breadcrum Travels={destiny} />
          <Tour_display Travels={destiny} />
        </div>  
      );
    } else {
      // Handle the case when destiny is not found
      return <div>Product not found</div>;
    }
  } else {
    // Handle the case when name is not provided
    return <div>Invalid product URL</div>;
  }
};

export default Travels;