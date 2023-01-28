import Header from '../components/Header/Header'
import HomeLayout from '../layout/HomeLayout'
import '../styles/main.css'

export default function App({ Component, pageProps }) {
  return (
    <HomeLayout>
      <Component {...pageProps} />
    </HomeLayout>
  )
}
