import Head from'next/head'
import styles from '../../styles/Hello.module.css'
import Link from 'next/link'

export const getStaticProps = async() =>{

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return{
        props : {tests: data}
    }
}

const Hello = ({tests}) => {
    return(
        <>
        <Head>
            <title>Test List | Contact </title>
            <meta name ="keywords" content="test" />
        </Head>
        <div>
            <h1>Hello Welcome!</h1>
            {tests.map(test =>(
                <Link href={'/tests/' + test.id} key={test.id}>
                    <a className={styles.single}>
                        <h3>{test.name}</h3>
                    </a>
                </Link>
            ))}            
        </div>
        </>
    );
}

export default Hello;