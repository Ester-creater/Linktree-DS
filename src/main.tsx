import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import "./global.css"
import { createRouter, RouterProvider } from '@tanstack/react-router'

import { routeTree } from './routeTree.gen.ts';

declare module "@tanstack/react-router" {
  interface register {
    router: typeof router
  }
}

const router = createRouter({routeTree})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
