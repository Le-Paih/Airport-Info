import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div className="dark:bg-brown flex flex-col justify-center border-t-[1px] text-center align-middle transition duration-300 dark:border-none">
      <div className="mx-auto mt-3 flex w-32 justify-between">
        <FaXTwitter className="dark:fill-dPurple dark:hover:fill-dPurpleH h-6 w-6 cursor-pointer fill-blue-600 hover:fill-blue-700" />
        <FaFacebook className="dark:fill-dPurple dark:hover:fill-dPurpleH h-6 w-6 cursor-pointer fill-blue-600 hover:fill-blue-700" />
        <FaInstagram className="dark:fill-dPurple dark:hover:fill-dPurpleH h-6 w-6 cursor-pointer fill-blue-600 hover:fill-blue-700" />
      </div>
      <div className="dark:text-dWhite mx-auto mb-3 mt-3 flex w-36 flex-row justify-between">
        <p className="dark:hover:text-dPurple dark:text-dWhite cursor-pointer text-sm font-medium text-black duration-300 hover:text-blue-500">
          Privacy
        </p>
        <p className="dark:hover:text-dPurple dark:text-dWhite cursor-pointer text-sm font-medium text-black duration-300 hover:text-blue-500">
          Terms of Use
        </p>
      </div>
    </div>
  );
}

export default Footer;
