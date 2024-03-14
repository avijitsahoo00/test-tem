import React from 'react';
import PageHadderAndButton from '../components/PageHadderAndButton';

export default function CvUpload() {
    const [image, setImage] = React.useState(null);

    let component = {
        name: "Candidate List",
        buttons: [
            {
                name: "Go to Candidate",
                style: {
                    padding: "4px"
                },
                link: "/candidate"
            },
            {
                name: "Go to Home",
                style: {
                    padding: "4px"
                },
                link: "/"
            },

        ]
    }

    const handleImageUpload = async (event) => {
        const files = event.target.files;
        const data = new FormData();
        setImage(files);
        for (const file of files) {
            data.append('file', file);
        }
        await fetch('http://44.198.34.124:5000/upload_cv', {
            method: 'POST',
            body: data,
        });
        console.log("response: ");
        setImage(null);
    };

    if (image) {
        return (
            <>
                loading
            </>
        );
    } else {
        return (

            <>
                <PageHadderAndButton component={component} />
                <br />
                <br />

                <div className="image-uploader-container">
                    <input
                        type="file"
                        accept="application/pdf"
                        onChange={handleImageUpload}
                        className="input-file"
                        id='input-cvs'
                        multiple={true}
                    />
                    <div className="image-preview" onClick={() => { document.getElementById("input-cvs").click() }}>
                        <div className="preview-placeholder">Upload Your CV</div>
                    </div>
                </div>
            </>
        );
    }
}
