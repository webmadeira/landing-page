import React, { PropTypes } from 'react'
import translate from '../translate'

const Headline = (props) => {
  const { title, description, location } = props.strings

  return (
    <section>
      <header>{title}</header>
      <p>{description}</p>
      <footer>{location}</footer>
    </section>
  )
}

export default translate('Headline')(Headline)
