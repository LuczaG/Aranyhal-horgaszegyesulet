import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService, AlertService } from '@app/_services';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  form: FormGroup;
  id: string;
  loading = false;
  submitting = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      // password nem kötelező szerkesztéskor.
      password: ["", [Validators.minLength(6), ...(this.id ? [] : [Validators.required])]]
    });

    if (this.id) {
      //edit mode
      this.loading = true;
      this.accountService.getById(this.id)
        .pipe(first())
        .subscribe(x => {
          this.form.patchValue(x);
          this.loading = false;
        });
    }
  }

  // kényelmi getter az űrlapmezők egyszerű eléréséhez
  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;

    this.alertService.clear();

    //stop
    if (this.form.invalid) { return; }

    this.submitting = true;
    this.accountService.update(this.id, this.form.value).pipe(first())
      .subscribe({
        next: () => {
          this.alertService.success('A felhasználóneved megváltozott', { keepAfterRouteChange: true });
          this.router.navigateByUrl('/user/dashboard');
        },
        error: error => {
          this.alertService.error(error);
          this.submitting = false;
        }
      })
  }
}