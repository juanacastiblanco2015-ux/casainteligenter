# Zabawny dyktafon

[Zobacz pełny projekt na microbit\.org](https://microbit.org/pl/projects/make-it-code-it/funny-voice-recorder)

Aby samemu zakodować ten projekt, kliknij prawym przyciskiem myszy na tle obszaru roboczego i wybierz "usuń wszystkie bloki", a następnie postępuj zgodnie z filmem o kodowaniu poniżej. Możesz znaleźć bloki `na zawsze` i `podczas uruchamiania` w kategorii (na liście) `Podstawowe`.

### Co to jest?

Nagrywaj swój głos za pomocą mikrofonu BBC micro:bit i odtwarzaj go, przyspieszając lub spowalniając.

#### Wprowadzanie

https://www.youtube.com/watch?v=JalQTAhWM78

#### Przewodnik po kodowaniu

https://www.youtube.com/watch?v=PobNr6vAi9Y

### Jak go używać

Umieść poniższy kod w micro:bicie. Naciśnij przycisk A i powiedz coś do mikrofonu. Podczas nagrywania na wyświetlaczu LED pojawi się kwadrat. 

Naciśnij przycisk B, aby odtworzyć nagrany dźwięk. Odtwarza dwa razy szybciej, dzięki czemu Twój głos przyspiesza i brzmi piskliwie!

### Jak to działa

Kod ustawia częstotliwość próbkowania na 10 000 Hertz (Hz) dla nagrywania. Oznacza to, że micro:bit mierzy lub próbkuje dźwięk z mikrofonu 10 000 razy na sekundę.

Kiedy odtwarza z powrotem, odtwarza próbki dwukrotnie szybciej, 20 000 razy na sekundę. Oznacza to, że odtwarza dwa razy szybciej i podwaja wysokość nagranych dźwięków.

Nagrywanie nowego dźwięku powoduje usunięcie poprzedniego nagrania tak jak naciśnięcie przycisku resetowania z tyłu, lub odłączanie micro:bita od źródła zasilania (USB lub pakietiu baterii).

Odwiedź stronę projektu [na microbit\.org](https://microbit.org/pl/projects/make-it-code-it/), aby uzyskać pełny opis tego i innych projektów.