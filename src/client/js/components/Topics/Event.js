import React, { PropTypes } from 'react'
import Header from './Header'
import Body from './Body'


const Event = (props) => {
  const { image, theme, description, speakers } = props

  return (
    <article key={theme} className="o-event-topic">
      <Header theme={theme} image={image} />
      <Body description={description} speakers={speakers} />
    </article>
  )
}

export default Event
