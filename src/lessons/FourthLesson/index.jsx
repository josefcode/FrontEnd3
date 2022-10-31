
import './style.scss'
import { FifthLesson } from '../FifthLesson'


export const FourthLesson = () => {

  const componentsFinder = [
    {
      title : 'video',
      image : "https://picsum.photos/200/300?grayscale",
      text: 'fatal: not a git repository (or any of the parent directories): .git'
    },
    {
      title : 'video',
      image : "https://picsum.photos/id/1/200/300",
      text: 'fatal: not a git repository (or any of the parent directories): .git'
    }
  ]

  return(
    <div className="fourth-lesson">
      <FifthLesson />
      <h1>Componentes identifcados</h1>
    <ul>

      {
        componentsFinder.map(item=>{
          return (
            <li className="fourth-lesson-card">
            <img className='fourth-lesson-image' src = {item.image}  alt ="nature" />
            <h2>{item.title} </h2>
            <p>{item.text}</p>
           </li>
          )
     
        })



      }
    
      
    </ul>
    </div>
  )

}