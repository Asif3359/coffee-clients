import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddCoffee = () => {

    const handleAddCoffee=(event)=>{

        event.preventDefault();
        const form = event.target;
        const coffeeName= form.coffeeName.value;
        const quantity = form.quantity.value;
        const supplier= form.supplier.value;
        const taste= form.taste.value;
        const category= form.category.value;
        const details= form.details.value;
        const photoUrl= form.photoUrl.value;

        const newCoffee = {
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
        fetch('https://coffe-shop-server-ebt87ghli-asif-ahammeds-projects.vercel.app/coffee',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                if(data.acknowledged)
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
        <div >
            <h2 className='text-4xl font-bold mb-2'>Add Coffee</h2>
            <div className='bg-[#c9bc96] p-4 md:p-10'>
                <form onSubmit={handleAddCoffee} className=' w-full md:w-3/4 mx-auto '>
                    <div className='block md:flex  gap-5  '>
                        <div className="form-control flex-1 mb-3">
                            <label className="label">
                                <span className="label-text font-semibold">Coffee Name :</span>
                            </label>
                            <label className="">
                                <input type="text" name='coffeeName' placeholder="Coffee Name" className=" w-full input" />
                            </label>
                        </div>
                        <div className="form-control flex-1 mb-3">
                            <label className="label">
                                <span className="label-text font-semibold"> Available Quantity:</span>
                            </label>
                            <label className="">
                                <input type="text" name='quantity' placeholder="Available Quantity" className=" w-full input" />
                            </label>
                        </div>
                    </div>
                    <div className='block md:flex  gap-5  '>
                        <div className="form-control flex-1 mb-3">
                            <label className="label">
                                <span className="label-text font-semibold">Supplier Name :</span>
                            </label>
                            <label className="">
                                <input type="text" name='supplier' placeholder="Supplier Name" className=" w-full input" />
                            </label>
                        </div>
                        <div className="form-control flex-1 mb-3">
                            <label className="label">
                                <span className="label-text font-semibold"> Taste :</span>
                            </label>
                            <label className="">
                                <input type="text" name='taste' placeholder="Taste " className=" w-full input" />
                            </label>
                        </div>
                    </div>
                    <div className='block md:flex  gap-5  '>
                        <div className="form-control flex-1 mb-3">
                            <label className="label">
                                <span className="label-text font-semibold">Category :</span>
                            </label>
                            <label className="">
                                <input type="text" name='category' placeholder="Category" className=" w-full input" />
                            </label>
                        </div>
                        <div className="form-control flex-1 mb-3">
                            <label className="label">
                                <span className="label-text font-semibold"> Details :</span>
                            </label>
                            <label className="">
                                <input type="text" name='details' placeholder="Details" className=" w-full input" />
                            </label>
                        </div>
                    </div>
                    <div className="form-control  mb-3">
                        <label className="label">
                            <span className="label-text font-semibold"> Photo Url:</span>
                        </label>
                        <label className="">
                            <input type="url" name='photoUrl' placeholder="Photo Url" className=" w-full input" />
                        </label>
                    </div>
                    <div>
                        <input type="submit" value="Add Coffee" name="addCoffee" id="" className='btn  btn-block' />
                    </div>
                </form>
                <div className='mt-5'>
                    <Link to="/" className='btn '>Home</Link>
                </div>
            </div>


        </div>
    );
};

export default AddCoffee;