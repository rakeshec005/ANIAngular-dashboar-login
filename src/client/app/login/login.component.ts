import { Component } from '@angular/core';
import {Router} from '@angular/router'

/**
*	This class represents the lazy loaded LoginComponent.
*/

@Component({
	moduleId: module.id,
	selector: 'login-cmp',
	templateUrl: 'login.component.html',
	styleUrls: ['login.css']
})

export class LoginComponent {

  
   constructor(private _router: Router){}
   
	login() {
 this._router.navigate(['dashboard', 'home']);
	}

}
