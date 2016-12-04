import React, { PropTypes } from 'react'
import translate from '../translate'

const Sponsors = props => (
  <footer className="o-footer">
    <div className="o-container">
      <p className="a-body-2 is-highlight is-cap">{props.strings.title}</p>
      <a
        href="https://www.facebook.com/CasaDoPovoDaSerraDeAgua"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/img/sponsor-serra-de-agua.jpg" alt="logo" />
      </a>
    </div>
  </footer>
)

Sponsors.propTypes = {
  strings: PropTypes.objectOf(PropTypes.string),
}

export default translate('Sponsors')(Sponsors)
