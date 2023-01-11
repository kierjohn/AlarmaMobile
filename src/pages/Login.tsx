import React, { Component } from 'react';
import { IonHeader,
   IonToolbar,
   IonButtons, 
   IonButton, 
   IonTitle, 
   IonContent, 
   IonList, 
   IonItem, 
   IonLabel, 
   IonGrid,
   IonInput, 
   IonRow, 
   IonCol } from '@ionic/react';
import './Login.css';
import { Redirect , BrowserRouter , Route } from 'react-router-dom';
import { withRouter, RouteComponentProps} from 'react-router';



type Props = RouteComponentProps<{}> & {
  dismissPopover: () => void;
}

type State = {
  username : string | null,
  password : string | null
}

export default class Login extends Component<Props , State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    }

    this.logInUser = this.logInUser.bind(this);
    this.updateUserName = this.updateUserName.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.signUpUser = this.signUpUser.bind(this);
  }

  updateUserName(e) {

      this.setState({
        username : e.target.value
      })

  }

  updatePassword(e) {
    this.setState({
      password : e.target.value
    })

}

  logInUser() { 
    this.props.history.push("/schedule")
  }


  signUpUser() {
    this.props.history.push("/signup")
  }


  FBLogInUser() {

  }

  render() {
    return (
      <>
        <IonHeader>
          <IonToolbar color="primary">
            <IonButtons slot="start">
              
            </IonButtons>
            <IonTitle>Login</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent>
          <div className="logo">
            <img src="assets/img/alarmalogo.svg" alt="Ionic logo"/>
          </div>
          <form noValidate>
            
            <IonList no-lines>
              <IonItem>
                <IonLabel color="primary">Phone Number</IonLabel>
                <IonInput
                  onIonChange={this.updateUserName}
                  name="username"
                  type="text"
                  autocapitalize="off"
                  value={this.state.username}
                  required>
                </IonInput>
              </IonItem>
              <IonItem>
                <IonLabel color="primary">Password</IonLabel>
                <IonInput 
                onIonChange={this.updatePassword}
                name="password" 
                type="password" 
                autoCapitalize="off"
                value={this.state.password}

                required>

                </IonInput>
              </IonItem>
            </IonList>

            <IonGrid>
            <IonRow responsive-sm>
			
              <IonCol>
                <IonButton onClick={this.logInUser} type="button">
                  Login
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton onClick={this.signUpUser} color="light">
                  Signup
                </IonButton> 
              </IonCol>
			  
            </IonRow>
            </IonGrid>
          </form>
        </IonContent>
      </>
    );
  }
}
