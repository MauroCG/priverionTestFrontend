import { ConfigProvider, theme } from "antd";
import Admin from "./components/Admin";


const App = () => {
  return (
    <ConfigProvider
      theme={{
        //algorithm: theme.darkAlgorithm,
        token: {
          //colorPrimary: "#00b96b",
        },
      }}
    >
      <Admin />
    </ConfigProvider>
  );
};

export default App;
