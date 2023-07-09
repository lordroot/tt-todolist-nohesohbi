import React, { useState , useEffect} from 'react'
import TaskItem from './TaskItem';


interface taskStruct
{

    id: number
    title: string
    completed: boolean

}

export default function TaskList() {

    const url = `https://my-json-server.typicode.com/groupevaleco/tt-fake-todolist/tasks`

    const [task,setTask] = useState<taskStruct[]>([])

    useEffect(() => {

        fetch(url)
            .then(response => response.json())
            .then(data => {

                setTask(data)

            })
            .catch(error => {

                console.error('Une erreur est survenue : ', error);

            });

      }, [])

    return (
    <>
        <p>
            Voici la liste des tâches a effectuer :
        </p>
        <ul id="taskWrap">
            {
                task.map(

                    (task) => {

                        return <TaskItem key={task.id} id={task.id} title={task.title} completed={task.completed}/>
                    
                    }

                )
            }
        </ul>
    </>
    )
}
