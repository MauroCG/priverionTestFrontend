import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Card, Button, Space, Popconfirm } from "antd";
import { useEffect, useState } from "react";
import { createOrUpdatePet, deletePet } from "../utils/pet.utils";
import ConfirmationModal from "./ConfirmationModal";

const { Meta } = Card;

const Pet = ({ pet_id, name, photo }) => {
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [editFields, setEditFields] = useState({});

  const deletePetHandler = () => {
    //console.log("Deleting pet", pet_id);
    deletePet(pet_id);
    setOpenDeleteModal(true);
  };

  const editFieldsCallback = (values) => {
    if (values) {
        createOrUpdatePet(values);
    }
    setOpenEditModal(false);
  }

  const openEditModalHandler = () => {
    setOpenEditModal(true);
  }

  useEffect(() => {
    if (pet_id) {
        setEditFields({
            "id": {
                value: pet_id
            },
            "name": {
                label: "Name of your pet",
                value: name
            },
            "photo": {
                label: "Photo of your pet",
                value: photo,
                type: "file"
            }
        });
    }
  }, [pet_id, name, photo]);


  return (
    <>
      <Card
        hoverable
        style={{
          width: 240,
        }}
        cover={<img alt="pet_photo" src={photo} style={{height: '300px'}} />}
      >
        <Space direction="vertical">
          <Meta title={name} style={{ textAlign: "center" }} />
          <Space>
            <Button shape="round" icon={<EditOutlined />} onClick={openEditModalHandler}>
              Edit
            </Button>
            <Popconfirm
              title="Delete pet"
              description="Are you sure to delete this pet?"
              okText="Yes"
              cancelText="No"
              onConfirm={deletePetHandler}
              onCancel={null}
            >
              <Button shape="round" icon={<DeleteOutlined />} danger>
                Delete
              </Button>
            </Popconfirm>
          </Space>
        </Space>
      </Card>
      <ConfirmationModal
        showModal={openEditModal}
        setShowModal={setOpenEditModal}
        title="Edit information of your pet"
        fields={editFields}
        callback={editFieldsCallback}
      />
      <ConfirmationModal
        showModal={openDeleteModal}
        setShowModal={setOpenDeleteModal}
        loadingMsg="Deleting pet data"
        successMsg="Pet data deleted successfully"
      />
    </>
  );
};

export default Pet;
