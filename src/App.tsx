import { useEffect, useState } from "react";
import "./App.css";
import { ContributionGraph } from "./ContributionGraph";

function App() {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    fetch("https://dpg.gg/test/calendar.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="App">
      <ContributionGraph data={data} />
      {/* <GitHubContributionsGraph data={data} /> */}
    </div>
  );
}

export default App;
