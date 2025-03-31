import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {};

firebase.initializeApp(config);

export async function loginUser(username: string, password: string) {
  const email = `${username}@example.com`;

  console.log(password);
  try {
    const res = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);

    console.log(res);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}
export async function registerUser(username: string, password: string) {
  const email = `${username}@example.com`;

  try {
    const res = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    console.log(res);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}
