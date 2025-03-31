import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useState } from "react";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = () => {
    console.log(username, password);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <div className="login-container">
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Login</IonTitle>
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
          <IonButton expand="full" className="login-button" onClick={loginUser}>
            Login
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
