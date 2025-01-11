
import Button from "../Button";
import { useEffect, useState } from "react";
const CourseModal = ({close, modalContent}) => {

  console.log(modalContent)
  let [animateClass, setAnimateClass] = useState('-translate-y-52')
  
  useEffect(()=>{
    setTimeout(() => {
      // Code to execute after the timeout
      setAnimateClass('translate-y-0 duration-500')
    }, 100); // 2 seconds delay

  })

    return (
        <>
     <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
  <div className="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>

  <div className="fixed inset-0 z-10 w-full overflow-y-scroll">
    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
      <div
        className={`${animateClass} relative transform overflow-hidden rounded-lg mt-20 bg-n-8 text-left shadow-xl transition-all h-full 
                   sm:max-w-xl md:max-w-2xl lg:max-w-7xl 
                   sm:min-h-full md:min-h-screen`} 
      >
        <div className="bg-n-8 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
              {modalContent}
              {/* <h3 className="h3 font-bold">{courseName}</h3>

              <Carousel content={courseContent || []} /> */}
            </div>
          </div>
        </div>
        <div className="bg-n-8 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <Button onClick={() => close(false)}>Close</Button>
        </div>
      </div>
    </div>
  </div>
</div>  

        </>
    )
}


export default CourseModal;