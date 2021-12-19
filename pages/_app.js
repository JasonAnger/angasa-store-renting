import '../styles/global.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ServiceDetails from '../components/ServiceDetails'
import Pricing from '../components/Pricing'
// import Contact from '../components/Contact'
import Landing from '../components/Landing'
import Tools from '../components/Tools'
import Portfolio from '../components/Portfolio'
import FAQ from '../components/FAQ'
import { useState, useEffect } from 'react'

function MyApp() {
    const [faqs, setFaqs] = useState([]);

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
      fetch("/api")
      .then(res => res.json())
      .then(
        (result) => {
          setFaqs(result.faqs)
        },
        (error) => {
            console.log(error)
        }
      )
    });

    return (
        <div>
            <Navbar />
            <Landing />
            <Tools />
            <Portfolio />
            <ServiceDetails />
            <Pricing />
            <FAQ faqs={faqs} />
            {/* <Contact /> */}
            <Footer />
        </div>
    )
}

export default MyApp
