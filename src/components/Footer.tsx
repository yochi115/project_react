import { FunctionComponent } from "react";

interface FooterProps {

}

const Footer: FunctionComponent<FooterProps> = () => {
    return (<>




        <div className="footer" style={{ fontFamily: "Caveat" }}>
            <h2 > &copy;  Yochi Levenberg 2023</h2>
            <h3>ly7115011@gmail.com</h3>
            <div className="ms-2" style={{ fontSize: "2rem" }}>
                <i
                    className="fa-brands fa-square-whatsapp "
                    style={{ color: "green" }}
                ></i>
                <i className="fa-brands fa-square-facebook  ms-3"
                    style={{ color: "rgb(68, 94, 241)" }}
                ></i>

                <i className="fa-brands fa-square-twitter ms-3"
                    style={{ color: "dodgerblue" }}
                ></i>
            </div>


        </div>

    </>);

}

export default Footer;