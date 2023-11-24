'use client'
import React from 'react';

const backendURL = process.env.BACKEND_URL;
const local = process.env.BACKEND_LOCAL_URL;

const FileDownloader = ({ cvEnglish }) => {
  const handleDownload = async () => {
    try {
        const downloadUrl = `/cv/${cvEnglish}`;
      const response = await fetch(downloadUrl);
      console.log(response);
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `${cvEnglish}.pdf`);
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      } else {
        console.error('Failed to download file');
      }
    } catch (error) {
      console.error('Error downloading file:', error);
    }
  };

  return (
    <button className="ml-4 underline decoration-dark-title text-dark-title font-semibold dark:hover:text-teal-400 hover:text-purple-950 dark:hover:decoration-teal-400 hover:decoration-purple-950" onClick={handleDownload}>
      Download CV
    </button>
  );
};

export default FileDownloader;
