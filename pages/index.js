import 'tailwindcss/tailwind.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ServiceDetails from '../components/ServiceDetails'

function MyApp() {
    return (
        <div>
            <Navbar />
            <ServiceDetails />
            <Footer />
        </div>
    )
}

export default MyApp
