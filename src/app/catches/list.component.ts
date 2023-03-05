import { Component, OnInit } from '@angular/core';
import { AccountService, CatchesService } from '@app/_services';
import { first } from 'rxjs/operators';
import { User } from '@app/_models';

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']

})
export class ListComponent implements OnInit {
  catches: any[];
  user: User;

  constructor(
    private catchesService: CatchesService,
    private accountService: AccountService, 
    ) { this.user = this.accountService.userValue; }

  ngOnInit(): void {
    this.catchesService.getAll()
      .pipe(first())
      .subscribe(catches => this.catches = catches);
  }

  deleteCatch(id: string) {
    const fogas = this.catches.find(x => x.id === id);
    confirm("Biztosan törölni szeretnéd a fogásod?")
      ? fogas.isDeleting = true && this.catchesService.delete(id)
        .pipe(first())
        .subscribe(() => this.catches = this.catches.filter(x => x.id !== id))
      : "";
  }
}