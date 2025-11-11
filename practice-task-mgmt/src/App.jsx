import { Router, Routes, Route } from "react-router";
import TaskList from "./components/TaskList";
import TaskDetail from "./components/TaskDetail";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<TaskList />} />
                <Route path="/task/:taskId" element={<TaskDetail />} />
            </Routes>
        </Router>
    );
}

export default App;

