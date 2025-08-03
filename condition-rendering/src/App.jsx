import List from "./List";
import ObjectList from "./ObjectList";
import UserGreeting from "./UserGreeting"
import PropsList from "./PropsList";

function App() {
  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 45 },
    { id: 3, name: "banana", calories: 105 },
    { id: 4, name: "coconut", calories: 159 },
    { id: 5, name: "pineapple", calories: 59 }
  ];
  return (
    <>
      <UserGreeting isLoggedIn={false} username="Bob" />
      <List />
      <ObjectList />
      {fruits.length > 0 && <PropsList items={fruits} category="List of Fruits" />}
    </>
  );
}

export default App
