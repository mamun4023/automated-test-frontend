import { http, HttpResponse } from 'msw'
 
export const handlers = [

  http.get('/users', () => {
    return HttpResponse.json({
      id: '1',
      firstName: 'Tohid',
      lastName: 'Hasan',
    })
  }),

  
]