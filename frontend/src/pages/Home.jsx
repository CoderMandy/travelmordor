import { Link } from "react-router-dom"

function Home() {
  return (
    <section className="hero row justify-content-end align-items-center">
      <div className="col col-md-7">
        <h1>TRAVEL MORDOR</h1>
        <div className="heroBody">
          <p>Adventure awaits in the lovely land of Mordor! Book now for a surprise trip to a random location!</p>
          <p>It's completely free! <span>However, there is a stong possibility of losing your life.</span></p>
          <button><Link to="/signup">Book a trip!</Link></button>
        </div>
      </div>
    </section>
  )
}

export default Home