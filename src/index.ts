import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { userRouter } from './users/users.router'
import {addressRouter} from './address/address.router'
import {stateRouter} from './state/state.router'
import { categoriesRouter } from './categories/categories.router'
import { cityRouter } from './city/city.router'
import { commentRouter } from './comment/comment.router'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

//custom routes
app.route('/', userRouter)

app.route('/' , addressRouter)

app.route('/' , stateRouter)

app.route('/' , categoriesRouter)

app.route('/' , cityRouter)

app.route('/' , commentRouter)

const port = 8000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
