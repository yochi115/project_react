import { useFormik } from "formik";
import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import User from "../interfaces/User";
import { successMsg } from "../services/feedbacks";
import { newUser } from "../services/UserService";
interface SignupProps {
    setIsLoggedin: Function;
}

const Signup: FunctionComponent<SignupProps> = ({
    setIsLoggedin
}) => {
    let navigate = useNavigate();
    let formik = useFormik({
        initialValues: { email: "", password: "", name: "" },
        validationSchema: yup.object({
            email: yup.string().required().email().min(5),
            password: yup.string().required().min(8),
            name: yup.string().required().min(2),
        }),
        onSubmit: (values: User) => {
            newUser({ ...values, isBussines: false })
                .then((res) => {
                    navigate("/");
                    successMsg("You registered successfully!");
                    setIsLoggedin(true)
                    sessionStorage.setItem(
                        "userId",
                        JSON.stringify({ userId: res.data[0].id })
                    );
                })
                .catch((err) => console.log(err));
        },
    });
    return (
        <>
            <div className="container col-md-3 mt-3 text-center ">
                <h3
                    className="display-5"
                    style={{ fontFamily: "Caveat", fontSize: "3rem" }}
                >
                    Sign Up
                </h3>
                <form onSubmit={formik.handleSubmit}>
                    <div className="form-floating mb-3">
                        <input
                            type="name"
                            className="form-control"
                            id="floatingInput"
                            placeholder="name"
                            name="name"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.name}
                        />
                        <label htmlFor="floatingInput">name</label>
                        {formik.touched.name && formik.errors.name && (
                            <p className="text-danger">{formik.errors.name}</p>
                        )}
                    </div>
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
                        className="btn btn-success w-100 mt-3" style={{ fontFamily: "Caveat", fontSize: "1.5rem" }}
                        disabled={!formik.isValid || !formik.dirty}
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </>
    );
};

export default Signup;