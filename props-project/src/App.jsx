/*
   Props = read only properties that are shared between components
   A parent component can send data to a child component
   <component key=value />
*/

import Student from "./Student";


function App() {
// spread operator in JavaScript
const defaultStudent = {
  name: "Guest",
  age: 0,
  isStudent: false
};
 
   return (
      <>
      <Student  name="Spongebob" age={30} isStudent={true} />
      <Student  name="Patrick" age={45} isStudent={false} />
      <Student  name="Squidward" age={35} isStudent={true} />
      <Student  name="Sandy" age={50} isStudent={false} />
      <Student {...defaultStudent}/>
     </>
   );
}

export default App
