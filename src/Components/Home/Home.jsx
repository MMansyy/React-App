import heroimg from '../../assets/avataaars.svg'

export default function Home() {
    return (
        <div className='p-36 bg-secondary '>
            <div className="container mx-auto  flex justify-center items-center flex-col h-full ">
                <img src={heroimg} alt="hero" className="w-64 animate__animated animate__backInDown" />
                <div className="text-center mt-7">
                    <h1 className="text-4xl font-bold text-white animate__animated animate__jackInTheBox ">Hello, I'm <span className="text-main">Muhammed Mansy</span></h1>
                    <div className="flex justify-center items-center mt-5">
                        <div className='h-1 w-20 bg-white mx-4'></div>
                        <i className="fa-solid fa-star text-white"></i>
                        <div className='h-1 w-20 bg-white mx-4'></div>
                    </div>
                    <p className="text-white mt-5 font-medium animate__animated animate__fadeInUpBig">I'm a full-stack web developer, I can help you to build your website or web application</p>
                </div>
            </div>
        </div>
    )
}
