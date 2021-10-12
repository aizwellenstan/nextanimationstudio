export default function handler(req, res) {
  console.log(req.body)

  if (req.body) {
    res.status(200).json({
      result: 'success',
    })

    return
  }

  res.status(200).json({
    bannerXS: {
      url: 'https://picsum.photos/id/1023/768/670',
      width: 768,
      height: 670,
    },
    bannerMD: {
      url: 'https://picsum.photos/id/1023/1920/700',
      width: 1920,
      height: 700,
    },
    downloadUrl: 'https://tw.apple.com/',
    en: {
      list: [
        {
          id: '1',
          title: 'MOCAP',
          image: {
            url: 'https://picsum.photos/id/123/300/300',
            width: 300,
            height: 300,
          },
        },
        {
          id: '2',
          title: 'MOCAP',
          image: {
            url: 'https://picsum.photos/id/123/300/300',
            width: 300,
            height: 300,
          },
        },
        {
          id: '3',
          title: 'MOCAP',
          image: {
            url: 'https://picsum.photos/id/123/300/300',
            width: 300,
            height: 300,
          },
        },
        {
          id: '4',
          title: 'MOCAP',
          image: {
            url: 'https://picsum.photos/id/123/300/300',
            width: 300,
            height: 300,
          },
        },
        {
          id: '5',
          title: 'MOCAP',
          image: {
            url: 'https://picsum.photos/id/123/300/300',
            width: 300,
            height: 300,
          },
        },
        {
          id: '6',
          title: 'MOCAP',
          image: {
            url: 'https://picsum.photos/id/123/300/300',
            width: 300,
            height: 300,
          },
        },
      ],
    },
    cn: {
      list: [
        {
          id: '1',
          title: 'MOCAP',
          image: {
            url: 'https://picsum.photos/id/123/300/300',
            width: 300,
            height: 300,
          },
        },
        {
          id: '2',
          title: 'MOCAP',
          image: {
            url: 'https://picsum.photos/id/123/300/300',
            width: 300,
            height: 300,
          },
        },
        {
          id: '3',
          title: 'MOCAP',
          image: {
            url: 'https://picsum.photos/id/123/300/300',
            width: 300,
            height: 300,
          },
        },
        {
          id: '4',
          title: 'MOCAP',
          image: {
            url: 'https://picsum.photos/id/123/300/300',
            width: 300,
            height: 300,
          },
        },
        {
          id: '5',
          title: 'MOCAP',
          image: {
            url: 'https://picsum.photos/id/123/300/300',
            width: 300,
            height: 300,
          },
        },
        {
          id: '6',
          title: 'MOCAP',
          image: {
            url: 'https://picsum.photos/id/123/300/300',
            width: 300,
            height: 300,
          },
        },
      ],
    },
    jp: {
      list: [
        {
          id: '1',
          title: 'MOCAP',
          image: {
            url: 'https://picsum.photos/id/123/300/300',
            width: 300,
            height: 300,
          },
        },
        {
          id: '2',
          title: 'MOCAP',
          image: {
            url: 'https://picsum.photos/id/123/300/300',
            width: 300,
            height: 300,
          },
        },
        {
          id: '3',
          title: 'MOCAP',
          image: {
            url: 'https://picsum.photos/id/123/300/300',
            width: 300,
            height: 300,
          },
        },
        {
          id: '4',
          title: 'MOCAP',
          image: {
            url: 'https://picsum.photos/id/123/300/300',
            width: 300,
            height: 300,
          },
        },
        {
          id: '5',
          title: 'MOCAP',
          image: {
            url: 'https://picsum.photos/id/123/300/300',
            width: 300,
            height: 300,
          },
        },
        {
          id: '6',
          title: 'MOCAP',
          image: {
            url: 'https://picsum.photos/id/123/300/300',
            width: 300,
            height: 300,
          },
        },
      ],
    },
  })
}
