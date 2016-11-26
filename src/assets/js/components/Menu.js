import React, { PropTypes } from 'react'
import translate from './translate'

const Menu = (props) => {
  const { speakers, location, sponsors } = props.strings
  return (
    <nav>
      <a href="#speakers">{speakers}</a>
      <a href="#location">{location}</a>
      <a href="#sponsors">{sponsors}</a>
    </nav>
  )
}

Menu.propTypes = {
  strings: PropTypes.objectOf(PropTypes.string),
}

export default translate('Menu')(Menu)
