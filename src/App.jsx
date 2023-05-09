import { Post } from "./Post";
import styles from "./App.module.css";
import "./global.css";
import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";


export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
         <Post
         author="Fran Borges"
         content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem esse possimus nostrum, voluptatibus asperiores assumenda fugit voluptates libero. Eveniet, possimus error aliquid quod dignissimos expedita? Possimus iste ullam corporis voluptatibus."
         />
         <Post
         author="Fran Borges"
         content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem esse possimus nostrum, voluptatibus asperiores assumenda fugit voluptates libero. Eveniet, possimus error aliquid quod dignissimos expedita? Possimus iste ullam corporis voluptatibus."
         />
         <Post
         author="Fran Borges"
         content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem esse possimus nostrum, voluptatibus asperiores assumenda fugit voluptates libero. Eveniet, possimus error aliquid quod dignissimos expedita? Possimus iste ullam corporis voluptatibus."
         />
         <Post
         author="Fran Borges"
         content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem esse possimus nostrum, voluptatibus asperiores assumenda fugit voluptates libero. Eveniet, possimus error aliquid quod dignissimos expedita? Possimus iste ullam corporis voluptatibus."
         />
         <Post
         author="Fran Borges"
         content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem esse possimus nostrum, voluptatibus asperiores assumenda fugit voluptates libero. Eveniet, possimus error aliquid quod dignissimos expedita? Possimus iste ullam corporis voluptatibus."
         />
        </main>
      </div>
    </div>
  )
}



export default App;
