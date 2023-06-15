import React from "react";
import ReactSpeedometer from "react-d3-speedometer";

const styles = {
  dial: {
    display: "inline-block",
    width: `200px`,
    height: `auto`,
    fontFamily: "Satoshi",
    backgroundColor: "#ffff",
    borderRadius:"15px",
    padding: "5px",
    marginTop:"10px"
  },
};

const Speedometer = ({ value,maxvalue}) => {
  return (
    <div style={styles.dial}>
      <ReactSpeedometer
        maxValue={maxvalue}
        minValue={0}
        height={100}
        width={190}
        value={value}
        valueTextFontSize={"0px"}
        needleHeightRatio={0.65}
        needleTransition="easeQuadIn"
        needleTransitionDuration={1000}
        needleColor="#404040"
        ringWidth={20}
        segments={maxvalue}
        startColor="#86C135"
        endColor="#B92828"
      />
    </div>
  );
};

export default Speedometer;
