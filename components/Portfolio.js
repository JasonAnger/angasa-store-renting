import { useEffect, useState } from 'react'
function Portfolio() {
    const [activeNumber, setActiveNumber] = useState(0)
    
    useEffect(() => {
        document.querySelector(".portfolio-item.active").className="portfolio-item"
        document.querySelector("#portfolio-item-"+activeNumber).className="portfolio-item active"
        document.querySelector(".macbook.flex.overflow-x-scroll").scrollTo({
            top: 0,
            left: document.querySelector(".macbook.flex.overflow-x-scroll").scrollWidth / 3 * activeNumber,
            behavior: 'smooth'
        })
    })

    function clickNext() {
        if(activeNumber<2) setActiveNumber(activeNumber+1)
        else setActiveNumber(0)
    }

    function clickPrevious() {
        if(activeNumber>0) setActiveNumber(activeNumber-1)
        else setActiveNumber(2)
    }

    return (<section id="portfolio" className="flex relative py-14 bg-white">
        {/* <div class="absolute hidden lg:flex items-center z-0">
            <span data-aos="fade-right" class="aos-init aos-animate">
                <img src="https://www.webbycentral.com/assets/images/cone-left.png" style={{height: "125px"}} alt="cone" title="cone" /> </span>
            <em class="circle hidden lg:inline-block text-indent aos-init aos-animate" data-aos="flip-right"></em>
        </div> */}
        <div className="container mx-auto z-10">
            <div className="flex justify-between w-full flex-col lg:flex-row">
                <div className="w-full lg:w-1/2 pr-16 flex flex-col justify-center">
                    <h2 className="section-heading">Our <br/>Results</h2>
                    <p>
                        With a client list 3200-deep, we’ve seen it all. From startups to enterprise clients, the healthcare industry to the food and beverage industry, and everything in between. Our experience and expertise in website creation, web design, branding, and strategic marketing knows no bounds. Some of our better-known clients include:
                    </p>
                    <div className='flex'><button onClick={clickPrevious}>Previous</button> <button onClick={clickNext}>Next</button></div>
                </div>
                <div className="w-full lg:w-1/2 lg:max-w-1/2 flex flex-wrap justify-center items-center p-5 overflow-visible">
                    <div className="macbook flex overflow-x-scroll overflow-y-hidden">
                        <div className="portfolio-item active" id="portfolio-item-0">
                            <div className="macbook-image">
                                <img className="mx-auto" src="/images/IMG_1.png" />
                            </div>
                        </div>
                        <div className="portfolio-item" id="portfolio-item-1">
                            <div className="macbook-image">
                                <img className="mx-auto" src="/images/IMG_2.png" />
                            </div>
                        </div>
                        <div className="portfolio-item" id="portfolio-item-2">
                            <div className="macbook-image">
                                <img className="mx-auto" src="/images/IMG_3.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>)
}

export default Portfolio
