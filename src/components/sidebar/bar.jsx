import React from 'react';

const Bar = ({ selectedBlogs, remainingHour, totalHour, totalPrice }) => {
    //console.log(totalHour);
    return (
        <div className='bg-white rounded-xl shadow-xl p-5'>
            <h3 className='text-lg font-semibold text-blue-500 my-4'>Credit Hour Remaining {remainingHour} hr </h3>

            <hr />

            <h3 className='text-xl font-semibold my-4'>Course Name</h3>
            {
                selectedBlogs.map((blog) => (
                    <li className='text-sm text-gray-500' key={blog.id}>{blog.title}</li>
                ))
            }


            <h3 className='text-lg font-semibold my-4 border-t-[2px] text-gray-500 pt-3'>Total Credit Hour : {totalHour} hr</h3>
            <h3 className='text-lg font-semibold my-4 border-t-[2px] text-gray-500 pt-3'>Total Price : {totalPrice} USD</h3>
        </div>




    );
};


export default Bar;