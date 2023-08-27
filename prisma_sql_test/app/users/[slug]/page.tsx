export const revalidate = 1200;

interface User {
  id: number;
  username: string;
  email: string;
  age: number;
  is_active: boolean;
  description: string;
}


export async function generateStaticParams() {
  const users: User[] = await fetch('http:localhost:3000/api/content').then(
    (res) => res.json()
  )
  return users.map((user)=> ({
    slug: user.id.toString()
  }))
}

interface Props {
  params: { slug: string };
}

export default async function BlogPostPage({ params } :any) {
  // deduped
  const users: User[] = await fetch('http://localhost:3000/api/content').then(
    (res) => res.json()
  );
  const user = users.find((user) => user.id.toString() === params.slug)!;

  return (
    <div>
      <h1>{user.username}</h1>
      <p>{user.description}</p>
    </div>
  );
}