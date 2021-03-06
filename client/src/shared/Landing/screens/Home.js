import React from 'react';
import { Link } from 'react-router-dom';
import TopNav from '../../components/TopNavGuest';
import Footer from '../../components/Footer';
import { getNav } from '../routes';
import { landingImg } from '../../data/landingLinks';

const styles = {
  marginTop: '-4.5%',
  paddingLeft: '5%',
  paddingRight: '5%'
};
const slogan = [
  'Pivot your career.',
  'Build a portfolio with real projects.',
  'A degree is not enough. You need relevant work experience.',
  'career building via amateur freelancing'
];
const moreInfo = [
  'Welcome to LooseLeaf. We provide a low stress and collaborative environment to help you launch your career in the creative and technology industries.',
  'Work on real projects for non-profits and entrepreneurs.',
  'Try out a career path. Build relevant work experience and professional connections by working on interesting side projects on your own time.',
  'Gain relevant work experience as a developer, designer, and writer by helping non-profits and entrepreneurs with projects.',
  'Work on side projects in a low stress, collaborative environment.'
];
const aboutPortfolio = [
  'Whether you are looking to launch your career as an employee or a freelancer, you need a portfolio. A portfolio provides examples for what you are capable of and is an important part of your brand.'
];
const aboutValidation = [
  'There is no restriction for how many people can work on each project but the project creator will choose the best submittal and the community can upvote your project submittal. This is similar to the way best answers are chosen and ranked on Quora.',
  'You will always get feedback from the project creators when you complete a project because all the projects on LooseLeaf are posted by people who need some help in designing a website for their non-profit, authors of a open source project on github in need of a logo, and teachers who need a tool to teach.'
];
const aboutMentorship = [
  'Follow other more advanced career hackers and get feeds on what projects they are working on, how they are completing each project, and their recommendations and lessons learned. You can follow in the footsteps of a more advanced career hacker that you want to become.',
  "How do you know the side projects you work on are not waste of your time? That's an important concern that LooseLeaf helps you answer by letting you follow other more advanced career hackers and give you realtime data on what projects they are working on and how they are completing each project."
];

const headline = {
  slogan: slogan[0],
  moreInfo: slogan[1]
};

