const home = import.meta.glob('@/assets/photos-optimized/home/*.webp', { eager: true })
const images1 = import.meta.glob('@/assets/photos-optimized/item1/*.webp', { eager: true })
const images2 = import.meta.glob('@/assets/photos-optimized/item2/*.webp', { eager: true })
const images3 = import.meta.glob('@/assets/photos-optimized/item3/*.webp', { eager: true })
const images4 = import.meta.glob('@/assets/photos-optimized/item4/*.webp', { eager: true })
const images5 = import.meta.glob('@/assets/photos-optimized/item5/*.webp', { eager: true })
const images6 = import.meta.glob('@/assets/photos-optimized/item6/*.webp', { eager: true })
const images7 = import.meta.glob('@/assets/photos-optimized/item7/*.webp', { eager: true });
const images8 = import.meta.glob('@/assets/photos-optimized/item8/*.webp', { eager: true });
const images9 = import.meta.glob('@/assets/photos-optimized/item9/*.webp', { eager: true });
const images10 = import.meta.glob('@/assets/photos-optimized/item10/*.webp', { eager: true });
const images11 = import.meta.glob('@/assets/photos-optimized/item11/*.webp', { eager: true });
const images12 = import.meta.glob('@/assets/photos-optimized/item12/*.webp', { eager: true });
const images13 = import.meta.glob('@/assets/photos-optimized/item13/*.webp', { eager: true });
const images14 = import.meta.glob('@/assets/photos-optimized/item14/*.webp', { eager: true });
const images15 = import.meta.glob('@/assets/photos-optimized/item15/*.webp', { eager: true });
const images16 = import.meta.glob('@/assets/photos-optimized/item16/*.webp', { eager: true });

const photoList = (images) => Object.entries(images).map(([path, mod]) => ({
  src: mod.default,
  name: path.split('/').pop(),
}));

