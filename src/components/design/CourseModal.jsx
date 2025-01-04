
import Button from "../Button";
import Carousel from "../Carousel";
import { WebDev } from "../../constants/courses";
const CourseModal = ({close}) => {

    return (
        <>
        <div className="relative z-10 " aria-labelledby="modal-title" role="dialog" aria-modal="true">
 
  <div className="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>

  <div className="fixed inset-0 z-10 w-screen overflow-y-scroll">
    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
   
      <div className="relative transform overflow-hidden rounded-lg mt-20 bg-n-8 text-left shadow-xl transition-all h-full">
        <div className="bg-n-8 px-4 pb-4 pt-5 sm:p-6 sm:pb-4 min-w-[50.75rem] min-h-[29.75rem] w-full h-full">
          <div className="sm:flex sm:items-start">
            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
            <h3 className="h3 font-bold ">Web Development</h3>

            <Carousel content={WebDev}/>
            </div>
          </div>
        </div>
        <div className="bg-n-8 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
         <Button
         onClick={()=>{
            close(false)
         }}>Close</Button>
        </div>
      </div>
    </div>
  </div>
</div>
        </>
    )
}


export default CourseModal;