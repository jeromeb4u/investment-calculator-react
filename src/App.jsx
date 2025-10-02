import Header from "./components/Header";
import UserInput from "./components/UserInput";

function App() {
  return (
    <>
      <Header />
      <div className="user-group">
        <UserInput label="Initial Investment" />
        <UserInput label="Annual Investment" />
        <UserInput label="Expected Return" />
        <UserInput label="Duration" />
      </div>
    </>
  );
}

export default App;
