export class Hero {
  id: number;
  name: string;
  heroName: string;
  quirk: string;

  constructor(name: string, heroName: string, quirk: string,) {

    this.name = name;
    this.heroName = heroName;
    this.quirk = quirk;
    }

    getId(){
      return this.id;
    }

    setId(id: number) {
      this.id = id;
    }
}
