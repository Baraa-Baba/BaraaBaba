import Card from "./Card"
const About = () => {

  return (
    <div className="max-w-[100vw]">
      <h2 className="About-head mb-10" id="color1"><h1 className='text-3xl sm:text-6xl'>About me</h1></h2>
      <Card img={'bg-card md:inline-block'} header={'Baraa'} text={"Iam Baraa a 15 years old from Lebanon. I love programming and Iam a self taught frontend developer."} />
      <Card img={'bg-card md:inline-block'} header={'contributor'} text={'I love contributing in open source projects in github and I am active in twitter and dev.to'} />
      <Card img={"bg-card md:block"} header={'freelancer'} text={"I am a freelancer at freelancer.com and mostqel this really helps building my experience"} />
      <style jsx>{`
.About-head h1{
  font-weight: 700;
  font-size: 6rem;
  text-align: center;
  background: linear-gradient(to right,white 40% ,gray,white 40%) ; 
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
    animation-timing-function: linear;
  animation-name: fluid;
  background-size: 200%;
  color: black;
}



@keyframes fluid {
  from {
    background-position: right;
  }

  to {
    background-position: left;
  }
}
                `}</style>
    </div>
  )
}
export default About