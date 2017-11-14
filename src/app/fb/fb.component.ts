import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-fb',
  templateUrl: './fb.component.html',
  styleUrls: ['./fb.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FbComponent implements OnInit {

  data = [
    {
      id:1,
      name:'果丁莓 ‧ 蹦跳鳥日子',
      content:'熱愛攝影的鳥媽咪，紀錄著兩隻肉桂小太陽『芒果Mango』、『布丁Pudding』和一隻藍化鳳梨小太陽『藍莓 Blueberry』的蹦蹦跳跳鳥日子～╰( ◕ ◇ ◕ )╯',
      link:'https://www.facebook.com/DelightedParrots/',
      like:'6,342',
      img:'./assets/img/gdm.png'
    },
    {
      id:2,
     name:'莉。莉。公寓',
      content:'一個鳥奴媽媽因為不想出去工作時間很常陪鳥寶的時間很短，而決定成立點心工作室自己接單上班還可以陪鳥是有沒有這麼任性',
      link:'https://www.facebook.com/%E8%8E%89%E8%8E%89%E5%85%AC%E5%AF%93-618808951482973/',
      like:'1,315',
      img:'./assets/img/gdm.png'
    },
    {
      id:3,
     name:'拉吉歐x豆子們x生活塗鴉',
      content:'四顆豆子+一隻拉吉歐與媽媽的故事',
      link:'https://www.facebook.com/Rajio.mame/',
      like:'265',
      img:'./assets/img/gdm.png'
    },
    {
      id:4,
     name:'英雄鳥聯盟',
      content:'媽覺得我們太可愛了所以要創粉絲專業',
      link:'https://www.facebook.com/pg/%E8%8B%B1%E9%9B%84%E9%B3%A5%E8%81%AF%E7%9B%9F-637192539689225/about/?ref=page_internal',
      like:'85',
      img:'./assets/img/gdm.png'
    },
    {
      id:5,
     name:'Pinky & Halfy',
      content:'Pinky媽 & Halfy爸 紀錄鳥寶的日常',
      link:'https://www.facebook.com/pg/PinkyHalfy/about/?ref=page_internal',
      like:'30',
      img:'./assets/img/gdm.png'
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
