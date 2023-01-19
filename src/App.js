import { ConfigProvider, theme } from "antd";
import { useState } from "react";
import Admin from "./components/Admin";


const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <ConfigProvider
      theme={{
        //algorithm: theme.darkAlgorithm,
        algorithm: darkTheme ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: {
          //colorPrimary: "#00b96b",
        },
      }}
    >
      <Admin setDarkTheme={setDarkTheme} />
    </ConfigProvider>
  );
};

export default App;
