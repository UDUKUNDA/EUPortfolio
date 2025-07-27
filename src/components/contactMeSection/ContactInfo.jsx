import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="udukundaelysee@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+250780704718" Image={FiPhone} />
      <SingleInfo text="Kigali, Rwanda" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
