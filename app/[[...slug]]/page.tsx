import React from 'react'
import Home from './Home'
import NotFound from './not-found'

export function generateStaticParams() {
  return [
    { slug: [''] }, // Only handle root path
  ]
}

export default function Page({ params }) {
  // Only handle root path and unknown paths
  if (!params?.slug || params.slug.length > 0) {
    return <NotFound />
  }
  return <Home />
} 