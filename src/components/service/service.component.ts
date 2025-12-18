import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-service',
  imports: [],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css',
})
export class ServiceComponent {
  // subscription!:Subscription;

  num = 100;
  constructor(
    private _authService: AuthService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((param) => {
      if(param['isValidData'] == 'true') {
        this._authService.getUserList().subscribe((res) => {
          console.log(res);
        });
      }
    });
    // const service = this._authService.addition(10, 20);
    // console.log(service);
  }

  ngOnDestroy() {
    this.num = 0;
    // this.subscription.unsubscribe();
  }
}
