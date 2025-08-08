import React from 'react'
import Navigation from '../../Components/Navigation'
import Hero from './Component/Hero'
import Hero2 from './Component/Hero2'
import Body from './Component/Body'
import Footer from '../../Components/Footer'
import KnowledgePreview from './Component/KnowledgePreview'

function HomePage() {
  return (
    <div>
      <Navigation/>
      <Hero2/>
      <Body/>
      <KnowledgePreview/>
      <Footer/>

    </div>
  )
}

export default HomePage