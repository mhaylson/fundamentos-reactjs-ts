import { Post, PostType } from "./components/Post"
import { Header } from "./components/Header"

import styles from './App.module.css';

import './global.css';
import { Sidebar } from './components/Sidebar'

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/mhaylson.png',
      name: 'Mhaylson Whandson',
      role: 'CEO @ M2Smart'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2024-07-11 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/mhayk.png',
      name: 'Mhayk Whandson',
      role: 'CEO @ M2Smart'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2024-07-11 21:00:00')
  }
]

function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>

        <Sidebar />
        <main>
          {
            posts.map(post => {
              return (
                <Post
                  key={post.id}
                  post={post}
                />
              )
            })
          }
        </main>
      </div>


    </div>

  )
}

export default App
