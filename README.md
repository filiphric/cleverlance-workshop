# Cleverlance Cypress.io workshop
Repozitár k workshopu pre Cleverlance

## O autorovi
Volám sa Filip. Som QA lead vo firme [Slido](https://www.sli.do/) a [Cypress ambasádor](https://cypress.io/ambassadors/)

## Čo sa nachádza v repozitári
Súčasťou repozitára je aplikácia a všetky učebné materiály k workshop. Väčšina kapitol kurzu začína súborom `zaciatok.js`. Konečný stav kódu je uložený v súbore `zaver.js`. Väčšina kapitol taktiež obsahuje súbor `zoznamsa.js`, v ktorom sú praktické cvičenia, ktoré riešime na workshope.

## Trello aplikácia
Aplikácia je napodobeninou aplikácie [Trello](https://trello.com). V aplikácii možno vytvárať boardy a zoznamy úloh. Medzi boardami je možné úlohy presúvať meniť ich stav, nastaviť im deadline či dokonca uploadnúť obrázok.

### Inštalácia
Inštalácia je jednoduchá, stačí zadať príkaz
1. `npm install`
2. `npm start`
3. A otvoriť aplikáciu v prehliadači na lokalite http://localhost:3000

### Databáza
Databázou je obyčajný json súbor, nachádzajúci sa v `trelloapp/backend/data/database.json`. Uploadované súbory sa ukladajú do foldra `trelloapp/backend/data/uploaded`.