import React, { useState } from "react";
import { memo } from "react";
import { ChangeTaskModal } from "../atoms/ChangeTaskModal";
import { Title } from "../atoms/Title";
import { Modal } from "../molecules/Modal";
import { TaskCard } from "../molecules/TaskCard";
import { MainTemplate } from "../template/MainTemplate";
import { useDispatch, useSelector } from "react-redux";
import { getTasksSelector } from "../../core/selectors/tasksSelectors";
import { createTaskAction } from "../../core/actions";

// создание глобальной переменной, для перекидывания на др. страницу
export const allTasks: Array<any> = [];

export const ViewTasks = memo(() => {
  const dispatch = useDispatch();
  //открытие модального окна
  const [modalActive, setModalActive] = useState(false);

  //получает объект всех экшенов
  const taskActions = useSelector(getTasksSelector);

  //начальное значение value
  const [modalValue, setModalValue] = useState("");

  //значение карточки,которую мы выбираем
  const [currentId, setCurrentId] = useState("");

  //изначальное  значение - со всеми созданными картами(объектами)
  const [todoArray, setToDoArray] = useState(allTasks);

  //функция удаления
  const deleteItem = (e: any) => {
    const index = allTasks.findIndex(
      (item) => item.id === e.target.closest(".created-task-card").id
    );
    allTasks.splice(index, 1);
    setToDoArray([...allTasks]);
  };

  //функция открытия модалки со значением задачи
  const addModalValue = (e: any) => {
    const value = allTasks.find(
      (item) => item.id === e.target.closest(".created-task-card").id
    );
    setModalValue(value.description);
    setCurrentId(value.id);
  };

  //функция создания нового объекта с новым значением, но со старым id
  const changedTodo = (text: string) => {
    dispatch(
      createTaskAction({
        description: text,
        id: currentId,
      })
    );
  };

  // функция заменения элемента в массиве с задачами на новый
  const getChangedToDo = () => {
    const index = allTasks.findIndex((item) => item.id === currentId);
    allTasks.splice(index, 1, taskActions.taskItem);
    setToDoArray(allTasks);
  };

  return (
    <div>
      <MainTemplate
        mainBlock={
          <div>
            <div className="view-tasks-page-wrapper">
              <Title title={"CHECK YOUR TASKS"} />
              <TaskCard
                onClickCard={(e) => {
                  setModalActive(true);
                  addModalValue(e);
                }}
                onClickDel={(e) => deleteItem(e)}
                cardsArray={todoArray}
              />
            </div>
            <Modal active={modalActive} setActive={setModalActive}>
              {
                <ChangeTaskModal
                  setActive={setModalActive}
                  value={modalValue}
                  onChangeTask={(text: string) => {
                    setModalValue(text);
                    changedTodo(text);
                  }}
                  onClickChange={(e: any) => {
                    changedTodo(modalValue);
                    getChangedToDo();
                  }}
                />
              }
            </Modal>
          </div>
        }
      />
    </div>
  );
});
