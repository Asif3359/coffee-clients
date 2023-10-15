import React from 'react';
import { Link, useActionData, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const coffee = useLoaderData();
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

    const handleUpdateCoffee=(event)=>{

        event.preventDefault();
        const form = event.target;
        const coffeeName= form.coffeeName.value;
        const quantity = form.quantity.value;
        const supplier= form.supplier.value;
        const taste= form.taste.value;
        const category= form.category.value;
        const details= form.details.value;
        const photoUrl= form.photoUrl.value;

        const updatedCoffee = {
            coffeeName,
            quantity,
            supplier,
            taste,
            category,
            details,
            photoUrl
        }

        // console.log(newCoffee);

        //send to data base .(post in data base )
        fetch(`http://localhost:5000/coffee/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                if(data.insertedID)
                {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }
            })

    }
    return (
        <div>
            <div>
                <h1 className='text-4xl font-bold'>UpdateCoffee</h1>
            </div>
            <div>
                <div className='bg-[#c9bc96] p-4 md:p-10'>
                    <form onSubmit={handleUpdateCoffee} className=' w-full md:w-3/4 mx-auto '>
                        <div className='block md:flex  gap-5  '>
                            <div className="form-control flex-1 mb-3">
                                <label className="label">
                                    <span className="label-text font-semibold">Coffee Name :</span>
                                </label>
                                <label className="">
                                    <input type="text" defaultValue={coffeeName} name='coffeeName' placeholder="Coffee Name" className=" w-full input" />
                                </label>
                            </div>
                            <div className="form-control flex-1 mb-3">
                                <label className="label">
                                    <span className="label-text font-semibold"> Available Quantity:</span>
                                </label>
                                <label className="">
                                    <input type="text" defaultValue={quantity} name='quantity' placeholder="Available Quantity" className=" w-full input" />
                                </label>
                            </div>
                        </div>
                        <div className='block md:flex  gap-5  '>
                            <div className="form-control flex-1 mb-3">
                                <label className="label">
                                    <span className="label-text font-semibold">Supplier Name :</span>
                                </label>
                                <label className="">
                                    <input type="text" defaultValue={supplier} name='supplier' placeholder="Supplier Name" className=" w-full input" />
                                </label>
                            </div>
                            <div className="form-control flex-1 mb-3">
                                <label className="label">
                                    <span className="label-text font-semibold"> Taste :</span>
                                </label>
                                <label className="">
                                    <input type="text" defaultValue={taste} name='taste' placeholder="Taste " className=" w-full input" />
                                </label>
                            </div>
                        </div>
                        <div className='block md:flex  gap-5  '>
                            <div className="form-control flex-1 mb-3">
                                <label className="label">
                                    <span className="label-text font-semibold">Category :</span>
                                </label>
                                <label className="">
                                    <input type="text" defaultValue={category} name='category' placeholder="Category" className=" w-full input" />
                                </label>
                            </div>
                            <div className="form-control flex-1 mb-3">
                                <label className="label">
                                    <span className="label-text font-semibold"> Details :</span>
                                </label>
                                <label className="">
                                    <input type="text" defaultValue={details} name='details' placeholder="Details" className=" w-full input" />
                                </label>
                            </div>
                        </div>
                        <div className="form-control  mb-3">
                            <label className="label">
                                <span className="label-text font-semibold"> Photo Url:</span>
                            </label>
                            <label className="">
                                <input type="url" defaultValue={photoUrl} name='photoUrl' placeholder="Photo Url" className=" w-full input" />
                            </label>
                        </div>
                        <div>
                            <input type="submit" value="Update Coffee" name="updateCoffee" id="" className='btn  btn-block' />
                        </div>
                    </form>
                </div>
            </div>
            <div>
                <Link to="/" className='btn btn-sm'>Home</Link>
            </div>
        </div>
    );
};

export default UpdateCoffee;