import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInput,
  IonButton,
} from "@ionic/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Register.css";
import { registerUser } from "../firebaseConfig";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    console.log(username, password);
    if (username.trim() === "" || password.trim() === "") return;

    const res = await registerUser(username, password);
    console.log(res);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Register</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <div className="register-container">
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Register</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonInput
            className="input-field"
            placeholder="Username"
            onIonChange={(e) => setUsername(e.detail.value as string)}
          />
          <IonInput
            className="input-field"
            type="password"
            placeholder="Password"
            onIonChange={(e) => setPassword(e.detail.value as string)}
          />
          <IonButton
            expand="full"
            className="register-button"
            onClick={register}
          >
            Register
          </IonButton>
          <p>
            Already registered? <Link to="/login">Login</Link>
          </p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Register;
