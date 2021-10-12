export default function handler(req, res) {
  let resopnseData = {
    type: [
      {
        id: '1',
        color: '#9114f6',
        text: 'Art',
      },
      {
        id: '2',
        color: '#560dfa',
        text: 'Animation',
      },
      {
        id: '3',
        color: '#55a7ff',
        text: 'Model',
      },
      {
        id: '4',
        color: '#175eff',
        text: '3D',
      },
      {
        id: '5',
        color: '#002b8d',
        text: 'MoCap',
      },
      {
        id: '6',
        color: '#23fd98',
        text: 'VFX',
      },
      {
        id: '7',
        color: '#f9ff00',
        text: 'S&E',
      },
      {
        id: '8',
        color: '#ff6c00',
        text: 'Plan',
      },
    ],
    filter: [
      {
        id: '1',
        tag: 'all',
      },
      {
        id: '2',
        tag: 'motion',
      },
    ],
    en: {
      works: [
        {
          id: '001',
          title: 'Project-1',
          image: {
            url: 'https://picsum.photos/id/10/600/600',
            width: 600,
            height: 600,
          },
        },
        {
          id: '002',
          title: 'Project-2',
          image: {
            url: 'https://picsum.photos/id/11/600/500',
            width: 600,
            height: 500,
          },
        },
        {
          id: '003',
          title: 'Project-3',
          image: {
            url: 'https://picsum.photos/id/12/600/300',
            width: 600,
            height: 300,
          },
        },
        {
          id: '004',
          title: 'Project-4',
          image: {
            url: 'https://picsum.photos/id/13/600/500',
            width: 600,
            height: 500,
          },
        },
      ],
    },
    cn: {
      works: [
        {
          id: '001',
          title: '專案-1',
          image: {
            url: 'https://picsum.photos/id/10/600/600',
            width: 600,
            height: 600,
          },
        },
        {
          id: '002',
          title: '專案-2',
          image: {
            url: 'https://picsum.photos/id/11/600/500',
            width: 600,
            height: 500,
          },
        },
        {
          id: '003',
          title: '專案-3',
          image: {
            url: 'https://picsum.photos/id/12/600/300',
            width: 600,
            height: 300,
          },
        },
        {
          id: '004',
          title: '專案-4',
          image: {
            url: 'https://picsum.photos/id/13/600/500',
            width: 600,
            height: 500,
          },
        },
      ],
    },
    jp: {
      works: [
        {
          id: '001',
          title: '計画-1',
          image: {
            url: 'https://picsum.photos/id/10/600/600',
            width: 600,
            height: 600,
          },
        },
        {
          id: '002',
          title: '計画-2',
          image: {
            url: 'https://picsum.photos/id/11/600/500',
            width: 600,
            height: 500,
          },
        },
        {
          id: '003',
          title: '計画-3',
          image: {
            url: 'https://picsum.photos/id/12/600/300',
            width: 600,
            height: 300,
          },
        },
        {
          id: '004',
          title: '計画-4',
          image: {
            url: 'https://picsum.photos/id/13/600/500',
            width: 600,
            height: 500,
          },
        },
      ],
    },
  }
  const { type } = req.body

  // if (type === 'all') {
  //   console.log('here1', resopnseData)
  // } else {
  //   console.log('here2')
  // }

  if (type === 'all') {
    resopnseData = {
      type: [
        {
          id: '1',
          color: '#9114f6',
          text: 'Art',
        },
        {
          id: '2',
          color: '#560dfa',
          text: 'Animation',
        },
        {
          id: '3',
          color: '#55a7ff',
          text: 'Model',
        },
        {
          id: '4',
          color: '#175eff',
          text: '3D',
        },
        {
          id: '5',
          color: '#002b8d',
          text: 'MoCap',
        },
        {
          id: '6',
          color: '#23fd98',
          text: 'VFX',
        },
        {
          id: '7',
          color: '#f9ff00',
          text: 'S&E',
        },
        {
          id: '8',
          color: '#ff6c00',
          text: 'Plan',
        },
      ],
      filter: [
        {
          id: '1',
          tag: 'all',
        },
        {
          id: '2',
          tag: 'motion',
        },
      ],
      en: {
        works: [
          {
            id: '001',
            title: 'Project-1',
            image: {
              url: 'https://picsum.photos/id/10/600/600',
              width: 600,
              height: 600,
            },
          },
          {
            id: '002',
            title: 'Project-2',
            image: {
              url: 'https://picsum.photos/id/11/600/500',
              width: 600,
              height: 500,
            },
          },
          {
            id: '003',
            title: 'Project-3',
            image: {
              url: 'https://picsum.photos/id/12/600/300',
              width: 600,
              height: 300,
            },
          },
          {
            id: '004',
            title: 'Project-4',
            image: {
              url: 'https://picsum.photos/id/13/600/500',
              width: 600,
              height: 500,
            },
          },
        ],
      },
      cn: {
        works: [
          {
            id: '001',
            title: '專案-1',
            image: {
              url: 'https://picsum.photos/id/10/600/600',
              width: 600,
              height: 600,
            },
          },
          {
            id: '002',
            title: '專案-2',
            image: {
              url: 'https://picsum.photos/id/11/600/500',
              width: 600,
              height: 500,
            },
          },
          {
            id: '003',
            title: '專案-3',
            image: {
              url: 'https://picsum.photos/id/12/600/300',
              width: 600,
              height: 300,
            },
          },
          {
            id: '004',
            title: '專案-4',
            image: {
              url: 'https://picsum.photos/id/13/600/500',
              width: 600,
              height: 500,
            },
          },
        ],
      },
      jp: {
        works: [
          {
            id: '001',
            title: '計画-1',
            image: {
              url: 'https://picsum.photos/id/10/600/600',
              width: 600,
              height: 600,
            },
          },
          {
            id: '002',
            title: '計画-2',
            image: {
              url: 'https://picsum.photos/id/11/600/500',
              width: 600,
              height: 500,
            },
          },
          {
            id: '003',
            title: '計画-3',
            image: {
              url: 'https://picsum.photos/id/12/600/300',
              width: 600,
              height: 300,
            },
          },
          {
            id: '004',
            title: '計画-4',
            image: {
              url: 'https://picsum.photos/id/13/600/500',
              width: 600,
              height: 500,
            },
          },
        ],
      },
    }
  }

  if (type === 'motion') {
    resopnseData = {
      type: [
        {
          id: '1',
          color: '#9114f6',
          text: 'Art',
        },
        {
          id: '2',
          color: '#560dfa',
          text: 'Animation',
        },
        {
          id: '3',
          color: '#55a7ff',
          text: 'Model',
        },
        {
          id: '4',
          color: '#175eff',
          text: '3D',
        },
        {
          id: '5',
          color: '#002b8d',
          text: 'MoCap',
        },
        {
          id: '6',
          color: '#23fd98',
          text: 'VFX',
        },
        {
          id: '7',
          color: '#f9ff00',
          text: 'S&E',
        },
        {
          id: '8',
          color: '#ff6c00',
          text: 'Plan',
        },
      ],
      filter: [
        {
          id: '1',
          tag: 'all',
        },
        {
          id: '2',
          tag: 'motion',
        },
      ],
      en: {
        works: [
          {
            id: '001',
            title: 'Project-1',
            image: {
              url: 'https://picsum.photos/id/10/600/600',
              width: 600,
              height: 600,
            },
          },
          {
            id: '002',
            title: 'Project-2',
            image: {
              url: 'https://picsum.photos/id/11/600/500',
              width: 600,
              height: 500,
            },
          },
          {
            id: '003',
            title: 'Project-3',
            image: {
              url: 'https://picsum.photos/id/12/600/300',
              width: 600,
              height: 300,
            },
          },
        ],
      },
      cn: {
        works: [
          {
            id: '001',
            title: '專案-1',
            image: {
              url: 'https://picsum.photos/id/10/600/600',
              width: 600,
              height: 600,
            },
          },
          {
            id: '002',
            title: '專案-2',
            image: {
              url: 'https://picsum.photos/id/11/600/500',
              width: 600,
              height: 500,
            },
          },
          {
            id: '003',
            title: '專案-3',
            image: {
              url: 'https://picsum.photos/id/12/600/300',
              width: 600,
              height: 300,
            },
          },
        ],
      },
      jp: {
        works: [
          {
            id: '001',
            title: '計画-1',
            image: {
              url: 'https://picsum.photos/id/10/600/600',
              width: 600,
              height: 600,
            },
          },
          {
            id: '002',
            title: '計画-2',
            image: {
              url: 'https://picsum.photos/id/11/600/500',
              width: 600,
              height: 500,
            },
          },
          {
            id: '003',
            title: '計画-3',
            image: {
              url: 'https://picsum.photos/id/12/600/300',
              width: 600,
              height: 300,
            },
          },
        ],
      },
    }
  }

  res.status(200).json(resopnseData)
}
