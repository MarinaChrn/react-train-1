import "./App.css";
import { Profile } from "./Profile/Profile";
import user from "./user.json";
import stats from "./data.json";
import { Statistics } from "./Statistics/Statistics";

function App() {
  return (
    <div className="App">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={stats} />
    </div>
  );
}

export default App;
