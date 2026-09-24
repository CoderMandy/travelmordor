import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <>
      <nav className='navbar'>
        <ul className='container-fluid px-5'>
          <li className='logo'><NavLink to="/">TRAVEL MORDOR</NavLink></li>
          <li><button><NavLink to="/signup">Sign me up!</NavLink></button></li>
        </ul>
      </nav>
    </>
  )
}

export default Header