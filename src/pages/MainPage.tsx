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
          <IonTitle>Main</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Main</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton routerLink="/login">Login</IonButton>
        <IonButton routerLink="/register">Register</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Main;
