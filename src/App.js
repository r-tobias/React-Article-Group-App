import './App.css';
import Article from './components/Article';
import Author from './components/Author';
import Button from './components/Button';
import Next from './components/Next';
import Publisher from './components/Publisher';
import Image from './components/Image';



function App() {
  return (
    <div className="App">

    <Publisher name="Amari Times" section="Technology" />
    <Article title="How not to create React app" paragraph="Do not delete app.js hhmmh amari"/>
    <Author label="Author: " name="Everyone except amari" date="3/14/2022" />
    <Image text='https://fanfest.com/wp-content/uploads/2017/10/michael-scott-the-office.jpg
'/>
    <Button text="show more"/> 
    <Next text="next page"/>
    

     <h1></h1>
    </div>
  );
}

export default App;