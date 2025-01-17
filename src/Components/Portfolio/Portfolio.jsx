import { useState } from 'react'
import img1 from '../../assets/poert1.png'
import img2 from '../../assets/port2.png'
import img3 from '../../assets/port3.png'


import Card from './Card'

export default function Portfolio() {


  const [photos, setphotos] = useState([img1, img2, img3])
  const [isopen, setisopen] = useState(false)
  const [currentImg, setcurrentImg] = useState('')

  const handleOpen = (img) => {
    setisopen(true)
    setcurrentImg(img)
  }

  return (
    <div className="py-36">
      <div className="container">
        <div className="text-center uppercase">
          <h2 className="text-4xl font-bold text-main">portfolio component
          </h2>
          <div className="flex justify-center items-center mt-5">
            <div className='h-1 w-20 bg-main mx-4'></div>
            <i className="fa-solid fa-star text-main"></i>
            <div className='h-1 w-20 bg-main mx-4'></div>
          </div>
          <div className='grid sm:grid-rows-1 md:grid-rows-2 sm:grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mt-11'>
            {photos.map((photo, index) => (
              <Card key={index} image={photo} handleOpen={handleOpen} />))}
            {photos.map((photo, index) => (
              <Card key={index + 3} image={photo} handleOpen={handleOpen} />))}
          </div>
        </div>
        {isopen && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center z-50">
            <div className="relative">
              <button onClick={() => setisopen(false)} className="absolute top-0 right-0 text-white text-2xl p-5">
                <i className="fa-solid fa-times"></i>
              </button>
              <img src={currentImg} alt="portfolio" className="w-full h-96 object-cover" />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
