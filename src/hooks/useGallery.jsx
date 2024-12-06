import { useEffect, useState } from "react";

export default function useGallery() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await fetch('http://localhost:3000/galleries');
            const { results } = await request.json();            
            setImages(results);
        }

        fetchData();
    }, []);

    return [images];
}