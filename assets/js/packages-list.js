const packages = [
  {
    id: 1,
    imagePath: 'assets/images/packages/rovaneimi.webp',
    countryName: 'Finland',
    packageName: 'Rovaniemi',
    shortContent: 'Positioned at the edge of the Arctic Circle, Rovaniemi offers snow-covered forests, vast skies, and a composed winter atmosphere shaped by seasonal light and quiet natural rhythm.',
    fullContent: 'Rovaniemi is a destination shaped by Arctic geography and seasonal contrast. Snow-covered forests, frozen rivers, and expansive open skies define the landscape, creating an environment that feels vast yet composed. Winter reveals Northern Lights, husky safaris, and reindeer trails that unfold naturally rather than as staged experiences. Despite its global recognition, the city maintains a calm and measured pace, deeply connected to its surroundings. Architecture, culture, and daily life are closely aligned with nature, allowing visitors to move through the destination without urgency. Rovaniemi offers an experience that feels grounded and authentic, where the Arctic is encountered with clarity, respect, and quiet wonder.'
  },
  {
    id: 2,
    imagePath: 'assets/images/packages/santa-village.webp',
    countryName: 'Finland',
    packageName: 'Santa Claus Village',
    shortContent: 'A refined Arctic destination that blends cultural symbolism with calm winter surroundings, offering tradition in a composed, unhurried, and thoughtfully curated setting.',
    fullContent: 'Santa Claus Village presents an Arctic experience shaped by restraint and thoughtful design. Located directly on the Arctic Circle, it balances cultural symbolism with pristine winter landscapes. Rather than spectacle, the village offers a calm and composed atmosphere where tradition is expressed quietly. Snow-covered paths, understated architecture, and open surroundings allow visitors to engage with the setting at their own pace. The experience feels deliberate and refined, preserving a sense of authenticity while remaining accessible. It is well-suited for travelers who value meaning over excess and prefer environments that feel curated without being overwhelming.'
  },
  {
    id: 3,
    imagePath: 'assets/images/packages/kakslauttanen.webp',
    countryName: 'Finland',
    packageName: 'Kakslauttanen',
    shortContent: 'An immersive Arctic retreat offering privacy, silence, and uninterrupted views of the night sky, designed for travelers seeking stillness and understated comfort.',
    fullContent: 'Kakslauttanen is designed for complete immersion in the Arctic environment. Glass igloos provide uninterrupted views of the night sky, while the surrounding wilderness ensures privacy and silence. The experience prioritizes natural rhythm, stillness, and connection to the environment rather than conventional luxury markers. Days move slowly, shaped by light, weather, and the surrounding landscape. The focus remains on comfort that feels organic and unobtrusive, allowing guests to feel present rather than entertained. Kakslauttanen appeals to travelers who value quiet moments, solitude, and an intimate relationship with nature.'
  },
  {
    id: 4,
    imagePath: 'assets/images/packages/Da-Nang.webp',
    countryName: 'Vietnam',
    packageName: 'Da Nang',
    shortContent: 'A contemporary coastal city offering relaxed beaches, open boulevards, and a balanced pace that blends modern living with easy access to culture and nature.',
    fullContent: 'Da Nang presents a modern Vietnamese city framed by long beaches and expansive boulevards. The atmosphere is relaxed yet structured, allowing travelers to experience coastal calm alongside urban convenience. Cultural sites, natural landscapes, and modern infrastructure coexist seamlessly, offering flexibility without visual or sensory overload. The city’s rhythm feels balanced, making it ideal for those who appreciate clarity and comfort while remaining connected to local life. Da Nang offers a composed introduction to Vietnam, where movement feels effortless and the environment remains open and approachable.'
  },
  {
    id: 5,
    imagePath: 'assets/images/packages/Hoi-An.webp',
    countryName: 'Vietnam',
    packageName: 'Hoi An',
    shortContent: 'A preserved heritage town defined by lantern-lit streets, riverfront charm, and a slow, reflective pace that encourages unhurried exploration.',
    fullContent: 'Hoi An is characterized by preserved architecture, a gentle riverfront, and soft evening light. The town moves at an unhurried pace, encouraging visitors to explore without agenda or pressure. Historic homes, traditional craftsmanship, and lantern-lit streets create a sense of continuity that feels both intimate and refined. Modern intrusions are minimal, allowing the town’s character to remain intact. Hoi An offers a quiet elegance rooted in history and daily life, making it ideal for travelers seeking depth, atmosphere, and cultural authenticity.'
  },
  {
    id: 6,
    imagePath: 'assets/images/packages/Phu-Quoc.webp',
    countryName: 'Vietnam',
    packageName: 'Phu Quoc',
    shortContent: 'A tropical island shaped by open beaches, warm waters, and natural restraint, offering privacy, space, and a calm, uncluttered environment.',
    fullContent: 'Phu Quoc is an island defined by simplicity and balance. Open beaches, warm waters, and lush interiors shape an environment that feels relaxed and spacious. Resorts are designed to remain low-profile, blending into the landscape rather than dominating it. The pace is slow and restorative, allowing travelers to disconnect without isolation. Phu Quoc is well-suited for those seeking rest and privacy in a tropical setting that values calm over activity and experience over excess.'
  },
  {
    id: 7,
    imagePath: 'assets/images/packages/masai-mara.webp',
    countryName: 'Kenya & Tanzania',
    packageName: 'Masai Mara',
    shortContent: 'Vast open savannahs offering natural wildlife encounters, wide horizons, and a sense of scale that remains unchanged by time.',
    fullContent: 'Masai Mara is defined by expansive plains and uninterrupted horizons. Wildlife encounters occur naturally, shaped by migration and environment rather than staging. Early mornings, open landscapes, and vast skies create a deep sense of scale and presence. The experience feels immersive and grounding, allowing visitors to observe life in motion without interference. Masai Mara offers a safari experience rooted in authenticity, where nature sets the pace and perspective remains wide and unobstructed.'
  },
  {
    id: 8,
    imagePath: 'assets/images/packages/Ngorongoro-Crater.webp',
    countryName: 'Kenya & Tanzania',
    packageName: 'Ngorongoro Crater',
    shortContent: 'A dramatic natural sanctuary offering close wildlife encounters within a vast volcanic landscape that feels both contained and immense.',
    fullContent: 'Ngorongoro Crater is a vast volcanic basin containing a complete ecosystem within its walls. The enclosed landscape creates an environment where wildlife encounters feel immediate and intimate, set against a powerful geological backdrop. The contrast between scale and containment gives the destination a distinctive character. Movement within the crater feels deliberate and focused, enhancing observation and presence. Ngorongoro offers a safari experience that is visually dramatic and deeply immersive.'
  },
  {
    id: 13,
    imagePath: 'assets/images/packages/San-Francisco.webp',
    countryName: 'United States',
    packageName: 'San Francisco',
    shortContent: 'A visually distinctive city shaped by hills, coastline, and layered neighborhoods, offering culture, creativity, and coastal character.',
    fullContent: 'San Francisco is defined by its topography, coastline, and diverse neighborhoods. Iconic landmarks coexist with creative districts and historic streets, creating a city that feels expressive yet approachable. The pace varies by area, offering both energy and reflection. Natural surroundings remain closely integrated into urban life, allowing movement between city and coast with ease.'
  },
  {
    id: 14,
    imagePath: 'assets/images/packages/Niagara-Falls.webp',
    countryName: 'United States',
    packageName: 'Niagara Falls',
    shortContent: 'A powerful natural landmark defined by scale, sound, and movement, offering an immediate and sensory experience.',
    fullContent: 'Niagara Falls is shaped by the constant force and movement of water. The sound, mist, and visual scale dominate the environment, creating an experience that feels immediate and immersive. Surrounding viewpoints allow visitors to observe the falls from multiple perspectives, each reinforcing the sense of natural power. It remains one of North America’s most compelling natural sights.'
  },
  {
    id: 15,
    imagePath: 'assets/images/packages/Washington.webp',
    countryName: 'United States',
    packageName: 'Washington, D.C.',
    shortContent: 'A city of symmetry and monumentality, offering structured avenues, cultural institutions, and a reflective urban atmosphere.',
    fullContent: 'Washington, D.C. is characterized by open avenues, classical architecture, and a strong sense of order. Museums, monuments, and historic institutions are integrated into daily life, creating a city that feels thoughtful and grounded. Public spaces encourage reflection and exploration without congestion. The destination offers cultural depth within a composed urban framework.'
  },
  {
    id: 16,
    imagePath: 'assets/images/packages/sydney.webp',
    countryName: 'Australia',
    packageName: 'Sydney',
    shortContent: 'A harbour-defined city blending architectural icons, coastal landscapes, and relaxed sophistication.',
    fullContent: 'Sydney combines iconic architecture with expansive coastal scenery. The harbour shapes the city’s identity, while beaches and open spaces soften its urban presence. Experiences such as the Harbour Bridge climb offer structured adventure paired with striking views. The city balances energy and openness, creating a destination that feels vibrant yet composed.'
  },
  {
    id: 17,
    imagePath: 'assets/images/packages/Great-Barrier-Reef.webp',
    countryName: 'Australia',
    packageName: 'Great Barrier Reef',
    shortContent: 'A vast marine ecosystem offering coral formations, marine life, and natural clarity across tropical waters.',
    fullContent: 'The Great Barrier Reef is a living ecosystem extending across clear tropical seas. Coral formations and marine life create an environment of exceptional biodiversity. The experience is shaped by observation and awareness, offering a direct connection to one of the world’s most significant natural environments. Movement through the reef feels immersive and humbling.'
  },
  {
    id: 18,
    imagePath: 'assets/images/packages/Hamilton-Island.webp',
    countryName: 'Australia',
    packageName: 'Hamilton Island',
    shortContent: 'A refined island escape offering calm beaches, gentle waters, and effortless movement between land and sea.',
    fullContent: 'Hamilton Island offers a relaxed and accessible island experience. White beaches, gentle waters, and well-composed surroundings create an environment that feels calm and balanced. The island supports ease of movement and quiet enjoyment, making it ideal for travelers seeking simplicity and understated comfort.'
  },
  {
    id: 19,
    imagePath: 'assets/images/packages/Franz-Josef-Glacier.webp',
    countryName: 'New Zealand',
    packageName: 'Franz Josef Glacier',
    shortContent: 'A dramatic landscape where ice meets rainforest, offering raw contrast and ever-changing natural form.',
    fullContent: 'Franz Josef Glacier presents a rare convergence of ice and rainforest. The landscape is dynamic and constantly evolving, shaped by climate and terrain. The experience feels powerful and elemental, offering visual contrast and a strong sense of natural scale.'
  },
  {
    id: 20,
    imagePath: 'assets/images/packages/Mount-Cook.webp',
    countryName: 'New Zealand',
    packageName: 'Mount Cook',
    shortContent: 'An alpine environment defined by clarity, scale, and silence, offering deep calm and visual purity.',
    fullContent: 'Mount Cook National Park is shaped by snow-covered peaks, glacier lakes, and expansive skies. The environment feels remote and clean, encouraging stillness and reflection. Movement through the landscape is unhurried, allowing visitors to absorb scale and quiet without distraction.'
  },
  {
    id: 21,
    imagePath: 'assets/images/packages/Milford-Sound.webp',
    countryName: 'New Zealand',
    packageName: 'Milford Sound',
    shortContent: 'A timeless landscape of towering cliffs, deep waters, and mist-filled stillness.',
    fullContent: 'Milford Sound is defined by dramatic vertical cliffs and calm, deep waters. Waterfalls, mist, and slow movement create a sense of isolation and natural grandeur. The experience feels timeless, offering quiet immersion in one of New Zealand’s most striking environments.'
  },
  {
    id: 22,
    imagePath: 'assets/images/packages/Japan.webp',
    countryName: 'Japan & South Korea',
    packageName: 'Japan & South Korea',
    shortContent: 'A culturally layered journey blending ancient temples, historic palaces, and contemporary cities shaped by precision, design, and tradition.',
    fullContent: 'Japan and South Korea together create a journey defined by cultural depth and modern refinement. Ancient temples, serene gardens, and seasonal landscapes in Japan contrast beautifully with South Korea’s historic palaces, mountain backdrops, and design-led cities. Travel flows between quiet heritage districts and dynamic urban environments, offering balance in pace and perspective. Tradition and innovation coexist seamlessly across both destinations, expressed through architecture, cuisine, and daily life. The experience feels immersive yet structured, allowing travelers to engage with two distinct cultural identities within a single, harmonious East Asian narrative shaped by precision, respect, and aesthetic clarity.'
  }

];