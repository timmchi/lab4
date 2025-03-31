import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInput,
  IonButton,
} from "@ionic/react";
import { useState } from "react";
import "./Register.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = () => {
    console.log(username, password);
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
            onClick={registerUser}
          >
            Register
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Register;
