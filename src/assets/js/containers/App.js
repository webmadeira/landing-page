import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { changeLanguage } from '../actions/language'
import Header from '../components/Header/Main'
import Topics from '../components/Topics/List'
import Sponsors from '../components/Footer/Sponsors'

class App extends Component {
  getChildContext() {
    return {
      currentLanguage: this.props.currentLanguage,
    }
  }

  render() {
    return (
      <div>
        <Header onLanguageChange={this.props.changeLanguage} />
        <Topics />
        <Sponsors />
      </div>
    )
  }
}

App.propTypes = {
  currentLanguage: PropTypes.string,
  changeLanguage: PropTypes.func,
}

App.childContextTypes = {
  currentLanguage: PropTypes.string.isRequired,
}

function mapStateToProps(state) {
  return {
    currentLanguage: state.language.current,
  }
}

export default connect(mapStateToProps, { changeLanguage })(App)
