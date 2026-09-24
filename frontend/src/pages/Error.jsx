import { useLocation, useNavigate } from "react-router-dom"
import { Container, Card, Button, Row, Col } from "react-bootstrap"

function Error() {
  const location = useLocation()
  const navigate = useNavigate()

  return (
      <Container className="error text-center mt-5">
        <h1>Alas, your booking journey has lead to an unexpected error</h1>
        <p>One does not simply give up at the first hurdle, though. Please try again.</p>
        <button onClick={() => navigate("/signup")}>Sign up again</button>
      </Container>
  )
}

export default Error