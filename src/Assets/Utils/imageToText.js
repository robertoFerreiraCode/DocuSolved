const API_KEY = "AIzaSyAndNSW1BlE0rsi9Lb0KaXrSne6e4iwHjM";
// const reader = new FileReader();

export const imageToText = async (file) => {
    const reader = new FileReader();
    let result = "";
    return new Promise((resolve, reject) => {
        reader.onload = () => {
            const base64String = reader.result
                .replace("data:", "")
                .replace(/^.+,/, "");
            const result = apiCall(base64String);
            resolve(result);
        };
        reader.readAsDataURL(file);
        console.log(result);
    });
};

const apiCall = async (result) => {
    const response = await fetch(
        `https://vision.googleapis.com/v1/images:annotate?key=${API_KEY}`,
        {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: `{
            "requests": [
                {
                    "features": [
                        {
                            "type": "TEXT_DETECTION"
                        }
                    ],
                    "image": {
                    "content": "${result}"
                    }
                }
            ]
        }`,
        }
    );
    const data = await response.json();
    console.log(data.responses[0].textAnnotations[0].description);

    return data.responses[0].textAnnotations[0].description;
};
