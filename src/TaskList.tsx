import React, { useState , useEffect} from 'react'

export default function TaskList() {

    const url = `https://my-json-server.typicode.com/groupevaleco/tt-fake-todolist/tasks`
    const [task,setTask] = useState([])

    useEffect(() => {

        fetch(url)
            .then(response => response.json())
            .then(data => {
                setTask(data);
                console.log(task)
            })
            .catch(error => {
                console.error('Une erreur est survenue : ', error);
            });

      }, []);

    
  return (
    <></>
  )
}
