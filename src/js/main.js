import { initScrollReveal } from "./scrollReveal.js";
import { hoverChangeExperience } from "./hoverChangeExperience.js";
import { typeWrite } from "./typeWrite.js";
import { hoverChangeDescription } from "./hoverChangeDescription.js";
import { menu } from "./menu.js";

menu();
initScrollReveal();
typeWrite(document.querySelector(".typewriter"));

hoverChangeExperience(
  ".engie",
  `Technicien de Déploiement de Fibre Optique chez Engie Solutions, 
  j'ai été impliqué dans le déploiement de réseaux à haut débit. 
  Mon rôle consistait à installer la fibre optique, 
  exécuter des tests pour assurer une connectivité optimale. 
  Cette expérience m'a permis de maîtriser les technologies, 
  en développant mes compétences en travail d'équipe 
  et en résolution de problèmes.`,
  "Déploiement de Fibre Optique",
  "Technicien Optique",
  "2020 - 2021 (3 mois)"
);

hoverChangeExperience(
  ".novadem",
  `Chez Novadem, une entreprise spécialisée dans les drones de surveillance 
  pour l'armée française, j'ai contribué au développement et 
  à la fabrication de drones. 
  Mon rôle consistait à garantir la qualité, la conformité 
  aux normes de sécurité. Collaborer avec des ingénieurs pour 
  résoudre des défis techniques. Mon temps chez Novadem a enrichi
  mes compétences et en gestion de projets technologiques.`,
  "Conception de drones de surveillance",
  "Technicien en conception de drones",
  "2022 - 2022 (2 mois)"
);

hoverChangeExperience(
  ".corner",
  `Parallèlement à mes études, je travaille en tant que barman.
  Cette expérience m'a permis de développer des compétences en service
  à la clientèle, en gestion du temps et en travail sous pression.
  En tant que barman, je m'efforce de créer une atmosphère accueillante,
  de préparer et de servir des boissons de qualité, tout en interagissant 
  efficacement avec les clients pour répondre à leurs besoins. 
  Cette expérience m'a permis d'améliorer mes compétences en communication 
  et ma capacité à travailler de manière autonome dans un environnement 
  dynamique.`,
  "Barman",
  "Corner Bistro",
  "2023"
);

hoverChangeExperience(
  ".ynov",
  `Ynov est une école d'ingénieurs qui propose des formations en informatique,
  en design et en business. J'ai choisi de suivre le cursus informatique
  pour acquérir des compétences en développement et programmation.
  J'ai également choisi prévue de suivre le cursus en alternance pour acquérir
  une expérience professionnelle et développer mes compétences en gestion
  de projet. J'ai choisi Ynov, car c'est une école qui offre une formation
  de qualité et qui est reconnue par les entreprises.`,
  "Etudiant developpeur",
  "Ynov Aix-en-Provence",
  "2éme année"
);


hoverChangeDescription(
  ".html",
  "HTML est un langage de balisage dans lequel nous marquons des éléments pour définir les informations que la page affichera."
);
hoverChangeDescription(
  ".css",
  "CSS est un langage de page de style composé de « couches », créé dans le but de styliser les pages."
);
hoverChangeDescription(
  ".js",
  "JavaScript est un langage de programmation qui vous permet d'implémenter des éléments dynamiques dans des pages Web."
);
hoverChangeDescription(
  ".next",
  "Next.js est un framework Web qui permet des fonctionnalités telles que le rendu côté serveur et la génération de sites Web."
);
hoverChangeDescription(
  ".vue",
  "Vue.js est un framework JavaScript open-source utilisé pour développer des interfaces utilisateur et des applications Web à page unique."
);
hoverChangeDescription(
  ".canva",
  "Canava est un outil de conception graphique en ligne qui permet de créer des graphiques, des présentations, des affiches, des documents et d'autres contenus visuels."
);
hoverChangeDescription(
  ".figma",
  "Figma est un outil de conception d'interface utilisateur basé sur le Web, avec un navigateur pour l'interface utilisateur de conception graphique et un navigateur distinct pour le prototypage."
);
hoverChangeDescription(
  ".cisco",
  "Cisco est une entreprise technologique mondiale qui conçoit, fabrique et vend des équipements de réseau."
);

