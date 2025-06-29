import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import { FaCheck, FaTrash, FaEye, FaPlus, FaEdit, FaSave } from "react-icons/fa";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TodoApp.css";

const LOCAL_KEY = "my_tasks";

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("all");
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [viewTaskData, setViewTaskData] = useState(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(LOCAL_KEY);
      if (stored) setTasks(JSON.parse(stored));
    } catch (err) {
      console.error("Error reading tasks from localStorage", err);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const handleAdd = () => {
    const trimmed = newTask.trim();
    if (!trimmed) return;
    const newItem = {
      id: Date.now(),
      title: trimmed,
      completed: false,
      description: `Description for "${trimmed}"`,
    };
    setTasks([newItem, ...tasks]);
    setNewTask("");
  };

  const markDone = (id) =>
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: true } : task)));

  const deleteTask = (id) =>
    setTasks(tasks.filter((task) => task.id !== id));

  const clearAll = () => {
    if (window.confirm("Clear all tasks?")) {
      setTasks([]);
    }
  };

  const startEdit = (id, title) => {
    setEditId(id);
    setEditText(title);
  };

  const saveEdit = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, title: editText.trim() } : task)));
    setEditId(null);
    setEditText("");
  };

  const viewTask = (task) => {
    setViewTaskData(task);
    setShowModal(true);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <div className="container mt-5 todo-container">
      <h2 className="text-center mb-4">To-Do List</h2>

      <div className="d-flex flex-column flex-md-row gap-2 mb-3">
        <input
          className="form-control"
          placeholder="Enter task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <Button label="Add" variant="primary" icon={<FaPlus />} onClick={handleAdd} />
      </div>

      <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
        <Button label="All" variant={filter === "all" ? "primary" : "outline"} onClick={() => setFilter("all")} />
        <Button label="Active" variant={filter === "active" ? "primary" : "outline"} onClick={() => setFilter("active")} />
        <Button label="Completed" variant={filter === "completed" ? "primary" : "outline"} onClick={() => setFilter("completed")} />
        <Button label="Clear All" variant="danger" icon={<FaTrash />} onClick={clearAll} />
      </div>

      {filteredTasks.length === 0 ? (
        <p className="text-center text-muted">No tasks found.</p>
      ) : (
        filteredTasks.map((task) => (
          <div
            key={task.id}
            className={`d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center border p-3 mb-3 shadow-sm rounded ${task.completed ? "bg-light" : ""}`}
          >
            {editId === task.id ? (
              <input className="form-control me-2 mb-2 mb-md-0" value={editText} onChange={(e) => setEditText(e.target.value)} />
            ) : (
              <span className="mb-2 mb-md-0" style={{ textDecoration: task.completed ? "line-through" : "none", fontWeight: 500 }}>
                {task.title}
              </span>
            )}

            <div className="d-flex flex-wrap gap-2">
              <Button label="View" variant="outline" icon={<FaEye />} onClick={() => viewTask(task)} />
              {!task.completed && <Button label="Done" variant="success" icon={<FaCheck />} onClick={() => markDone(task.id)} />}
              {editId === task.id ? (
                <Button label="Save" variant="primary" icon={<FaSave />} onClick={() => saveEdit(task.id)} />
              ) : (
                <Button label="Edit" variant="secondary" icon={<FaEdit />} onClick={() => startEdit(task.id, task.title)} />
              )}
              <Button label="Delete" variant="danger" icon={<FaTrash />} onClick={() => deleteTask(task.id)} />
            </div>
          </div>
        ))
      )}

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Task Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {viewTaskData && (
            <>
              <h5 className="fw-bold">{viewTaskData.title}</h5>
              <p>{viewTaskData.description}</p>
              <span className="badge bg-secondary">
                {viewTaskData.completed ? "Completed" : "Active"}
              </span>
            </>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default TodoApp;
