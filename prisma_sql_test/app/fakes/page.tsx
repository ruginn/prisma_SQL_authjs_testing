import Link from "next/link"


interface User {
  id: number;
  username: string;
  email: string;
  age: number;
  is_active: boolean;
  description: string;
}

const blog = async () => {
  const users = await fetch('http://localhost:3000/api/content').then(
    (res) => res.json()
  )
  

  return (
    <>
      {users.map((user: User) => {
        return (
          <Link href={`fakes/${user.id}`} className="flex items-center w-60 border-2 border-black m-5">
            <div className="m-2 w-10 h-10 bg-blue-500 flex items-center justify-center text-white rounded-full">{user.username[0]}</div>
            <p>{user.username}</p>
          </Link>
        )
      })}
    </>
  )
}

export default blog
