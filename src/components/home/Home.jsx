import React from 'react'
import Hero  from './hero/Hero'
import AboutCard from '../about/AboutCard'
import HAbout from './HAbout'
import Testimonal from './testimonal/Testimonal'
import HBlog from './HBlog'
import HPrice from './HPrice'

const Home = () => {
  return (
    <>
        <Hero/>
        <AboutCard/>
        <HAbout/>
        <Testimonal/>
        <HBlog/>
        <HPrice/>
    </>
  )
}
export default Home
