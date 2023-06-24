import React from 'react'
import { useFetch } from './custom-hook/useFetch'

const url = `https://my-json-server.typicode.com/groupevaleco/tt-fake-todolist/tasks`

interface TaskList 
{
  id: number
  title: string
  completed: boolean
}

export default function TaskList() 
{

    const { data, error } = useFetch<TaskList[]>(url);

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
        <p>{data[0].id} - {data[0].title}</p>
    )
}
