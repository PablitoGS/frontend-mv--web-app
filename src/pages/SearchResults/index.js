/* eslint-disable react/prop-types */
import React, {useContext, useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import Context from '@s-ui/react-context'

import './index.scss'

import ThumbnailPicture from '@frontend-mv--uilib-components/sui-thumbnail-picture'
import ThumbnailPictureList from '@frontend-mv--uilib-components/sui-thumbnail-list'

const textSearchResultsTitle = 'Resultados para: '

const SearchResults = ({params}) => {
  const {keyword} = params
  const [movies, setMovies] = useState([])
  const {domain} = useContext(Context)

  useEffect(() => {
    domain
      .get('search_movies_use_case')
      .execute({keyword})
      .then(movies => {
        const movie = movies
        setMovies(movie)
      })
  }, [domain, keyword])

  return (
    <>
      <h2 className="SearchResults-heading">
        {textSearchResultsTitle} <strong>{keyword}</strong>
      </h2>
      <ThumbnailPictureList>
        {movies.map(movie => (
          <ThumbnailPictureList.Item key={movie.id}>
            <ThumbnailPicture
              src={movie.posterPath}
              alt={movie.title}
              caption={movie.title}
            />
          </ThumbnailPictureList.Item>
        ))}
      </ThumbnailPictureList>
    </>
  )
}

SearchResults.propTypes = {
  keyword: PropTypes.string
}

export default SearchResults
