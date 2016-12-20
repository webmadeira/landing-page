import React from 'react'
import en from '../i18n/en'
import pt from '../i18n/pt'

const languages = {
  en,
  pt,
}

// TODO: Export default PropTypes, so it can be imported by all components

export default function translate(key) {
  return (Component) => {
    class TranslationComponent extends React.Component {
      render() {
        const strings = languages[this.context.currentLanguage][key]
        const currentLanguage = this.context.currentLanguage
        return (
          <Component
            {...this.props}
            {...this.state}
            strings={strings}
            currentLanguage={currentLanguage}
          />
        )
      }
    }

    TranslationComponent.contextTypes = {
      currentLanguage: React.PropTypes.string,
    }

    return TranslationComponent
  }
}
