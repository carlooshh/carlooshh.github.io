import { Component, OnInit } from '@angular/core';
import { EmbrapaService } from './services/embrapa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title: any = 'digital-green-frontend';

  constructor(private embrapaService: EmbrapaService) {}

  async ngOnInit() {
    this.title = await this.embrapaService.getCulturas();
    console.log(this.title);
  }
}
