import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ApiService} from '../../services/api/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public searchBar: string;
  public gifs: Observable<string[]>;

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  public search(event) {
    this.gifs = this.api.loadGifs(this.searchBar);
  }
}
