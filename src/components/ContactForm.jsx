import Section from "./Section";
import Heading from "./Heading";
import Button from "./Button";

// import Button from "./Button";

const ContactForm = () => {

    let subject = "";
    let text = "";

    return (
        <Section className="overflow-hidden" id="contact-us">
    <div className="container md:pb-10">
      <Heading tag="Reach out to us" title="Contact Us" />

      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
      <form 
      onSubmit={(e)=>{
        e.preventDefault();
        if(text !== "" && subject !== ""){
            let gmailURL = `https://mail.google.com/mail/u/0/?fs=1&to=admin@aiwonders.com&su=${subject}&body=${text}&tf=cm`
            window.open(gmailURL)

        }

      }}
     >
   
    <div className="mb-10 ">
        <label className="h6 mb-2">Subject</label>
        <input onChange={(e)=>subject = e.target.value}type="text" id="text" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Subject" required />
    </div> 

    <div className="mb-6">
    <label  className="h6 mb-2">Your message</label>
    <textarea onChange={(e)=>text = e.target.value} className=" min-h-[8.75rem] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>

    </div>
    
        <Button >Submit </Button>
    </form>

    <div className="ml-10">
    <Heading className="h5" tag="You can also reach us " title="through following" />
    <p className="h4 font-bold">Mail Ids : &nbsp; <a className="h5 font-light underline hover:bg-color-1" href="mailto:admin@aiwonders.com">admin@aiwonders.com</a> 
    &nbsp; and  <a className="h5 font-light underline hover:bg-color-1" href="mailto:csawarn@gmail.com">csawarn@gmail.com</a>
    </p>
    <p className="h4 font-bold mt-7">Phone No : &nbsp;
    <span className="h5 font-light underline" >+91 1234567890</span>
    </p>

      </div>
   

      </div>



    </div>
  </Section>
    )
}

export default ContactForm;