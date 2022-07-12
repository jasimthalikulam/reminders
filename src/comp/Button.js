import PropTypes from 'prop-types'
const Button = ({color,text,onClick,onMouseEnter}) => {
  return <button
   style = {{backgroundColor: color}} className = 'btn'
   onClick={onClick} onMouseEnter = {onMouseEnter}>{text}</button>
}
Button.defaultProps={
color:'black'
}
Button.propTypes={
    text:PropTypes.string,
    color:PropTypes.string,
    onClick:PropTypes.func
}
export default Button