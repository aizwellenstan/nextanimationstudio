import { useRouter } from 'next/router'
import { LANGUAGE_CN, LANGUAGE_JP, LANGUAGE_EN } from '../utils/type'

const useLanguage = () => {
  const router = useRouter()
  const { asPath } = router
  let language = ''

  if (asPath.includes('/cn')) {
    language = LANGUAGE_CN
  } else if (asPath.includes('/jp')) {
    language = LANGUAGE_JP
  } else {
    language = LANGUAGE_EN
  }

  return language
}

export default useLanguage
