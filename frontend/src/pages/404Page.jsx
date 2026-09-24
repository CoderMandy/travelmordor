import EvilEye from "../components/EvilEye"
import { Link } from "react-router-dom"

function PageNotFound() {
  return (
    <section className="notFound">
      <h1>404: Page Not Found</h1> 
          <p>You have wandered onto a page that does not exist. Stab the Eye of Sauron with your mighty mouse to return home... If you dare!</p> 
      <Link to="/">
      <EvilEye
        eyeColor="#FF6F37"
        intensity={2}
        pupilSize={2}
        irisWidth={0.35}
        glowIntensity={0.35}
        scale={0.7}
        noiseScale={.5}
        pupilFollow={1}
        flameSpeed={1}
        backgroundColor="#120F17"
      />
      </Link>
    </section>
  )
}

export default PageNotFound