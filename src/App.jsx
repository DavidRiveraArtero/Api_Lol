import './App.css'
import { useState,useEffect } from 'react'
import { callApi } from './api/api_lol'



import { List_Game } from './components/list_games/ListGame'
import { InfoPlayer } from './components/info_player/InfoPlayer'
function App() {

  
  const [sumonerName, setSumonerName] = useState("")
  const [sumonerLevel, setSumonerLevel] = useState()
  const [listGame, setListGame] = useState([])
  const [imgIcon, setImgIcon] = useState("")
  const [searchSummoner,setSearchSummoner] = useState("")
  

  useEffect(()=>{
    
    callApi(setSumonerLevel,setSumonerName,setImgIcon,setListGame,sumonerName,listGame)
    console.log(callApi)
    
  },[sumonerName])

  const submit = (event) =>{
    event.preventDefault()
    if(searchSummoner.length == 0) return
    setSumonerName(searchSummoner)
  }

  const searchChange = (event) =>{
    const newQuery = event.target.value
    if(newQuery.startsWith(' ')) return
    setSearchSummoner(event.target.value)
  }

  return (
    <>
      <header className='section-header'>
        <section className='logo_search'>
          <h1>LeagueSearch</h1>
          <form className='form' onSubmit={submit}>
            <input type='text' 
                name="fname"
  
                value={searchSummoner}
                onChange={searchChange} 
                placeholder='Nombre Invocador' 
            />
            <button className='' type='submit'>Buscar</button>
          </form>
        </section>
        
      </header>
      <main>
        <section className='infoPlayer'>
          {sumonerName  != "" ? 
            <InfoPlayer summonerLevel={sumonerLevel} sumonerName={sumonerName}  sumonerLevel={sumonerLevel} imgIcon= {imgIcon}/> 
            : 
            <h3 style={{paddingLeft:"20px"}}>No hay resultados</h3>
          }
        </section>

        <section>
            {listGame.length > 0 && <List_Game listGame={listGame} sumonerName={sumonerName}/>}
        </section>
     </main>
      
    </>
  )
}

export default App
