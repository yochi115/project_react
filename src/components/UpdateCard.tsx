import { useFormik } from "formik";
import { FunctionComponent, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import * as yup from "yup";

import Card from "../interfaces/Card";
import { getCardById, updatecard } from "../services/CardService";
import { successMsg } from "../services/feedbacks";


interface UpdateCardProps {
    onHide: Function;
    id: string;
    refresh: Function;
}

const UpdateCard: FunctionComponent<UpdateCardProps> = ({
    onHide,
    id,
    refresh
}) => {

    //let crd =  getCardById(id);


    

     

    let navigate = useNavigate()
    let [card, setCard] = useState<Card>({
        name: "",
        Description: "",
        Address: "",
        phone:0,
        image: "",

    });

    useEffect(() => {
        getCardById(id)
            .then((res) => setCard(res.data))
            .catch((err) => console.log(err));
    }, [id]);

    let formik = useFormik({
        initialValues: {
            name: card.name,
            Description: card.Description,
            Address: card.Address,
            phone: card.phone,
            image: card.image,
        },
        enableReinitialize: true,
        validationSchema: yup.object({
            name: yup.string().required().min(2),
            Description: yup.string().required().min(2),
            Address: yup.string().required().min(2),
            phone: yup.number().required().min(8),
            image: yup.string().required().min(2),


        }),
        onSubmit: (values: Card) => {
           
            updatecard(id, values)
                .then(() => {
                    onHide();
                    successMsg("Card updated successfully!");
                    refresh();
                })
                .catch((err) => console.log(err));
        },
    });

    // useEffect(() => {
    //     formik.setFieldValue("phone", "");
    //     getCardById(id)
    //         .then((res) => setCard(res.data))
    //         .catch((err) => console.log(err));
    // }, []);



    return (<>
        <div className="container">
            <div className="card mb-3" style={{ maxWidth: "540px" }} />
            <div className="row g-0">
                <div className="col-md-6">
                    <img src="666.jpg" className="img-fluid rounded-start mt-4" alt="..." />
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
                                    type="text"
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
                                Edit Card
                            </button>
                        </form>

                    </div>
                </div>
            </div></div>
    </>);
}

export default UpdateCard;