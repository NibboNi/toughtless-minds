import Feed from "@components/Feed"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share 
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> Mindless Thoughts</span>
      </h1>
      <p className="desc text-center">
        Thoughtless Minds is the embodiment of no thoughts head empty on the internet.
        Share thoughs when you're at your blankest.
      </p>
      <Feed />
    </section>
  )
}

export default Home