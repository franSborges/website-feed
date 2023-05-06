import { Post } from "./Post";
import "./global.css";
import { Header } from "./components/Header";


export function App() {

  return (
    <div>
      <Header />
      <Post
      author="Fran Borges"
      content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem esse possimus nostrum, voluptatibus asperiores assumenda fugit voluptates libero. Eveniet, possimus error aliquid quod dignissimos expedita? Possimus iste ullam corporis voluptatibus."
      />
    </div>
  )
}



export default App;
