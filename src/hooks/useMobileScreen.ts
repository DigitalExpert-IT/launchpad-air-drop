import { useState, useEffect } from "react";


export const useMobileScreen = () => {
    const [width, setWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 0);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', handleWindowSizeChange);
            return () => {
                window
                .removeEventListener('resize', handleWindowSizeChange);
            }
        }
    }, []);

    return width <= 768
}