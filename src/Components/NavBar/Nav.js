import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useQuery } from '../../hooks/useQuery';


const NavBar = () => {
  const query = useQuery();
  const search = query.get("search");


  const navigate = useNavigate();



  const handleSubmit = e => {
    e.preventDefault();

  }

  return (
    <nav className="navbar">
      <NavLink to='/' className='logo'>Movies.ar</NavLink>
      <div className='container'>
        <form action='' className='search-bar' onSubmit={handleSubmit}>
          <input type='text'
            placeholder='Search Movies'
            name='Q'
            value={search}
            onChange={(e) => {
              const value = e.target.value;
              navigate("/?search=" + value)
            }} />
        </form>
      </div>
      <ul className="nav-links">
        <input type="checkbox" id="checkbox_toggle" />
        <label htmlFor="checkbox_toggle" className="list">&#9776;</label>
        <div className="menu">
          <NavLink to='/' className='list-menu'>Menu</NavLink>
          <NavLink to='/AboutPages' className='list-menu'>About</NavLink>
        </div>
      </ul>
    </nav>
  );
}

export default NavBar;
