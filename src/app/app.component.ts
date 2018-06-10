import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  monsterName: string = 'kaiju';
  monsterPower: number;

  monsters: any[] = [
    {
      monsterName: 'kaiju',
      monsterPower: null
    },
    {
      monsterName: 'smaug',
      monsterPower: null
    }
  ];

  monsterSelected;

  ngOnInit() {
    this.pickMonster();
  }

  pickMonster() {
    const index = Math.floor(Math.random() * (this.monsters.length));
    this.monsterSelected = this.monsters[index];
  }

  generatePower()  {
    this.monsterSelected.monsterPower = Math.floor(Math.random() * 101);
    console.log(this.monsterSelected.monsterPower);
  }
}
