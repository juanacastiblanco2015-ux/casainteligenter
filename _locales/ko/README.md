# 재밌는 음성 녹음기

[View full project on microbit\.org](https://microbit.org/ko/projects/make-it-code-it/funny-voice-recorder)

To code this project yourself, right click on the background of the workspace and choose ‘delete all blocks’, then follow the coding video below. You can find the `forever` and `on start` blocks in the `Basic` section.

### 프로젝트 소개

BBC micro:bit's 마이크를 사용하여 음성을 녹음하고 속도를 높이거나 낮춰서 재생해 보세요.

#### 소개

https://www.youtube.com/watch?v=JalQTAhWM78

#### 프로그래밍 가이드

https://www.youtube.com/watch?v=PobNr6vAi9Y

### 사용방법

아래 코드를 micro:bit 에 넣어보세요. 버튼 A를 누르고 마이크에 대고 말하세요. 녹화 중에는 LED 디스플레이에 사각형이 나타납니다. 

녹음된 사운드를 재생하려면 버튼 B를 누르세요. 재생 속도가 두 배 빨라져서 목소리가 빨라지고 삐걱거리는 것처럼 들립니다!

### 설명

이 코드는 녹음을 위해 샘플 속도를 10,000 헤르츠(Hz)로 설정합니다. 즉, micro:bit 는 매초 10,000 번 마이크에서 소리를 측정하거나 샘플링합니다.

재생할 때는 샘플을 두 배 빠르게, 즉 초당 20,000 번 재생합니다. 즉, 재생 속도가 두 배 빨라지고, 녹음된 소리의 피치도 두 배로 높아집니다.

새로운 소리를 녹음하면 이전에 녹음한 내용이 삭제되고, 뒷면의 재설정 버튼을 누르거나 micro:bit 를 전원(USB 또는 배터리 팩)에서 분리해도 이전 녹음 내용은 삭제됩니다.

Visit the [projects page on microbit\.org](https://microbit.org/ko/projects/make-it-code-it/) for a full description of this and other projects.