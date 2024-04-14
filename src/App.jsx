
import {Layout} from "./Components/Layout/Layout"
import Itemlistcontainer from "./Components/Pages/Itemlistcontainer/Itemlistcontainer";
import "./App.css"


const App = () => {
  return (
    <div className="fullbackground">
      <Layout>
        <Itemlistcontainer welcome={"bienvenidos"} />
      </Layout>
    </div>
  );
};

export default App;
