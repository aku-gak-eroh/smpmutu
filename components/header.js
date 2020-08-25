import Head from 'next/head'
export default function Header(props) {
    return (
        <div>
            <Head>
                <title>{props.smpmutu}</title>
            </Head>
            <h1>{props.smpmutu}</h1>
        </div>
    );
}