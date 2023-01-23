import Form from './form'
import "./styles.css";
const movies = [{
  name: 'Avengers',
  available: 5
},
{
  name: 'Terminator',
  available: 3
},
{
  name: 'Loki',
  available: 10
},
{
  name: 'Cruela',
  available: 2
},
];
export default function App() {
  return (
    <div>
      <h2>Películas</h2>
      {movies.map((movie)=>(<Form movie={movie}></Form>))}
      
    </div>
  );
}