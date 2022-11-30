## Description
An application used to convert text based images to plain text, built with React, JavaScript, and SCSS.
Accenture group hackathon tasked with improving how developers write documentation with input from screenshots of error messages. The documentation contained screenshots of errors which are difficult to search for due to them not being in plain text. Our solution sought to remedy this by converting the screenshots to plain text utilising Optical Character Recognition software, namely, Google Cloud Vision API. The application utilises a React front end for users to easily interact with the API.

Note: Due to Google vision API subscription expiring, the application is no longer functional. However, the front end is still usable.

![Screenshot](https://user-images.githubusercontent.com/93106408/204733924-fba7998d-35b3-4122-b63f-fa02512b7910.JPG)

## Setup 

Clone this repository. You will need `node` and `npm` installed globally on your machine.

Installation:

`npm install`

To run:

`npm start`

Alternatively hosted [here](https://docusolved.netlify.app)

## Approach
We began by conducting research on the various OCR technologies available and our group found that the Google cloud vision API was the most suitable for our use case due to its accuracy and price. By searching through the Google Vision documentation, we found we could target the `annotate` endpoint specifying the `TEXT_DETECTION` feature to extract the text from images sent with the request. In order to post the image to the endpoint, the images are encoded as a base64 encoded string and sent in the body of the request. The React front end utilises the `useDropzone` hook to allow the user to drag and drop the image to the input container and receive their output from the API.

## Struggles
The main problem that was run into was trying to send the image in the post request. The example in the documentation was using the image url to submit the image, which wasn't an option for the project. Researching the documentation further, I found that the content of the image could be posted as a base64 string. By using `FileReader()` I was able to encode the image and trim any unnecessary data, to be included in the payload. This process helped me learn how the FileReader works and about base64 encoding.

## Things I would do differently
Even though the API key is outdated, I would change how the API key is stored. Currently the key is available in plain text in the code, due to time constraints when developing the application. If I were to change this I would create a simple API wrapper that would call the API and then call the wrapper from the React front end, avoiding the possibility of the API key being leaked. 

I would also add functionality to automatically output results to a database so that the process is further automated and easier for the user. This would allow the user to easily track the information, and or add further contextual information to each entry.


