import { Component, OnInit } from '@angular/core';
import { MsalBroadcastService, MsalService } from '@azure/msal-angular';
import { AuthenticationResult, EventMessage, EventType, InteractionStatus } from '@azure/msal-browser';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loginDisplay = false;
  displayedColumns: string[] = ['claim', 'value'];
  dataSource: any =[];

  constructor(private authService: MsalService, private msalBroadcastService: MsalBroadcastService) { }

  ngOnInit(): void {
    this.msalBroadcastService.msalSubject$
      .pipe(
        filter((msg: EventMessage) => 
          msg.eventType === EventType.LOGIN_SUCCESS || 
          msg.eventType === EventType.ACQUIRE_TOKEN_SUCCESS ||
          msg.eventType === EventType.ACQUIRE_TOKEN_BY_CODE_START),
      )
      .subscribe((result: EventMessage) => {
        
          if (result.eventType === EventType.ACQUIRE_TOKEN_BY_CODE_START) {
              // let acquireTokenByCodeFlowRequest: RedirectRequest | PopupRequest  = {
              //     authority: environment.b2cPolicies.authorities.signUpSignIn.authority,
              //     scopes: [],
              // };
      
              // this.login(acquireTokenByCodeFlowRequest);
              
              console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%');
              console.log(result.payload);
              console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%');

          } else {
            this.setLoginDisplay();
            this.getClaims((result.payload as AuthenticationResult).account?.idTokenClaims as Record<string, any>);

            console.log(result);
          }
      });

    this.msalBroadcastService.inProgress$
      .pipe(
        filter((status: InteractionStatus) => status === InteractionStatus.None)
      )
      .subscribe(() => {
        this.setLoginDisplay();
        this.getClaims(this.authService.instance.getActiveAccount()?.idTokenClaims as Record<string, any>);
      })
  }

  setLoginDisplay() {
    this.loginDisplay = this.authService.instance.getAllAccounts().length > 0;
  }

  getClaims(claims: Record<string, any>) {
    this.dataSource = [];
    if (claims) {
      Object.entries(claims).forEach((claim: [string, unknown], index: number) => {
        this.dataSource.push({ id: index, claim: claim[0], value: claim[1] });
      });
    }
  }
}
