import React, { useState } from "react";
import axios from "axios";

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = async () => {
    if (!selectedFile) return;

    setUploading(true);
    setError(null);

    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("uploader", "User1");

    try {
      const uploadResponse = await axios.post(
        "https://collaborative-project-managemnet-tool.onrender.com/uploads",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const fileUrl = uploadResponse.data.fileUrl;
      const fileName = selectedFile.name;

      await axios.post(
        "https://collaborative-project-managemnet-tool.onrender.com/uploads",
        { fileUrl, fileName },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      alert("File uploaded and details saved successfully!");
    } catch (error) {
      console.error("Error uploading file or saving details:", error);
      setError("Failed to upload file. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload} disabled={uploading}>
        {uploading ? "Uploading..." : "Upload"}
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default FileUpload;
