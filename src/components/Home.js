import { CheckCircleFilled, CloseCircleFilled } from "@ant-design/icons";
import { Row, Col, Typography, Table, Divider } from "antd";
import { useEffect, useState } from "react";

const { Title } = Typography;

const columns = [
  {
    title: "Pet name",
    dataIndex: "name",
    key: "name",
    render: (text) => (
      <Title level={5} style={{ lineHeight: 0 }}>
        {text}
      </Title>
    ),
  },
  {
    title: "Is into the house?",
    dataIndex: "inside_house",
    key: "inside_house",
    render: (text) => (
      <>
        {text ? (
          <span
            style={{
              width: "100%",
              color: "green",
              textAlign: "center",
              lineHeight: 0,
              fontSize: "20px",
            }}
          >
            <CheckCircleFilled />
          </span>
        ) : (
          <span
            style={{
              width: "100%",
              color: "red",
              textAlign: "center",
              lineHeight: 0,
              fontSize: "20px",
            }}
          >
            <CloseCircleFilled />
          </span>
        )}
      </>
    ),
  },
];

const Home = ({ pets }) => {
  const [tableItems, setTableItems] = useState([]);

  useEffect(() => {
    if (pets) {
      let newItems = [];
      pets.forEach((pet) => {
        newItems.push({
          key: pet.id,
          name: pet.name,
          inside_house: pet.inside_house,
        });
      });
      setTableItems(newItems);
    }
  }, [pets]);

  return (
    <>
      <Row>
        <Col>
          <Title level={2}>Where are my pets?</Title>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Table
          onHeaderRow={(row, index) => {
            return {
              style: {
                fontSize: "18px",
                fonntWeight: "bold",
              },
            };
          }}
          columns={columns}
          dataSource={tableItems}
        />
      </Row>
    </>
  );
};

export default Home;