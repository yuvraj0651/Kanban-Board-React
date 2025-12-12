import Task from "./Task";

const Column = ({ title, items, onDragStart, onDrop, color }) => {
    return (
        <>
            <div
                className={`p-4 bg-gray-800 rounded-lg border-2 ${color}`}
                onDragOver={(e) => e.preventDefault()}
                onDrop={onDrop}
            >
                <h2 className="text-xl font-semibold mb-4 text-center uppercase tracking-wide">{title}</h2>
                <div className="py-3">
                    {items.map((task, index) => (
                        <Task
                            key={index}
                            text={task}
                            onDragStart={() => onDragStart(index)}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Column