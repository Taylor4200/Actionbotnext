import React from 'react'
import Home from './Home'
import NotFound from './not-found'

export function generateStaticParams() {
  return [
    { slug: [''] }, // Only handle root path
  ]
}

export default function Page({ params }) {
  // Check if this is the root path (homepage)
  const isRootPath = !params?.slug || params.slug.length === 0 || (params.slug.length === 1 && params.slug[0] === '');
  
  // Exclude admin routes - they are handled by the admin directory
  if (params?.slug && params.slug.length > 0 && params.slug[0] === 'admin') {
    return <NotFound />
  }
  
  if (isRootPath) {
    return <Home />
  }
  
  // For all other paths, return 404
  // The admin routes are handled by the (admin) route group
  // Other static pages should be created as separate route directories
  return <NotFound />
} 