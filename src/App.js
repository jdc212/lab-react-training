import {Greetings} from "./Components/Greetings/Greetings";
import IdCard from "./Components/IdCard/IdCard";

function App() {
  return (
    <div>

    <h1 id="heading">IdCard</h1>


   <IdCard
  lastName='Doe'
  firstName='John'
  gender='male'
  height='1m78'
  birth={new Date("1992-07-14")}
  picture="https://randomuser.me/api/portraits/men/44.jpg"
/>
 
<IdCard
  lastName='Delores '
  firstName='Obrien'
  gender='female'
  height='1m72'
  birth={new Date("1988-05-11")}
  picture="https://randomuser.me/api/portraits/women/44.jpg"
/>

<h1 id="heading">Greetings</h1>

<Greetings lang="de">Ludwig</Greetings>
<Greetings lang="fr">François</Greetings>

</div>
  );

 
}

export default App;
