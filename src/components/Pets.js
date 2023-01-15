import { PlusOutlined } from "@ant-design/icons";
import { Row, Col, Button, Divider, Typography } from "antd";
import { useState } from "react";
import { createOrUpdatePet } from "../utils/pet.utils";
import ConfirmationModal from "./ConfirmationModal";
import Pet from "./Pet";

const { Title } = Typography;


const Pets = ({ pets }) => {
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

  const handleCreateOrUpdatePet = (values) => {
    createOrUpdatePet(values);
    setNewPetModal(false);
  }


  return (
    <>
      <Row>
        <Col>
          <Title level={2}>Manage pets data</Title>
        </Col>
      </Row>
      <Divider />
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col>
          <Button type="primary" shape="round" onClick={handleShowNewPetModal} icon={<PlusOutlined />}>
            Add new pet
          </Button>
        </Col>
      </Row>
      <Divider />
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {
          pets.map((pet, index) => {
            return (
              <Col flex="0 1 350px" key={index+1}>
                <Pet
                  pet_id={pet.id}
                  name={pet.name}
                  photo={pet.photo}
                />
              </Col>
            )
          })
        }
      </Row>
      <ConfirmationModal
        title="Add a new pet"
        showModal={newPetModal}
        setShowModal={setNewPetModal}
        fields={newPetFields}
        callback={handleCreateOrUpdatePet}
      />
    </>
  );
};

export default Pets;
