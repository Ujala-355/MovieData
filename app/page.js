/*import Image from 'next/image'
import styles from './page.module.css'*/
import Header from "./header"
import Movie_row from "./movie_row"
import Footer from "./footer"

export default function Home() {
  return (
      <>
      <Header />
      <Movie_row/>
      <Footer/>
    </> 
  )
}
