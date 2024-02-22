import Header from "./components/header/header.component";
import Main from "./components/main/main.component";
import Footer from "./components/footer/footer.component";

import "./app.scss";

const App = () => (
  <div className="app">
    <Header />
    <Main className="main" />
    <Footer className="footer" />
  </div>
);

export default App;
