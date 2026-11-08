export interface Destination {
  id: string;
  name: string;
  country: string;
  tagline: string;
  badge: string;
  category: 'Praia & Sol' | 'Romance & Cidade' | 'Natureza & Relax' | 'Aventura & Cultura';
  imageUrl: string;
  description: string;
  highlights: string[];
  bestSeason: string;
  vibeScore: number;
}

export const DESTINATIONS: Destination[] = [
  {
    id: 'santorini',
    name: 'Santorini',
    country: 'Grécia',
    tagline: 'Pores do sol de cortar a respiração nas ilhas Cíclades',
    badge: 'Mais Romântico',
    category: 'Romance & Cidade',
    imageUrl: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1000&q=80',
    description: 'Casas brancas em falésias vulcânicas sobre o Mar Egeu, jantares à luz de velas em Oia e águas cristalinas para relaxar a dois.',
    highlights: ['Pôr-do-sol privado em Oia', 'Passeio de catamarã pela caldeira', 'Degustação de vinhos vulcânicos'],
    bestSeason: 'Maio a Outubro',
    vibeScore: 98
  },
  {
    id: 'maldivas',
    name: 'Maldivas',
    country: 'Oceano Índico',
    tagline: 'Vilas sobre água azul-turquesa e descanso absoluto',
    badge: 'Paraíso Puro',
    category: 'Praia & Sol',
    imageUrl: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1000&q=80',
    description: 'O refúgio perfeito longe do mundo. Acordar com o mar por baixo dos pés, mergulhar com tartarugas marinhas e jantares descalços no areal.',
    highlights: ['Bangaló sobre a água com piscina', 'Snorkeling nos recifes de coral', 'Spa flutuante ao pôr do sol'],
    bestSeason: 'Novembro a Abril',
    vibeScore: 99
  },
  {
    id: 'costa-amalfitana',
    name: 'Costa Amalfitana & Capri',
    country: 'Itália',
    tagline: 'A magia da Dolce Vita entre falésias e limoeiros',
    badge: 'Dolce Vita',
    category: 'Romance & Cidade',
    imageUrl: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1000&q=80',
    description: 'Passeios de Vespa com vista para o Mediterrâneo, massa fresca em esplanadas floridas de Positano e tardes inesquecíveis em Capri.',
    highlights: ['Passeio de barco em torno dos Faraglioni', 'Jantar romântico em Positano', 'Limoncello caseiro com vista para o mar'],
    bestSeason: 'Abril a Outubro',
    vibeScore: 96
  },
  {
    id: 'bali',
    name: 'Bali & Nusa Penida',
    country: 'Indonésia',
    tagline: 'Espiritualidade, florestas tropicais e praias secretas',
    badge: 'Exótico & Zen',
    category: 'Natureza & Relax',
    imageUrl: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1000&q=80',
    description: 'Vilas privadas com piscina infinita em Ubud, massagens balinesas no meio da selva e praias de sonho para recarregar todas as energias.',
    highlights: ['Vila privativa com cascata e piscina', 'Pequeno-almoço flutuante na água', 'Templos mágicos no nascer do sol'],
    bestSeason: 'Maio a Setembro',
    vibeScore: 95
  },
  {
    id: 'dolomitas',
    name: 'Dolomitas & Lago di Braies',
    country: 'Itália',
    tagline: 'Montanhas dramáticas, chalés acolhedores e ar puro',
    badge: 'Aconchegante',
    category: 'Natureza & Relax',
    imageUrl: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1000&q=80',
    description: 'Caminhadas serenas entre picos alpinos, spas panorâmicos aquecidos ao ar livre e noites acolhedoras com lareira e vinho quente.',
    highlights: ['Passeio de barco de madeira no Lago di Braies', 'Spa com sauna panorâmica nas montanhas', 'Jantar de montanha sob o céu estrelado'],
    bestSeason: 'Ano Inteiro',
    vibeScore: 94
  },
  {
    id: 'quenia',
    name: 'Safari Masai Mara & Zanzibar',
    country: 'Quénia & Tanzânia',
    tagline: 'A vida selvagem da savana combinada com praias de areia branca',
    badge: 'Aventura Única',
    category: 'Aventura & Cultura',
    imageUrl: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1000&q=80',
    description: 'Começar com um voo de balão de ar quente sobre a savana africana ao amanhecer e terminar a descansar nas praias paradisíacas de Zanzibar.',
    highlights: ['Passeio de balão ao amanhecer com champanhe', 'Observar os Big Five na savana', 'Cabana de luxo à beira-mar em Zanzibar'],
    bestSeason: 'Julho a Outubro / Janeiro a Março',
    vibeScore: 97
  },
  {
    id: 'faro-madeira',
    name: 'Madeira & Açores (Escapadinha)',
    country: 'Portugal',
    tagline: 'O nosso paraíso atlântico a poucas horas de casa',
    badge: 'Escapadinha Perfeita',
    category: 'Natureza & Relax',
    imageUrl: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1000&q=80',
    description: 'Piscinas naturais de lava, florestas laurissilva encantadas, banhos termais quentes no meio da névoa e a melhor gastronomia do Atlântico.',
    highlights: ['Termas quentes no Parque Terra Nostra', 'Piscina infinita nas falésias da Ponta do Sol', 'Pôr do sol no Pico do Arieiro acima das nuvens'],
    bestSeason: 'Ano Inteiro',
    vibeScore: 93
  },
  {
    id: 'toquio-quioto',
    name: 'Tóquio & Quioto',
    country: 'Japão',
    tagline: 'Tradição milenar, cerejeiras em flor e ryokans com onsen',
    badge: 'Experiência Mágica',
    category: 'Aventura & Cultura',
    imageUrl: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1000&q=80',
    description: 'Dormir num Ryokan tradicional com águas termais privadas, passear sob túneis de bambu e cerejeiras, e provar a melhor gastronomia do mundo.',
    highlights: ['Ryokan tradicional com onsen privativo', 'Passeio fotográfico matinal em Quioto', 'Gastronomia Kaiseki com estrelas Michelin'],
    bestSeason: 'Março a Maio / Outubro a Novembro',
    vibeScore: 97
  }
];
