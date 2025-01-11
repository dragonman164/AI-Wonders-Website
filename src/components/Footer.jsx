import Section from "./Section";
import { socials } from "../constants";
import CourseModal from "./design/CourseModal";
import { useState } from "react";

const footerListItems = [
  {
    id : 1, 
    keyName : "Terms and Conditions",
    href : null,
    modal : (
      <>
       <div className="p-4 bg-n-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Terms and Conditions</h2>
      <p className="mb-4">
        Welcome to <span className="font-semibold">AI Wonders</span>! By accessing or
        using our services, you agree to be bound by the following terms and
        conditions. If you do not agree with these terms, please refrain from using
        our services.
      </p>

      <h3 className="text-xl font-semibold mb-2 mt-5">1. Definitions</h3>
      <ul className="list-disc ml-4">
        <li>
          <span className="font-semibold">Services</span> refers to the educational
          programs, both in-person and online, provided by <span className="font-semibold">AI Wonders</span>.
        </li>
        <li>
          <span className="font-semibold">Users</span> refers to students, parents,
          schools, or other entities using our services.
        </li>
        <li>
          <span className="font-semibold">Content</span> includes all materials,
          resources, and lessons delivered during the courses.
        </li>
      </ul>

      <h3 className="text-xl font-semibold mb-2 mt-5">2. User Obligations</h3>
      <ul className="list-disc ml-4">
        <li>You must provide accurate and updated information during registration.</li>
        <li>
          Users are responsible for maintaining the confidentiality of login
          credentials.
        </li>
        <li>
          Students and parents must ensure timely payments and adherence to
          schedules.
        </li>
      </ul>

      <h3 className="text-xl font-semibold mb-2 mt-5">3. Intellectual Property</h3>
      <p className="mb-4">
        All course materials, including videos, presentations, and other content, are
        the intellectual property of <span className="font-semibold">AI Wonders</span>{' '}
        and may not be copied, shared, or distributed without our written
        permission.
      </p>

      <h3 className="text-xl font-semibold mb-2 mt-5">4. Payment Terms</h3>
      <ul className="list-disc ml-4">
        <li>Fees must be paid as per the agreed-upon schedule.</li>
        <li>
          Any delay in payment may result in suspension of access to services.
        </li>
        <li>
          Refunds are only applicable under specific conditions outlined in our
          Refund Policy.
        </li>
      </ul>

      <h3 className="text-xl font-semibold mb-2 mt-5">5. Cancellation and Refund Policy</h3>
      <ul className="list-disc ml-4">
        <li>
          Cancellations must be requested at least [insert days] before the program
          starts.
        </li>
        <li>
          Refunds are subject to a [percentage] deduction based on administrative
          charges.
        </li>
      </ul>

      <h3 className="text-xl font-semibold mb-2 mt-5">6. Code of Conduct</h3>
      <ul className="list-disc ml-4">
        <li>
          Users must maintain decorum during in-person or online classes.
        </li>
        <li>
          Abusive or disruptive behavior will not be tolerated and may result in
          suspension.
        </li>
      </ul>

      <h3 className="text-xl font-semibold mb-2 mt-5">7. Limitation of Liability</h3>
      <p className="mb-4">
        <span className="font-semibold">AI Wonders</span> is not liable for any
        technical issues, misuse of services, or indirect damages resulting from
        the use of our platform or services.
      </p>

      <h3 className="text-xl font-semibold mb-2 mt-5">8. Modifications to Terms</h3>
      <p className="mb-4">
        We reserve the right to update these terms at any time. Continued use of
        services implies acceptance of updated terms.
      </p>
    </div>
      </>
    )

    
  },


  {
    id : 2, 
    keyName : "Privacy Policy",
    href : null, 
    modal : (
      <div className="p-4 bg-n-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
      <p className="mb-4">
        At <span className="font-semibold">AI Wonders</span>, we value your privacy
        and are committed to protecting your personal information.
      </p>

      <h3 className="text-xl font-semibold mb-2 mt-5">1. Information We Collect</h3>
      <ul className="list-disc ml-4">
        <li>
          <span className="font-semibold">Personal Information:</span> Name, email,
          phone number, address, and payment details.
        </li>
        <li>
          <span className="font-semibold">Usage Data:</span> Interaction with our
          platform, including login times and preferences.
        </li>
      </ul>

      <h3 className="text-xl font-semibold mb-2 mt-5">2. How We Use Your Information</h3>
      <ul className="list-disc ml-4">
        <li>To deliver and improve our services.</li>
        <li>
          To send updates, invoices, and important notifications.
        </li>
        <li>
          For analytics and internal research to enhance the learning experience.
        </li>
      </ul>

      <h3 className="text-xl font-semibold mb-2 mt-5">3. Data Sharing and Security</h3>
      <ul className="list-disc ml-4">
        <li>
          We do not share your personal information with third parties unless
          required by law or for payment processing.
        </li>
        <li>All data is encrypted and stored securely on our servers.</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2 mt-5">4. Cookies Policy</h3>
      <p className="mb-4">
        Our website uses cookies to enhance user experience. By using our website,
        you consent to the use of cookies.
      </p>

      <h3 className="text-xl font-semibold mb-2 mt-5">5. User Rights</h3>
      <ul className="list-disc ml-4">
        <li>
          You can access, modify, or request the deletion of your data by contacting
          us.
        </li>
        <li>Opt-out options are available for marketing emails.</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2 mt-5">6. Third-Party Links</h3>
      <p className="mb-4">
        Our platform may contain links to third-party websites. We are not
        responsible for their privacy practices or content.
      </p>

      <h3 className="text-xl font-semibold mb-2 mt-5">7. Updates to Policy</h3>
      <p className="mb-4">
        This policy may be updated periodically. Changes will be communicated via
        email or a prominent notice on our website.
      </p>
    </div>
    ) 

  },
  {
    id : 3, 
    keyName : "Company Registration",
    href : "https://www.google.com",
    modal : null, 
  },

  {
    id : 4, 
    keyName : "Download Brochure",
    href : "https://www.google.com",
    modal : null, 
  }
]

const Footer = () => {

  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  return (
    <Section id="#footer" crosses className="!px-0 !py-10">
      {showModal && <CourseModal modalContent={modalContent} close={setShowModal}/>}
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          © {new Date().getFullYear()}. All rights reserved.
        </p>

        <div className="h-48">
        <ul className="gap-5 mb-10 flex-wrap">
         {
          footerListItems.map((item)=>(
            <li className="mt-2 text-md" key={item.id}>
              {item.href && <a href={item.href}>{item.keyName}</a>}
              {item.modal && <a href="#footer" onClick={()=>{
                setModalContent(item.modal)
                setShowModal(true)
              }}>{item.keyName}</a>}
              </li>
          ))
         }
        </ul>
        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            >
              <img src={item.iconUrl} width={16} height={16} alt={item.title} />
            </a>
          ))}
        </ul>
        </div>
      </div>
    </Section>
  );
};

export default Footer;
