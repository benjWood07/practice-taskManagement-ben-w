import { Link } from "react-router";

export default function TaskList() {
    const tasks = [
        {
            id: 1,
            title: 'Learn React',
            description: 'Learn about React Router '
        },
        {
            id: 2,
            title: 'Foundations ',
            description: 'What we learned about foundations'
        },
        {
            id: 3,
            title: 'Java Development',
            description: 'Learning about backend connections and data structures'
        }       
    ];


    return(
        <div>
            <h1>Task List</h1>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <Link to={`/task/${task.id}`}>
                        {task.title}
                        </Link>
                    </li>
                ))}
            </ul>

        </div>
    )

}