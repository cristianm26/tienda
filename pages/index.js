import Head from 'next/head'
import styles from '../styles/styles.module.css'
export async function getStaticProps(context){
  const res = await fetch("http://localhost:3000/api/productos");
  const data = await res.json();
  return {
    props: {productos: data}
  }

}

export default function Home({productos}) {
  console.log(productos)
  return (
    < >
      <Head>
        <title>ShoeStore</title>
      </Head>
      <div className={styles.root}>
      {
        productos.map(({nombre, descripcion, mediaUrl, precio,_id})=> {
          return (
            <div className={styles.card} key={_id}>
                {nombre}
               
            </div>
          )
        })
      }
      </div>
     
    </>
  )
}
