import { Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { locations } from "../data/locationData.js";

function SignUpForm() {
  // State to check validation status
  const [validated, setValidated] = useState(false);

  // State to hold booking data
  const [bookingData, setBookingData] = useState(null);

  // Initialize the navigate function
  const navigate = useNavigate();

  // Handles form submission
  function handleSubmit(e) {
    // Get the form element
    const form = e.currentTarget;

    // Check if the form fields are filled out properly
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
      // Turn on Bootsrap validation styles
      setValidated(true);
      // Prevent fetch from running if filled out improperly
      return;
    }
    // Proceed if Valid
    setValidated(true);

    // Prevent page from reloading
    e.preventDefault();

    // Randomize the destination
    const randomDestination =
      locations[Math.floor(Math.random() * locations.length)];

    // Collect form data
    const data = {
      name: form.name.value,
      phone: form.phone.value || null,
      email: form.email.value,
      adventurerType: form.adventurerType.value,
      dangerAgreement: form.dangerAgreement.checked,
      destination: randomDestination,
    };

    // console.log("Sending:", data);

    // Send data to backend
    // fetch("http://127.0.0.1:5001/api/bookings", {
    fetch(`${import.meta.env.VITE_API_URL}/api/bookings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Booking failed: ${res.status}`);
        }
        return res.json();
      })
      .then((dataResponce) => {
        // Store response in state
        setBookingData(data);
        // console.log("Response:", dataResponce);

        // Pass the data to the Confirmation page
        navigate("/confirmation", { state: data });
      })

      // Catch any errors
      .catch((err) => {
        console.error("Error:", err);
        // alert("The journey to Mordor has failed. Check your connection.");
        navigate("/error");
      });
  }

  return (
    // Added noValidate to stop browser popups and validated for styles
    <div className="col-12 col-md-6 pe-md-5">
      <h1>Enter your information to book an adventure</h1>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group controlId="signupName">
          <Form.Label>Adventurer Name</Form.Label>
          <div className="feedbackPlaceholder">
            <Form.Control
              name="name"
              type="text"
              placeholder="Enter name"
              required
            />
            <Form.Control.Feedback type="invalid">
              You must bestow your name upon us. We promise you we aren't maybe
              not Fae.
            </Form.Control.Feedback>
          </div>
        </Form.Group>

        <Form.Group controlId="signupPhone">
          <Form.Label>Ye Olde Phone Number</Form.Label>
          <div className="feedbackPlaceholder">
            <Form.Control
              name="phone"
              type="tel"
              placeholder="Enter phone number"
            ></Form.Control>
          </div>
        </Form.Group>

        <Form.Group controlId="signupEmail">
          <Form.Label>Ye Olde Email</Form.Label>
          <div className="feedbackPlaceholder">
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter email"
              required
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              A true Adventurer must provide a valid email, regardless of
              phishing threats.
            </Form.Control.Feedback>
          </div>
        </Form.Group>

        <Form.Group controlId="signupAdventurerType">
          <Form.Label>Adventurer Race</Form.Label>
          <div className="feedbackPlaceholder">
            <Form.Select name="adventurerType" required>
              <option value="">Select a type</option>
              <option value="Hobbit">Hobbit</option>
              <option value="Elf">Elf</option>
              <option value="Man">Man</option>
              <option value="Dwarf">Dwarf</option>
              <option value="Orc">Orc</option>
              <option value="Ent">Ent</option>
              <option value="Troll">Troll</option>
              <option value="Maia">Maia</option>
              <option value="Dragon">Dragon</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              You must declare your kin. Be proud of who you are!
            </Form.Control.Feedback>
          </div>
        </Form.Group>

        <Form.Group controlId="signupCheck">
          <div className="feedbackPlaceholder">
            <Form.Check
              name="dangerAgreement"
              type="checkbox"
              label="I understand the dangers and that all my belongings will be relinquished to Travel Mordor&trade; upon my death."
              feedback="You must accept your fate before proceeding."
              feedbackType="invalid"
              required
            />
          </div>
        </Form.Group>

        <Button type="Submit">Take me on an adventure!</Button>
      </Form>
    </div>
  );
}

export default SignUpForm;
