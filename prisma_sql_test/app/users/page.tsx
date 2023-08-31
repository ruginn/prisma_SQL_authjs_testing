import {prisma} from '@/lib/prisma'
import UsersCard from '../components/UsersCard'

async function Users() {
  const users = await prisma.user.findMany()
    return (
    <div>
        {users.map((user) => {
            return <UsersCard key={user.id} {...user}/>
        })}
    </div>
  )
}

export default Users