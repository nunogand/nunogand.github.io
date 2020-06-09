---
layout: post
title: "Experiência em Css"
description: "Exercício CSS"
categories: [Webdesign]
tags: [HTML, Webdesign, código]
date: 2020-06-08
img: header_webdesign.jpg
---
<style>
/*
  Malik Dellidj - @Dathink

  Solar System orbit animation true time scaled

  Revolution of planets in earth days (from Wikipedia)
  Mercury : ~87,5 days
  Venus : ~224,7 days
  Earth : ~365,2563 days
    + Moon : ~27,3216 days (around earth)
  Mars : ~687 days (~1,8 year)
  Jupiter : ~4 331 days (~12 years)
  Saturn : ~10 747 days (~30 years)
  Uranus : ~30 589 days (~84 years)
  Neptune : ~59 802 days (~165 years)
  Pluto : ~90 580 days (~248 years)
*/
*, *:before, *:after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
  width: 100%;
}

body {
  font: normal 1em/1.45em "Helvetica Neue", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  color: #fff;
  background: radial-gradient(ellipse at bottom, #1C2837 0%, #050608 100%);
  background-attachment: fixed;
}

h1 {
  font-weight: 300;
  font-size: 2.5em;
  text-transform: uppercase;
  font-family: Lato;
  line-height: 1.6em;
  letter-spacing: .1em;
}

a, a:visited {
  text-decoration: none;
  color: white;
  opacity: .7;
}
a:hover, a:visited:hover {
  opacity: 1;
}
a.icon, a:visited.icon {
  margin-right: 2px;
  padding: 3px;
}

.description {
  padding: 30px;
  position: absolute;
  top: 0;
  left: 0;
  width: 25%;
  z-index: 999;
}
.description p {
  font-size: .9em;
}
.description p + p {
  margin-top: 20px;
}
.description p.author {
  font-size: .7em;
}
.description p.author .fa-heart {
  color: #860014;
}

hr {
  margin: 26px 0;
  border: 0;
  border-top: 1px solid white;
  background: transparent;
  width: 25%;
  opacity: .1;
}

code {
  color: #ae94c0;
  font-family: Menlo, Monaco, Consolas, 'Courier New', monospace;
  font-size: .9em;
}

.solar-syst {
  margin: 0 auto;
  width: 100%;
  height: 100%;
  position: relative;
}
.solar-syst:after {
  content: "";
  position: absolute;
  height: 2px;
  width: 2px;
  top: -2px;
  background: white;
  box-shadow: 1722px 441px 0 0px rgba(255, 255, 255, 0.725) , 321px 258px 0 0px rgba(255,255,255, 0.639) , 1547px 840px 0 0px rgba(255,255,255, 0.08) , 1446px 267px 0 0px rgba(255,255,255, 0.573) , 936px 1515px 0 0px rgba(255,255,255, 0.92) , 1178px 1789px 0 0px rgba(255,255,255, 0.266) , 937px 570px 0 0px rgba(255,255,255, 0.3) , 776px 849px 0 0px rgba(255,255,255, 0.951) , 374px 1780px 0 0px rgba(255,255,255, 0.334) , 1465px 679px 0 0px rgba(255,255,255, 0.858) , 565px 233px 0 0px rgba(255,255,255, 0.19) , 408px 1382px 0 0px rgba(255,255,255, 0.449) , 419px 572px 0 0px rgba(255,255,255, 0.015) , 1196px 1767px 0 0px rgba(255,255,255, 0.969) , 878px 473px 0 0px rgba(255,255,255, 0.607) , 1427px 1352px 0 0px rgba(255,255,255, 0.149) , 79px 943px 0 0px rgba(255,255,255, 0.305) , 1675px 843px 0 0px rgba(255,255,255, 0.323) , 1246px 1018px 0 0px rgba(255,255,255, 0.316) , 1057px 513px 0 0px rgba(255,255,255, 0.791) , 282px 1575px 0 0px rgba(255,255,255, 0.039) , 379px 233px 0 0px rgba(255,255,255, 0.357) , 982px 1538px 0 0px rgba(255,255,255, 0.579) , 796px 804px 0 0px rgba(255,255,255, 0.674) , 1267px 579px 0 0px rgba(255,255,255, 0.067) , 739px 928px 0 0px rgba(255,255,255, 0.518) , 180px 1761px 0 0px rgba(255,255,255, 0.745) , 689px 1198px 0 0px rgba(255,255,255, 0.329) , 1366px 1701px 0 0px rgba(255,255,255, 0.115) , 178px 1167px 0 0px rgba(255,255,255, 0.208) , 762px 317px 0 0px rgba(255,255,255, 0.889) , 663px 525px 0 0px rgba(255,255,255, 0.356) , 1595px 85px 0 0px rgba(255,255,255, 0.669) , 99px 1094px 0 0px rgba(255,255,255, 0.677) , 909px 1553px 0 0px rgba(255,255,255, 0.638) , 1514px 260px 0 0px rgba(255,255,255, 0.657) , 1315px 1187px 0 0px rgba(255,255,255, 0.463) , 1027px 1354px 0 0px rgba(255,255,255, 0.21) , 1242px 1015px 0 0px rgba(255,255,255, 0.229) , 1541px 779px 0 0px rgba(255,255,255, 0.629) , 1634px 1734px 0 0px rgba(255,255,255, 0.115) , 810px 511px 0 0px rgba(255,255,255, 0.58) , 548px 1302px 0 0px rgba(255,255,255, 0.038) , 1495px 1319px 0 0px rgba(255,255,255, 0.869) , 24px 1084px 0 0px rgba(255,255,255, 0.01) , 287px 1144px 0 0px rgba(255,255,255, 0.129) , 360px 1450px 0 0px rgba(255,255,255, 0.499) , 22px 355px 0 0px rgba(255,255,255, 0.28) , 503px 1003px 0 0px rgba(255,255,255, 0.855) , 1227px 1105px 0 0px rgba(255,255,255, 0.537) , 1625px 132px 0 0px rgba(255,255,255, 0.402) , 828px 949px 0 0px rgba(255,255,255, 0.097) , 40px 560px 0 0px rgba(255,255,255, 0.043) , 921px 449px 0 0px rgba(255,255,255, 0.719) , 27px 446px 0 0px rgba(255,255,255, 0.59) , 1699px 1112px 0 0px rgba(255,255,255, 0.556) , 53px 1173px 0 0px rgba(255,255,255, 0.548) , 171px 1205px 0 0px rgba(255,255,255, 0.664) , 867px 474px 0 0px rgba(255,255,255, 0.071) , 342px 578px 0 0px rgba(255,255,255, 0.335) , 185px 1128px 0 0px rgba(255,255,255, 0.51) , 882px 650px 0 0px rgba(255,255,255, 0.937) , 497px 1157px 0 0px rgba(255,255,255, 0.928) , 1726px 1299px 0 0px rgba(255,255,255, 0.061) , 1516px 1278px 0 0px rgba(255,255,255, 0.85) , 750px 1354px 0 0px rgba(255,255,255, 0.529) , 1634px 1701px 0 0px rgba(255,255,255, 0.046) , 141px 1082px 0 0px rgba(255,255,255, 0.111) , 342px 463px 0 0px rgba(255,255,255, 0.892) , 281px 294px 0 0px rgba(255,255,255, 0.716) , 577px 754px 0 0px rgba(255,255,255, 0.396) , 1777px 1796px 0 0px rgba(255,255,255, 0.562) , 117px 28px 0 0px rgba(255,255,255, 0.029) , 1484px 1143px 0 0px rgba(255,255,255, 0.429) , 1763px 1557px 0 0px rgba(255,255,255, 0.35) , 669px 302px 0 0px rgba(255,255,255, 0.07) , 67px 1707px 0 0px rgba(255,255,255, 0.56) , 59px 212px 0 0px rgba(255,255,255, 0.633) , 1332px 1410px 0 0px rgba(255,255,255, 0.055) , 1425px 1403px 0 0px rgba(255,255,255, 0.369) , 1055px 1362px 0 0px rgba(255,255,255, 0.137) , 39px 23px 0 0px rgba(255,255,255, 0.732) , 1537px 700px 0 0px rgba(255,255,255, 0.023) , 1778px 13px 0 0px rgba(255,255,255, 0.398) , 1243px 352px 0 0px rgba(255,255,255, 0.283) , 1338px 1610px 0 0px rgba(255,255,255, 0.045) , 433px 1204px 0 0px rgba(255,255,255, 0.687) , 538px 1378px 0 0px rgba(255,255,255, 0.69) , 643px 340px 0 0px rgba(255,255,255, 0.615) , 595px 72px 0 0px rgba(255,255,255, 0.017) , 893px 1183px 0 0px rgba(255,255,255, 0.181) , 1426px 957px 0 0px rgba(255,255,255, 0.262) , 316px 1594px 0 0px rgba(255,255,255, 0.178) , 794px 1078px 0 0px rgba(255,255,255, 0.622) , 903px 522px 0 0px rgba(255,255,255, 0.102) , 676px 35px 0 0px rgba(255,255,255, 0.011) , 38px 1278px 0 0px rgba(255,255,255, 0.946) , 1092px 1656px 0 0px rgba(255,255,255, 0.151) , 298px 589px 0 0px rgba(255,255,255, 0.683) , 1668px 688px 0 0px rgba(255,255,255, 0.728) , 1419px 102px 0 0px rgba(255,255,255, 0.574) , 1739px 738px 0 0px rgba(255,255,255, 0.043) , 312px 1448px 0 0px rgba(255,255,255, 0.125) , 1472px 276px 0 0px rgba(255,255,255, 0.618) , 868px 285px 0 0px rgba(255,255,255, 0.249) , 659px 834px 0 0px rgba(255,255,255, 0.547) , 884px 11px 0 0px rgba(255,255,255, 0.943) , 14px 462px 0 0px rgba(255,255,255, 0.396) , 1728px 1326px 0 0px rgba(255,255,255, 0.591) , 154px 739px 0 0px rgba(255,255,255, 0.981) , 1078px 1707px 0 0px rgba(255,255,255, 0.516) , 1237px 6px 0 0px rgba(255,255,255, 0.148) , 14px 567px 0 0px rgba(255,255,255, 0.948) , 1593px 847px 0 0px rgba(255,255,255, 0.284) , 1629px 1062px 0 0px rgba(255,255,255, 0.761) , 808px 423px 0 0px rgba(255,255,255, 0.459) , 1375px 179px 0 0px rgba(255,255,255, 0.628) , 1366px 311px 0 0px rgba(255,255,255, 0.29) , 775px 66px 0 0px rgba(255,255,255, 0.609) , 96px 669px 0 0px rgba(255,255,255, 0.993) , 1490px 754px 0 0px rgba(255,255,255, 0.722) , 938px 1012px 0 0px rgba(255,255,255, 0.5) , 443px 1259px 0 0px rgba(255,255,255, 0.886) , 373px 1775px 0 0px rgba(255,255,255, 0.746) , 431px 973px 0 0px rgba(255,255,255, 0.963) , 177px 90px 0 0px rgba(255,255,255, 0.603) , 183px 876px 0 0px rgba(255,255,255, 0.254) , 1242px 1476px 0 0px rgba(255,255,255, 0.224) , 233px 254px 0 0px rgba(255,255,255, 0.036) , 1535px 1524px 0 0px rgba(255,255,255, 0.003) , 100px 716px 0 0px rgba(255,255,255, 0.99) , 124px 1326px 0 0px rgba(255,255,255, 0.456) , 990px 765px 0 0px rgba(255,255,255, 0.372) , 4px 869px 0 0px rgba(255,255,255, 0.042) , 1768px 1631px 0 0px rgba(255,255,255, 0.586) , 760px 1002px 0 0px rgba(255,255,255, 0.176) , 237px 234px 0 0px rgba(255,255,255, 0.578) , 1207px 498px 0 0px rgba(255,255,255, 0.175) , 1733px 1617px 0 0px rgba(255,255,255, 0.617) , 39px 58px 0 0px rgba(255,255,255, 0.452) , 1299px 1120px 0 0px rgba(255,255,255, 0.897) , 1318px 1085px 0 0px rgba(255,255,255, 0.828) , 1204px 282px 0 0px rgba(255,255,255, 0.155) , 1490px 817px 0 0px rgba(255,255,255, 0.274) , 1565px 574px 0 0px rgba(255,255,255, 0.639) , 1637px 773px 0 0px rgba(255,255,255, 0.572) , 1727px 915px 0 0px rgba(255,255,255, 0.957) , 1397px 284px 0 0px rgba(255,255,255, 0.137) , 1494px 234px 0 0px rgba(255,255,255, 0.755) , 595px 569px 0 0px rgba(255,255,255, 0.944) , 1739px 138px 0 0px rgba(255,255,255, 0.978) , 927px 946px 0 0px rgba(255,255,255, 0.047) , 365px 1089px 0 0px rgba(255,255,255, 0.179) , 425px 1518px 0 0px rgba(255,255,255, 0.41) , 789px 1743px 0 0px rgba(255,255,255, 0.142) , 539px 1379px 0 0px rgba(255,255,255, 0.94) , 1248px 478px 0 0px rgba(255,255,255, 0.096) , 1362px 283px 0 0px rgba(255,255,255, 0.45) , 1458px 1289px 0 0px rgba(255,255,255, 0.05) , 1212px 1781px 0 0px rgba(255,255,255, 0.43) , 233px 242px 0 0px rgba(255,255,255, 0.43) , 1345px 1724px 0 0px rgba(255,255,255, 0.591) , 663px 1679px 0 0px rgba(255,255,255, 0.566) , 509px 1088px 0 0px rgba(255,255,255, 0.038) , 1029px 1188px 0 0px rgba(255,255,255, 0.933) , 751px 1432px 0 0px rgba(255,255,255, 0.518) , 174px 1331px 0 0px rgba(255,255,255, 0.217) , 1318px 194px 0 0px rgba(255,255,255, 0.873) , 1684px 937px 0 0px rgba(255,255,255, 0.331) , 262px 545px 0 0px rgba(255,255,255, 0.676) , 950px 624px 0 0px rgba(255,255,255, 0.782) , 721px 1125px 0 0px rgba(255,255,255, 0.362) , 685px 1542px 0 0px rgba(255,255,255, 0.005) , 700px 1029px 0 0px rgba(255,255,255, 0.213) , 706px 725px 0 0px rgba(255,255,255, 0.715) , 504px 152px 0 0px rgba(255,255,255, 0.794) , 1626px 1335px 0 0px rgba(255,255,255, 0.953) , 1402px 1572px 0 0px rgba(255,255,255, 0.675) , 768px 479px 0 0px rgba(255,255,255, 0.563) , 481px 1339px 0 0px rgba(255,255,255, 0.249) , 151px 924px 0 0px rgba(255,255,255, 0.871) , 312px 464px 0 0px rgba(255,255,255, 0.55) , 1368px 601px 0 0px rgba(255,255,255, 0.818) , 176px 1795px 0 0px rgba(255,255,255, 0.216) , 1666px 1540px 0 0px rgba(255,255,255, 0.794) , 1347px 722px 0 0px rgba(255,255,255, 0.535) , 834px 1286px 0 0px rgba(255,255,255, 0.706) , 1136px 425px 0 0px rgba(255,255,255, 0.221) , 710px 1408px 0 0px rgba(255,255,255, 0.525) , 535px 262px 0 0px rgba(255,255,255, 0.307) , 1127px 1219px 0 0px rgba(255,255,255, 0.479) , 524px 548px 0 0px rgba(255,255,255, 0.084) , 211px 292px 0 0px rgba(255,255,255, 0.841) , 438px 393px 0 0px rgba(255,255,255, 0.96) , 710px 797px 0 0px rgba(255,255,255, 0.785) , 586px 1729px 0 0px rgba(255,255,255, 0.848) , 991px 12px 0 0px rgba(255,255,255, 0.407) , 809px 1785px 0 0px rgba(255,255,255, 0.079) , 1561px 441px 0 0px rgba(255,255,255, 0.045) , 1321px 1018px 0 0px rgba(255,255,255, 0.817) , 979px 468px 0 0px rgba(255,255,255, 0.285) , 1374px 866px 0 0px rgba(255,255,255, 0.303) , 1227px 33px 0 0px rgba(255,255,255, 0.365) , 588px 125px 0 0px rgba(255,255,255, 0.741) , 1167px 1676px 0 0px rgba(255,255,255, 0.154) , 788px 1396px 0 0px rgba(255,255,255, 0.042) , 1118px 1247px 0 0px rgba(255,255,255, 0.135) , 1250px 613px 0 0px rgba(255,255,255, 0.552) , 722px 1221px 0 0px rgba(255,255,255, 0.39) , 586px 1694px 0 0px rgba(255,255,255, 0.954) , 750px 963px 0 0px rgba(255,255,255, 0.482) , 242px 102px 0 0px rgba(255,255,255, 0.045) , 940px 476px 0 0px rgba(255,255,255, 0.952) , 100px 1254px 0 0px rgba(255,255,255, 0.077) , 258px 1332px 0 0px rgba(255,255,255, 0.234) , 346px 567px 0 0px rgba(255,255,255, 0.061) , 857px 372px 0 0px rgba(255,255,255, 0.33) , 1486px 457px 0 0px rgba(255,255,255, 0.808) , 465px 659px 0 0px rgba(255,255,255, 0.842) , 431px 1187px 0 0px rgba(255,255,255, 0.273) , 1650px 1268px 0 0px rgba(255,255,255, 0.763) , 514px 1612px 0 0px rgba(255,255,255, 0.529) , 1537px 1207px 0 0px rgba(255,255,255, 0.637) , 466px 1751px 0 0px rgba(255,255,255, 0.334) , 522px 969px 0 0px rgba(255,255,255, 0.1) , 921px 334px 0 0px rgba(255,255,255, 0.876) , 673px 1401px 0 0px rgba(255,255,255, 0.253) , 1252px 1308px 0 0px rgba(255,255,255, 0.422) , 535px 987px 0 0px rgba(255,255,255, 0.563) , 941px 1227px 0 0px rgba(255,255,255, 0.69) , 1470px 1674px 0 0px rgba(255,255,255, 0.983) , 521px 1074px 0 0px rgba(255,255,255, 0.035) , 911px 705px 0 0px rgba(255,255,255, 0.287) , 1561px 1061px 0 0px rgba(255,255,255, 0.458) , 1794px 1262px 0 0px rgba(255,255,255, 0.554) , 693px 1437px 0 0px rgba(255,255,255, 0.431) , 1324px 376px 0 0px rgba(255,255,255, 0.654) , 1399px 1475px 0 0px rgba(255,255,255, 0.787) , 1586px 640px 0 0px rgba(255,255,255, 0.949) , 1099px 1582px 0 0px rgba(255,255,255, 0.519) , 1276px 1493px 0 0px rgba(255,255,255, 0.892) , 34px 223px 0 0px rgba(255,255,255, 0.431) , 1617px 118px 0 0px rgba(255,255,255, 0.817) , 291px 350px 0 0px rgba(255,255,255, 0.609) , 403px 23px 0 0px rgba(255,255,255, 0.667) , 671px 1244px 0 0px rgba(255,255,255, 0.584) , 1325px 558px 0 0px rgba(255,255,255, 0.179) , 1738px 818px 0 0px rgba(255,255,255, 0.913) , 1750px 1216px 0 0px rgba(255,255,255, 0.2) , 829px 462px 0 0px rgba(255,255,255, 0.623) , 144px 1533px 0 0px rgba(255,255,255, 0.561) , 952px 1134px 0 0px rgba(255,255,255, 0.069) , 217px 615px 0 0px rgba(255,255,255, 0.309) , 149px 1339px 0 0px rgba(255,255,255, 0.741) , 670px 317px 0 0px rgba(255,255,255, 0.186) , 1355px 908px 0 0px rgba(255,255,255, 0.893) , 551px 1445px 0 0px rgba(255,255,255, 0.269) , 1444px 949px 0 0px rgba(255,255,255, 0.454) , 1778px 1644px 0 0px rgba(255,255,255, 0.207) , 683px 713px 0 0px rgba(255,255,255, 0.235) , 410px 238px 0 0px rgba(255,255,255, 0.591) , 209px 1791px 0 0px rgba(255,255,255, 0.912) , 153px 1179px 0 0px rgba(255,255,255, 0.49) , 517px 132px 0 0px rgba(255,255,255, 0.775) , 1265px 956px 0 0px rgba(255,255,255, 0.315) , 78px 47px 0 0px rgba(255,255,255, 0.032) , 455px 1019px 0 0px rgba(255,255,255, 0.811) , 1210px 221px 0 0px rgba(255,255,255, 0.976) , 1078px 1209px 0 0px rgba(255,255,255, 0.144) , 952px 1466px 0 0px rgba(255,255,255, 0.465) , 353px 1413px 0 0px rgba(255,255,255, 0.741) , 499px 368px 0 0px rgba(255,255,255, 0.347) , 1444px 202px 0 0px rgba(255,255,255, 0.193) , 109px 650px 0 0px rgba(255,255,255, 0.721) , 26px 654px 0 0px rgba(255,255,255, 0.223) , 1307px 1413px 0 0px rgba(255,255,255, 0.303) , 752px 1021px 0 0px rgba(255,255,255, 0.19) , 244px 1161px 0 0px rgba(255,255,255, 0.305) , 577px 1772px 0 0px rgba(255,255,255, 0.004) , 399px 1341px 0 0px rgba(255,255,255, 0.856) , 36px 462px 0 0px rgba(255,255,255, 0.367) , 745px 1618px 0 0px rgba(255,255,255, 0.742) , 1156px 1572px 0 0px rgba(255,255,255, 0.587) , 844px 313px 0 0px rgba(255,255,255, 0.484) , 85px 1138px 0 0px rgba(255,255,255, 0.833) , 775px 539px 0 0px rgba(255,255,255, 0.507) , 1711px 134px 0 0px rgba(255,255,255, 0.754) , 1060px 201px 0 0px rgba(255,255,255, 0.178) , 602px 119px 0 0px rgba(255,255,255, 0.482) , 1414px 381px 0 0px rgba(255,255,255, 0.775) , 1778px 1366px 0 0px rgba(255,255,255, 0.755) , 544px 1793px 0 0px rgba(255,255,255, 0.992) , 1608px 1056px 0 0px rgba(255,255,255, 0.63) , 753px 669px 0 0px rgba(255,255,255, 0.752) , 595px 1092px 0 0px rgba(255,255,255, 0.305) , 1316px 221px 0 0px rgba(255,255,255, 0.142) , 735px 935px 0 0px rgba(255,255,255, 0.195) , 119px 397px 0 0px rgba(255,255,255, 0.294) , 1523px 1159px 0 0px rgba(255,255,255, 0.576) , 966px 1704px 0 0px rgba(255,255,255, 0.956) , 1572px 1118px 0 0px rgba(255,255,255, 0.62) , 947px 257px 0 0px rgba(255,255,255, 0.603) , 162px 869px 0 0px rgba(255,255,255, 0.928) , 1376px 1354px 0 0px rgba(255,255,255, 0.5) , 1763px 1757px 0 0px rgba(255,255,255, 0.862) , 1616px 1399px 0 0px rgba(255,255,255, 0.372) , 1190px 1612px 0 0px rgba(255,255,255, 0.28) , 974px 186px 0 0px rgba(255,255,255, 0.721) , 856px 1169px 0 0px rgba(255,255,255, 0.238) , 226px 818px 0 0px rgba(255,255,255, 0.492) , 1367px 1533px 0 0px rgba(255,255,255, 0.207) , 1257px 189px 0 0px rgba(255,255,255, 0.382) , 879px 1090px 0 0px rgba(255,255,255, 0.436) , 1156px 992px 0 0px rgba(255,255,255, 0.351) , 25px 1115px 0 0px rgba(255,255,255, 0.533) , 27px 1573px 0 0px rgba(255,255,255, 0.466) , 313px 1058px 0 0px rgba(255,255,255, 0.782) , 62px 803px 0 0px rgba(255,255,255, 0.094) , 1058px 1121px 0 0px rgba(255,255,255, 0.649) , 541px 218px 0 0px rgba(255,255,255, 0.527) , 1681px 1210px 0 0px rgba(255,255,255, 0.401) , 769px 1694px 0 0px rgba(255,255,255, 0.299) , 325px 930px 0 0px rgba(255,255,255, 0.827) , 726px 1248px 0 0px rgba(255,255,255, 0.412) , 1050px 1293px 0 0px rgba(255,255,255, 0.79) , 1253px 355px 0 0px rgba(255,255,255, 0.878) , 1129px 469px 0 0px rgba(255,255,255, 0.385) , 834px 1021px 0 0px rgba(255,255,255, 0.172) , 1732px 586px 0 0px rgba(255,255,255, 0.289) , 262px 816px 0 0px rgba(255,255,255, 0.563) , 545px 269px 0 0px rgba(255,255,255, 0.151) , 504px 630px 0 0px rgba(255,255,255, 0.904) , 197px 1280px 0 0px rgba(255,255,255, 0.428) , 1696px 345px 0 0px rgba(255,255,255, 0.822) , 961px 1003px 0 0px rgba(255,255,255, 0.395) , 830px 650px 0 0px rgba(255,255,255, 0.781) , 1498px 786px 0 0px rgba(255,255,255, 0.101) , 698px 632px 0 0px rgba(255,255,255, 0.572) , 961px 1057px 0 0px rgba(255,255,255, 0.321) , 488px 356px 0 0px rgba(255,255,255, 0.515) , 581px 1591px 0 0px rgba(255,255,255, 0.712) , 220px 529px 0 0px rgba(255,255,255, 0.387) , 1613px 1171px 0 0px rgba(255,255,255, 0.643) , 827px 1648px 0 0px rgba(255,255,255, 0.497) , 1628px 1467px 0 0px rgba(255,255,255, 0.625) , 612px 375px 0 0px rgba(255,255,255, 0.782) , 1781px 26px 0 0px rgba(255,255,255, 0.411) , 497px 1565px 0 0px rgba(255,255,255, 0.075) , 1604px 1274px 0 0px rgba(255,255,255, 0.736) , 66px 1763px 0 0px rgba(255,255,255, 0.29) , 920px 1015px 0 0px rgba(255,255,255, 0.329) , 677px 481px 0 0px rgba(255,255,255, 0.187) , 1108px 1737px 0 0px rgba(255,255,255, 0.59) , 982px 177px 0 0px rgba(255,255,255, 0.213) , 398px 1658px 0 0px rgba(255,255,255, 0.473) , 1085px 1453px 0 0px rgba(255,255,255, 0.794) , 161px 305px 0 0px rgba(255,255,255, 0.444) , 622px 413px 0 0px rgba(255,255,255, 0.737) , 862px 198px 0 0px rgba(255,255,255, 0.367) , 44px 785px 0 0px rgba(255,255,255, 0.208) , 1489px 215px 0 0px rgba(255,255,255, 0.282) , 1429px 254px 0 0px rgba(255,255,255, 0.38) , 393px 427px 0 0px rgba(255,255,255, 0.05) , 1737px 758px 0 0px rgba(255,255,255, 0.445) , 709px 1088px 0 0px rgba(255,255,255, 0.807) , 1240px 709px 0 0px rgba(255,255,255, 0.129) , 1100px 1338px 0 0px rgba(255,255,255, 0.615) , 1094px 309px 0 0px rgba(255,255,255, 0.464) , 1059px 1186px 0 0px rgba(255,255,255, 0.941) , 53px 1503px 0 0px rgba(255,255,255, 0.99) , 1305px 239px 0 0px rgba(255,255,255, 0.025) , 1311px 1661px 0 0px rgba(255,255,255, 0.547) , 1470px 1483px 0 0px rgba(255,255,255, 0.502) , 832px 402px 0 0px rgba(255,255,255, 0.684) , 169px 1009px 0 0px rgba(255,255,255, 0.752) , 282px 284px 0 0px rgba(255,255,255, 0.769) , 811px 780px 0 0px rgba(255,255,255, 0.042) , 1405px 586px 0 0px rgba(255,255,255, 0.634) , 802px 583px 0 0px rgba(255,255,255, 0.387) , 1229px 570px 0 0px rgba(255,255,255, 0.249) , 529px 772px 0 0px rgba(255,255,255, 0.337) , 1085px 32px 0 0px rgba(255,255,255, 0.079) , 1381px 528px 0 0px rgba(255,255,255, 0.972) , 445px 1343px 0 0px rgba(255,255,255, 0.246) , 1508px 373px 0 0px rgba(255,255,255, 0.16) , 1742px 599px 0 0px rgba(255,255,255, 0.246) , 1010px 1177px 0 0px rgba(255,255,255, 0.631) , 641px 200px 0 0px rgba(255,255,255, 0.914) , 1526px 927px 0 0px rgba(255,255,255, 0.367) , 789px 863px 0 0px rgba(255,255,255, 0.5) , 260px 1403px 0 0px rgba(255,255,255, 0.867) , 146px 1400px 0 0px rgba(255,255,255, 0.098) , 1717px 454px 0 0px rgba(255,255,255, 0.309) , 1752px 32px 0 0px rgba(255,255,255, 0.16) , 1791px 1316px 0 0px rgba(255,255,255, 0.112) , 798px 874px 0 0px rgba(255,255,255, 0.93) , 1051px 948px 0 0px rgba(255,255,255, 0.572) , 1092px 1763px 0 0px rgba(255,255,255, 0.736) , 429px 1575px 0 0px rgba(255,255,255, 0.191) , 274px 1327px 0 0px rgba(255,255,255, 0.256) , 1456px 588px 0 0px rgba(255,255,255, 0.1) , 54px 938px 0 0px rgba(255,255,255, 0.725) , 149px 13px 0 0px rgba(255,255,255, 0.085) , 600px 777px 0 0px rgba(255,255,255, 0.478) , 506px 1418px 0 0px rgba(255,255,255, 0.295) , 1784px 1463px 0 0px rgba(255,255,255, 0.782) , 1436px 434px 0 0px rgba(255,255,255, 0.915) , 1274px 1255px 0 0px rgba(255,255,255, 0.809) , 1761px 1123px 0 0px rgba(255,255,255, 0.902) , 972px 77px 0 0px rgba(255,255,255, 0.001) , 1332px 1130px 0 0px rgba(255,255,255, 0.433) , 287px 739px 0 0px rgba(255,255,255, 0.466) , 1171px 234px 0 0px rgba(255,255,255, 0.913) , 118px 102px 0 0px rgba(255,255,255, 0.656) , 548px 678px 0 0px rgba(255,255,255, 0.721) , 448px 816px 0 0px rgba(255,255,255, 0.576) , 1149px 476px 0 0px rgba(255,255,255, 0.089) , 742px 681px 0 0px rgba(255,255,255, 0.833) , 1388px 71px 0 0px rgba(255,255,255, 0.175) , 1259px 1745px 0 0px rgba(255,255,255, 0.948) , 1010px 1267px 0 0px rgba(255,255,255, 0.075) , 1718px 783px 0 0px rgba(255,255,255, 0.903) , 166px 170px 0 0px rgba(255,255,255, 0.337) , 1234px 1251px 0 0px rgba(255,255,255, 0.438) , 636px 686px 0 0px rgba(255,255,255, 0.966) , 1643px 848px 0 0px rgba(255,255,255, 0.411) , 839px 1130px 0 0px rgba(255,255,255, 0.304) , 659px 1766px 0 0px rgba(255,255,255, 0.435) , 362px 1333px 0 0px rgba(255,255,255, 0.404) , 1702px 1288px 0 0px rgba(255,255,255, 0.482) , 1251px 1548px 0 0px rgba(255,255,255, 0.957) , 1374px 923px 0 0px rgba(255,255,255, 0.749) , 1428px 1389px 0 0px rgba(255,255,255, 0.899) , 1762px 1786px 0 0px rgba(255,255,255, 0.224) , 990px 1171px 0 0px rgba(255,255,255, 0.022) , 712px 243px 0 0px rgba(255,255,255, 0.897) , 1603px 423px 0 0px rgba(255,255,255, 0.352) , 1108px 1797px 0 0px rgba(255,255,255, 0.57) , 219px 868px 0 0px rgba(255,255,255, 0.085) , 1444px 1225px 0 0px rgba(255,255,255, 0.397) , 1746px 759px 0 0px rgba(255,255,255, 0.005) , 1542px 766px 0 0px rgba(255,255,255, 0.979) , 485px 332px 0 0px rgba(255,255,255, 0.758) , 1684px 528px 0 0px rgba(255,255,255, 0.528) , 857px 344px 0 0px rgba(255,255,255, 0.581) , 673px 764px 0 0px rgba(255,255,255, 0.266) , 559px 82px 0 0px rgba(255,255,255, 0.99) , 408px 1382px 0 0px rgba(255,255,255, 0.031) , 998px 372px 0 0px rgba(255,255,255, 0.466) , 1741px 153px 0 0px rgba(255,255,255, 0.226) , 1041px 1166px 0 0px rgba(255,255,255, 0.58) , 1449px 851px 0 0px rgba(255,255,255, 0.997) , 1629px 330px 0 0px rgba(255,255,255, 0.907) , 1222px 1777px 0 0px rgba(255,255,255, 0.085) , 398px 1445px 0 0px rgba(255,255,255, 0.106) , 890px 1364px 0 0px rgba(255,255,255, 0.015) , 1319px 19px 0 0px rgba(255,255,255, 0.734) , 1033px 804px 0 0px rgba(255,255,255, 0.773) , 1719px 222px 0 0px rgba(255,255,255, 0.672) , 702px 614px 0 0px rgba(255,255,255, 0.317) , 1656px 1598px 0 0px rgba(255,255,255, 0.06) , 931px 1628px 0 0px rgba(255,255,255, 0.728) , 1291px 178px 0 0px rgba(255,255,255, 0.535) , 396px 896px 0 0px rgba(255,255,255, 0.079) , 879px 1228px 0 0px rgba(255,255,255, 0.528) , 1715px 1766px 0 0px rgba(255,255,255, 0.625) , 752px 1094px 0 0px rgba(255,255,255, 0.58) , 1623px 1660px 0 0px rgba(255,255,255, 0.703) , 929px 1329px 0 0px rgba(255,255,255, 0.19) , 155px 1354px 0 0px rgba(255,255,255, 0.58) , 1632px 1055px 0 0px rgba(255,255,255, 0.652) , 523px 1064px 0 0px rgba(255,255,255, 0.898) , 163px 1655px 0 0px rgba(255,255,255, 0.399) , 1645px 226px 0 0px rgba(255,255,255, 0.337) , 1439px 1654px 0 0px rgba(255,255,255, 0.705) , 1690px 973px 0 0px rgba(255,255,255, 0.209) , 1730px 1591px 0 0px rgba(255,255,255, 0.358) , 388px 1168px 0 0px rgba(255,255,255, 0.545) , 322px 780px 0 0px rgba(255,255,255, 0.784) , 206px 495px 0 0px rgba(255,255,255, 0.121) , 394px 384px 0 0px rgba(255,255,255, 0.849) , 117px 674px 0 0px rgba(255,255,255, 0.808) , 1308px 387px 0 0px rgba(255,255,255, 0.732) , 264px 773px 0 0px rgba(255,255,255, 0.343) , 1106px 1669px 0 0px rgba(255,255,255, 0.72) , 179px 1392px 0 0px rgba(255,255,255, 0.674) , 1702px 1413px 0 0px rgba(255,255,255, 0.624) , 10px 208px 0 0px rgba(255,255,255, 0.636) , 1621px 57px 0 0px rgba(255,255,255, 0.319) , 361px 987px 0 0px rgba(255,255,255, 0.294) , 70px 963px 0 0px rgba(255,255,255, 0.097) , 872px 451px 0 0px rgba(255,255,255, 0.916) , 99px 31px 0 0px rgba(255,255,255, 0.776) , 614px 153px 0 0px rgba(255,255,255, 0.798) , 1047px 497px 0 0px rgba(255,255,255, 0.977) , 767px 826px 0 0px rgba(255,255,255, 0.009) , 1604px 9px 0 0px rgba(255,255,255, 0.129) , 379px 564px 0 0px rgba(255,255,255, 0.249) , 1092px 418px 0 0px rgba(255,255,255, 0.21) , 1279px 1395px 0 0px rgba(255,255,255, 0.003);
  border-radius: 100px;
}
.solar-syst div {
  border-radius: 1000px;
  top: 50%;
  left: 50%;
  position: absolute;
  z-index: 999;
}
.solar-syst div:not(.sun) {
  border: 1px solid rgba(102, 166, 229, 0.12);
}
.solar-syst div:not(.sun):before {
  left: 50%;
  border-radius: 100px;
  content: "";
  position: absolute;
}
.solar-syst div:not(.asteroids-belt):before {
  box-shadow: inset 0 6px 0 -2px rgba(0, 0, 0, 0.25);
}

.sun {
  background: radial-gradient(ellipse at center, #ffd000 1%, #f9b700 39%, #f9b700 39%, #e06317 100%);
  height: 40px;
  width: 40px;
  margin-top: -20px;
  margin-left: -20px;
  background-clip: padding-box;
  border: 0 !important;
  background-position: -28px -103px;
  background-size: 175%;
  box-shadow: 0 0 10px 2px rgba(255, 107, 0, 0.4), 0 0 22px 11px rgba(255, 203, 0, 0.13);
}

.mercury {
  height: 70px;
  width: 70px;
  margin-top: -35px;
  margin-left: -35px;
  -webkit-animation: orb 7.1867343561s linear infinite;
          animation: orb 7.1867343561s linear infinite;
}
.mercury:before {
  height: 4px;
  width: 4px;
  background: #9f5e26;
  margin-top: -2px;
  margin-left: -2px;
}

.venus {
  height: 100px;
  width: 100px;
  margin-top: -50px;
  margin-left: -50px;
  -webkit-animation: orb 18.4555338265s linear infinite;
          animation: orb 18.4555338265s linear infinite;
}
.venus:before {
  height: 8px;
  width: 8px;
  background: #BEB768;
  margin-top: -4px;
  margin-left: -4px;
}

.earth {
  height: 145px;
  width: 145px;
  margin-top: -72.5px;
  margin-left: -72.5px;
  -webkit-animation: orb 30s linear infinite;
          animation: orb 30s linear infinite;
}
.earth:before {
  height: 6px;
  width: 6px;
  background: #11abe9;
  margin-top: -3px;
  margin-left: -3px;
}
.earth:after {
  position: absolute;
  content: "";
  height: 18px;
  width: 18px;
  left: 50%;
  top: 0px;
  margin-left: -9px;
  margin-top: -9px;
  border-radius: 100px;
  box-shadow: 0 -10px 0 -8px grey;
  -webkit-animation: orb 2.2440352158s linear infinite;
          animation: orb 2.2440352158s linear infinite;
}

.mars {
  height: 190px;
  width: 190px;
  margin-top: -95px;
  margin-left: -95px;
  -webkit-animation: orb 56.4261314589s linear infinite;
          animation: orb 56.4261314589s linear infinite;
}
.mars:before {
  height: 6px;
  width: 6px;
  background: #cf3921;
  margin-top: -3px;
  margin-left: -3px;
}

.jupiter {
  height: 340px;
  width: 340px;
  margin-top: -170px;
  margin-left: -170px;
  -webkit-animation: orb 355.7228171013s linear infinite;
          animation: orb 355.7228171013s linear infinite;
}
.jupiter:before {
  height: 18px;
  width: 18px;
  background: #c76e2a;
  margin-top: -9px;
  margin-left: -9px;
}

.saturn {
  height: 440px;
  width: 440px;
  margin-top: -220px;
  margin-left: -220px;
  -webkit-animation: orb 882.6952471456s linear infinite;
          animation: orb 882.6952471456s linear infinite;
}
.saturn:before {
  height: 12px;
  width: 12px;
  background: #e7c194;
  margin-top: -6px;
  margin-left: -6px;
}
.saturn:after {
  position: absolute;
  content: "";
  height: 2.34%;
  width: 4.676%;
  left: 50%;
  top: 0px;
  -webkit-transform: rotateZ(-52deg);
          transform: rotateZ(-52deg);
  margin-left: -2.3%;
  margin-top: -1.2%;
  border-radius: 50% 50% 50% 50%;
  box-shadow: 0 1px 0 1px #987641, 3px 1px 0 #987641, -3px 1px 0 #987641;
  -webkit-animation: orb 882.6952471456s linear infinite;
          animation: orb 882.6952471456s linear infinite;
  animation-direction: reverse;
  -webkit-transform-origin: 52% 60%;
          transform-origin: 52% 60%;
}

.uranus {
  height: 520px;
  width: 520px;
  margin-top: -260px;
  margin-left: -260px;
  -webkit-animation: orb 2512.4001967933s linear infinite;
          animation: orb 2512.4001967933s linear infinite;
}
.uranus:before {
  height: 10px;
  width: 10px;
  background: #b5e3e3;
  margin-top: -5px;
  margin-left: -5px;
}

.neptune {
  height: 630px;
  width: 630px;
  margin-top: -315px;
  margin-left: -315px;
  -webkit-animation: orb 4911.7838624549s linear infinite;
          animation: orb 4911.7838624549s linear infinite;
}
.neptune:before {
  height: 10px;
  width: 10px;
  background: #175e9e;
  margin-top: -5px;
  margin-left: -5px;
}

.asteroids-belt {
  opacity: .7;
  border-color: transparent !important;
  height: 300px;
  width: 300px;
  margin-top: -150px;
  margin-left: -150px;
  -webkit-animation: orb 179.9558282773s linear infinite;
          animation: orb 179.9558282773s linear infinite;
  overflow: hidden;
}
.asteroids-belt:before {
  top: 50%;
  height: 210px;
  width: 210px;
  margin-left: -105px;
  margin-top: -105px;
  background: transparent;
  border-radius: 140px !important;
  box-shadow: 62px -131px 0 -104px rgba(255, 255, 255, 0.643) , 80px -11px 0 -104px rgba(255,255,255, 0.411) , 73px 87px 0 -104px rgba(255,255,255, 0.065) , -119px 94px 0 -104px rgba(255,255,255, 0.69) , 15px 134px 0 -104px rgba(255,255,255, 0.905) , 94px 29px 0 -104px rgba(255,255,255, 0.81) , 112px -105px 0 -104px rgba(255,255,255, 0.358) , 144px 129px 0 -104px rgba(255,255,255, 0.217) , -61px -13px 0 -104px rgba(255,255,255, 0.893) , 86px -87px 0 -104px rgba(255,255,255, 0.835) , 137px -60px 0 -104px rgba(255,255,255, 0.548) , 83px 44px 0 -104px rgba(255,255,255, 0.726) , 94px 28px 0 -104px rgba(255,255,255, 0.235) , 130px -117px 0 -104px rgba(255,255,255, 0.245) , -45px -142px 0 -104px rgba(255,255,255, 0.432) , -103px -118px 0 -104px rgba(255,255,255, 0.389) , -70px 112px 0 -104px rgba(255,255,255, 0.188) , 99px -116px 0 -104px rgba(255,255,255, 0.731) , -78px -89px 0 -104px rgba(255,255,255, 0.475) , 138px 26px 0 -104px rgba(255,255,255, 0.372) , -117px -11px 0 -104px rgba(255,255,255, 0.875) , 29px 55px 0 -104px rgba(255,255,255, 0.747) , -130px 129px 0 -104px rgba(255,255,255, 0.692) , -42px 19px 0 -104px rgba(255,255,255, 0.802) , 66px -70px 0 -104px rgba(255,255,255, 0.334) , 75px -54px 0 -104px rgba(255,255,255, 0.621) , 32px 41px 0 -104px rgba(255,255,255, 0.263) , 143px -133px 0 -104px rgba(255,255,255, 0.312) , -60px -143px 0 -104px rgba(255,255,255, 0.485) , 33px -123px 0 -104px rgba(255,255,255, 0.517) , 2px 86px 0 -104px rgba(255,255,255, 0.808) , 83px -22px 0 -104px rgba(255,255,255, 0.146) , -106px -63px 0 -104px rgba(255,255,255, 0.614) , 13px -120px 0 -104px rgba(255,255,255, 0.09) , 19px 138px 0 -104px rgba(255,255,255, 0.992) , 104px 30px 0 -104px rgba(255,255,255, 0.258) , -115px -99px 0 -104px rgba(255,255,255, 0.866) , -6px -8px 0 -104px rgba(255,255,255, 0.342) , -13px -30px 0 -104px rgba(255,255,255, 0.028) , 9px -135px 0 -104px rgba(255,255,255, 0.151) , -121px -57px 0 -104px rgba(255,255,255, 0.957) , 37px 1px 0 -104px rgba(255,255,255, 0.179) , 129px -81px 0 -104px rgba(255,255,255, 0.747) , -43px 127px 0 -104px rgba(255,255,255, 0.076) , -118px 134px 0 -104px rgba(255,255,255, 0.647) , 30px 135px 0 -104px rgba(255,255,255, 0.068) , 134px 51px 0 -104px rgba(255,255,255, 0.366) , -53px -100px 0 -104px rgba(255,255,255, 0.695) , -54px 87px 0 -104px rgba(255,255,255, 0.765) , 62px -65px 0 -104px rgba(255,255,255, 0.061) , 138px 42px 0 -104px rgba(255,255,255, 0.424) , -136px -98px 0 -104px rgba(255,255,255, 0.596) , 57px 83px 0 -104px rgba(255,255,255, 0.034) , 140px -51px 0 -104px rgba(255,255,255, 0.979) , 94px 106px 0 -104px rgba(255,255,255, 0.439) , 1px 74px 0 -104px rgba(255,255,255, 0.539) , 80px -57px 0 -104px rgba(255,255,255, 0.37) , -45px 5px 0 -104px rgba(255,255,255, 0.113) , 120px 101px 0 -104px rgba(255,255,255, 0.503) , -28px -142px 0 -104px rgba(255,255,255, 0.836) , 112px 94px 0 -104px rgba(255,255,255, 0.787) , 17px -5px 0 -104px rgba(255,255,255, 0.756) , -24px 134px 0 -104px rgba(255,255,255, 0.267) , 109px -93px 0 -104px rgba(255,255,255, 0.074) , 137px -135px 0 -104px rgba(255,255,255, 0.092) , -105px 120px 0 -104px rgba(255,255,255, 0.617) , -133px 40px 0 -104px rgba(255,255,255, 0.865) , 61px 93px 0 -104px rgba(255,255,255, 0.928) , -55px -35px 0 -104px rgba(255,255,255, 0.23) , 41px -18px 0 -104px rgba(255,255,255, 0.613) , 36px 16px 0 -104px rgba(255,255,255, 0.539) , 53px -78px 0 -104px rgba(255,255,255, 0.238) , 32px 47px 0 -104px rgba(255,255,255, 0.302) , -98px -10px 0 -104px rgba(255,255,255, 0.135) , 21px -33px 0 -104px rgba(255,255,255, 0.996) , 111px 46px 0 -104px rgba(255,255,255, 0.754) , -133px -123px 0 -104px rgba(255,255,255, 0.02) , -25px 116px 0 -104px rgba(255,255,255, 0.446) , -131px -21px 0 -104px rgba(255,255,255, 0.015) , -34px -58px 0 -104px rgba(255,255,255, 0.035) , 126px -3px 0 -104px rgba(255,255,255, 0.711) , 40px 84px 0 -104px rgba(255,255,255, 0.35) , -61px 64px 0 -104px rgba(255,255,255, 0.812) , 70px -34px 0 -104px rgba(255,255,255, 0.512) , -51px -119px 0 -104px rgba(255,255,255, 0.458) , -86px -9px 0 -104px rgba(255,255,255, 0.296) , -57px 126px 0 -104px rgba(255,255,255, 0.14) , -120px -116px 0 -104px rgba(255,255,255, 0.534) , -140px -131px 0 -104px rgba(255,255,255, 0.772) , -10px 48px 0 -104px rgba(255,255,255, 0.948) , 32px 26px 0 -104px rgba(255,255,255, 0.751) , -144px -50px 0 -104px rgba(255,255,255, 0.204) , 92px -49px 0 -104px rgba(255,255,255, 0.535) , 73px 67px 0 -104px rgba(255,255,255, 0.319) , 122px -86px 0 -104px rgba(255,255,255, 0.757) , 14px -91px 0 -104px rgba(255,255,255, 0.777) , -80px -52px 0 -104px rgba(255,255,255, 0.208) , -80px 36px 0 -104px rgba(255,255,255, 0.87) , 97px 125px 0 -104px rgba(255,255,255, 0.489) , -22px 70px 0 -104px rgba(255,255,255, 0.277) , -11px -102px 0 -104px rgba(255,255,255, 0.266) , -93px 22px 0 -104px rgba(255,255,255, 0.021) , -55px -60px 0 -104px rgba(255,255,255, 0.796) , 36px 6px 0 -104px rgba(255,255,255, 0.931) , 142px 85px 0 -104px rgba(255,255,255, 0.962) , -4px 77px 0 -104px rgba(255,255,255, 0.472) , 3px 123px 0 -104px rgba(255,255,255, 0.767) , 102px 64px 0 -104px rgba(255,255,255, 0.798) , -57px -91px 0 -104px rgba(255,255,255, 0.881) , 46px 106px 0 -104px rgba(255,255,255, 0.912) , 36px 90px 0 -104px rgba(255,255,255, 0.044) , 76px -111px 0 -104px rgba(255,255,255, 0.885) , 27px -103px 0 -104px rgba(255,255,255, 0.983) , -80px -18px 0 -104px rgba(255,255,255, 0.816) , 36px 10px 0 -104px rgba(255,255,255, 0.032) , -122px 110px 0 -104px rgba(255,255,255, 0.828) , -127px 3px 0 -104px rgba(255,255,255, 0.951) , -33px -118px 0 -104px rgba(255,255,255, 0.445) , 68px 54px 0 -104px rgba(255,255,255, 0.937) , 131px -31px 0 -104px rgba(255,255,255, 0.116) , -5px 41px 0 -104px rgba(255,255,255, 0.164) , -33px -132px 0 -104px rgba(255,255,255, 0.205) , 56px 11px 0 -104px rgba(255,255,255, 0.533) , -43px 104px 0 -104px rgba(255,255,255, 0.885) , -105px -85px 0 -104px rgba(255,255,255, 0.419) , -16px 78px 0 -104px rgba(255,255,255, 0.37) , 62px 30px 0 -104px rgba(255,255,255, 0.92) , 34px 102px 0 -104px rgba(255,255,255, 0.334) , -64px 42px 0 -104px rgba(255,255,255, 0.574) , -8px -98px 0 -104px rgba(255,255,255, 0.373) , 109px -143px 0 -104px rgba(255,255,255, 0.534) , -43px -14px 0 -104px rgba(255,255,255, 0.841) , -135px 142px 0 -104px rgba(255,255,255, 0.003) , -102px -3px 0 -104px rgba(255,255,255, 0.982) , 143px -90px 0 -104px rgba(255,255,255, 0.614) , 33px 39px 0 -104px rgba(255,255,255, 0.398) , -4px 52px 0 -104px rgba(255,255,255, 0.336) , 72px 84px 0 -104px rgba(255,255,255, 0.861) , -86px 117px 0 -104px rgba(255,255,255, 0.828) , -97px -144px 0 -104px rgba(255,255,255, 0.604) , 74px 144px 0 -104px rgba(255,255,255, 0.205) , 134px 85px 0 -104px rgba(255,255,255, 0.415) , -106px -34px 0 -104px rgba(255,255,255, 0.136) , -110px -31px 0 -104px rgba(255,255,255, 0.633) , -75px -68px 0 -104px rgba(255,255,255, 0.93) , -53px 69px 0 -104px rgba(255,255,255, 0.762) , -30px 60px 0 -104px rgba(255,255,255, 0.696) , -7px -37px 0 -104px rgba(255,255,255, 0.232) , -30px 103px 0 -104px rgba(255,255,255, 0.933) , 84px 128px 0 -104px rgba(255,255,255, 0.539) , -84px -100px 0 -104px rgba(255,255,255, 0.641) , -96px -126px 0 -104px rgba(255,255,255, 0.117) , -72px -102px 0 -104px rgba(255,255,255, 0.88) , 58px 73px 0 -104px rgba(255,255,255, 0.372) , 22px -17px 0 -104px rgba(255,255,255, 0.742) , -100px 2px 0 -104px rgba(255,255,255, 0.558) , -79px -1px 0 -104px rgba(255,255,255, 0.13) , -36px -90px 0 -104px rgba(255,255,255, 0.061) , 22px -1px 0 -104px rgba(255,255,255, 0.968) , -79px -19px 0 -104px rgba(255,255,255, 0.806) , 91px 139px 0 -104px rgba(255,255,255, 0.485) , -37px 72px 0 -104px rgba(255,255,255, 0.921) , -48px 48px 0 -104px rgba(255,255,255, 0.802) , 49px 91px 0 -104px rgba(255,255,255, 0.708) , 118px -50px 0 -104px rgba(255,255,255, 0.728) , -84px -18px 0 -104px rgba(255,255,255, 0.364) , 89px 65px 0 -104px rgba(255,255,255, 0.412) , -93px 109px 0 -104px rgba(255,255,255, 0.36) , -39px 15px 0 -104px rgba(255,255,255, 0.267) , -104px -45px 0 -104px rgba(255,255,255, 0.772) , 123px 88px 0 -104px rgba(255,255,255, 0.337) , -39px 27px 0 -104px rgba(255,255,255, 0.576) , 100px 53px 0 -104px rgba(255,255,255, 0.587) , 53px 123px 0 -104px rgba(255,255,255, 0.578) , 41px -49px 0 -104px rgba(255,255,255, 0.479) , -58px 85px 0 -104px rgba(255,255,255, 0.529) , -133px 100px 0 -104px rgba(255,255,255, 0.42) , -75px 84px 0 -104px rgba(255,255,255, 0.561) , 139px -47px 0 -104px rgba(255,255,255, 0.091) , -21px -114px 0 -104px rgba(255,255,255, 0.218) , -133px 76px 0 -104px rgba(255,255,255, 0.266) , 22px 56px 0 -104px rgba(255,255,255, 0.072) , -8px 47px 0 -104px rgba(255,255,255, 0.489) , -98px -70px 0 -104px rgba(255,255,255, 0.403) , 115px -73px 0 -104px rgba(255,255,255, 0.027) , 118px -62px 0 -104px rgba(255,255,255, 0.366) , 13px 23px 0 -104px rgba(255,255,255, 0.333) , 107px -40px 0 -104px rgba(255,255,255, 0.541) , 120px 116px 0 -104px rgba(255,255,255, 0.624) , 117px 18px 0 -104px rgba(255,255,255, 0.692) , 31px -132px 0 -104px rgba(255,255,255, 0.836) , -88px 112px 0 -104px rgba(255,255,255, 0.185) , 13px 132px 0 -104px rgba(255,255,255, 0.046) , 53px -56px 0 -104px rgba(255,255,255, 0.01) , 34px 56px 0 -104px rgba(255,255,255, 0.862) , 116px -50px 0 -104px rgba(255,255,255, 0.22) , 37px -105px 0 -104px rgba(255,255,255, 0.949) , -100px 110px 0 -104px rgba(255,255,255, 0.933) , 106px 25px 0 -104px rgba(255,255,255, 0.848) , -71px -85px 0 -104px rgba(255,255,255, 0.571) , 13px 124px 0 -104px rgba(255,255,255, 0.425) , 52px 65px 0 -104px rgba(255,255,255, 0.226) , -92px 138px 0 -104px rgba(255,255,255, 0.87) , -22px -34px 0 -104px rgba(255,255,255, 0.296) , 36px 71px 0 -104px rgba(255,255,255, 0.218) , 66px 69px 0 -104px rgba(255,255,255, 0.604) , 49px 36px 0 -104px rgba(255,255,255, 0.737) , -89px 113px 0 -104px rgba(255,255,255, 0.961) , -120px -115px 0 -104px rgba(255,255,255, 0.241) , -134px -91px 0 -104px rgba(255,255,255, 0.758) , 39px -87px 0 -104px rgba(255,255,255, 0.327) , -4px 101px 0 -104px rgba(255,255,255, 0.392) , 81px 133px 0 -104px rgba(255,255,255, 0.112) , 25px -111px 0 -104px rgba(255,255,255, 0.258) , 35px -69px 0 -104px rgba(255,255,255, 0.176) , 70px 143px 0 -104px rgba(255,255,255, 0.166) , 75px -137px 0 -104px rgba(255,255,255, 0.604) , 106px 110px 0 -104px rgba(255,255,255, 0.624) , -89px 136px 0 -104px rgba(255,255,255, 0.536) , -55px 62px 0 -104px rgba(255,255,255, 0.28) , 16px 107px 0 -104px rgba(255,255,255, 0.471) , -106px -4px 0 -104px rgba(255,255,255, 0.515) , 15px 126px 0 -104px rgba(255,255,255, 0.568) , -139px 69px 0 -104px rgba(255,255,255, 0.976) , 61px -101px 0 -104px rgba(255,255,255, 0.647) , -87px 86px 0 -104px rgba(255,255,255, 0.739) , 23px 120px 0 -104px rgba(255,255,255, 0.59) , 130px -22px 0 -104px rgba(255,255,255, 0.413) , 77px -135px 0 -104px rgba(255,255,255, 0.115) , 88px 72px 0 -104px rgba(255,255,255, 0.611) , -67px 7px 0 -104px rgba(255,255,255, 0.663) , 31px 39px 0 -104px rgba(255,255,255, 0.133) , 25px 66px 0 -104px rgba(255,255,255, 0.168) , 113px 78px 0 -104px rgba(255,255,255, 0.157) , 15px 145px 0 -104px rgba(255,255,255, 0.53) , -45px -114px 0 -104px rgba(255,255,255, 0.651) , -140px -12px 0 -104px rgba(255,255,255, 0.147) , 54px -93px 0 -104px rgba(255,255,255, 0.407) , 106px -86px 0 -104px rgba(255,255,255, 0.704) , 90px 98px 0 -104px rgba(255,255,255, 0.184) , -19px -52px 0 -104px rgba(255,255,255, 0.327) , 33px -48px 0 -104px rgba(255,255,255, 0.013) , 3px -101px 0 -104px rgba(255,255,255, 0.74) , -112px -3px 0 -104px rgba(255,255,255, 0.35) , 25px -38px 0 -104px rgba(255,255,255, 0.952) , -48px -82px 0 -104px rgba(255,255,255, 0.009) , -59px 67px 0 -104px rgba(255,255,255, 0.386) , 17px 109px 0 -104px rgba(255,255,255, 0.058) , 48px 123px 0 -104px rgba(255,255,255, 0.143) , 95px 88px 0 -104px rgba(255,255,255, 0.132) , -11px 59px 0 -104px rgba(255,255,255, 0.461) , -129px -42px 0 -104px rgba(255,255,255, 0.308) , -104px -79px 0 -104px rgba(255,255,255, 0.776) , -15px 35px 0 -104px rgba(255,255,255, 0.5) , 65px 3px 0 -104px rgba(255,255,255, 0.126) , 24px -15px 0 -104px rgba(255,255,255, 0.885) , 114px -65px 0 -104px rgba(255,255,255, 0.448) , -23px -65px 0 -104px rgba(255,255,255, 0.255) , -14px 35px 0 -104px rgba(255,255,255, 0.794) , -25px -99px 0 -104px rgba(255,255,255, 0.122) , -49px 42px 0 -104px rgba(255,255,255, 0.268) , 53px 15px 0 -104px rgba(255,255,255, 0.737) , -12px 115px 0 -104px rgba(255,255,255, 0.089) , 52px 73px 0 -104px rgba(255,255,255, 0.98) , 26px -82px 0 -104px rgba(255,255,255, 0.211) , -104px 36px 0 -104px rgba(255,255,255, 0.537) , -108px -122px 0 -104px rgba(255,255,255, 0.541) , -87px -132px 0 -104px rgba(255,255,255, 0.146) , -125px -93px 0 -104px rgba(255,255,255, 0.446) , 137px 144px 0 -104px rgba(255,255,255, 0.899) , -51px 37px 0 -104px rgba(255,255,255, 0.853) , -144px -12px 0 -104px rgba(255,255,255, 0.994) , -78px -108px 0 -104px rgba(255,255,255, 0.612) , 127px 90px 0 -104px rgba(255,255,255, 0.977) , -101px -72px 0 -104px rgba(255,255,255, 0.497) , 56px -4px 0 -104px rgba(255,255,255, 0.061) , -129px -85px 0 -104px rgba(255,255,255, 0.479) , -40px -58px 0 -104px rgba(255,255,255, 0.431) , -109px -76px 0 -104px rgba(255,255,255, 0.896) , 102px 45px 0 -104px rgba(255,255,255, 0.023) , 3px -53px 0 -104px rgba(255,255,255, 0.858) , 92px -2px 0 -104px rgba(255,255,255, 0.252) , -101px 20px 0 -104px rgba(255,255,255, 0.727) , 107px -33px 0 -104px rgba(255,255,255, 0.075) , -135px 120px 0 -104px rgba(255,255,255, 0.275) , -122px 140px 0 -104px rgba(255,255,255, 0.066) , -18px -97px 0 -104px rgba(255,255,255, 0.093) , 23px -120px 0 -104px rgba(255,255,255, 0.293) , -14px 108px 0 -104px rgba(255,255,255, 0.921) , 125px 97px 0 -104px rgba(255,255,255, 0.815) , 121px 9px 0 -104px rgba(255,255,255, 0.283) , 99px -67px 0 -104px rgba(255,255,255, 0.712) , -56px -91px 0 -104px rgba(255,255,255, 0.81) , 72px 2px 0 -104px rgba(255,255,255, 0.252) , 122px 111px 0 -104px rgba(255,255,255, 0.626) , -144px -74px 0 -104px rgba(255,255,255, 0.334) , 135px -100px 0 -104px rgba(255,255,255, 0.702) , 70px -75px 0 -104px rgba(255,255,255, 0.916) , -53px -93px 0 -104px rgba(255,255,255, 0.547) , 7px -28px 0 -104px rgba(255,255,255, 0.411) , -31px -48px 0 -104px rgba(255,255,255, 0.885) , 51px 98px 0 -104px rgba(255,255,255, 0.559) , -16px -132px 0 -104px rgba(255,255,255, 0.482) , 19px 55px 0 -104px rgba(255,255,255, 0.824) , 76px -96px 0 -104px rgba(255,255,255, 0.031) , -111px -41px 0 -104px rgba(255,255,255, 0.433) , 116px 61px 0 -104px rgba(255,255,255, 0.587) , 5px -20px 0 -104px rgba(255,255,255, 0.679) , -33px -9px 0 -104px rgba(255,255,255, 0.369) , -4px -47px 0 -104px rgba(255,255,255, 0.546) , 26px -70px 0 -104px rgba(255,255,255, 0.101) , 104px -53px 0 -104px rgba(255,255,255, 0.73) , 73px 115px 0 -104px rgba(255,255,255, 0.072) , -23px -8px 0 -104px rgba(255,255,255, 0.595) , -69px 74px 0 -104px rgba(255,255,255, 0.974) , -77px 57px 0 -104px rgba(255,255,255, 0.262) , -76px -77px 0 -104px rgba(255,255,255, 0.913) , 76px 9px 0 -104px rgba(255,255,255, 0.256) , -110px 120px 0 -104px rgba(255,255,255, 0.45) , 88px -77px 0 -104px rgba(255,255,255, 0.985) , -79px -13px 0 -104px rgba(255,255,255, 0.718) , -114px 34px 0 -104px rgba(255,255,255, 0.195) , 128px 49px 0 -104px rgba(255,255,255, 0.55) , 35px 97px 0 -104px rgba(255,255,255, 0.86) , 98px -12px 0 -104px rgba(255,255,255, 0.888) , 57px -30px 0 -104px rgba(255,255,255, 0.645) , -45px 134px 0 -104px rgba(255,255,255, 0.509) , 20px 139px 0 -104px rgba(255,255,255, 0.022) , 70px 140px 0 -104px rgba(255,255,255, 0.513) , 140px 107px 0 -104px rgba(255,255,255, 0.346) , -64px 31px 0 -104px rgba(255,255,255, 0.659) , 36px -75px 0 -104px rgba(255,255,255, 0.192) , 119px -139px 0 -104px rgba(255,255,255, 0.361) , -134px 33px 0 -104px rgba(255,255,255, 0.884) , 109px 91px 0 -104px rgba(255,255,255, 0.424) , -12px -111px 0 -104px rgba(255,255,255, 0.28) , -140px -14px 0 -104px rgba(255,255,255, 0.758) , 14px -76px 0 -104px rgba(255,255,255, 0.604) , 76px 81px 0 -104px rgba(255,255,255, 0.703) , -136px 99px 0 -104px rgba(255,255,255, 0.167) , 101px 84px 0 -104px rgba(255,255,255, 0.781) , 145px 46px 0 -104px rgba(255,255,255, 0.629) , -100px 44px 0 -104px rgba(255,255,255, 0.123) , 93px 5px 0 -104px rgba(255,255,255, 0.507) , 48px 102px 0 -104px rgba(255,255,255, 0.521) , -94px 37px 0 -104px rgba(255,255,255, 0.683) , 43px -75px 0 -104px rgba(255,255,255, 0.023) , -18px -6px 0 -104px rgba(255,255,255, 0.909) , 54px -73px 0 -104px rgba(255,255,255, 0.216) , 52px 40px 0 -104px rgba(255,255,255, 0.843) , -19px -24px 0 -104px rgba(255,255,255, 0.442) , 37px 51px 0 -104px rgba(255,255,255, 0.856) , 70px -3px 0 -104px rgba(255,255,255, 0.786) , -22px -72px 0 -104px rgba(255,255,255, 0.218) , 100px -85px 0 -104px rgba(255,255,255, 0.518) , -104px -17px 0 -104px rgba(255,255,255, 0.9) , 50px -31px 0 -104px rgba(255,255,255, 0.201) , -73px 56px 0 -104px rgba(255,255,255, 0.414) , -127px 78px 0 -104px rgba(255,255,255, 0.219) , 145px 113px 0 -104px rgba(255,255,255, 0.452) , 46px 85px 0 -104px rgba(255,255,255, 0.531) , -14px -140px 0 -104px rgba(255,255,255, 0.199) , -123px 136px 0 -104px rgba(255,255,255, 0.759) , 101px -32px 0 -104px rgba(255,255,255, 0.659) , -105px 12px 0 -104px rgba(255,255,255, 0.314) , -100px -44px 0 -104px rgba(255,255,255, 0.703) , -6px -92px 0 -104px rgba(255,255,255, 0.012) , 88px 136px 0 -104px rgba(255,255,255, 0.543) , 130px -28px 0 -104px rgba(255,255,255, 0.631) , -119px 35px 0 -104px rgba(255,255,255, 0.933) , -57px 8px 0 -104px rgba(255,255,255, 0.77) , -60px 11px 0 -104px rgba(255,255,255, 0.267) , -80px 107px 0 -104px rgba(255,255,255, 0.772) , -26px 5px 0 -104px rgba(255,255,255, 0.076) , -69px -76px 0 -104px rgba(255,255,255, 0.412) , 0px -1px 0 -104px rgba(255,255,255, 0.53) , 123px -79px 0 -104px rgba(255,255,255, 0.863) , 121px 90px 0 -104px rgba(255,255,255, 0.196) , 62px -73px 0 -104px rgba(255,255,255, 0.684) , 36px -58px 0 -104px rgba(255,255,255, 0.862) , -82px -134px 0 -104px rgba(255,255,255, 0.038) , -98px 78px 0 -104px rgba(255,255,255, 0.325) , 101px 34px 0 -104px rgba(255,255,255, 0.408) , -46px 118px 0 -104px rgba(255,255,255, 0.057) , 101px -38px 0 -104px rgba(255,255,255, 0.499) , 31px 0px 0 -104px rgba(255,255,255, 0.853) , -135px -133px 0 -104px rgba(255,255,255, 0.298) , 126px 81px 0 -104px rgba(255,255,255, 0.279) , -71px -86px 0 -104px rgba(255,255,255, 0.346) , -60px 6px 0 -104px rgba(255,255,255, 0.842);
}

.pluto {
  height: 780px;
  width: 780px;
  margin-top: -450px;
  margin-left: -320px;
  -webkit-animation: orb 7439.7074054575s linear infinite;
          animation: orb 7439.7074054575s linear infinite;
}
.pluto:before {
  height: 3px;
  width: 3px;
  background: #fff;
  margin-top: -1.5px;
  margin-left: -1.5px;
}

.hide {
  display: none;
}

.links {
  margin-top: 5px !important;
  font-size: 1em !important;
}

@-webkit-keyframes orb {
  from {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(-360deg);
            transform: rotate(-360deg);
  }
}

@keyframes orb {
  from {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(-360deg);
            transform: rotate(-360deg);
  }
}
</style>
<script>
  window.console = window.console || function(t) {};
</script>
<script>
  if (document.location.search.match(/type=embed/gi)) {
    window.parent.postMessage("resize", "*");
  }
</script>
<div class='description'>
<h1>Solar System</h1>
<hr>
<p>
I know this is not the first one on CodePen, but I'm a space and physics lover, and I wanted to create mine :)
</p>
<p>
Here is a true time scaled solar-system, which means that every objects have a time relative to an Earth year.
You can change the number in second of the
<br>
<code>$year-in-second</code>
variable to increase the speed of revolutions. Here 1 year = 30 seconds.
</p>
<p class='hide'>
Note the css tricks for the Saturn rings (box-shadow) and reverse animation to compensate the orbit.
</p>
<hr>
<p class='author'>
Made with
<i class='fa fa-heart'></i>
by Malik Dellidj
</p>
<p class='links'>
<a class='fa fa-codepen icon' href='https://codepen.io/kowlor/' target='_blank'></a>
<a class='fa fa-github-alt icon' href='https://github.com/KOWLOR' target='_blank'></a>
<a class='fa fa-twitter icon' href='https://twitter.com/Dathink' target='_blank'></a>
</p>
</div>
<div class='solar-syst'>
<div class='sun'></div>
<div class='mercury'></div>
<div class='venus'></div>
<div class='earth'></div>
<div class='mars'></div>
<div class='jupiter'></div>
<div class='saturn'></div>
<div class='uranus'></div>
<div class='neptune'></div>
<div class='pluto'></div>
<div class='asteroids-belt'></div>
</div>
