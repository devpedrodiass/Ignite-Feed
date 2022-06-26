import Header from "./components/header/Header";
import Post, { IPostProps } from "./components/post/Post";
import Sidebar from "./components/sidebar/Sidebar";
import styles from "./styles/App.module.css";
import "./styles/global.css";

const posts: IPostProps[] = [
  {
    id: "1",
    author: {
      avatarURL: "http://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @Rocketseat",
    },
    content: [
      {
        type: "paragraph",
        content:
          "Hello Guys! 😋 I just published one more project in my portfolio",
      },
      {
        type: "paragraph",
        content: "It is a NLW Return Project, that is a event from Rocketseat.",
      },
      {
        type: "link",
        content: "👉 diego.ff/project",
      },
    ],
    publishedAt: new Date(),
  },
  {
    id: "2",
    author: {
      avatarURL: "http://github.com/fariapv.png",
      name: "Pedro Dias",
      role: "Web Developer",
    },
    content: [
      {
        type: "paragraph",
        content:
          "Hello Guys! 😋 I just published one more project in my Github",
      },
      {
        type: "paragraph",
        content: "It is a Ignite Project, that is a module from Rocketseat.",
      },
      {
        type: "link",
        content: "👉 pedro.dias/project ",
      },
    ],
    publishedAt: new Date(),
  },
];

function App() {
  return (
    <>
      <Header></Header>
      <div className={styles.wrapper}>
        <Sidebar></Sidebar>
        <main>
          {posts.map(({ author, content, publishedAt, id }) => (
            <Post
              author={author}
              content={content}
              publishedAt={publishedAt}
              key={id}
            ></Post>
          ))}
        </main>
      </div>
    </>
  );
}

export default App;
