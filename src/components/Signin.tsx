import { useFormik } from "formik";
import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import User from "../interfaces/User";
import { checkUser } from "../services/UserService";
import jwt_decode from "jwt-decode";
interface SigninProps {
    setIsBussines: Function;
    setIsLoggedin: Function;

}

const Signin: FunctionComponent<SigninProps> = ({ setIsBussines, setIsLoggedin }) => {
    let navigate = useNavigate();
    let formik = useFormik({
        initialValues: { email: "", password: "" },
        validationSchema: yup.object({
            email: yup.string().required().email().min(5),
            password: yup.string().required().min(8),
        }),
        onSubmit: (user: User) => {
            checkUser(user)
                .then((res) => {

                    sessionStorage.setItem(
                        "userDatas",
                        JSON.stringify({
                            isLoggedIn: true,
                            token: res.data,
                        })
                    );



                    setIsLoggedin(true);
                    const tokenDecoded: { isBussines: boolean } = jwt_decode(res.data);
                    setIsBussines(tokenDecoded.isBussines);


                   
                    navigate("/about");
                })
                .catch((err) => {
                    navigate("/");
                    console.log(err);
                });
        },
     
    });
    return (
        <>
            <div className="container  mt-3 text-center">
                <div className=" mb-3" style={{ maxWidth: "640px" }} />
                <div className="row g-0">
                    <div className="col-md-7">
                        <img src="img.jpg" className="img-fluid rounded start mt-5" alt="..." style={{ width: "30rem" }} />
                    </div>
                    <div className="col-md-5">
                        <div className="card-body mx-5" style={{ border: "solis 5px" }}>

                            <h3 className="display-5" style={{ fontFamily: "Caveat", fontSize: "3rem" }}>Sign In</h3>
                            <form onSubmit={formik.handleSubmit}>
                                <div className="form-floating mb-3">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="floatingInput"
                                        placeholder="name@example.com"
                                        name="email"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.email}
                                    />
                                    <label htmlFor="floatingInput">Email address</label>
                                    {formik.touched.email && formik.errors.email && (
                                        <p className="text-danger">{formik.errors.email}</p>
                                    )}
                                </div>
                                <div className="form-floating">
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="floatingPassword"
                                        placeholder="Password"
                                        name="password"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.password}
                                    />
                                    <label htmlFor="floatingPassword">Password</label>
                                    {formik.touched.password && formik.errors.password && (
                                        <p className="text-danger">{formik.errors.password}</p>
                                    )}
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-success w-100 mt-3"
                                    disabled={!formik.isValid || !formik.dirty}
                                >Sign In</button>
                            </form>
                        </div></div></div></div>
        </>
    );
};

export default Signin;