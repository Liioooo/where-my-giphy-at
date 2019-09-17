import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {ApiService} from '../../services/api/api.service';
import {FormControl} from '@angular/forms';
import {debounceTime, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public searchBar: FormControl;
  public gifs: Observable<string[]>;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.searchBar = new FormControl();
    this.gifs = this.searchBar.valueChanges.pipe(
      debounceTime(500),
      switchMap(searchTerm => {
        return this.api.loadGifs(searchTerm);
      })
    );
  }
}
