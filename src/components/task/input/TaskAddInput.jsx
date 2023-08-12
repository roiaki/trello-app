import React from "react";
import { v4 as uuid } from 'uuid';

export const TaskAddInput = ({
  inputText,
  setInputText,
  setTaskList,
  taskList,
}) => {
  const handleSubmit = (e) => {
    const taskId = uuid();

    e.preventDefault();
    // console.log(e);
    //カラなら追加しない
    if(inputText === "") {
      return;
    }

    //カード追加
    setTaskList([
      ...taskList,
      {
        id: taskId,
        draggableId: `task-${taskList.length}`,
        text: inputText,
      },
    ]);
    setInputText("");
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="taskAddInput"
          type="text"
          placeholder="add a task"
          onChange={handleChange}
          value={inputText}
        />
      </form>
    </div>
  );
};