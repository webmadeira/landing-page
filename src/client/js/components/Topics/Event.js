import React, { PropTypes } from 'react'
import Ballon from './Ballon'
import Topic from './Topic'
import Speaker from './Speaker'

const Event = (props) => {
  const { image, theme, description, speakers } = props

  return (
    <article key={theme}>
      <Ballon image={image} />
      <Topic theme={theme} description={description} />
      <Speaker speakers={speakers} />
    </article>
  )
}

export default Event
