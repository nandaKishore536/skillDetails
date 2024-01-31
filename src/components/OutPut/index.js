import './index.css'

const OutPut = props => {
  const {skill} = props
  const {name, imageUrl, description} = skill

  return (
    <div className="div">
      <img src={imageUrl} alt={name} className="skill_img" />

      <div className="sub">
        <h1 className="h1">{name}</h1>

        <p className="par">{description}</p>
      </div>
    </div>
  )
}

export default OutPut
