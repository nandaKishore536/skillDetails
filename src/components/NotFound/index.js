import './index.css'

const NotFound = () => (
  <div className="notFound_bg">
    <img
      src="https://assets.ccbp.in/frontend/react-js/tech-era/not-found-img.png"
      alt="not found"
      className="not_img"
    />
    <h1 className="not_h1">Page Not Found</h1>
    <p className="not_par">
      We are sorry, the page you requested could not be found.
    </p>
  </div>
)

export default NotFound
