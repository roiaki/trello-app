import React, { useState } from 'react'

export const TaskCardTitle = () => {

  const [isClick, setIsClick] = useState(false);
  const [inputCardTitle, setInputCardTitle] = useState("タイトル");

  const handleClick = () => {
    setIsClick(true);
    console.log(isClick);
  };

  const handleChange = (e) => {
    console.log(inputCardTitle);
    setInputCardTitle(e.target.value);
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsClick(false);
  };

  const handleBlur = () => {
    setIsClick(false);
  };

  return (
    <div onClick={handleClick} className="taskCardTitleInputArea">
      {isClick 
        ? (
            <form onSubmit={handleSubmit}>
              <input
                className="taskCardTitleInput"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={inputCardTitle}
                autoFocus
                maxLength={20}
                // placeholder="タイトル"
              />
            </form>
          )
        : (<h3>{inputCardTitle}</h3>)
      }

    </div>
  );
};
