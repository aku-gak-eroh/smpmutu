import Head from 'next/head'
import Menu from '../components/menu';
export default function Kontak() {
    return (
        <div>
            <Head>
                <title>Kontak</title>
            </Head>
            <Menu />
            <div>
            <center>
            <h1>Detai Kontak</h1>
            <p>Jl. Kalisetail 205 Sempu
                <br></br>
Kecamatan Sempu, Kabupaten Banyuwangi
<br></br>
Telp: (0333) 846-927
<br></br>
Email: smpmuhtujuhsempubanyuwangi@ymail.com
<br></br>
Jam Operasional: Senin - Jum'at: 9:00 s/d 15:00</p>
            </center>
            </div>
        </div>
    );
}