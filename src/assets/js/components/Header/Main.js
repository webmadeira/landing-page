import React, { PropTypes } from 'react'
import translate from '../translate'
import Language from './Language'
import Headline from './Headline'
import Info from './Info'

const Header = props => (
  <header>
    <Language onLanguageChange={props.onLanguageChange} />
    <img src="/img/logo.png" alt="logo" />
    <Headline />
    <Info />
  </header>
)

Header.propTypes = {
  strings: PropTypes.objectOf(PropTypes.string),
}

export default translate('Header')(Header)
