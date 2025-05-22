import React from 'react'
import Home from './Home'
import NotFound from './not-found'

export function generateStaticParams() {
  return [{ slug: [''] }]
}

export default function Page({ params }) {
  // If the route is not the root, show NotFound
  if (params?.slug && params.slug.length > 0) {
    return <NotFound />
  }
  return <Home />
} 