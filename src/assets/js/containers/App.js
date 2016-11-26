import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { changeLanguage } from '../actions/language'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Menu from '../components/Menu'
import Talks from '../components/Talks'

class App extends Component {
  getChildContext() {
    return {
      currentLanguage: this.props.currentLanguage,
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Menu />
        <Talks />
        <Footer onLanguageChange={this.props.changeLanguage} />
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
