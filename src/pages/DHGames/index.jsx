import { ListDown} from "../../components/ListDown";
import {newGames} from '../../api/games'

export function DHGames(){

  console.log(newGames)
  return (
    <>
    <h1>New Games</h1>
    {
      newGames.map(game => <ListDown  key = {game.id} image={game.picture} title = {game.name}  firstIcon = {game.plataforms} secondIcon = {game.plataform2} price = {game.price} discription = {game.description}/>
      )
    }
    
    </>
  )
}