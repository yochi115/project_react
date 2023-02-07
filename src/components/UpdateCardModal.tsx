import { FunctionComponent } from "react";
import { Modal } from "react-bootstrap";
import UpdateCard from "./UpdateCard";

interface UpdateCardMaodlProps {
    show: boolean;
    onHide: Function;
    id: number;
    refresh: Function;
}

const UpdateCardModal: FunctionComponent<UpdateCardMaodlProps> = ({
    show,
    onHide,
    id,
    refresh,
}) => {
    return (<>
        <Modal
            show={show}
            onHide={() => onHide()}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    UPDATE CARD
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <UpdateCard
                    onHide={() => onHide()}
                    id={id}
                    refresh={refresh}
                />
            </Modal.Body>
            <Modal.Footer></Modal.Footer>
        </Modal>

    </>);
}

export default UpdateCardModal;