import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TruncatePipe } from "../../pipes/truncate.pipe";

@Component({
  selector: 'app-pipe-component',
  imports: [CommonModule, TruncatePipe],
  templateUrl: './pipe-component.component.html',
  styleUrl: './pipe-component.component.css'
})
export class PipeComponentComponent {

  title = "CodeFirst"
  price = 1200;
  team = {
    name : "Virat",
    runs : 120
  }
  description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur provident tempore ratione fugit illum eaque quia expedita ipsum sequi enim tenetur velit amet eos accusamus quibusdam odio odit, facere impedit.'
}
