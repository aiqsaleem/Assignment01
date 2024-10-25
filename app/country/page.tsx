import Link from "next/link";

export default function Country()
{
    return(
        <div>
            <h1>Countries :</h1>
            <ul>
                <li>
                    <Link href="/country/pakistan">Pakistan</Link>
                </li>
                <li>
                    <Link href="/country/japan">Japan</Link>
                </li>
                <li>
                    <Link href="/country/china">China</Link>
                </li>
                <li>
                    <Link href="/country/canada">Canada</Link>
                </li>
                <li>
                    <Link href="/country/usa">USA</Link>
                </li>
            </ul>
        </div>
    )
}