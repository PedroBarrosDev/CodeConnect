import { CardPost } from "@/components/CardPost";
import logger from "@/logger";
import styles from './page.module.css'
import Link from "next/link";


//const post = {
//  "id": 1,
//  "cover": "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts/introducao-ao-react.png",
//  "title": "Introdução ao React",
//  "slug": "introducao-ao-react",
//  "body": "Neste post, vamos explorar os conceitos básicos do React, uma biblioteca JavaScript para construir interfaces de usuário. Vamos cobrir componentes, JSX e estados.",
//  "markdown": "```javascript\nfunction HelloComponent() {\n  return <h1>Hello, world!</h1>;\n}\n```",
//  "author": {
//      "id": 101,
//      "name": "Ana Beatriz",
//      "username": "anabeatriz_dev",
//      "avatar": "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/authors/anabeatriz_dev.png"
//  }
//}

async function getAllPosts (page) {
  const response  = await fetch(`http://localhost:3042/posts?_page=${page}&_per_page=6`)
  if (!response.ok) {
    logger.error('Ops, alguma coisa deu errado')
    return []
  }
  logger.info('Posts obtidos com sucesso')
  return response.json()
}

export default async function Home({ searchParams }) {
  const currentPage = searchParams?.page || 1
  const { data: posts, prev, next } = await getAllPosts(currentPage)
  return (
      <main className={styles.grid}>
        {posts.map(post => <CardPost key={post.id} post={post} />)}
        <div className={styles.links}> 
        {prev && <Link href={`/?page=${prev}`}>Página anterior</Link>}
        {next && <Link href={`/?page=${next}`}>Próxima página</Link>}
        </div> 
      </main>
  );
}
