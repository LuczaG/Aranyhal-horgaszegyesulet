import { Component, OnInit } from '@angular/core';
import { CatchesService } from '@app/_services';
import { first } from 'rxjs/operators';

@Component({
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {
  catches: any[];

  constructor(private catchesService: CatchesService) { }

  ngOnInit(): void {
    this.catchesService.getAll()
      .pipe(first())
      .subscribe(catches => this.catches = catches);
  }

  deleteUser(id: string) {
    const user = this.catches.find(x => x.id === id);
    confirm("Are you sure, you want to delete this user?")
      ? user.isDeleting = true && this.catchesService.delete(id)
        .pipe(first())
        .subscribe(() => this.catches = this.catches.filter(x => x.id !== id))
      : "";
  }
}