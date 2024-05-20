import {
    Footer,
    FooterCopyright,
    FooterDivider,
    FooterIcon
  } from "flowbite-react";
  import { BsFacebook, BsWhatsapp, BsInstagram } from "react-icons/bs";
  
const Footerr = () => {
  return (
    <Footer container>
      <div className="w-full" id="redes">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">

        </div>
        <FooterDivider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FooterCopyright href="#" by="AguaGRAD" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FooterIcon href="https://www.facebook.com/profile.php?id=100065099168972" icon={BsFacebook} />
            <FooterIcon href="https://www.instagram.com/aguamineralgrad/" icon={BsInstagram} />
            <FooterIcon href="https://api.whatsapp.com/send?phone=595975655014" icon={BsWhatsapp} />
          </div>
        </div>
      </div>
    </Footer>
  )
}

export default Footerr