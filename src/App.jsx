import { useState } from 'react'
import Navbar from './components/Navbar'
import SideBar from './components/SideBar'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="App w-screen h-screen">
            <SideBar />
        </div>
    )
}

export default App
