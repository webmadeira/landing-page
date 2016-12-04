import React, { PropTypes } from 'react'
import Ballon from './Ballon'

const Event = (props) => {
  const { image, theme, description } = props

  return (
    <section className="o-event-topic-header">
      <Ballon image={image} />
      <div className="m-topic-title">
        <span className="a-title is-highlight">{theme}</span>
      </div>
    </section>
  )
}

export default Event
