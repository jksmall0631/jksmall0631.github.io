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