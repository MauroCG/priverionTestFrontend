import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Card, Button, Space, Popconfirm } from "antd";
import { useState } from "react";
import { deletePet } from "../utils/pet.utils";
import ConfirmationModal from "./ConfirmationModal";

const { Meta } = Card;

const Pet = ({ pet_id, name, photo }) => {
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const deletePetHandler = () => {
    //console.log("Deleting pet", pet_id);
    deletePet(pet_id);
    setOpenDeleteModal(true);
  }

  return (
    <>
      <Card
        hoverable
        style={{
          width: 240,
        }}
        cover={
          <img
            alt="pet_photo"
            src={
              photo
                ? photo
                : "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            }
          />
        }
      >
        <Space direction="vertical">
          <Meta title={name} style={{ textAlign: "center" }} />
          <Space>
            <Button shape="round" icon={<EditOutlined />}>
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
