import React from "react";
import CustomerReview from "../customerReview/CustomerReview";
import Updates from "../updates/Updates";
import { RightSides, Update } from "./RightSideStyles.jsx";

const RightSide = () => {
  return (
    <RightSides>
      <Update>
        <h3>Updates</h3>
        <Updates />
      </Update>
      <CustomerReview>
        <h3>Customer Review</h3>
        <CustomerReview />
      </CustomerReview>
    </RightSides>
  );
};

export default RightSide;
