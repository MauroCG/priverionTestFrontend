import { HomeOutlined, GithubOutlined } from "@ant-design/icons";
import { Layout, Menu, Row, Col, Switch, theme, Typography, Space } from "antd";
import Home from "./Home";
import Pets from "./Pets";
import { useEffect, useState } from "react";
import { getPets } from "../utils/pet.utils";
import "./Admin.css";

const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;

const getItem = (label, key, icon, children) => {
  return {
    key,
    icon,
    children,
    label,
  };
};

const items = [
  getItem("Home", "home", <HomeOutlined />),
  getItem("My pets", "pets", <GithubOutlined />),
];

const Admin = ({ setDarkTheme }) => {
  const [currentMenuOption, setCurrentMenuOption] = useState("home");
  const [pets, setPets] = useState([]);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const changeCurrentMenuOption = (option) => {
    //console.log("the current select option is", option);
    setCurrentMenuOption(option.key);
  };

  const menuOptionsChildren = {
    home: <Home pets={pets} />,
    pets: <Pets pets={pets} />,
  };

  const changeToDarkTheme = (checked) => {
    // console.log("Switch", checked);
    setDarkTheme(checked);
  };

  useEffect(() => {
    getPets().then((pets) => {
      setPets(pets);
    });
  }, []);

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider collapsible breakpoint="md">
        <div
          style={{
            height: 32,
            margin: 16,
            background: "rgba(255, 255, 255, 0.2)",
          }}
        />
        <Menu
          theme="dark"
          mode="inline"
          items={items}
          defaultSelectedKeys={["home"]}
          onClick={changeCurrentMenuOption}
        />
      </Sider>
      <Layout>
        <Header>
          <Title level={1} className="main_title">
            Priverion New Prospects Test
          </Title>
        </Header>
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <Space style={{width: "100%", margin: "10px", justifyContent: "end"}}>
            <Title
              style={{ lineHeight: 0, margin: 0 }}
              level={4}
            >
              Modo oscuro:
            </Title>
            <Switch onChange={changeToDarkTheme} />
          </Space>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            {menuOptionsChildren[currentMenuOption]}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Priverion New Prospects Test ©2023
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Admin;
