import Image from "next/image";
import linkedinLogo from "@/public/images/linkedin-icon.svg"

export const LinkedinButton = () => (<div className=" flex flex-col sm:flex-row justify-center items-center gap-4 pt-8 cursor-pointer">
    <a
        href="https://www.linkedin.com/in/enzo-coratella-2843b9197"
        target="_blank"
        className="px-8 py-3 bg-gray-100 border border-gray-200 text-gray-900 rounded-lg font-medium hover:bg-gray-200 transition-colors inline-flex items-center justify-center gap-2 dark:bg-black dark:border-gray-800 dark:text-white dark:hover:bg-gray-900"
    >
        <Image src={linkedinLogo} alt="GitLab" width={25} height={25}/>
        Mon Linkedin
    </a>
</div>)



