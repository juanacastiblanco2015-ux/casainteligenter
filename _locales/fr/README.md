# Drôle d'enregistreur vocal

[Voir le projet complet sur microbit\.org](https://microbit.org/fr/projects/make-it-code-it/funny-voice-recorder)

Pour coder ce projet vous-même, cliquez avec le bouton droit de la souris sur l'arrière-plan de l'espace de travail et sélectionnez « Supprimer tous les blocs », puis suivez la vidéo de codage ci-dessous. Vous trouverez les blocs `forever (répéter indéfiniment)` et `on start (au démarrage)` dans la section `Basique`.

### Qu'est-ce que c'est ?

Enregistrez votre voix à l'aide du microphone du BBC micro:bit et lisez-la en accéléré ou en ralenti.

#### Introduction

https://www.youtube.com/watch?v=JalQTAhWM78

#### Guide de codage

https://www.youtube.com/watch?v=PobNr6vAi9Y

### Comment l’utiliser 

Chargez le code ci-dessous sur un micro:bit. Appuyez sur le bouton A et parlez dans le microphone. Un carré apparaît sur l'écran LED pendant l'enregistrement. 

Appuyez sur le bouton B pour lire le son enregistré. La lecture est deux fois plus rapide, ce qui accélère votre voix et la fait grincer !

### Comment ça marche

Le code fixe la fréquence d'échantillonnage à 10 000 Hertz (Hz) pour l'enregistrement. Cela signifie que le micro:bit mesure, ou échantillonne, le son du microphone 10 000 fois par seconde.

Lorsqu'il le joue, il lit les échantillons deux fois plus vite, 20 000 fois par seconde. Cela signifie qu'il lit deux fois plus vite et double la hauteur des sons enregistrés.

L'enregistrement d'un nouveau son supprimera votre enregistrement précédent, de même pour le bouton de réinitialisation à l'arrière, ou lorsque vous débranchez le micro:bit de sa source d'alimentation (USB ou coupleur de piles).

Visitez la [page des projets sur microbit\.org](https://microbit.org/fr/projects/make-it-code-it/) pour une description complète de ce projet et bien d'autres.