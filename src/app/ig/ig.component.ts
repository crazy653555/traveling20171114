import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-ig",
  templateUrl: "./ig.component.html",
  styleUrls: ["./ig.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class IgComponent implements OnInit {
  data = [
    {
      id: 1,
      name: "delighted_parrots",
      content: "果丁莓 & YJ 『果丁莓 ‧ 蹦跳鳥日子』三隻小屁鳥的生活點滴，還有『YJ。傻笑看人生』媽咪人生中遇見鳥的日子 =))",
      link: "https://www.instagram.com/delighted_parrots/",
      like: "575",
      img: "./assets/img/gdm-ig.png"
    },
    {
      id: 2,
      name: "Delilahwong",
      content:
        "Delilah Wong The past and present exist for the future Toast To life。 過去成就未來，把握當下，紀錄每一天",
      link: "https://www.instagram.com/delilahwong/",
      like: "615",
      img: "./assets/img/delilahwong-ig.png"
    },
    {
      id: 3,
      name: "Nekoko",
      content:
        "熱愛攝影的鳥媽咪，紀錄著兩隻肉桂小太陽『芒果Mango』、『布丁Pudding』和一隻藍化鳳梨小太陽『藍莓 Blueberry』的蹦蹦跳跳鳥日子～╰( ◕ ◇ ◕ )╯",
      link: "https://www.instagram.com/nekoko/",
      like: "114",
      img: "./assets/img/nokoko-ig.png"
    },
    {
      id: 4,
      name: "My6birds",
      content:
        "Y-H Wu My 4 greencheek conures🐧(Marvel🚹Stark🚹Packer🚹Groot🚺),and 2 lovebirds 🐤（Hulk🚹Thor🚹）我的四隻綠頰小太陽和兩隻愛情鳥",
      link: "https://www.instagram.com/my6birds/",
      like: "306",
      img: "./assets/img/my6birds-ig.png"
    },
    {
      id: 5,
      name: "yanlin.chou",
      content: "Yanlin Chou 小太陽鸚鵡G",
      link: "https://www.instagram.com/yanlin.chou/",
      like: "103",
      img: "./assets/img/yanlinchou-ig.png"
    },
    {
      id: 5,
      name: "Emilia Liao",
      content: "Emilia Liao 鳥寶日常。小太陽-林包肉Paul；玄鳳-綿綿醬John；文鳥-叭噗",
      link: "https://www.instagram.com/lin_bao_zo/",
      like: "52",
      img: "./assets/img/lin_ban_zo-ig.png"
    },
    {
      id: 6,
      name: "桃園吳彥祖",
      content: "在電影裏，我把自己交給導演，然後由導演交給觀眾",
      link: "https://www.instagram.com/eason653555/",
      like: "9,999,999",
      img: "./assets/img/eason-ig.png"
    },
    {
      id: 6,
      name: "雛鳥",
      content: "我還沒斷奶",
      link: "https://www.instagram.com/zhaorong1999/",
      like: "87",
      img: "./assets/img/zhaorong1999-ig.png"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
