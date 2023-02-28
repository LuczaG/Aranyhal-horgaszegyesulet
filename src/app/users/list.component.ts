import { Component, OnInit } from '@angular/core';
import { AccountService } from '@app/_services';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  users: any[];

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.accountService.getAll()
      .pipe(first())
      .subscribe(users => this.users = users);
  }

  deleteUser(id: string) {
    const user = this.users.find(x => x.id === id);
    confirm("Biztos törölni akarod a felhasználót?")
    ? user.isDeleted = true && this.accountService.delete(id)
    .pipe(first())
    .subscribe(() => this.users = this.users.filter(x => x.id !==id))
    : "";
  }

}
