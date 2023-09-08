import React from 'react';
import { saveAs } from 'file-saver';
import {BsDownload} from "react-icons/bs";

const DownloadButton = () => {
  const handleDownload = () => {
    // URL of the PDF file
    const pdfUrl = 'src/assets/Cv.pdf';

    // Fetch the PDF file
    fetch(pdfUrl)
      .then(response => response.blob())
      .then(blob => {
        // Save the blob as a file using FileSaver.js
        saveAs(blob, 'Ahmad-Abo-Kassem-CV.pdf');
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };
//*this is the button to download the PDF file

  return (
    <button className=' text-3xl flex gap-4 items-center justify-center  py-4 px-8 font-bold  rounded-lg tracking-widest  duration-500 hover:scale-[95%]    ' onClick={handleDownload}> <BsDownload size={30} /> <p>Download CV</p></button>
  );
};

export default DownloadButton;