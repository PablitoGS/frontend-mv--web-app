import PropTypes from 'prop-types'
import {useState} from 'react'
import HeaderBase from '@frontend-mv--uilib-components/sui-header-base'
import HeaderSearch from '@frontend-mv--uilib-components/sui-header-search'
import Layout from '@frontend-mv--uilib-components/sui-layout-base'
import {Link, useRouter} from '@s-ui/react-router'

import './index.scss'

const textPlaceholder = '... Escribe aquí la película'
const textButton = 'BUSCAR'
const textHeading = 'Movies'

const App = ({children}) => {
  const [keyword, setKeyword] = useState('')
  const router = useRouter()

  const searchMovie = e => {
    if (keyword === '') {
      return alert('Debes introducir una búsqueda')
    }
    router.push(`/search/${keyword}`)
  }
  const inputSearch = e => {
    setKeyword(e.target.value)
  }
  return (
    <>
      <HeaderBase>
        <Link to="/">
          <h1 className="mv-AppHeading">{textHeading}</h1>
        </Link>
        <HeaderSearch
          value={keyword}
          placeholder={textPlaceholder}
          handleChange={inputSearch}
          handleClick={searchMovie}
          textButton={textButton}
        />
      </HeaderBase>
      <Layout>{children}</Layout>
    </>
  )
}

App.displayName = 'App'
App.propTypes = {
  children: PropTypes.node
}

export default App
