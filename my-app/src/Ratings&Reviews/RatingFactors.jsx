/* eslint-disable */
import React from 'react';

const RatingFactors = ({ chars }) => {
  let conditionalRender = () => {
    if (chars.Fit) {
      let fit = chars.Fit.value;
      let comfort = chars.Comfort.value;
      let length = chars.Length.value;
      let quality = chars.Quality.value
      return (
        <div>
          <div className="rfTitle">Fit</div>
          <input id="typeinp" type="range" max="5" value={fit} className="slider" readOnly/>
          <div className="factors-desc">
            <span className="rfDescriptors">Tight</span>
            <span className="rfDescriptors">Perfect</span>
            <span className="rfDescriptors">Long</span>
          </div>
          <div className="rfTitle">Comfort</div>
          <input id="typeinp" type="range" max="5" value={comfort} className="slider" readOnly/>
          <div className="factors-desc">
            <span className="rfDescriptors">Poor</span>
            <span className="rfDescriptors">Perfect</span>
          </div>
          <div className="rfTitle">Length</div>
          <input id="typeinp" type="range" max="5" value={length} className="slider" readOnly/>
          <div className="factors-desc">
            <span className="rfDescriptors">Short</span>
            <span className="rfDescriptors">Perfect</span>
            <span className="rfDescriptors">Long</span>
          </div>
          <div className="rfTitle">Quality</div>
          <input id="typeinp" type="range" max="5" value={quality} className="slider" readOnly/>
          <div className="factors-desc">
            <span className="rfDescriptors">Poor</span>
            <span className="rfDescriptors">Perfect</span>
          </div>
        </div>
      )
    } else {
      return (
        <React.Fragment></React.Fragment>
      )
    }
  }


  return (
    <React.Fragment>
      {conditionalRender()}
    </React.Fragment>

  )
}

export default RatingFactors;
