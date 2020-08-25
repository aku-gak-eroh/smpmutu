import Head from 'next/head'
import Menu from '../components/menu';
export default function Home() {
return (
<div>
<Head>
<title>Home</title>
</Head>
<Menu />
<div>
<center>
<h1>Selamat Datang Di SMP MUTU</h1>
<p>SMP MUTU merupakan singkatan dari SMP Muhammadiyah 7 Sempu, yang berada di kecamatan sempu banyuwangi.
    menjadi smp vavorit karena perkembangan tahun ke tahun sangat pesat dibandingkan smp yang ada di Sempu,
    maka tidak heran jika banyak siswa yang masuk ke smp mutu.
</p>
</center>
</div>
</div>
);
}
