import SignUpForm from "../components/SignUpForm"

function SignUp() {
  return (
    <section className="row signUp">
      <SignUpForm />
      <div className="col-12 col-md-6">
        <img className="w-100" src="/map.jpg" alt="Map of Mordor" />
      </div>
    </section>
  )
}

export default SignUp