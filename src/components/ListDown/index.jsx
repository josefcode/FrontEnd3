import './style.scss'


export function ListDown({image, title, firstIcon, secondIcon, price, discription}){
  return(
 
    <div className='container'>
      <div className="first_container">
        <img className="principal_image" src= {image} alt ="" />
      </div>
      <div className="second_container">

     <h1>{title}</h1>
    <img className="icon_image"src= {firstIcon} alt =""/>
    <img className="icon_image" src= {secondIcon} alt =""/>
    <h2>{price}</h2>
    
    
 
    <p className="description">{discription}</p>
    </div>
     </div>
 
  )
  }