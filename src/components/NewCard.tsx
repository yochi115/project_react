import { useFormik } from "formik";
import { parse } from "path";
import { FunctionComponent, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import * as yup from "yup";
import Card from "../interfaces/Card";
import { createCard } from "../services/CardService";
import { successMsg } from "../services/feedbacks";

interface NewCardProps {

}

const NewCard: FunctionComponent<NewCardProps> = () => {
    let navigate = useNavigate()
    let formik = useFormik({
        initialValues: {
            name: "", Description: "", Address: "", phone: 0, image: "",
        },
        validationSchema: yup.object({
            name: yup.string().required().min(2),
            Description: yup.string().required().min(2),
            Address: yup.string().required().min(2),
            phone: yup.number().required().min(8),
            image: yup.string().required().min(2),


        }),
        onSubmit: (values: Card) => {
            createCard(values)
                .then(() => {
                    navigate("/all-cards");
                    successMsg("Your Card created successfully");
                })
                .catch((err) => console.log(err));
        },

    })
    useEffect(() => {

    }, []);


    return (<>
        <div className="container">
            <div className="card mb-3" style={{ maxWidth: "540px" }} />
            <div className="row g-0">
                <div className="col-md-6">
                    <img src="card6.jpg" className="img-fluid rounded start mt-5" alt="..." />
                </div>
                <div className="col-md-6">
                    <div className="card-body mx-5">
                        <h2 className="card-title" style={{ fontFamily: "Caveat", fontSize: "3rem" }}> Create new Card </h2>
                        <form onSubmit={formik.handleSubmit}>
                            <div className="form-floating mb-3 mt-3">
                                <input
                                    type="name"
                                    className="form-control"
                                    id="floatingInput"
                                    placeholder=" Bussines name"
                                    name="name"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.name}
                                />
                                <label htmlFor="floatingInput"> name</label>
                                {formik.touched.name && formik.errors.name && (
                                    <p className="text-danger">{formik.errors.name}</p>
                                )}
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    type="phone"
                                    className="form-control"
                                    id="floatingInput"
                                    placeholder="Bussines Description"
                                    name="Description"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.Description}
                                />
                                <label htmlFor="floatingInput">Description</label>
                                {formik.touched.Description && formik.errors.Description && (
                                    <p className="text-danger">{formik.errors.Description}</p>
                                )}
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="floatingAddress"
                                    placeholder="Bussines Address"
                                    name="Address"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.Address}
                                />
                                <label htmlFor="floatingPassword">Address</label>
                                {formik.touched.Address && formik.errors.Address && (
                                    <p className="text-danger">{formik.errors.Address}</p>
                                )}
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    type="number"
                                    className="form-control"
                                    id="floatingphone"
                                    placeholder="Bussines phone"
                                    name="phone"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.phone}
                                />
                                <label htmlFor="floatingPassword">phone</label>
                                {formik.touched.phone && formik.errors.phone && (
                                    <p className="text-danger">{formik.errors.phone}</p>
                                )}
                            </div>
                            {/* <div className="form-floating mb-3">
                                <input
                                    type="string"
                                    className="form-control"
                                    id="floatingid"
                                    placeholder="Bussines id"
                                    name="id"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.id}
                                />
                                <label htmlFor="floatingPassword">id</label>
                                {formik.touched.id && formik.errors.id && (
                                    <p className="text-danger">{formik.errors.id}</p>
                                )}
                            </div> */}
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="floatingimage"
                                    placeholder="..."
                                    name="image"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.image}
                                />
                                <label htmlFor="floatingPassword">image</label>
                                {formik.touched.image && formik.errors.image && (
                                    <p className="text-danger">{formik.errors.image}</p>
                                )}
                            </div>
                            <button style={{ fontFamily: "Caveat", fontSize: "1.5rem" }}
                                type="submit"
                                className="btn btn-success w-100 mt-3"
                                disabled={!formik.isValid || !formik.dirty}
                            >
                                Create New Card
                            </button>
                        </form>

                    </div>
                </div>
            </div></div>

    </>);
}

export default NewCard;