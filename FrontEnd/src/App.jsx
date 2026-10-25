import { useState } from 'react'
import styles from './App.module.css'
import NavBar from './components/NavBar.jsx'
import { Outlet } from 'react-router-dom'
import { createContext } from 'react'
export const AppContext = createContext();

function App() {

  return (
    <div>
        <AppContext value={{}}>
            <main className={styles.main}>
                <NavBar/>
                <Outlet />
            </main>

        </AppContext>
    </div>
  )
}

export default App
