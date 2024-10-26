import Link from "next/link";

export default function Navbar()
{
    return(
        <div style={{backgroundColor:"",color:"white"}}>
        <Link href="/">Home</Link>&nbsp;&nbsp; | &nbsp;&nbsp;
        <Link href="/country">Country</Link>
        </div>
    )
}