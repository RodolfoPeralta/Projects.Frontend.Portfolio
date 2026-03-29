import { useEffect, useState } from "react";

export function useIsMobile() {

    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);

    function handleResize() {
        setIsMobile(window.innerWidth < 768);
    }

    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return isMobile;

}