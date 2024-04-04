import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div className="mt-10 flex flex-col justify-center border-t-[1px] text-center align-middle transition duration-300 dark:border-none dark:bg-brown md:mt-0">
      <div className="mx-auto mt-3 flex w-32 justify-between">
        <FaXTwitter className="h-6 w-6 cursor-pointer fill-blue-600 hover:fill-blue-700 dark:fill-dPurple dark:hover:fill-dPurpleH" />
        <FaFacebook className="h-6 w-6 cursor-pointer fill-blue-600 hover:fill-blue-700 dark:fill-dPurple dark:hover:fill-dPurpleH" />
        <FaInstagram className="h-6 w-6 cursor-pointer fill-blue-600 hover:fill-blue-700 dark:fill-dPurple dark:hover:fill-dPurpleH" />
      </div>
      <div className="mx-auto mb-3 mt-3 flex w-36 flex-row justify-between dark:text-dWhite">
        <p className="cursor-pointer text-sm font-medium text-black duration-300 hover:text-blue-500 dark:text-dWhite dark:hover:text-dPurple">
          Privacy
        </p>
        <p className="cursor-pointer text-sm font-medium text-black duration-300 hover:text-blue-500 dark:text-dWhite dark:hover:text-dPurple">
          Terms of Use
        </p>
      </div>
    </div>
  );
}

export default Footer;
