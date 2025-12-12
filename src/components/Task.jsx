import React from 'react'

const Task = ({ onDragStart, text }) => {
    return (
        <div
            draggable
            onDragStart={onDragStart}
            className="p-3 mb-5 bg-gray-700 rounded-lg cursor-grab active:cursor-grabbing border border-gray-600 hover:bg-gray-600 transition"
        >
            {text}
        </div>
    )
}

export default Task