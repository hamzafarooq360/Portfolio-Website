import React from 'react'
import './experience.css'
import {DiReact} from 'react-icons/di'
import Resume from '../../assets/resume.pdf'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Some of my</h5>
      <h2>Past Experiences</h2>

      <div className='container experience__container'>
        <div className='experience__hack4impact'>
          <DiReact className='experience__icon'/>
          <h3 className='heading'>Software Developer at Hack4impact</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              
              <small>
                • Part of the development team for a CRM tool for a Montreal-based nonprofit, which allowed employees to keep
                trace of their volunteers' information more effectively. <br />
                • Worked in an AGILE development environment along with a PM, a Tech Lead, and 5 developers. <br />
                <b>• Tech stack: Typescript, TypeORM, React.js, Express.js</b>
              </small>
            </article>
          </div>
        </div>

        <div className='experience__coveo'>
          <DiReact className='experience__icon'/>
          <h3 className='heading'>Business Analyst - Information Systems at Coveo</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <small>
                • Introduced a new streamlined and automated process for projects and  demands in the project management office
                by implementing Asana-Jira and Asana-ServiceNow integrations. <br />
                • Implemented several KPIs and metrics in Asana for more accurate reporting across the Project Management Office
                using AGILE development and delivery methodology. <br />
                <b> • Tech stack: Asana, Jira, ServiceNow, Microsoft Excel </b>
              </small>
            </article>
          </div>
        </div>

        <div className='experience__mais'>
          <DiReact className='experience__icon'/>
          <h3 className='heading'>McGill AI Society Machine Learning Bootcamp</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <small>
              • Developed an emotion detection model using the AlexNet CNN and deployed the model on a webapp using Flask. (see portfolio section) <br />
              • Gained both theoretical and hands-on skills required for applied ML research. <br />
                <b>• Tech stack: Python(Tensorflow, Keras, Numpy, Pandas, cv2, Math, Flask) HTML, CSS</b>
              </small>
            </article>
          </div>
        </div>
      </div>
      <div className='cta'>
        <a href={Resume} download className='btn btn-primary'>Download Resume</a>
        </div>
    </section>
  )
}

export default Experience
