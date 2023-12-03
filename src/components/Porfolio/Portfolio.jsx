import React from 'react'
import './Portfolio.css'
import project from '../../assets/first.png'

const Portfolio = () => {
  return (
    <section className='portfolio'>
      <h2>Portfolio</h2>
      <article className='first-project'>
        <h3>First Project Test</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam minima veritatis quos molestias facere vero, labore libero, doloribus non aliquid eveniet. Sapiente totam earum quae nesciunt in! Voluptates, vel earum?</p>
        <div>
          <img src={project} alt="first-project" />
        </div>
      </article>
    </section>
  )
}

export default Portfolio
