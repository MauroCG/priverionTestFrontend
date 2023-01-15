import { useState, useEffect } from "react";
import {
  Modal,
  Button,
  Result,
  Form,
  Input,
  Select,
  InputNumber,
  Upload,
} from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";

const ConfirmationModal = ({
  loadingMsg,
  successMsg,
  fields,
  callback,
  showModal,
  setShowModal,
  closable,
  title,
}) => {
  const [loading, setLoading] = useState(true);

  const closeModal = () => {
    setShowModal(false);
  };

  //For mapping and show corresponding label in the modal
  const labels = {
    id: "id",
    name: "Name of your pet",
    photo: "Photo of your pet",
  };

  useEffect(() => {
    if (!fields) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  }, [fields, showModal]);

  if (fields) {
    // console.log(fields)
    return (
      <Modal
        title={title}
        open={showModal}
        onCancel={closeModal}
        closable={closable}
        footer={[]}
      >
        <Form
          onFinish={(values) => callback(values)}
          initialValues={
            typeof fields.name === "object"
              ? (() => {
                  // console.log("Received fields", fields);
                  let keys = {};
                  Object.keys(fields).forEach((key) => {
                    keys[key] = fields[key].value;
                  });
                  // console.log("Exxtracted keys", keys);
                  return keys;
                })()
              : fields
          }
        >
          {typeof fields.name === "object"
            ? Object.keys(fields).map((key, index) => {
                let inputForm;
                if (key === "id") {
                  inputForm = <Input disabled />;
                } else {
                  // console.log(key, fields[key]);
                  switch (fields[key].type) {
                    case "number":
                      inputForm = <InputNumber />;
                      break;
                    case "select":
                      inputForm = <Select options={fields[key].options} />;
                      break;
                    case "file":
                      inputForm = (
                        <Upload
                          name="photo"
                          listType="picture-card"
                          maxCount={1}
                          beforeUpload={() => false}
                        >
                          <div>
                            <PlusOutlined />
                            <div
                              style={{
                                marginTop: 8,
                              }}
                            >
                              Choose file
                            </div>
                          </div>
                        </Upload>
                      );
                      break;
                    default:
                      inputForm = <Input />;
                      break;
                  }
                }

                return (
                  <Form.Item
                    label={fields[key].label}
                    name={key}
                    key={index + 1}
                  >
                    {inputForm}
                  </Form.Item>
                );
              })
            : Object.keys(fields).map((key, index) => {
                // console.log(key, value);
                let inputForm = <Input />;
                if (key === "id") {
                  inputForm = <Input disabled />;
                } else if (key === "type") {
                  inputForm = (
                    <Select
                      options={[
                        {
                          value: "income",
                          label: "Ingresos",
                        },
                        {
                          value: "expense",
                          label: "Gastos",
                        },
                      ]}
                    />
                  );
                }

                return (
                  <Form.Item label={labels[key]} name={key} key={index + 1}>
                    {inputForm}
                  </Form.Item>
                );
              })}
          <Form.Item>
            <Button type="primary" size="small" shape="round" htmlType="submit">
              Save
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    );
  }

  return (
    <Modal
      open={showModal}
      onCancel={() => closeModal}
      closable={closable}
      footer={[
        <Button key="confirm" type="primary" onClick={closeModal}>
          Accept
        </Button>,
      ]}
    >
      {loading ? (
        <Result icon={<LoadingOutlined />} title={loadingMsg} />
      ) : (
        <Result status="success" title={successMsg} />
      )}
    </Modal>
  );
};

export default ConfirmationModal;
