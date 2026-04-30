// lib/site-data.ts
export const studioInfo = {
  name: 'Strike Boxing',
  tagline: 'Fight Club Meets Nightclub',
  headline: 'WHERE FIGHTERS ARE MADE',
  subheadline: 'Elite boxing training for all levels. Join Miami\'s most electrifying boxing boutique.',
  cta_primary: 'Book Your Free Class',
  cta_secondary: 'See Schedule',
  address: '850 NW 2nd Ave, Miami, FL 33128',
  phone: '(305) 555-0187',
  email: 'info@strikeboxingmiami.com',
  instagram: 'https://instagram.com/strikeboxingmiami',
  facebook: 'https://facebook.com/strikeboxingmiami',
  hours: {
    'Mon–Fri': '6:00 AM – 9:00 PM',
    'Saturday': '8:00 AM – 4:00 PM',
    'Sunday': '9:00 AM – 2:00 PM',
  },
};

export const stats = [
  { value: '18+', label: 'Classes/Week' },
  { value: '800+', label: 'Members' },
  { value: '5', label: 'Champion Coaches' },
  { value: '4.9★', label: 'Google Rating' },
];

export const classes = [
  {
    name: 'Rumble',
    duration: '45 min',
    level: 'All Levels',
    description: 'High-energy boxing rounds on bags set to pounding music. 45 minutes of pure cardio and technique.',
    color: '#E53935',
  },
  {
    name: 'Power Hour',
    duration: '60 min',
    level: 'Intermediate',
    description: 'Full hour of technical boxing, heavy bag work, and functional strength conditioning.',
    color: '#C62828',
  },
  {
    name: '12 Rounds',
    duration: '50 min',
    level: 'Advanced',
    description: 'Competition-style 12-round format. Test your endurance and technique like a pro fighter.',
    color: '#B71C1C',
  },
  {
    name: 'Cardio Box',
    duration: '40 min',
    level: 'Beginner',
    description: 'Learn the fundamentals while getting an incredible workout. No experience needed — just show up.',
    color: '#E53935',
  },
  {
    name: 'Sparring Lab',
    duration: '60 min',
    level: 'Advanced',
    description: 'Controlled sparring under coach supervision. Mandatory gear. By invitation or application only.',
    color: '#880E4F',
  },
  {
    name: 'Kids Boxing',
    duration: '45 min',
    level: 'Ages 7–14',
    description: 'Discipline, confidence, and fitness for young athletes. Safe, fun, and coach-led every session.',
    color: '#1565C0',
  },
];

export const coaches = [
  {
    name: 'Marcus "The Wall" Rivera',
    title: 'Head Coach — Former WBA Super Featherweight',
    bio: '18 professional fights, 14 wins. Turned to coaching to build the next generation of champions.',
    image: 'https://images.unsplash.com/photo-1581009137042-c552e485697a?w=400&q=80',
  },
  {
    name: 'Camila Torres',
    title: 'Boxing & Conditioning Coach',
    bio: '3x Golden Gloves amateur champion. Specializes in technique, footwork, and elite conditioning.',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=80',
  },
  {
    name: 'Devon "D-Train" James',
    title: 'Strength & Combat Coach',
    bio: 'Combines S&C science with boxing craft. All classes combine ring IQ with physical performance.',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&q=80',
  },
];

export const testimonials = [
  {
    name: 'Jessica M.',
    text: 'I\'ve tried every boutique fitness class in Miami. Strike is on another level — the coaches are real fighters and the energy in that room is unlike anything else.',
    rating: 5,
  },
  {
    name: 'Andre L.',
    text: 'Lost 30 lbs in 4 months and actually learned how to box. This isn\'t just cardio — you leave with real skills.',
    rating: 5,
  },
  {
    name: 'Sofia R.',
    text: 'The Rumble class is my religion now. Tuesday and Thursday nights — nothing gets in the way. Coach Marcus pushes you beyond what you think you\'re capable of.',
    rating: 5,
  },
  {
    name: 'Carlos V.',
    text: 'Brought my 12-year-old son for Kids Boxing — best decision I ever made. He\'s more focused, more confident, and he\'s obsessed with coming back.',
    rating: 5,
  },
];

export const pricing = [
  {
    name: 'Drop-In',
    price: '$32',
    period: 'per class',
    features: ['Single class access', 'Gloves provided', 'All class types', 'No commitment'],
    cta: 'Book Now',
    highlight: false,
  },
  {
    name: 'Monthly',
    price: '$129',
    period: 'per month',
    features: ['Unlimited classes', 'Priority booking', 'Free glove rental', 'Member app access', 'Guest pass/month'],
    cta: 'Start Today',
    highlight: true,
  },
  {
    name: 'Founding',
    price: '$99',
    period: 'per month',
    features: ['Everything in Monthly', 'Locked-in rate forever', 'Free branded gloves', 'Early class access', 'VIP events'],
    cta: 'Claim Spot',
    highlight: false,
  },
];
