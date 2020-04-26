import { storage } from '../firebase/firebase.util';

export const handleFireBaseUpload = async imageAsFile => {
  // async magic goes here...
  if (!imageAsFile) return false;

  try {
    await storage
      .ref(`/images/mussey-user-profile-pictures/${imageAsFile.name}`)
      .put(imageAsFile);

    const imageURL = await storage
      .ref('images')
      .child(`/mussey-user-profile-pictures/${imageAsFile.name}`)
      .getDownloadURL();
    return imageURL;
  } catch (error) {
    console.log(error);
    return false;
  }
};
