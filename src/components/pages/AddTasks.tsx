import React, { useState } from "react";
import { memo } from "react";
import { CreateTaskBtn } from "../atoms/CreateTaskBtn";
import { Modal } from "../molecules/Modal";
import { Title } from "../atoms/Title";
import { MainTemplate } from "../template/MainTemplate";
import { CreateTaskModal } from "../atoms/CreateTaskModal";
import { getTasksSelector } from "../../core/selectors/tasksSelectors";
import { useDispatch, useSelector } from "react-redux";
import { validateName } from "../helpers/helpers";
import { createTaskAction } from "../../core/actions";
import { allTasks } from "./ViewTasks";

export const AddTasks = memo(() => {
  const dispatch = useDispatch();

  //функция, которая возвращает уникальный id
  const uid = () => {
    const head = Date.now().toString(36);
    const tail = Math.random().toString(36).substr(2);
    return head + tail;
  };

  //открытие модального окна
  const [modalActive, setModalActive] = useState(false);

  //передаём текст инпута (и его начальное состояние)
  const [text, setText] = useState("");

  // не даёт создать пустое задание
  const isValidText = validateName(text);

  // получаем объект, из всех наших экшенов
  const taskActions = useSelector(getTasksSelector);

  //функция которая создаёт новую задачу
  const newToDo = (text: string, id: string) => {
    dispatch(
      createTaskAction({
        description: text,
        id: id,
      })
    );
  };

  return (
    <div>
      <MainTemplate
        mainBlock={
          <div>
            <div className="add-tasks-page">
              <Title title={"ADD NEW TASK"} />
              <CreateTaskBtn onClickCreate={() => setModalActive(true)} />
            </div>
            <Modal active={modalActive} setActive={setModalActive}>
              {
                <CreateTaskModal
                  setActive={setModalActive}
                  value={text}
                  onChangeHandler={(text: string) => {
                    setText(text);
                    newToDo(text, uid());
                  }}
                  onClick={() => {
                    newToDo(text, uid());
                    allTasks.push(taskActions.taskItem);
                    setText("");
                  }}
                  isValid={isValidText}
                />
              }
            </Modal>
          </div>
        }
      />
    </div>
  );
});
