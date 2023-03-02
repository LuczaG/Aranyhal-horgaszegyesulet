import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService, CatchesService } from '@app/_services';
import { first } from 'rxjs/operators';

@Component({
  templateUrl: './add-edit.component.html'
})
export class AddEditComponent implements OnInit {
  form: FormGroup;
  id: string;
  title: string;
  loading = false;
  submitting = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private catchesService: CatchesService,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.form = this.formBuilder.group({
      ev: ['', Validators.required],
      ponty: ['', Validators.required],
      sullo: ['', Validators.required],
      harcsa: ['', Validators.required]
    });

    this.title = 'Fogási napló hozzáadása';
    if (this.id) {
      // edit mode
      this.title = 'Fogási napló szerkesztése';
      this.loading = true;
      this.catchesService.getById(this.id)
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

    // stop
    if (this.form.invalid) { return; }

    this.submitting = true;
    this.saveCatch().pipe(first())
      .subscribe({
        next: () => {
          this.alertService.success('Fogási napló rögzítve', { keepAfterRouteChange: true });
          this.router.navigateByUrl('/catches');
        },
        error: error => {
          this.alertService.error(error);
          this.submitting = false;
        }
      })
  }

  private saveCatch() {
    return this.id
      ? this.catchesService.update(this.id, this.form.value)
      : this.catchesService.add(this.form.value);
  }
}