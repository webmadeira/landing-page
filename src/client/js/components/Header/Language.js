import React, { PropTypes } from 'react'
import translate from '../translate'

// TODO: Map each language
const Language = props => (
  <nav className="o-container">
    <ul className="m-lang-selector">
      <li><a href="#en" className="a-lang a-link" onClick={() => props.onLanguageChange('en')}>{props.strings.en}</a></li>
      <li><a href="#pt" className="a-lang a-link" onClick={() => props.onLanguageChange('pt')}>{props.strings.pt}</a></li>
    </ul>
  </nav>
)

Language.propTypes = {
  strings: PropTypes.objectOf(PropTypes.string),
  onLanguageChange: PropTypes.func,
}

export default translate('Language')(Language)
