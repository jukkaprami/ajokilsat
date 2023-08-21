# Ajokilsat

Tämä on Expolla toteutettu sovellus ajokilometrien keräämiseen.
Projektin tarkoitus on harjoitella kännykkäsovelluksien ohjelmointia.
Expolla toteutettuna sovellus toimii Androidilla ja iOS:llä, mutta
tähän mennessä sovellusta on testattu vain Androidilla.

## Tietomallit

(*) = Pakollinen kenttä (muut ovat optionaalisia)

### Trip (Matka)

- `vehicle` (*) - ajoneuvo, jolla matka tehtiin
- `description` (*) - matkan kuvaus
- `timestampAtBegin` (*) - aikaleima matkan alussa
- `timestampAtEnd` (*) - aikaleima matkan lopussa
- `odometerAtBegin` - matkamittarin lukema matkan alussa
- `odometerAtEnd` - matkamittarin lukema matkan lopussa
- `routeDescription` - reitin kuvaus (tyyliin: "Turku-Raisio-Turku")
- `track` - "jälki", johon tallennetaan matkan kulku
   * Lista GPS-koordinaateista ja aikaleimoista

### Vehicle (Ajoneuvo)

- `name` (*) - nimi
- `registrationNumber` - rekisterinumero
