import Link  from "next/link"
import { SignInButton, SignOutButton } from "./Buttons"
import AuthCheck from "./AuthCheck"


function NavMenu() {
  return (
    <div className="flex justify-between items-center bg-blue-400 text-white h-20">
      <Link href={'/'}>
       <div className="text-3xl m-1">Posptiecey</div>
      </Link>
      <ul className="flex mr-3">
        <li className="m-1">
          <Link href={'about'}>About</Link>
        </li>
        <li className="m-1">
          <Link href={'/blog'}>Blog</Link>
        </li>
        <li className="m-1">
          <Link href={'/users'}>Users</Link>
        </li>
        <li>
          <SignInButton/>
        </li>
        <li>
          <AuthCheck>
            <SignOutButton/>
          </AuthCheck>
        </li>
      </ul>
    </div>
  )
}

export default NavMenu