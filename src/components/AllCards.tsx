import { createReadStream } from "fs";
import { FunctionComponent, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Card from "../interfaces/Card";
import { getAllCards } from "../services/CardService";

interface AllCardsProps {

}

const AllCards: FunctionComponent<AllCardsProps> = () => {
    let [cards, setCards] = useState<Card[]>([])
    useEffect(() => {
        getAllCards()
            .then((res) => {
                setCards(res.data)
            })
            .catch((err) => console.log(err));

    }, []);
    return (<>
        <h1 className="text-center" style={{ fontFamily: "Caveat", fontSize: "3rem" }}>All Cards</h1>
        {cards.length ? (
            <div className="container">
                <div className="row ">
                    {cards.map((card: Card) => (



                        < div
                            key={card.id}
                            className="card ms-4 col-md-4 mt-3" style={{ width: "18rem", height: "24rem" }}  >
                            <img src={card.image}
                                className="card-img-top"
                                alt={card.name}
                                style={{ height: "8rem" }}
                            />
                            <div className="card-body">
                                <h5 className="card-title  text-center mt-4" style={{ fontFamily: "Caveat", fontSize: "1.5rem", backgroundColor: "grey" }}>{card.name}</h5>
                                <p className="card-text  text-center mt-4">{card.Description}</p>
                                <p className="card-text  text-center">{card.Address}</p>
                                <p className="card-text  text-center">{card.phone}</p>

                            </div>
                        </div>



                    ))}
                </div></div>


        ) : (<p>no</p>)}

    </>);
}

export default AllCards;