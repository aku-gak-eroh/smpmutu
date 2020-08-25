import React, { Component } from 'react'
import Menu from '../components/menu';
import Header from '../components/header';

export default class extends Component {
        constructor(props) {
            super(props);
            this.handleChange = this.handleChange.bind(this);
            this.state = {
                    nama:'',
                    nomorhp:'',
                    email:'',
                    alamat:'',
                    tujuan:'',
            }
        }
        

        handleChange(evt) {
            this.setState({
                    [evt.target.name]: evt.target.value,
                });
        }
        render() {
            return (
                    <div>
                        <Header smpmutu="Form Pendaftaran"/>
                        <Menu/>
                        <div>
                        <h1>PENERIMAAN PESERTA DIDIK BARU 2020-2021</h1>
<p>Selamat Datang di Formulir Pendaftaran Secara Online Calon Peserta Didik Baru SMP Muhammadiyah 7 Sempu Tahun Pelajaran 2020 - 2021.

Kabar gembira bagi Pendaftar Siswa Baru di SMP MUTU Tahun Pelajaran 2020 - 2021 mendapatkan Gratis Kain Seragam 3 Stel dan 1 Stel Kostum Olah Raga.

Setelah Mengisi Formulir Pendaftaran ini harap konfirmasi melalui SMS/WhatsApp di nomor yang tercantum dibawah deskripsi ini.
Atau bisa datang kesekolah membawa berkas pendaftaran, antara lain :
<br></br>
1. FC Akta Kelahiran
<br></br>
2. FC Kartu Keluarga
<br></br>
3. Pas Photo 3 x 4 Sebanyak 3 Lembar
<br></br>
4. FC Ijazah SD/MI ( Menyusul )
<br></br>
5. FC SHUN SD/MI ( Menyusul )
<br></br>
Atau bisa konfirmasi melalui SMS/WA dan kami akan datang kerumah anda.</p>

                            <h3>Silahkan isi Data Diri Anda</h3>
                            <label>Nama:</label><input type="text"
                            name="nama" value={this.state.nama} onChange={this.handleChange}/><br/>
                            <label>Nomorhp:</label><input type="text"
                            name="nomor" value={this.state.nomor} onChange={this.handleChange}/><br/>
                            <label>Email:</label><input type="text"
                            name="email" value={this.state.email} onChange={this.handleChange}/><br/>
                        </div>
    <div>
            <h5>Data Anda:</h5>
<               label>Nama: 
                {this.state.nama}</label><br/>
                <label>Nomor:
                {this.state.nomor}</label><br/>
                <label>Email:
                {this.state.email}</label><br/>

            </div>
        </div>
        );
    }
}