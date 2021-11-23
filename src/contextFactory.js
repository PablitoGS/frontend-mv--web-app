import Domain from 'frontend-mv--lib-movies'

const domain = new Domain()

const useCase = domain.get('get_movies_use_case')
debugger
useCase.execute()

export default async () => ({domain})
