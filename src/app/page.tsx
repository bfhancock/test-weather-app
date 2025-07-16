import Background from "./components/Background"

const Home = () => {

  return(
    <div className="w-full h-screen">

      {/* SVG for background component to target */}
      <svg xmlns='http://www.w3.org/2000/svg' width='5' height='5' className="hidden">
        <rect width='5' height='5' fill='#fff'/>
        <rect width='1' height='1' fill='#ccc'/>
      </svg>    

      <Background />

    </div>
  )
}

export default Home