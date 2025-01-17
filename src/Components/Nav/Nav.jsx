import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Nav() {
    const [toggle, settoggle] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                document.querySelector('nav').classList.replace('py-9', 'py-5');
            } else {
                document.querySelector('nav').classList.replace('py-5', 'py-9');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);

    return (
        <nav className="bg-main fixed top-0 left-0 right-0 z-10 text-white py-9 px-20 ease-in-out duration-300 ">
            <div className="lg:container mx-auto flex justify-between items-center ">
                <div>
                    <Link className="font-bold text-3xl" to="/">START FRAMEWORK</Link>
                </div>
                <div className="flex items-center">
                    <ul className="hidden lg:flex text-lg font-semibold">
                        <li className="mx-4">
                            <NavLink to="about">About</NavLink>
                        </li>
                        <li className="mx-4">
                            <NavLink to="portfolio">Portfolio</NavLink>

                        </li>
                        <li className="mx-4">
                            <NavLink to="contact">Contact</NavLink>

                        </li>
                    </ul>
                    <button onClick={() => settoggle(!toggle)} className="lg:hidden">
                        <i className="fas fa-bars text-3xl"></i>
                    </button>
                    {toggle && (
                        <ul className="lg:hidden absolute flex-col top-16 left-0 mt-3 bg-main w-full text-center">
                            <li className="py-4">
                                <NavLink to="about">About</NavLink>
                            </li>
                            <li className="py-4">
                                <NavLink to="portfolio">Portfolio</NavLink>

                            </li>
                            <li className="py-4">
                                <NavLink to="contact">Contact</NavLink>

                            </li>
                        </ul>
                    )}
                </div>
            </div>
        </nav>
    );
}
