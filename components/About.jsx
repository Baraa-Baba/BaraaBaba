import Card from "./Card"
const About = () => {

  return (
    <div className="max-w-[100vw]">
      <h1 className="text-5xl font-extrabold text-white text-center ">About me</h1>
      <Card img={'bg-card md:inline-block'} header={'Baraa'} text={"Iam Baraa a 15 years old from Lebanon. I love programming and Iam a self taught frontend developer."} />
      <Card img={'bg-card md:inline-block'} header={'contributor'} text={'I love contributing in open source projects in github and I am active in twitter and dev.to'} />
      <Card img={"bg-card md:block"} header={'freelancer'} text={"I am a freelancer at freelancer.com and mostqel this really helps building my experience"} />
    </div>
  )
}
export default About