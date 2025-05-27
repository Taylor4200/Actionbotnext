import React from 'react'
import Home from './Home'
import NotFound from './not-found'

export function generateStaticParams() {
  return [
    { slug: [''] }, // Only handle root path
  ]
}

export default function Page({ params }) {
  // Only show Home for root path, NotFound for everything else
  if (!params?.slug || params.slug.length === 0 || (params.slug.length === 1 && params.slug[0] === '')) {
    return <Home />
  }
  return <NotFound />
} 