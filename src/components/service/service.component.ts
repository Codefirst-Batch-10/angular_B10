import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-service',
  imports: [],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {

  constructor(private _authService:AuthService) {}

  ngOnInit() {
    this._authService.getUserList().subscribe((res)=>{
      console.log(res);
    });

    const service = this._authService.addition(10,20);
    console.log(service);
  }
}
