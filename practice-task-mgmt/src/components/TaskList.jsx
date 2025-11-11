import { Link } from "react-router";

const TaskList = () => {
    const tasks = [
        { id: 1,
          title: "Learn React",
          description: "Understand the basics of React."
        },
        { id: 2,
          title: "Practice Hooks",
          description: "Master useState and useEffect."
        },
        { id: 3,
          title: "Explore React Router",
          description: "Learn routing and URL parameters."
        },
    ];

    return (
        <div>
            <h1>Task List</h1>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <Link to={`/task/${task.id}`}>{task.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;