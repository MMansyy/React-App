
export default function About() {
  return (
    <div className="bg-secondary ">
      <div className="container py-64 flex flex-col justify-center items-center">
        <h1 className="uppercase text-white text-center font-bold text-4xl animate__animated animate__backInDown">about component</h1>
        <div className="flex justify-center items-center mt-5 animate__animated animate__rollIn animate__faster hover:animate__heartBeat">
          <div className='h-1 w-20 bg-white mx-4'></div>
          <i className="fa-solid fa-star text-white"></i>
          <div className='h-1 w-20 bg-white mx-4'></div>
        </div>
        <div className="text-white mt-5 font-normal  text-left md:flex md:justify-between md:items-center">
          <p className="px-12 mb-5 animate__animated animate__zoomInDown animate__slow">Freelancer is a free Tailwind theme created by Mansy. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          <p className="px-12 animate__animated animate__zoomInUp animate__slow">Freelancer is a free Tailwind theme created by Mansy. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>

        </div>
      </div>
    </div>
  )
}
