import '../styles/global.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ServiceDetails from '../components/ServiceDetails'
import ServiceList from '../components/ServiceList'
// import Contact from '../components/Contact'
import Landing from '../components/Landing'
import Tools from '../components/Tools'
import Portfolio from '../components/Portfolio'
import FAQ from '../components/FAQ'

function MyApp() {
    return (
        <div>
            <Navbar />
            <Landing />
            <Tools />
            <Portfolio />
            <ServiceList />
            <ServiceDetails />
            {/* <Contact /> */}
            <FAQ />
            <Footer />
        </div>
    )
}

export default MyApp
