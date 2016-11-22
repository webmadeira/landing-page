import React, { Component } from 'react'
import { API_ROOT } from '../config'
import Header from './Header'
import Footer from './Footer'
import Menu from './Menu'
import Talks from './Talks'

class Root extends Component {
  constructor(props) {
    super(props)
    this.state = { talks: [] }
  }

  componentWillMount() {
    this.fetchTalks()
  }

  fetchTalks() {
    return fetch(`${API_ROOT}/talks`)
      .then(res => res.json())
      .then(talks => this.setState({ talks }))
  }

  render() {
    return (
      <div>
        <Header />
        <Menu />
        <Talks talks={this.state.talks} />
        <Footer />
      </div>
    )
  }
}

export default Root
