import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

import { Hero } from '../hero';
import { HeroesComponent } from '../heroes/heroes.component';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.css']
})
export class ModalFormComponent extends HeroesComponent implements OnInit {

  validatingForm: FormGroup;

  ngOnInit() {
    this.validatingForm = new FormGroup({
      modalFormName: new FormControl('', Validators.required),
      modalFormHeroName: new FormControl('', Validators.required),
      modalFormQuirk: new FormControl('', Validators.required)
    });
  }

  SendData() {

    const data = new Hero(
      this.validatingForm.value.modalFormName,
      this.validatingForm.value.modalFormHeroName,
      this.validatingForm.value.modalFormQuirk);

    this.add(data);
  }

  get modalFormName() {
    return this.validatingForm.get('modalFormName');
  }

  get modalFormHeroName() {
    return this.validatingForm.get('modalFormHeroName');
  }

  get modalFormQuirk() {
    return this.validatingForm.get('modalFormQuirk');
  }

}
