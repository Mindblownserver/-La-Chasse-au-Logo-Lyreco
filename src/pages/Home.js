import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DisplacementSphere from '../components/background/DisplacementSphere';
import { ThemeToggle } from '../components/theme/ThemeToggle';
import ImageWithHoverEffect from '../components/card/ImageWithHoverEffect';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  headerContainer: {
    textAlign: 'center',
    padding: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  header: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
  },
  description: {
    fontSize: '1.2rem',
    color: '#666',
  },
}));

export const Home = () => {
  const classes = useStyles();
  const images = [
    {
      "src": "/Lyreco_Logotype_RGB_positive.png",
      "alt": "Image 1",
      "title": "You win",
      "description": "you win."
    },
    {
      "src": "/Lyreco_Logotype_RGB_positive1-removebg-preview.png",
      "alt": "Le système circulatoire humain transporte l'oxygène et les nutriments à travers le corps, tandis que les courants océaniques transportent l'eau, la chaleur et les nutriments à travers l'océan, régulant ainsi le climat global et soutenant la vie marine. Les deux jouent des rôles essentiels dans le maintien de l'équilibre de leurs systèmes respectifs.",
      "title": "Système circulatoire et courants océaniques",
      "description": "Le système circulatoire humain et les courants océaniques ont des fonctions similaires, transportant des éléments vitaux dans leurs systèmes respectifs."
    },
    {
      "src": "/Lyreco_Logotype_RGB_positive5-removebg-preview.png",
      "alt": "Image 3",
      "title": "Système immunitaire et résilience des écosystèmes marins",
      "description": "Un dysfonctionnement du système immunitaire humain est comparable aux perturbations des écosystèmes marins dus à la pollution, mettant en péril la santé globale."
    },
    {
      "src": "/Lyreco_Logotype_RGB_positive1-removebg-preview (1).png",
      "alt": "Image 4",
      "title": "Régulation thermique et courants marins",
      "description": "Les courants marins régulent la température mondiale tout comme le corps humain maintient une température interne stable."
    },
    {
      "src": "/Lyreco_Logotype_RGB_positive2-removebg-preview.png",
      "alt": "Image 5",
      "title": "Peau humaine et récifs coralliens",
      "description": "La peau humaine protège contre les agents extérieurs, tout comme les récifs coralliens servent de barrière protectrice pour les écosystèmes marins."
    },
    {
      "src": "/Lyreco_Logotype_RGB_positive6-removebg-preview.png",
      "alt": "Image 6",
      "title": "Système digestif et cycles biologiques océaniques",
      "description": "Le système digestif humain transforme les nutriments, tandis que les cycles biologiques océaniques assurent la circulation des nutriments marins."
    },
    {
      "src": "/Lyreco_Logotype_RGB_positive7-removebg-preview.png",
      "alt": "Image 7",
      "title": "Système nerveux et communication sous-marine",
      "description": "Le système nerveux humain transmet des signaux électriques, tout comme les animaux marins utilisent des signaux sonores pour communiquer."
    },
    {
      "src": "/Lyreco_Logotype_RGB_positive8-removebg-preview.png",
      "alt": "Image 8",
      "title": "Système musculaire et dynamique des vagues",
      "description": "Les muscles humains génèrent de la force, tout comme les vagues marines agissent sur l'énergie des océans."
    },
    {
      "src": "/Lyreco_Logotype_RGB_positive9-removebg-preview.png",
      "alt": "Image 9",
      "title": "Régulation de la pression et circulation marine",
      "description": "La régulation de la pression dans le corps humain trouve un parallèle avec la circulation marine, où la pression et la température affectent les courants."
    },
    {
      "src": "/Lyreco_Logotype_RGB_positive10-removebg-preview.png",
      "alt": "Image 10",
      "title": "Système circulatoire et répartition des ressources",
      "description": "Le système circulatoire humain distribue des ressources essentielles, tandis que les courants marins assurent la distribution des nutriments dans l'océan."
    },
    {
      "src": "/Lyreco_Logotype_RGB_positive11-removebg-preview.png",
      "alt": "Image 11",
      "title": "Interconnexion des systèmes humains et océaniques",
      "description": "Les systèmes humains et océaniques sont interconnectés, chaque perturbation dans un système pouvant affecter l'autre."
    },
    {
      "src": "/Lyreco_Logotype_RGB_positive12-removebg-preview.png",
      "alt": "Image 12",
      "title": "Équilibre écologique et santé humaine",
      "description": "Le maintien de l'équilibre dans les systèmes humains et marins est essentiel pour la préservation de la santé globale de la planète."
    },
    {
      "src": "/Lyreco_Logotype_RGB_positive13-removebg-preview.png",
      "alt": "Image 13",
      "title": "Système respiratoire et photosynthèse océanique",
      "description": "Tout comme les poumons humains échangent les gaz nécessaires à la respiration, la photosynthèse océanique produit de l'oxygène."
    },
    {
      "src": "/Lyreco_Logotype_RGB_positive14-removebg-preview.png",
      "alt": "Image 14",
      "title": "Dysfonctionnement et conséquences dans les systèmes",
      "description": "Les dysfonctionnements dans le système circulatoire ou les perturbations des courants océaniques ont des conséquences graves sur leur environnement respectif."
    },
    {
      "src": "/Lyreco_Logotype_RGB_positive15-removebg-preview.png",
      "alt": "Image 15",
      "title": "Impact écologique et environnemental",
      "description": "Les pollutions et perturbations affectent tant les humains que les océans, illustrant la fragilité des deux systèmes."
    },
    {
      "src": "/Lyreco_Logotype_RGB_positive16-removebg-preview.png",
      "alt": "Image 16",
      "title": "Système circulatoire et climat",
      "description": "Le climat terrestre est régulé par des courants océaniques, qui jouent un rôle similaire à la circulation sanguine dans le corps humain."
    },
    {
      "src": "/Lyreco_Logotype_RGB_positive17-removebg-preview.png",
      "alt": "Image 17",
      "title": "Dysfonctionnement global",
      "description": "Les dysfonctionnements dans les systèmes humains, comme une mauvaise circulation, trouvent un parallèle dans les perturbations climatiques causées par les déséquilibres océaniques."
    },
    {
      "src": "/Lyreco_Logotype_RGB_positive18-removebg-preview.png",
      "alt": "Image 18",
      "title": "Répercussions du changement climatique",
      "description": "Le changement climatique affecte aussi bien les écosystèmes humains que marins, perturbant l'équilibre naturel des deux systèmes."
    },
    {
      "src": "/Lyreco_Logotype_RGB_positive19-removebg-preview.png",
      "alt": "Image 19",
      "title": "Maintien de l'équilibre dans les systèmes",
      "description": "Assurer un équilibre sain dans les systèmes humains et océaniques est crucial pour la survie de la vie sur Terre."
    },
    {
      "src": "/Lyreco_Logotype_RGB_positive20-removebg-preview.png",
      "alt": "Image 20",
      "title": "Collaboration pour la régulation",
      "description": "Les systèmes humains et océaniques nécessitent une collaboration pour maintenir la régulation thermique et la circulation des nutriments."
    },
    {
      "src": "/Lyreco_Logotype_RGB_positive21-removebg-preview.png",
      "alt": "Image 21",
      "title": "Systèmes interconnectés",
      "description": "Les systèmes circulatoires humains et océaniques sont interconnectés, chaque changement dans l'un affectant l'autre."
    },
    {
      "src": "/Lyreco_Logotype_RGB_positive22-removebg-preview.png",
      "alt": "Image 22",
      "title": "Systèmes vitaux et équilibre global",
      "description": "Le maintien de l'équilibre dans ces systèmes vitaux, que ce soit pour la santé humaine ou l'équilibre marin, est essentiel pour le bien-être global."
    },
    {
      "src": "/Lyreco_Logotype_RGB_positive26-removebg-preview.png",
      "alt": "Image 23",
      "title": "Conservation et préservation",
      "description": "La conservation des écosystèmes humains et marins est essentielle pour maintenir l'équilibre et éviter les perturbations dans les deux systèmes."
    },
    {
      "src": "/Lyreco_Logotype_RGB_positive25-removebg-preview.png",
      "alt": "Image 24",
      "title": "Récupération et rééquilibrage",
      "description": "Les deux systèmes, humain et océanique, possèdent des capacités de récupération et de rééquilibrage, mais nécessitent une intervention pour maintenir leur stabilité."
    },
    {
      "src": "/Lyreco_Logotype_RGB_positive13-removebg-preview.png",
      "alt": "Image 25",
      "title": "Rééquilibrage et adaptation",
      "description": "Les systèmes humains et océaniques s'adaptent aux changements pour maintenir l'équilibre, mais des perturbations excessives peuvent entraîner des crises."
    },
    {
      "src": "/Lyreco_Logotype_RGB_positive17-removebg-preview.png",
      "alt": "Image 26",
      "title": "Régulation vitale",
      "description": "Les systèmes vitaux, comme la circulation sanguine et les courants océaniques, régulent les conditions nécessaires à la vie."
    },
    {
      "src": "/Lyreco_Logotype_RGB_positive7-removebg-preview.png",
      "alt": "Image 27",
      "title": "Impact des perturbations",
      "description": "Les perturbations dans un système, qu'il soit humain ou océanique, peuvent avoir des répercussions globales importantes."
    },
    {
      "src": "/Lyreco_Logotype_RGB_positive23-removebg-preview.png",
      "alt": "Image 29",
      "title": "Conclusion : Interdépendance",
      "description": "Les systèmes humains et océaniques sont interdépendants, et leur bon fonctionnement est crucial pour l'équilibre de la planète."
    },
    {
      "src": "/Lyreco_Logotype_RGB_positive24-removebg-preview.png",
      "alt": "Image 30",
      "title": "Avenir commun",
      "description": "L'avenir de la santé humaine et de l'écosystème marin dépend de notre capacité à maintenir un équilibre durable entre les deux."
    }
  ]
    ;
  return (
    <>
      <div className={classes.root}>
        <div className={classes.headerContainer}>
          <h1 className={classes.header}>Quiz Océan vs Corps Humain</h1>
          <p className={classes.description}>Dans ce quiz interactif, vous avez une image représentant un logo gagnant parmi plusieurs images. Si vous cliquez sur une mauvaise image, une information éducative s'affichera pour expliquer les parallèles entre les systèmes océaniques et le corps humain (par exemple, les courants océaniques et le système circulatoire). Cela vous aide à apprendre de nouvelles connaissances tout en continuant à chercher la bonne image. Le but est d'encourager l'apprentissage jusqu'à ce que vous trouviez la bonne image et gagniez ! 🌊</p>
        </div>
        <DisplacementSphere />
        <ThemeToggle />
        <ImageWithHoverEffect images={images} />;


      </div>
    </>
  );
};
