import React, { useState } from "react";
import { memo } from "react";
import { ChangeTaskModal } from "../atoms/ChangeTaskModal";
import { Title } from "../atoms/Title";
import { Modal } from "../molecules/Modal";
import { TaskCard } from "../molecules/TaskCard";
import { MainTemplate } from "../template/MainTemplate";

export const ViewTasks = memo(() => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <div>
      <MainTemplate
        mainBlock={
          <div>
            <div className="view-tasks-page-wrapper">
              <Title title={"CHECK YOUR TASKS"} />
              <TaskCard onClickCard={() => setModalActive(true)} />
              <TaskCard onClickCard={() => setModalActive(true)} />
              <TaskCard onClickCard={() => setModalActive(true)} />
              <TaskCard onClickCard={() => setModalActive(true)} />
            </div>
            <Modal active={modalActive} setActive={setModalActive}>
              {<ChangeTaskModal setActive={setModalActive} />}
            </Modal>
          </div>
        }
      />
    </div>
  );
});
