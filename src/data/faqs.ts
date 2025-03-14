export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqList {
  id: string;
  faqs: FaqItem[];
}

export const faqLists: Record<string, FaqList> = {
  main: {
    id: "main",
    faqs: [
      {
        question: "Comment reconnaître un nid de guêpes ?",
        answer:
          "Les nids de guêpes ressemblent à du papier mâché de couleur grise ou marron. Ils sont fabriqués à partir de fibres de bois mélangées à la salive des guêpes. Leur taille varie de celle d'une balle de tennis à celle d'un ballon de foot selon l'avancement de la saison. Vous pouvez les trouver sous les toits, dans les combles, dans le sol, dans des arbres, ou encore dans des cabanons. Si vous observez un va-et-vient régulier de guêpes rayées jaune et noir à un endroit précis, il y a probablement un nid à proximité.",
      },
      {
        question:
          "Quelle est la différence entre une guêpe et un frelon asiatique ?",
        answer:
          "La guêpe commune mesure entre 10 et 15 mm avec un corps jaune et noir. Le frelon européen est plus grand (20-35 mm) avec des couleurs brun-roux. Le frelon asiatique, espèce invasive, mesure 20-30 mm avec un corps noir et une large bande orange sur l'abdomen. Il est particulièrement agressif, surtout si son nid est dérangé, et représente un danger plus important. Les nids de frelons asiatiques sont généralement sphériques et situés en hauteur dans les arbres, contrairement aux guêpes qui privilégient les cavités.",
      },
      {
        question: "Puis-je détruire moi-même un nid de guêpes ?",
        answer:
          "Nous déconseillons fortement la destruction d'un nid de guêpes par vos propres moyens. Les guêpes et frelons peuvent devenir très agressifs lorsqu'ils se sentent menacés et attaquer en masse. Les piqûres multiples présentent un risque sérieux pouvant nécessiter une hospitalisation, même sans allergie connue. De plus, les produits disponibles dans le commerce sont souvent insuffisants pour éliminer complètement un nid. Nos techniciens sont équipés de protections complètes et utilisent des produits professionnels homologués pour une élimination efficace et sécurisée.",
      },
      {
        question:
          "Quels sont les endroits les plus fréquents où l'on trouve des nids de guêpes en Île-de-France ?",
        answer:
          "En Île-de-France et particulièrement dans le 77, nous intervenons fréquemment pour des nids situés sous les toitures et dans les combles (40% des cas), dans le sol ou les cavités murales (25%), dans les cabanons et abris de jardin (20%), et dans les arbres (15%). Les guêpes germaniques privilégient les cavités souterraines, tandis que les guêpes communes et les frelons préfèrent les endroits en hauteur. La région de Melun présente une forte activité de guêpes à cause de son mélange de zones urbaines et espaces verts.",
      },
      {
        question:
          "À quelle période de l'année peut-on trouver des nids de guêpes ?",
        answer:
          "Le cycle des guêpes et frelons commence au printemps (mars-avril) avec la construction des premiers nids par les reines. La colonie se développe progressivement jusqu'à atteindre son pic en août-septembre. C'est à cette période que les nids sont les plus gros et les plus dangereux, pouvant contenir jusqu'à 5000 individus. Les interventions sont plus nombreuses en été et début d'automne. En hiver, les nids sont naturellement abandonnés et ne seront pas réutilisés l'année suivante.",
      },
      {
        question:
          "Comment se déroule une intervention de destruction de nid de guêpes ?",
        answer:
          "Notre intervention se déroule en plusieurs étapes : 1) Diagnostic téléphonique et prise de rendez-vous, 2) Repérage précis du nid sur place, 3) Protection de l'environnement immédiat si nécessaire, 4) Traitement du nid avec un insecticide professionnel à effet foudroyant, 5) Retrait du nid lorsque possible, 6) Conseils de prévention pour éviter les récidives. Pour les nids accessibles, l'intervention dure généralement entre 30 minutes et 1 heure. Nous intervenons de préférence en soirée ou tôt le matin, lorsque les guêpes sont moins actives.",
      },
      {
        question:
          "Quels sont vos tarifs pour une destruction de nid de guêpes dans le 77 ?",
        answer:
          "Nos tarifs débutent à 85€ pour un nid facilement accessible. Le prix varie en fonction de plusieurs facteurs : la taille du nid, sa localisation (hauteur, difficulté d'accès), le type d'insecte (guêpe commune, frelon européen ou asiatique), et l'urgence de l'intervention. Nous vous proposons un devis précis après diagnostic téléphonique. Pour les copropriétés et entreprises du 77, nous proposons des forfaits spécifiques avec tarifs dégressifs. Tous nos devis sont gratuits et sans engagement.",
      },
      {
        question: "Les guêpes peuvent-elles revenir après traitement ?",
        answer:
          "Nos traitements éliminent complètement la colonie présente et nous offrons une garantie de 3 mois après intervention. Si des guêpes réapparaissent pendant cette période, nous intervenons à nouveau gratuitement. Il est important de noter que les nids ne sont jamais réutilisés d'une année sur l'autre. Cependant, si les conditions sont favorables (cavité abritée, exposition adaptée), il est possible qu'une nouvelle reine choisisse le même emplacement l'année suivante. Nous vous proposons des conseils de prévention personnalisés pour éviter ce cas de figure.",
      },
      {
        question: "Que faire en cas de piqûre de guêpe ou de frelon ?",
        answer:
          "En cas de piqûre, retirez délicatement le dard s'il est visible (sans le pincer), nettoyez la zone à l'eau savonneuse et appliquez du froid pour réduire l'inflammation. Une piqûre normale provoque douleur, rougeur et gonflement localisé pendant 24-48h. Consultez immédiatement un médecin en cas de : piqûres multiples, piqûre au visage ou dans la gorge, signes d'allergie (gonflement étendu, urticaire, difficultés respiratoires, malaise). Pour les personnes allergiques connues, utilisez votre auto-injecteur d'adrénaline si prescrit et appelez le 15 ou le 112.",
      },
      {
        question:
          "Intervenez-vous pour d'autres types d'insectes nuisibles en Île-de-France ?",
        answer:
          "Oui, outre la destruction des nids de guêpes et frelons, nous intervenons également pour l'élimination des nids de frelons asiatiques, le traitement des punaises de lit, la désinsectisation (cafards, puces, etc.), et la dératisation. Notre équipe est certifiée pour l'utilisation de biocides et intervient dans tout le département 77 et l'Île-de-France. Chaque type de nuisible nécessite un traitement spécifique que nos techniciens maîtrisent parfaitement pour garantir votre sécurité et l'efficacité de nos interventions.",
      },
    ],
  },
};
