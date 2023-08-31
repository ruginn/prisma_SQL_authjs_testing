import Link from 'next/link'

interface Props {
    id: string;
    name: string | null;
    age: number | null;
    image: string | null
}

const UsersCard = ({id, name, age, image} : Props) => {
  return (
    <Link href={`/users/${id}`}>
        <div>
            <img src= {image ?? ''} alt="" className='w-20 h-20 rounded-full'/>
            <h3>{name}</h3>
        </div>
    </Link>
  )
}

export default UsersCard