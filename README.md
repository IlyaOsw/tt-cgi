# Projekti kirjeldus

Veebirakendus lennureiside valimiseks ja filtreerimiseks ning istekohtade soovitamiseks lennukis, kasutades erinevaid filtreid.

## Stack

- **Backend:** Java (Spring Boot)
- **Database:** PostgreSQL
- **Frontend:** React, TypeScript, Material UI, Axios, React Router

## Projekti struktuur

- `backend/` – serveripoolne osa
- `frontend/` – kliendipoolne osa
- `database/` – andmebaasi dump

## Projekti käivitamine

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
```

## Raskused ja lahendused

- Database:
  Probleem: Lennureiside tabeli struktuuri loomine, kus igal lennul on sisemised reisijate istmed.

  Lahendus: Loodi andmebaas, kus on tabel flights, mis sisaldab lennureiside infot, ja tabel seats, mis on seotud tabeliga flights välisvõtmega flight_id.

- Frontend:
  Probleem: Istmete filtreerimine, et kaks reisijat saaksid istuda kõrvuti.

  Lahendus: Arendati funktsioon, mis jagab istmete massiivi ridadeks, kontrollib keskset istekohta ja, kui see on vaba, analüüsib vasakpoolsed ja parempoolsed istmed, et määrata, kas need sobivad kahele reisijale.

## Kulutatud aeg

- Frontend: 7–8 tundi
- Database: 1–2 tundi
- Backend: 2–3 tundi
- Dokumentatsioon: 1–2 tundi

## Informatsiooni allikad

YouTube õppekursused, avatud allikad (Google), AI tööriistad (OpenAI, GitHub Copilot), isiklikud õppeprojektid.
