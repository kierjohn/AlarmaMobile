import React, { Component } from 'react';
import { IonHeader, IonDatetime, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonList, IonItem, IonLabel, IonInput, IonButton } from '@ionic/react';
import { withRouter, RouteComponentProps} from 'react-router';

type Props = RouteComponentProps<{}> & {
  dismissPopover: () => void;
}

type State = {
  username: string | null,
  password: string | null
}

export default class UserInfo extends Component<Props , State>  {
  signupFormRef: React.Ref<HTMLFormElement>

  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null
    }
    this.signupFormRef = React.createRef();
    this.onSignup = this.onSignup.bind(this);
    
  }

  onSignup() {
    this.props.history.push("/schedule")
  }

  render() {
    return (
      <>
        <IonHeader>
          <IonToolbar color="primary">
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Create Account</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent class="page-user">

          <form ref={this.signupFormRef}>
            <IonList no-lines>
            <br></br>
            <IonItem>
                <IonLabel color="primary">First Name</IonLabel>
                <IonInput value={this.state.username} name="firstName" type="text" required>
                </IonInput>
            </IonItem>
            <br></br>
            <IonItem>
                <IonLabel color="primary">Middle Name</IonLabel>
                <IonInput value={this.state.username} name="middlename" type="text" required>
                </IonInput>
            </IonItem>
            <br></br>
            <IonItem>
                <IonLabel color="primary">Last Name</IonLabel>
                <IonInput value={this.state.username} name="lastname" type="text" required>
                </IonInput>
            </IonItem>
            <br></br>
            <IonItem>
                <IonLabel color="primary">Complete Address</IonLabel>
                <IonInput value={this.state.username} name="address" type="text" required>
                </IonInput>
            </IonItem>
            <br></br>
            <IonItem>
                <IonLabel color="primary">Birthday</IonLabel>
                <IonDatetime displayFormat="MM DD YY" placeholder="mm / dd / yy"></IonDatetime>
            </IonItem>
            <br></br>
            <IonItem>
                <IonLabel color="primary">Contact Number</IonLabel>
                <IonInput value={this.state.username} name="contactnumber" type="text" required>
                </IonInput>
            </IonItem>
            <br></br>
            <IonItem>
                <IonLabel color="primary">Username</IonLabel>
                <IonInput value={this.state.username} name="username" type="text" required>
                </IonInput>
            </IonItem>
            <br></br>
            <IonItem>
                <IonLabel color="primary">Password</IonLabel>
                <IonInput value={this.state.password} name="password" type="password" required>
                </IonInput>
            </IonItem>
            <br></br>
            <IonItem>
                <IonLabel color="primary">Confirm Password</IonLabel>
                <IonInput value={this.state.password} name="password" type="password" required>
                </IonInput>
            </IonItem>
            </IonList>
            <div>
              <IonButton onClick={() => this.onSignup()} type="button">Create</IonButton>
            </div>
          </form>
        </IonContent>
      </>
    );
  }
}
