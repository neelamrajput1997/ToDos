
import './App.css';
import Header from './Components/Header';
import Todos from './Components/Todos';
import Footer from './Components/Footer';


function App() {
  let todosListItem=[
    {
      sno:1,
      title:"go to the market",
      desc:"you need to go to the market to complete task1"
    },
    {
      sno:2,
      title:"go to the mall",
      desc:"you need to go to the mall to complete task2"
    },
    {
      sno:3,
      title:"go to the temple",
      desc:"you need to go to the temple to complete task3"
    }
  ]
  return (
    <>
  <Header title="Todos List" homeTitle="Home" aboutTitle="About" searchBar={false}/>
  <Todos todosListItem={todosListItem} />
  <Footer/>
  </>
  );
}

export default App;
