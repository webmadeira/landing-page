import React, { PropTypes } from 'react'
import translate from './translate'

// TODO: Map each language
const Footer = props => (
  <footer>
    <a href="#en" onClick={() => props.onLanguageChange('en')}>{props.strings.en}</a>
    <a href="#pt" onClick={() => props.onLanguageChange('pt')}>{props.strings.pt}</a>
  </footer>
)

Footer.propTypes = {
  strings: PropTypes.objectOf(PropTypes.string),
  onLanguageChange: PropTypes.func,
}

export default translate('Footer')(Footer)
