/* eslint-disable react/prop-types */
import React, {useContext, useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import Context from '@s-ui/react-context'
import {Link} from '@s-ui/react-router'

import './index.scss'

import ThumbnailPicture from '@frontend-mv--uilib-components/sui-thumbnail-picture'
import ThumbnailPictureList from '@frontend-mv--uilib-components/sui-thumbnail-list'

const textSearchResultsTitle = 'Resultados para: '

const SearchResults = ({params}) => {
  const {keyword} = params
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const {domain} = useContext(Context)

  useEffect(() => {
    domain
      .get('search_movies_use_case')
      .execute({keyword})
      .then(movies => {
        const movie = movies
        setMovies(movie)
        setLoading(false)
      })
  }, [domain, keyword])

  if (loading) return <i>Cargando...</i>

  return (
    <>
      <h2 className="SearchResults-heading">
        {textSearchResultsTitle} <strong>{keyword}</strong>
      </h2>
      {movies.length ? (
        <ThumbnailPictureList>
          {movies.map(movie => (
            <ThumbnailPictureList.Item key={movie.id}>
              <Link to={`/details/${movie.id}`}>
                <ThumbnailPicture
                  src={movie.posterPath}
                  alt={movie.title}
                  caption={movie.title}
                  path={`/details/${movie.id}`}
                />
              </Link>
            </ThumbnailPictureList.Item>
          ))}
        </ThumbnailPictureList>
      ) : (
        <p className="SearchResults-error">
          No hay películas que mostrar. Prueba otra búsqueda o revisa si lo has
          escrito correctamente
        </p>
      )}
    </>
  )
}

SearchResults.propTypes = {
  keyword: PropTypes.string
}

export default SearchResults
