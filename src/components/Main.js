import PropTypes from 'prop-types'
import React from 'react'

// Images Import 
import adi from '../images/profiles/adi.jpg'
import anne from '../images/profiles/anne.jpg'
import doris from '../images/profiles/doris.jpg'
import jeff from '../images/profiles/jeff.jpg'
import neil from '../images/profiles/neil.jpg'
import sarah from '../images/profiles/sarah.jpg'
import feng from '../images/profiles/feng.jpg'
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
          <center><h2 className="major">Our Services</h2></center>
          <p>
          Founded by Naperville North High School alumni Adi Ramachandran and Sarah Zhou, <b>Juniper College Prep is a camp that helps high school students prepare for the college application process.</b> Specifically, <b>Juniper focuses on the essay component.</b>
          </p>
          <p> 
          From personal experience, we know how confusing and nerve-wracking the essay can be. <i>What do I want my essay to convey about me? Should I write about a big achievement or a quiet revelation? Should my tone be funny or contemplative? Am I focusing too much on narrative? On imagery? And what is this prompt asking me, really?</i> All of these swirling questions can make it seem nearly impossible to write a good essay, let alone one that’ll move an admissions officer.
          </p>
          <p>
          Fortunately, there is good news: writing an essay doesn’t have to feel that way! In fact, <b>Juniper strives to provide students the tools and guidance necessary to produce dynamic, compelling essays</b> that are sure to shine in any application pile. With our team of talented mentors, we first introduce students to the college application process and the different types of essays. Then, we guide students through the essay-writing process from the very first seeds of an idea to the last touch-ups on a final draft. To this end, our camp includes: 
          </p>
          <ul>
            <li><b>An in-depth look at different types of college essays</b></li>
            <li><b>Guidance in brainstorming and refining ideas</b></li>
            <li>Detailed <b>multi-draft feedback</b></li>
            <li><b>Lessons on various aspects of narrative essay-writing</b>, including tone, diction, personal voice, and narrative cohesion</li>
            <li><b>Example essays</b> that have been accepted by Top 20 Colleges, including schools within the Ivy League</li>
            <li><b>Guest speakers</b> on the college application process and the college experience</li>
            <li><b>One-on-one mentorship</b>, with a maximum mentor-to-student ratio of 1:3</li>
          </ul>
          <p>
          With these tools, as well as the guidance of our talented mentors, your essays are sure to stand out from the crowd! If you’re interested in joining us this summer, head on over to the Details page for more specifics.
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
          <center><h2 className="major">Details</h2></center>
          <p>
            WHO: any high school student, from rising freshmen to rising seniors!
          </p>
          <p>
            WHEN: four weeks over the month of July, beginning July 6
          </p>
          <ul> 
            <li><b>Session I:</b> M/W, 7:00-9:00 p.m. CST</li>
            <li><b>Session II:</b> T/Th, 7:00-9:00 p.m. CST</li>
          </ul>
          <p>
          WHERE: Zoom (Links will be sent out before each class)
          </p>
          <p>
            PRICING: 
          </p>
          <ul>
            <li><b>Early bird rate</b> (before June 15): $500 for the full camp</li>
            <li>Regular rate: $560 for the full camp</li>
            <li>We require all students to pay in full before their first class.</li>
            <li><b>Payments should be conducted through Zelle to smzhou1@gmail.com.</b> Please enter “Juniper College Prep” as well as the student’s name in the memo line.</li>
            <li><b>NOTE: Financial aid is available!</b> If you are currently part of a reduced fee program (e.g. free/reduced lunch) or otherwise receive financial assistance, the camp fee will be reduced to $80. If this cost is still a challenge to meet, contact us via email or phone, and we’ll be happy to work something out with you!</li>
          </ul>
          <p>DEADLINE TO SIGN UP: <b>July 1st</b></p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <center><h2 className="major">Meet Our Team</h2></center>
          
          <span className="image main">
            <img src={adi} alt="" />
          </span>
          <p>
            <b>Adi Ramachandran, Co-founder & Co-CEO</b>
          </p>
          <p>
            Adi is a rising second-year and Electrical & Computer Engineering major at the Olin College of Engineering. He’s super passionate about his entrepreneurship and engineering projects, which is fitting since he attends a 400-student school with no tests, finals, or midterms—only projects! In the past, he’s met President Obama at the White House Science Fair, worked on his own tech startup, and more. Ask him anything related to colleges, engineering, or education! Read his blog at <a href="https://adinocap.com">adinocap.com</a>!
          </p>
          <span className="image main">
            <img src={sarah} alt="" />
          </span>
          <p>
            <b>Sarah Zhou, Co-founder & Co-CEO</b>
          </p>
          <p>
            Sarah is a rising second-year at Columbia University, where she intends to study Creative Writing and Film & Media Studies. Her creative writing, which has been published by multiple literary journals, has been recognized by the Poetry Society of the United Kingdom, the Scholastic Art & Writing Awards, and the National Council of Teachers of English. She has also worked as the Development Operations Intern for the All Stars Project, a national nonprofit that transforms the lives of youth and poor communities through the developmental power of performance. In her free time, she is a dedicated consumer of rock music, soup dumplings, and coming-of-age films awash in ’80s nostalgia.
          </p>
          <span className="image main">
            <img src={neil} alt="" />
          </span>
          <p>
            <b>Neil Xu, Mentor</b>
          </p>
          <p>
            Neil is a member of Brown University’s Class of 2024 where he will be majoring in Computer Science and possibly Cognitive Science. Lately, Neil has developed an obsession with 3D printing and is working on a startup to create low-cost, 3D-printed saxophone mouthpieces for student players. When he’s not busy making CAD designs, Neil can be found in his basement woodworking, going on runs around Lisle and Naperville, or practicing every woodwind instrument in his house (namely the flute, the clarinet, and three different types of saxophones).
          </p>
          <span className="image main">
            <img src={anne} alt="" />
          </span>
          <p>
            <b>Anne Zhao, Mentor</b>
          </p>
          <p>
            Ann is part of the Class of 2024 at Wellesley College, planning on studying Cognitive and Linguistic Sciences. She is a proponent of the Oxford comma, avid user of semicolons, and voracious reader of diverse YA novels; email her at any time about anything and she will send back an unsolicited spreadsheet of book recommendations.
          </p>
          <span className="image main">
            <img src={doris} alt="" />
          </span>
          <p>
            <b>Doris Han, Mentor</b>
          </p>
          <p>
            Doris is a part of University of Chicago’s Class of 2024 studying Biology on a pre-med track. She is an extended metaphor connoisseur and a steadfast advocate for bad but clever puns. In the future, she hopes to achieve her dream of folding 1,000 paper cranes, but in the meantime, she finds entertainment in creating minimalistic art and playlists fueled by her vehement addiction to americanos. 
          </p>
          <span className="image main">
            <img src={jeff} alt="" />
          </span>
          <p>
            <b>Jeffery Zou, Mentor</b>
          </p>
          <p>
            Jeffrey is part of Brown University’s Class of 2024, likely majoring in English and Economics. When he’s not writing poetry or editing for Polyphony Lit, he enjoys taking nature hikes, climbing, and studying environmental science. He is also an avid fan of basketball.
          </p>
          <span className="image main">
            <img src={feng} alt="" />
          </span>
          <p>
            <b>Sarah Feng, Mentor</b>
          </p>
          <p>
          Sarah is a rising freshman at Yale University, where she plans to major in English and double major in History or Biology. Her creative writing, which has been published in numerous literary journals, has been awarded by the Poetry Society of the United Kingdom, the National Scholastic Art & Writing Awards, the Adroit Prizes in Poetry & Prose, and NCTE, among others. She is the Editor-in-Chief of COUNTERCLOCK Journal and the founding director of the Arts Collective. A lover of dark chocolate, rain, Christopher Nolan films, and flowers, Sarah enjoys spending time in art museums and running long-distance in her free time.
          </p>
          {close}
        </article>

        <article
          id="colleges"
          className={`${this.props.article === 'colleges' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <center><h2 className="major">Student Results</h2>
          <p>
            Since the inception of Juniper College Prep in 2019, we have been lucky enough to mentor an astounding number of passionate, driven, and innovative high school students. They have subsequently been accepted by the following colleges and universities:
          </p>
            <ul style={{listStyleType:"none"}}> 
              <li>Brown University</li>
              <li>Case Western Reserve University</li>
              <li>Georgetown University</li>
              <li>Rice University</li>
              <li>University of California, Berkeley</li>
              <li>University of California, Irvine</li>
              <li>University of California, San Diego</li>
              <li>University of California, Santa Barbara</li>
              <li>University of Illinois at Urbana-Champaign</li>
              <li>University of Michigan</li>
              <li>Washington University in St. Louis</li>
              <li>Wellesley College</li>
            </ul>
          <p>
          Our students have also been accepted by the following highly selective university programs:
          </p>
            <ul style={{listStyleType:"none"}}> 
              <li>UC Berkeley’s Electrical Engineering & Computer Sciences Program</li>
              <li>UIUC’s Computer Sciences Program</li>
            </ul>
          <p>
            Congrats to all of our alumni—we are so incredibly proud of you!
          </p>
          </center>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <center><h2 className="major">Sign up!</h2></center>

          <p>
            Interested in joining us this summer? Sign up with the Google Form Below!
          </p>
          <div
          style={{
            position:"relative",
            paddingTop:"251.2%",
            overflow:"hidden",
          }}
          >
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdYxUyzu3jAlfJ4rGpY_FKdB2toa9IH0a6vymvtajgLrfOGDQ/viewform?embedded=true" width="540" height="1356" frameborder="0" marginheight="0" marginwidth="0"
            style={{position:"absolute", top:0, left:0, width:"100%", height:"100%", border:0}}
            >Loading…</iframe>
          </div>
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
