import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/fire.png'
import IMG2 from '../../assets/Emotion-Detection-1.png'
import IMG3 from '../../assets/malware-detection-blog-thumb.jpeg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Some of my</h5>
      <h2>Projects</h2>
      < div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
            <h3>Fireball</h3>
            <div className="portfolio__item-cta">
              <a href='https://github.com/hamzafarooq360/Python-Game-Fireball' className='btn btn-primary' target='_blank'>Github</a>
            </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
            <h3>Emotion Detection using CNN</h3>
            <div className="portfolio__item-cta">
              <a href='https://github.com/hamzafarooq360/Emotion-Detection-Using-CNN' className='btn btn-primary' target='_blank'>Github</a>
            </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
            <h3>Malware Prediction using RFC</h3>
            <div className="portfolio__item-cta">
              <a href='https://github.com/hamzafarooq360/Malware-Detection-using-Random-Forest-Classifiers' className='btn btn-primary' target='_blank'>Github</a>
            </div>
        </article>

      </div>


    </section>
  )
}

export default Portfolio
