import { getServerSession } from "next-auth";
import {redirect} from 'next/navigation'

export default async function Home() {
  const session = await getServerSession()

  if (!session) {
    redirect('/api/auth/signin')
  }

  return (
    <div className="text-gray-600 text-2xl">
      testing
    </div>
  )
}
