import React, { useState } from 'react';
import TaskDetailsView from './TaskDetailsView';
import TaskDetailsEdit from './TaskDetailsEdit';

export interface TTaskDetailsProps {
    name: string
    description: string
    handleClose: () => void
    isOpen: boolean
    taskId: number
    listId: number
    setMode: (isEditProp: boolean) => void
}

const TaskDetails: React.FC<TTaskDetailsProps> = ({ isOpen, handleClose, name, description, listId, taskId }) => {
    const [isEdit, setIsEdit] = useState(false)

    const setModeHandle = (isEditProp: boolean): void => {
        setIsEdit(isEditProp)
    }

    const handleCloseImpl = () => {
        setIsEdit(false)
        handleClose()
    }

    return (
        isEdit
        ? <TaskDetailsEdit
            isOpen={isOpen}
            handleClose={handleCloseImpl}
            name={name}
            description={description}
            listId={listId}
            taskId={taskId}
            setMode={setModeHandle}
        />
        : <TaskDetailsView
            isOpen={isOpen}
            handleClose={handleCloseImpl}
            name={name}
            description={description}
            listId={listId}
            taskId={taskId}
            setMode={setModeHandle}
        />
    );
};

export default TaskDetails;
