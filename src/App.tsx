import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <header>
          <h1>Nicco Jacinto</h1>
          <p>Front End Programmer</p>
          <nav>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>
        <section id="projects">
          <h2>Projects</h2>
          <p>Coming soon!</p>
        </section>

        <footer id="contact">
          <p>Contact me at: niccolo.jacinto@gmail.com</p>
        </footer>
      </div>
    </>
  )
}

export default App
