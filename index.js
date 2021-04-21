function TheTrain() {
  return (
    <div className="train">
      <TrainItem name="Loco 1" type="engine" />
      <div className="clear"></div>
    </div>
  );
}

function TrainItem({ name, type }) {
  const imgUrl = `/img/trains-profile.jpg`;

  return (
    <div className="floatRight">
      <div className="content trainImage"></div>
    </div>
  );
}

function TrainView() {
  return (
    <div className="">
      <main className="">
        <TheTrain />
      </main>
    </div>
  );
}

function MidView() {
  return (
    <div className="row align-items-start">
      <div className="col button-section">
        <button className="btn btn-primary">Kliknij tutaj</button>
      </div>
      <div className="col stats">Stats -----------------------</div>
      <div className="w-20 d-block d-md-none "></div>
      <div className="col upgrades">Upgrades -----------------------------</div>
    </div>
  );
}

function App() {
  return (
    <div className="container bg-light main">
      <TrainView />
      <MidView />
      <AppFooter />
    </div>
  );
}

function AppFooter() {
  return <p> Wyszyński.go All rights reserved, but not sure. </p>;
}

ReactDOM.render(<App />, document.getElementById("app"));
