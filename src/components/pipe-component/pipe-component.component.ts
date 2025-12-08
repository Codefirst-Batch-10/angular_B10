import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NaValuePipe } from '../../pipes/truncate.pipe';
import { TruncatePipe } from "../../pipes/truncate.pipe";

@Component({
  selector: 'app-pipe-component',
  imports: [CommonModule, NaValuePipe, TruncatePipe],
  templateUrl: './pipe-component.component.html',
  styleUrl: './pipe-component.component.css'
})
export class PipeComponentComponent {

  title = "CodeFirst"
  price = 1200;
  team = {
    name: "Virat",
    isCentury: true,
    runs: 120
  }

  cityList: string[] = ['pune', 'nagpur', 'goa', 'mumbai'];

  description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur provident tempore ratione fugit illum eaque quia expedita ipsum sequi enim tenetur velit amet eos accusamus quibusdam odio odit, facere impedit.'

  currentDate: Date = new Date();

  studentArray: any[] = [
    { sId: 101, name: 'AAA', city: 'pune', contactNo: '9999999999' },
    { sId: 102, name: 'BBB', city: 'mumbai', contactNo: '9999988888' },
    { sId: 103, name: 'CCC', city: 'goa', contactNo: '9999977777' },
    { sId: 104, name: 'DDD', city: 'kolhapur', contactNo: '9999966666' },
    { sId: 105, name: 'EEE', city: 'Baramati', contactNo: '9999955555' }
  ]


  studentArray2: any[] = [
    { sId: 101, name: '', city: 'pune', contactNo: '9999999999' },
    { sId: 102, name: 'BBB', city: 'mumbai', contactNo: '9999988888' },
    { sId: 103, name: null, city: 'goa', contactNo: '9999977777' },
    { sId: 104, name: 'DDD', city: 'kolhapur', contactNo: '9999966666' },
    { sId: 105, name: 'EEE', city: '', contactNo: '9999955555' }
  ]

}
