import React from 'react'
import { useFetch } from './custom-hook/useFetch'

const url = `https://my-json-server.typicode.com/groupevaleco/tt-fake-todolist/tasks`

interface TaskItem 
{
  id: number
  title: string
  completed: boolean
}

export default function TaskList() 
{

    const { data, error } = useFetch<TaskItem[]>(url);

    if (error) {
        return (
            <p>An error occurred</p>
        )
    }

    if (!data) {
        return (
            <p>Loading data...</p>
        )
    }

    return (
        data.map(
            (task) => <p>{task.id} {task.title}</p> 
        )
    )
}
