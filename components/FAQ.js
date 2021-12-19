import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

function FAQ(props) {
    let faq = props.faqs
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
            <h1 className="text-4xl font-bold">FAQs</h1>
            <div className="faq-list block">{
                faq.map((e, index) => <div onClick={() => onClickFaq("faq-item-"+index)} className="faq-item" id={"faq-item-"+index}>
                    <h1 className="">
                        <span className="mr-4">{e.question}</span>
                        <FontAwesomeIcon icon={faChevronDown} />
                    </h1>
                    <p className="text-lg font-semibold text-gray-500" dangerouslySetInnerHTML={{__html: e.answer}} ></p>
                </div>)
            }</div>
        </div>
  </section>
}

export default FAQ