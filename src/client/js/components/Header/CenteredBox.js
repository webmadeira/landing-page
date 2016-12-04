import React, { PropTypes } from 'react'
import translate from '../translate'

const Headline = (props) => {
  const { title, description, location } = props.strings

  return (
    <section className="m-header-centered-box">
      <header className="a-headline">{title}</header>
      <p className="a-subheading">{description}</p>
      <footer className="a-subheading is-highlight">{location}</footer>
    </section>
  )
}

export default translate('Headline')(Headline)
