import React from 'react'
import Home from './Home'
import NotFound from './not-found'

export function generateStaticParams() {
  return [
    { slug: [''] }, // Root path
    { slug: ['signup'] }, // Signup path
    { slug: ['login'] }, // Login path
    { slug: ['contact'] }, // Contact path
    { slug: ['terms'] }, // Terms path
    { slug: ['privacy'] }, // Privacy path
    { slug: ['select-plan'] }, // Select plan path
  ]
}

export default function Page({ params }) {
  // If the route is not one of our known paths, show NotFound
  const knownPaths = ['', 'signup', 'login', 'contact', 'terms', 'privacy', 'select-plan'];
  if (params?.slug && (params.slug.length > 1 || !knownPaths.includes(params.slug[0]))) {
    return <NotFound />
  }
  return <Home />
} 