import { useParams } from "react-router";


export default function TaskDetails({tasks}) {
    const { id } = useParams();

    const task = tasks.find((task) => task.id == parseInt(id));

    return (
        <div>
            <h2>{task.title}</h2>
            <p>
                {task.description}
            </p>
        </div>
    )

}