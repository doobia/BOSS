import React, { useRef, useContext, useEffect } from "react";
import styles from "./todo.module.css";

import { AuthContext } from "../../Context/AuthContext";

const Todo =  () => {
  const { user } = useContext(AuthContext);

  let task = useRef();
  let task_date = useRef();
  let task_desc = useRef();
  let add = useRef();
  let posts = useRef();

  let postData = async (e) => {
    e.preventDefault();
    let task_data = {
      userId: user._id,
      task: task.current.value,
      task_date: task_date.current.value,
      task_desc: task_desc.current.value,
    };

    await fetch("posts/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task_data),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));

    add.current.setAttribute("data-bs-dismiss", "modal");
    // add.current.click();

    (() => {
      add.current.setAttribute("data-bs-dismiss", "");
      task.current.value = "";
      task_date.current.value = "";
      task_desc.current.value = "";
    })();

    posts.current.innerHTML += `
    
    <div className=${styles.single_task} >
          <span className="fw-bold">${task_data.task}</span>
          <span className="small text-secondary">${task_data.task_date}</span>
          <p>${task_data.task_desc}</p>
  
          <span className=${styles.options}>
            <i data-bs-toggle="modal" data-bs-target="#form" class="fas fa-edit"></i>
            <i class="fas fa-trash-alt"></i>
          </span>
        </div>
    `;
  };

  let getUserTasks = async()=>{
    // posts.current.innerHTML = ''
    let userTasks = await fetch(`/posts/${user._id}`)
    .then((res) => res.json())
    .then((res) => posts.current.innerHTML += res.map(x=>{
      return `
      <div className=${styles.single_task} >
            <span className="fw-bold">${x.task}</span>
            <span className="small text-secondary">${x.task_date}</span>
            <p>${x.task_desc}</p>
    
            <span className=${styles.options}>
              <i data-bs-toggle="modal" data-bs-target="#form" class="fas fa-edit"></i>
              <i class="fas fa-trash-alt"></i>
            </span>
          </div>
      `
    }).join(''));

    

    


  }
  getUserTasks()
  return (
    <div className={`${styles.container} mt-4`}>
      <div className={styles.app}>
        <h4 className="mb-3">TODO App</h4>

        <div
          id={styles.addNew}
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <span> Add New Task</span>
          <i className="fas fa-plus"></i>
        </div>

        <div ref={posts} id="posts"></div>
      </div>

      {/* <!-- Modal --> */}
      <form
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        onSubmit={(e) => postData(e)}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add Task
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>Task Title</p>
              <input required ref={task} className="form-control" type="text" />
              <p>Due Date</p>
              <input
                required
                ref={task_date}
                className="form-control"
                type="date"
              />
              <p>Description</p>
              <textarea
                required
                ref={task_desc}
                className="form-control"
                name=""
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button ref={add} type="submit" className="btn btn-primary">
                Post
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Todo;
