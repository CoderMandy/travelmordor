import { Link } from "react-router-dom"
import { useLocation, useNavigate } from "react-router-dom"
import { Container, Card, Button, Row, Col } from "react-bootstrap"

function BookingResults() {
  // Signup connection
  const location = useLocation()
  const navigate = useNavigate() 

  // Retrieve the information passed from the SignUpForm
  const adventurerData = location.state

  // Prevent the information from displaying if the page is reached manually
  if (!adventurerData) {
    return (
      <Container className="error text-center mt-5">
        <h1>YOU SHALL NOT PASS!</h1>
        <p>...Untill you actually fill out the form, that is.</p>
        <button onClick={() => navigate("/signup")}>Sign up legitamately here</button>
      </Container>
    )
  }

  return (
    <div className="row">
      <div className="col-12 col-md-6 pe-md-5">
        <h1>Hail, {adventurerData.name}! Your adventure awaits!</h1>
        <p>You and all your <span className="fw-bold">{adventurerData.adventurerType}</span> friends are heading to <span className="fw-bold">{adventurerData.destination.name}</span>!</p>
        <p>{adventurerData.destination.fact}</p>
        <p>But wait, There's more! <span className="fw-bold">{adventurerData.destination.name}</span> is famous for its {adventurerData.destination.attraction} and YOU get to be a participant!</p>
        <p>We have sent an email to <span className="fw-bold">{adventurerData.email}</span> with additional details. May your journey continue with strength!</p>

        <button onClick={() => navigate("/signup")}>Book another trip!</button>

        {adventurerData.phone && (
          <p><span className="fw-bold">Disclaimer:</span> Is <span className="fw-bold">{adventurerData.phone}</span> a real phone number? We really hope so because <strike>selling those to spam companies is like our main way of making money</strike> important information regarding this adventure will be sent to you via text.</p>
        )}
      </div> 
      
      <div className="col-12 col-md-6">
        <img className="w-100" src={`/locations${adventurerData.destination.image}`} alt={`Where ${adventurerData.destination.name} is located on the map of Mordor`} />
      </div>
    </div>
  )
}

export default BookingResults