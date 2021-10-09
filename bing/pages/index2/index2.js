// index.js
// 获取应用实例
const app = getApp()

function RandomNumBoth(Min,Max){
  var Range = Max - Min;
  var Rand = Math.random();
  var num = Min + Math.round(Rand * Range); //四舍五入
  return num;
} //随机数生成
 function dicejudge(dice) {
  var n;
  if(dice=="../img/1.png")
  n=1;
  else if(dice=="../img/2.png")
  n=2;
  else if(dice=="../img/3.png")
  n=3;
  else if(dice=="../img/4.png")
  n=4;
  else if(dice=="../img/5.png")
  n=5;
  else if(dice=="../img/6.png")
  n=6;
  return n;
 }//判断骰子的点数
function judge(dic1,dic2,dic3,dic4,dic5,dic6) {
 var dicarr=[0,0,0,0,0,0];
 dicarr[dicejudge(dic1)-1]++;
 dicarr[dicejudge(dic2)-1]++;
 dicarr[dicejudge(dic3)-1]++;
 dicarr[dicejudge(dic4)-1]++;
 dicarr[dicejudge(dic5)-1]++;
 dicarr[dicejudge(dic6)-1]++;
if((dicarr[0]==2&&dicarr[3]==4)||dicarr[3]==6||dicarr[0]==6||dicarr[5]==6||dicarr[3]==5||dicarr[3]==4)
return "状元";
else if((dicarr[0]==1&&dicarr[1]==1&&dicarr[2]==1&&dicarr[3]==1&&dicarr[4]==1&&dicarr[5]==1))
return "榜眼";
else if(dicarr[3]==3)
return "探花";
else if(dicarr[5]==4)
return "进士";
else if(dicarr[3]==2)
return "举人";
else if(dicarr[3]==1)
return "秀才";
else
return "落榜";

}
function diceform(i)
{
  var w;
  var imga="",
     w=RandomNumBoth(1,6);
     switch(w)
     {
       case 1:imga="../img/1.png";break;
       case 2:imga="../img/2.png";break;
       case 3:imga="../img/3.png";break;
       case 4:imga="../img/4.png";break;
       case 5:imga="../img/5.png";break;
       case 6:imga="../img/6.png";break;
     }
     return imga;
}
Page({
  data: {
    bg:false,
    imgs:"../img/dice.gif",
    img1:"../img/0.png",
    img2:"../img/0.png",
    img3:"../img/0.png",
    img4:"../img/0.png",
    img5:"../img/0.png",
    img6:"../img/0.png",
    reward:"",
   next:"true",
   player1:"",
   player2:"",
   player3:"",
   player4:"",
   nextone:"下一个",
   p:1,
  },
 
   onclick: function()
   {
     this.setData({imgs:""});
     this.setData({img1:diceform()});
     this.setData({img2:diceform()});
     this.setData({img3:diceform()});
     this.setData({img4:diceform()});
     this.setData({img5:diceform()});
     this.setData({img6:diceform()});
     this.setData({reward:judge(this.data.img1,this.data.img2,this.data.img3,this.data.img4,this.data.img5,this.data.img6)});
     if(this.data.p==1){
      this.setData({nextone:"下一个"})
      this.setData({player1:""});
      this.setData({player2:""});
      this.setData({player3:""});
      this.setData({player4:""});
       this.setData({player1:this.data.reward});
       this.setData({p:2});
     }
     else if(this.data.p==2){
      this.setData({player2:this.data.reward});
      this.setData({p:3});
    }
    else if(this.data.p==3){
      this.setData({player3:this.data.reward});
      this.setData({p:4});
    }
    else if(this.data.p==4){
      this.setData({player4:this.data.reward});
      this.setData({p:1});
      this.setData({nextone:"再来一轮"})
    }
     this.setData({
       bg:true
     })
     this.setData({
      next:false
    })
   },
   outclick: function()
   {
    this.setData({imgs:"../img/dice.gif"});
    this.setData({img1:""});
    this.setData({img2:""});
    this.setData({img3:""});
    this.setData({img4:""});
    this.setData({img5:""});
    this.setData({img6:""});
    
    this.setData({
      bg:false
    })
    this.setData({
      next:true
    })
   },
   ret: function(options){
    wx.navigateTo({
      url: '../game/game'
    })
   }
  
})
