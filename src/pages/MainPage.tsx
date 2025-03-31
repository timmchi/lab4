import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

const Main = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Discover Music</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <div className="main-container">
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Discover Music</IonTitle>
            </IonToolbar>
          </IonHeader>
          <h2 className="tagline">Find Your Next Favorite Song</h2>
          <div className="button-group">
            <IonButton
              routerLink="/login"
              expand="full"
              className="main-button"
            >
              Login
            </IonButton>
            <IonButton
              routerLink="/register"
              expand="full"
              className="main-button"
              fill="outline"
            >
              Register
            </IonButton>
          </div>
        </div>
      </IonContent>
      <style>
        {`
            .main-container {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              height: 100%;
              text-align: center;
            }
            .tagline {
              font-size: 1.5rem;
              margin-bottom: 20px;
            }
            .button-group {
              display: flex;
              flex-direction: column;
              gap: 10px;
              width: 90%;
              max-width: 400px;
            }
            .main-button {
              width: 100%;
            }
          `}
      </style>
    </IonPage>
  );
};

export default Main;
