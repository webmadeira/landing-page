import React, { PropTypes } from 'react'
import Speaker from './Speaker'

const Body = (props) => {
  const { speakers, theme, description } = props

  return (
    <section className="o-event-topic-body">
      <div className="m-topic-description">
        <p className="a-body-1 is-highlight">{description}</p>
        <Speaker speakers={speakers} />
      </div>
    </section>
  )
}

export default Body
