const home = import.meta.glob('@/assets/photos/home/*.jpg', { eager: true })
const images1 = import.meta.glob('@/assets/photos/item1/*.jpg', { eager: true })
const images2 = import.meta.glob('@/assets/photos/item2/*.jpg', { eager: true })
const images3 = import.meta.glob('@/assets/photos/item3/*.jpg', { eager: true })
const images4 = import.meta.glob('@/assets/photos/item4/*.jpg', { eager: true })
const images5 = import.meta.glob('@/assets/photos/item5/*.jpg', { eager: true })
const images6 = import.meta.glob('@/assets/photos/item6/*.jpg', { eager: true })
const images7 = import.meta.glob('@/assets/photos/item7/*.jpg', { eager: true });
const images8 = import.meta.glob('@/assets/photos/item8/*.jpg', { eager: true });
const images9 = import.meta.glob('@/assets/photos/item9/*.jpg', { eager: true });
const images10 = import.meta.glob('@/assets/photos/item10/*.jpg', { eager: true });
const images11 = import.meta.glob('@/assets/photos/item11/*.jpg', { eager: true });
const images12 = import.meta.glob('@/assets/photos/item12/*.jpg', { eager: true });
const images13 = import.meta.glob('@/assets/photos/item13/*.jpg', { eager: true });
const images14 = import.meta.glob('@/assets/photos/item14/*.jpg', { eager: true });
const images15 = import.meta.glob('@/assets/photos/item15/*.jpg', { eager: true });

const photoList = (images) => Object.entries(images).map(([path, mod]) => ({
  src: mod.default,
  name: path.split('/').pop(),
}));

export const details = {
  '0': {
    title: 'Home',
    description:
      `My name is Jordan Small and I'm a woodworker from Cincinnati Ohio. I specialize in furniture, cabinets, woodturning, joinery, and millwork. My shop is located in the Lambda building on the northwest side of downtown. I was born here in Cincinnati and have lived here most of my life; I attended Northern Kentucky University and The University of Cincinnati for Comparative Literature; I was a bartender for about ten years post-graduation. Amidst that time, I acquired knowledge and experience in building furniture and manipulating wood into objects that are both pleasing to look at and practical for the everyday human.

      My approach to what I do, and what I "do" is not "art," just to get that out of the way; I make objects with as little waste as possible, using materials that are not damaging to the environment or produce excessive amounts of byproducts. It's important to me to adhere to a process that is the least bit damaging to the world around me. In addition to that, I also adhere to a strict anti-big box store mentality, meaning I don't support corporations because they exploit their workers; money sucks in general and we shouldn't have to fight over resources. In any case, I buy as local/regional as I can as well as supporting other smaller businesses in my community.

      There's a really good chance that what I'm selling or quoting you is going to be more expensive than Michaels, Ikea, or Furniture Fair. If that's why you're here you might want to consider that your money pays for my rent, my dog, my stomach, my books, my continuing education, and my freedom from the constraints of being employed by the invisible hand we all tremble beneath. Maybe you're asking, "why would I liberate this guy when I'm the one who's oppressed?" I'd say you're right and that you should close this window, smash your computer, and go outside and figure out how you want to live your life and do it. I've had over 40-some jobs in my lifetime and they've never worked for me, only I/them.

      I digress, if you've made it this far, thanks for sticking in there with me. I hope you decide you'd like to poke around the website a little bit and even, perhaps, ask me a question. Your attention is much appreciated, in this attention-starved culture we live in, but we can all be happy with where we're at because we're here together.

      I've been doing work for friends, family, strangers, and the occasional employer since 2016. I'd be glad to make you something you'll use every day, something you can pass along to your family or friends, something that lasts.`,
    photos: photoList(home),
  },
  '1': {
    title: 'Utility Stool 2/25',
    date: '2/25',
    description: 'Red Oak with Wenge wedges, Spar varnish mix with beeswax topcoat. Varying heights, species, and quantities available for commission.Message for pricing.',
    photos: photoList(images1),
  },
  '2': {
    title: 'Item 2 Title',
    date: '3/15',
    description: 'Description for item 2. Customizable options available.',
    photos: photoList(images2),
  },
  '3': {
    title: 'Item 3 Title',
    date: '4/10',
    description: 'Description for item 3. Handcrafted with care.',
    photos: photoList(images3),
  },
  '4': {
    title: 'Item 4 Title',
    date: '5/05',
    description: 'Description for item 4. Unique design and finish.',
    photos: photoList(images4),
  },
  '5': {
    title: 'Item 5 Title',
    date: '6/20',
    description: 'Description for item 5. Limited edition piece.',
    photos: photoList(images5),
  },
  '6': {
    title: 'Item 6 Title',
    date: '7/30',
    description: 'Description for item 6. Perfect for any setting.',
    photos: photoList(images6),
  },
  '7': {
    title: 'Item 7 Title',
    date: '8/10',
    description: 'Description for item 7. Elegant and timeless.',
    photos: photoList(images7),
  },
  '8': {
    title: 'Item 8 Title',
    date: '9/05',
    description: 'Description for item 8. Crafted with precision.',
    photos: photoList(images8),
  },
  '9': {
    title: 'Item 9 Title',
    date: '10/15',
    description: 'Description for item 9. A perfect gift.',
    photos: photoList(images9),
  },
  '10': {
    title: 'Item 10 Title',
    date: '11/20',
    description: 'Description for item 10. Modern and stylish.',
    photos: photoList(images10),
  },
  '11': {
    title: 'Item 11 Title',
    date: '12/01',
    description: 'Description for item 11. Durable and functional.',
    photos: photoList(images11),
  },
  '12': {
    title: 'Item 12 Title',
    date: '1/15',
    description: 'Description for item 12. Unique craftsmanship.',
    photos: photoList(images12),
  },
  '13': {
    title: 'Item 13 Title',
    date: '2/10',
    description: 'Description for item 13. A collector’s item.',
    photos: photoList(images13),
  },
  '14': {
    title: 'Item 14 Title',
    date: '3/25',
    description: 'Description for item 14. Perfect for any occasion.',
    photos: photoList(images14),
  },
  '15': {
    title: 'Item 15 Title',
    date: '4/30',
    description: 'Description for item 15. A masterpiece of design.',
    photos: photoList(images15),
  },
};