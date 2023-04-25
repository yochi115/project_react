import { useFormik } from "formik";
import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import User from "../interfaces/User";
import { successMsg } from "../services/feedbacks";
import { newUser } from "../services/UserService";

interface BusinessProps {
    setIsLoggedin: Function;
    setIsBussines: Function;
}

const Business: FunctionComponent<BusinessProps> = ({
    setIsLoggedin,
    setIsBussines
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
            newUser({ ...values, isBussines: true })
                .then((res) => {
                    navigate("/about");
                    successMsg("You registered successfully!");
                    setIsLoggedin(true)
                    setIsBussines(true)
                    sessionStorage.setItem(
                        "userDatas",
                        JSON.stringify({
                            isLoggedin: true,
                        
                            token: res.data,
                        })
                    );
                })
                .catch((err) => console.log(err));
        },
    });
    return (
        <>
            <div className="container  mt-3 col-md-3 ">
                <h3 className="display-5 text-center" style={{ fontFamily: "Caveat", fontSize: "3rem" }}>Sign Up Bussines</h3>
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

export default Business;