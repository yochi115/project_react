import { FunctionComponent, useEffect, useState } from "react";
import Card from "../interfaces/Card";
import { getmyCards } from "../services/CardService";
import DeleteCard from "./DeleteCardModal";
import UpdateCardModal from "./UpdateCardModal";
import { profileUser } from "../services/UserService";




interface MyCardsProps { }

const MyCards: FunctionComponent<MyCardsProps> = () => {
    let [cards, setCards] = useState<Card[]>([]);
    let [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
    let [id, setId] = useState<string>("");
    let [cardChange, setCardChange] = useState<boolean>(false);
    let [openUpdateModal, setopenUpdateModal] = useState<boolean>(false);
    let [userId, setuserId] = useState<string>("");
    let [selectedCard, setSelectedCard] = useState<Card | undefined>(undefined);


    let refresh = () => {
        setCardChange(!cardChange);
    };
    useEffect(() => {
        profileUser()
            .then((res) => setuserId(res.data._id))
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        getmyCards(userId).then((res) => {
           
            setCards(res.data)
        })
    }, [userId, cardChange]);
    return (
        <>
            <h1
                className="text-center"
                style={{ fontFamily: "Caveat", fontSize: "3rem" }}
            >
                My Cards
            </h1>
            {cards.length ? (
                <div className="container">
                    <div className="row">
                        {cards.map((card: Card) => (
                            <div
                                key={card._id}
                                className="card ms-4 col-md-4 mt-3"
                                style={{ width: "18rem", height: "25rem" }}
                            >
                                <img
                                    src={card.image}
                                    className="card-img-top"
                                    alt={card.name}
                                    style={{ height: "8rem" }}
                                />
                                <div className="card-body">
                                    <h5
                                        className="card-title text-center  "
                                        style={{
                                            fontFamily: "Caveat",
                                            fontSize: "1.5rem",
                                            backgroundColor: "grey",
                                        }}
                                    >
                                        {card.name}
                                    </h5>
                                    <p className="card-text text-center mt-4">
                                        {card.Description}
                                    </p>
                                    <p className="card-text text-center">{card.Address}</p>
                                    <p className="card-text text-center">{card.phone}</p>
                                    <div className="button">
                                        <button
                                            className="btn btn-danger mx-5 "
                                            onClick={() => {
                                                setOpenDeleteModal(true);
                                                setId(card._id as string);
                                            }}
                                        >
                                            <i className="fa-solid fa-trash "></i>
                                        </button>
                                        <button
                                            className="btn btn-warning mr-2   "
                                            onClick={() => {
                                                setopenUpdateModal(true);
                                                setId(card._id as string);
                                                let crd = cards.find(crd => crd._id === id);
                                                setSelectedCard(crd)

                                            }}
                                        >
                                            {" "}
                                            <i className="fa-solid fa-pen-to-square"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <p>no</p>
            )}
            <DeleteCard
                show={openDeleteModal}
                onHide={() => setOpenDeleteModal(false)}
                id={id}
                refresh={refresh}
            />
            <UpdateCardModal
                show={openUpdateModal}
                onHide={() => setopenUpdateModal(false)}
                id={id}
                refresh={refresh}
            />
        </>
    );
};

export default MyCards;