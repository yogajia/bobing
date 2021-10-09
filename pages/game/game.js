// pages/game/game.js
const back = wx.getBackgroundAudioManager();
back.title="Love is";
back.src='http://music.163.com/song/media/outer/url?id=36509400.mp3';
Page({

  
  data: {
    bgmswitch:"开"
  },
  bgm:function () {
    if(this.data.bgmswitch=="开")
    {
      this.setData({bgmswitch:"关"});
      back.pause();
      f=0;
    }
  else
  {
    this.setData({bgmswitch:"开"});
      back.play();
      f=1;
  }
  },
onclick:function()
{
  wx.navigateTo({
    url: '../index/index',
  })
},
onclick2:function()
{
  wx.navigateTo({
    url: '../index2/index2',
  })
},
toprize:function()
{
  wx.navigateTo({
    url: '../prize/prize',
  })
},
torule:function()
{
  wx.navigateTo({
    url: '../ruless/ruless',
  })
}
  
})