import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="w-100 py-3 border-bottom shadow-sm border-rounder rounded d-flex justify-content-between">
      <h4 className="pl-3 .text-secondary">Baltimore!</h4>
      <div className='d-flex mx-2 mx-lg-5' style={{width:'10rem'}}>
        <Link className='w-50' to='/inicio' >
          Graficas
        </Link>
        <Link className='w-50' to='/tareas' >
          Tareas
        </Link>
      </div>
    </nav>
  );
};
