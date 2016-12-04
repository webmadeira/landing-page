import React, { PropTypes } from 'react'

const Ballon = props => <div className="m-balloon-wrapper">
  <img src="/img/balloon.svg" alt="balloon" />
  <p className="a-event-detail is-long-text">{props.text}</p>
</div>

export default Ballon
