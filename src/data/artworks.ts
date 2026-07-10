export interface Artist {
  name: string;
  bio: string;
  birth: number;
  death?: number;
  nationality: string;
}

export interface Artwork {
  id: string;
  title: string;
  artist: Artist;
  year: string;
  medium: string;
  dimensions: string;
  description: string;
  history: string;
  location: {
    museum: string;
    city: string;
    country: string;
  };
  image: string;
  tags: string[];
  featured?: boolean;
}

export const artworks: Artwork[] = [
  {
    id: "benin-bronze-queen",
    title: "Head of an Oba (Queen Idia)",
    artist: {
      name: "Unknown Edo Artist",
      bio: "Skilled bronze casters of the Kingdom of Benin, working in the court tradition of the Oba (king). The Benin bronze casting tradition dates back to the 13th century using the lost-wax method.",
      birth: 1400,
      death: 1600,
      nationality: "Edo (Benin Kingdom, Nigeria)",
    },
    year: "c. 1520",
    medium: "Brass, lost-wax casting",
    dimensions: "41 cm height",
    description:
      "This naturalistic bronze head portrays Queen Idia, mother of Oba Esigie (r. 1504–1550), who was a powerful political and spiritual figure in the Benin Kingdom. The ivory scarification marks on the forehead and the elaborate coral bead headdress denote her royal status. Queen Idia was a warrior queen who raised an army and fought alongside her son.",
    history:
      "Created during the height of the Benin Empire's artistic flourishing, this head was part of a royal ancestral altar. In 1897, during the British punitive expedition, it was looted from the royal palace. It has since become one of the most iconic African artworks in the Western canon. The Benin Dialogue Group continues to negotiate its return to Nigeria.",
    location: {
      museum: "The British Museum",
      city: "London",
      country: "United Kingdom",
    },
    image: "/images/benin-bronze-queen.jpg",
    tags: ["traditional", "west-africa", "bronze", "royalty", "16th-century"],
    featured: true,
  },
  {
    id: "mali-chibinda",
    title: "Chibinda Ilunga (The Hunter King)",
    artist: {
      name: "Unknown Chokwe Artist",
      bio: "Master carvers of the Chokwe people, renowned for their refined figurative sculpture. Chokwe art is characterized by naturalistic proportions, elaborate hairstyles, and symbolic scarification patterns.",
      birth: 1700,
      death: 1900,
      nationality: "Chokwe (Angola/DRC)",
    },
    year: "c. 1850",
    medium: "Wood, pigment, fiber",
    dimensions: "58 cm height",
    description:
      "This sculpture depicts the legendary Chibinda Ilunga, a mythical Luba prince who introduced hunting and governance to the Chokwe people. He is shown wearing an elaborate headdress and carrying a hunting horn, symbols of his authority. The figure's serene expression and detailed scarification represent the epitome of Chokwe artistic ideals.",
    history:
      "Chibinda Ilunga is a central figure in Chokwe oral tradition. This type of sculpture was used in royal courts to legitimize the power of chiefs. The figure's pose — seated with legs crossed — is a posture of authority. The carving was collected during the early colonial period and later acquired by the Musée Royal de l'Afrique Centrale.",
    location: {
      museum: "Musée Royal de l'Afrique Centrale",
      city: "Tervuren",
      country: "Belgium",
    },
    image: "/images/mali-chibinda.jpg",
    tags: ["traditional", "central-africa", "wood", "royalty", "19th-century"],
    featured: true,
  },
  {
    id: "ashanti-golden-stool",
    title: "Golden Stool (Sika Dwa Kofi)",
    artist: {
      name: "Osei Bonsu",
      bio: "Legendary Asante master goldsmith and carver, commissioned by the Asantehene (king) Osei Tutu I. In Asante tradition, the Golden Stool was believed to have descended from the heavens in a cloud of dust.",
      birth: 1650,
      death: 1717,
      nationality: "Asante (Ghana)",
    },
    year: "c. 1700",
    medium: "Wood, gold leaf, cast gold bells",
    dimensions: "46 cm height, 61 cm length, 30 cm width",
    description:
      "The Golden Stool is the sacred symbol of the Asante nation, believed to house the soul (sunsum) of the Asante people. It is a carefully crafted wooden stool entirely covered in gold leaf, adorned with cast gold bells that tinkle when the stool is moved. No one has ever been allowed to sit on it — it rests on its own throne.",
    history:
      "According to tradition, the stool descended from heaven in the late 17th century during a gathering of Asante chiefs. During the 1900 War of the Golden Stool (Yaa Asantewaa War), the British demanded the stool, sparking a fierce resistance. The stool was hidden and survived. It remains a living symbol of Asante sovereignty, kept in the Royal Palace in Kumasi.",
    location: {
      museum: "Manhyia Palace (Royal Palace)",
      city: "Kumasi",
      country: "Ghana",
    },
    image: "/images/ashanti-golden-stool.jpg",
    tags: ["traditional", "west-africa", "gold", "royalty", "18th-century", "sacred"],
    featured: true,
  },
  {
    id: "yinka-baroque",
    title: "The Baroque Eye",
    artist: {
      name: "Yinka Shonibare",
      bio: "Yinka Shonibare CBE (born 1962) is a British-Nigerian conceptual artist known for his exploration of colonialism, cultural identity, and globalization. He uses Dutch wax batik fabrics — a textile that is Indonesian in origin, Dutch-manufactured, but now synonymous with African identity — to critique authenticity and hybridity.",
      birth: 1962,
      nationality: "British-Nigerian",
    },
    year: "2008",
    medium: "Dutch wax batik fabric, fiberglass mannequin, globe",
    dimensions: "180 cm height",
    description:
      "A headless mannequin dressed in a richly patterned Baroque-style costume made from Dutch wax batik fabric, kneeling on one knee while holding a globe crowned with a compass. The work explores the intersections of 18th-century European Baroque aesthetics, African textile traditions, and the global flows of trade and colonialism.",
    history:
      "Shonibare's work challenges fixed notions of identity and cultural purity. 'The Baroque Eye' was created as part of a series examining Enlightenment ideals and their relationship to colonialism. It was exhibited at the 2008 São Paulo Biennial and has since become one of his most recognized works. Shonibare was awarded the CBE in 2019 and elected a Royal Academician.",
    location: {
      museum: "Tate Modern",
      city: "London",
      country: "United Kingdom",
    },
    image: "/images/yinka-baroque.png",
    tags: ["contemporary", "diaspora", "installation", "colonialism", "2000s"],
    featured: true,
  },
  {
    id: "kerry-james-marshall",
    title: "Past Times",
    artist: {
      name: "Kerry James Marshall",
      bio: "Kerry James Marshall (born 1955) is an American painter known for his monumental depictions of Black life, culture, and history. His work consciously inserts Black figures into the Western art historical canon, from painting to landscape to portraiture. He was awarded the MacArthur Fellowship in 1997.",
      birth: 1955,
      nationality: "American",
    },
    year: "1997",
    medium: "Acrylic and collage on canvas",
    dimensions: "274.3 × 365.8 cm",
    description:
      "A large-scale composite painting depicting an idealized African American family enjoying a day at a lakeside park. The scene combines elements from various sources — pastoral landscapes, classical mythology, and African American leisure culture. The figures are rendered in Marshall's signature deep black, asserting their presence in a genre — pastoral landscape — from which Black people have been historically excluded.",
    history:
      "'Past Times' was created during a moment of intense debate about multiculturalism and representation in the art world. Marshall's work directly addresses the absence of Black figures in Western art history museums. The painting sold for $21.1 million in 2019, making it one of the most expensive works by a living Black artist at the time.",
    location: {
      museum: "The Metropolitan Museum of Art",
      city: "New York",
      country: "United States",
    },
    image: "/images/kerry-james-marshall.png",
    tags: ["contemporary", "diaspora", "painting", "american", "1990s"],
    featured: true,
  },
  {
    id: "nubian-pyramids",
    title: "Pyramids of Meroë (Reconstruction)",
    artist: {
      name: "Unknown Kushite Architects",
      bio: "The architects and engineers of the Kingdom of Kush (c. 800 BCE – 350 CE) who built over 200 pyramids in the Nubian desert. Unlike Egyptian pyramids, Kushite pyramids are steeper, smaller, and topped with a distinctive single capstone.",
      birth: -800,
      death: -300,
      nationality: "Kushite (Sudan)",
    },
    year: "c. 300 BCE",
    medium: "Sandstone, granite",
    dimensions: "Various (largest 30m base, 65m height)",
    description:
      "The Nubian pyramids of Meroë represent one of the great architectural achievements of ancient Africa. Built as royal tombs for the rulers of Kush, these pyramids feature distinctive steep angles, decorative reliefs, and burial chambers adorned with scenes from the royal afterlife. The site contains more pyramids than all of Egypt.",
    history:
      "Meroë was the capital of the Kingdom of Kush from 590 BCE to 350 CE. The pyramid field at Meroë contains the tombs of over 40 kings, queens, and nobles. The site was excavated by various archaeological expeditions in the 19th and 20th centuries. It was designated a UNESCO World Heritage Site in 2011.",
    location: {
      museum: "Meroë Archaeological Site (UNESCO)",
      city: "Shendi",
      country: "Sudan",
    },
    image: "/images/nubian-pyramids.jpg",
    tags: ["traditional", "north-africa", "architecture", "ancient", "royalty"],
    featured: true,
  },
  {
    id: "dogon-mask",
    title: "Kanaga Mask",
    artist: {
      name: "Unknown Dogon Artist",
      bio: "Dogon sculptors from the Bandiagara Escarpment in Mali create masks and figures for use in ritual ceremonies. Dogon art is deeply tied to cosmology, representing the Dogon understanding of the universe's creation.",
      birth: 1700,
      death: 1900,
      nationality: "Dogon (Mali)",
    },
    year: "c. 1900",
    medium: "Wood, pigment, fiber",
    dimensions: "95 cm height",
    description:
      "The Kanaga mask is one of the most recognizable forms of African art, featuring a distinctive double-barred cross shape atop a human face. The mask represents the primordial creator god Amma and the structure of the universe. The top bar symbolizes the sky, the lower bar the earth, and the vertical element connects them.",
    history:
      "Used in the Dama ceremony — a funerary ritual that releases the soul of the deceased to join the ancestors. The Kanaga mask dance is performed by members of the Awa society. The mask's grace and abstraction profoundly influenced European modernists, including Picasso and Braque, who saw it in ethnographic museums.",
    location: {
      museum: "Musée du Quai Branly – Jacques Chirac",
      city: "Paris",
      country: "France",
    },
    image: "/images/dogon-mask.jpg",
    tags: ["traditional", "west-africa", "wood", "mask", "ritual", "19th-century"],
    featured: false,
  },
  {
    id: "mickalene-thomas",
    title: "Le Déjeuner sur l'Herbe: Les Trois Femmes Noires",
    artist: {
      name: "Mickalene Thomas",
      bio: "Mickalene Thomas (born 1971) is an American contemporary artist known for her large-scale, rhinestone-encrusted paintings of Black women in domestic interiors. Her work reimagines art historical tropes through a feminist, queer, and Afrocentric lens.",
      birth: 1971,
      nationality: "American",
    },
    year: "2010",
    medium: "Acrylic, enamel, and rhinestones on wood panel",
    dimensions: "274.3 × 304.8 cm",
    description:
      "A bold reimagining of Édouard Manet's 1863 painting 'Le Déjeuner sur l'Herbe,' replacing the original white figures with three confident Black women in a lush natural setting. The rhinestones and bright colors create a glamorous, empowering aesthetic that challenges the male gaze and the absence of Black women in art history.",
    history:
      "Thomas's work directly engages with the politics of representation. 'Le Déjeuner sur l'Herbe: Les Trois Femmes Noires' was exhibited at the Brooklyn Museum as part of her landmark exhibition 'Mickalene Thomas: Origin of the Universe' (2012). The painting is part of her ongoing series reinterpreting European masterpieces.",
    location: {
      museum: "Brooklyn Museum",
      city: "New York",
      country: "United States",
    },
    image: "/images/mickalene-thomas.png",
    tags: ["contemporary", "diaspora", "painting", "feminist", "2010s"],
    featured: false,
  },
  {
    id: "el-anatsui",
    title: "Dusasa II",
    artist: {
      name: "El Anatsui",
      bio: "El Anatsui (born 1944) is a Ghanaian-born, Nigerian-based sculptor whose monumental metal hangings transform discarded bottle caps into shimmering, tapestry-like installations. His work explores consumption, waste, and the transatlantic movement of goods and people.",
      birth: 1944,
      nationality: "Ghanaian",
    },
    year: "2007",
    medium: "Aluminum bottle caps and copper wire",
    dimensions: "274.3 × 640.1 cm (variable)",
    description:
      "A vast, shimmering wall of interconnected metal pieces created from thousands of recycled liquor bottle caps. The work drapes and flows like a magnificent textile, evoking both kente cloth and the flow of history. The bottle caps — used to seal spirits — allude to the triangular trade, colonialism, and the global circulation of commodities.",
    history:
      "'Dusasa II' is part of Anatsui's breakthrough series of metal bottle-cap installations. It was first exhibited at the 2007 Venice Biennale, where Anatsui represented Ghana. The work has been shown at major museums worldwide. Anatsui was awarded the Golden Lion for Lifetime Achievement at the 2015 Venice Biennale.",
    location: {
      museum: "The Museum of Modern Art (MoMA)",
      city: "New York",
      country: "United States",
    },
    image: "/images/el-anatsui.png",
    tags: ["contemporary", "west-africa", "installation", "sculpture", "recycled", "2000s"],
    featured: true,
  },
  {
    id: "kongo-nkisi",
    title: "Nkisi Nkondi (Power Figure)",
    artist: {
      name: "Unknown Kongo Artist",
      bio: "Kongo ritual specialists (nganga) who carved and empowered nkisi figures. These objects served as containers for spiritual forces used in healing, oath-taking, and dispute resolution in the Kongo kingdom (present-day Angola, DRC, and Republic of Congo).",
      birth: 1700,
      death: 1900,
      nationality: "Kongo (Angola/DRC)",
    },
    year: "c. 1800",
    medium: "Wood, iron, mirrors, shells, resin, pigment",
    dimensions: "76 cm height",
    description:
      "A richly carved human figure with a hollow belly cavity containing medicinal substances, sealed with a mirror. The figure is covered with iron blades, nails, and other metal objects driven into the wood — each representing a vow, a judgment, or a dispute resolved. The staring eyes and open mouth convey the figure's role as a witness and enforcer.",
    history:
      "Nkisi N'Kondi figures were used by Kongo communities as instruments of justice and protection. The nganga (spiritual specialist) would activate the figure by inserting a nail or blade to seal an oath or judgment. European colonial authorities and missionaries often confiscated and destroyed them, labeling them 'fetishes.'",
    location: {
      museum: "Metropolitan Museum of Art",
      city: "New York",
      country: "United States",
    },
    image: "/images/kongo-nkisi.jpg",
    tags: ["traditional", "central-africa", "wood", "ritual", "spiritual", "18th-century"],
    featured: false,
  },
  {
    id: "basquiat-warrior",
    title: "Warrior",
    artist: {
      name: "Jean-Michel Basquiat",
      bio: "Jean-Michel Basquiat (1960–1988) was an American artist who rose to fame in the 1980s New York art scene. Starting as a graffiti artist (SAMO), he developed a distinctive neo-expressionist style combining text, symbols, and figures. His work addresses themes of race, identity, and social justice.",
      birth: 1960,
      death: 1988,
      nationality: "American (Haitian-Puerto Rican descent)",
    },
    year: "1982",
    medium: "Acrylic, oil stick, and spray paint on canvas",
    dimensions: "183 × 173 cm",
    description:
      "A powerful, confrontational figure rendered in Basquiat's signature raw, energetic style. The warrior figure is crowned with a halo — a recurring motif in Basquiat's work suggesting sainthood — while the aggressive brushwork and layered text create a sense of urgency and struggle. Crowns, skulls, and anatomical references layer the surface.",
    history:
      "1982 was Basquiat's breakthrough year, during which he painted some of his most important works. 'Warrior' was painted in his Modena, Italy studio during a period of intense creative output. The painting sold for $41.8 million at auction in 2021. Basquiat died at age 27, leaving behind a legacy that transformed contemporary art.",
    location: {
      museum: "Private Collection",
      city: "New York",
      country: "United States",
    },
    image: "/images/basquiat-warrior.png",
    tags: ["contemporary", "diaspora", "painting", "neo-expressionist", "1980s"],
    featured: true,
  },
  {
    id: "zulu-beadwork",
    title: "Isicholo (Married Woman's Headdress)",
    artist: {
      name: "Unknown Zulu Artist",
      bio: "Zulu women artisans who practice the intricate art of beadwork (ubuhlalu), a tradition passed down through generations. Each color and pattern carries specific meanings related to love, status, and social relationships.",
      birth: 1800,
      death: 1950,
      nationality: "Zulu (South Africa)",
    },
    year: "c. 1900",
    medium: "Glass beads, cotton thread, fiber",
    dimensions: "35 cm diameter",
    description:
      "An elaborate cylindrical headdress traditionally worn by married Zulu women. Made from thousands of carefully woven glass beads in geometric patterns, the isicholo signals the wearer's married status and social standing. The colors — white (purity), red (passion), blue (fidelity), and green (contentment) — communicate specific messages.",
    history:
      "The isicholo tradition dates back to the 19th-century Zulu kingdom. The headdress was part of a broader system of beadwork communication known as 'love letters' (iziqu), where color combinations conveyed messages between lovers and family members. The practice declined during the 20th century but has seen a revival in contemporary Zulu fashion.",
    location: {
      museum: "Iziko Museums of South Africa",
      city: "Cape Town",
      country: "South Africa",
    },
    image: "/images/zulu-beadwork.png",
    tags: ["traditional", "southern-africa", "beadwork", "textile", "19th-century", "ceremonial"],
    featured: false,
  },
  {
    id: "lorna-simpson",
    title: "Stereo Styles",
    artist: {
      name: "Lorna Simpson",
      bio: "Lorna Simpson (born 1960) is an American conceptual artist known for her pioneering work in photography and video. She was one of the first African American women to exhibit at the Venice Biennale (1990) and received the MacArthur Fellowship in 1990.",
      birth: 1960,
      nationality: "American",
    },
    year: "1988",
    medium: "Gelatin silver prints, 10 engraved plastic plaques",
    dimensions: "97.8 × 170.2 cm",
    description:
      "A series of 10 photographs of a Black woman's hair, each paired with a plaque describing a hairstyle — 'Short Permanented,' 'Braided,' 'Pinned Up' — alongside adjectives like 'Breezy,' 'Limp,' or 'Knotty.' The work examines how Black women's hair has been politicized, categorized, and judged in American society.",
    history:
      "'Stereo Styles' is a seminal work in the discourse on Black identity and representation. In the late 1980s, Simpson's work challenged the art world's assumptions about who could be a subject and who could be an artist. She deliberately obscured her subjects' faces, forcing viewers to confront their own assumptions about identity.",
    location: {
      museum: "The Museum of Contemporary Art",
      city: "Los Angeles",
      country: "United States",
    },
    image: "/images/lorna-simpson.png",
    tags: ["contemporary", "diaspora", "photography", "feminist", "1980s", "conceptual"],
    featured: false,
  },
  {
    id: "ethiopian-cross",
    title: "Processional Cross (Meskel)",
    artist: {
      name: "Unknown Ethiopian Orthodox Artist",
      bio: "Ethiopian Orthodox metalworkers who created elaborate processional crosses for the Ethiopian Orthodox Tewahedo Church, one of the oldest Christian traditions in the world. The Lalibela cross tradition dates back to the 12th century.",
      birth: 1100,
      death: 1300,
      nationality: "Ethiopian",
    },
    year: "c. 1200",
    medium: "Brass, lost-wax casting",
    dimensions: "35 cm height",
    description:
      "An intricately cast brass processional cross featuring the distinctive Ethiopian Orthodox style: a complex interplay of geometric patterns, interlocking circles, and symbolic motifs. The cross is mounted on a long wooden staff used in religious processions. Each design element carries theological meaning — the crossbars represent the union of heaven and earth.",
    history:
      "Ethiopia is one of the oldest Christian nations in the world, adopting Christianity in the 4th century CE. This cross comes from the Lalibela period, named after the famous rock-hewn churches. Ethiopian crosses are unique in their complexity and geometric abstraction. The cross was brought to Europe during the 19th century but represents a continuous tradition that continues today.",
    location: {
      museum: "Ethiopian National Museum",
      city: "Addis Ababa",
      country: "Ethiopia",
    },
    image: "/images/ethiopian-cross.jpg",
    tags: ["traditional", "east-africa", "metal", "religious", "medieval"],
    featured: false,
  },
  {
    id: "kara-walker",
    title: "A Subtlety (The Marvelous Sugar Baby)",
    artist: {
      name: "Kara Walker",
      bio: "Kara Walker (born 1969) is an American contemporary artist known for her provocative silhouettes and installations exploring race, gender, sexuality, and violence in American history. She received the MacArthur Fellowship in 1997 and represented the United States at the 2015 Venice Biennale.",
      birth: 1969,
      nationality: "American",
    },
    year: "2014",
    medium: "Polystyrene, sugar, resin, installation",
    dimensions: "15.5 m height × 26 m length",
    description:
      "A monumental sculpture of a sphinx-like figure — a Black woman, rendered in sugar — installed in the abandoned Domino Sugar Factory in Brooklyn. The 35-foot-tall figure confronts the brutal history of sugar production, the slave trade, and the exploitation of Black bodies that built the global sugar industry.",
    history:
      "'A Subtlety' was Walker's first major public installation and her most ambitious work to date. The Domino Sugar Factory site was charged with meaning — sugar was one of the most valuable commodities of the transatlantic slave trade. The installation attracted over 130,000 visitors during its 10-week run and sparked extensive dialogue about public art and historical memory.",
    location: {
      museum: "Documented in the artist's archive",
      city: "New York",
      country: "United States",
    },
    image: "/images/kara-walker.png",
    tags: ["contemporary", "diaspora", "installation", "sculpture", "2010s", "history"],
    featured: false,
  },
  {
    id: "ndebele-house",
    title: "Ndebele Painted House (Reconstruction)",
    artist: {
      name: "Esther Mahlangu",
      bio: "Esther Mahlangu (born 1935) is a South African Ndebele artist renowned for her bold, geometric mural paintings. She has brought the Ndebele tradition of house painting to international attention, creating works for museums and even BMW Art Cars. She was awarded the Artes Mundi prize in 2024.",
      birth: 1935,
      nationality: "South African (Ndebele)",
    },
    year: "1990",
    medium: "Natural pigments, acrylic paint on plaster",
    dimensions: "Varies (house facade, approx. 5 × 7 m)",
    description:
      "A vibrant, large-scale mural in the distinctive Ndebele style: bold geometric patterns, symmetrical designs, and bright colors — yellow, red, blue, green, and black. The patterns are painted directly onto the exterior walls of houses, transforming them into living canvases. Each design carries symbolic meaning related to the family's identity and status.",
    history:
      "Ndebele house painting is a tradition passed down through generations of women. Esther Mahlangu has been the most prominent ambassador of this art form, demonstrating her technique at museums worldwide. In 1991, she became the first woman to create a BMW Art Car, painting a 525i in Ndebele style. The tradition continues to evolve with contemporary influences.",
    location: {
      museum: "KwaMahlangu Cultural Village (also Ndebele House, Museum of International Folk Art)",
      city: "Middelburg / Santa Fe",
      country: "South Africa / USA",
    },
    image: "/images/ndebele-house.jpg",
    tags: ["traditional", "southern-africa", "architecture", "mural", "geometric", "20th-century"],
    featured: false,
  },
  {
    id: "amy-sherald",
    title: "Michelle Obama (Portrait)",
    artist: {
      name: "Amy Sherald",
      bio: "Amy Sherald (born 1973) is an American painter known for her ethereal, psychologically rich portraits of African Americans. She paints figures with gray-toned skin, a choice that challenges the viewer's focus on identity rather than race. She was the first African American woman to paint a presidential portrait for the National Portrait Gallery.",
      birth: 1973,
      nationality: "American",
    },
    year: "2018",
    medium: "Oil on canvas",
    dimensions: "182.9 × 152.4 cm",
    description:
      "A luminous portrait of former First Lady Michelle Obama, seated against a blue patterned background. She wears a geometric-print dress by Michelle Smith, and her posture is relaxed yet commanding. The monochrome gray skin draws the viewer's attention to her expression — thoughtful, warm, and self-possessed.",
    history:
      "Sherald was selected by Michelle Obama herself to paint the official portrait for the National Portrait Gallery's exhibition of presidential and first lady portraits. The portrait was unveiled in 2018 to enormous public acclaim. It became one of the most visited portraits in the museum's history, with queues stretching around the block for months.",
    location: {
      museum: "National Portrait Gallery, Smithsonian Institution",
      city: "Washington, D.C.",
      country: "United States",
    },
    image: "/images/amy-sherald.png",
    tags: ["contemporary", "diaspora", "painting", "portrait", "2010s"],
    featured: false,
  },
  {
    id: "makonde-sculpture",
    title: "Ujamaa (Family Tree)",
    artist: {
      name: "George Lilanga",
      bio: "George Lilanga (1934–2005) was a Tanzanian Makonde sculptor and painter known for his vibrant, whimsical figures inspired by traditional Makonde carving and modern urban life. He was one of East Africa's most celebrated contemporary artists.",
      birth: 1934,
      death: 2005,
      nationality: "Tanzanian (Makonde)",
    },
    year: "1970",
    medium: "Ebony wood, oil",
    dimensions: "120 cm height",
    description:
      "An intricate column of interconnected figures carved from a single piece of ebony wood. The figures climb and intertwine, representing the interconnectedness of family and community — the concept of 'Ujamaa' (familyhood) promoted by Julius Nyerere. The expressive faces and elongated forms are characteristic of Makonde sculpture.",
    history:
      "Makonde sculpture gained international recognition in the 1960s and 1970s as African modernism emerged on the global stage. Lilanga was part of a generation of Makonde artists who transformed traditional carving into a contemporary art form. The Ujamaa theme resonated with Tanzania's post-independence nation-building project.",
    location: {
      museum: "National Museum of Tanzania",
      city: "Dar es Salaam",
      country: "Tanzania",
    },
    image: "/images/makonde-sculpture.png",
    tags: ["contemporary", "east-africa", "wood", "sculpture", "1970s", "modernist"],
    featured: false,
  },
  {
    id: "kente-cloth",
    title: "Kente Cloth (Asante Royal Cloth)",
    artist: {
      name: "Unknown Asante Weaver",
      bio: "Asante weavers from the village of Bonwire, Ghana, who have practiced the art of kente weaving for centuries. The skill is traditionally passed from father to son, with master weavers able to produce patterns of extraordinary complexity.",
      birth: 1600,
      death: 1800,
      nationality: "Asante (Ghana)",
    },
    year: "c. 1700",
    medium: "Silk and cotton strip-woven textile",
    dimensions: "240 × 180 cm",
    description:
      "A magnificent kente cloth woven in alternating strips of silk and cotton, featuring complex geometric patterns in gold, green, black, and red. Each pattern — 'Adweneasa' (skillfulness), 'Sika fre mogya' (money is blood), 'Obi nkye obi' (one does not bite another) — carries proverbial meanings. The gold threads indicate royal status.",
    history:
      "Kente weaving originated among the Asante people in the 17th century, inspired by spider web patterns. The cloth was reserved for royalty and worn only on special occasions. Each design has a name and a proverbial meaning, making kente a form of woven philosophy. The cloth has become a pan-African symbol of heritage and pride, worn by leaders from Kwame Nkrumah to Nelson Mandela.",
    location: {
      museum: "Museum of Archaeology and Anthropology, University of Cambridge",
      city: "Cambridge",
      country: "United Kingdom",
    },
    image: "/images/kente-cloth.jpg",
    tags: ["traditional", "west-africa", "textile", "royalty", "18th-century", "ceremonial"],
    featured: false,
  },
  {
    id: "nina-simone",
    title: "Nina Simone (Photo Series)",
    artist: {
      name: "Roy DeCarava",
      bio: "Roy DeCarava (1919–2009) was an American photographer whose work documented the everyday lives of Black Americans with extraordinary sensitivity and artistry. He was the first African American to win a Guggenheim Fellowship in photography and co-authored 'The Sweet Flypaper of Life' with Langston Hughes.",
      birth: 1919,
      death: 2009,
      nationality: "American",
    },
    year: "1961",
    medium: "Gelatin silver print, photography",
    dimensions: "33.7 × 26.7 cm",
    description:
      "A masterful black-and-white portrait of Nina Simone, captured in an intimate moment during a recording session. DeCarava's use of deep shadows and natural light reveals the intensity and vulnerability of the musician. Simone's face is half-illuminated, her expression a complex mixture of determination and melancholy.",
    history:
      "DeCarava's photographs of jazz musicians are among the most celebrated in the medium's history. His portrait of Nina Simone captures her at the height of her early career, before she became a prominent voice in the Civil Rights Movement. DeCarava's approach was defined by collaboration — he worked with his subjects rather than simply documenting them.",
    location: {
      museum: "The Museum of Modern Art (MoMA)",
      city: "New York",
      country: "United States",
    },
    image: "/images/nina-simone.png",
    tags: ["contemporary", "diaspora", "photography", "jazz", "1960s", "portrait"],
    featured: false,
  },
  // === AFRICAN TRADITIONAL (10 new) ===
  {
    id: "zimbabwe-bird",
    title: "Zimbabwe Bird (Great Zimbabwe)",
    artist: {
      name: "Unknown Shona Artist",
      bio: "Master stone carvers of the Shona civilization who built Great Zimbabwe, the largest stone structure in pre-colonial sub-Saharan Africa. The Zimbabwe Bird was the royal emblem of the kingdom, carved from soapstone.",
      birth: 1100,
      death: 1500,
      nationality: "Shona (Zimbabwe)",
    },
    year: "c. 1200",
    medium: "Soapstone, carved",
    dimensions: "42 cm height",
    description:
      "A majestic soapstone bird perched atop a tall monolithic column, combining avian and human features. The Zimbabwe Bird was the totemic emblem of the kings of Great Zimbabwe. The bird's stylized beak, folded wings, and geometric posture reflect a sophisticated sculptural tradition that blended natural observation with symbolic abstraction.",
    history:
      "Great Zimbabwe, built between the 11th and 15th centuries, was the capital of a powerful Shona trading empire that controlled the gold and ivory routes. Eight carved birds were discovered at the site. The bird became a national symbol of Zimbabwe after independence in 1980, appearing on the national flag. The site was designated a UNESCO World Heritage Site in 1986.",
    location: {
      museum: "Great Zimbabwe National Monument (UNESCO)",
      city: "Masvingo",
      country: "Zimbabwe",
    },
    image: "/images/zimbabwe-bird.jpg",
    tags: ["traditional", "southern-africa", "stone", "royalty", "medieval"],
    featured: false,
  },
  {
    id: "ife-bronze-head",
    title: "Ife Bronze Head",
    artist: {
      name: "Unknown Yoruba Artist",
      bio: "Master bronze casters of the ancient Yoruba kingdom of Ife, considered the birthplace of the Yoruba people. Ife's naturalistic bronze and terracotta sculptures from the 12th-15th centuries are among the finest in African art history.",
      birth: 1100,
      death: 1400,
      nationality: "Yoruba (Nigeria)",
    },
    year: "c. 1300",
    medium: "Bronze, lost-wax casting",
    dimensions: "35 cm height",
    description:
      "A remarkably naturalistic bronze head depicting an Oni (king) of Ife, with elaborate crown and beadwork. The face is rendered with extraordinary sensitivity — individual scarification marks, detailed coiffure, and serene expression. The naturalism of Ife art challenged Western assumptions about African artistic achievement.",
    history:
      "Discovered in 1938 during excavations in Wunmonije Compound, Ife, these heads stunned the art world with their technical mastery and naturalistic style. They date from the classical period of Ife civilization (12th-15th centuries). The heads represent an unbroken tradition of royal portraiture that predates European contact. Many are now held in Nigerian and international museums.",
    location: {
      museum: "Nigerian National Museum",
      city: "Lagos",
      country: "Nigeria",
    },
    image: "/images/ife-bronze-head.jpg",
    tags: ["traditional", "west-africa", "bronze", "royalty", "medieval", "portrait"],
    featured: false,
  },
  {
    id: "fang-reliquary",
    title: "Fang Reliquary Figure (Nlo Byeri)",
    artist: {
      name: "Unknown Fang Artist",
      bio: "Fang sculptors from Gabon and Equatorial Guinea, known for creating powerful guardian figures (byeri) that protected ancestral relics. Fang sculpture is characterized by its dynamic tension, cylindrical forms, and concentrated energy.",
      birth: 1700,
      death: 1900,
      nationality: "Fang (Gabon/Equatorial Guinea)",
    },
    year: "c. 1850",
    medium: "Wood, pigment, metal, oil",
    dimensions: "64 cm height",
    description:
      "A powerful guardian figure carved in the classic Fang style — elongated cylindrical torso, oversized head with heart-shaped face, and limbs held close to the body. The figure's eyes are wide and staring, the mouth small and concentrated. The glossy surface, developed through generations of ritual anointing with palm oil, adds to its commanding presence.",
    history:
      "The byeri figure sat atop a bark cylinder containing the skulls and bones of honored ancestors. The ngil (male initiation society) would consult the figure during important ceremonies. French colonial authorities confiscated many of these figures in the early 20th century. Fang reliquaries became highly influential on early modernist artists like Pablo Picasso and André Derain.",
    location: {
      museum: "Musée du Quai Branly – Jacques Chirac",
      city: "Paris",
      country: "France",
    },
    image: "/images/fang-reliquary.jpg",
    tags: ["traditional", "central-africa", "wood", "ritual", "19th-century", "spiritual"],
    featured: false,
  },
  {
    id: "senufo-rhythm-pounder",
    title: "Senufo Rhythm Pounder (Déblé)",
    artist: {
      name: "Unknown Senufo Artist",
      bio: "Senufo sculptors from Côte d'Ivoire, Mali, and Burkina Faso, who created large-scale rhythm pounders used in agricultural ceremonies. Senufo art is deeply connected to the Poro society's initiatory traditions.",
      birth: 1700,
      death: 1900,
      nationality: "Senufo (Côte d'Ivoire)",
    },
    year: "c. 1850",
    medium: "Wood, pigment",
    dimensions: "170 cm height",
    description:
      "A monumental carved wooden figure with elongated form, featuring a Janus-faced head (looking both directions), upraised arms, and pronounced breasts identifying the figure as female. The Déblé is used during funerary ceremonies for Poro society members, struck against the earth to mark rhythm. The dynamic pose and geometric abstraction create extraordinary visual impact.",
    history:
      "The Déblé (rhythm pounder) is used by the Poro male initiation society during agricultural festivals and funeral ceremonies. The figure's Janus face symbolizes the ability to see both the world of the living and the ancestors. Senufo sculpture profoundly influenced European modernists. This particular piece was collected in the early colonial period and later acquired by the Musée du Quai Branly.",
    location: {
      museum: "Musée du Quai Branly – Jacques Chirac",
      city: "Paris",
      country: "France",
    },
    image: "/images/senufo-rhythm-pounder.jpg",
    tags: ["traditional", "west-africa", "wood", "ritual", "19th-century", "ceremonial"],
    featured: false,
  },
  {
    id: "igbo-ukwu-bronze",
    title: "Igbo Ukwu Bronze Vessel",
    artist: {
      name: "Unknown Igbo Artist",
      bio: "Master bronze casters of the Igbo civilization at Igbo Ukwu, who created extraordinarily sophisticated metalwork in the 9th century CE. The Igbo Ukwu site reveals a highly stratified society with advanced metallurgical techniques.",
      birth: 800,
      death: 1000,
      nationality: "Igbo (Nigeria)",
    },
    year: "c. 900",
    medium: "Bronze, leaded bronze, lost-wax casting",
    dimensions: "32 cm height",
    description:
      "An intricately cast bronze ceremonial vessel with elaborate surface decoration, featuring ropework patterns, geometric motifs, and figurative elements. The technical sophistication — using leaded bronze with precise control of alloy ratios — demonstrates an advanced metallurgical tradition that flourished centuries before European contact.",
    history:
      "Discovered in 1939 by Thurstan Shaw in Igbo Ukwu, southeastern Nigeria, this vessel belongs to a cache of over 700 bronze, copper, and iron objects from a royal burial chamber dating to the 9th century CE. The hoard includes ceremonial vessels, crowns, breastplates, and staff ornaments. Radiocarbon dating confirmed the 9th-century date, making it one of the earliest known bronze traditions in sub-Saharan Africa.",
    location: {
      museum: "Nigerian National Museum",
      city: "Lagos",
      country: "Nigeria",
    },
    image: "/images/igbo-ukwu-bronze.jpg",
    tags: ["traditional", "west-africa", "bronze", "ceremonial", "medieval", "ancient"],
    featured: false,
  },
  {
    id: "mangbetu-pottery",
    title: "Mangbetu Anthropomorphic Vessel",
    artist: {
      name: "Unknown Mangbetu Artist",
      bio: "Mangbetu potters and sculptors from the northeastern Democratic Republic of Congo, renowned for their elegant figurative pottery and courtly arts. Mangbetu art is characterized by elongated heads and refined surface decoration.",
      birth: 1700,
      death: 1900,
      nationality: "Mangbetu (DRC)",
    },
    year: "c. 1880",
    medium: "Terracotta, pigment",
    dimensions: "45 cm height",
    description:
      "An elegant terracotta vessel whose neck transforms into a human head with the distinctive Mangbetu elongated cranium — a form of cranial modification practiced by the aristocracy. The vessel's body is decorated with incised geometric patterns. The graceful curve from shoulder to rim mirrors the human form, creating a harmonious blend of function and figuration.",
    history:
      "Mangbetu court art flourished under King Mbunza in the late 19th century. The elongated skull was a sign of nobility and intelligence, achieved by binding infants' heads. Mangbetu pottery was collected by European explorers, including Henry Morton Stanley, who marveled at the refinement of the Mangbetu court. The tradition declined after colonial conquest but has seen revival in the 21st century.",
    location: {
      museum: "Royal Museum for Central Africa",
      city: "Tervuren",
      country: "Belgium",
    },
    image: "/images/mangbetu-pottery.jpg",
    tags: ["traditional", "central-africa", "ceramic", "pottery", "19th-century", "court"],
    featured: false,
  },
  {
    id: "tuareg-cross",
    title: "Tuareg Cross of Agadez (Tanfouk)",
    artist: {
      name: "Unknown Tuareg Silversmith",
      bio: "Tuareg (Kel Tamasheq) silversmiths from the Sahara desert, who create intricate cross-shaped pendants that serve as protective amulets and markers of identity. The Tuareg are traditionally nomadic pastoralists of the central Sahara.",
      birth: 1600,
      death: 1900,
      nationality: "Tuareg (Niger/Mali)",
    },
    year: "c. 1800",
    medium: "Silver, lost-wax casting, engraving",
    dimensions: "8 × 6 cm",
    description:
      "A finely crafted silver pendant cross with seven distinct ornamental arms radiating from a central square. Each arm terminates in a small sphere, while the surface is covered with delicate engraved geometric patterns. The Cross of Agadez is the most famous of the Tuareg crosses, each design representing a different Tuareg region or tribal confederation.",
    history:
      "Tuareg crosses (tanfouk) are not religious symbols but rather identity markers and protective amulets. Each of the major Tuareg confederations — Kel Ahaggar, Kel Adrar, Kel Air, Kel Arouaghen, Kel Ferouan, Oulliminden, and Tawarek — has its own cross design. The crosses are traditionally given to young Tuareg men as they come of age. The silver-working tradition dates back centuries along Saharan trade routes.",
    location: {
      museum: "Musée National du Niger",
      city: "Niamey",
      country: "Niger",
    },
    image: "/images/tuareg-cross.jpg",
    tags: ["traditional", "north-africa", "metal", "jewelry", "18th-century", "adornment"],
    featured: false,
  },
  {
    id: "luba-caryatid-stool",
    title: "Luba Caryatid Stool",
    artist: {
      name: "Unknown Luba Artist",
      bio: "Luba sculptors from the Democratic Republic of Congo, who created masterful royal regalia for the Luba kingdom (c. 1585–1889). Luba court art is characterized by refined naturalism and the central role of female figures symbolizing royal power.",
      birth: 1700,
      death: 1900,
      nationality: "Luba (DRC)",
    },
    year: "c. 1850",
    medium: "Wood, pigment",
    dimensions: "52 cm height",
    description:
      "A magnificent ceremonial stool supported by a kneeling female figure (caryatid) whose hands support the seat. The figure's elaborate coiffure, filed teeth, scarification patterns, and serene expression embody Luba ideals of womanhood and authority. The stool was never sat upon — it was a symbol of the king's legitimacy and connection to ancestral spirits.",
    history:
      "In the Luba kingdom, caryatid stools (lupona) were among the most sacred royal objects. They were believed to be imbued with spiritual power (bulopwe) that legitimated the ruler's authority. The female figure represents the founding ancestress and the continuity of the royal line. These stools played a central role in coronation ceremonies. During colonization, many were looted by European collectors.",
    location: {
      museum: "Metropolitan Museum of Art",
      city: "New York",
      country: "United States",
    },
    image: "/images/luba-caryatid-stool.jpg",
    tags: ["traditional", "central-africa", "wood", "royalty", "19th-century", "court"],
    featured: false,
  },
  {
    id: "oromo-gourd-container",
    title: "Oromo Gourd Container (Cibra)",
    artist: {
      name: "Unknown Oromo Artist",
      bio: "Oromo artisans from the Horn of Africa, known for their exquisite gourd carving and pyrography. The Oromo are one of the largest ethnic groups in Ethiopia, with a rich tradition of functional art and ceremonial objects.",
      birth: 1700,
      death: 1950,
      nationality: "Oromo (Ethiopia)",
    },
    year: "c. 1900",
    medium: "Gourd, pyrography, natural dyes",
    dimensions: "25 cm height, 30 cm diameter",
    description:
      "A beautifully decorated gourd container used for storing butter, milk, or ceremonial foods. The surface is covered with intricate burned (pyrographic) geometric patterns — interlocking triangles, chevrons, and diamond bands — accented with natural dyes. The patterns carry symbolic meanings related to fertility, prosperity, and the Oromo traditional religion (Waaqeffanna).",
    history:
      "The Oromo have a deep tradition of gourd decoration (cibra), with techniques passed down through generations of women. Gourds were essential household objects — used for storing food, milk, butter, and water, as well as in marriage ceremonies. The geometric patterns are a visual language unique to each region and clan. The tradition continues in contemporary Oromo craft production.",
    location: {
      museum: "Ethiopian National Museum",
      city: "Addis Ababa",
      country: "Ethiopia",
    },
    image: "/images/oromo-gourd-container.png",
    tags: ["traditional", "east-africa", "gourd", "ceremonial", "19th-century", "geometric"],
    featured: false,
  },
  {
    id: "maasai-beaded-necklace",
    title: "Maasai Beaded Necklace (Enkarewa)",
    artist: {
      name: "Unknown Maasai Artist",
      bio: "Maasai women beadworkers from Kenya and Tanzania who create elaborate beadwork jewelry and adornments. Beadwork is a central Maasai art form, with colors and patterns communicating age, status, and social information.",
      birth: 1800,
      death: 1950,
      nationality: "Maasai (Kenya/Tanzania)",
    },
    year: "c. 1900",
    medium: "Glass beads, leather, wire",
    dimensions: "35 cm diameter (necklace)",
    description:
      "A vibrant, multi-strand beaded necklace featuring bold geometric patterns in red, blue, white, yellow, and black. Large circular discs of beadwork frame the neck, cascading onto the chest. The colors carry specific meanings: red represents bravery and unity, blue the sky and God, white purity, yellow growth, and black the people.",
    history:
      "Maasai beadwork is created exclusively by women, who learn the craft from their mothers and grandmothers. The enkarewa (beaded necklace) is a key element of Maasai adornment, worn during ceremonies and daily life. Colors and patterns indicate the wearer's age set, marital status, and clan affiliation. The tradition has evolved over centuries, incorporating glass beads obtained through trade with Europeans in the 19th century.",
    location: {
      museum: "National Museums of Kenya",
      city: "Nairobi",
      country: "Kenya",
    },
    image: "/images/maasai-beaded-necklace.jpg",
    tags: ["traditional", "east-africa", "beadwork", "jewelry", "19th-century", "ceremonial"],
    featured: false,
  },
  // === AFRICAN DIASPORA & CONTEMPORARY (20 new) ===
  {
    id: "jacob-lawrence-migration",
    title: "The Migration Series (Panel 1)",
    artist: {
      name: "Jacob Lawrence",
      bio: "Jacob Lawrence (1917–2000) was an American painter whose dynamic, cubist-inspired narrative series chronicled African American history and experience. He was one of the first African American artists to be represented by a major New York gallery and taught at the University of Washington.",
      birth: 1917,
      death: 2000,
      nationality: "American",
    },
    year: "1940–41",
    medium: "Casein tempera on hardboard",
    dimensions: "30.5 × 45.7 cm (each of 60 panels)",
    description:
      "The first panel of Lawrence's landmark 60-panel series depicts African Americans arriving at a railway station, beginning the Great Migration northward. Painted in Lawrence's distinctive style — flat planes of bold color, simplified forms, and dynamic composition — the series tells the story of the movement of over six million African Americans from the rural South to the industrial North.",
    history:
      "Created when Lawrence was just 23 years old, The Migration Series was immediately recognized as a masterpiece. It was the first work by an African American artist to enter the collection of the Museum of Modern Art. The series is divided between MoMA (30 panels) and the Phillips Collection (30 panels). It narrates the causes of the Great Migration — segregation, lynchings, economic oppression — and the challenges migrants faced in Northern cities.",
    location: {
      museum: "The Museum of Modern Art (MoMA) and The Phillips Collection",
      city: "New York / Washington, D.C.",
      country: "United States",
    },
    image: "/images/jacob-lawrence-migration.png",
    tags: ["contemporary", "diaspora", "painting", "american", "1940s", "history"],
    featured: true,
  },
  {
    id: "faith-ringgold-tar-beach",
    title: "Tar Beach (Part I of the Woman on a Bridge Series)",
    artist: {
      name: "Faith Ringgold",
      bio: "Faith Ringgold (born 1930) is an American painter, mixed-media sculptor, and author known for her narrative story quilts. She was a pioneering figure in the Black Arts Movement and has been a lifelong activist for racial and gender equality in the arts.",
      birth: 1930,
      nationality: "American",
    },
    year: "1988",
    medium: "Acrylic on canvas, printed fabric, ink, thread",
    dimensions: "188 × 173 cm",
    description:
      "A vivid story quilt depicting a young girl flying above the George Washington Bridge, which connects Harlem to the rest of New York City. The quilt combines painted narrative scenes with fabric borders and hand-stitched text panels telling the story of a family's summer nights on their Harlem rooftop — their 'tar beach.' The image of flight represents freedom and the power of imagination to transcend poverty and racial injustice.",
    history:
      "Ringgold invented the story quilt form in the 1980s to combine her painting skills with her interest in African American textile traditions. 'Tar Beach' became a Caldecott Honor Book when published as a children's book in 1991. The work is part of the 'Woman on a Bridge' series, which repositions Black women as figures of power and freedom in cityscapes where they have historically been marginalized.",
    location: {
      museum: "Solomon R. Guggenheim Museum",
      city: "New York",
      country: "United States",
    },
    image: "/images/faith-ringgold-tar-beach.png",
    tags: ["contemporary", "diaspora", "textile", "quilting", "1980s", "feminist"],
    featured: false,
  },
  {
    id: "kehinde-wiley-obama",
    title: "Portrait of Barack Obama",
    artist: {
      name: "Kehinde Wiley",
      bio: "Kehinde Wiley (born 1977) is an American portrait painter known for his vibrant, large-scale depictions of African Americans in the visual language of traditional European portraiture. He was commissioned to paint the official portrait of President Barack Obama for the Smithsonian National Portrait Gallery.",
      birth: 1977,
      nationality: "American",
    },
    year: "2018",
    medium: "Oil on canvas",
    dimensions: "198 × 147.3 cm",
    description:
      "A monumental portrait of President Barack Obama seated in a chair, surrounded by lush foliage — jasmine (symbolizing Hawaii), chrysanthemums (the official flower of Chicago), and African blue lilies. Obama wears a dark suit with no tie, leaning forward with an engaged, direct gaze. The vibrant floral background breaks with the tradition of neutral presidential portraiture, asserting Black presence in the language of power.",
    history:
      "Wiley was the first African American artist commissioned to paint an official presidential portrait for the National Portrait Gallery. The portrait was unveiled in 2018 alongside Amy Sherald's portrait of Michelle Obama. The floral backdrop draws on Wiley's signature style of placing contemporary Black figures in the pose and setting of historical European portraits. The painting became an instant icon, drawing massive crowds and widespread acclaim.",
    location: {
      museum: "National Portrait Gallery, Smithsonian Institution",
      city: "Washington, D.C.",
      country: "United States",
    },
    image: "/images/kehinde-wiley-obama.jpg",
    tags: ["contemporary", "diaspora", "painting", "portrait", "2010s"],
    featured: true,
  },
  {
    id: "alma-thomas-resurrection",
    title: "Resurrection",
    artist: {
      name: "Alma Thomas",
      bio: "Alma Thomas (1891–1978) was an American abstract expressionist painter and art educator. She was the first African American woman to have a solo exhibition at the Whitney Museum of American Art. Her late-career work is characterized by vibrant, mosaic-like patterns of color.",
      birth: 1891,
      death: 1978,
      nationality: "American",
    },
    year: "1966",
    medium: "Acrylic on canvas",
    dimensions: "182.9 × 137.2 cm",
    description:
      "A radiant abstract painting composed of thousands of small, irregularly shaped patches of vibrant color — red, yellow, blue, green, and purple — arranged in concentric circles that seem to pulse outward from the center. The work evokes the energy and spiritual renewal of a sunrise. Thomas's mosaic-like technique creates a shimmering, kaleidoscopic effect that suggests both natural phenomena and musical rhythm.",
    history:
      "Thomas developed her signature style after retiring from a 35-year career as a public school art teacher, at age 68. Inspired by the Natural world, the space race, and the Washington Color School, she created works of extraordinary optimism and energy. 'Resurrection' was included in her historic 1972 solo exhibition at the Whitney Museum. In 2015, her painting 'Resurrection' hung in the Obama White House.",
    location: {
      museum: "The White House (Old Family Dining Room)",
      city: "Washington, D.C.",
      country: "United States",
    },
    image: "/images/alma-thomas-resurrection.jpg",
    tags: ["contemporary", "diaspora", "painting", "abstraction", "1960s", "color-field"],
    featured: false,
  },
  {
    id: "romare-bearden-block",
    title: "The Block",
    artist: {
      name: "Romare Bearden",
      bio: "Romare Bearden (1911–1988) was an American artist who worked in collage, painting, and printmaking. He is celebrated for his richly layered depictions of African American life, combining photography, magazine clippings, painted paper, and fabric into powerful narrative compositions.",
      birth: 1911,
      death: 1988,
      nationality: "American",
    },
    year: "1971",
    medium: "Collage on board",
    dimensions: "91.4 × 121.9 cm",
    description:
      "A vibrant, multi-panel collage of a Harlem city block, composed of layered cut-out photographs, painted paper, and fabric fragments. The work captures the rhythm and texture of Black urban life — brownstones, storefront churches, barbershops, jazz clubs, street vendors, and residents on stoops. Bearden's collage technique creates a visual symphony of patterns, textures, and moments frozen in time.",
    history:
      "'The Block' is one of Bearden's most celebrated works, created during his mature period when he had fully developed his signature collage technique. Bearden was a founding member of the Spiral Group (1963), a collective of Black artists who discussed the role of art in the Civil Rights Movement. The work is permanently installed at the Metropolitan Museum of Art in a room that recreates the feeling of a Harlem street.",
    location: {
      museum: "The Metropolitan Museum of Art",
      city: "New York",
      country: "United States",
    },
    image: "/images/romare-bearden-block.png",
    tags: ["contemporary", "diaspora", "collage", "american", "1970s", "urban"],
    featured: false,
  },
  {
    id: "henry-ossawa-tanner-banjo",
    title: "The Banjo Lesson",
    artist: {
      name: "Henry Ossawa Tanner",
      bio: "Henry Ossawa Tanner (1859–1937) was the first African American painter to achieve international acclaim. He studied under Thomas Eakins at the Pennsylvania Academy of Fine Arts and later moved to Paris, where he lived and worked for most of his career.",
      birth: 1859,
      death: 1937,
      nationality: "American",
    },
    year: "1893",
    medium: "Oil on canvas",
    dimensions: "124.5 × 90.2 cm",
    description:
      "A tender domestic scene of an elderly Black man teaching a young boy to play the banjo. The two figures are bent over the instrument in a warm, dimly lit interior, their faces illuminated by the soft glow of a fireplace. The painting radically reimagines a subject previously used in racist minstrel imagery — transforming the banjo from a symbol of caricature into one of dignity, learning, and intergenerational connection.",
    history:
      "Tanner painted 'The Banjo Lesson' after returning to America from Paris, drawing on his observations of African American life in the post-Reconstruction South. The painting was a direct response to the degrading stereotypes of Black musicians in popular culture, instead presenting a scene of grace, intimacy, and cultural transmission. It was acquired by Hampton University (then Hampton Institute) and remains one of the most revered works in African American art history.",
    location: {
      museum: "Hampton University Museum",
      city: "Hampton, Virginia",
      country: "United States",
    },
    image: "/images/henry-ossawa-tanner-banjo.jpg",
    tags: ["contemporary", "diaspora", "painting", "american", "1890s", "genre"],
    featured: true,
  },
  {
    id: "augusta-savage-harp",
    title: "The Harp (Lift Every Voice and Sing)",
    artist: {
      name: "Augusta Savage",
      bio: "Augusta Savage (1892–1962) was an American sculptor and a leading figure of the Harlem Renaissance. She was the first African American woman to join the National Association of Women Painters and Sculptors and founded the Savage Studio of Arts and Crafts in Harlem.",
      birth: 1892,
      death: 1962,
      nationality: "American",
    },
    year: "1939",
    medium: "Painted plaster (original destroyed)",
    dimensions: "Approx. 4.3 m height",
    description:
      "A monumental sculpture depicting a choir of twelve Black singers arranged in the shape of a harp, with the sounding board formed by a singing hand and the arm of a kneeling figure. The singers' bodies form the strings — stretching upward in a powerful gesture of spiritual and cultural expression. The work was inspired by James Weldon Johnson's poem 'Lift Every Voice and Sing,' known as the Black National Anthem.",
    history:
      "Savage created 'The Harp' for the 1939 New York World's Fair, where it was one of the most popular exhibits. Despite its acclaim, the sculpture was destroyed at the end of the fair due to lack of funds to cast it in bronze. Only small-scale models and photographs survive. The loss of this monument is considered one of the great tragedies of American art. Savage, who had invested everything into the work, was devastated and never fully recovered professionally.",
    location: {
      museum: "Archival photographs and small-scale models (original destroyed)",
      city: "New York",
      country: "United States",
    },
    image: "/images/augusta-savage-harp.png",
    tags: ["contemporary", "diaspora", "sculpture", "harlem-renaissance", "1930s", "music"],
    featured: false,
  },
  {
    id: "gordon-parks-american-gothic",
    title: "American Gothic, Washington, D.C.",
    artist: {
      name: "Gordon Parks",
      bio: "Gordon Parks (1912–2006) was an American photographer, filmmaker, writer, and composer. He was the first African American staff photographer for Life magazine and directed the 1971 blockbuster 'Shaft,' becoming the first major Black film director in Hollywood.",
      birth: 1912,
      death: 2006,
      nationality: "American",
    },
    year: "1942",
    medium: "Gelatin silver print, photography",
    dimensions: "33.3 × 26.7 cm",
    description:
      "A powerful photograph of Ella Watson, a Black charwoman, standing in front of an American flag holding a broom and mop. The composition directly references Grant Wood's iconic 1930 painting 'American Gothic,' substituting the white farmer and his daughter with a single Black woman — the tools of domestic labor replacing the pitchfork. The image is a searing commentary on American inequality, patriotism, and the gap between democratic ideals and lived reality.",
    history:
      "Parks took this photograph in August 1942, shortly after joining the Farm Security Administration (FSA) photography project. He had been inspired to create the image after experiencing racism and segregation in Washington, D.C. Ella Watson was a government cleaning woman who supported a family on $1,080 a year. The photograph became one of the most iconic images of the 20th century, a defining document of the struggle for racial justice.",
    location: {
      museum: "Library of Congress / National Gallery of Art",
      city: "Washington, D.C.",
      country: "United States",
    },
    image: "/images/gordon-parks-american-gothic.jpg",
    tags: ["contemporary", "diaspora", "photography", "american", "1940s", "civil-rights"],
    featured: true,
  },
  {
    id: "carrie-mae-weems-kitchen-table",
    title: "Kitchen Table Series (Untitled, #1)",
    artist: {
      name: "Carrie Mae Weems",
      bio: "Carrie Mae Weems (born 1953) is an American artist whose photography, text, and video works explore race, gender, class, and the construction of identity. She received the MacArthur Fellowship in 2013 and was the first African American woman to have a major solo exhibition at the Solomon R. Guggenheim Museum.",
      birth: 1953,
      nationality: "American",
    },
    year: "1990",
    medium: "Gelatin silver prints with text panels",
    dimensions: "71.1 × 71.1 cm (each of 20 panels)",
    description:
      "The first image of a powerful 20-photo series documenting a Black woman's life through scenes staged around a kitchen table. A dramatic overhead lamp casts shadows that mirror the emotional weight of each scene — romance, motherhood, solitude, and conflict. The kitchen table becomes a stage where the complexities of Black womanhood, domestic labor, and personal relationships are performed and examined.",
    history:
      "'Kitchen Table Series' is perhaps Weems' most celebrated work. It established her as a pioneering voice in contemporary photography. The series draws on Weems' own experiences while addressing universal themes. The use of text panels alongside photographs creates a layered narrative. The work has been widely exhibited and studied, influencing generations of artists engaging with identity and representation.",
    location: {
      museum: "The Museum of Modern Art (MoMA)",
      city: "New York",
      country: "United States",
    },
    image: "/images/carrie-mae-weems-kitchen-table.png",
    tags: ["contemporary", "diaspora", "photography", "feminist", "1990s", "conceptual"],
    featured: false,
  },
  {
    id: "james-van-der-zee-harlem",
    title: "Couple, Harlem",
    artist: {
      name: "James Van Der Zee",
      bio: "James Van Der Zee (1886–1983) was an American photographer who documented the Harlem Renaissance with extraordinary skill. His studio portraits captured the dignity, style, and aspiration of Harlem's Black community during the 1920s and 1930s.",
      birth: 1886,
      death: 1983,
      nationality: "American",
    },
    year: "1932",
    medium: "Gelatin silver print",
    dimensions: "25.4 × 20.3 cm",
    description:
      "A stunning studio portrait of a stylishly dressed Black couple in Harlem. The man wears a tailored overcoat and fedora, the woman a fur stole and cloche hat. Van Der Zee's masterful use of lighting, props, and retouching creates an image of elegance and self-possession. The couple gazes directly at the camera with confidence and poise, asserting their place in the modern city.",
    history:
      "Van Der Zee operated his studio on Lenox Avenue in Harlem for over five decades, capturing over 200,000 images of the community. His work was rediscovered in 1969 through the Metropolitan Museum of Art's 'Harlem on My Mind' exhibition, which brought Van Der Zee to international attention at age 83. His portraits remain the definitive visual record of the Harlem Renaissance and its celebration of Black identity and culture.",
    location: {
      museum: "The Metropolitan Museum of Art",
      city: "New York",
      country: "United States",
    },
    image: "/images/james-van-der-zee-harlem.png",
    tags: ["contemporary", "diaspora", "photography", "harlem-renaissance", "1930s", "portrait"],
    featured: false,
  },
  {
    id: "barkley-hendricks-iconic",
    title: "Lawdy Mama",
    artist: {
      name: "Barkley L. Hendricks",
      bio: "Barkley L. Hendricks (1945–2017) was an American painter known for his radical, larger-than-life portraits of Black Americans. His work challenged the art world's exclusion of Black subjects from portraiture and directly influenced generations of contemporary figurative painters.",
      birth: 1945,
      death: 2017,
      nationality: "American",
    },
    year: "1969",
    medium: "Oil on canvas",
    dimensions: "152.4 × 91.4 cm",
    description:
      "A striking full-length portrait of a young Black woman in fashionable late-1960s attire — a suede coat, skirt, and boots — standing against a monochrome background. Her confident pose and direct gaze reclaim the space of portraiture, historically reserved for white subjects. Hendricks uses a flattened, graphic style with meticulous attention to the textures of leather, skin, and fabric.",
    history:
      "Painted when Hendricks was just 24 and still a graduate student, 'Lawdy Mama' announced the arrival of a major new voice in American art. Hendricks was influenced by fashion photography, hip-hop culture, and the Black Power movement. His work was a direct response to the absence of Black figures in art historical painting traditions. The Studio Museum in Harlem acquired the painting, and it has become an iconic work of 20th-century American portraiture.",
    location: {
      museum: "The Studio Museum in Harlem",
      city: "New York",
      country: "United States",
    },
    image: "/images/barkley-hendricks-iconic.png",
    tags: ["contemporary", "diaspora", "painting", "portrait", "1960s", "american"],
    featured: false,
  },
  {
    id: "jordan-casteel-scenes",
    title: "Roderick in the Laundromat",
    artist: {
      name: "Jordan Casteel",
      bio: "Jordan Casteel (born 1989) is an American figurative painter known for her vibrant, large-scale portraits of Black men and women in everyday urban settings. Her work captures the humanity and individuality of her subjects with empathy and radiant color.",
      birth: 1989,
      nationality: "American",
    },
    year: "2016",
    medium: "Oil on canvas",
    dimensions: "152.4 × 127 cm",
    description:
      "A luminous portrait of a young Black man in a Harlem laundromat, bathed in warm fluorescent light. He sits surrounded by washing machines and dryers, his posture relaxed but alert. Casteel's painterly style — loose brushwork, saturated colors, and careful attention to the play of light on skin and surfaces — transforms an ordinary commercial space into a stage for human dignity and presence.",
    history:
      "Casteel's 'Visible Man' series (2016), from which this painting comes, documents Black men in Harlem's public spaces — laundromats, barbershops, bodegas. She approaches strangers on the street and asks to paint them, building relationships through the portrait process. Casteel was awarded the Wein Prize in 2020 and had a major solo exhibition at the New Museum in 2021, establishing her as a leading voice in contemporary American painting.",
    location: {
      museum: "Denver Art Museum",
      city: "Denver",
      country: "United States",
    },
    image: "/images/jordan-casteel-scenes.png",
    tags: ["contemporary", "diaspora", "painting", "portrait", "2010s", "urban"],
    featured: false,
  },
  {
    id: "njideka-akunyili-crosby",
    title: "Portrait of a Beautiful Girl",
    artist: {
      name: "Njideka Akunyili Crosby",
      bio: "Njideka Akunyili Crosby (born 1983) is a Nigerian-born, Los Angeles-based painter whose large-scale works blend figurative painting, collage, and printmaking. She explores the experience of being between cultures — Nigerian and American — creating layered visual narratives of domestic life and cultural identity.",
      birth: 1983,
      nationality: "Nigerian-American",
    },
    year: "2012",
    medium: "Acrylic, colored pencil, collage, and transfers on paper",
    dimensions: "213.4 × 152.4 cm",
    description:
      "A richly layered composition depicting a young Nigerian woman in a domestic interior, surrounded by overlapping photographic transfers, patterned fabrics, and painted elements. The work blends intimate portraiture with a collage of references — family photographs, Nigerian popular culture, Western art history — that reflect the artist's experience of navigating dual cultural identities.",
    history:
      "Akunyili Crosby emerged as a major international artist in the 2010s, winning the Smithsonian American Art Museum's James Dicke Contemporary Artist Prize and the Prix Canson. Her work addresses the complexity of postcolonial identity with unprecedented visual sophistication. 'Portrait of a Beautiful Girl' was included in her breakthrough exhibition at the Hammer Museum. Her paintings sell for millions at auction, reflecting her status as one of the most important contemporary artists of her generation.",
    location: {
      museum: "Hammer Museum",
      city: "Los Angeles",
      country: "United States",
    },
    image: "/images/njideka-akunyili-crosby.png",
    tags: ["contemporary", "diaspora", "painting", "collage", "2010s", "identity"],
    featured: false,
  },
  {
    id: "wangechi-mutu-collage",
    title: "Yo Mama",
    artist: {
      name: "Wangechi Mutu",
      bio: "Wangechi Mutu (born 1972) is a Kenyan-born, New York-based artist whose mixed-media collages, sculptures, and films explore gender, race, colonialism, and environmental degradation. She represented Kenya at the 58th Venice Biennale (2019) and was awarded the Deutsche Bank Artist of the Year (2024).",
      birth: 1972,
      nationality: "Kenyan",
    },
    year: "2005",
    medium: "Collage, ink, acrylic, and found materials on paper",
    dimensions: "152.4 × 106.7 cm",
    description:
      "A haunting collage of a female figure constructed from fragmented magazine clippings, medical illustrations, and botanical imagery. The figure's body is simultaneously beautiful and grotesque — adorned with flowers and jewelry while also scarred, pierced, and transformed. Mutu's fantastical hybrid creatures critique the violence of colonialism and the objectification of Black women's bodies while imagining new forms of postcolonial femininity.",
    history:
      "Mutu's work emerged from the intersection of Afrofuturism, feminist theory, and postcolonial critique. Her collage technique draws on Dada and Surrealist traditions while speaking directly to contemporary African experiences. 'Yo Mama' was included in her 2005 exhibition 'The Magicien' at the Studio Museum in Harlem. Mutu has since expanded into bronze sculpture, film, and public art, creating monumental caryatid figures for the Metropolitan Museum of Art's facade in 2023.",
    location: {
      museum: "The Studio Museum in Harlem",
      city: "New York",
      country: "United States",
    },
    image: "/images/wangechi-mutu-collage.png",
    tags: ["contemporary", "diaspora", "collage", "feminist", "2000s", "afrofuturism"],
    featured: false,
  },
  {
    id: "zanele-muholi-photography",
    title: "Katlego Mashiloane and Nosipho Lavuta, Ext. 2, Lakeside, Johannesburg",
    artist: {
      name: "Zanele Muholi",
      bio: "Zanele Muholi (born 1972) is a South African visual activist and photographer, known for their powerful portraits celebrating Black LGBTQ+ lives in South Africa. Muholi was named Photographer of the Year at the 2016 PhotoEspaña festival and has exhibited worldwide.",
      birth: 1972,
      nationality: "South African",
    },
    year: "2010",
    medium: "Gelatin silver print, photography",
    dimensions: "76.2 × 50.8 cm",
    description:
      "An intimate black-and-white portrait of two Black South African women in a loving embrace, photographed with profound tenderness and dignity. The women look directly at the camera, their faces calm and unguarded. The simplicity of the composition — soft natural light, neutral background — directs all attention to the subjects' humanity and the power of their visible love.",
    history:
      "Muholi's 'Faces and Phases' series, of which this image is part, is a monumental ongoing project begun in 2006 to document the lives of Black lesbians, gays, transgender, and intersex people in South Africa. The work was created in response to the epidemic of 'corrective rape' and violence against Black LGBTQ+ people. Muholi uses portraiture as an act of visual activism — making visible a community that has been marginalized and attacked. The series has been shown at major museums worldwide.",
    location: {
      museum: "Tate Modern",
      city: "London",
      country: "United Kingdom",
    },
    image: "/images/zanele-muholi-photography.png",
    tags: ["contemporary", "southern-africa", "photography", "portrait", "2010s", "activism"],
    featured: false,
  },
  {
    id: "lynette-yiadom-boakye",
    title: "A Delicate Hand with One Voice",
    artist: {
      name: "Lynette Yiadom-Boakye",
      bio: "Lynette Yiadom-Boakye (born 1977) is a British painter known for her imaginary portraits of Black figures. She paints people who do not exist — invented characters composed from her imagination — challenging the conventions of portraiture and questions of identity, representation, and narrative.",
      birth: 1977,
      nationality: "British-Ghanaian",
    },
    year: "2018",
    medium: "Oil on canvas",
    dimensions: "200 × 170 cm",
    description:
      "A luminous portrait of an invented Black figure, depicted in loose, expressive brushwork against a dark, atmospheric background. The figure's features are deliberately ambiguous — neither definitively male nor female — and their expression is contemplative, interior. Yiadom-Boakye's rapid, confident brushstrokes create a sense of presence and immediacy, as if the figure might step out of the frame.",
    history:
      "Yiadom-Boakye has developed one of the most distinctive figurative painting practices in contemporary art. She never uses live models, instead painting figures that spring entirely from her imagination. This approach liberates her work from the burden of representing any particular person or identity — her subjects exist purely as paintings. She was nominated for the Turner Prize in 2013 and received the Prix Canson the same year. Her work hangs in major museums worldwide.",
    location: {
      museum: "Tate Britain",
      city: "London",
      country: "United Kingdom",
    },
    image: "/images/lynette-yiadom-boakye.png",
    tags: ["contemporary", "diaspora", "painting", "portrait", "2010s", "figurative"],
    featured: false,
  },
  {
    id: "samuel-fosso-photography",
    title: "The Chief: The One Who Sold Africa to the Colonists",
    artist: {
      name: "Samuel Fosso",
      bio: "Samuel Fosso (born 1962) is a Cameroonian-born Nigerian photographer whose staged self-portraits explore identity, African history, and postcolonial politics. He began his career as a commercial portrait photographer and has since become one of Africa's most celebrated contemporary artists.",
      birth: 1962,
      nationality: "Cameroonian (based in Nigeria)",
    },
    year: "1997",
    medium: "Color chromogenic print, photography",
    dimensions: "101.6 × 101.6 cm",
    description:
      "A staged self-portrait in which Fosso dresses as a flamboyant African chief, wearing elaborate robes, gold jewelry, a leopard-skin hat, and smoking a cigar. He sits before a backdrop of African masks, surrounded by symbols of wealth and power. The work satirizes both colonial stereotypes of African royalty and the corruption of post-independence African leaders. Fosso's deadpan expression invites multiple interpretations — is this celebration or critique?",
    history:
      "Fosso's 'African Spirits' series (1997–2000) re-creates iconic figures from African and African American history — from Angela Davis to Martin Luther King Jr. to Patrice Lumumba — using self-portraiture and costume. 'The Chief' is perhaps the most complex image in the series, critiquing both colonial narratives and postcolonial betrayals. The work was featured in Fosso's major exhibition at the Walther Collection and the 2023 Venice Biennale.",
    location: {
      museum: "The Walther Collection",
      city: "Ulm / New York",
      country: "Germany / United States",
    },
    image: "/images/samuel-fosso-photography.png",
    tags: ["contemporary", "west-africa", "photography", "self-portrait", "1990s", "colonialism"],
    featured: false,
  },
  {
    id: "malick-sidibe-photography",
    title: "Fashion Boutique, 1975",
    artist: {
      name: "Malick Sidibé",
      bio: "Malick Sidibé (1936–2016) was a Malian photographer who documented the vibrant youth culture of post-independence Bamako. His black-and-white images captured the energy, style, and optimism of a generation forging a modern African identity.",
      birth: 1936,
      death: 2016,
      nationality: "Malian",
    },
    year: "1975",
    medium: "Gelatin silver print, photography",
    dimensions: "40.6 × 50.8 cm",
    description:
      "A joyful, candid photograph of young Malians gathered at a fashion boutique, dressed in the height of 1970s style — bell-bottoms, platform shoes, afros, and patterned shirts. The scene pulses with music and dance, the subjects' faces lit with smiles. Sidibé's flash photography freezes moments of pure exuberance, creating an archive of youthful self-expression in the newly independent Mali.",
    history:
      "Sidibé opened his Studio Malick in Bamako in 1962, just two years after Malian independence, capturing parties, weddings, and daily life during a period of optimism and cultural transformation. He was discovered by the international art world in the 1990s and became the first African photographer to win the Golden Lion at the Venice Biennale (2003). His work is now recognized as one of the greatest photographic records of 20th-century African urban life.",
    location: {
      museum: "The Museum of Modern Art (MoMA)",
      city: "New York",
      country: "United States",
    },
    image: "/images/malick-sidibe-photography.png",
    tags: ["contemporary", "west-africa", "photography", "1970s", "portrait", "modernist"],
    featured: false,
  },
  {
    id: "toyin-ojih-odutola",
    title: "The Leopard and the Moose (The Likeness)",
    artist: {
      name: "Toyin Ojih Odutola",
      bio: "Toyin Ojih Odutola (born 1985) is a Nigerian-American artist known for her intricate, large-scale portrait drawings using charcoal, pastel, and pencil. Her work explores identity, representation, and the power of skin as a narrative surface.",
      birth: 1985,
      nationality: "Nigerian-American",
    },
    year: "2016",
    medium: "Charcoal, pastel, and pencil on paper",
    dimensions: "152.4 × 182.9 cm",
    description:
      "A monumental drawing of two figures in an intimate, ambiguous relationship, rendered in Ojih Odutola's distinctive technique of dense, overlapping mark-making. The figures' skin is built from thousands of individual lines — marks that read as both texture and landscape. The work is part of a fictional narrative series set in an aristocratic Nigerian family, using imagined histories to explore themes of class, sexuality, and the construction of identity.",
    history:
      "Ojih Odutola developed her signature drawing technique while studying at the University of Alabama, using ballpoint pen and later charcoal to build skin surfaces from layered marks. Her 2017 exhibition 'A Matter of Fact' at the Museum of Modern Art featured her fictional narrative series about two wealthy Nigerian families. She was one of the youngest artists ever featured on the cover of ARTnews and has been hailed as a transformative figure in contemporary drawing.",
    location: {
      museum: "The Museum of Modern Art (MoMA)",
      city: "New York",
      country: "United States",
    },
    image: "/images/toyin-ojih-odutola.png",
    tags: ["contemporary", "diaspora", "drawing", "portrait", "2010s", "narrative"],
    featured: false,
  },
  {
    id: "charles-alston-sculpture",
    title: "The Family (The Group)",
    artist: {
      name: "Charles Alston",
      bio: "Charles Alston (1907–1977) was an American sculptor, painter, and muralist who was a leading figure of the Harlem Renaissance. He was the first African American supervisor of the Works Progress Administration (WPA) and mentored Jacob Lawrence among many others.",
      birth: 1907,
      death: 1977,
      nationality: "American",
    },
    year: "1956",
    medium: "Bronze",
    dimensions: "61 cm height",
    description:
      "A powerful bronze sculpture depicting a family group — a man, woman, and child — in a tight, protective embrace. The figures' bodies are simplified and elongated in a style that blends African sculptural traditions with European modernism. Their interconnected forms suggest unity, resilience, and the foundational role of family in African American survival and community.",
    history:
      "Alston was a versatile artist who worked across media — creating the bust of Martin Luther King Jr. that now stands in the White House and painting murals for Harlem Hospital and the American Museum of Natural History. He was the first African American sculptor to have a work acquired by the Metropolitan Museum of Art. 'The Family' reflects the humanist ideals of the post-World War II era and Alston's commitment to representing Black life with dignity.",
    location: {
      museum: "Metropolitan Museum of Art",
      city: "New York",
      country: "United States",
    },
    image: "/images/charles-alston-sculpture.jpg",
    tags: ["contemporary", "diaspora", "sculpture", "bronze", "harlem-renaissance", "1950s"],
    featured: false,
  },
];