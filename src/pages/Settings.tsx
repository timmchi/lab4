import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
} from "@ionic/react";

const Settings = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding settings-content">
        <h2>Adjust your app settings</h2>
        <IonButton routerLink="/">Go to Main</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Settings;
