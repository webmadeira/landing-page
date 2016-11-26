import React, { PropTypes } from 'react'
import translate from './translate'

const Header = props => <header>{props.strings.title}</header>

Header.propTypes = {
  strings: PropTypes.objectOf(PropTypes.string),
}

export default translate('Header')(Header)
