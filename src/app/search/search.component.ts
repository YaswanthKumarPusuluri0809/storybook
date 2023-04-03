import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  enteredSearchValue: string = '';

  @Output()
  serchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChange() {
    this.serchTextChanged.emit(this.enteredSearchValue);
  }
}
