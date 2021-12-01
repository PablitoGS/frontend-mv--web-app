/* eslint-disable react/prop-types */
import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import './index.scss'

import ThumbnailPicture from '@frontend-mv--uilib-components/sui-thumbnail-picture'
import ThumbnailPictureList from '@frontend-mv--uilib-components/sui-thumbnail-list'

const textSearchResultsTitle = 'Resultados para: '

const SearchResults = ({params}) => {
  const {keyword} = params
  const [movies, setMovies] = useState([])
  const URL = `https://api.themoviedb.org/3/search/movie?api_key=45f87653ea755690b034a9c960fac4b2&language=en-US&page=1&include_adult=false&query=${keyword}`

  useEffect(() => {
    requestMovies()

    async function requestMovies() {
      const res = await fetch(URL)
      const json = await res.json()
      const results = json.results
      setMovies(results)
    }
  }, [URL])

  return (
    <>
      <h2 className="SearchResults-heading">
        {textSearchResultsTitle} <strong>{keyword}</strong>
      </h2>
      <ThumbnailPictureList>
        {movies.map(movie => (
          <ThumbnailPictureList.Item key={movie.id}>
            <ThumbnailPicture
              src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
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
