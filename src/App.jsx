import "./App.scss";
import CardContainer from "./components/CardContainer/CardContainer";
import Header from "./components/Header/Header";
import team from "./data/team.js";

const App = () => {
  return (
    <>
      <section>
        <Header text = "Ticket Tracker"/>
      </section>
      <section className="app">
        <CardContainer team={team} />
      </section>
    </>
  );
}

export default App;
