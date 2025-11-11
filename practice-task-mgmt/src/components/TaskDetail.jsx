import { useParams } from "react-router";

const TaskDetail = () => {
    const { taskId } = useParams();
    
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

    const task = tasks.find((task) => task.id === parseInt(taskId));

    if (!task) {
        return <p>Task not found.</p>;
    }

    return (
        <div>
          <h1>{task.title}</h1>
          <p>{task.description}</p>
        </div>
    );
};

export default TaskDetail;