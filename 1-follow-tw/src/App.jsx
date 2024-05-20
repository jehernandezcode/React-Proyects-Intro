import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
  {
    userName: 'jhonn',
    name: 'jhonn Hernandez',
    isFollowing: true
  },
  {
    userName: 'pabloxaa',
    name: 'Pablo Davila',
    isFollowing: false
  },
  {
    userName: 'Sara331',
    name: 'Sara Gaviria',
    isFollowing: true
  },
  {
    userName: 'TMChein',
    name: 'Tomas',
    isFollowing: false
  }
]

export function App () {
  return (
    <section className='App'>
      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
  )
}
