
import './style.scss'
import nature from './../../assets/images/001.jpg'
export function ThirdLesson(){
  
  const components = [
    {name: 'Card', description: 'test welcome', image: 'https://picsum.photos/400/300'},
    {name: 'Card', description: 'test welcome', image: 'https://picsum.photos/400/300'}
  ]

  return (
    <>

    <h1>Third lesson</h1>
    <ul>
      {
        components.map(component => (
      <li>
        <img src={component.image}  alt=""/>
        <h2>{component.name}</h2>
      </li>
        ))
      }
      
    </ul>
    </>
  )
}