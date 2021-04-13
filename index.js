function TheTrain() {
  return (
    <div className="train">
      <TrainItem name="Loco 1" type="engine" />
      <TrainItem name="Wagon 1" type="wagon" />
      <div className="clear"></div>
    </div>
  );
}

function TrainItem({ name, type }) {
  const imgUrl = `https://www.twojehobby.eu/images/Wagon%20towarowy%20kryty%20typ%20G02%20Piko%2058945%20www.twojehobby%20(11).jpg`;
  let styles = {
    margin: "20px",
    width: "200px",
    height: "100px",
    backgroundColor: "yellow",
  };
  return (
    <div className="item">
      <img src={imgUrl} className="ui mini rounded image" style={styles} />
      <div className="content">
        <h1 className="header">{name}</h1>
        <div className="description">{type}</div>
      </div>
    </div>
  );
}

function TrainView() {
  return (
    <div className="container-md">
      <main className="ui main text container">
        <TheTrain />
      </main>
    </div>
  );
}

function App() {
  return (
    <div className="container bg-light main">
      <TrainView />
      <AppFooter />
    </div>
  );
}

function AppFooter() {
  return <h8> Wyszyński.go All rights reserved, but not sure. </h8>;
}

ReactDOM.render(<App />, document.getElementById("app"));
