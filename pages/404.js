import Link from "next/link";

export default function Custom404() {
    return (
        <div className="page">
            <h2>Táto stránka nebola nájdená</h2>
            <p style={{textAlign:'center'}}>
                <Link href={'/'}>Naspäť na úvodnú stránku.</Link>
            </p>
        </div>
    )
}