import React, { PropTypes } from 'react'

const Ballon = props => {
  const className = `a-event-detail ${props.class}`

  return (<div className="m-balloon-wrapper">
    <img src="/img/balloon.svg" alt="balloon" />
    <p className={className}>{props.text}</p>
  </div>)
}

export default Ballon
