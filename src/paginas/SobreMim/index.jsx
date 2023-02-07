import styles from './SobreMim.module.css'
import PostModelo from 'Componentes/PostModelo'
import fotoCapa from 'assets/sobre_mim_capa.png'

export default function SobreMim() {
  return (
    <main>
      <PostModelo
        fotoCapa={fotoCapa}
        titulo="Sobre mim"
      >
        <h3 className={styles.subtitulo}>
          Olá, eu sou o Bruno!
        </h3>

        <img src="http://github.com/brunobahy.png" alt="Foto do Bruno Sorrindo" className={styles.fotoSobreMim} />
        <p className={styles.paragrafo}>
          Oi, tudo bem? Eu sou Bruno e estudo para Front-end na <a className={styles.link} href='https://www.alura.com.br/'>Alura</a>
        </p>
        <p className={styles.paragrafo}>
        Minha carreira na área de tecnologia começou no ensino médio onde pagava meus estudos trabalhando no instituto em que estudava
        </p>
        <p className={styles.paragrafo}>
        Assim que sai do ensino médio (2019) comecei a fazer faculdade de Engenharia de computação, porém ficou difícil pagar e tive que trancar o curso em 2022.
        </p>
        <p className={styles.paragrafo}>
          Com isso tive minha experiência em programação, mas na linguagem python, porém surgiu a vontade de aprende desenvolvimento web, voltado para Front-end.
        </p>
        <p className={styles.paragrafo}>
          E foi assim que começei a estuda na <a className={styles.link} href='https://www.alura.com.br/'>Alura</a>, onde aprendi tudo que utilizei para fazer este site que esta vendo.
        </p>
        <p className={styles.paragrafo}>
          Aqui você pode ver meus projetos que inclui na minha <a className={styles.link} href='https://cursos.alura.com.br/vitrinedev/bruno-bahy-oliveira'>vitrineDev, só clicar aqui</a>, também tenho outros projetos no meu <a className={styles.link} href='https://github.com/Brunobahy'>GitHub</a>, também pode ver o meu <a className={styles.link} href='https://portifolio-bruno-bahy.vercel.app/'>portfólio</a>
        </p>
        <p className={styles.paragrafo}>
          Espero que tenha gostado 😘
        </p>
      </PostModelo>

    </main>
  )
}
