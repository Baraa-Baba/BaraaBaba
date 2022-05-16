import Image from 'next/image'
import githubicon from '../assets/icons/github.png'
import twittericon from '../assets/icons/twitter.png'
import devtoicon from '../assets/icons/devtoicon.png'
import freelancericon from '../assets/icons/freelancer_com.jpg'
import mostqelicon from '../assets/icons/mostqel.png'
import Defention from './Defention'
const SocialAccounts = () => {
  return (
    <div id="social-cont" className=' block '>

      <a target={'_blank'} rel="noreferrer" title='freelancer'
        className=' fade-i social-media-linksn   align-between justify-between'
        href="https://www.freelancer.com/u/baraa12baba">
        <div className='social-media-links'>
          <div className='link-image'>
            <Image src={freelancericon} alt='freelancer icon' height='75' width='75' />
          </div>
          <h3 className="link-text">freelancer</h3>
          <Defention text="a freelancing website I work at" />
        </div>
      </a>
      <a target={'_blank'} rel="noreferrer" title='mostqel'
        className='fade-in social-media-links  align-between justify-between'
        href="https://mostaql.com/u/Baraa1Baba">
        <div className='social-media-links'>
          <Image src={mostqelicon} alt='mostqel icon' height='75' width='75' />
          <h3 className="link-text">mostqel</h3>
          <Defention text="Arabic freelancing website I work at" />
        </div>
      </a>
      <a target={'_blank'} rel="noreferrer" title='github' className=' fade-in mr-[auto]'
        href="https://gith social-media-linksub.com/baraa-baba">
        <div className='social-media-links'>
          <div className='link-image'>
            <Image src={githubicon} alt='github link' height='75' width='75' />
          </div>
          <h3 className="link-text">github</h3>
          <Defention text="I contribute in open source" />
        </div>
      </a>
      <a target={'_blank'} title='twitter' rel="noreferrer"
        className='m-auto  social-media-links fade-in'
        href="https://twitter.com/baraa_baba">
        <div className='social-media-links'>
          <div className='link-image'>
            <Image src={twittericon} alt='twitter link' height='75' width='75' />
          </div>
          <h3 className="link-text">twitter</h3>
        </div>
      </a>
      <a target={'_blank'} title='dev.to' rel="noreferrer"
        className='m-auto  social-media-links fade-in'
        href="https://dev.to/baraa_baba">
        <div className='social-media-links'>
          <div className='link-image'>
            <Image src={devtoicon} alt='dev.to link' height='75' width='75' />
          </div>
          <h3 className="link-text">dev</h3>
          <Defention text="A blogging site I blog in" />
        </div>
      </a>
      <style jsx>
        {`
        .social-media-links{
          max-width:100vw;
          border:2px solid white
          border-radius:9999px;
          display:block;
          padding-right:5rem;
          padding:1rem;
          margin:0 0 1rem 0;
          width:fit;
        }
        .link-image{
          display:inline-block;
          border-radius:75%;
        }
        .link-text{
          display:inline-block;
          font-size:4rem;
          color:white;
        }
                  @media (max-width: 500px) {
                    a{
                      width:100vw
                    }
                    .link-text{
                      font-size:3.5rem
                    }
                    #social-cont{
                      display:block
                    }
}
        `}
      </style>
    </div>
  )
}

export default SocialAccounts