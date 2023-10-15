
import './App.css'
import { Link, useLoaderData } from 'react-router-dom'
import CoffeeCard from './Components/CoffeeCard/CoffeeCard'
import { useState } from 'react';

function App() {
  const lodeCoffee = useLoaderData();
  const [coffees, setCoffees]=useState(lodeCoffee);


  return (
    <div className='container mx-auto mt-5 space-y-3 px-5 lg:px-0'>
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
        <Link to="/addCoffee" className='btn btn-sm'>Add Coffee</Link>
        <Link to="/updateCoffee" className='btn btn-sm'>Update Coffee</Link>
      </div>
    </div>
  )
}

export default App
