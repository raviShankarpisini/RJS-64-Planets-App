// Write your code here
import Slider from 'react-slick'
// import {GrFormPreviousLink, GrFormNextLink} from 'react-icons/gr'

import PlanetItem from '../PlanetItem'

// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  const settings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className="bg-container">
      <div className="slider-container" testid="planets">
        <h1 className="heading">PLANETS</h1>
        <Slider>
          {planetsList.map(each => (
            <PlanetItem key={each.id} sliderDetails={each} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default PlanetsSlider
