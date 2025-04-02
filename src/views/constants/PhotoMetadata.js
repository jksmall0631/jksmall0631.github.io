const images = import.meta.glob('@/assets/photos/item1/*.jpg', { eager: true })

const photoList = Object.entries(images).map(([path, mod]) => ({
  src: mod.default,
  name: path.split('/').pop(),
}))

export const details = {
  '1': {
    title: 'Utility Stool 2/25',
    date: '2/25',
    description: 'Red Oak with Wenge wedges, Spar varnish mix with beeswax topcoat. Varying heights, species, and quantities available for commission.Message for pricing.',
    photos: photoList,
  },
};