import React, { PropTypes } from 'react'
import translate from '../translate'

const Sponsors = props => (
  <footer>
    <p>{props.strings.sponsors}</p>
    <a
      href="https://www.facebook.com/CasaDoPovoDaSerraDeAgua"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="/img/sponsor-serra-de-agua.jpg" alt="logo" />
    </a>
  </footer>
)

Sponsors.propTypes = {
  strings: PropTypes.objectOf(PropTypes.string),
}

export default translate('Sponsors')(Sponsors)
