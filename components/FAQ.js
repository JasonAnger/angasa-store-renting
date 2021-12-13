import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

let faq = [
    ["Why should I choose Webby Central for my digital growth?", "Webby Central is a leading digital solutions agency that has been delivering digital growth to businesses globally for so long. As an experienced and reliable company, Webby is specialized in delving deeper, understanding your business needs, and growing your client base by adopting unique strategies."],
    ["Why should I choose Webby Central for my digital growth?", "Webby Central is a leading digital solutions agency that has been delivering digital growth to businesses globally for so long. As an experienced and reliable company, Webby is specialized in delving deeper, understanding your business needs, and growing your client base by adopting unique strategies."],
    ["Why should I choose Webby Central for my digital growth?", "Webby Central is a leading digital solutions agency that has been delivering digital growth to businesses globally for so long. As an experienced and reliable company, Webby is specialized in delving deeper, understanding your business needs, and growing your client base by adopting unique strategies."],
    ["Why should I choose Webby Central for my digital growth?", "Webby Central is a leading digital solutions agency that has been delivering digital growth to businesses globally for so long. As an experienced and reliable company, Webby is specialized in delving deeper, understanding your business needs, and growing your client base by adopting unique strategies."],
    ["Why should I choose Webby Central for my digital growth?", "Webby Central is a leading digital solutions agency that has been delivering digital growth to businesses globally for so long. As an experienced and reliable company, Webby is specialized in delving deeper, understanding your business needs, and growing your client base by adopting unique strategies."] 
]

function FAQ() {
    let onClickFaq = (id) => {
        let clickedItem = document.querySelector("#"+id)
        if(document.querySelector(".faq-item.active")!==null) {
            if(clickedItem.id == document.querySelector(".faq-item.active").id) {
                clickedItem.className="faq-item"
                return
            }
            let activeSelector = document.querySelector(".faq-item.active")
            activeSelector.className="faq-item"
            // setTimeout( () => activeSelector.querySelector("p").style="height: 0px;", 200)
            setTimeout( () => clickedItem.className="faq-item active", 700)
        } else {
            // clickedItem.querySelector("p").style=`height: 100px;`
            clickedItem.className="faq-item active"
        }
    }
    return <section id="faq" className="flex bg-gray-50 py-16">
        <div className="container mx-auto">
            <h1 className="text-4xl font-bold">FAQ</h1>
            <div className="faq-list block">{
                faq.map((e, index) => <div onClick={() => onClickFaq("faq-item-"+index)} className="faq-item" id={"faq-item-"+index}>
                    <h1 className="">
                        <span className="mr-4">{e[0]}</span>
                        <FontAwesomeIcon icon={faChevronDown} />
                    </h1>
                    <p className="text-lg font-semibold text-gray-500">{e[1]}</p>
                </div>)
            }</div>
        </div>
  </section>
}

export default FAQ