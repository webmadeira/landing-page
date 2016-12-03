import React, { PropTypes } from 'react'

const Event = (props) => {
  const { theme, description } = props

  return (
    <section>
      <h2>{theme}</h2>
      <p>{description}</p>
    </section>
  )
}

export default Event
