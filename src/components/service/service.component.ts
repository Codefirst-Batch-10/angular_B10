import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-service',
  imports: [],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {

  subscription!:Subscription;

  num = 100;
  constructor(private _authService:AuthService) {}

  ngOnInit() {
    this.subscription.add(this._authService.getUserList().subscribe((res)=>{
      console.log(res);
    }));

    const service = this._authService.addition(10,20);
    console.log(service);
  }

  ngOnDestroy() {
    this.num = 0;
    this.subscription.unsubscribe();
  }
}
