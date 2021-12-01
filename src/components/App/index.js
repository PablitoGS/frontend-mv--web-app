import PropTypes from 'prop-types'
import {useState} from 'react'
import HeaderBase from '@frontend-mv--uilib-components/sui-header-base'
import {Link, useRouter} from '@s-ui/react-router'

import SearchMovies from '../SearchMovies'

import './index.scss'

const txtPlaceholder = 'BUSCAR PELICULAS'

const App = ({children}) => {
  const [keyword, setKeyword] = useState('')
  const router = useRouter()

  const searchMovie = () => {
    router.push(`/search/${keyword}`)
  }
  const inputSearch = e => {
    setKeyword(e.target.value)
  }
  return (
    <>
      <HeaderBase>
        <Link to="/">
          <h1 className="mv-Heading">Movies</h1>
        </Link>
      </HeaderBase>

      <SearchMovies
        value={keyword}
        placeholder={txtPlaceholder}
        handleChange={inputSearch}
        handleClick={searchMovie}
      />

      {children}
    </>
  )
}

App.displayName = 'App'
App.propTypes = {
  children: PropTypes.node
}

export default App
