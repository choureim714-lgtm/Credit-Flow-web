# 💸 CréditFlow - Plateforme de Micro-Crédit Bénin

**CréditFlow** est une solution fintech moderne conçue pour simplifier l'accès au crédit et la gestion des remboursements via Mobile Money (**Celtis Cash, Moov Money, MTN**).

---

## 🚀 Fonctionnalités Clés

- **Tableau de Bord Client :** Vue en temps réel du solde dû et de l'historique des transactions.
- **Simulateur de Prêt Dynamique :** Calcul automatique des intérêts (5%) et des mensualités avant l'engagement.
- **Paiements Mobiles Intégrés :** Boutons d'accès directs pour les opérateurs locaux (Celtis, Moov, MTN).
- **Authentification Sécurisée :** Connexion via numéro de téléphone.

---

## 🛠️ Stack Technique (Gratuite)

- **Frontend :** React / Next.js (Hébergé sur **Vercel**)
- **Base de Données :** PostgreSQL (Via **Supabase**)
- **Paiements :** API FedaPay / Kkiapay (Celtis, Moov, MTN)

---

## 📂 Structure du Projet

```text
/
├── database/
│   └── schema.sql        # Scripts de création des tables
├── src/
│   ├── components/
│   │   ├── Calculator.js # Logique du simulateur
│   │   └── Dashboard.js  # Interface client
└── README.md             # Guide technique
Propulsé par CréditFlow - L'argent fluide, en toute confiance.
