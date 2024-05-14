import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'
import './globals.css'

import styles from './App.module.css'

// author: { avatar_url "", name: "", role:""}
// publisheAlt: Date
// Content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/10768462?v=4',
      name: 'Michelle D Pacheco',
      role: 'CTO MP Web'
    },
    content: [
     { type: 'paragraph', content: 'Fala galeraaaa!!'},
     { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio'},
     { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publichedAt: new Date('2024-04-03 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Brito',
      role: 'CTO MP Web'
    },
    content: [
     { type: 'paragraph', content: 'Fala galeraaaa!!'},
     { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio'},
     { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publichedAt: new Date('2024-04-17 19:00:00')
  },
]
export function App() {

  return ( 
    <div> 
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publichedAt={post.publichedAt}
              />
            )
            })}
        </main>

      </div>

      </div>
  )
}
 
