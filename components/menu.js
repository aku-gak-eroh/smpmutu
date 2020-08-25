import Link from 'next/link';
export default function Menu() {
return (
<div>
        <ul>
            <li>
                <Link href="/"><a>Home</a></Link>
            </li>
            
            <li>
                <Link href="/berita"><a>Berita</a></Link>
            </li>
            
            <li>
                <Link href="/exkul"><a>Exkul</a></Link>
            </li>
            <li>
                <Link href="/daftar"><a>Daftar</a></Link>
            </li>
            <li>
                <Link href="/kontak"><a>Kontak</a></Link>
            </li>
            <li>
                <Link href="/hubungi"><a>Hubungi</a></Link>
            </li>
        </ul>
</div>
);
}