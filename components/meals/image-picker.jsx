'use client'

import { useRef, useState } from "react";
import styles from "./image-picker.module.css";
import Image from "next/image";

const ImagePicker = ({ label, name }) => {
  const [pickedImage, setPickedImage] = useState()
  const imgRef = useRef()

  const handlePickClick = () => {
    imgRef.current.click()
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]  // targeting the first image

    if(!file) {
      setPickedImage(null)
      return;
    }

    const fileReader = new FileReader() // converting the image into url so that can be used to preview
    fileReader.onload = () => {
      setPickedImage(fileReader.result)
    }
    fileReader.readAsDataURL(file)
  }

  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <div className={styles.preview}>
          {!pickedImage ? <p>No image picked yet.</p> : <Image src={pickedImage} alt="The image you selected" fill />}
        </div>
        <input
          className={styles.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imgRef}
          onChange={handleImageChange}
          required
        />
        <button className={styles.button} type="button" onClick={handlePickClick}>Pick an image</button>
      </div>
    </div>
  );
};

export default ImagePicker;
