// Dependencies
import { FC } from "react";

// React Router
import { NavLink } from "react-router-dom";

// Assets
import logo from "~/images/global/logo.png";

const DashboardWelcome: FC = () => {
  return (
    <>
      <section className="w-screen h-screen bg-dark flex items-center justify-center">
        <div className="flex items-center justify-center flex-col">
          <img width={130} src={logo} alt="" />
          <h1 className="text-white text-3xl mb-5">Dashboard Layout</h1>

          <NavLink to="/" className="bg-gradient-to-tr from-sky-800 to-blue-900 text-white py-2 px-5 rounded mt-3 shadow uppercase text-sm font-semibold transition hover:-translate-y-2 hover:shadow-md">website layout</NavLink>

          <div className="flex items-center justify-center gap-2 mt-5">
            <a className=" text-blue-500" href="https://www.facebook.com/YoussefBibawy1/" target="_blank">Facebook</a>
            <a className=" text-blue-500" href="https://github.com/" target="_blank">Github</a>
          </div>
        </div>
      </section>
    </>
  )
}

export default DashboardWelcome;