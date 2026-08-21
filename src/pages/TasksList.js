import { useState } from "react";

const initialTasks = [
  { id: 1, title: "Study JavaScript", completed: false },
  { id: 2, title: "Practice React", completed: false },
  { id: 3, title: "Take Ramp Assessment", completed: false },
];

const TasksList = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState("");
  //const [isChecked, setIsChecked] = useState(false);
  const [filter, setFilter] = useState("all");
  //const [remaining, setRemaining] = useState(0);
  //const [input, setInput] = useState("");

  const addNewTask = (e) => {
    setNewTask(e.target.value);
  };

  const updateNewTask = () => {
    setTasks([
      ...tasks,
      {
        id: Date.now(),
        title: newTask,
        completed: false,
      },
    ]);
    setNewTask("");
  };
  const completeTask = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            completed: true,
          };
        }
        return task;
      }),
    );
  };

  const handleCheckboxChange = (event, id) => {
    // Access the checked boolean value directly from the event target
    const checked = event.target.checked;
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            completed: checked,
          };
        }
        return task;
      }),
    );
  };

  const deleteTask = (id) => {
    setTasks(
      tasks.filter((task) => {
        return task.id !== id;
      }),
    );
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const displayedTasks = tasks.filter((task) => {
    if (filter === "active") {
      return !task.completed;
    }

    if (filter === "completed") {
      return task.completed;
    }

    return true;
  });

  const remaining = tasks.filter((task) => !task.completed).length;

  return (
    <div>
      <h1>Tasks List</h1>
      <div>
        <h2>New Task</h2>
        <input
          className="mr-2"
          value={newTask}
          placeholder="Add your task..."
          onChange={(e) => addNewTask(e)}
        />
        <button className="mr-2" onClick={updateNewTask}>
          Add Task
        </button>
      </div>
      <br />
      <div>
        {/* {tasks &&
          tasks.map((task) => {
            return (
              <div key={task.id}>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={(e) => handleCheckboxChange(e, task.id)}
                />
                <span>{task.title}</span>
                <button onClick={() => completeTask(task.id)}>
                  {task.completed ? "✓ Completed" : "Complete"}
                </button>
                <button onClick={() => deleteTask(task.id)}>Delete Task</button>
              </div>
            );
          })} */}
        {displayedTasks.map((task) => (
          <div key={task.id}>
            <input
              className="mr-2"
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />

            <span className="mr-2">{task.title}</span>

            <button className="mr-2" onClick={() => deleteTask(task.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
      <br />
      <div>
        <button className="mr-2" onClick={() => setFilter("all")}>
          Show All
        </button>
        <button className="mr-2" onClick={() => setFilter("active")}>
          Show Active
        </button>
        <button className="mr-2" onClick={() => setFilter("completed")}>
          Show Completed
        </button>
      </div>
      <br />
      <div>{remaining} tasks remaining</div>
    </div>
  );
};

export default TasksList;
