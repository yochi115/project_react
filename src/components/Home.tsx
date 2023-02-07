import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";

interface HomeProps {

}

const Home: FunctionComponent<HomeProps> = () => {
    return (<>
        <img className="img-fluid rounded mx-auto d-block" src="cardi.jpg" alt="card1" width={1000} />
        <h1 className="display-1 text-center mt-5 text-success" style={{ fontFamily: "Pacifico" }}>Welcome to bizz!!</h1>

    </>);
}

export default Home;