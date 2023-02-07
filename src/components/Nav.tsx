import { FunctionComponent } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { successMsg } from "../services/feedbacks";

interface NavProps {
    isBussines: boolean;
    isLoggedin: boolean;
    setIsLoggedin: Function;
}

const Nav: FunctionComponent<NavProps> = ({ isBussines, isLoggedin, setIsLoggedin }) => {
    let navigate = useNavigate()
    return (<>
        <nav className="navbar navbar-expand-lg bg-dark text-white  ">
            <div className="container-fluid text-white mx-4 " style={{ fontFamily: "Caveat", fontSize: "3rem" }}>
                <NavLink className="navbar-brand text-success  mx-4  " style={{ fontFamily: "Caveat", fontSize: "3rem" }}

                    to="/">

                    <i className="fa-brands fa-openid"></i>    Bizz</NavLink>
                <button className="navbar-toggler bg-success" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse mx-5" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item mx-4">
                            <NavLink className="nav-link active text-white" aria-current="page" to="/about">About</NavLink>
                        </li>
                        {!isLoggedin && (<><li className="nav-item mx-4">
                            <NavLink className="nav-link text-white" to="/sign-in">Sign in</NavLink>
                        </li>
                            <li className="nav-item mx-4">
                                <NavLink className="nav-link text-white" to="/sign-up">Sign up</NavLink>
                            </li>
                            <li className="nav-item mx-4">
                                <NavLink className="nav-link text-white" to="/bussines">Business</NavLink>
                            </li></>)}
                        {isLoggedin && (<li className="nav-item  mx-4">
                            <NavLink className="nav-link text-white" to="/all-cards">All Cards</NavLink>
                        </li>)}
                        {isLoggedin && (<> {isBussines && (<><li className="nav-item mx-4 ">
                            <NavLink className="nav-link text-white" to="/new-card">New Card</NavLink>
                        </li>
                            <li className="nav-item mx-4">
                                <NavLink className="nav-link text-white" to="/my-cards">My Cards</NavLink>
                            </li></>)}</>)}
                    </ul>
                </div>
                {isLoggedin && (<button className="btn btn-success mt-3 mx-5 " style={{ height: "3rem" }} onClick={() => {
                    setIsLoggedin(false);
                    navigate("/")
                    successMsg("Bye Bye ");
                }} ><i className="fa-solid fa-arrow-right-from-bracket"></i>LogOut</button>)
                }
            </div>



        </nav >

    </>);
}

export default Nav;