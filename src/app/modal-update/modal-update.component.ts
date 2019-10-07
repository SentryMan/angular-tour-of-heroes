import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-modal-update',
  templateUrl: './modal-update.component.html',
  styleUrls: ['./modal-update.component.css']
})
export class ModalUpdateComponent implements OnInit {

  validatingForm: FormGroup;

  constructor(private service: HeroService) {}


  ngOnInit() {
    this.validatingForm = new FormGroup({
      modalFormID: new FormControl('0', Validators.required),
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

    data.setId(this.validatingForm.value.modalFormID);
      console.log(data);
    this.service.updateHero(data);
  }

  get modalFormID() {
    return this.validatingForm.get('modalFormID');
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
