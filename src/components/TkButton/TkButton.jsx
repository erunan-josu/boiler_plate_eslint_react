import { PropTypes } from 'prop-types'
import './TkButton.css'

const TkButton = ({ label, type, size, handleClick }) => {
  return (
    <button onClick={handleClick} className={`tk-btn tk-${type}-btn tk-${size}-btn`}>
      {label}
    </button>
  )
}

TkButton.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf(['primary', 'secondary', 'outlined']),
  size: PropTypes.oneOf(['lg', 'md', 'sm']),
  handleClick: PropTypes.func
}

export default TkButton