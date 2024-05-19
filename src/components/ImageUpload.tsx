// @ts-nocheck
"use client"


import { useState } from 'react';
import axios from 'axios';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"

export default function ImageUpload() {
  const [selectedImage, setSelectedImage] = useState();
  const [fileExtension, setFileExtension] = useState();

  const handleImageUpload = event => {
    let reader = new FileReader();
    let file = event.target.files[0];

    setFileExtension(file.name.split('.').pop());

    reader.onloadend = () => {
      setSelectedImage(reader.result);
    }

    reader.readAsDataURL(file);
  }

  const handleSubmit = () => {
    let base64Image = selectedImage.split(';base64,').pop();

    // Odeslání obrázku na server
    axios.post("http://localhost/pvd-project/server/image_upload.php", { "image": base64Image, "fileExtension": fileExtension })
      .then(response => {
        if (response.status === 200) {
          console.log('Image uploaded successfully');
          window.location.reload();
        } else {
          alert("Nahrání obrázku selhalo.");
        }
      })
      .catch(error => {
        console.error('Error uploading image:', error);
      });
  }

  const deleteImage = () => {
    axios.post("http://localhost/pvd-project/server/image_delete.php")
      .then(function(response) {
        console.log(response.data);
        window.location.reload();
      })
      .catch(function(error) {
        console.log(error);
      })
  }

  return (
    <>
      <Input id='pictureinput' className="cursor-pointer" type="file" onChange={handleImageUpload} />
      <Button className='w-fit' onClick={handleSubmit}>Nahrát</Button>
      <Button className='ml-3 bg-red-800 text-white hover:bg-red-900' onClick={deleteImage}>Odstranit obrázek</Button>
    </>
  );
}