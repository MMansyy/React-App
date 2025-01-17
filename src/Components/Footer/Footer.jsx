
export default function Footer() {
  return (
    <footer className="bg-main text-white ">
      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-y-16 py-24 px-20">
      <div className="text-center">
        <h3 className="font-semibold text-3xl mb-2">LOCATION</h3>
        <p className="mb-2">2215 John Daniel Drive
        </p>
        <p>Clark, MO 65243
        </p>
      </div>
      <div className="text-center">
        <h3 className="font-semibold text-3xl  mb-2">AROUND THE WEB</h3>
        <ul className="flex justify-center items-center">
          <li><i className="fa-brands fa-facebook mx-1 text-lg border-2 rounded-full p-2"></i></li>
          <li><i className="fa-brands fa-twitter mx-1 text-lg border-2 rounded-full p-2"></i></li>
          <li><i className="fa-brands fa-instagram mx-1 text-lg  border-2 rounded-full p-2"></i></li>
          <li><i className="fa-brands fa-linkedin mx-1 text-lg  border-2 rounded-full p-2"></i></li>
        </ul>
      </div>
      <div className="text-center">
        <h3 className="font-semibold text-3xl mb-2">
          ABOUT FREELANCER
        </h3>
        <p>Freelance is a free to use, licensed Tailwind theme <br /> created by <span className="text-secondary font-bold text-xl">Mansy</span>
        </p>
      </div>
      </div>
      <div className="bg-[#1A252F] text-center py-6">
        <p>Copyright © Mansy 2025</p>
      </div>
    </footer>
  )
}
