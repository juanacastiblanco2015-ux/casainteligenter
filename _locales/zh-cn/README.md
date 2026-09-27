# 搞笑录音机

[View full project on microbit\.org](https://microbit.org/zh-cn/projects/make-it-code-it/funny-voice-recorder)

To code this project yourself, right click on the background of the workspace and choose ‘delete all blocks’, then follow the coding video below. You can find the `forever` and `on start` blocks in the `Basic` section.

### 它是什么？

用BBC micro:bit的麦克风来录下您的声音，然后以加快或减慢的速度播放。

#### 介绍

https://www.youtube.com/watch?v=JalQTAhWM78

#### 编程指南

https://www.youtube.com/watch?v=PobNr6vAi9Y

### 如何使用 

将下文的代码传到micro:bit里。 按下按钮A并对着麦克风说话。 LED显示屏上显示一个方块，表示micro:bit正在录音。 

按下按钮B来播放录下的声音。 录下来的声音以两倍速来播放，使您的声音听起来很快很尖！

### 工作原理

我们的代码将录音时的采样率设为了10000赫兹（Hz）。 这表示micro:bit用它的麦克风，每秒测量（也叫做采样）10000次当时的声音。

在播放时，我们的代码会以两倍的速度播放这些声音样本，也就是每秒20000个样本。 这意味着它播放的速度快了一倍，并且将录制到的声音的音调提高了一倍。

录制新声音将会删除您之前的录音，按下micro:bit背面的重置按钮，或者将拔掉micro:bit的电源（USB线或电池组）也会如此。

Visit the [projects page on microbit\.org](https://microbit.org/zh-cn/projects/make-it-code-it/) for a full description of this and other projects.