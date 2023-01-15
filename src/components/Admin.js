import { HomeOutlined, GithubOutlined } from "@ant-design/icons";
import { Layout, Menu, theme, Typography } from "antd";
import Pets from "./Pets";
import { useState } from "react";

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

const menuOptionsChildren = {
  home: <h2>Home</h2>,
  pets: <Pets />,
};

const Admin = () => {
  const [currentMenuOption, setCurrentMenuOption] = useState("home");
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const changeCurrentMenuOption = (option) => {
    //console.log("the current select option is", option);
    setCurrentMenuOption(option.key);
  }

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
          onClick={changeCurrentMenuOption}
        />
      </Sider>
      <Layout>
        <Header>
          <Title
            level={1}
            style={{
              color: "white",
              lineHeight: 0,
            }}
          >
            Priverion New Prospects Test
          </Title>
        </Header>
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            {
              menuOptionsChildren[currentMenuOption]
            }
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
