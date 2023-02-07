import './Post.css';
import React from 'react'
import { Route, Routes, useParams } from 'react-router-dom'
import posts from "json/posts.json"
import PostModelo from 'Componentes/PostModelo';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import NaoEncontrada from 'paginas/NaoEncontrada';
import PaginaPadrao from 'Componentes/PaginaPadrao';
import PostCard from 'Componentes/PostCard';
import styles from './Post.module.css'


export default function Post() {
    const parametros = useParams();

    const post = posts.find(post => Number(parametros.id) === post.id);

    if (!post) {
        return <NaoEncontrada />
    }

    const postsRecomendados = posts
        .filter(post => post.id !== Number(parametros.id))
        .sort((a, b) => b.id - a.id)
        .slice(0, 4)

    console.log(postsRecomendados)


    return (
        <Routes>
            <Route path="*" element={<PaginaPadrao />}>
                <Route index element={
                    <>
                        <PostModelo
                            fotoCapa={`/assets/postagens/${post.id}/capa.png`}
                            titulo={post.titulo}
                        >
                            <div className='post-markdown-container'>
                                <ReactMarkdown>
                                    {post.texto}
                                </ReactMarkdown>
                            </div>
                        </PostModelo>
                        <h2 className={styles.titulo}>Outros posts que você pode gostar:</h2>
                        <ul className={styles.lista}>
                            {
                                postsRecomendados.map(post => <li> <PostCard post={post} /> </li> )
                            }
                        </ul>
                    </>
                } />
            </Route>

        </Routes>
    )
}
