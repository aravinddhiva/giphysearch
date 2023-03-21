import Link from 'next/link'

export default function Footer () {
    return(
        <>
            <div className="footer">
                <p><Link href="/">home</Link></p>
                <p><Link href="/about">about</Link></p>
            </div>
        </>
    )
}