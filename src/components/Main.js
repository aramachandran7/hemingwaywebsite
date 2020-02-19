import PropTypes from 'prop-types'
import React from 'react'
import hemingwayleadspic from '../images/hemingway2.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Why us?</h2>
          <p>
            Hi. Our names are Sarah and Adi. We're two NNHS Alumn from the class of 2019, and we're here to share a little story with you.  
          </p>
          <p> 
            Last summer, we ran a pilot college essay summer camp in Adi's living room. During the last week of May, we began preparing the camp, 
            building curriculum, and sending out emails frantically, to see how many people we could get on board. 
          </p>
          <p>
            Despite the incredible time crunch, things went surprisingly well. Our students loved the camp. Students from our 2019 Cohort will be attending schools like the 
            University of Michigan, University of Illinois for CS, and Vanderbilt.  
          </p>
          <p>
            Through sixteen hours of instruction over the course of a month last summer, we were able 
            to teach our students how to approach various types of college 
            essays (e.g. the Common App essay, “why major” essays, “why 
            school” essays, and “creative” essays) and how to create a 
            schedule / roadmap to chart out the college application process. 
            We also used the workshop as a forum to answer any and all 
            questions regarding the application process, such as the 
            differences between ED, EA, REA, and regular deadlines; the differences between liberal arts schools and traditional universities; what constitutes target, reach, and safety schools; when to ask for teacher recommendation letters; when to take and submit test scores; and much more!
          </p>
          <p><b>
              This summer, we're going to be expanding the size, revamping the curriculum, taking more feedback, and pushing ourselves to grow the program extensively.
            </b>
          </p>
          <p> 
            We plan on scaling our curriculum and prepping our teaching team to cover a wider range of college essay prompts, and dive deeper into mastering the Common Application itself. 
            We'll be investing more time into student's personal growth and working closely with them to build their personal roadmaps for professional and academic development.  
          </p>          
          <p>
            Find out more of the specifics on the details page. 
          </p>
          <p>
            Interested in joining this year? Check out the sign up page!
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Details.</h2>
          <p>
            This year, tentativly, we'll be running our camp at the Kroehler Family YMCA in Downtown Naperville. 📍
          </p>
          <p>
            We'll have 2 sessions, both during the month of June. 
          </p>
          <p>
            <b>A Tuesday + Thursday Session</b> from 6-8 PM. 
          </p>
          <p>
            <b>A Monday + Wednesday Session</b> from 6-8 PM.
          </p>
          <p>
            <b>The pricing comes out to $35/hour.</b> Besides the high quality small group & 1 on 1 tutoring, 
            applications prep advice, and unlimited Q&A from parents and students, you're paying for a great venue, tasty snacks, and good vibes all around. 🥰
          </p>
          <p>
            To reserve your spot, head to the sign up page and fill out the super quick form on the other page! 
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About Us. </h2>
          <span className="image main">
            <img src={hemingwayleadspic} alt="" />
          </span>
          <p>
            Hi! Thanks for checking out the about us section.
            Sarah is a Creative Writing and economics student at Columbia University and is passionate about  
            the liberal arts, and bringing value to others through high quality literary work and art. 
          </p>
          <p>
            Adi an engineering and entrepreneurship student at the Olin College of Engineering. He loves projects
            (his school is entirely project-based) and loves talking about engineering and nerdy stuff. 
            Both Sarah and Adi successfully applied to some of the top universities in the nation and would love 
            to share their experiences, tips, and tricks with you!  
          </p>
          <p>
          You can learn more about Adi (and read his blog) at <a href="https://adinocap.com">adinocap.com</a>! 
            
          </p>
          <p>
            Check out some of Sarah's poetry at the <a href="https://bluemarblereview.com/sunset-highway/">Blue marble Review</a>!
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Sign up! </h2>

          <p>
            Interested in joining us this summer? Tentativly, we'll be located at the Kroehler Family YMCA in Downtown Naperville. Sign up with the Google Form Below!
          </p>
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdYxUyzu3jAlfJ4rGpY_FKdB2toa9IH0a6vymvtajgLrfOGDQ/viewform?embedded=true" width="540" height="1356" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
          <ul className="icons">
            <li>
              <a href="https://www.instagram.com/aramachandran29/" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/sarahmzhou/" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/aramachandran7"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