export const details = {
  '16': {
    title: 'Knock-down Creeper Coffee Table',
    date: '11/25',
    description: 'Cherry Table with Bloodwood wedges. Custom sizes, species, and other options available.',
    photos: photoList(images16),
  },
  '15': {
    title: 'Goth Murphy Bed With Desk',
    date: '7/25',
    description: 'Oak, poplar, 1/2 finished maple ply, custom brass hardware, custom poplar knobs. Custom shapes, sizes, features, please contact.',
    photos: photoList(images15),
  },
  '14': {
    title: 'Utility Stool',
    date: '2/25',
    description: 'Red Oak with Wenge wedges, Spar varnish mix with beeswax topcoat. Varying heights, species, and quantities available for commission. Message for pricing.',
    photos: photoList(images14),
  },
  '13': {
    title: 'Low Profile Coffee Table',
    date: '6/22',
    description: 'Cherry with Wenge wedges. Spar varnish mix with beeswax topcoat. Other sizes and species options available. Message for more information.',
    photos: photoList(images13),
  },
  '12': {
    title: 'Incognito Desk',
    date: '7/22',
    description: 'White Oak with Wenge accents. Spar varnish mix with beeswax topcoat. Other sizes and species available. Inquire within.',
    photos: photoList(images12),
  },
  '11': {
    title: 'Foggy Medicine Cabinet',
    date: '1/21',
    description: 'White Oak with Wenge accents. Spar varnish mix and beeswax topcoat. Sizes, species, and other options available for commission.',
    photos: photoList(images11),
  },
  '10': {
    title: 'Custom Cabinets',
    description: 'Birch Plywood, Poplar, Cherry. Typically paint grade. Custom designs available to suit every need.',
    photos: photoList(images10),
  },
  '9': {
    title: 'Reading Chair',
    date: '9/20',
    description: 'Hand-hewn White Oak, Wenge wedges, Rush weave. Spar varnish mix with beeswax topcoat. Custom sizes, species, and quantities available.',
    photos: photoList(images9),
  },
  '8': {
    title: 'His and Hers Bedside Tables',
    date: '12/24',
    description: 'White Oak with Wenge accents. Spar varnish mix with beeswax topcoat. Size, species, quantitiy options available.',
    photos: photoList(images8),
  },
  '7': {
    title: 'Walking Stick Coat Rack',
    date: '11/24',
    description: 'Hand-hewn Red Oak. Spar varnish mixture with beeswax topcoat. Multitudes of variations available.',
    photos: photoList(images7),
  },
  '6': {
    title: 'Curly Café',
    date: '1/24',
    description: 'Cherry. Spar varnish mix with beeswax topcoat. Size, shape, and species options available.',
    photos: photoList(images6),
  },
  '5': {
    title: 'Worm',
    date: '12/24',
    description: 'Red Oak with Wenge wedges. Spar varnish mix with a beeswax topcoat. This was a one-off / experiment for donation. I intend on playing with this form upon further exploration. Variants available.',
    photos: photoList(images5),
  },
  '4': {
    title: 'ICBM Cocktail',
    date: '10/25',
    description: 'Red Oak. Spar varnish mixture with beeswax topcoat. Variants available.',
    photos: photoList(images4),
  },
  '3': {
    title: 'Turn of the century staircase spindles',
    date: '6/24',
    description: 'Red Oak. Unfinished. The origional wood was English Oak but straight grain Red Oak was as close as I could get here in the Midwest.',
    photos: photoList(images3),
  },
  '2': {
    title: 'Assorted Cabinets and Tool Chests',
    date: '1/17',
    description: 'Mostly paint-grade Sugar Pine.',
    photos: photoList(images2),
  },
  '1': {
    title: 'Assorted Objects',
    date: 'varying',
    description: 'Be specific about inquiries. Thanks for looking.',
    photos: photoList(images1),
  },
  '0': {
    description:
      `My name is Jordan Small and I'm a woodworker from Cincinnati Ohio. I specialize in furniture, cabinets, woodturning, joinery, and millwork. My shop is located in the Lambda building on the northwest side of downtown. I was born here in Cincinnati and have lived here most of my life; I attended Northern Kentucky University and The University of Cincinnati for Comparative Literature; I was a bartender for about ten years post-graduation. Amidst that time, I acquired knowledge and experience in building furniture and manipulating wood into objects that are both pleasing to look at and practical for the everyday human.

      My approach to what I do, and what I "do" is not "art," just to get that out of the way; I make objects with as little waste as possible, using materials that are not damaging to the environment or produce excessive amounts of byproducts. It's important to me to adhere to a process that is the least bit damaging to the world around me. In addition to that, I also adhere to a strict anti-big box store mentality, meaning I don't support corporations because they exploit their workers; money sucks in general and we shouldn't have to fight over resources. In any case, I buy as local/regional as I can as well as supporting other smaller businesses in my community.

      There's a really good chance that what I'm selling or quoting you is going to be more expensive than Michaels, Ikea, or Furniture Fair. If that's why you're here you might want to consider that your money pays for my rent, my dog, my stomach, my books, my continuing education, and my freedom from the constraints of being employed by the invisible hand we all tremble beneath. Maybe you're asking, "why would I liberate this guy when I'm the one who's oppressed?" I'd say you're right and that you should close this window, smash your computer, and go outside and figure out how you want to live your life and do it. I've had over 40-some jobs in my lifetime and they've never worked for me, only I/them.

      I digress, if you've made it this far, thanks for sticking in there with me. I hope you decide you'd like to poke around the website a little bit and even, perhaps, ask me a question. Your attention is much appreciated, in this attention-starved culture we live in, but we can all be happy with where we're at because we're here together.

      I've been doing work for friends, family, strangers, and the occasional employer since 2016. I'd be glad to make you something you'll use every day, something you can pass along to your family or friends, something that lasts.`,
    photos: photoList(home),
  },
};