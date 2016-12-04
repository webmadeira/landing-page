import React, { PropTypes } from 'react'
import translate from '../translate'
import Language from './Language'
import CenteredBox from './CenteredBox'
import Info from './Info'

const Header = props => (
  <header className="o-header">
    <Language onLanguageChange={props.onLanguageChange} />
    <img src="/img/logo.png" className="a-brand-logo" alt="logo" />
    <CenteredBox />
    <Info />
  </header>
)

Header.propTypes = {
  strings: PropTypes.objectOf(PropTypes.string),
}

export default translate('Header')(Header)
