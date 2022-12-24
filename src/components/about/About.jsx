import React from 'react'
import './about.css'
import ME from '../../assets/about.JPG'
import {DiAptana} from 'react-icons/di'
import {FaCode} from 'react-icons/fa'
import {BiDumbbell} from 'react-icons/bi'


const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className='about__content'>
          <div className="about__cards">
            <article className='about__card'>
              <DiAptana className='about__icon'/>
              <h5>Experience</h5>
              <small>
                Sofware developer at Hack4Impact and Business Analyst Intern at Coveo
              </small>
            </article>

            <article className='about__card'>
              <FaCode className='about__icon'/>
              <h5>Projects</h5>
              <small>
                Machine Learning, Web dev and many more!
              </small>
            </article>

            <article className='about__card'>
              <BiDumbbell className='about__icon'/>
              <h5>Interests</h5>
              <small>
                Painting, Iceskating and Working out!
              </small>
            </article>
          </div>

          <p>
          I'm a computer science, economics and finance student at McGill University. I have experience working as a software developer at Hack4Impact focusing on web development using typescript and react. I'm also part of the McGill AI society where I worked on projects involving machine learning and data analysis. I am skilled in programming languages such as Python and Java, and am interested in pursuing a career in artificial intelligence and machine learning. I have also participated in various hackathons and programming competitions. In my free time, I enjoy exploring new technologies and staying up-to-date with industry developments.
          </p>

          <a href="#contact" className="btn btn-primary">Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
