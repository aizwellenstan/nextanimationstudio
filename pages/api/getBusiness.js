export default function handler(req, res) {
  res.status(200).json({
    list: [
      {
        id: '001',
        title: 'MOCAP',
        image: 'https://picsum.photos/id/1/660/300',
      },
      {
        id: '002',
        title: 'NextLAB',
        image: 'https://picsum.photos/id/2/660/300',
      },
      {
        id: '003',
        title: 'LIGHT STAGE',
        image: 'https://picsum.photos/id/3/660/300',
      },
    ],
  })
}
