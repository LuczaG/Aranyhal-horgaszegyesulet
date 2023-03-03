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

  deleteCatch(id: string) {
    const fogas = this.catches.find(x => x.id === id);
    confirm("Are you sure, you want to delete this catch?")
      ? fogas.isDeleting = true && this.catchesService.delete(id)
        .pipe(first())
        .subscribe(() => this.catches = this.catches.filter(x => x.id !== id))
      : "";
  }
}