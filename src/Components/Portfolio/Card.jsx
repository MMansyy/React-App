export default function Card(props) {
  const { image, handleOpen } = props
  console.log(props);

  return (
    <div className="relative animate__animated animate__zoomInUp animate_slow" onClick={() => handleOpen(image)}>
      <img src={image} alt="portfolio" className="w-full h-80 rounded-2xl object-cover" />
      <div className="absolute top-0 left-0 w-full h-full bg-secondary rounded-2xl bg-opacity-70 flex justify-center items-center opacity-0 hover:opacity-100 transition duration-500">
        <i className="fa-solid fa-plus text-white text-6xl"></i>
      </div>
    </div>
  )
}
