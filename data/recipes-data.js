const RECIPES_DATA = [
    {
        "id": 1,
        "title": "Tacos al Pastor maison",
        "category": "Plat principal",
        "image": "https://www.1001recettes.net/wp-content/uploads/2025/12/1765929922-recette-authentique-de-tacos-al-pastor-maison-1024x590.jpg",
        "hashtag": [
            "#Mexicain",
            "#FastFood",
            "#Dîner"
        ],
        "description": "La recette authentique des tacos mexicains, avec du porc mariné aux épices et à l'ananas, grillé à la perfection.",
        "time": "45 min",
        "servings": "4 personnes",
        "difficulty": "Moyen",
        "ingredients": [
            "1kg d'épaule de porc",
            "4 tortillas",
            "1 ananas frais",
            "3 piments guajillo",
            "2 piments ancho",
            "Coriandre fraîche",
            "2 limes",
            "1 oignon blanc",
            "Sel & cumin",
            "2 gousses d'ail"
        ],
        "steps": [
            "Faire tremper les piments séchés dans l'eau chaude 20 min.",
            "Blender les piments avec l'ail, le cumin et le sel pour la marinade.",
            "Couper le porc en tranches fines et mariner 2h minimum.",
            "Griller la viande à feu vif des deux côtés.",
            "Réchauffer les tortillas sur la plancha.",
            "Assembler avec la viande, l'ananas grillé, la coriandre et le jus de lime."
        ]

    },
    {
        "id": 2,
        "title": "Spaghetti Carbonara classique",
        "category": "Plat principal",
        "image": "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800&q=80",
        "hashtag": [
            "#Italien",
            "#Pâtes",
            "#Dîner"
        ],
        "description": "La vraie carbonara romaine sans crème, avec des œufs, du guanciale croustillant et du pecorino.",
        "time": "20 min",
        "servings": "2 personnes",
        "difficulty": "Facile",
        "ingredients": [
            "200g de spaghetti",
            "100g de guanciale",
            "2 jaunes d'œufs",
            "1 œuf entier",
            "50g de pecorino romano",
            "Poivre noir",
            "Sel"
        ],
        "steps": [
            "Cuire les pâtes al dente dans l'eau salée.",
            "Faire revenir le guanciale à sec jusqu'à ce qu'il soit croustillant.",
            "Mélanger les jaunes, l'œuf entier et le pecorino râpé.",
            "Hors du feu, mélanger les pâtes égouttées avec le guanciale.",
            "Ajouter le mélange œufs-fromage et bien mélanger.",
            "Poivrer généreusement et servir immédiatement."
        ]

    },
    {
        "id": 3,
        "title": "Poulet tikka masala",
        "category": "Plat principal",
        "image": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&q=80",
        "hashtag": [
            "#Indien",
            "#Curry",
            "#Dîner"
        ],
        "description": "Un curry crémeux et parfumé avec du poulet tendre mariné au yaourt et aux épices indiennes.",
        "time": "50 min",
        "servings": "4 personnes",
        "difficulty": "Moyen",
        "ingredients": [
            "700g de poulet",
            "200ml de yaourt",
            "400ml de crème",
            "1 boîte de tomates concassées",
            "2 oignons",
            "4 gousses d'ail",
            "Gingembre frais",
            "Garam masala",
            "Curcuma",
            "Paprika fumé",
            "Coriandre fraîche"
        ],
        "steps": [
            "Mariner le poulet dans le yaourt, l'ail, le gingembre et les épices pendant 1h.",
            "Griller les morceaux de poulet au four é 220°C pendant 15 min.",
            "Faire revenir les oignons dans l'huile jusqu'à dorure.",
            "Ajouter les épices et les tomates, mijoter 10 min.",
            "Incorporer la crème et le poulet grillé.",
            "Laisser mijoter 15 min et garnir de coriandre."
        ]
    },
    {
        "id": 4,
        "title": "Ramen au miso",
        "category": "Soupe",
        "image": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&q=80",
        "hashtag": [
            "#Japonais",
            "#Soupe",
            "#Réconfort"
        ],
        "description": "Un bol de ramen profond et savoureux avec un bouillon riche au miso, des œufs mollets et du porc effiloché.",
        "time": "2h",
        "servings": "2 personnes",
        "difficulty": "Difficile",
        "ingredients": [
            "200g de nouilles ramen",
            "2 œufs",
            "200g de porc (chashu)",
            "3 cuil. de pâte miso",
            "1L de bouillon de poulet",
            "Algues nori",
            "Maïs",
            "Oignons verts",
            "Gingembre",
            "Ail"
        ],
        "steps": [
            "Préparer le chashu : rouler la poitrine de porc et braiser 1h30 dans la sauce soja.",
            "Faire les œufs mollets : cuire 7 min et mariner dans la sauce soja.",
            "Préparer le bouillon en faisant revenir l'ail et le gingembre.",
            "Incorporer le miso au bouillon chaud sans faire bouillir.",
            "Cuire les nouilles séparément selon les instructions.",
            "Assembler le bol avec les nouilles, le bouillon, la viande et les garnitures."
        ]
    },
    {
        "id": 5,
        "title": "Guacamole maison",
        "category": "Entrée",
        "image": "https://brandsitesplatform-res.cloudinary.com/image/fetch/w_570,c_scale,q_auto:eco,f_auto,fl_lossy,dpr_1.0,e_sharpen:85/https://assets.brandplatform.generalmills.com%2F-%2Fmedia%2Fproject%2Fgmi%2Foldelpaso%2Foldelpaso-fr%2Foepp%2Fnri%2Fguacamole-maison-hero-fr.png%3Fw%3D480%26rev%3Ddc0a3805d9a1480dbba5dfb442fc6c05",
        "hashtag": [
            "#Mexicain",
            "#Végétarien",
            "#Apéro"
        ],
        "description": "Un guacamole frais et authentique avec des avocats mérs, de la lime et des jalapeños.",
        "time": "10 min",
        "servings": "4 personnes",
        "difficulty": "Facile",
        "ingredients": [
            "3 avocats mérs",
            "1 lime",
            "1 tomate",
            "1/2 oignon rouge",
            "1 jalapeño",
            "Coriandre fraîche",
            "Sel",
            "Poivre"
        ],
        "steps": [
            "Couper les avocats en deux et récupérer la chair.",
            "écraser grossiérement à la fourchette.",
            "Ajouter le jus de lime, sel et poivre.",
            "Incorporer la tomate, l'oignon et le jalapeño finement coupés.",
            "Mélanger avec la coriandre fraîche ciselée.",
            "Servir immédiatement avec des chips de maïs."
        ]
    },
    {
        "id": 6,
        "title": "Croissants au beurre",
        "category": "Boulangerie",
        "image": "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=80",
        "hashtag": [
            "#Français",
            "#Boulangerie",
            "#Petit-déjeuner"
        ],
        "description": "Les vrais croissants feuilletés français, dorés et croustillants, avec une mie aérée au beurre.",
        "time": "4h",
        "servings": "12 croissants",
        "difficulty": "Difficile",
        "ingredients": [
            "500g de farine",
            "250g de beurre froid",
            "10g de sel",
            "60g de sucre",
            "20g de levure",
            "300ml de lait",
            "1 jaune d'œuf"
        ],
        "steps": [
            "Pétrir la farine, sel, sucre, levure et lait pour former la détrempe.",
            "Laisser reposer 1h au réfrigérateur.",
            "étaler la pâte et incorporer le beurre par tourage.",
            "Faire 3 tours simples en refroidissant 30 min entre chaque.",
            "étaler et découper des triangles, rouler en croissants.",
            "Dorer au jaune d'œuf et cuire 18 min é 190°C."
        ]
    },
    {
        "id": 7,
        "title": "Pad Thaï aux crevettes",
        "category": "Plat principal",
        "image": "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=800&q=80",
        "hashtag": [
            "#Thaïlandais",
            "#Nouilles",
            "#Fruits de mer"
        ],
        "description": "Le classique thaïlandais avec des nouilles de riz sautées, des crevettes et une sauce équilibrée sucrée-salée.",
        "time": "25 min",
        "servings": "2 personnes",
        "difficulty": "Moyen",
        "ingredients": [
            "200g de nouilles de riz",
            "200g de crevettes",
            "2 œufs",
            "3 cuil. de sauce de poisson",
            "2 cuil. de sauce tamarin",
            "1 cuil. de sucre de palme",
            "Cacahuètes",
            "Germes de soja",
            "Ciboulette",
            "Lime"
        ],
        "steps": [
            "Tremper les nouilles de riz dans l'eau chaude 20 min.",
            "Faire sauter les crevettes dans le wok à feu vif.",
            "Ajouter les nouilles égouttées et la sauce tamarin.",
            "Pousser sur le côté et brouiller les œufs dans le wok.",
            "Mélanger tout avec les germes de soja.",
            "Servir avec les cacahuètes, la ciboulette et les quartiers de lime."
        ]
    },
    {
        "id": 8,
        "title": "Tiramisu traditionnel",
        "category": "Dessert",
        "image": "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&q=80",
        "hashtag": [
            "#Italien",
            "#Dessert",
            "#Café"
        ],
        "description": "Le dessert italien par excellence, avec du mascarpone crémeux, du café fort et des biscuits à la cuillére.",
        "time": "30 min",
        "servings": "6 personnes",
        "difficulty": "Facile",
        "ingredients": [
            "500g de mascarpone",
            "4 œufs",
            "100g de sucre",
            "30 biscuits à la cuillére",
            "300ml de café fort",
            "2 cuil. de Marsala",
            "Cacao en poudre"
        ],
        "steps": [
            "Séparer les blancs des jaunes d'œufs.",
            "Blanchir les jaunes avec le sucre, puis incorporer le mascarpone.",
            "Monter les blancs en neige et les plier délicatement.",
            "Tremper rapidement les biscuits dans le café avec le Marsala.",
            "Alterner couches de biscuits et crème dans un plat.",
            "Réfrigérer 4h et saupoudrer de cacao avant de servir."
        ]
    },
    {
        "id": 9,
        "title": "Soupe à l'oignon gratinée",
        "category": "Soupe",
        "image": "https://producteurslaitiersducanada.ca/sites/default/files/styles/recipe_image/public/image_file_browser/conso_recipe/2025/french-onion-soup.png.jpeg?itok=FOqRacD1",
        "hashtag": [
            "#Français",
            "#Réconfort",
            "#Hiver"
        ],
        "description": "La soupe à l'oignon classique avec des oignons fondants caramélisés, du bouillon de bœuf et un gratin de fromage irrésistible.",
        "time": "1h",
        "servings": "4 personnes",
        "difficulty": "Moyen",
        "ingredients": [
            "1kg d'oignons",
            "1L de bouillon de bœuf",
            "150ml de vin blanc",
            "Baguette rassise",
            "150g de gruyère râpé",
            "2 cuil. de beurre",
            "Thym",
            "Laurier",
            "Sel & poivre"
        ],
        "steps": [
            "émincer finement les oignons.",
            "Faire fondre le beurre et cuire les oignons à feu doux 40 min jusqu'à caramélisation.",
            "Déglacer au vin blanc et laisser évaporer.",
            "Ajouter le bouillon, le thym et le laurier, mijoter 15 min.",
            "Verser dans des bols, déposer des tranches de pain.",
            "Couvrir de gruyère râpé et gratiner au four 5 min."
        ]
    },
    {
        "id": 10,
        "title": "Burger smash classique",
        "category": "Plat principal",
        "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80",
        "hashtag": [
            "#Américain",
            "#FastFood",
            "#Déjeuner"
        ],
        "description": "Un burger smash avec deux galettes ultra-croustillantes, du fromage fondu, des cornichons et une sauce secrète maison.",
        "time": "20 min",
        "servings": "2 personnes",
        "difficulty": "Facile",
        "ingredients": [
            "400g de bœuf haché 20%MG",
            "4 tranches de cheddar",
            "2 brioche buns",
            "Cornichons",
            "Oignon",
            "Salade",
            "Mayonnaise",
            "Moutarde",
            "Ketchup"
        ],
        "steps": [
            "Diviser le bœuf en 4 boules sans trop travailler.",
            "Faire chauffer une plancha en fonte à feu trés vif.",
            "Déposer les boules et écraser immédiatement avec une spatule.",
            "Saler, cuire 90 secondes puis retourner.",
            "Déposer le cheddar et couvrir pour le faire fondre.",
            "Assembler le burger avec la sauce maison et les garnitures."
        ]
    },
    {
        "id": 11,
        "title": "Moules mariniéres",
        "category": "Plat principal",
        "image": "https://www.unjourunerecette.fr/images/moules-marinieres.webp",
        "hashtag": [
            "#Français",
            "#Fruits de mer",
            "#été"
        ],
        "description": "Des moules fraîches cuites dans un bouillon de vin blanc et d'échalotes, servies avec des frites dorées.",
        "time": "20 min",
        "servings": "2 personnes",
        "difficulty": "Facile",
        "ingredients": [
            "2kg de moules",
            "200ml de vin blanc sec",
            "3 échalotes",
            "2 gousses d'ail",
            "Persil frais",
            "50g de beurre",
            "Poivre"
        ],
        "steps": [
            "Nettoyer et gratter les moules, éliminer celles ouvertes.",
            "Faire fondre le beurre, faire revenir les échalotes et l'ail.",
            "Déglacer au vin blanc et porter é ébullition.",
            "Ajouter les moules, couvrir et cuire 5 min à feu vif.",
            "Secouer la casserole à mi-cuisson.",
            "Servir dés que toutes les moules sont ouvertes, garnir de persil."
        ]
    },
    {
        "id": 12,
        "title": "Pizza Margherita napolitaine",
        "category": "Plat principal",
        "image": "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80",
        "hashtag": [
            "#Italien",
            "#Pizza",
            "#Végétarien"
        ],
        "description": "La pizza la plus iconique du monde avec une pâte fine et croustillante, une sauce tomate San Marzano et de la mozzarella di bufala.",
        "time": "2h30",
        "servings": "2 pizzas",
        "difficulty": "Moyen",
        "ingredients": [
            "500g de farine 00",
            "300ml d'eau",
            "7g de levure séche",
            "10g de sel",
            "400g de tomates San Marzano",
            "250g de mozzarella di bufala",
            "Feuilles de basilic",
            "Huile d'olive"
        ],
        "steps": [
            "Mélanger la farine, l'eau, la levure et le sel pour former la pâte.",
            "Pétrir 10 min et laisser lever 2h.",
            "écraser les tomates San Marzano à la main, saler.",
            "étaler la pâte finement sur une surface farinée.",
            "Napper de sauce tomate et répartir la mozzarella déchirée.",
            "Cuire 8-10 min dans un four préchauffé é 280°C, garnir de basilic frais."
        ]
    },
    {
        "id": 13,
        "title": "Bœuf bourguignon",
        "category": "Plat principal",
        "image": "https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=800&q=80",
        "hashtag": [
            "#Français",
            "#Mijotés",
            "#Hiver"
        ],
        "description": "Le grand classique bourguignon avec du bœuf braisé dans le vin rouge, des champignons et des lardons.",
        "time": "3h",
        "servings": "6 personnes",
        "difficulty": "Moyen",
        "ingredients": [
            "1.5kg de paleron de bœuf",
            "750ml de vin rouge de Bourgogne",
            "200g de lardons",
            "300g de champignons",
            "3 carottes",
            "2 oignons",
            "Bouquet garni",
            "Farine",
            "Beurre",
            "Ail"
        ],
        "steps": [
            "Couper le bœuf en gros cubes et faire mariner dans le vin 12h.",
            "Faire revenir les lardons, réserver.",
            "Faire dorer les morceaux de bœuf de tous côtés.",
            "Ajouter les légumes et la farine, verser la marinade.",
            "Couvrir et mijoter au four é 160°C pendant 2h30.",
            "Ajouter les champignons sautés 30 min avant la fin."
        ]
    },
    {
        "id": 14,
        "title": "Shakshuka aux poivrons",
        "category": "Petit-déjeuner",
        "image": "https://images.unsplash.com/photo-1590412200988-a436970781fa?w=800&q=80",
        "hashtag": [
            "#Moyen-Orient",
            "#Végétarien",
            "#Brunch"
        ],
        "description": "Des œufs pochés dans une sauce tomate épicée aux poivrons, typique du Maghreb et du Moyen-Orient.",
        "time": "30 min",
        "servings": "2 personnes",
        "difficulty": "Facile",
        "ingredients": [
            "4 œufs",
            "1 boîte de tomates concassées",
            "2 poivrons rouges",
            "1 oignon",
            "3 gousses d'ail",
            "Cumin",
            "Paprika",
            "Harissa",
            "Persil frais",
            "Huile d'olive"
        ],
        "steps": [
            "Faire revenir l'oignon et l'ail dans l'huile d'olive.",
            "Ajouter les poivrons coupés en dés et cuire 5 min.",
            "Incorporer les tomates, le cumin, le paprika et l'harissa.",
            "Laisser mijoter 10 min à feu doux.",
            "Faire des puits dans la sauce et casser les œufs dedans.",
            "Couvrir et cuire jusqu'à ce que les blancs soient pris. Garnir de persil."
        ]
    },
    {
        "id": 15,
        "title": "Crème brélée à la vanille",
        "category": "Dessert",
        "image": "https://images.radio-canada.ca/q_auto,w_844/v1/alimentation/recette/16x9/creme-brulee-recettes-mordu.jpg",
        "hashtag": [
            "#Français",
            "#Dessert",
            "#Classique"
        ],
        "description": "La crème brélée onctueuse avec une croûte de caramel croquante, parfumée à la vanille de Madagascar.",
        "time": "1h",
        "servings": "4 personnes",
        "difficulty": "Moyen",
        "ingredients": [
            "500ml de crème entière",
            "5 jaunes d'œufs",
            "100g de sucre",
            "1 gousse de vanille",
            "Sucre roux pour la croûte"
        ],
        "steps": [
            "Préchauffer le four é 160°C.",
            "Faire chauffer la crème avec la gousse de vanille fendue.",
            "Blanchir les jaunes avec le sucre.",
            "Verser la crème chaude sur les jaunes en fouettant.",
            "Répartir dans des ramequins et cuire au bain-marie 45 min.",
            "Refroidir, saupoudrer de sucre roux et caraméliser au chalumeau."
        ]
    },
    {
        "id": 16,
        "title": "Gyozas japonais au porc",
        "category": "Entrée",
        "image": "https://www.maspatule.com/blog/wp-content/uploads/2020/01/mise-en-avant-gyoza-800x627.jpg",
        "hashtag": [
            "#Japonais",
            "#Apéro",
            "#Porc"
        ],
        "description": "Des raviolis japonais dorés et croustillants en dessous, farcis au porc, chou et gingembre.",
        "time": "1h",
        "servings": "4 personnes",
        "difficulty": "Moyen",
        "ingredients": [
            "30 feuilles é gyoza",
            "300g de porc haché",
            "200g de chou chinois",
            "2 cuil. de sauce soja",
            "1 cuil. de sésame",
            "Gingembre frais",
            "Ail",
            "Oignons verts"
        ],
        "steps": [
            "Hacher finement le chou, saler et presser pour retirer l'eau.",
            "Mélanger le porc, le chou, la sauce soja, le gingembre et l'ail.",
            "Déposer une cuillére de farce au centre de chaque feuille.",
            "Humidifier le bord et plisser pour fermer les gyozas.",
            "Faire frire dans l'huile 2 min puis verser de l'eau et couvrir 3 min.",
            "Servir avec une sauce soja-vinaigre de riz."
        ]
    },
    {
        "id": 17,
        "title": "Couscous royal maison",
        "category": "Plat principal",
        "image": "https://halalfrais.fr/cdn/shop/articles/Recette-Couscous-Royal_55a1391e-ad15-4236-a18e-0ffe1c2b0152_1400x.jpg?v=1763382764",
        "hashtag": [
            "#Maghrébin",
            "#Familial",
            "#Fête"
        ],
        "description": "Le couscous royal avec agneau, merguez, poulet et légumes mijotés dans un bouillon parfumé.",
        "time": "2h",
        "servings": "6 personnes",
        "difficulty": "Moyen",
        "ingredients": [
            "500g de semoule",
            "400g d'épaule d'agneau",
            "4 merguez",
            "2 cuisses de poulet",
            "3 carottes",
            "2 courgettes",
            "1 boîte de pois chiches",
            "Ras el-hanout",
            "Harissa",
            "Bouillon"
        ],
        "steps": [
            "Faire revenir les viandes dans l'huile d'olive.",
            "Ajouter les oignons, les épices et le bouillon.",
            "Mijoter 45 min, ajouter les légumes durs.",
            "Ajouter les courgettes et les pois chiches 20 min avant la fin.",
            "Préparer la semoule selon les instructions, ajouter du beurre.",
            "Servir la semoule en déme avec les viandes et légumes par-dessus."
        ]
    },
    {
        "id": 18,
        "title": "Pancakes américains moelleux",
        "category": "Petit-déjeuner",
        "image": "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=800&q=80",
        "hashtag": [
            "#Américain",
            "#Brunch",
            "#Doux"
        ],
        "description": "Des pancakes épais et moelleux, parfaits pour un brunch avec du sirop d'érable et des fruits rouges.",
        "time": "20 min",
        "servings": "4 personnes",
        "difficulty": "Facile",
        "ingredients": [
            "200g de farine",
            "2 œufs",
            "250ml de lait ribot",
            "30g de beurre fondu",
            "2 cuil. de sucre",
            "1 sachet de levure",
            "1 cuil. de bicarbonate",
            "Sel"
        ],
        "steps": [
            "Mélanger les ingrédients secs dans un bol.",
            "Battre les œufs avec le lait ribot et le beurre fondu.",
            "Incorporer le liquide aux poudres sans trop mélanger.",
            "Laisser reposer la pâte 5 min.",
            "Cuire sur poêle anti-adhésive huilée à feu moyen.",
            "Retourner quand des bulles apparaissent en surface."
        ]
    },
    {
        "id": 19,
        "title": "Souvlaki grec au poulet",
        "category": "Plat principal",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
        "hashtag": [
            "#Grec",
            "#Grillé",
            "#été"
        ],
        "description": "Des brochettes de poulet marinées à l'huile d'olive, au citron et aux herbes, servies avec du pain pita et du tzatziki.",
        "time": "40 min",
        "servings": "4 personnes",
        "difficulty": "Facile",
        "ingredients": [
            "800g de filet de poulet",
            "4 pains pita",
            "2 citrons",
            "Origan séché",
            "Thym",
            "Ail en poudre",
            "Huile d'olive",
            "Sel & poivre"
        ],
        "steps": [
            "Couper le poulet en cubes et mariner avec l'huile, le jus de citron et les épices 30 min.",
            "Enfiler les cubes sur des brochettes.",
            "Griller 8-10 min sur le barbecue ou au grill du four.",
            "Préparer le tzatziki avec du yaourt grec, du concombre râpé et de l'ail.",
            "Réchauffer les pitas.",
            "Servir les brochettes sur le pita avec le tzatziki, des tomates et de l'oignon."
        ]
    },
    {
        "id": 20,
        "title": "Cheesecake new-yorkais",
        "category": "Dessert",
        "image": "https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=800&q=80",
        "hashtag": [
            "#Américain",
            "#Dessert",
            "#Fromage"
        ],
        "description": "Le cheesecake crémeux et dense à la new-yorkaise, avec une base de biscuits Graham et un cSur onctueux au cream cheese.",
        "time": "1h30",
        "servings": "8 personnes",
        "difficulty": "Moyen",
        "ingredients": [
            "600g de cream cheese",
            "200g de biscuits Graham",
            "100g de beurre fondu",
            "3 œufs",
            "150g de sucre",
            "200ml de crème fraîche",
            "Zeste de citron",
            "Extrait de vanille"
        ],
        "steps": [
            "Mixer les biscuits avec le beurre fondu et presser dans un moule.",
            "Battre le cream cheese avec le sucre jusqu'à étre lisse.",
            "Incorporer les œufs un é un, puis la crème et la vanille.",
            "Verser sur la base de biscuits.",
            "Cuire au bain-marie é 160°C pendant 1h.",
            "Refroidir au réfrigérateur 8h avant de servir."
        ]
    },
    {
        "id": 21,
        "title": "Risotto aux champignons",
        "category": "Plat principal",
        "image": "https://cdn.pratico-pratiques.com/app/uploads/sites/3/2021/05/26151521/risotto-aux-champignons-et-asperges.jpg",
        "hashtag": [
            "#Italien",
            "#Végétarien",
            "#Crémeux"
        ],
        "description": "Un risotto fondant aux champignons sauvages avec du parmesan et une touche de truffe.",
        "time": "40 min",
        "servings": "4 personnes",
        "difficulty": "Moyen",
        "ingredients": [
            "400g de riz arborio",
            "300g de champignons mixtes",
            "1L de bouillon de légumes",
            "150ml de vin blanc",
            "1 oignon",
            "2 gousses d'ail",
            "100g de parmesan",
            "50g de beurre",
            "Huile de truffe"
        ],
        "steps": [
            "Faire revenir l'oignon et l'ail dans l'huile.",
            "Toaster le riz à sec 2 min, déglacer au vin blanc.",
            "Ajouter le bouillon louche par louche en remuant constamment.",
            "Faire sauter les champignons séparément dans le beurre.",
            "Incorporer les champignons au risotto à mi-cuisson.",
            "Hors du feu, mantecarer avec le beurre et le parmesan."
        ]
    },
    {
        "id": 22,
        "title": "Waffles belges croustillants",
        "category": "Dessert",
        "image": "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=800&q=80",
        "hashtag": [
            "#Belge",
            "#Brunch",
            "#Dessert"
        ],
        "description": "Les vraies gaufres belges de Liège, caramélisées au sucre perlé, croustillantes à l'extérieur et moelleuses à l'intérieur.",
        "time": "1h30",
        "servings": "8 gaufres",
        "difficulty": "Moyen",
        "ingredients": [
            "500g de farine",
            "250g de beurre",
            "200g de sucre perlé",
            "2 œufs",
            "200ml de lait tiède",
            "10g de levure de boulanger",
            "1 sachet de sucre vanillé",
            "Sel"
        ],
        "steps": [
            "Dissoudre la levure dans le lait tiède.",
            "Mélanger la farine, le sel, les œufs et le lait.",
            "Incorporer le beurre mou en morceaux.",
            "Laisser lever 1h et ajouter le sucre perlé.",
            "Diviser en boules et cuire dans le gaufrier bien chaud.",
            "Servir avec de la crème chantilly et des fraises."
        ]
    },
    {
        "id": 23,
        "title": "Ceviche péruvien au poisson blanc",
        "category": "Entrée",
        "image": "https://cuisine-gourmet.com/wp-content/uploads/2023/12/ceviche-poisson-citrons.png",
        "hashtag": [
            "#Péruvien",
            "#Poisson",
            "#Frais"
        ],
        "description": "Le ceviche authentique avec du poisson blanc mariné dans le jus de citron vert, le piment et le céleri.",
        "time": "30 min",
        "servings": "4 personnes",
        "difficulty": "Facile",
        "ingredients": [
            "500g de poisson blanc frais",
            "150ml de jus de citron vert",
            "1 ají amarillo",
            "1/2 oignon rouge",
            "Coriandre fraîche",
            "Sel",
            "Maïs cuit",
            "Patate douce"
        ],
        "steps": [
            "Couper le poisson en dés de 2 cm.",
            "Saler et laisser reposer 5 min.",
            "Verser le jus de citron vert et mélanger.",
            "Ajouter le piment, l'oignon et la coriandre.",
            "Mariner 10 min maximum.",
            "Servir immédiatement avec le maïs et la patate douce."
        ]
    },
    {
        "id": 24,
        "title": "Fondant au chocolat coulant",
        "category": "Dessert",
        "image": "https://www.cookomix.com/wp-content/uploads/2016/05/moelleux-chocolat-coeur-coulant-thermomix-800x600.jpg",
        "hashtag": [
            "#Chocolat",
            "#Dessert",
            "#Réconfort"
        ],
        "description": "Un fondant au chocolat avec un cSur coulant irrésistible, à servir chaud avec une boule de glace vanille.",
        "time": "25 min",
        "servings": "4 personnes",
        "difficulty": "Facile",
        "ingredients": [
            "200g de chocolat noir 70%",
            "150g de beurre",
            "4 œufs",
            "100g de sucre",
            "50g de farine",
            "Cacao pour les moules"
        ],
        "steps": [
            "Préchauffer le four é 200°C.",
            "Faire fondre le chocolat avec le beurre au bain-marie.",
            "Blanchir les œufs avec le sucre.",
            "Incorporer le chocolat fondu puis la farine.",
            "Beurrer et cacao les ramequins, remplir é 3/4.",
            "Cuire 10-12 min : le centre doit rester tremblotant."
        ]
    },
    {
        "id": 25,
        "title": "Salade niçoise traditionnelle",
        "category": "Entrée",
        "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80",
        "hashtag": [
            "#Français",
            "#Salade",
            "#été"
        ],
        "description": "La vraie salade niçoise avec thon, anchois, œufs durs, tomates, olives et haricots verts.",
        "time": "25 min",
        "servings": "4 personnes",
        "difficulty": "Facile",
        "ingredients": [
            "200g de thon en boîte",
            "4 œufs",
            "200g de haricots verts",
            "4 tomates",
            "1 poivron",
            "Olives niçoises",
            "Anchois",
            "Basilic",
            "Huile d'olive",
            "Vinaigre de vin"
        ],
        "steps": [
            "Cuire les haricots verts à l'eau bouillante salée 5 min.",
            "Faire cuire les œufs durs 10 min.",
            "Couper les tomates et le poivron en morceaux.",
            "Préparer la vinaigrette à l'huile d'olive et au vinaigre.",
            "Disposer tous les ingrédients sur un plat.",
            "Arroser de vinaigrette et garnir de basilic frais."
        ]
    },
    {
        "id": 26,
        "title": "Bibimbap coréen",
        "category": "Plat principal",
        "image": "https://images.unsplash.com/photo-1553163147-622ab57be1c7?w=800&q=80",
        "hashtag": [
            "#Coréen",
            "#Riz",
            "#Sain"
        ],
        "description": "Le plat coréen emblématique avec du riz, des légumes variés, du bœuf et un œuf, servi avec la sauce gochujang.",
        "time": "45 min",
        "servings": "2 personnes",
        "difficulty": "Moyen",
        "ingredients": [
            "300g de riz",
            "150g de bœuf haché",
            "2 œufs",
            "épinards",
            "Carottes",
            "Courgettes",
            "Champignons shiitake",
            "Sauce soja",
            "Gochujang",
            "Huile de sésame"
        ],
        "steps": [
            "Cuire le riz selon les instructions.",
            "Faire mariner le bœuf dans la sauce soja et l'huile de sésame.",
            "Sauter chaque légume séparément avec de l'huile.",
            "Cuire le bœuf et les œufs au plat.",
            "Disposer le riz dans un bol, placer les légumes en sections.",
            "Déposer l'œuf au centre et servir avec la sauce gochujang."
        ]
    },
    {
        "id": 27,
        "title": "Quiche lorraine maison",
        "category": "Plat principal",
        "image": "https://assets.afcdn.com/recipe/20161128/28118_w1024h1024c1cx845cy3505cxt0cyt1385cxb3451cyb5177.webp",
        "hashtag": [
            "#Français",
            "#Tarte",
            "#Déjeuner"
        ],
        "description": "La quiche lorraine traditionnelle avec une garniture de lardons dorés dans un appareil crémeux aux œufs.",
        "time": "55 min",
        "servings": "6 personnes",
        "difficulty": "Facile",
        "ingredients": [
            "1 pâte brisée",
            "200g de lardons",
            "3 œufs",
            "200ml de crème fraîche",
            "100ml de lait",
            "100g de gruyère râpé",
            "Sel",
            "Poivre",
            "Noix de muscade"
        ],
        "steps": [
            "Préchauffer le four é 180°C, foncer le moule avec la pâte brisée.",
            "Faire revenir les lardons à sec sans matière grasse.",
            "Mélanger les œufs, la crème, le lait, sel, poivre et muscade.",
            "Répartir les lardons sur la pâte.",
            "Verser l'appareil et parsemer de gruyère.",
            "Cuire 35-40 min jusqu'à ce que la quiche soit dorée et prise."
        ]
    },
    {
        "id": 28,
        "title": "Falafel croustillant",
        "category": "Entrée",
        "image": "https://images.unsplash.com/photo-1593001872095-7d5b3868fb1d?w=800&q=80",
        "hashtag": [
            "#Moyen-Orient",
            "#Végétarien",
            "#Street food"
        ],
        "description": "Des falafels croquants aux pois chiches et herbes fraîches, servis dans un pita avec tahini et légumes.",
        "time": "40 min",
        "servings": "4 personnes",
        "difficulty": "Moyen",
        "ingredients": [
            "400g de pois chiches secs (trempés)",
            "1 oignon",
            "4 gousses d'ail",
            "Persil frais",
            "Coriandre fraîche",
            "Cumin",
            "Coriandre en poudre",
            "Bicarbonate",
            "Sel",
            "Huile de friture"
        ],
        "steps": [
            "égoutter les pois chiches trempés (non cuits).",
            "Mixer grossiérement avec l'oignon, l'ail et les herbes.",
            "Ajouter les épices, le sel et le bicarbonate.",
            "Former des boules ou des galettes.",
            "Faire frire dans l'huile é 180°C pendant 3-4 min.",
            "égoutter sur du papier absorbant et servir chaud."
        ]
    },
    {
        "id": 29,
        "title": "Mousse au chocolat légère",
        "category": "Dessert",
        "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjqNJGfpmiOUpqs2EraWfnoAGcCz3D3mwyKk00uahPTr9eqWkg4xFjKrrfC_mNHrKXVz2EdcXi3aW985mD650SUz7RVV3Dtc7Ca2ST0oSqP_mDjyBJxHYw6WAM-cTt6gTalUlRyNAbInfX68lYYPz_tP8Y7w5WJdAczDilDe5m56-1Tgly-AZakhbjpVgk/s16000-rw/recette-mousse-au-chocolat-onctueuse.jpg",
        "hashtag": [
            "#Chocolat",
            "#Dessert",
            "#Facile"
        ],
        "description": "Une mousse au chocolat aérienne et intense, réalisée avec seulement trois ingrédients.",
        "time": "20 min",
        "servings": "6 personnes",
        "difficulty": "Facile",
        "ingredients": [
            "200g de chocolat noir",
            "6 blancs d'œufs",
            "3 jaunes d'œufs",
            "1 pincée de sel"
        ],
        "steps": [
            "Faire fondre le chocolat au bain-marie.",
            "Incorporer les jaunes d'œufs hors du feu.",
            "Monter les blancs en neige ferme avec le sel.",
            "Incorporer un tiers des blancs au chocolat pour détendre.",
            "Plier délicatement le reste des blancs en trois fois.",
            "Réfrigérer 2h minimum avant de servir."
        ]
    },
    {
        "id": 30,
        "title": "Lasagnes à la bolognaise",
        "category": "Plat principal",
        "image": "https://img.cuisineaz.com/660x495/2024/07/26/i199120-lasagnes-a-la-bolognaise-facile.webp",
        "hashtag": [
            "#Italien",
            "#Pâtes",
            "#Familial"
        ],
        "description": "Des lasagnes généreuses avec une bolognaise mijotée, une béchamel maison et du parmesan gratiné.",
        "time": "2h",
        "servings": "6 personnes",
        "difficulty": "Moyen",
        "ingredients": [
            "500g de feuilles de lasagne",
            "500g de bœuf haché",
            "200g de porc haché",
            "1 boîte de tomates concassées",
            "150ml de lait",
            "50g de farine",
            "50g de beurre",
            "Parmesan",
            "Oignon",
            "Ail",
            "Carotte"
        ],
        "steps": [
            "Préparer la bolognaise : faire revenir oignon, ail, carotte puis les viandes.",
            "Ajouter les tomates et mijoter 1h à feu doux.",
            "Préparer la béchamel : faire fondre le beurre, ajouter la farine, puis le lait chaud.",
            "Alterner couches de pâtes, bolognaise et béchamel dans un plat.",
            "Terminer par la béchamel et le parmesan.",
            "Cuire 45 min é 180°C jusqu'à gratiner."
        ]
    },
    {
        "id": 31,
        "title": "Tom Yum Goong thaïlandais",
        "category": "Soupe",
        "image": "https://warningsugarygoodness.com/wp-content/uploads/2024/06/tom-yum-goong-spicy-thai-soup.jpg",
        "hashtag": [
            "#Thaïlandais",
            "#Soupe",
            "#épicé"
        ],
        "description": "La soupe aigre-piquante thaïlandaise aux crevettes avec citronnelle, galanga et feuilles de kaffir.",
        "time": "30 min",
        "servings": "4 personnes",
        "difficulty": "Moyen",
        "ingredients": [
            "400g de crevettes",
            "1L de bouillon",
            "3 tiges de citronnelle",
            "5 feuilles de kaffir",
            "Galanga",
            "Champignons",
            "Tomates cerises",
            "Sauce de poisson",
            "Pâte de piment",
            "Citron vert",
            "Coriandre"
        ],
        "steps": [
            "Porter le bouillon é ébullition avec la citronnelle, le galanga et le kaffir.",
            "Ajouter la pâte de piment et la sauce de poisson.",
            "Incorporer les champignons et les tomates cerises.",
            "Ajouter les crevettes et cuire 3 min.",
            "Terminer avec le jus de citron vert.",
            "Garnir de coriandre fraîche et servir trés chaud."
        ]
    },
    {
        "id": 32,
        "title": "Crépes bretonnes",
        "category": "Dessert",
        "image": "https://images.unsplash.com/photo-1519676867240-f03562e64548?w=800&q=80",
        "hashtag": [
            "#Français",
            "#Crépe",
            "#Dessert"
        ],
        "description": "Les crépes fines et dorées à la bretonne, à la farine de froment, é garnir de beurre salé et de sucre.",
        "time": "30 min",
        "servings": "12 crépes",
        "difficulty": "Facile",
        "ingredients": [
            "250g de farine",
            "3 œufs",
            "500ml de lait",
            "50g de beurre fondu",
            "1 cuil. de rhum",
            "1 cuil. de sucre",
            "Sel"
        ],
        "steps": [
            "Mélanger la farine et le sel, creuser un puits.",
            "Ajouter les œufs et mélanger.",
            "Incorporer le lait progressivement pour éviter les grumeaux.",
            "Ajouter le beurre fondu et le rhum.",
            "Laisser reposer 1h.",
            "Cuire dans une poêle beurrée chaude, 1 min de chaque côté."
        ]
    },
    {
        "id": 33,
        "title": "Poulet réti parfait",
        "category": "Plat principal",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVtjEnEJYFrPFi3wB5hD0QSZonDnM29M8EfQ&s",
        "hashtag": [
            "#Français",
            "#Poulet",
            "#Dimanche"
        ],
        "description": "Le poulet réti croustillant et juteux du dimanche, avec des herbes fraîches et des légumes confits.",
        "time": "1h30",
        "servings": "4 personnes",
        "difficulty": "Facile",
        "ingredients": [
            "1 poulet entier de 1.5kg",
            "50g de beurre",
            "Thym",
            "Romarin",
            "Laurier",
            "4 gousses d'ail",
            "1 citron",
            "4 pommes de terre",
            "2 carottes",
            "Sel & poivre"
        ],
        "steps": [
            "Préchauffer le four é 200°C.",
            "Masser le poulet avec le beurre, sel, poivre et herbes.",
            "Farcir l'intérieur avec le citron coupé, l'ail et les herbes.",
            "Disposer les légumes autour dans le plat.",
            "Rôtir 1h15 en arrosant régulièrement.",
            "Laisser reposer 10 min avant de découper."
        ]
    },
    {
        "id": 34,
        "title": "Hummus crémeux à l'ail",
        "category": "Entrée",
        "image": "https://guide-alimentaire.canada.ca/sites/default/files/2020-07/hummus.jpg",
        "hashtag": [
            "#Moyen-Orient",
            "#Végétarien",
            "#Apéro"
        ],
        "description": "Un hummus lisse et crémeux préparé à partir de pois chiches, de tahini et d'ail réti.",
        "time": "15 min",
        "servings": "6 personnes",
        "difficulty": "Facile",
        "ingredients": [
            "400g de pois chiches cuits",
            "3 cuil. de tahini",
            "2 gousses d'ail",
            "1 citron",
            "Huile d'olive",
            "Cumin",
            "Sel",
            "Paprika pour la garniture"
        ],
        "steps": [
            "égoutter les pois chiches en réservant le liquide.",
            "Mixer les pois chiches avec le tahini, l'ail et le jus de citron.",
            "Ajouter le liquide de cuisson pour ajuster la texture.",
            "Assaisonner avec le cumin et le sel.",
            "Mixer 3 min pour obtenir une texture trés lisse.",
            "Servir avec un filet d'huile d'olive, du paprika et du persil."
        ]
    },
    {
        "id": 35,
        "title": "Maki sushis au saumon",
        "category": "Plat principal",
        "image": "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&q=80",
        "hashtag": [
            "#Japonais",
            "#Sushi",
            "#Poisson"
        ],
        "description": "Des makis frais au saumon avec du riz vinaigré, du concombre et de l'avocat, roulés dans des algues nori.",
        "time": "1h",
        "servings": "4 personnes",
        "difficulty": "Moyen",
        "ingredients": [
            "300g de riz é sushi",
            "200g de saumon frais",
            "1 avocat",
            "1 concombre",
            "6 feuilles de nori",
            "60ml de vinaigre de riz",
            "2 cuil. de sucre",
            "1 cuil. de sel",
            "Sauce soja",
            "Wasabi"
        ],
        "steps": [
            "Cuire le riz et assaisonner avec le mélange vinaigré-sucré-salé.",
            "Laisser refroidir é température ambiante.",
            "Déposer une feuille de nori sur le makisu.",
            "étaler le riz uniformément en laissant 2 cm au bord.",
            "Placer les garnitures en ligne et rouler fermement.",
            "Couper en 8 morceaux avec un couteau mouillé."
        ]
    },
    {
        "id": 36,
        "title": "Tarte Tatin aux pommes",
        "category": "Dessert",
        "image": "https://img.cuisineaz.com/660x495/2016/10/08/i94576-tarte-tatin-aux-pommes.jpg",
        "hashtag": [
            "#Français",
            "#Tarte",
            "#Pomme"
        ],
        "description": "La tarte renversée aux pommes caramélisées, croustillante et fondante, servie tiède avec de la crème fraîche.",
        "time": "1h",
        "servings": "6 personnes",
        "difficulty": "Moyen",
        "ingredients": [
            "6 pommes Golden",
            "150g de sucre",
            "80g de beurre",
            "1 pâte feuilletée",
            "Cannelle"
        ],
        "steps": [
            "Peler et couper les pommes en quartiers.",
            "Dans un moule allant au four, faire un caramel à sec.",
            "Ajouter le beurre et disposer les pommes serrées.",
            "Saupoudrer de cannelle et couvrir avec la pâte feuilletée.",
            "Cuire 30 min é 190°C.",
            "Retourner immédiatement sur un plat et servir tiède."
        ]
    },
    {
        "id": 37,
        "title": "Curry vert thaïlandais au poulet",
        "category": "Plat principal",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTemG399DLrBaZS-oWieLVXZX8_oF9lg_IP3A&s",
        "hashtag": [
            "#Thaïlandais",
            "#Curry",
            "#Poulet"
        ],
        "description": "Un curry vert parfumé et crémeux avec du lait de coco, des légumes croquants et des feuilles de basilic thaï.",
        "time": "35 min",
        "servings": "4 personnes",
        "difficulty": "Moyen",
        "ingredients": [
            "600g de poulet",
            "400ml de lait de coco",
            "3 cuil. de pâte de curry vert",
            "Aubergines thaï",
            "Poivrons",
            "Bambou en boîte",
            "Basilic thaï",
            "Sauce de poisson",
            "Sucre de palme"
        ],
        "steps": [
            "Faire frire la pâte de curry dans l'huile jusqu'à parfumé.",
            "Ajouter la moitié du lait de coco et faire bouillir.",
            "Ajouter le poulet coupé en morceaux.",
            "Verser le reste du lait de coco et les légumes.",
            "Assaisonner avec la sauce de poisson et le sucre de palme.",
            "Terminer avec le basilic thaï frais et servir avec du riz."
        ]
    },
    {
        "id": 38,
        "title": "Bruschetta tomate-basilic",
        "category": "Entrée",
        "image": "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=800&q=80",
        "hashtag": [
            "#Italien",
            "#Végétarien",
            "#Apéro"
        ],
        "description": "Des tranches de pain grillé frottées à l'ail, garnies de tomates fraîches et de basilic en abondance.",
        "time": "10 min",
        "servings": "4 personnes",
        "difficulty": "Facile",
        "ingredients": [
            "1 baguette",
            "4 tomates",
            "Basilic frais",
            "3 gousses d'ail",
            "Huile d'olive extra vierge",
            "Sel de mer",
            "Poivre"
        ],
        "steps": [
            "Couper la baguette en tranches et griller au four ou à la plancha.",
            "Frotter immédiatement avec les gousses d'ail.",
            "Couper les tomates en dés, saler et laisser dégorger 5 min.",
            "Assaisonner les tomates avec l'huile d'olive et le poivre.",
            "Disposer les tomates sur les tranches grillées.",
            "Garnir de feuilles de basilic frais et servir immédiatement."
        ]
    },
    {
        "id": 39,
        "title": "Baklava à la pistache",
        "category": "Dessert",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSekbB9tVuUehY3r50Q6D7HXx0WHfGHU7U1w&s",
        "hashtag": [
            "#Turc",
            "#Pâtisserie",
            "#Miel"
        ],
        "description": "Le baklava croustillant aux pistaches, imbibé d'un sirop parfumé à l'eau de rose et au miel.",
        "time": "1h30",
        "servings": "20 pièces",
        "difficulty": "Difficile",
        "ingredients": [
            "500g de pâte filo",
            "300g de pistaches",
            "250g de beurre clarifié",
            "300g de sucre",
            "200ml d'eau",
            "2 cuil. de miel",
            "Eau de rose",
            "Eau de fleur d'oranger"
        ],
        "steps": [
            "Mixer grossiérement les pistaches.",
            "Préparer le sirop avec le sucre, l'eau, le miel et les eaux florales.",
            "Beurrer un plat et superposer 8 feuilles de filo en les badigeonnant de beurre.",
            "Parsemer de pistaches et alterner avec les feuilles de filo.",
            "Découper en losanges avant cuisson.",
            "Cuire 45 min é 160°C et verser le sirop froid sur le baklava chaud."
        ]
    },
    {
        "id": 40,
        "title": "Pho bœuf vietnamien",
        "category": "Soupe",
        "image": "https://iod.keplrstatic.com/api/x_29,y_0,w_893,h_893,c_crop/c_fill,dpr_auto,f_auto,q_70,w_750/mon_marche/Le_Pho_buf_vietnamien_express.png",
        "hashtag": [
            "#Vietnamien",
            "#Soupe",
            "#Bœuf"
        ],
        "description": "Le pho traditionnel avec un bouillon de bœuf profond aux épices, des nouilles de riz et des herbes fraîches.",
        "time": "4h",
        "servings": "4 personnes",
        "difficulty": "Difficile",
        "ingredients": [
            "1kg d'os é moelle",
            "300g de bœuf (rumsteck)",
            "Nouilles de riz larges",
            "Gingembre",
            "Cannelle",
            "Badiane",
            "Clous de girofle",
            "Sauce hoisin",
            "Sriracha",
            "Germes de soja",
            "Basilic thaï",
            "Lime"
        ],
        "steps": [
            "Torréfier le gingembre et les oignons directement sur la flamme.",
            "Blanchir les os é moelle 5 min et rincer.",
            "Mijoter les os avec les épices pendant 3h.",
            "Filtrer le bouillon, assaisonner avec la sauce de poisson.",
            "Cuire les nouilles séparément.",
            "Assembler les bols : nouilles, bœuf cru tranché, bouillon bouillant, herbes."
        ]
    },
    {
        "id": 41,
        "title": "Galette bretonne compléte",
        "category": "Plat principal",
        "image": "data:image/jpeg;base64,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",
        "hashtag": [
            "#Français",
            "#Sarrasin",
            "#Déjeuner"
        ],
        "description": "La galette de sarrasin croustillante garnie d'un œuf, de jambon et de fromage fondu.",
        "time": "30 min",
        "servings": "4 galettes",
        "difficulty": "Facile",
        "ingredients": [
            "250g de farine de sarrasin",
            "500ml d'eau",
            "1 œuf",
            "1 cuil. de sel",
            "4 œufs (garniture)",
            "200g de jambon",
            "100g d'emmental râpé"
        ],
        "steps": [
            "Mélanger la farine de sarrasin avec l'eau, l'œuf et le sel.",
            "Laisser reposer la pâte 1h.",
            "Chauffer une poêle en fonte et graisser légèrement.",
            "Verser une louche de pâte et étaler en cercle fin.",
            "Déposer le jambon, le fromage et casser un œuf au centre.",
            "Plier les bords et cuire jusqu'à ce que l'œuf soit pris."
        ]
    },
    {
        "id": 42,
        "title": "Gnocchis à la gorgonzola",
        "category": "Plat principal",
        "image": "https://www.giallozafferano.fr/images/21-2102/gnocchi-avec-creme-de-gorgonzola_650x433_wm.jpg",
        "hashtag": [
            "#Italien",
            "#Fromage",
            "#Dîner"
        ],
        "description": "Des gnocchis de pommes de terre maison nappés d'une sauce crèmeuse au gorgonzola et aux noix.",
        "time": "1h",
        "servings": "4 personnes",
        "difficulty": "Moyen",
        "ingredients": [
            "1kg de pommes de terre",
            "300g de farine",
            "2 jaunes d'œufs",
            "200g de gorgonzola",
            "200ml de crème",
            "50g de noix",
            "Parmesan",
            "Sel",
            "Noix de muscade"
        ],
        "steps": [
            "Cuire les pommes de terre entières, peler et écraser finement.",
            "Incorporer les jaunes, la farine, le sel et la muscade.",
            "Former des boudins et couper en morceaux, marquer avec une fourchette.",
            "Cuire les gnocchis dans l'eau bouillante salée jusqu'à remontée en surface.",
            "Faire fondre le gorgonzola avec la crème à feu doux.",
            "Napper les gnocchis égouttés de sauce, garnir de noix et parmesan."
        ]
    },
    {
        "id": 43,
        "title": "Brownies au chocolat ultra-fondants",
        "category": "Dessert",
        "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&q=80",
        "hashtag": [
            "#Chocolat",
            "#Dessert",
            "#Américain"
        ],
        "description": "Des brownies denses, fondants et craquelés sur le dessus, avec une texture entre le fondant et le fudge.",
        "time": "35 min",
        "servings": "12 pièces",
        "difficulty": "Facile",
        "ingredients": [
            "200g de chocolat noir",
            "150g de beurre",
            "3 œufs",
            "200g de sucre",
            "80g de farine",
            "2 cuil. de cacao",
            "Sel",
            "Extrait de vanille"
        ],
        "steps": [
            "Faire fondre le chocolat et le beurre ensemble.",
            "Battre vigoureusement les œufs avec le sucre 3 min.",
            "Incorporer le chocolat fondu à l'œuf-sucre.",
            "Ajouter la farine, le cacao et la vanille.",
            "Verser dans un moule beurré et fariné.",
            "Cuire 20-22 min é 180°C : le centre doit étre encore humide."
        ]
    },
    {
        "id": 44,
        "title": "Enchiladas au poulet",
        "category": "Plat principal",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrFurEHXLyYsKJFIbFNCcSUSJZsbDTBGnhmw&s",
        "hashtag": [
            "#Mexicain",
            "#Poulet",
            "#Fromage"
        ],
        "description": "Des tortillas farcies au poulet épicé, roulées et gratinées sous une sauce roja et du fromage fondu.",
        "time": "50 min",
        "servings": "4 personnes",
        "difficulty": "Moyen",
        "ingredients": [
            "8 tortillas maïs",
            "500g de poulet effiloché",
            "400g de tomates",
            "2 piments ancho",
            "Oignon",
            "Ail",
            "Cumin",
            "200g de fromage râpé",
            "Crème mexicaine"
        ],
        "steps": [
            "Préparer la sauce : griller les piments, mixer avec les tomates et l'ail.",
            "Effilocher le poulet cuit et assaisonner.",
            "Tremper chaque tortilla dans la sauce chaude.",
            "Farcir de poulet et rouler.",
            "Disposer dans un plat, napper du reste de sauce.",
            "Couvrir de fromage et cuire 20 min é 180°C."
        ]
    },
    {
        "id": 45,
        "title": "Soufflé au fromage",
        "category": "Plat principal",
        "image": "https://www.agrilait.fr/wp-content/uploads/2021/08/recette-souffle-au-fromage-agrilait-min-scaled.jpg",
        "hashtag": [
            "#Français",
            "#Fromage",
            "#Élégant"
        ],
        "description": "Le soufflé au fromage aérien et léger, un classique de la cuisine française é déguster immédiatement.",
        "time": "45 min",
        "servings": "4 personnes",
        "difficulty": "Difficile",
        "ingredients": [
            "150g de gruyère râpé",
            "4 œufs",
            "30g de beurre",
            "30g de farine",
            "300ml de lait",
            "Sel",
            "Poivre",
            "Noix de muscade",
            "Parmesan pour les moules"
        ],
        "steps": [
            "Préparer une béchamel avec le beurre, la farine et le lait.",
            "Hors du feu, incorporer le gruyère et les jaunes.",
            "Assaisonner avec sel, poivre et muscade.",
            "Monter les blancs en neige trés ferme.",
            "Incorporer délicatement les blancs à la béchamel en trois fois.",
            "Verser dans des ramequins beurrés-parmesan et cuire 15 min é 200°C sans ouvrir le four."
        ]
    },
    {
        "id": 46,
        "title": "Pulled pork au barbecue",
        "category": "Plat principal",
        "image": "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
        "hashtag": [
            "#Américain",
            "#Porc",
            "#Barbecue"
        ],
        "description": "Du porc effiloché lentement cuit avec un rub d'épices et une sauce barbecue fumée, servi en sandwich.",
        "time": "8h",
        "servings": "8 personnes",
        "difficulty": "Moyen",
        "ingredients": [
            "2kg d'épaule de porc",
            "Paprika fumé",
            "Cassonade",
            "Ail en poudre",
            "Cumin",
            "Sel & poivre",
            "Sauce barbecue",
            "Brioche buns",
            "Coleslaw"
        ],
        "steps": [
            "Mélanger toutes les épices pour le rub.",
            "Frotter généreusement la viande et laisser mariner une nuit.",
            "Cuire au four é 120°C pendant 6-8h.",
            "La viande doit se défaire à la fourchette.",
            "Effilocher la viande et mélanger avec la sauce barbecue.",
            "Servir sur des brioche buns avec le coleslaw."
        ]
    },
    {
        "id": 47,
        "title": "Tabbouleh libanais",
        "category": "Entrée",
        "image": "https://blog.veritable-potager.fr/wp-content/uploads/2019/07/taboule-libanais1-875-x-990-875x675.jpg",
        "hashtag": [
            "#Libanais",
            "#Végétarien",
            "#Frais"
        ],
        "description": "Le vrai tabbouleh libanais, trés riche en herbes fraîches avec une fine quantité de boulgour.",
        "time": "20 min",
        "servings": "4 personnes",
        "difficulty": "Facile",
        "ingredients": [
            "3 bouquets de persil plat",
            "1 bouquet de menthe",
            "100g de boulgour fin",
            "3 tomates",
            "1 oignon nouveau",
            "3 citrons",
            "Huile d'olive",
            "Sel",
            "Poivre"
        ],
        "steps": [
            "Laver et hydrater le boulgour avec le jus de citron 15 min.",
            "Ciseler finement le persil et la menthe.",
            "Couper les tomates en petits dés.",
            "émincer finement l'oignon nouveau.",
            "Mélanger tous les ingrédients avec l'huile d'olive.",
            "Assaisonner et réfrigérer avant de servir."
        ]
    },
    {
        "id": 48,
        "title": "Œufs bénédictine",
        "category": "Petit-déjeuner",
        "image": "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=800&q=80",
        "hashtag": [
            "#Américain",
            "#Brunch",
            "#Œufs"
        ],
        "description": "Des œufs pochés sur muffins anglais et jambon, nappés d'une sauce hollandaise crèmeuse.",
        "time": "30 min",
        "servings": "2 personnes",
        "difficulty": "Difficile",
        "ingredients": [
            "4 œufs",
            "2 muffins anglais",
            "4 tranches de jambon",
            "3 jaunes d'œufs",
            "200g de beurre clarifié",
            "1 citron",
            "Sel",
            "Poivre de Cayenne",
            "Ciboulette"
        ],
        "steps": [
            "Préparer la hollandaise : monter les jaunes au bain-marie, ajouter le beurre en filet.",
            "Assaisonner avec le jus de citron, sel et Cayenne.",
            "Porter l'eau avec du vinaigre à frémissement.",
            "Casser les œufs un é un et pocher 3 min.",
            "Toaster les muffins, déposer le jambon.",
            "Placer les œufs pochés et napper de hollandaise."
        ]
    },
    {
        "id": 49,
        "title": "Canard à l'orange",
        "category": "Plat principal",
        "image": "data:image/jpeg;base64,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",
        "hashtag": [
            "#Français",
            "#Élégant",
            "#Canard"
        ],
        "description": "Le classique canard à l'orange avec une sauce bigarade brillante, acidulée et sucrée.",
        "time": "2h",
        "servings": "4 personnes",
        "difficulty": "Difficile",
        "ingredients": [
            "1 canard entier",
            "4 oranges",
            "100g de sucre",
            "100ml de vinaigre de vin",
            "500ml de fond de veau",
            "Grand Marnier",
            "Beurre",
            "Sel & poivre"
        ],
        "steps": [
            "Assaisonner le canard et le rôtir 1h é 200°C.",
            "Prélever le zeste de 2 oranges et blanchir.",
            "Faire un caramel avec le sucre et le vinaigre.",
            "Déglacer avec le jus d'orange et le fond de veau.",
            "Ajouter le Grand Marnier et les zestes, réduire.",
            "Monter au beurre et servir avec le canard découpé."
        ]
    },
    {
        "id": 50,
        "title": "Mole negro mexicain",
        "category": "Plat principal",
        "image": "https://www.gastronomiac.com/wp/wp-content/uploads/2022/09/Sauce-mole-negro.jpg",
        "hashtag": [
            "#Mexicain",
            "#épicé",
            "#Traditionnel"
        ],
        "description": "Le mole negro d'Oaxaca, complexe et profond, avec plus de 30 ingrédients incluant le chocolat noir.",
        "time": "5h",
        "servings": "8 personnes",
        "difficulty": "Difficile",
        "ingredients": [
            "1 poulet entier",
            "5 piments mulato",
            "3 piments negro",
            "2 piments chipotle",
            "100g de chocolat noir",
            "Tomates",
            "Ail",
            "Oignon brélé",
            "Graines de sésame",
            "Cacahuètes",
            "Epices variées"
        ],
        "steps": [
            "Griller les piments séchés et les réhydrater 20 min.",
            "Faire bréler l'ail et l'oignon directement sur le feu.",
            "Griller les graines, les noix et les épices à sec.",
            "Mixer tout en plusieurs lots jusqu'à obtenir une pâte.",
            "Faire frire la pâte dans l'huile, ajouter le bouillon peu é peu.",
            "Incorporer le chocolat, mijoter 1h et servir avec le poulet."
        ]
    },
    {
        "id": 51,
        "title": "Croque-monsieur gratiné",
        "category": "Plat principal",
        "image": "https://recettes.newsgeet.com/wp-content/uploads/2025/03/Croques-Monsieur-Gratines-au-Four-768x640.jpg.webp",
        "hashtag": [
            "#Français",
            "#Rapide",
            "#Déjeuner"
        ],
        "description": "Le croque-monsieur avec une béchamel maison, du jambon et du gruyère fondu, doré au four.",
        "time": "20 min",
        "servings": "4 pièces",
        "difficulty": "Facile",
        "ingredients": [
            "8 tranches de pain de mie",
            "4 tranches de jambon",
            "200g de gruyère râpé",
            "30g de beurre",
            "30g de farine",
            "300ml de lait",
            "Noix de muscade",
            "Sel & poivre"
        ],
        "steps": [
            "Préparer la béchamel avec le beurre, la farine et le lait.",
            "Assaisonner avec sel, poivre et muscade.",
            "Tartiner une face de chaque tranche de pain de béchamel.",
            "Déposer le jambon et le fromage, fermer le sandwich.",
            "Napper le dessus de béchamel et parsemer de gruyère.",
            "Gratiner au four 10 min é 200°C."
        ]
    },
    {
        "id": 52,
        "title": "Gazpacho andalou",
        "category": "Soupe",
        "image": "https://img.cuisineaz.com/660x495/2013/12/20/i90467-photo-de-gaspacho-andalou.jpeg",
        "hashtag": [
            "#Espagnol",
            "#Froid",
            "#été"
        ],
        "description": "La soupe froide andalouse avec des tomates, du concombre, du poivron et de l'huile d'olive.",
        "time": "15 min",
        "servings": "4 personnes",
        "difficulty": "Facile",
        "ingredients": [
            "1kg de tomates bien méres",
            "1 concombre",
            "1 poivron rouge",
            "1/2 oignon rouge",
            "2 gousses d'ail",
            "100ml d'huile d'olive",
            "3 cuil. de vinaigre de Xérès",
            "Sel",
            "Pain rassis"
        ],
        "steps": [
            "Tremper le pain dans un peu d'eau.",
            "Couper grossiérement tous les légumes.",
            "Mixer les légumes avec l'ail, l'huile et le vinaigre.",
            "Ajouter le pain essoré et mixer é nouveau.",
            "Passer au tamis fin pour une texture lisse.",
            "Saler, réfrigérer 2h et servir trés frais avec les garnitures."
        ]
    },
    {
        "id": 53,
        "title": "Paella valencienne",
        "category": "Plat principal",
        "image": "https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=800&q=80",
        "hashtag": [
            "#Espagnol",
            "#Riz",
            "#Fruits de mer"
        ],
        "description": "La paella traditionnelle avec riz bomba, poulet, lapin, haricots verts et le fameux socarrat.",
        "time": "1h",
        "servings": "6 personnes",
        "difficulty": "Difficile",
        "ingredients": [
            "500g de riz bomba",
            "400g de poulet",
            "200g de lapin",
            "200g de haricots verts",
            "100g de haricots blancs",
            "3 tomates",
            "Safran",
            "Paprika fumé",
            "Romarin",
            "Huile d'olive",
            "1L de bouillon"
        ],
        "steps": [
            "Chauffer l'huile dans la paellera, faire dorer les viandes.",
            "Faire revenir les tomates et les haricots.",
            "Ajouter le paprika et le safran.",
            "Verser le bouillon chaud et ajuster le sel.",
            "Porter é ébullition et ajouter le riz en croix.",
            "Cuire 18 min sans remuer, laisser reposer 5 min."
        ]
    },
    {
        "id": 54,
        "title": "Taboulé libanais à la grenade",
        "category": "Entrée",
        "image": "https://files.meilleurduchef.com/mdc/photo/recette/taboule-libanais-grenade/taboule-libanais-grenade-etape-20-480.jpg",
        "hashtag": [
            "#Libanais",
            "#Végétarien",
            "#Frais"
        ],
        "description": "Une variation fraîche et colorée du taboulé avec des graines de grenade et des pignons de pin grillés.",
        "time": "20 min",
        "servings": "4 personnes",
        "difficulty": "Facile",
        "ingredients": [
            "2 bouquets de persil",
            "100g de boulgour",
            "1 grenade",
            "50g de pignons grillés",
            "3 tomates",
            "Citron",
            "Huile d'olive",
            "Menthe fraîche",
            "Sel"
        ],
        "steps": [
            "Hydrater le boulgour dans l'eau froide 20 min, égoutter.",
            "Ciseler finement le persil et la menthe.",
            "Dégrener la grenade.",
            "Toaster les pignons à sec.",
            "Mélanger tous les ingrédients avec le jus de citron et l'huile.",
            "Réfrigérer 30 min avant de servir."
        ]
    },
    {
        "id": 55,
        "title": "Œufs en cocotte à la truffe",
        "category": "Entrée",
        "image": "https://www.truffe-plantin.com/blog/wp-content/uploads/2022/02/cocotte-scaled.jpg",
        "hashtag": [
            "#Français",
            "#Élégant",
            "#Œufs"
        ],
        "description": "Des œufs cuits en cocotte avec de la crème et des copeaux de truffe noire, un délice simple et luxueux.",
        "time": "20 min",
        "servings": "4 personnes",
        "difficulty": "Facile",
        "ingredients": [
            "4 œufs trés frais",
            "4 cuil. de crème fraîche épaisse",
            "Truffe noire ou huile de truffe",
            "Beurre",
            "Sel de Guérande",
            "Poivre",
            "Pain grillé"
        ],
        "steps": [
            "Préchauffer le four é 180°C.",
            "Beurrer des petits ramequins.",
            "Déposer une cuillére de crème dans chaque ramequin.",
            "Casser un œuf délicatement par-dessus.",
            "Cuire au bain-marie 10-12 min.",
            "Réper la truffe et servir immédiatement avec le pain grillé."
        ]
    },
    {
        "id": 56,
        "title": "Raclette conviviale",
        "category": "Plat principal",
        "image": "https://aswakassalam.com/wp-content/uploads/2021/11/Raclette-Bizdev-411488.jpg",
        "hashtag": [
            "#Suisse",
            "#Hiver",
            "#Convivial"
        ],
        "description": "La raclette traditionnelle avec son fromage coulant sur des pommes de terre vapeur, charcuteries et cornichons.",
        "time": "30 min",
        "servings": "4 personnes",
        "difficulty": "Facile",
        "ingredients": [
            "800g de fromage é raclette",
            "1kg de pommes de terre",
            "200g de jambon cru",
            "200g de saucisson",
            "Cornichons",
            "Oignons grelots marinés",
            "Poivre du moulin"
        ],
        "steps": [
            "Cuire les pommes de terre entières à la vapeur.",
            "Préparer l'appareil é raclette.",
            "Couper le fromage en tranches épaisses.",
            "Déposer le fromage dans les coupelles et faire fondre.",
            "Verser le fromage fondu sur les pommes de terre.",
            "Accompagner de charcuteries, cornichons et oignons marinés."
        ]
    },
    {
        "id": 57,
        "title": "Tarte aux citrons meringuée",
        "category": "Dessert",
        "image": "https://odelices.ouest-france.fr/images/recettes/2013/tarte_au_citron_meringuee_pate_brisee.jpg",
        "hashtag": [
            "#Français",
            "#Tarte",
            "#Citron"
        ],
        "description": "Une tarte au citron acidulée avec une meringue italienne dorée et craquante.",
        "time": "1h30",
        "servings": "8 personnes",
        "difficulty": "Moyen",
        "ingredients": [
            "1 pâte sablée",
            "4 citrons",
            "4 œufs",
            "150g de sucre",
            "100g de beurre",
            "3 blancs d'œufs",
            "150g de sucre (meringue)",
            "50ml d'eau"
        ],
        "steps": [
            "Cuire la pâte sablée é blanc 15 min.",
            "Préparer le curd : mixer jus de citron, zestes, œufs, sucre et beurre au bain-marie.",
            "Verser le curd sur la pâte cuite et réfrigérer.",
            "Préparer la meringue italienne : faire le sirop é 121°C.",
            "Verser en filet sur les blancs montés en battant.",
            "étaler sur la tarte et dorer au chalumeau."
        ]
    },
    {
        "id": 58,
        "title": "Coquilles Saint-Jacques poêlées",
        "category": "Entrée",
        "image": "https://www.thalasso-saintmalo.com/wp-content/uploads/2014/09/saint-jacques-poireaux-e1422624158942.jpg",
        "hashtag": [
            "#Fruits de mer",
            "#Élégant",
            "#Français"
        ],
        "description": "Des Saint-Jacques snackées avec une belle coloration dorée, servies sur une purée de panais et caramel beurre salé.",
        "time": "25 min",
        "servings": "4 personnes",
        "difficulty": "Moyen",
        "ingredients": [
            "16 noix de Saint-Jacques",
            "4 panais",
            "100ml de crème",
            "50g de beurre salé",
            "2 cuil. de miel",
            "Sel de Guérande",
            "Pousses pour la décoration"
        ],
        "steps": [
            "Cuire les panais et mixer en purée avec la crème et le beurre.",
            "Sécher parfaitement les Saint-Jacques avec du papier.",
            "Faire chauffer une poêle en inox trés fortement.",
            "Saisir les noix 1 min par face sans y toucher.",
            "Préparer un beurre noisette avec le miel.",
            "Dresser la purée, les Saint-Jacques et napper de caramel."
        ]
    },
    {
        "id": 59,
        "title": "Goulash hongrois",
        "category": "Plat principal",
        "image": "https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=800&q=80",
        "hashtag": [
            "#Hongrois",
            "#Mijoté",
            "#Hiver"
        ],
        "description": "Le goulasch hongrois traditionnel avec du bœuf tendre mijoté dans une sauce au paprika doux et fumé.",
        "time": "2h",
        "servings": "4 personnes",
        "difficulty": "Moyen",
        "ingredients": [
            "1kg de bœuf é braiser",
            "2 oignons",
            "2 poivrons",
            "3 cuil. de paprika doux",
            "1 cuil. de paprika fumé",
            "2 tomates",
            "500ml de bouillon",
            "Carvi",
            "Ail",
            "Huile"
        ],
        "steps": [
            "Faire revenir les oignons dans l'huile.",
            "Hors du feu, ajouter le paprika et mélanger.",
            "Faire saisir le bœuf coupé en cubes.",
            "Ajouter les poivrons, les tomates et le bouillon.",
            "Mijoter 1h30 à feu doux.",
            "Servir avec des spaetzle ou des nouilles."
        ]
    },
    {
        "id": 60,
        "title": "Makroud aux dattes",
        "category": "Dessert",
        "image": "data:image/jpeg;base64,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",
        "hashtag": [
            "#Maghrébin",
            "#Pâtisserie",
            "#Miel"
        ],
        "description": "Le gâteau semoule du Maghreb farci aux dattes et parfumé à l'eau de fleur d'oranger, frit et imbibé de miel.",
        "time": "1h30",
        "servings": "20 pièces",
        "difficulty": "Moyen",
        "ingredients": [
            "500g de semoule fine",
            "150g de beurre",
            "1 cuil. d'eau de fleur d'oranger",
            "300g de pâte de dattes",
            "Miel liquide",
            "Huile de friture",
            "Cannelle"
        ],
        "steps": [
            "Mélanger la semoule, le beurre fondu et l'eau de fleur d'oranger.",
            "Laisser reposer 20 min.",
            "Aromatiser la pâte de dattes avec la cannelle.",
            "Former un boudin de pâte, creuser et farcir de dattes.",
            "Refermer et couper en losanges en biais.",
            "Frire é 170°C jusqu'à dorure, égoutter et tremper dans le miel."
        ]
    },
    {
        "id": 61,
        "title": "Crumble pomme-poire",
        "category": "Dessert",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS3OFC1AtP95gjs-FUBb_FdhoJ41lkrRyf-Q&s",
        "hashtag": [
            "#Anglais",
            "#Automne",
            "#Réconfort"
        ],
        "description": "Un crumble aux pommes et poires fondantes sous une chapelure sablée à la cannelle.",
        "time": "45 min",
        "servings": "6 personnes",
        "difficulty": "Facile",
        "ingredients": [
            "4 pommes",
            "3 poires",
            "150g de farine",
            "100g de beurre froid",
            "100g de cassonade",
            "50g de poudre d'amandes",
            "Cannelle",
            "1 cuil. de sucre vanillé"
        ],
        "steps": [
            "Peler et couper les fruits en morceaux, sucrer légèrement.",
            "Déposer les fruits dans un plat beurré.",
            "Mélanger la farine, le beurre froid, la cassonade et la poudre d'amandes.",
            "Sabler entre les doigts pour obtenir des miettes grossiéres.",
            "Couvrir les fruits de crumble.",
            "Cuire 30 min é 180°C jusqu'à ce que le crumble soit doré."
        ]
    },
    {
        "id": 62,
        "title": "Nasi goreng indonésien",
        "category": "Plat principal",
        "image": "https://assets.afcdn.com/recipe/20170315/57799_w1024h768c1cx2808cy1872.webp",
        "hashtag": [
            "#Indonésien",
            "#Riz frit",
            "#épicé"
        ],
        "description": "Le riz frit indonésien avec de la pâte de crevettes, des légumes et un œuf au plat par-dessus.",
        "time": "20 min",
        "servings": "2 personnes",
        "difficulty": "Facile",
        "ingredients": [
            "300g de riz cuit froid",
            "2 œufs",
            "100g de poulet",
            "Crevettes",
            "Ail",
            "échalotes",
            "Sauce soja",
            "Pâte de crevettes (terasi)",
            "Piment",
            "Oignons frits"
        ],
        "steps": [
            "Faire sauter l'ail, les échalotes et le piment haché.",
            "Ajouter la pâte de crevettes et faire revenir 1 min.",
            "Incorporer le poulet et les crevettes.",
            "Ajouter le riz froid et mélanger sur feu vif.",
            "Assaisonner avec la sauce soja.",
            "Servir avec les œufs au plat et les oignons frits."
        ]
    },
    {
        "id": 63,
        "title": "Profiteroles au chocolat",
        "category": "Dessert",
        "image": "https://www.recettes.com/wp-content/uploads/2025/05/profiteroles-chocolat-scaled.jpg",
        "hashtag": [
            "#Français",
            "#Chocolat",
            "#Choux"
        ],
        "description": "Des petits choux à la crème glacée vanille nappés d'une sauce au chocolat chaud.",
        "time": "1h",
        "servings": "4 personnes",
        "difficulty": "Moyen",
        "ingredients": [
            "125ml d'eau",
            "50g de beurre",
            "75g de farine",
            "2 œufs",
            "Glace à la vanille",
            "200g de chocolat noir",
            "100ml de crème"
        ],
        "steps": [
            "Porter l'eau et le beurre é ébullition.",
            "Ajouter la farine d'un coup et travailler jusqu'à desséchage.",
            "Incorporer les œufs un é un hors du feu.",
            "Pocher des petits choux et cuire 25 min é 200°C.",
            "Préparer la sauce chocolat en faisant fondre le chocolat dans la crème chaude.",
            "Farcir les choux de glace et napper de sauce chaude."
        ]
    },
    {
        "id": 64,
        "title": "Salade César maison",
        "category": "Entrée",
        "image": "https://florette.fr/wp-content/uploads/2024/08/Salade-cesar-Florette.jpg",
        "hashtag": [
            "#Américain",
            "#Salade",
            "#Poulet"
        ],
        "description": "La salade César avec des croûtons maison, du parmesan en copeaux et une sauce crèmeuse aux anchois.",
        "time": "20 min",
        "servings": "4 personnes",
        "difficulty": "Facile",
        "ingredients": [
            "2 romaines",
            "200g de poulet grillé",
            "100g de parmesan",
            "Pain pour les croûtons",
            "3 filets d'anchois",
            "1 jaune d'œuf",
            "1 cuil. de moutarde",
            "Jus de citron",
            "Ail",
            "Huile d'olive"
        ],
        "steps": [
            "Préparer les croûtons : tailler le pain en dés, huiler et cuire au four.",
            "Préparer la sauce : mixer l'anchois, l'ail, la moutarde, le jaune et le citron.",
            "émulsionner en ajoutant l'huile en filet.",
            "Déchirer les feuilles de romaine.",
            "Mélanger avec la sauce et les croûtons.",
            "Parsemer de parmesan en copeaux et servir."
        ]
    },
    {
        "id": 65,
        "title": "Mafé sénégalais",
        "category": "Plat principal",
        "image": "https://static.750g.com/images/240-240/a8b57ae252bc27c74dea829d08fc67ae/mafe-senegalais-r60559.png",
        "hashtag": [
            "#Africain",
            "#Arachides",
            "#Mijoté"
        ],
        "description": "Le ragoût sénégalais à la pâte d'arachides avec des légumes et du bœuf, servi sur du riz.",
        "time": "1h30",
        "servings": "6 personnes",
        "difficulty": "Moyen",
        "ingredients": [
            "800g de bœuf",
            "300g de pâte d'arachides",
            "2 oignons",
            "3 tomates",
            "2 carottes",
            "2 pommes de terre",
            "Chou blanc",
            "Piment",
            "Sel",
            "Huile"
        ],
        "steps": [
            "Faire revenir les oignons et la viande dans l'huile.",
            "Ajouter les tomates concassées et cuire 5 min.",
            "Diluer la pâte d'arachides dans du bouillon chaud.",
            "Verser sur la viande avec les carottes et pommes de terre.",
            "Mijoter 45 min, ajouter le chou en fin de cuisson.",
            "Servir avec du riz blanc."
        ]
    },
    {
        "id": 66,
        "title": "Pain au levain naturel",
        "category": "Boulangerie",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3xfAANI7szpcV1awYt0ya7dcnvCtsApZMGA&s",
        "hashtag": [
            "#Boulangerie",
            "#Levain",
            "#Artisanal"
        ],
        "description": "Un pain au levain avec une croûte croustillante, une mie alvéolée et une saveur légèrement acidulée.",
        "time": "24h",
        "servings": "1 pain",
        "difficulty": "Difficile",
        "ingredients": [
            "400g de farine T65",
            "100g de farine de seigle",
            "350ml d'eau",
            "100g de levain actif",
            "10g de sel"
        ],
        "steps": [
            "Mélanger les farines, l'eau et le levain, laisser 30 min (autolyse).",
            "Ajouter le sel et plier la pâte toutes les 30 min pendant 3h.",
            "Bouler le pain et mettre en banneton fariné.",
            "Réfrigérer 12h pour la pousse lente.",
            "Préchauffer le four é 250°C avec une cocotte.",
            "Inciser le pain et cuire couvert 20 min puis découvert 25 min."
        ]
    },
    {
        "id": 67,
        "title": "Saltimbocca à la romaine",
        "category": "Plat principal",
        "image": "https://cache.marieclaire.fr/data/photo/w1000_ci/1eb/saltimbocca-a-la-romaine-et-aux-epinards.jpg",
        "hashtag": [
            "#Italien",
            "#Veau",
            "#Rapide"
        ],
        "description": "Des escalopes de veau avec du jambon de Parme et de la sauge fraîche, dorées au beurre et déglaéées au Marsala.",
        "time": "20 min",
        "servings": "4 personnes",
        "difficulty": "Facile",
        "ingredients": [
            "8 fines escalopes de veau",
            "8 tranches de jambon de Parme",
            "Feuilles de sauge",
            "50g de beurre",
            "100ml de Marsala sec",
            "Sel & poivre",
            "Farine"
        ],
        "steps": [
            "Déposer sur chaque escalope une feuille de sauge et une tranche de jambon.",
            "Fixer avec un cure-dent et fariner légèrement.",
            "Faire fondre le beurre dans une poêle.",
            "Saisir les escalopes côté veau 2 min, retourner 1 min.",
            "Déglacer au Marsala et laisser réduire.",
            "Servir immédiatement avec les jus de cuisson."
        ]
    },
    {
        "id": 68,
        "title": "Smoothie bowl aéaé",
        "category": "Petit-déjeuner",
        "image": "https://www.modernhoney.com/wp-content/uploads/2016/01/Acai-Bowl-2-500x375.jpg",
        "hashtag": [
            "#Healthy",
            "#Brésilien",
            "#Brunch"
        ],
        "description": "Un bol épais à l'aéaé surgelé, garni de granola, de fruits frais et d'un filet de miel.",
        "time": "10 min",
        "servings": "1 personne",
        "difficulty": "Facile",
        "ingredients": [
            "200g de pulpe d'aéaé surgelée",
            "1 banane surgelée",
            "50ml de lait d'amande",
            "Granola",
            "Fraises",
            "Myrtilles",
            "Kiwi",
            "Noix de coco râpée",
            "Miel"
        ],
        "steps": [
            "Sortir l'aéaé et la banane du congélateur 5 min avant.",
            "Mixer avec le lait d'amande jusqu'à obtenir un smoothie épais.",
            "Verser dans un bol.",
            "Disposer les fruits frais en rangées.",
            "Ajouter le granola et la noix de coco.",
            "Terminer avec un filet de miel."
        ]
    },
    {
        "id": 69,
        "title": "Fondue savoyarde",
        "category": "Plat principal",
        "image": "https://files.meilleurduchef.com/mdc/photo/recette/fondue-savoyarde/fondue-savoyarde-1200.jpg",
        "hashtag": [
            "#Savoyard",
            "#Hiver",
            "#Fromage"
        ],
        "description": "La vraie fondue savoyarde avec trois fromages fondus dans le vin blanc, é déguster avec du pain croustillant.",
        "time": "25 min",
        "servings": "4 personnes",
        "difficulty": "Facile",
        "ingredients": [
            "300g de comté",
            "300g de beaufort",
            "200g d'emmental",
            "400ml de vin blanc de Savoie",
            "1 gousse d'ail",
            "1 cuil. de fécule",
            "Kirsch",
            "Pain de campagne"
        ],
        "steps": [
            "Frotter le caquelon avec l'ail coupé.",
            "Verser le vin blanc et chauffer à feu moyen.",
            "Ajouter les fromages râpés en remuant en 8.",
            "Diluer la fécule dans le kirsch et ajouter.",
            "La fondue doit frémir sans bouillir.",
            "Servir sur un réchaud avec le pain en morceaux."
        ]
    },
    {
        "id": 70,
        "title": "Poulet au citron confit marocain",
        "category": "Plat principal",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLxldaWsbGQ8zQlaXkfE80ey0qOZU3dgsPxg&s",
        "hashtag": [
            "#Marocain",
            "#Tajine",
            "#Citron confit"
        ],
        "description": "Un tajine de poulet aux citrons confits et olives, parfumé aux épices marocaines.",
        "time": "1h30",
        "servings": "4 personnes",
        "difficulty": "Moyen",
        "ingredients": [
            "1 poulet coupé en morceaux",
            "2 citrons confits",
            "100g d'olives vertes",
            "2 oignons",
            "Gingembre",
            "Curcuma",
            "Safran",
            "Coriandre",
            "Persil",
            "Huile d'olive"
        ],
        "steps": [
            "Mariner le poulet avec les épices, le gingembre et les herbes.",
            "Faire revenir les oignons dans l'huile d'olive.",
            "Ajouter le poulet et faire dorer de tous côtés.",
            "Couvrir d'eau à mi-hauteur et laisser mijoter.",
            "Ajouter les citrons confits et les olives aprés 45 min.",
            "Cuire encore 20 min et garnir de coriandre fraîche."
        ]
    },
    {
        "id": 71,
        "title": "Millefeuille classique",
        "category": "Dessert",
        "image": "https://www.micheldumas.com/wp-content/uploads/2025/10/mille-feuille-15.webp",
        "hashtag": [
            "#Français",
            "#Pâtisserie",
            "#Élégant"
        ],
        "description": "Le millefeuille à la crème pâtissière vanille entre trois couches de feuilletage caramélisé.",
        "time": "2h",
        "servings": "6 personnes",
        "difficulty": "Difficile",
        "ingredients": [
            "500g de pâte feuilletée",
            "500ml de lait",
            "4 jaunes d'œufs",
            "100g de sucre",
            "50g de farine",
            "1 gousse de vanille",
            "Sucre glace",
            "Chocolat pour le décor"
        ],
        "steps": [
            "étaler et piquer la pâte feuilletée, cuire entre deux plaques.",
            "Préparer la crème pâtissière avec le lait, les jaunes, le sucre et la farine.",
            "Laisser refroidir, garnir une poche é douille.",
            "Découper 3 rectangles de feuilletage de méme taille.",
            "Alterner couches de feuilletage et de crème pâtissière.",
            "Décorer le dessus au sucre glace et tracer les lignes chocolat."
        ]
    },
    {
        "id": 72,
        "title": "Bortsch ukrainien",
        "category": "Soupe",
        "image": "https://img-3.journaldesfemmes.fr/1vXjwGtu2ie9QYDj6AcavpTMXjY=/750x500/877b49eb9f3c48d4bbfaba68e307dcbc/ccmcms-jdf/40029256.png",
        "hashtag": [
            "#Ukrainien",
            "#Soupe",
            "#Betterave"
        ],
        "description": "La soupe rouge tradition aux betteraves avec du chou, des pommes de terre et une dollop de crème aigre.",
        "time": "1h30",
        "servings": "6 personnes",
        "difficulty": "Moyen",
        "ingredients": [
            "3 betteraves",
            "1/2 chou blanc",
            "3 pommes de terre",
            "2 carottes",
            "1 oignon",
            "200g de bœuf",
            "Concentré de tomate",
            "Vinaigre",
            "Crème aigre",
            "Aneth"
        ],
        "steps": [
            "Cuire le bœuf pour faire le bouillon.",
            "Réper les betteraves et faire revenir avec un peu de vinaigre.",
            "Faire sauter les carottes et les oignons.",
            "Ajouter le chou et les pommes de terre au bouillon.",
            "Incorporer les betteraves et le concentré, mijoter 20 min.",
            "Servir avec une cuillére de crème aigre et de l'aneth frais."
        ]
    },
    {
        "id": 73,
        "title": "Crème caramel",
        "category": "Dessert",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6HXP1wb3HSp6VvzgydtYkI3blIYP3CKsolw&s",
        "hashtag": [
            "#Classique",
            "#Dessert",
            "#Caramel"
        ],
        "description": "La crème caramel renversée, onctueuse et tremblante, avec un caramel ambré qui coule.",
        "time": "1h",
        "servings": "6 personnes",
        "difficulty": "Facile",
        "ingredients": [
            "500ml de lait entier",
            "4 œufs",
            "2 jaunes",
            "100g de sucre (crème)",
            "150g de sucre (caramel)",
            "1 gousse de vanille"
        ],
        "steps": [
            "Faire le caramel à sec et couler dans les moules.",
            "Chauffer le lait avec la vanille.",
            "Blanchir les œufs et les jaunes avec le sucre.",
            "Verser le lait chaud sur les œufs en fouettant.",
            "Remplir les moules et cuire au bain-marie 40 min é 160°C.",
            "Laisser refroidir et démouler au moment de servir."
        ]
    },
    {
        "id": 74,
        "title": "Fish and chips anglais",
        "category": "Plat principal",
        "image": "https://www.panierdesaison.com/wp-content/uploads/2022/02/fish-and-chips-recette-anglaise.jpg",
        "hashtag": [
            "#Anglais",
            "#Frit",
            "#FastFood"
        ],
        "description": "Des filets de cabillaud en tempura croustillante avec des chips épaisses dorées, servis avec la sauce tartare.",
        "time": "40 min",
        "servings": "4 personnes",
        "difficulty": "Moyen",
        "ingredients": [
            "4 filets de cabillaud",
            "200g de farine",
            "250ml de biére blonde",
            "1 œuf",
            "4 pommes de terre",
            "Sel & poivre",
            "Levure chimique",
            "Huile de friture",
            "Persil"
        ],
        "steps": [
            "Couper les pommes de terre en bétonnets épais et précuire.",
            "Préparer la pâte : mélanger farine, biére, œuf et levure.",
            "Frire les chips é 150°C 8 min puis 180°C 3 min.",
            "Tremper les filets dans la pâte et frire 5-6 min é 180°C.",
            "égoutter sur du papier absorbant.",
            "Servir avec la sauce tartare et des quartiers de citron."
        ]
    },
    {
        "id": 75,
        "title": "Caponata sicilienne",
        "category": "Entrée",
        "image": "https://www.undejeunerdesoleil.com/wp-content/uploads/2024/07/Caponata_aubergines_sicilienne_recette_italienne.jpg",
        "hashtag": [
            "#Italien",
            "#Végétarien",
            "#Aubergine"
        ],
        "description": "La caponata sicilienne, salade d'aubergines aigre-douce avec câpres, céleri et tomates.",
        "time": "45 min",
        "servings": "6 personnes",
        "difficulty": "Facile",
        "ingredients": [
            "2 aubergines",
            "4 branches de céleri",
            "2 tomates",
            "50g de câpres",
            "50g d'olives vertes",
            "3 cuil. de vinaigre",
            "2 cuil. de sucre",
            "Huile d'olive",
            "Pignons de pin"
        ],
        "steps": [
            "Couper les aubergines en dés, saler et faire dégorger 30 min.",
            "Faire frire les aubergines dans l'huile, égoutter.",
            "Faire revenir le céleri, ajouter les tomates.",
            "Déglacer avec le vinaigre et le sucre (agrodolce).",
            "Ajouter les câpres, les olives et les pignons.",
            "Incorporer les aubergines et laisser refroidir avant de servir."
        ]
    },
    {
        "id": 76,
        "title": "Lomo saltado péruvien",
        "category": "Plat principal",
        "image": "https://assets.afcdn.com/recipe/20200729/112912_w1024h768c1cx1145cy654cxt0cyt0cxb2291cyb1308.webp",
        "hashtag": [
            "#Péruvien",
            "#Wok",
            "#Fusion"
        ],
        "description": "Le sauté de bœuf péruvien au wok avec des poivrons, des frites et de la sauce soja.",
        "time": "35 min",
        "servings": "4 personnes",
        "difficulty": "Moyen",
        "ingredients": [
            "600g de filet de bœuf",
            "3 pommes de terre",
            "2 tomates",
            "2 oignons rouges",
            "2 cuil. de sauce soja",
            "Ají amarillo",
            "Vinaigre de vin rouge",
            "Coriandre",
            "Huile de friture"
        ],
        "steps": [
            "Couper et frire les pommes de terre.",
            "Trancher le bœuf en lanières.",
            "Faire chauffer le wok à feu trés vif.",
            "Saisir le bœuf rapidement avec l'oignon et le piment.",
            "Déglacer avec la sauce soja et le vinaigre.",
            "Ajouter les tomates, les frites et la coriandre, mélanger et servir."
        ]
    },
    {
        "id": 77,
        "title": "Tarte flambée alsacienne",
        "category": "Plat principal",
        "image": "https://assets.afcdn.com/recipe/20201228/116805_w1024h576c1cx1060cy707cxt0cyt0cxb2121cyb1414.jpg",
        "hashtag": [
            "#Alsacien",
            "#Tarte",
            "#Fromage"
        ],
        "description": "La flammekueche croustillante avec de la crème fraîche, des lardons et des oignons confits.",
        "time": "30 min",
        "servings": "2 personnes",
        "difficulty": "Facile",
        "ingredients": [
            "250g de pâte é pain fine",
            "200g de fromage blanc",
            "100ml de crème fraîche",
            "200g de lardons",
            "2 oignons",
            "Sel",
            "Poivre",
            "Noix de muscade"
        ],
        "steps": [
            "Préchauffer le four é 280°C.",
            "Mélanger le fromage blanc et la crème fraîche, assaisonner.",
            "émincer les oignons finement.",
            "étaler la pâte trés finement.",
            "étaler la crème, répartir les oignons et les lardons.",
            "Cuire 8-10 min jusqu'à ce que la pâte soit croustillante et les bords dorés."
        ]
    },
    {
        "id": 78,
        "title": "Mouhallabia à la fleur d'oranger",
        "category": "Dessert",
        "image": "https://image.over-blog.com/9tDrD4R4nBr8T84nOddGj8Hsavw=/filters:no_upscale()/image%2F1371263%2F20220407%2Fob_29b394_dsc-0249.JPG",
        "hashtag": [
            "#Arabe",
            "#Dessert",
            "#Crémeux"
        ],
        "description": "La crème dessert moyen-orientale à la fleur d'oranger, parsemée de pistaches et de pétales de roses.",
        "time": "20 min",
        "servings": "6 personnes",
        "difficulty": "Facile",
        "ingredients": [
            "1L de lait entier",
            "80g de sucre",
            "60g de maïzena",
            "2 cuil. d'eau de fleur d'oranger",
            "Pistaches hachées",
            "Pétales de roses séchés",
            "Cannelle"
        ],
        "steps": [
            "Délayer la maïzena dans un peu de lait froid.",
            "Chauffer le reste du lait avec le sucre.",
            "Verser la maïzena délayée en remuant sans cesse.",
            "Cuire jusqu'à épaississement.",
            "Hors du feu, ajouter l'eau de fleur d'oranger.",
            "Verser dans des verres, réfrigérer 3h et garnir de pistaches et pétales."
        ]
    },
    {
        "id": 79,
        "title": "Papadum et chutney de mangue",
        "category": "Entrée",
        "image": "https://www.ramenelapopotte.com/sites/default/files/papadum_chutney_mangue_3.jpg",
        "hashtag": [
            "#Indien",
            "#Végétarien",
            "#Apéro"
        ],
        "description": "Des papadums croustillants servis avec un chutney de mangue maison au gingembre et piment.",
        "time": "25 min",
        "servings": "4 personnes",
        "difficulty": "Facile",
        "ingredients": [
            "8 papadums",
            "2 mangues",
            "1 oignon rouge",
            "Gingembre frais",
            "1 piment rouge",
            "3 cuil. de vinaigre",
            "2 cuil. de sucre",
            "Coriandre fraîche"
        ],
        "steps": [
            "Couper les mangues en petits dés.",
            "Faire revenir l'oignon et le gingembre.",
            "Ajouter la mangue, le piment, le vinaigre et le sucre.",
            "Laisser caraméliser 10 min à feu moyen.",
            "Laisser refroidir et ajouter la coriandre fraîche.",
            "Faire cuire les papadums au micro-ondes ou à frire et servir avec le chutney."
        ]
    },
    {
        "id": 80,
        "title": "Tajine d'agneau aux pruneaux",
        "category": "Plat principal",
        "image": "https://www.yaksha.ch/954/tajine-d-agneau-aux-pruneaux.jpg",
        "hashtag": [
            "#Marocain",
            "#Agneau",
            "#Tajine"
        ],
        "description": "Un tajine d'agneau mijoté avec des pruneaux confits, des amandes grillées et le ras el-hanout.",
        "time": "2h",
        "servings": "4 personnes",
        "difficulty": "Moyen",
        "ingredients": [
            "1kg d'épaule d'agneau",
            "300g de pruneaux",
            "100g d'amandes mondées",
            "2 oignons",
            "Ras el-hanout",
            "Cannelle",
            "Gingembre",
            "Miel",
            "Huile d'olive",
            "Coriandre"
        ],
        "steps": [
            "Faire revenir les oignons avec les épices.",
            "Ajouter les morceaux d'agneau et faire dorer.",
            "Couvrir d'eau à mi-hauteur et mijoter 1h.",
            "Ajouter les pruneaux et le miel.",
            "Cuire encore 30 min jusqu'à la sauce nappante.",
            "Faire griller les amandes et garnir avec la coriandre."
        ]
    },
    {
        "id": 81,
        "title": "Churros au chocolat chaud",
        "category": "Dessert",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV3v-zFAWt74hIl5X9SDDCXZaER4JahNT04w&s",
        "hashtag": [
            "#Espagnol",
            "#Frit",
            "#Chocolat"
        ],
        "description": "Des churros croustillants roulés dans la cannelle-sucre, avec un chocolat chaud épais pour tremper.",
        "time": "30 min",
        "servings": "4 personnes",
        "difficulty": "Facile",
        "ingredients": [
            "200g de farine",
            "250ml d'eau",
            "1 cuil. de sel",
            "Huile de friture",
            "Sucre & cannelle",
            "200g de chocolat noir",
            "200ml de crème"
        ],
        "steps": [
            "Porter l'eau et le sel é ébullition, verser sur la farine.",
            "Mélanger vigoureusement jusqu'à obtenir une pâte lisse.",
            "Remplir une poche é douille cannelée.",
            "Faire frire des bétonnets é 180°C 3-4 min.",
            "égoutter et rouler dans le mélange sucre-cannelle.",
            "Préparer le chocolat chaud avec la crème et servir chaud."
        ]
    },
    {
        "id": 82,
        "title": "Bao buns au porc laqué",
        "category": "Plat principal",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlXDw1kfNlYlPZfhdd5u3muXOZ2jc0cfrEdw&s",
        "hashtag": [
            "#Asiatique",
            "#Porc",
            "#Street food"
        ],
        "description": "Des pains bao moelleux à la vapeur farcis de porc laqué, concombre et sauce hoisin.",
        "time": "1h30",
        "servings": "8 bao",
        "difficulty": "Moyen",
        "ingredients": [
            "300g de farine",
            "5g de levure",
            "150ml d'eau tiède",
            "1 cuil. de sucre",
            "1 cuil. d'huile",
            "300g de poitrine de porc",
            "Sauce hoisin",
            "Sauce soja",
            "Miel",
            "Concombre",
            "Oignons pickles"
        ],
        "steps": [
            "Préparer la pâte é bao, laisser lever 1h.",
            "Faire mariner le porc dans la sauce hoisin, soja et miel.",
            "Rôtir le porc 30 min é 200°C.",
            "Former des ovales de pâte et cuire à la vapeur 10 min.",
            "Ouvrir les bao et les garnir de tranches de porc.",
            "Ajouter le concombre, les oignons pickles et la sauce hoisin."
        ]
    },
    {
        "id": 83,
        "title": "Chili con carne texan",
        "category": "Plat principal",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqM9vDfXygmVlsQ1CVivhRpjuX-HAF-cQo1w&s",
        "hashtag": [
            "#Américain",
            "#épicé",
            "#Réconfort"
        ],
        "description": "Le chili texan avec du bœuf haché grossier, des haricots rouges et une sauce épicée au cumin.",
        "time": "1h30",
        "servings": "6 personnes",
        "difficulty": "Facile",
        "ingredients": [
            "800g de bœuf haché",
            "2 boîtes de haricots rouges",
            "1 boîte de tomates concassées",
            "2 oignons",
            "4 gousses d'ail",
            "Piments chipotle",
            "Cumin",
            "Paprika",
            "Origan",
            "Sel & poivre"
        ],
        "steps": [
            "Faire revenir les oignons et l'ail.",
            "Ajouter le bœuf et faire dorer.",
            "Incorporer les épices et cuire 2 min.",
            "Ajouter les tomates et les piments.",
            "Mijoter 45 min à feu doux.",
            "Ajouter les haricots et cuire encore 15 min."
        ]
    },
    {
        "id": 84,
        "title": "Blanquette de veau",
        "category": "Plat principal",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo7IC_Y6Ky4wEhDR9UyRXG7214iaiHaQHYCg&s",
        "hashtag": [
            "#Français",
            "#Veau",
            "#Crémeux"
        ],
        "description": "La blanquette de veau à l'ancienne avec une sauce blanche crèmeuse, des champignons et des oignons grelots.",
        "time": "2h",
        "servings": "6 personnes",
        "difficulty": "Moyen",
        "ingredients": [
            "1.2kg d'épaule de veau",
            "300g de champignons",
            "200g d'oignons grelots",
            "2 carottes",
            "Bouquet garni",
            "50g de beurre",
            "50g de farine",
            "200ml de crème fraîche",
            "2 jaunes d'œufs",
            "Citron"
        ],
        "steps": [
            "Blanchir le veau départ eau froide, écumer.",
            "Cuire avec les carottes et le bouquet garni 1h30.",
            "Préparer un roux blanc, ajouter le bouillon de cuisson.",
            "Faire sauter les champignons et les oignons.",
            "Lier la sauce avec la crème et les jaunes.",
            "Assembler et servir avec du riz vapeur."
        ]
    },
    {
        "id": 85,
        "title": "Dolma turcs aux raisins",
        "category": "Entrée",
        "image": "https://img.freepik.com/photos-premium/dolma-sarma-delicieux-farci-aux-feuilles-raisin-dolma-sarma-libanais-assiette-cuisine-turque-grecque-du-moyen-orient-du-liban-nom-turc-yaprak-sarma_693630-4025.jpg",
        "hashtag": [
            "#Turc",
            "#Végétarien",
            "#Riz"
        ],
        "description": "Des feuilles de vigne farcies au riz parfumé aux raisins secs, pignons et épices, servis froids.",
        "time": "1h30",
        "servings": "4 personnes",
        "difficulty": "Moyen",
        "ingredients": [
            "40 feuilles de vigne en saumure",
            "300g de riz",
            "50g de raisins secs",
            "50g de pignons",
            "2 oignons",
            "Cannelle",
            "Piment doux",
            "Menthe séchée",
            "Jus de citron",
            "Huile d'olive"
        ],
        "steps": [
            "Rincer les feuilles de vigne.",
            "Faire revenir les oignons avec les épices.",
            "Ajouter le riz cru et mélanger, puis les raisins et pignons.",
            "Déposer 1 cuillére de farce sur chaque feuille et rouler.",
            "Disposer dans une casserole, couvrir d'eau et de jus de citron.",
            "Cuire é couvert 40 min à feu doux, servir froid."
        ]
    },
    {
        "id": 86,
        "title": "Okonomiyaki japonais",
        "category": "Plat principal",
        "image": "https://www.bentoandco.com/cdn/shop/articles/IMG_2417.jpg?v=1586238032",
        "hashtag": [
            "#Japonais",
            "#Galette",
            "#Chou"
        ],
        "description": "La galette japonaise au chou avec de la viande ou des fruits de mer, garnie de sauce okonomiyaki et mayonnaise.",
        "time": "30 min",
        "servings": "4 personnes",
        "difficulty": "Facile",
        "ingredients": [
            "200g de farine",
            "300ml de bouillon dashi",
            "3 œufs",
            "400g de chou",
            "150g de poitrine de porc",
            "Sauce okonomiyaki",
            "Mayonnaise japonaise",
            "Flocons de bonite",
            "Algues aonori"
        ],
        "steps": [
            "Mélanger la farine avec le dashi pour former une pâte.",
            "Ajouter les œufs et le chou émincé finement.",
            "Déposer les tranches de porc dans la poêle.",
            "Verser la pâte par-dessus et cuire 5 min à feu moyen.",
            "Retourner et cuire encore 5 min.",
            "Garnir de sauce, mayonnaise, flocons de bonite et aonori."
        ]
    },
    {
        "id": 87,
        "title": "Tajine de kefta aux œufs",
        "category": "Plat principal",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqQ4NaSSc8cOmEBNMfZil7jvDwJMYwcnxLFA&s",
        "hashtag": [
            "#Marocain",
            "#Kefta",
            "#Œufs"
        ],
        "description": "Des boulettes de viande épicées cuites dans une sauce tomate marocaine avec des œufs pochés.",
        "time": "45 min",
        "servings": "4 personnes",
        "difficulty": "Facile",
        "ingredients": [
            "500g de bœuf haché",
            "1 oignon",
            "Persil",
            "Cumin",
            "Paprika",
            "Cannelle",
            "4 tomates",
            "4 œufs",
            "Huile d'olive",
            "Coriandre",
            "Sel"
        ],
        "steps": [
            "Mélanger le bœuf, l'oignon râpé, le persil et les épices.",
            "Former des petites boulettes allongées.",
            "Préparer la sauce tomate avec les tomates, l'huile et les épices.",
            "Faire pocher les kefta dans la sauce 15 min.",
            "Casser les œufs dans la sauce.",
            "Couvrir et cuire jusqu'à ce que les blancs soient pris."
        ]
    },
    {
        "id": 88,
        "title": "Pannacotta à la framboise",
        "category": "Dessert",
        "image": "https://www.agrilait.fr/wp-content/uploads/2021/08/recette-panna-cotta-framboise-agrilait-scaled-1.jpg",
        "hashtag": [
            "#Italien",
            "#Dessert",
            "#Framboise"
        ],
        "description": "Une pannacotta soyeuse à la vanille avec un coulis de framboise acidulé.",
        "time": "20 min",
        "servings": "6 personnes",
        "difficulty": "Facile",
        "ingredients": [
            "500ml de crème entière",
            "100ml de lait",
            "80g de sucre",
            "3 feuilles de gélatine",
            "1 gousse de vanille",
            "300g de framboises",
            "50g de sucre (coulis)"
        ],
        "steps": [
            "Faire tremper la gélatine dans l'eau froide.",
            "Chauffer la crème, le lait, le sucre et la vanille.",
            "Hors du feu, incorporer la gélatine essorée.",
            "Verser dans des moules et réfrigérer 4h.",
            "Préparer le coulis en mixant les framboises avec le sucre.",
            "Démouler ou servir directement avec le coulis."
        ]
    },
    {
        "id": 89,
        "title": "Boulettes de viande suédoises",
        "category": "Plat principal",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJuAvTiRS0HtV2udfyl1EUVvTZfpdIodm5Jg&s",
        "hashtag": [
            "#Suédois",
            "#Boulettes",
            "#Réconfort"
        ],
        "description": "Les kéttbullar suédois avec une sauce crèmeuse à la crème et à la confiture de canneberges.",
        "time": "40 min",
        "servings": "4 personnes",
        "difficulty": "Facile",
        "ingredients": [
            "500g de bœuf-porc haché",
            "1 œuf",
            "50ml de crème",
            "1 oignon",
            "Pain rassis",
            "Noix de muscade",
            "50g de beurre",
            "200ml de bouillon",
            "200ml de crème fraîche",
            "Confiture de canneberges"
        ],
        "steps": [
            "Faire tremper le pain dans la crème.",
            "Mélanger la viande, l'œuf, l'oignon, le pain essoré et les épices.",
            "Former des petites boulettes.",
            "Faire dorer dans le beurre de tous côtés.",
            "Déglacer avec le bouillon et la crème fraîche.",
            "Servir avec la confiture de canneberges et une purée."
        ]
    },
    {
        "id": 90,
        "title": "Samosas indiens au poulet",
        "category": "Entrée",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV69EAvADrNo-6ICuQRKzOQJsp4Eq7mKed7Q&s",
        "hashtag": [
            "#Indien",
            "#Frit",
            "#Street food"
        ],
        "description": "Des samosas croustillants farcis au poulet épicé, petits pois et pommes de terre.",
        "time": "1h",
        "servings": "12 pièces",
        "difficulty": "Moyen",
        "ingredients": [
            "300g de farine",
            "200g de poulet cuit émincé",
            "2 pommes de terre",
            "100g de petits pois",
            "Garam masala",
            "Gingembre",
            "Cumin",
            "Coriandre",
            "Piment vert",
            "Huile de friture"
        ],
        "steps": [
            "Préparer la pâte avec la farine, l'huile et l'eau.",
            "Cuire les pommes de terre et les écraser grossiérement.",
            "Faire revenir les épices avec le poulet et les légumes.",
            "étaler la pâte et découper des cercles.",
            "Former des cornets, farcir et souder avec de l'eau.",
            "Frire é 170°C 4-5 min jusqu'à dorure."
        ]
    },
    {
        "id": 91,
        "title": "Tartare de bœuf classique",
        "category": "Entrée",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCYk5hKoFbIk2la1vN90ERYn1oERklVsa-oA&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCYk5hKoFbIk2la1vN90ERYn1oERklVsa-oA&s",
        "hashtag": [
            "#Français",
            "#Bœuf",
            "#Cru"
        ],
        "description": "Le tartare de bœuf couteau avec câpres, cornichons et la sauce secrète du chef.",
        "time": "20 min",
        "servings": "4 personnes",
        "difficulty": "Facile",
        "ingredients": [
            "600g de filet de bœuf",
            "4 jaunes d'œufs",
            "2 cuil. de moutarde",
            "2 cuil. d'Worcestershire",
            "Tabasco",
            "Câpres",
            "Cornichons",
            "Oignon rouge",
            "Persil",
            "Huile d'olive"
        ],
        "steps": [
            "Hacher finement le bœuf au couteau.",
            "émulsionner les jaunes avec la moutarde et l'Worcestershire.",
            "Mélanger délicatement la viande avec la sauce.",
            "Incorporer les câpres, cornichons et oignon finement hachés.",
            "Assaisonner avec le Tabasco, sel et poivre.",
            "Dresser à l'emporte-pièce et servir avec des frites allumettes."
        ]
    },
    {
        "id": 92,
        "title": "Biryani d'agneau",
        "category": "Plat principal",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo3qSwiuqvqN2xFh5-bG61FVzwVL6XAXhG-g&s",
        "hashtag": [
            "#Indien",
            "#Riz",
            "#Agneau"
        ],
        "description": "Le biryani royal avec de l'agneau mariné, du riz basmati parfumé et des épices entières dorées.",
        "time": "3h",
        "servings": "6 personnes",
        "difficulty": "Difficile",
        "ingredients": [
            "500g de riz basmati",
            "800g d'agneau",
            "250g de yaourt",
            "3 oignons",
            "Safran",
            "Eau de rose",
            "Ghee",
            "Cardamome",
            "Clous de girofle",
            "Cannelle",
            "Laurier",
            "Coriandre & menthe fraîche"
        ],
        "steps": [
            "Mariner l'agneau au yaourt et aux épices moulues 2h.",
            "Faire dorer les oignons jusqu'à caramélisation.",
            "Cuire l'agneau avec les épices entières.",
            "Précuire le riz aux 3/4.",
            "Alterner couches de riz et d'agneau dans une grande casserole.",
            "Arroser de safran infusé et cuire en dum (à l'étouffée) 30 min."
        ]
    },
    {
        "id": 93,
        "title": "Gelato pistache",
        "category": "Dessert",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7SDYTqrLshXjNvuncVQ2GtT_5bFhDRiRFpQ&s",
        "hashtag": [
            "#Italien",
            "#Glace",
            "#Pistache"
        ],
        "description": "Un gelato artisanal à la pistache de Sicile, dense et crémeux, avec un goét intense et naturel.",
        "time": "4h",
        "servings": "8 portions",
        "difficulty": "Moyen",
        "ingredients": [
            "500ml de lait entier",
            "200ml de crème",
            "150g de pâte de pistache pure",
            "150g de sucre",
            "4 jaunes d'œufs",
            "Pistaches concassées"
        ],
        "steps": [
            "Faire chauffer le lait et la crème.",
            "Blanchir les jaunes avec le sucre.",
            "Verser le lait chaud sur les jaunes et remettre sur le feu.",
            "Cuire é 82°C en remuant pour faire la crème anglaise.",
            "Incorporer la pâte de pistache et mixer.",
            "Faire refroidir puis turbiner en sorbetiére."
        ]
    },
    {
        "id": 94,
        "title": "Fettuccine Alfredo",
        "category": "Plat principal",
        "image": "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800&q=80",
        "hashtag": [
            "#Italien",
            "#Pâtes",
            "#Fromage"
        ],
        "description": "Les fettuccines crèmeuses avec du parmesan et du beurre, une recette simple et absolument délicieuse.",
        "time": "20 min",
        "servings": "4 personnes",
        "difficulty": "Facile",
        "ingredients": [
            "400g de fettuccine",
            "200g de parmesan râpé",
            "100g de beurre",
            "Sel",
            "Poivre noir",
            "Persil"
        ],
        "steps": [
            "Cuire les fettuccine al dente, réserver 2 tasses d'eau de cuisson.",
            "Faire fondre le beurre dans une grande poêle.",
            "Ajouter les pâtes égouttées et un peu d'eau de cuisson.",
            "Incorporer le parmesan hors du feu.",
            "émulsionner en ajoutant de l'eau progressivement.",
            "Poivrer généreusement et servir immédiatement."
        ]
    },
    {
        "id": 95,
        "title": "Empanadas argentines au bœuf",
        "category": "Entrée",
        "image": "https://img.cuisineaz.com/660x495/2013/12/20/i19930-empanadas-argentins-au-boeuf.jpeg",
        "hashtag": [
            "#Argentin",
            "#Street food",
            "#Bœuf"
        ],
        "description": "Des chaussons farcis au bœuf haché épicé avec des raisins secs, des olives et des œufs durs.",
        "time": "1h30",
        "servings": "12 pièces",
        "difficulty": "Moyen",
        "ingredients": [
            "500g de farine",
            "120g de beurre",
            "200ml d'eau chaude",
            "400g de bœuf haché",
            "1 oignon",
            "Poivron rouge",
            "Cumin",
            "Paprika",
            "50g de raisins secs",
            "Olives vertes",
            "2 œufs durs"
        ],
        "steps": [
            "Préparer la pâte avec la farine, le beurre et l'eau, laisser reposer.",
            "Faire revenir l'oignon et le poivron.",
            "Ajouter le bœuf et les épices, cuire 10 min.",
            "Incorporer les raisins, olives et œufs en morceaux.",
            "étaler la pâte, découper des cercles et farcir.",
            "Fermer en chausson, plisser le bord et cuire 20 min é 200°C."
        ]
    },
    {
        "id": 96,
        "title": "Beignets de courgettes",
        "category": "Entrée",
        "image": "https://assets.afcdn.com/recipe/20180117/76859_w1024h1024c1cx3008cy2008cxt0cyt0cxb6016cyb4016.jpg",
        "hashtag": [
            "#Grec",
            "#Végétarien",
            "#été"
        ],
        "description": "Des beignets de courgettes grecs croustillants avec de la feta et de la menthe.",
        "time": "30 min",
        "servings": "4 personnes",
        "difficulty": "Facile",
        "ingredients": [
            "3 courgettes",
            "150g de feta",
            "2 œufs",
            "3 cuil. de farine",
            "Menthe fraîche",
            "Aneth",
            "Oignon nouveau",
            "Sel",
            "Poivre",
            "Huile d'olive"
        ],
        "steps": [
            "Réper les courgettes, saler et laisser dégorger 20 min.",
            "Presser pour extraire le maximum d'eau.",
            "Mélanger avec la feta émiettée, les œufs, les herbes et la farine.",
            "Former des galettes.",
            "Faire frire dans l'huile d'olive 3 min par face.",
            "égoutter et servir chaud avec du yaourt à l'ail."
        ]
    },
    {
        "id": 97,
        "title": "Mochi glacé au thé matcha",
        "category": "Dessert",
        "image": "https://medias.cotesushi.com/products/270/large_f6841.webp",
        "hashtag": [
            "#Japonais",
            "#Matcha",
            "#Glacé"
        ],
        "description": "Des mochis de riz gluant enveloppant une boule de glace au matcha, saupoudrés de fécule de pomme de terre.",
        "time": "2h",
        "servings": "8 pièces",
        "difficulty": "Moyen",
        "ingredients": [
            "200g de farine de riz gluant",
            "50g de sucre glace",
            "200ml d'eau",
            "3 cuil. de thé matcha",
            "Fécule de pomme de terre",
            "Glace au matcha"
        ],
        "steps": [
            "Préparer des boules de glace, les congeler 2h.",
            "Mélanger la farine de riz, le matcha, le sucre et l'eau.",
            "Cuire au micro-ondes en mélangeant toutes les minutes.",
            "Saupoudrer le plan de travail de fécule.",
            "étaler la pâte é mochi et découper des cercles.",
            "Envelopper chaque boule de glace dans la pâte, bien sceller."
        ]
    },
    {
        "id": 98,
        "title": "Harira marocaine",
        "category": "Soupe",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTD8_6WQKH263gQUHJncS8BCKMWgAXnO7XfQ&s",
        "hashtag": [
            "#Marocain",
            "#Soupe",
            "#Légumineuses"
        ],
        "description": "La soupe marocaine traditionnelle aux lentilles, pois chiches et tomates, parfumée au citron et à la coriandre.",
        "time": "1h",
        "servings": "6 personnes",
        "difficulty": "Facile",
        "ingredients": [
            "200g de lentilles",
            "100g de pois chiches cuits",
            "300g de tomates",
            "100g de céleri",
            "150g d'agneau",
            "Coriandre",
            "Persil",
            "Curcuma",
            "Cannelle",
            "Gingembre",
            "Jus de citron",
            "Farine"
        ],
        "steps": [
            "Faire revenir la viande avec les épices.",
            "Ajouter les tomates concassées et le céleri.",
            "Verser l'eau chaude, les lentilles et les pois chiches.",
            "Mijoter 30 min.",
            "Délayer la farine dans de l'eau froide et verser dans la soupe.",
            "Terminer avec le jus de citron, la coriandre et le persil frais."
        ]
    },
    {
        "id": 99,
        "title": "Tostadas au thon épicé",
        "category": "Entrée",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLSS0K9IiAghfdLbFoDyOddmir0jwW2V7D9w&s",
        "hashtag": [
            "#Mexicain",
            "#Thon",
            "#Rapide"
        ],
        "description": "Des tostadas croustillantes garnies de thon épicé au chipotle, avocat et mangue fraîche.",
        "time": "15 min",
        "servings": "4 personnes",
        "difficulty": "Facile",
        "ingredients": [
            "8 tostadas",
            "2 boîtes de thon",
            "1 avocat",
            "1 mangue",
            "Piment chipotle en adobo",
            "Mayonnaise",
            "Lime",
            "Coriandre fraîche",
            "Oignon rouge"
        ],
        "steps": [
            "égoutter le thon et mélanger avec la mayo et le chipotle.",
            "Couper l'avocat et la mangue en dés.",
            "Assaisonner avec le jus de lime et le sel.",
            "Déposer le thon sur chaque tostada.",
            "Garnir de l'avocat, de la mangue et de l'oignon rouge.",
            "Terminer avec la coriandre fraîche et un filet de lime."
        ]
    },
    {
        "id": 100,
        "title": "Saint-Honoré classique",
        "category": "Dessert",
        "image": "https://i-re.unimedias.fr/2024/04/29/saint-honore-chou-chantilly-patisseriess-662f708911174.jpg?auto=format%2Ccompress&crop=faces&cs=tinysrgb&fit=crop&h=501&ixlib=php-4.1.0&w=890",
        "hashtag": [
            "#Français",
            "#Pâtisserie",
            "#Choux"
        ],
        "description": "Le gâteau Saint-Honoré avec sa pâte feuilletée, ses choux caramélisés et sa crème chiboust à la vanille.",
        "time": "3h",
        "servings": "8 personnes",
        "difficulty": "Difficile",
        "ingredients": [
            "200g de pâte feuilletée",
            "Pâte é choux",
            "500ml de lait",
            "4 jaunes d'œufs",
            "100g de sucre",
            "40g de maïzena",
            "4 blancs d'œufs",
            "150g de sucre (meringue)",
            "Caramel",
            "Chantilly"
        ],
        "steps": [
            "Cuire un disque de pâte feuilletée, disposer un boudin de choux en bordure.",
            "Préparer 12 petits choux supplémentaires.",
            "Réaliser la crème pâtissière et l'alléger avec la meringue italienne.",
            "Faire le caramel et tremper les choux.",
            "Fixer les choux caramélisés en couronne sur le feuilletage.",
            "Garnir de crème chiboust et décorer à la poche."
        ]
    },
    {
        "title": "Ramen japonais tonkotsu",
        "category": "Soupe",
        "image": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&q=80",
        "hashtag": [
            "#Japonais",
            "#Asiatique",
            "#Réconfortant"
        ],
        "description": "Bouillon de porc riche et crémeux avec nouilles fraîches, œuf mollet et chashu.",
        "time": "180 min",
        "servings": "4 personnes",
        "difficulty": "Difficile",
        "ingredients": [
            "1kg os de porc",
            "400g nouilles ramen",
            "4 œufs",
            "300g poitrine de porc",
            "2 cuilléres miso",
            "Oignon vert",
            "Nori",
            "Gingembre",
            "Ail"
        ],
        "steps": [
            "Faire bouillir les os de porc 3-4 heures pour le bouillon.",
            "Préparer le chashu en braisant la poitrine de porc.",
            "Cuire les œufs 6 min pour un jaune mollet.",
            "Assembler dans des bols avec nouilles chaudes.",
            "Garnir avec œuf, chashu, nori et oignon vert."
        ],
        "id": 101
    },
    {
        "title": "Curry rouge thaïlandais",
        "category": "Plat principal",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyVJ9zVBdjTpTNXQ2hQ7pGezvwAzjpIQxxYA&s",
        "hashtag": [
            "#Thaïlandais",
            "#épicé",
            "#LaitDeCoco"
        ],
        "description": "Curry parfumé au lait de coco avec poulet ou crevettes et légumes.",
        "time": "35 min",
        "servings": "4 personnes",
        "difficulty": "Moyen",
        "ingredients": [
            "400g poulet",
            "400ml lait de coco",
            "3 cuilléres pâte curry rouge",
            "1 aubergine thaï",
            "100g haricots verts",
            "Basilic thaï",
            "Sauce poisson",
            "Sucre palmier"
        ],
        "steps": [
            "Faire revenir la pâte de curry dans un peu de lait de coco.",
            "Ajouter le poulet coupé en morceaux.",
            "Verser le reste du lait de coco.",
            "Incorporer les légumes.",
            "Servir avec riz jasmin et basilic frais."
        ],
        "id": 102
    },
    {
        "title": "Moussaka grecque",
        "category": "Plat principal",
        "image": "https://recettes.precuttech.com/wp-content/uploads/2024/12/Delicieuse-Moussaka-Grecque-.jpeg",
        "hashtag": [
            "#Grec",
            "#Méditerranéen",
            "#Aubergine"
        ],
        "description": "Gratin d'aubergines avec viande hachée et béchamel crèmeuse.",
        "time": "90 min",
        "servings": "6 personnes",
        "difficulty": "Moyen",
        "ingredients": [
            "3 aubergines",
            "500g agneau haché",
            "2 oignons",
            "2 tomates",
            "500ml béchamel",
            "Cannelle",
            "Noix de muscade",
            "Parmesan",
            "Huile d'olive"
        ],
        "steps": [
            "Trancher et griller les aubergines.",
            "Faire revenir la viande avec oignons et tomates.",
            "Préparer la béchamel.",
            "Alterner couches d'aubergines et viande.",
            "Recouvrir de béchamel et cuire 45 min au four."
        ],
        "id": 103
    },
    {
        "title": "Butter Chicken indien",
        "category": "Plat principal",
        "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800&q=80",
        "hashtag": [
            "#Indien",
            "#Curry",
            "#épicé"
        ],
        "description": "Poulet tendre dans une sauce tomate crèmeuse et parfumée.",
        "time": "50 min",
        "servings": "4 personnes",
        "difficulty": "Moyen",
        "ingredients": [
            "600g poulet",
            "200ml crème",
            "400g tomates",
            "2 cuilléres garam masala",
            "1 cuillére curcuma",
            "Gingembre",
            "Ail",
            "Beurre",
            "Fenugrec"
        ],
        "steps": [
            "Mariner le poulet avec épices et yaourt.",
            "Faire revenir le poulet dans du beurre.",
            "Préparer la sauce avec tomates et épices.",
            "Ajouter la crème et le poulet.",
            "Servir avec riz basmati et naan."
        ],
        "id": 104
    },
    {
        "title": "Kimchi coréen",
        "category": "Accompagnement",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNxbY823BDekySLx-FOegJQnER_3WIvbsYHQ&s",
        "hashtag": [
            "#Coréen",
            "#Fermenté",
            "#Healthy"
        ],
        "description": "Chou fermenté épicé, accompagnement traditionnel coréen.",
        "time": "1440 min",
        "servings": "10 personnes",
        "difficulty": "Moyen",
        "ingredients": [
            "1 chou chinois",
            "100g sel",
            "50g piment gochugaru",
            "4 gousses d'ail",
            "Gingembre",
            "Oignon vert",
            "Sauce poisson",
            "Sucre"
        ],
        "steps": [
            "Saler le chou et laisser 2h.",
            "Rincer et essorer le chou.",
            "Préparer la pâte de piment avec épices.",
            "Enduire chaque feuille de chou.",
            "Fermenter 2-3 jours é température ambiante."
        ],
        "id": 105
    },
    {
        "title": "Ratatouille provençale",
        "category": "Plat principal",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfJQLVFC9tzNcH3_6-tETuso_tiozRwnw1zA&s",
        "hashtag": [
            "#Français",
            "#Végétarien",
            "#Légumes"
        ],
        "description": "Ragoût de légumes du soleil méditerranéens.",
        "time": "60 min",
        "servings": "6 personnes",
        "difficulty": "Facile",
        "ingredients": [
            "2 aubergines",
            "2 courgettes",
            "2 poivrons",
            "4 tomates",
            "1 oignon",
            "3 gousses d'ail",
            "Herbes de Provence",
            "Huile d'olive",
            "Basilic"
        ],
        "steps": [
            "Couper tous les légumes en dés.",
            "Faire revenir l'oignon et l'ail.",
            "Ajouter les légumes un par un.",
            "Cuire à feu doux 45 min.",
            "Servir chaud ou froid avec basilic."
        ],
        "id": 106
    },
    {
        "title": "Blinis russes",
        "category": "Entrée",
        "image": "https://russieautrement.com/upload/medialibrary/d98/crepes-aux-baies.jpg",
        "hashtag": [
            "#Russe",
            "#Crépes",
            "#Saumon"
        ],
        "description": "Petites crépes épaisses servies avec crème et saumon fumé.",
        "time": "30 min",
        "servings": "6 personnes",
        "difficulty": "Facile",
        "ingredients": [
            "200g farine de sarrasin",
            "2 œufs",
            "250ml lait",
            "1 cuillére levure",
            "100g crème fraîche",
            "200g saumon fumé",
            "Aneth",
            "Citron"
        ],
        "steps": [
            "Mélanger farine, œufs et lait.",
            "Laisser reposer la pâte 30 min.",
            "Cuire des petites crépes dans une poêle.",
            "Servir avec crème, saumon et aneth.",
            "Ajouter un filet de citron."
        ],
        "id": 107
    },
    {
        "title": "Baozi chinois",
        "category": "Plat principal",
        "image": "https://www.recettes.com/wp-content/uploads/2026/02/baozi_pain_de_viande_cuit_a_la_vapeur-scaled.jpg",
        "hashtag": [
            "#Chinois",
            "#Vapeur",
            "#Boulette"
        ],
        "description": "Pains vapeur chinois farcis au porc ou légumes.",
        "time": "120 min",
        "servings": "8 personnes",
        "difficulty": "Difficile",
        "ingredients": [
            "400g farine",
            "5g levure",
            "200ml lait",
            "300g porc haché",
            "Chou chinois",
            "Gingembre",
            "Sauce soja",
            "Huile de sésame",
            "Sucre"
        ],
        "steps": [
            "Préparer la pâte et laisser lever 1h.",
            "Préparer la farce avec porc et légumes.",
            "Former des boules et garnir.",
            "Laisser lever 30 min.",
            "Cuire à la vapeur 15 min."
        ],
        "id": 108
    },
    {
        "title": "Pavlova australienne",
        "category": "Dessert",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeSRgRbM79pytPfOrZEJ3btgGnqMFQRHJl8A&s",
        "hashtag": [
            "#Australien",
            "#Dessert",
            "#Fruits"
        ],
        "description": "Meringue croustillante avec crème chantilly et fruits frais.",
        "time": "90 min",
        "servings": "8 personnes",
        "difficulty": "Moyen",
        "ingredients": [
            "4 blancs d'œufs",
            "200g sucre",
            "1 cuillére vinaigre",
            "1 cuillére maïzena",
            "300ml crème",
            "Fruits de la passion",
            "Fraises",
            "Kiwi"
        ],
        "steps": [
            "Monter les blancs en neige fermement.",
            "Incorporer le sucre progressivement.",
            "Ajouter vinaigre et maïzena.",
            "Cuire 1h é 120°C puis laisser refroidir.",
            "Garnir de crème et fruits avant de servir."
        ],
        "id": 109
    },
    {
        "title": "Poutine canadienne",
        "category": "Plat principal",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_VHKlPyrIZKYSZB2FArv-vEKb2nVMLz0Y0w&s",
        "hashtag": [
            "#Canadien",
            "#FastFood",
            "#Réconfortant"
        ],
        "description": "Frites recouvertes de fromage en grains et sauce brune.",
        "time": "40 min",
        "servings": "4 personnes",
        "difficulty": "Facile",
        "ingredients": [
            "800g pommes de terre",
            "200g fromage en grains",
            "500ml fond de veau",
            "2 cuilléres farine",
            "1 oignon",
            "Beurre",
            "Sel",
            "Poivre"
        ],
        "steps": [
            "Couper et frire les pommes de terre.",
            "Préparer la sauce avec fond et farine.",
            "Disposer les frites dans un plat.",
            "Ajouter le fromage en grains.",
            "Verser la sauce chaude et servir immédiatement."
        ],
        "id": 110
    },
    {
        "title": "Feijoada brésilienne",
        "category": "Plat principal",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1qieSYkUd3SfjZUjgQs5kAPfrPuD18G6D0g&s",
        "hashtag": [
            "#Brésilien",
            "#Haricots",
            "#Viande"
        ],
        "description": "Ragoût de haricots noirs avec viandes variées, plat national brésilien.",
        "time": "180 min",
        "servings": "8 personnes",
        "difficulty": "Moyen",
        "ingredients": [
            "500g haricots noirs",
            "300g porc",
            "200g chorizo",
            "200g bœuf",
            "2 oignons",
            "4 gousses d'ail",
            "Feuilles de laurier",
            "Riz",
            "Orange"
        ],
        "steps": [
            "Tremper les haricots toute la nuit.",
            "Faire revenir les viandes séparément.",
            "Cuire les haricots avec viandes 2h.",
            "Assaisonner avec ail et oignon.",
            "Servir avec riz, orange et farofa."
        ],
        "id": 111
    },
    {
        "title": "Schnitzel autrichien",
        "category": "Plat principal",
        "image": "https://cruciblecookware.com/cdn/shop/articles/355823693.jpg?v=1676420439",
        "hashtag": [
            "#Autrichien",
            "#Viande",
            "#Pané"
        ],
        "description": "Escalope de veau panée et frite, servie avec citron.",
        "time": "30 min",
        "servings": "4 personnes",
        "difficulty": "Moyen",
        "ingredients": [
            "4 escalopes de veau",
            "100g farine",
            "2 œufs",
            "200g chapelure",
            "Beurre clarifié",
            "Citron",
            "Persil",
            "Sel",
            "Poivre"
        ],
        "steps": [
            "Aplatir les escalopes finement.",
            "Passer dans farine, œuf puis chapelure.",
            "Frire dans beurre clarifié 3 min chaque côté.",
            "égoutter sur papier absorbant.",
            "Servir avec citron et persil."
        ],
        "id": 112
    },
    {
        "title": "Biryani indien au poulet",
        "category": "Plat principal",
        "image": "https://www.yumelise.fr/wp-content/uploads/2021/11/biryani-poulet.jpg",
        "hashtag": [
            "#Indien",
            "#Riz",
            "#épicé"
        ],
        "description": "Riz parfumé aux épices avec poulet mariné, cuit en couches.",
        "time": "90 min",
        "servings": "6 personnes",
        "difficulty": "Difficile",
        "ingredients": [
            "500g riz basmati",
            "600g poulet",
            "2 oignons",
            "Yaourt",
            "Safran",
            "Garam masala",
            "Menthe",
            "Coriandre",
            "Beurre clarifié"
        ],
        "steps": [
            "Mariner le poulet avec yaourt et épices.",
            "Cuire le riz partiellement.",
            "Alterner couches de riz et poulet.",
            "Sceller et cuire à feu doux 30 min.",
            "Servir avec raita et salade."
        ],
        "id": 113
    },
    {
        "title": "Kimbap coréen",
        "category": "Plat principal",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0VDxH1VPvJqDig6V3yWcex-SAkh-BjTa8FQ&s",
        "hashtag": [
            "#Coréen",
            "#Riz",
            "#Healthy"
        ],
        "description": "Rouleaux de riz coréens avec légumes et viande, similaire aux sushi.",
        "time": "45 min",
        "servings": "4 personnes",
        "difficulty": "Moyen",
        "ingredients": [
            "400g riz",
            "6 feuilles de nori",
            "200g bœuf",
            "1 carotte",
            "1 épinard",
            "1 radis",
            "Œufs",
            "Huile de sésame",
            "Sésame"
        ],
        "steps": [
            "Cuire le riz et assaisonner.",
            "Préparer chaque garniture séparément.",
            "étaler le riz sur le nori.",
            "Rouler serré avec un makisu.",
            "Couper et servir avec kimchi."
        ],

        "id": 114
    },
    {
        "title": "Tzatziki grec",
        "category": "Entrée",
        "image": "https://cache.marieclaire.fr/data/photo/w1000_ci/6t/meilleure-recette-tzatziki-grec.jpg",
        "hashtag": [
            "#Grec",
            "#Yaourt",
            "#Healthy"
        ],
        "description": "Sauce froide au yaourt, concombre et ail, accompagnement méditerranéen.",
        "time": "15 min",
        "servings": "6 personnes",
        "difficulty": "Facile",
        "ingredients": [
            "500g yaourt grec",
            "1 concombre",
            "3 gousses d'ail",
            "Huile d'olive",
            "Vinaigre",
            "Menthe",
            "Aneth",
            "Sel"
        ],
        "steps": [
            "Réper le concombre et l'essorer.",
            "Mélanger avec yaourt et ail haché.",
            "Ajouter huile, vinaigre et herbes.",
            "Assaisonner avec sel.",
            "Réfrigérer 1h avant de servir."
        ],

        "id": 115
    },
    {
        "title": "Laksa malaisien",
        "category": "Soupe",
        "image": "https://thumbs.dreamstime.com/b/nourriture-traditionnelle-malaisie-de-laksa-24350696.jpg",
        "hashtag": [
            "#Malaisien",
            "#Soupe",
            "#Coco"
        ],
        "description": "Soupe de nouilles épicée au lait de coco avec crevettes.",
        "time": "50 min",
        "servings": "4 personnes",
        "difficulty": "Moyen",
        "ingredients": [
            "400g nouilles de riz",
            "300g crevettes",
            "400ml lait de coco",
            "Pâte de curry laksa",
            "Tofu frit",
            "Germes de soja",
            "Œufs",
            "Coriandre",
            "Piment"
        ],
        "steps": [
            "Faire revenir la pâte de curry.",
            "Ajouter le lait de coco.",
            "Cuire les nouilles séparément.",
            "Assembler dans des bols.",
            "Garnir avec crevettes, tofu et herbes."
        ],

        "id": 116
    },
    {
        "title": "Cannoli siciliens",
        "category": "Dessert",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLODnOChPZz5syXSDalOZDrmUCu3hiIt_oKw&s",
        "hashtag": [
            "#Italien",
            "#Dessert",
            "#Ricotta"
        ],
        "description": "Tubes de pâte frits garnis de crème de ricotta sucrée.",
        "time": "60 min",
        "servings": "8 personnes",
        "difficulty": "Difficile",
        "ingredients": [
            "300g farine",
            "50g sucre",
            "50g beurre",
            "500g ricotta",
            "100g sucre glace",
            "Pépites de chocolat",
            "Pistaches",
            "Cannelle"
        ],
        "steps": [
            "Préparer la pâte et laisser reposer.",
            "Former des tubes et frire.",
            "Mélanger ricotta avec sucre et chocolat.",
            "Garnir les cannoli avant de servir.",
            "Saupoudrer de pistaches."
        ],

        "id": 117
    },
    {
        "title": "Arepas vénézuéliennes",
        "category": "Plat principal",
        "image": "https://img.passeportsante.net/1200x675/2022-10-18/shutterstock-2022501950.webp",
        "hashtag": [
            "#Vénézuélien",
            "#Maïs",
            "#Street food"
        ],
        "description": "Galette de maïs garnie de fromage, viande ou haricots.",
        "time": "35 min",
        "servings": "6 personnes",
        "difficulty": "Facile",
        "ingredients": [
            "400g farine de maïs",
            "500ml eau",
            "Sel",
            "Fromage blanc",
            "Haricots noirs",
            "Avocat",
            "Œufs",
            "Beurre"
        ],
        "steps": [
            "Mélanger farine, eau et sel.",
            "Former des galettes de 2cm.",
            "Cuire sur plaque 5 min chaque côté.",
            "Ouvrir et garnir.",
            "Servir chaud avec beurre."
        ],

        "id": 118
    },
    {
        "title": "Katsu curry japonais",
        "category": "Plat principal",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIC-n8p297iX9EJgrz0yY6gv0pUs6QXGU2Dw&s",
        "hashtag": [
            "#Japonais",
            "#Poulet",
            "#Curry"
        ],
        "description": "Escalope de poulet panée servie avec curry japonais et riz.",
        "time": "45 min",
        "servings": "4 personnes",
        "difficulty": "Moyen",
        "ingredients": [
            "4 escalopes de poulet",
            "100g farine",
            "2 œufs",
            "200g panko",
            "2 oignons",
            "2 carottes",
            "2 pommes de terre",
            "Curry en blocs",
            "Riz"
        ],
        "steps": [
            "Paner le poulet avec farine, œuf et panko.",
            "Frire jusqu'à doré.",
            "Préparer le curry avec légumes.",
            "Cuire le riz.",
            "Servir poulet coupé sur riz avec curry."
        ],

        "id": 119
    },
    {
        "title": "Bénh Mé vietnamien",
        "category": "Plat principal",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9M3g7_UBt_IhwRixknb31XTBOH9gK8XC76A&s",
        "hashtag": [
            "#Vietnamien",
            "#Sandwich",
            "#Street food"
        ],
        "description": "Sandwich vietnamien avec pâté, viande et légumes marinés.",
        "time": "30 min",
        "servings": "4 personnes",
        "difficulty": "Facile",
        "ingredients": [
            "4 baguettes",
            "200g porc",
            "Pâté",
            "Carottes",
            "Radis",
            "Concombre",
            "Coriandre",
            "Piment",
            "Mayonnaise"
        ],
        "steps": [
            "Mariner et griller la viande.",
            "Préparer les légumes marinés.",
            "Tartiner la baguette avec pâté.",
            "Garnir avec viande et légumes.",
            "Servir avec coriandre et piment."
        ],

        "id": 120
    },
    {
        "title": "Chirashi Don japonais",
        "category": "Plat principal",
        "image": "https://www.surfmadame.com/wp-content/uploads/2018/01/IMG_9196.jpg",
        "hashtag": [
            "#Japonais",
            "#Poisson",
            "#Healthy"
        ],
        "description": "Bowl de riz sushi garni de poisson cru frais et légumes.",
        "time": "30 min",
        "servings": "2 personnes",
        "difficulty": "Moyen",
        "ingredients": [
            "300g riz é sushi",
            "200g saumon frais",
            "100g thon",
            "1 avocat",
            "1 concombre",
            "Œufs de poisson",
            "Wasabi",
            "Sauce soja",
            "Nori"
        ],
        "steps": [
            "Préparer le riz vinaigré.",
            "Couper le poisson en tranches fines.",
            "Disposer le riz dans des bowls.",
            "Arranger le poisson et légumes dessus.",
            "Servir avec wasabi et sauce soja."
        ],

        "id": 121
    },
    {
        "title": "Pavé de saumon grillé",
        "category": "Plat principal",
        "image": "https://images.radio-canada.ca/v1/alimentation/recette/16x9/paves-saumon-grille-champignons-huile-amande.jpg",
        "hashtag": [
            "#Poisson",
            "#Healthy",
            "#Oméga3"
        ],
        "description": "Saumon frais grillé avec citron et herbes aromatiques.",
        "time": "20 min",
        "servings": "4 personnes",
        "difficulty": "Facile",
        "ingredients": [
            "4 pavés de saumon",
            "2 citrons",
            "Aneth",
            "Huile d'olive",
            "Sel",
            "Poivre",
            "Ail",
            "Beurre"
        ],
        "steps": [
            "Assaisonner le saumon.",
            "Griller 4 min chaque côté.",
            "Ajouter beurre et ail en fin de cuisson.",
            "Servir avec citron et aneth.",
            "Accompagner de légumes."
        ],

        "id": 122
    },
    {
        "title": "Galette des rois",
        "category": "Dessert",
        "image": "https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/marys_galette_38999_16x9.jpg",
        "hashtag": [
            "#Français",
            "#Fève",
            "#Épiphanienie"
        ],
        "description": "Pâte feuilletée garnie de frangipane, traditionnelle de l'Épiphanienie.",
        "time": "60 min",
        "servings": "8 personnes",
        "difficulty": "Moyen",
        "ingredients": [
            "2 pâtes feuilletées",
            "200g poudre d'amandes",
            "100g beurre",
            "100g sucre",
            "2 œufs",
            "1 fève",
            "Lait pour dorure"
        ],
        "steps": [
            "Mélanger poudre d'amandes, beurre et sucre.",
            "étaler une pâte et garnir.",
            "Cacher la fève.",
            "Recouvrir avec la deuxième pâte.",
            "Cuire 30 min é 200°C."
        ],

        "id": 123
    },
    {
        "title": "Quesadillas mexicaines",
        "category": "Plat principal",
        "image": "https://cdn.recetasderechupete.com/wp-content/uploads/2020/11/Quesadillas-varios-tipos.jpg",
        "hashtag": [
            "#Mexicain",
            "#Fromage",
            "#Rapide"
        ],
        "description": "Tortillas garnies de fromage fondu et garnitures variées.",
        "time": "20 min",
        "servings": "4 personnes",
        "difficulty": "Facile",
        "ingredients": [
            "8 tortillas",
            "300g fromage râpé",
            "200g poulet",
            "1 poivron",
            "1 oignon",
            "Coriandre",
            "Salsa",
            "Crème"
        ],
        "steps": [
            "Garnir la moitié des tortillas.",
            "Ajouter fromage et garnitures.",
            "Plier en deux.",
            "Cuire à la poêle 3 min chaque côté.",
            "Servir avec salsa et crème."
        ],

        "id": 124
    },
    {
        "title": "Burritos mexicains",
        "category": "Plat principal",
        "image": "https://maxi.cdnartwhere.eu/wp-content/uploads/recipe/2016-02/burritos-1280x720-963x542-c-default.jpg?ck=37a6259cc0c1dae299a7866489dff0bd",
        "hashtag": [
            "#Mexicain",
            "#Tortilla",
            "#Haricots"
        ],
        "description": "Grande tortilla farcie avec riz, haricots, viande et fromage.",
        "time": "35 min",
        "servings": "4 personnes",
        "difficulty": "Facile",
        "ingredients": [
            "4 grandes tortillas",
            "300g bœuf haché",
            "200g riz",
            "200g haricots rouges",
            "200g fromage",
            "Salsa",
            "Crème",
            "Avocat"
        ],
        "steps": [
            "Cuire la viande avec épices.",
            "Préparer le riz et haricots.",
            "Garnir les tortillas.",
            "Rouler serré.",
            "Griller légèrement à la poêle."
        ],

        "id": 125
    },
    {
        "title": "Fajitas mexicaines",
        "category": "Plat principal",
        "image": "https://gral-gie.com/wp-content/uploads/2023/01/visuel-recette-fatjitas-mexicaines-Gyma.jpg",
        "hashtag": [
            "#Mexicain",
            "#Grillé",
            "#Poivrons"
        ],
        "description": "Viande grillée avec poivrons et oignons, servie avec tortillas.",
        "time": "30 min",
        "servings": "4 personnes",
        "difficulty": "Facile",
        "ingredients": [
            "500g bœuf",
            "2 poivrons",
            "2 oignons",
            "8 tortillas",
            "Cumin",
            "Paprika",
            "Citron vert",
            "Coriandre",
            "Guacamole"
        ],
        "steps": [
            "Couper viande et légumes en lanières.",
            "Faire griller à feu vif.",
            "Assaisonner avec épices.",
            "Réchauffer les tortillas.",
            "Servir avec garnitures."
        ],

        "id": 126
    },
    {
        "title": "Nachos mexicains",
        "category": "Entrée",
        "image": "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=800&q=80",
        "hashtag": [
            "#Mexicain",
            "#Apéro",
            "#Fromage"
        ],
        "description": "Chips de maïs avec fromage fondu, jalapeños et garnitures.",
        "time": "20 min",
        "servings": "6 personnes",
        "difficulty": "Facile",
        "ingredients": [
            "400g chips tortilla",
            "300g fromage râpé",
            "200g bœuf haché",
            "Jalapeños",
            "Tomates",
            "Coriandre",
            "Crème",
            "Guacamole"
        ],
        "steps": [
            "Disposer les chips sur un plat.",
            "Ajouter fromage et garnitures.",
            "Passer au four 5 min.",
            "Servir avec crème et guacamole.",
            "Ajouter jalapeños."
        ],

        "id": 127
    },
    {
        "title": "Pozole mexicain",
        "category": "Soupe",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8APMIntmEXbhQv0UPLwsAbQYnjMCRkMRFbA&s",
        "hashtag": [
            "#Mexicain",
            "#Soupe",
            "#Maïs"
        ],
        "description": "Soupe traditionnelle mexicaine avec maïs hominy et porc.",
        "time": "120 min",
        "servings": "6 personnes",
        "difficulty": "Moyen",
        "ingredients": [
            "800g porc",
            "500g hominy",
            "3 piments guajillo",
            "2 oignons",
            "Ail",
            "Origan",
            "Laitue",
            "Radis",
            "Citron vert"
        ],
        "steps": [
            "Cuire le porc 1h30.",
            "Préparer la sauce avec piments.",
            "Ajouter hominy et sauce.",
            "Mijoter 30 min.",
            "Servir avec garnitures."
        ],

        "id": 128
    },
    {
        "title": "Tamales mexicains",
        "category": "Plat principal",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR63A3WTfQCsjmXN_bfr-uEhZr2mjP6GOzurA&s",
        "hashtag": [
            "#Mexicain",
            "#Maïs",
            "#Vapeur"
        ],
        "description": "Pâte de maïs farcie, enveloppée dans des feuilles et cuite vapeur.",
        "time": "120 min",
        "servings": "12 personnes",
        "difficulty": "Difficile",
        "ingredients": [
            "500g masa",
            "300g porc",
            "20 feuilles de maïs",
            "Sauce rouge",
            "Cumin",
            "Origan",
            "Bouillon",
            "Saindoux"
        ],
        "steps": [
            "Préparer la pâte de masa.",
            "Cuire et effilocher la viande.",
            "Garnir les feuilles avec pâte et viande.",
            "Plier et ficeler.",
            "Cuire à la vapeur 1h."
        ],

        "id": 129
    },
    {
        "title": "Mole poblano mexicain",
        "category": "Plat principal",
        "image": "https://www.seriouseats.com/thmb/TOQrlZhSHX6NwXXOT7vAIY7pMLY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2012__10__20121024-227412-mole-poblano-8aa343f2cb384508834ed888a4b65df2.jpg",
        "hashtag": [
            "#Mexicain",
            "#Sauce",
            "#Chocolat"
        ],
        "description": "Sauce complexe mexicaine de Puebla avec chocolat, servie sur poulet.",
        "time": "150 min",
        "servings": "6 personnes",
        "difficulty": "Difficile",
        "ingredients": [
            "6 cuisses de poulet",
            "5 piments séchés",
            "50g chocolat noir",
            "Amandes",
            "Raisins",
            "Cannelle",
            "Clous de girofle",
            "Sésame"
        ],
        "steps": [
            "Griller les piments et épices.",
            "Blender avec chocolat et fruits secs.",
            "Cuire le poulet séparément.",
            "Mijoter dans la sauce mole.",
            "Servir avec sésame grillé."
        ],

        "id": 130
    },
    {
        "title": "Cochinita pibil mexicaine",
        "category": "Plat principal",
        "image": "https://www.gastronomiac.com/wp/wp-content/uploads/2021/08/Cochinita-pibil.jpg",
        "hashtag": [
            "#Mexicain",
            "#Porc",
            "#Achiote"
        ],
        "description": "Porc mariné à l'achiote, cuit lentement dans des feuilles de banane.",
        "time": "240 min",
        "servings": "8 personnes",
        "difficulty": "Moyen",
        "ingredients": [
            "1kg épaule de porc",
            "3 cuilléres achiote",
            "Jus d'orange",
            "Ail",
            "Cumin",
            "Origan",
            "Feuilles de banane",
            "Oignons"
        ],
        "steps": [
            "Mariner le porc avec achiote et épices.",
            "Envelopper dans feuilles de banane.",
            "Cuire au four 3h é 160°C.",
            "Effilocher la viande.",
            "Servir avec tortillas et oignons."
        ],

        "id": 131
    },
    {
        "title": "Carnitas mexicaines",
        "category": "Plat principal",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCQeM-GIW8_ZfqovJ1M75Hv5pPIVQorxgq1A&s",
        "hashtag": [
            "#Mexicain",
            "#Porc",
            "#Tacos"
        ],
        "description": "Porc confit dans son gras, croustillant et tendre.",
        "time": "180 min",
        "servings": "8 personnes",
        "difficulty": "Moyen",
        "ingredients": [
            "1kg épaule de porc",
            "500g saindoux",
            "2 oranges",
            "4 gousses d'ail",
            "Cumin",
            "Origan",
            "Feuilles de laurier",
            "Sel"
        ],
        "steps": [
            "Couper le porc en morceaux.",
            "Cuire dans le saindoux 2h30.",
            "Augmenter le feu pour croustillant.",
            "Effilocher la viande.",
            "Servir dans des tacos."
        ],

        "id": 132
    },
    {
        "title": "Barbacoa mexicaine",
        "category": "Plat principal",
        "image": "https://www.keepingitsimpleblog.com/wp-content/uploads/2023/01/Mexican-barbacoa.jpg",
        "hashtag": [
            "#Mexicain",
            "#Bœuf",
            "#Lent"
        ],
        "description": "Bœuf mijoté lentement avec épices, traditionnel mexicain.",
        "time": "300 min",
        "servings": "10 personnes",
        "difficulty": "Moyen",
        "ingredients": [
            "1kg bœuf",
            "5 piments ancho",
            "4 gousses d'ail",
            "Cumin",
            "Clous de girofle",
            "Feuilles de banane",
            "Vinaigre",
            "Sel"
        ],
        "steps": [
            "Mariner la viande avec épices.",
            "Envelopper dans feuilles de banane.",
            "Cuire 5h à feu trés doux.",
            "Effilocher la viande.",
            "Servir avec tortillas."
        ],

        "id": 133
    },
    {
        "title": "Sopes mexicaines",
        "category": "Entrée",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOGsp7KpCY24LTLgFY0QcoSWZ9pXPNblVlOA&s",
        "hashtag": [
            "#Mexicain",
            "#Maïs",
            "#Haricots"
        ],
        "description": "Disques de maïs épais garnis de haricots et garnitures.",
        "time": "40 min",
        "servings": "8 personnes",
        "difficulty": "Moyen",
        "ingredients": [
            "400g masa",
            "300g haricots",
            "200g poulet",
            "Laitue",
            "Fromage",
            "Crème",
            "Salsa",
            "Avocat"
        ],
        "steps": [
            "Former des disques de masa.",
            "Cuire sur comal 3 min chaque côté.",
            "Pincer les bords.",
            "Garnir avec haricots et poulet.",
            "Ajouter légumes et crème."
        ],

        "id": 134
    },
    {
        "title": "Gorditas mexicaines",
        "category": "Plat principal",
        "image": "https://www.196flavors.com/wp-content/uploads/2018/10/gordita-2.jpg",
        "hashtag": [
            "#Mexicain",
            "#Maïs",
            "#Fourré"
        ],
        "description": "Disques de maïs épais fendus et garnis.",
        "time": "45 min",
        "servings": "6 personnes",
        "difficulty": "Moyen",
        "ingredients": [
            "400g masa",
            "300g viande",
            "200g fromage",
            "Laitue",
            "Tomates",
            "Crème",
            "Salsa",
            "Avocat"
        ],
        "steps": [
            "Former des disques épais.",
            "Cuire sur comal 4 min chaque côté.",
            "Fendre en deux.",
            "Garnir avec viande et fromage.",
            "Ajouter légumes."
        ],

        "id": 135
    },
    {
        "title": "Tlayudas mexicaines",
        "category": "Plat principal",
        "image": "https://thumbs.dreamstime.com/z/cuisine-traditionnelle-mexicaine-de-tlayuda-oaxaca-mexique-chorizo-et-sauterelles-197001267.jpg",
        "hashtag": [
            "#Mexicain",
            "#Oaxaca",
            "#Pizza"
        ],
        "description": "Grande tortilla croustillante garnie comme une pizza.",
        "time": "35 min",
        "servings": "4 personnes",
        "difficulty": "Facile",
        "ingredients": [
            "4 grandes tortillas",
            "300g haricots",
            "300g fromage Oaxaca",
            "200g chorizo",
            "Laitue",
            "Tomates",
            "Avocat",
            "Salsa"
        ],
        "steps": [
            "Griller les tortillas.",
            "étaler les haricots.",
            "Ajouter fromage et chorizo.",
            "Cuire jusqu'à ce que le fromage fonde.",
            "Garnir avec légumes."
        ],

        "id": 136
    },
    {
        "title": "Pan de Elote mexicain",
        "category": "Dessert",
        "image": "https://inmamamaggieskitchen.com/wp-content/uploads/2017/11/Pan-de-Elote-or-Mexican-Sweet-Corn-Cake-2-500x375.jpg",
        "hashtag": [
            "#Mexicain",
            "#Maïs",
            "#Gâteau"
        ],
        "description": "Gâteau mexicain doux é base de maïs frais.",
        "time": "60 min",
        "servings": "8 personnes",
        "difficulty": "Moyen",
        "ingredients": [
            "4 épis de maïs",
            "200g farine",
            "150g sucre",
            "3 œufs",
            "100g beurre",
            "1 cuillére levure",
            "Vanille",
            "Cannelle"
        ],
        "steps": [
            "Blender les grains de maïs.",
            "Mélanger avec farine et œufs.",
            "Ajouter sucre et beurre fondu.",
            "Verser dans un moule.",
            "Cuire 40 min é 180°C."
        ],

        "id": 137
    },
    {
        "title": "Chilaquiles mexicains",
        "category": "Petit-déjeuner",
        "image": "https://www.datocms-assets.com/104115/1692659898-chilaquiles-du-matin.jpg",
        "hashtag": [
            "#Mexicain",
            "#Petit-déjeuner",
            "#Œufs"
        ],
        "description": "Chips de tortilla dans sauce verte ou rouge avec œufs.",
        "time": "30 min",
        "servings": "4 personnes",
        "difficulty": "Facile",
        "ingredients": [
            "400g chips tortilla",
            "400g salsa verde",
            "4 œufs",
            "200g fromage",
            "Crème",
            "Oignon",
            "Coriandre",
            "Avocat"
        ],
        "steps": [
            "Chauffer la salsa verde.",
            "Ajouter les chips et mélanger.",
            "Cuire les œufs au plat.",
            "Servir avec fromage et crème.",
            "Garnir avec oignon et coriandre."
        ],

        "id": 138
    },
    {
        "title": "Sushi California Roll",
        "category": "Plat principal",
        "image": "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&q=80",
        "hashtag": [
            "#Japonais",
            "#Fruits de mer",
            "#Healthy"
        ],
        "description": "Rouleaux de sushi inversés avec crabe, avocat et concombre, riz vinaigré.",
        "time": "40 min",
        "servings": "4 personnes",
        "difficulty": "Moyen",
        "ingredients": [
            "300g riz é sushi",
            "4 feuilles de nori",
            "200g chair de crabe",
            "1 avocat",
            "1/2 concombre",
            "Vinaigre de riz",
            "Sucre",
            "Sel",
            "Sésame"
        ],
        "steps": [
            "Cuire le riz et l'assaisonner avec vinaigre, sucre et sel.",
            "étaler le riz sur le nori.",
            "Ajouter crabe, avocat et concombre.",
            "Rouler serré avec un makisu.",
            "Couper en 8 morceaux et servir avec soja."
        ],

        "id": 139
    },
    {
        "id": 140,
        "title": "Raviolis maison ricotta-épinards",
        "category": "Plat principal",
        "image": "https://iod.keplrstatic.com/api/ar_1.25,g_north,c_fill/ar_1.5,w_800,q_70,c_fill,f_auto,dpr_auto/mon_marche/la_recette_des_raviolis_maison_ricotta_et_pinard_.png",
        "hashtag": [
            "#Italien",
            "#PâtesFraîches",
            "#Végétarien"
        ],
        "description": "Des raviolis fondants à la ricotta et aux épinards, faits maison avec une sauce beurre-sauge.",
        "time": "1h30",
        "servings": "4 personnes",
        "difficulty": "Difficile",
        "ingredients": [
            "300g de farine",
            "3 œufs",
            "250g de ricotta",
            "200g d'épinards frais",
            "50g de parmesan",
            "Noix de muscade",
            "Sel & poivre",
            "100g de beurre",
            "10 feuilles de sauge"
        ],
        "steps": [
            "Mélanger la farine et les œufs pour former une pâte lisse, laisser reposer 30 min.",
            "Faire revenir les épinards, les hacher, puis mélanger avec la ricotta et le parmesan.",
            "Abaisser la pâte en deux longs rubans.",
            "Déposer des petites boules de farce sur un ruban, recouvrir de l'autre ruban, découper les raviolis.",
            "Les cuire 3-4 min dans l'eau bouillante salée.",
            "Faire fondre le beurre avec la sauge, puis napper les raviolis."
        ]
    },
    {
        "id": 141,
        "title": "Cornichons aigres-doux maison",
        "category": "Apéritif / Accompanement",
        "image": "https://www.meatmeathome.com/cdn/shop/files/MaisonMarc-AigreDoux3.jpg?v=1756995930&width=1500",
        "hashtag": [
            "#Apéro",
            "#FaitMaison",
            "#Conserverie"
        ],
        "description": "Des cornichons croquants marinés dans un vinaigre parfumé à l'aneth et à l'ail.",
        "time": "30 min + 48h de repos",
        "servings": "1 bocal",
        "difficulty": "Facile",
        "ingredients": [
            "500g de petits cornichons",
            "250ml de vinaigre blanc",
            "250ml d'eau",
            "2 cuil. à soupe de sel",
            "2 cuil. à soupe de sucre",
            "4 gousses d'ail",
            "Aneth fraîche",
            "Graines de moutarde",
            "Poivre en grains"
        ],
        "steps": [
            "Laver et brosser les cornichons, couper les extrémités.",
            "Stériliser un bocal en verre.",
            "Porter à ébullition le vinaigre, l'eau, le sel et le sucre.",
            "Dans le bocal, disposer les cornichons avec l'ail, l'aneth, la moutarde et le poivre.",
            "Verser le liquide bouillant jusqu'en haut, fermer immédiatement.",
            "Laisser refroidir puis placer au réfrigérateur 48h minimum avant dégustation."
        ]
    },
    {
        "id": 142,
        "title": "Tarte Tatin renversée",
        "category": "Dessert",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDuyIGzlKMr6suIGEKZW2oh3RYJqkQWstwkA&s",
        "hashtag": [
            "#Dessert",
            "#Pommes",
            "#Classique"
        ],
        "description": "La célèbre tarte aux pommes caramélisées renversée, croustillante et fondante à la fois.",
        "time": "55 min",
        "servings": "6 personnes",
        "difficulty": "Moyen",
        "ingredients": [
            "6 pommes (Reinettes)",
            "150g de sucre",
            "80g de beurre",
            "1 pâte feuilletée",
            "1 cuil. à café de cannelle"
        ],
        "steps": [
            "Préchauffer le four à 180°C.",
            "Dans un moule à manqué, faire fondre le beurre et ajouter le sucre pour obtenir un caramel clair.",
            "Éplucher les pommes, les couper en quartiers.",
            "Disposer les pommes serrées dans le caramel, saupoudrer de cannelle.",
            "Couvrir avec la pâte feuilletée en rentrant les bords à l'intérieur.",
            "Enfourner 35 min, puis renverser la tarte chaude sur un plat de service."
        ]
    },
    {
        "id": 143,
        "title": "Koulibiac de saumon",
        "category": "Plat principal",
        "image": "https://cache.marieclaire.fr/data/photo/w1200_h630_ci/1bk/koulibiac.jpg",
        "hashtag": [
            "#Russe",
            "#Poisson",
            "#Gourmet"
        ],
        "description": "Un feuilleté russe généreux fourré au saumon, riz, œufs durs et champignons.",
        "time": "1h15",
        "servings": "6 personnes",
        "difficulty": "Difficile",
        "ingredients": [
            "2 ronds de pâte feuilletée",
            "600g de filet de saumon",
            "150g de riz",
            "3 œufs durs",
            "200g de champignons",
            "1 oignon",
            "Aneth & persil",
            "1 jaune d'œuf",
            "Sel & poivre"
        ],
        "steps": [
            "Cuire le riz. Hacher les œufs durs. Faire revenir oignon et champignons.",
            "Mélanger le riz, les œufs, les champignons, et les herbes.",
            "Étaler un premier disque de pâte. Déposer une couche de riz, puis le saumon, puis le reste de riz.",
            "Recouvrir avec le second disque de pâte, souder les bords.",
            "Dorer à l'œuf et faire des cheminées (trous).",
            "Enfourner 35 min à 180°C. Servir chaud avec une sauce crème-aneth."
        ]
    },
    {
        "id": 144,
        "title": "Choucroute alsacienne garnie",
        "category": "Plat principal",
        "image": "https://img.over-blog-kiwi.com/1/02/97/00/20190412/ob_70c8b6_p1050190.JPG",
        "hashtag": [
            "#Alsacienne",
            "#Tradition",
            "#PlatUnique"
        ],
        "description": "La vraie choucroute mitonnée au vin blanc avec des charcuteries et viandes fumées.",
        "time": "2h30",
        "servings": "6 personnes",
        "difficulty": "Moyen",
        "ingredients": [
            "1kg de choucroute crue",
            "200g de lardons fumés",
            "4 saucisses de Strasbourg",
            "4 saucisses de Montbéliard",
            "4 travers de porc fumés",
            "2 oignons",
            "25cl de vin blanc sec",
            "8 baies de genièvre",
            "2 clous de girofle",
            "Sel & poivre"
        ],
        "steps": [
            "Rincer la choucroute pour la dessaler, puis l'égoutter.",
            "Dans une cocotte, faire revenir les lardons et les oignons.",
            "Ajouter la choucroute, le vin blanc, les baies de genièvre, les clous de girofle. Couvrir et laisser mijoter 1h.",
            "Ajouter les travers et les saucisses de Montbéliard, cuire encore 45 min.",
            "Ajouter les saucisses de Strasbourg 15 min avant la fin.",
            "Servir brûlant avec des pommes de terre à l'eau."
        ]
    }
]