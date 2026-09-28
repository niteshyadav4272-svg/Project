import { useEffect } from "react";

const ResumePopup = () => {
    useEffect(() => {
        const timer = setTimeout(() => {
            const link = document.createElement("a");

            link.href = "/resume.pdf";
            link.download = "Nitesh-Yadav-Resume.pdf";

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return null;
};

export default ResumePopup;