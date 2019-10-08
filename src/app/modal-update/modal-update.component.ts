import { Component, OnInit, Input } from '@angular/core';
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

  @Input() hero: Hero;
  constructor(private service: HeroService) { }

  ngOnInit() {
    if (this.hero) {
      this.validatingForm = this.updateForm(this.hero);
    } else {
      this.validatingForm = new FormGroup({
        modalFormID: new FormControl('', Validators.required),
        modalFormName: new FormControl('', Validators.required),
        modalFormHeroName: new FormControl('', Validators.required),
        modalFormQuirk: new FormControl('', Validators.required)
      });
    }
  }

  SendData() {
    const data = new Hero(
      this.validatingForm.value.modalFormName,
      this.validatingForm.value.modalFormHeroName,
      this.validatingForm.value.modalFormQuirk);
    data.setId(this.validatingForm.value.modalFormID);
    console.log(data);
    this.service.updateHero(data).subscribe(hero => this.service.heroUpdated(hero));
  }

  private updateForm(hero: Hero) {
    return new FormGroup({
      modalFormID: new FormControl(hero.id, Validators.required),
      modalFormName: new FormControl(hero.name, Validators.required),
      modalFormHeroName: new FormControl(hero.heroName, Validators.required),
      modalFormQuirk: new FormControl(hero.quirk, Validators.required)
    });
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
