import React, { useEffect, useState } from 'react';
import Bar from '../sidebar/bar';
import { FaBook, } from 'react-icons/fa';


const Card = () => {

  const [allBlogs, setAllblogs] = useState([])
  const [selectedBlogs, setSelectedBlogs] = useState([])
  const [remainingHour, setRemainingHour] = useState(0)
  
  
  //console.log(totalPrice);
  useEffect(() => {
    fetch('./data.json')
      .then(res => res.json())
      .then(data => setAllblogs(data))
  }, [])

  const handleSelectBlog = (blog) => {

    const isExist = selectedBlogs.find((item) => item.id == blog.id);

    let creditHour = blog.credit_hour
    let price = blog.price
    if (isExist) {
      return toast("All ready exist. Don't add one course Twice!!!");
    } else {

      selectedBlogs.forEach((item) => {
        creditHour = creditHour + item.credit_hour
        price = price + item.price
      })
      const totalRemainHour = 20 - creditHour

      if (creditHour>20) {
        return toast("You don't add total credit more than 20 hours.")
      } else if(totalRemainHour<0) {
        return toast('There is No Remain hour!!!')
      }else{
      setRemainingHour(totalRemainHour)
      setTotalHour(creditHour)
      setTotalPrice(price)
      setSelectedBlogs([...selectedBlogs, blog]);
      }

      // setRemainingHour(totalRemainHour)
      // setTotalHour(creditHour)
      // setTotalPrice(price)
      // setSelectedBlogs([...selectedBlogs, blog]);
    }

  }
  // console.log(selectedBlogs);

  //console.log(allBlogs);
  return (
    <>
      <div className='flex justify-between mt-6'>
        <div className="cardContainer grid grid-cols-3 gap-3 w-3/4 m">

          {
            allBlogs.map(blog => (
              <div key={blog.id} className="card w-full bg-base-100 shadow-xl">
                <figure><img src={blog.image} className='w-full p-3' alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">{blog.title}</h2>
                  <p className='text-gray-500'>It is a long established fact that a reader
                    will be distracted by the readable content
                    of a page when looking at its layout</p>
                  <div className='flex justify-evenly'>
                    <p className='text-gray-500 mr-2 text-sm'> $ Price : {blog.price}</p>
                    <FaBook />
                    <p className='text-gray-500 ml-2 text-sm'>Credit : {blog.credit_hour}hr</p>
                  </div>
                  <button onClick={() => handleSelectBlog(blog)} className="bg-blue-500 w-full py-2 text-white text-xl font-medium rounded-xl">Select</button>
                </div>
              </div>
            ))
          }

        </div>

        <div className='w-1/4 ml-5'>
          <Bar selectedBlogs={selectedBlogs} remainingHour={remainingHour} totalHour={totalHour} totalPrice={totalPrice}> </Bar>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Card;