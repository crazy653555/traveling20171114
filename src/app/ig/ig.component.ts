import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-ig',
  templateUrl: './ig.component.html',
  styleUrls: ['./ig.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class IgComponent implements OnInit {

  data = [
    {
      id:1,
      name:'果丁莓 ‧ 蹦跳鳥日子',
      content:'熱愛攝影的鳥媽咪，紀錄著兩隻肉桂小太陽『芒果Mango』、『布丁Pudding』和一隻藍化鳳梨小太陽『藍莓 Blueberry』的蹦蹦跳跳鳥日子～╰( ◕ ◇ ◕ )╯',
      link:'https://www.facebook.com/DelightedParrots/',
      img:'./assets/img/gdm.png'
    },
    {
      id:2,
     name:'果丁莓 ‧ 蹦跳鳥日子',
      content:'熱愛攝影的鳥媽咪，紀錄著兩隻肉桂小太陽『芒果Mango』、『布丁Pudding』和一隻藍化鳳梨小太陽『藍莓 Blueberry』的蹦蹦跳跳鳥日子～╰( ◕ ◇ ◕ )╯',
      link:'https://www.facebook.com/DelightedParrots/',
      img:'./assets/img/gdm.png'
    },
    {
      id:3,
     name:'果丁莓 ‧ 蹦跳鳥日子',
      content:'熱愛攝影的鳥媽咪，紀錄著兩隻肉桂小太陽『芒果Mango』、『布丁Pudding』和一隻藍化鳳梨小太陽『藍莓 Blueberry』的蹦蹦跳跳鳥日子～╰( ◕ ◇ ◕ )╯',
      link:'https://www.facebook.com/DelightedParrots/',
      img:'./assets/img/gdm.png'
    },
    {
      id:4,
     name:'果丁莓 ‧ 蹦跳鳥日子',
      content:'熱愛攝影的鳥媽咪，紀錄著兩隻肉桂小太陽『芒果Mango』、『布丁Pudding』和一隻藍化鳳梨小太陽『藍莓 Blueberry』的蹦蹦跳跳鳥日子～╰( ◕ ◇ ◕ )╯',
      link:'https://www.facebook.com/DelightedParrots/',
      img:'./assets/img/gdm.png'
    },
    {
      id:5,
     name:'果丁莓 ‧ 蹦跳鳥日子',
      content:'熱愛攝影的鳥媽咪，紀錄著兩隻肉桂小太陽『芒果Mango』、『布丁Pudding』和一隻藍化鳳梨小太陽『藍莓 Blueberry』的蹦蹦跳跳鳥日子～╰( ◕ ◇ ◕ )╯',
      link:'https://www.facebook.com/DelightedParrots/',
      img:'./assets/img/gdm.png'
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
