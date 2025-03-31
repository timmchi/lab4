import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
} from "@ionic/react";

const Profile = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding profile-content">
        <h2>Manage your profile and preferences</h2>
        <IonButton routerLink="/">Go to Main</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
