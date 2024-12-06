import { useState } from "react";

export default function Form() {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        console.log(event.target.files);
        const { files } = event.target;
        if (files) {
            setFile(files[0]);
        }
    }

    const handleUpload = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('image', file);

        try {
        const result = await fetch('http://localhost:3000/upload', {
            method: 'post',
            body: formData
        });

        const data = await result.json();
        console.log(data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleUpload}>
            <input type="file" name="image" onChange={handleFileChange}/>
            <input type="submit" value="Carica" />
            <div>
                {file && (
                    <ul>
                        <li>{file.name}</li>
                        <li>{file.type}</li>
                        <li>{file.size}</li>
                    </ul>
                )}
            </div>
        </form>
    );
}