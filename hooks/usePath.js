import { useState, useEffect } from 'react'
import { LANGUAGE_CN, LANGUAGE_JP, LANGUAGE_EN } from '../utils/type'

const usePath = (props) => {
  const [language, setLanguage] = useState('')

  useEffect(() => {
    if (props === LANGUAGE_CN) {
      setLanguage('/cn')
    }
    if (props === LANGUAGE_JP) {
      setLanguage('/jp')
    }
    if (props === LANGUAGE_EN) {
      setLanguage('')
    }
  }, [props])

  return language
}

export default usePath
