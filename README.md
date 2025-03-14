# Projekti kirjeldus

Veebirakendus lennureiside valimiseks ja filtreerimiseks ning istekohtade soovitamiseks lennukis, kasutades erinevaid filtreid.

## Stack

- **Backend:** Java (Spring Boot)
- **Database:** PostgreSQL
- **Frontend:** React (Vite), TypeScript, Material UI, Axios, React Router

## Projekti struktuur

- `backend/` – serveripoolne osa
- `frontend/` – kliendipoolne osa
- `database/` – andmebaasi dump

## Projekti käivitamine

### 1.Standart

```bash
# Andmebaas
username - postgres
password - 123123

# Andmebaasi loomine
createdb flight_booking

# Andmebaasi dumpi importimine PostgreSQL-i
psql -U postgres -d flight_booking -f database/flight_booking_dump.sql

# Kontrollige, kas andmed on õigesti taastatud
psql -U postgres -d flight_booking
SELECT * FROM flights;
SELECT * FROM seats;

# Frontend'i käivitamine
cd frontend
npm install
npm run dev

# Backend'i käivitamine
cd backend
mvn clean install
mvn spring-boot:run

## application.properties
# Lokaalne andmebaasi ühendus
spring.datasource.url=jdbc:postgresql://localhost:5432/flight_booking
```

### 2.Docker

```bash
# GitHubi repositooriumi kloonimine
git clone https://github.com/IlyaOsw/tt-cgi.git

# Üleminek projekti kausta
cd ttcgi

# Kõigi konteinerite ülesehitamine ja käivitamine sõltuvustega
docker-compose up --build

# Kontrollimine, kas kõik konteinerid on õigesti käivitatud
docker ps

# Kõigi konteinerite peatamine ja eemaldamine
docker-compose down

## application.properties
# Docker konteinerite andmebaasi ühendus
spring.datasource.url=jdbc:postgresql://db:5432/flight_booking
```

## Raskused ja lahendused

- Database:
  Probleem: Lennureiside tabeli struktuuri loomine, kus igal lennul on kindlad reisijate istekohad.

  Lahendus: Loodi andmebaas, kus on tabel 'flights', mis sisaldab lennureiside infot, ja tabel 'seats', mis on seotud tabeliga 'flights' välisvõtmega 'flight_id'.

- Frontend:
  Probleem: Istekohtade filtreerimine, et kaks reisijat saaksid istuda kõrvuti.

  Lahendus: Arendati funktsioon, mis jagab istekohtade massiivi ridadeks, kontrollib keskmist istekohta ja, kui see on vaba, analüüsib vasakpoolsed ja parempoolsed istekohad, et määrata, kas need sobivad kahele reisijale.

## Kulutatud aeg

- Frontend: 7–8 tundi
- Database: 1–2 tundi
- Backend: 2–3 tundi
- Dokumentatsioon: 1–2 tundi

## Informatsiooni allikad

YouTube õppekursused, avatud allikad (Google), AI tööriistad (OpenAI, GitHub Copilot), isiklikud õppeprojektid.

## Kommentaar

Alustasin veebirakenduse arendamist frontendist ja kasutasin rakenduse toimimiseks mock-andmemassiivi. Seejärel mõtlesin läbi andmebaasi struktuuri ja tegin kaks tabelit: üks lendude ja teine reisijate istekohtade jaoks. Järgmine etapp oli andmebaasi ühendamine backendiga ja nende andmete töötlemine. Pärast seda asendasin mock-andmemassiivi päringuga andmebaasi, et saada andmeid otse sealt.

Valisin just sellise lähenemisviisi, kuna spetsialiseerun rohkem frontendile ja arvasin, et andmebaasi ja backendiga võib tekkida raskusi. Seetõttu alustasin sellest, milles end kindlalt tunnen ning seejärel paralleelselt uute tehnoloogiate õppimisega videokoolituste abil hakkasin neid rakendama projekti.
