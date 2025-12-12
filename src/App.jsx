import './App.css'
import Board from "./components/Board";

function App() {

  return (
    <>
      <div className="min-h-screen bg-gray-900 text-white p-6">
        <h1 className="text-3xl font-bold text-center mb-[3rem]">Kanban Board</h1>
        <Board />
      </div>
    </>
  )
}

export default App
