import Card from "./Card"
const About = () => {
  return (
    <div className="max-w-[100vw]" ref={About}>
      <h1 className="text-5xl font-extrabold text-white text-center ">About me</h1>
      <Card index={4} img={'md:inline-block'} links="none" header={'Baraa'} text={"Iam Baraa a 15 years old from Lebanon. I love programming and I am a self taught frontend developer."} />
      <Card index={5} img={'md:inline-block'} links="GTD" header={'contributor'} text={'I love contributing in open source projects in github and I am active in twitter and dev.to.'} />
      <Card index={9} img={"md:block"} links="FM" header={'freelancer'}
        text={" I am a freelancer at freelancer.com and mostqel this really helps building my experience."} />
      <Card index={12} img={"md:inline-block"} header='for everyone'
        text={'I care making websites that are accessible on every screen and for all people.'} />
      <Card index={13} img={"md:block"} header='clean code'
        text={'I care about code being readable and changeable for other developers and me in the future.'} />
    </div>
  )
}
export default About