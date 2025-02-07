import { NavLink } from "react-router-dom"

const Header = () => {

  const navigation = [
    { path: '/', name: 'List Book' },
    { path: '/add', name: 'Add Book' },
    { path: '/listn', name: 'List Names' },
    { path: '/add2', name: 'Add Names' },
  ]

  return (
    <header>
      <h1 style={{color:'white',background:'Black'}}>Book Management</h1><br></br>
      
      <nav>
        {navigation.map(nav => (
          <NavLink
            key={nav.name}
            to={nav.path}
          >
            {nav.name}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}

export default Header