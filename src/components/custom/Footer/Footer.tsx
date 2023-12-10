import { Label } from "@/components/ui/label";
import { Facebook, Instagram } from "lucide-react";
import Image from "next/image";
function Footer() {
  return (
    <>
   
      <div className="flex items-center gap-2">
      <Label className="text-primary text-lg mr-10">Social contacts</Label>
        {/* <Image src="/facebook-logo.png" width={20} height={20} alt="facebook" /> */}
        <Facebook/>
        <Label>Facebook/Togdheergym.com</Label>
      </div>
      <div className="flex items-center gap-2">
        {/* <Image src="/instagram.jpg" width={20} height={20} alt="instagram" /> */}
        <Instagram/>
        <Label>Instagram/Togdheergym.com</Label>
      </div>
      <div className="flex items-center gap-2">
        <Image src="/whatsapp.jpg" width={20} height={20} alt="whatsapp" />
        <Label>Whatsapp/Togdheergym.com</Label>
      </div>
    </>
  );
}

export default Footer;
