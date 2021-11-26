import React, { useState } from "react";
import { memo } from "react";
import { CreateTaskBtn } from "../atoms/CreateTaskBtn";
import { Modal } from "../molecules/Modal";
import { Title } from "../atoms/Title";
import { MainTemplate } from "../template/MainTemplate";
import { CreateTaskModal } from "../atoms/CreateTaskModal";

export const AddTasks = memo(() => {
  const [modalActive, setModalActive] = useState(false);
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
              {<CreateTaskModal setActive={setModalActive} />}
            </Modal>
          </div>
        }
      />
    </div>
  );
});
