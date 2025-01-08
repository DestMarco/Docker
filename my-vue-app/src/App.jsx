import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './componenti/Card'
import './App.css'
import Todolist from './componenti/Todolist'
import UserProfile from './componenti/UserProfile'
import Parent from './componenti/Parent'
import Parent3 from './componenti/Parent3'

function alertClick(){
  alert("LODA IL SOLE");
}

function handleChange(e){
  console.log(e.target.value);
}
function handleSubmit(e){
  e.preventDefault()
  console.log(e)
}

function App() {
  const [count, setCount] = useState(0)
  const bosse=[{id:0,
    isVisit:false,
    ti:"Loda il sole",
    des:"soleir fa lodare il sole alle persone",
    im:"https://i.makeagif.com/media/5-19-2017/47ZHUC.gif",
  },
  {id:1, 
    isVisit:true,
    ti:"Siegmeyer" ,
    des:" Aknight swearing allegiance to an unidentified order of warriors, this NPC can occasionally assist the player in various points in the game.",
    im:"https://darksouls.wiki.fextralife.com/file/Dark-Souls/siegmeyer_of_catarina.jpg",
  },
  {id:2,
    isVisit:false,
    ti:"lautrec di carim" ,
    des:"Lautrec is found imprisoned on the top floor of the church in Undead Parish, before climbing the ladders to the roof where the Bell Gargoyles are fought.",
    im:"https://i.pinimg.com/736x/92/4e/cb/924ecb058a7db8af8e1deb9a09ff18f5.jpg",
  },
  {id:3,
    isVisit:true,
    ti:"Smough",
    des:"Smough is the royal executioner of Anor Londo. He longs to be ranked with the Four Knights, but his cruelty, including using his victim's bone as his food's ",
    im:"https://i.pinimg.com/736x/0a/ba/2a/0aba2a29134162f9de4d605e8e44429f.jpg",
  }];
  return (

    <>
    <Todolist></Todolist>
    <UserProfile></UserProfile>
    <Parent></Parent>
    <Parent3></Parent3>
    <Card 
    isVisit={false}
    ti="Loda il sole" 
    des="soleir fa lodare il sole alle persone"
    im="https://i.makeagif.com/media/5-19-2017/47ZHUC.gif">
    </Card>
    <Card
    isVisit={true}
    ti="Siegmeyer" 
    des=" Aknight swearing allegiance to an unidentified order of warriors, this NPC can occasionally assist the player in various points in the game."
    im="https://darksouls.wiki.fextralife.com/file/Dark-Souls/siegmeyer_of_catarina.jpg"
    ></Card>
    <Card
    isVisit={false}
    ti="lautrec di carim" 
    des="Lautrec is found imprisoned on the top floor of the church in Undead Parish, before climbing the ladders to the roof where the Bell Gargoyles are fought."
    im="https://i.pinimg.com/736x/92/4e/cb/924ecb058a7db8af8e1deb9a09ff18f5.jpg">
    </Card>
    <Card
    isVisit={true}
    ti="Smough" 
    des="Smough is the royal executioner of Anor Londo. He longs to be ranked with the Four Knights, but his cruelty, including using his victim's bone as his food's "
    im="https://i.pinimg.com/736x/0a/ba/2a/0aba2a29134162f9de4d605e8e44429f.jpg">
    
    </Card>
    {bosse.map((boss)=>(
      <Card key={boss.id}
      ti={boss.name}
      im={boss.im}
      isVisit={boss.isVisit}
      des={boss.des}>
      </Card>
    ))}
    {bosse.filter((boss)=>boss.isVisit).map((boss)=>(
      <Card key={boss.id}
      ti={boss.name}
      im={boss.im}
      isVisit={boss.isVisit}
      des={boss.des}>
      </Card>
     ))}

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={(alertClick)}>LODA</button>
        <input type='text' onChange={(handleChange)}></input>
        <form onSubmit={handleSubmit}>
        <button type='submit'>Load</button>
        </form>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