// Responsive ClassName
function respClassName(screenSize) {
  switch (screenSize) {
    case 'small':
      return 'hide-on-med-and-up';
    case 'medium':
      return 'hide-on-large-only hide-on-small-only';
    case 'large':
      return 'hide-on-med-and-down';
    default:
      return '';
  }
}
export default class LandingHome extends React.Component {
  renderArea1() {
    const buttons = () => (
      <div className="row">
        <div className="col s12 m12 l12">
          <Link
            className="waves-effect waves-light btn white-text"
            style={{marginRight: 10}}
            to={getNav().signup}
          >
            Get Started
          </Link>
          <Link
            className="waves-effect waves-light btn teal teal-text lighten-5"
            to={getNav().howItWorks}
          >
            Learn More
          </Link>
        </div>
      </div>
    );

    const slogans = () => {
      return (
        <div className="row">
          <h4 className="text-green center">{ headline.slogan }</h4>
          <h5 className="text-green center">{ headline.moreInfo }</h5>
        </div>
      );
    };
    const images = () => (
      <div>
        <img className={respClassName('large')} alt="https://unsplash.com/photos/FFLGD4o149E" src={landingImg.coverLarge} style={{ width: '100%' }} />
        <img className={respClassName('medium')} alt="https://unsplash.com/photos/FFLGD4o149E" src={landingImg.coverMedium} style={{ width: '100%' }} />
        <img className={respClassName('small')} alt="https://unsplash.com/photos/FFLGD4o149E" src={landingImg.coverSmall} style={{ width: '100%' }} />
      </div>
    );
    return (
      <div id="landing-top" style={{ marginBottom: -7 }}>
        { images() }
        <div id="landing-top-text" className="center">
          <div className="col s12 m12 l12">
            {slogans()}
            {buttons()}
          </div>
        </div>
      </div>
    );
  }
  renderArea2() {
    return (
      <div className="section section-green">
        <div className="container">
          <h5 className="light text-white center">
            {moreInfo[0]}
          </h5>
        </div>
      </div>
    );
  }
  renderArea3() {
    return (
      <div className="section section-green">
        <div className="container text-white row" style={{ width: '90%' }}>
          <div className="col s12 m4 l4">
            <div className="col s4 m9 l4">
              <img src={landingImg.expertise} alt="" />
            </div>
            <div className="col s8 m12 l8">
              <p className="text-white">Try out a career path. Work on interesting side projects to build a portfolio and learn demonstrable skills.</p>
            </div>
          </div>
          <div className="col s12 m4 l4">
            <div className="col s4 m9 l4">
              <img src={landingImg.cultivate} alt="" />
            </div>
            <div className="col s8 m12 l8">
              <p className="text-white">Acquire relevant work experience and professional connections.</p>
            </div>
          </div>
          <div className="col s12 m4 l4">
            <div className="col s4 m9 l4">
              <img src={landingImg.share} alt="" />
            </div>
            <div className="col s8 m12 l8">
              <p className="text-white">Collaborate with other career hackers and shadow professionals.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  renderArea4(version) {
    const communities = [
      {
        title: 'Developers',
        desc: 'Full stack developer, frontend developer, and apps for desktop, mobile, webapp, and embedded systems',
        icon: 'code',
        link: '/community/developers'
      },
      {
        title: 'Designers',
        desc: 'Landing Page, Logo design, web design, UX design.',
        icon: 'format_shapes',
        link: '/community/designers'
      },
      {
        title: 'Illustrators',
        desc: 'Contribute comics and illustrations of blog posts, books, and advertising campaigns',
        icon: 'palette',
        link: '/community/illustrators'
      },
      {
        title: 'Writers',
        desc: 'Copywriter, grant writing, press release, ghost writing',
        icon: 'create',
        link: '/community/writers'
      },
      {
        title: 'Data Scientists',
        desc: 'Organizing and making sense of information.',
        icon: 'scatter_plot',
        link: '/community/data-scientists'
      },
      {
        title: 'Video Producers',
        desc: 'Animations and Explainer videos.',
        icon: 'theaters',
        link: '/community/video-producers'
      },
      {
        title: 'Everything Else',
        desc: 'Organizing and making sense of information.',
        icon: 'public',
        link: '/community/misc'
      }
    ];
    const short = (display) => {
      return (
        <div className={`row ${ display ? '' : 'hide'}`}>
          <div className="col">
            {
            communities.map((d, i) => {
              return (
                <div key={i} className="col s10 m6 l4 offset-s1">
                  <a href={d.link} className="">
                    <div className="card-panel center hoverable" style={{ padding: 5 }}>
                      <div className="row valign-wrapper" style={{ marginBottom: 0 }}>
                        <div className="col s12 m4 l3">
                          <i className="material-icons medium text-green">{d.icon}</i>
                        </div>
                        <div className="col s12 m8 l9">
                          <h6 className="col s12 m12 l10 offset-l1  text-brown" style={{ fontWeight: 700, fontSize: 16, textTransform: 'uppercase' }}>
                            {d.title}
                          </h6>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              );
            })
          }
          </div>
        </div>
      );
    };
    const long = (display) => {
      return (
        <div className={`row ${display ? '' : 'hide'}`}>
          {
            communities.map((d, i) => {
              return (
                <div key={i} className="col s12 m12 l4">
                  <img className="materialboxed" width="650" src="/assets/images/landing/mobile-laptop1.png" alt="" />
                  <h4 className="light text-green">{d.title}</h4>
                  <h6 className="light text-brown">{d.desc}</h6>
                  <br />
                </div>
              );
            })
          }
        </div>
      );
    };
    return (
      <div className="section white">
        <div className="row hero center" style={styles}>
          <div className="row container">
            <h4 className="text-green">Join a community</h4>
            <h6 className="light text-brown center">
              A community page is where you can post and browse projects, share advice, and make announcements.
            </h6>
          </div>
          {short(version === 'short')}
          {long(version === 'long')}
        </div>
      </div>
    );
  }
  renderArea5() {
    return (
      <div className="section white" style={styles}>
        <div className="row hero center" style={styles}>
          <div className="row container center">
            <h4 className="text-green">Build A Portfolio</h4>
            <p className="light text-brown">
              {aboutPortfolio[0]}
            </p>
            <a href="">Learn more <i className="fa fa-arrow-circle-right" aria-hidden="true" /></a>
          </div>
        </div>
      </div>
    );
  }
  renderArea6() {
    return (
      <div className="section white" style={styles}>
        <div className="row hero center" style={styles}>
          <div className="row container center">
            <h4 className="text-green">Get Validation</h4>
            <p className="light text-brown">
              {aboutValidation[0]}
            </p>
            <a href="">Learn more <i className="fa fa-arrow-circle-right" aria-hidden="true" /></a>
          </div>
        </div>
      </div>
    );
  }
  renderArea7() {
    return (
      <div className="section white" style={styles}>
        <div className="row hero center" style={styles}>
          <div className="row container center">
            <h4 className="text-green">Get Mentorship</h4>
            <p className="light text-brown">
              {aboutMentorship[0]}
            </p>
            <a href="">Learn more <i className="fa fa-arrow-circle-right" aria-hidden="true" /></a>
          </div>
        </div>
      </div>
    );
  }
  renderArea8() {
    return (
      <div className="section section-green" style={styles}>
        <div className="row container center">
          <h5 className="text-white">
            Join a community of career hackers and work on your portfolio today.
          </h5>
          <Link
            className="waves-effect waves-light btn teal teal-text lighten-5"
            style={{marginRight: 10}}
            to={getNav().signup}
          >
            Get Started
          </Link>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div>
        <TopNav route={this.props.route} extended={false} />
        {
          this.renderArea1()
        }
        {
          this.renderArea2()
        }
        {
          this.renderArea3()
        }
        {
          this.renderArea4('short')
        }
        {
          this.renderArea5()
        }
        {
          this.renderArea6()
        }
        {
          this.renderArea7()
        }
        {
          this.renderArea8()
        }
        <Footer />
      </div>
    );
  }
}
