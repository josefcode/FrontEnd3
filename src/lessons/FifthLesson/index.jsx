import { FifthLessonItem } from '../../components/FifthLessonItem'
import './style.scss'

export  function FifthLesson() {
  const componentsFinded = [
    {
        id: 1,
        title: 'Vídeo Component',
        image: 'https://picsum.photos/id/237/200/300',
        text: 'Lorem ipsum, dolor sit amet consectetur.'
    },
    {
        id: 2,
        title: 'Input Component',
        image: 'https://picsum.photos/id/247/200/300',
        text: 'Lorem ipsum, dolor sit amet consectetur.'
    },
    {
        id: 3,
        title: 'Button Component',
        image: 'https://picsum.photos/id/227/200/300',
        text: 'Lorem ipsum, dolor sit amet consectetur.'
    }
]


return (
    <div className='quarta-aula-component'>

      
        <h1 className='main-title'>Componentes identificados</h1>
        <FifthLesson />

        <ul className='components-finded'>

            {/* {
                componentsFinded.map(
                    component => {
                        return (
                            <FifthLessonItem />
                        )
                    }
                )
            } */}

        </ul>

    </div>
)
}
