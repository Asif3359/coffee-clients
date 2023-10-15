import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const CoffeeCard = ({ coffee,coffees , setCoffees }) => {
    const {
        _id,
        coffeeName,
        quantity,
        supplier,
        taste,
        category,
        details,
        photoUrl
    } = coffee;

    const handleDelete = (_id) => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffee/${_id}`,{
                    method:"DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'
                            )
                            const remaining = coffees.filter(cof=>cof._id !==_id);
                            setCoffees(remaining);
                        }
                    })
            }
        })
    }
    return (
        <div className='bg-[#9e855b] rounded-lg  grid grid-cols-3 '>
            <div className='col-span-1'>
                <img className='h-full w-full  rounded-lg' src={photoUrl} alt="" />
            </div>
            <div className='flex justify-between items-center  col-span-2'>
                <div className='text-white px-1 py-2'>
                    <h1>{coffeeName}</h1>
                    <h1>{quantity}</h1>
                    <h1>{details}</h1>
                </div>
                <div>
                    <div className="btn-group btn-group-vertical ">
                        <button className="btn btn-sm btn-active">View</button>
                        <Link to={`/updateCoffee/${_id}`} className='btn btn-sm'>Edit</Link>
                        <button onClick={() => handleDelete(_id)} className="btn btn-sm">x</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;