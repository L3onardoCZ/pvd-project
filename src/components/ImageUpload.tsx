// @ts-nocheck
"use client"


import { useState } from 'react';
import axios from 'axios';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"

export default function ImageUpload() {
  const [selectedImage, setSelectedImage] = useState();

  const handleImageUpload = event => {
    let reader = new FileReader();
    let file = event.target.files[0];

    reader.onloadend = () => {
      setSelectedImage(reader.result);
    }

    reader.readAsDataURL(file);
  }

  const handleSubmit = () => {
    let base64Image = selectedImage.split(';base64,').pop();

    // Odeslání obrázku na server
    axios.post('/api/upload', { image: base64Image })
      .then(response => {
        if (response.status === 200) {
          console.log('Image uploaded successfully');
        } else {
          console.error('Image upload failed');
        }
      })
      .catch(error => {
        console.error('Error uploading image:', error);
      });
  }

  return (
    <>
      <Input className='' type="file" onChange={handleImageUpload} />
      <Button className='w-fit' onClick={handleSubmit}>Upload</Button>
    </>
  );
}