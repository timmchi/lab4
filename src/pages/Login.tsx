import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Login.css";
import { loginUser } from "../firebaseConfig";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const res = await loginUser(username, password);
    console.log(`${res ? "Login success" : "Login failed"}`);
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
          <IonButton expand="full" className="login-button" onClick={login}>
            Login
          </IonButton>
          <p>
            Don't have an account yet? <Link to="/register">Register</Link>
          </p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
