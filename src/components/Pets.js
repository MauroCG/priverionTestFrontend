import { PlusOutlined } from "@ant-design/icons";
import { Row, Col, Button } from "antd";
import { useState } from "react";
import ConfirmationModal from "./ConfirmationModal";


const Pets = () => {
  const [ newPetModal, setNewPetModal ] = useState(false);

  const newPetFields = {
    "name": {
        "label": "Name of your pet",
        "type": "string"
    },
    "photo": {
        "label": "Photo of your pet",
        "type": "file"
    }
  }

  const handleShowNewPetModal = () => {
    setNewPetModal(true);
  }


  return (
    <>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col>
          <Button type="primary" shape="round" onClick={handleShowNewPetModal} icon={<PlusOutlined />}>
            Add new pet
          </Button>
        </Col>
      </Row>
      <ConfirmationModal
        title="Add a new pet"
        showModal={newPetModal}
        setShowModal={setNewPetModal}
        fields={newPetFields}
        callback={(values) => console.log(values)}
      />
    </>
  );
};

export default Pets;
