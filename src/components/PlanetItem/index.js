// Write your code here
import './index.css'

const PlanetItem = props => {
  const {sliderDetails} = props
  const {name, imageUrl, description} = sliderDetails
  return (
    <div className="each-slide">
      <img src={imageUrl} alt={`planet ${name}`} className="image" />
      <h1 className="name-heading">{name}</h1>
      <p className="description">{description}</p>
    </div>
  )
}

export default PlanetItem
