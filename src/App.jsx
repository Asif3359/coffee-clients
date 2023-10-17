
import './App.css'
import { Link, NavLink, Outlet, useLoaderData } from 'react-router-dom'
import CoffeeCard from './Components/CoffeeCard/CoffeeCard'
import { useContext, useState } from 'react';

function App() {
  const lodeCoffee = useLoaderData();
  const [coffees, setCoffees]=useState(lodeCoffee);

  return (
    <div className='container mx-auto mt-5 space-y-3 px-5 lg:px-0'>
      <div>
        <NavLink to="/" className='btn btn-sm'>Home</NavLink>
        <NavLink to="/addCoffee" className='btn btn-sm'>Add Coffee</NavLink>
        <NavLink to="/login" className='btn btn-sm'>Login</NavLink>
        <NavLink to="/register" className='btn btn-sm'>Register</NavLink>
      </div>
      <p>{coffees.length}</p>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {
          coffees.map(coffee => <CoffeeCard  
            key={coffee._id} 
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}>
            </CoffeeCard>)
        }
      </div>
      
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default App
