import React, { useState } from 'react'
import Column from './Column';

const Board = () => {

    const [tasks, setTasks] = useState({
        todo: ["Learn React", "Study JavaScript"],
        progress: ["Fix bug #21", "UI redesign"],
        done: ["Project 1", "Project 2"],
    });

    const [dragItem, setDragItem] = useState(null);

    const handleDragStart = (column, index) => {
        setDragItem({ column, index })
    };

    const handleDrop = (column) => {
        if (!dragItem) return;

        const fromColumn = dragItem.column;
        const fromIndex = dragItem.index;

        const item = tasks[fromColumn][fromIndex];

        const updated = { ...tasks };

        updated[fromColumn].splice(fromIndex, 1);
        updated[column].push(item);

        setTasks(updated);
        setDragItem(null);
    }

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Column
                    title="To Do"
                    items={tasks.todo}
                    onDragStart={(i) => handleDragStart("todo", i)}
                    onDrop={() => handleDrop("todo")}
                    color="border-blue-500"
                />
                <Column
                    title="In Progress"
                    items={tasks.progress}
                    onDragStart={(i) => handleDragStart("progress", i)}
                    onDrop={() => handleDrop("progress")}
                    color="border-yellow-500"
                />
                <Column
                    title="Done"
                    items={tasks.done}
                    onDragStart={(i) => handleDragStart("done", i)}
                    onDrop={() => handleDrop("done")}
                    color="border-green-500"
                />
            </div>
        </>
    )
}

export default Board