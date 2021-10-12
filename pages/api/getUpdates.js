export default function handler(req, res) {
  let responseData = {
    totalPage: 3,
    year: [
      {
        id: '1',
        text: '2021',
      },
      {
        id: '2',
        text: '2020',
      },
    ],
    en: {
      list: [
        {
          id: '001',
          date: {
            year: '2021',
            month: 'AUG',
            day: '09',
          },
          title: 'news title news title news title news title news title 1',
          image: 'https://picsum.photos/id/21/660/180',
        },
        {
          id: '002',
          date: {
            year: '2021',
            month: 'AUG',
            day: '09',
          },
          title: 'news title 2',
          image: 'https://picsum.photos/id/22/660/180',
        },
        {
          id: '003',
          date: {
            year: '2021',
            month: 'AUG',
            day: '09',
          },
          title: 'news title 3',
          image: 'https://picsum.photos/id/23/660/180',
        },
      ],
    },
    cn: {
      list: [
        {
          id: '001',
          date: {
            year: '2021',
            month: 'AUG',
            day: '09',
          },
          title: '新聞標題 1',
          image: 'https://picsum.photos/id/21/660/180',
        },
        {
          id: '002',
          date: {
            year: '2021',
            month: 'AUG',
            day: '09',
          },
          title: '新聞標題 2',
          image: 'https://picsum.photos/id/22/660/180',
        },
        {
          id: '003',
          date: {
            year: '2021',
            month: 'AUG',
            day: '09',
          },
          title: '新聞標題 3',
          image: 'https://picsum.photos/id/23/660/180',
        },
      ],
    },
    jp: {
      list: [
        {
          id: '001',
          date: {
            year: '2021',
            month: 'AUG',
            day: '09',
          },
          title: 'ニュース 1',
          image: 'https://picsum.photos/id/21/660/180',
        },
        {
          id: '002',
          date: {
            year: '2021',
            month: 'AUG',
            day: '09',
          },
          title: 'ニュース 2',
          image: 'https://picsum.photos/id/22/660/180',
        },
        {
          id: '003',
          date: {
            year: '2021',
            month: 'AUG',
            day: '09',
          },
          title: 'ニュース 3',
          image: 'https://picsum.photos/id/23/660/180',
        },
      ],
    },
  }

  const { year, page } = req.body

  if (year === '2020') {
    responseData = {
      totalPage: 1,
      year: [
        {
          id: '1',
          text: '2021',
        },
        {
          id: '2',
          text: '2020',
        },
      ],
      en: {
        list: [
          {
            id: '001',
            date: {
              year: '2020',
              month: 'AUG',
              day: '09',
            },
            title: 'news title 1',
            image: 'https://picsum.photos/id/21/660/180',
          },
          {
            id: '002',
            date: {
              year: '2020',
              month: 'AUG',
              day: '09',
            },
            title: 'news title 2',
            image: 'https://picsum.photos/id/22/660/180',
          },
          {
            id: '003',
            date: {
              year: '2020',
              month: 'AUG',
              day: '09',
            },
            title: 'news title 3',
            image: 'https://picsum.photos/id/23/660/180',
          },
        ],
      },
      cn: {
        list: [
          {
            id: '001',
            date: {
              year: '2020',
              month: 'AUG',
              day: '09',
            },
            title: '新聞標題 1',
            image: 'https://picsum.photos/id/21/660/180',
          },
          {
            id: '002',
            date: {
              year: '2020',
              month: 'AUG',
              day: '09',
            },
            title: '新聞標題 2',
            image: 'https://picsum.photos/id/22/660/180',
          },
          {
            id: '003',
            date: {
              year: '2020',
              month: 'AUG',
              day: '09',
            },
            title: '新聞標題 3',
            image: 'https://picsum.photos/id/23/660/180',
          },
        ],
      },
      jp: {
        list: [
          {
            id: '001',
            date: {
              year: '2020',
              month: 'AUG',
              day: '09',
            },
            title: 'ニュース 1',
            image: 'https://picsum.photos/id/21/660/180',
          },
          {
            id: '002',
            date: {
              year: '2020',
              month: 'AUG',
              day: '09',
            },
            title: 'ニュース 2',
            image: 'https://picsum.photos/id/22/660/180',
          },
          {
            id: '003',
            date: {
              year: '2020',
              month: 'AUG',
              day: '09',
            },
            title: 'ニュース 3',
            image: 'https://picsum.photos/id/23/660/180',
          },
        ],
      },
    }
  }

  if (year === '2021' && page === 2) {
    responseData = {
      totalPage: 3,
      year: [
        {
          id: '1',
          text: '2021',
        },
        {
          id: '2',
          text: '2020',
        },
      ],
      en: {
        list: [
          {
            id: '001',
            date: {
              year: '2021',
              month: 'AUG',
              day: '09',
            },
            title: 'news title 1',
            image: 'https://picsum.photos/id/21/660/180',
          },
          {
            id: '002',
            date: {
              year: '2021',
              month: 'AUG',
              day: '09',
            },
            title: 'news title 2',
            image: 'https://picsum.photos/id/22/660/180',
          },
          {
            id: '003',
            date: {
              year: '2021',
              month: 'AUG',
              day: '09',
            },
            title: 'news title 3',
            image: 'https://picsum.photos/id/23/660/180',
          },
          {
            id: '004',
            date: {
              year: '2021',
              month: 'AUG',
              day: '09',
            },
            title: 'news title 1',
            image: 'https://picsum.photos/id/21/660/180',
          },
          {
            id: '005',
            date: {
              year: '2021',
              month: 'AUG',
              day: '09',
            },
            title: 'news title 2',
            image: 'https://picsum.photos/id/22/660/180',
          },
          {
            id: '006',
            date: {
              year: '2021',
              month: 'AUG',
              day: '09',
            },
            title: 'news title 3',
            image: 'https://picsum.photos/id/23/660/180',
          },
        ],
      },
      cn: {
        list: [
          {
            id: '001',
            date: {
              year: '2021',
              month: 'AUG',
              day: '09',
            },
            title: '新聞標題 1',
            image: 'https://picsum.photos/id/21/660/180',
          },
          {
            id: '002',
            date: {
              year: '2021',
              month: 'AUG',
              day: '09',
            },
            title: '新聞標題 2',
            image: 'https://picsum.photos/id/22/660/180',
          },
          {
            id: '003',
            date: {
              year: '2021',
              month: 'AUG',
              day: '09',
            },
            title: '新聞標題 3',
            image: 'https://picsum.photos/id/23/660/180',
          },
          {
            id: '004',
            date: {
              year: '2021',
              month: 'AUG',
              day: '09',
            },
            title: '新聞標題 1',
            image: 'https://picsum.photos/id/21/660/180',
          },
          {
            id: '005',
            date: {
              year: '2021',
              month: 'AUG',
              day: '09',
            },
            title: '新聞標題 2',
            image: 'https://picsum.photos/id/22/660/180',
          },
          {
            id: '006',
            date: {
              year: '2021',
              month: 'AUG',
              day: '09',
            },
            title: '新聞標題 3',
            image: 'https://picsum.photos/id/23/660/180',
          },
        ],
      },
      jp: {
        list: [
          {
            id: '001',
            date: {
              year: '2021',
              month: 'AUG',
              day: '09',
            },
            title: 'ニュース 1',
            image: 'https://picsum.photos/id/21/660/180',
          },
          {
            id: '002',
            date: {
              year: '2021',
              month: 'AUG',
              day: '09',
            },
            title: 'ニュース 2',
            image: 'https://picsum.photos/id/22/660/180',
          },
          {
            id: '003',
            date: {
              year: '2021',
              month: 'AUG',
              day: '09',
            },
            title: 'ニュース 3',
            image: 'https://picsum.photos/id/23/660/180',
          },
          {
            id: '004',
            date: {
              year: '2021',
              month: 'AUG',
              day: '09',
            },
            title: 'ニュース 1',
            image: 'https://picsum.photos/id/21/660/180',
          },
          {
            id: '005',
            date: {
              year: '2021',
              month: 'AUG',
              day: '09',
            },
            title: 'ニュース 2',
            image: 'https://picsum.photos/id/22/660/180',
          },
          {
            id: '006',
            date: {
              year: '2021',
              month: 'AUG',
              day: '09',
            },
            title: 'ニュース 3',
            image: 'https://picsum.photos/id/23/660/180',
          },
        ],
      },
    }
  }

  if (year === '2021' && page === 3) {
    responseData = {
      totalPage: 3,
      year: [
        {
          id: '1',
          text: '2021',
        },
        {
          id: '2',
          text: '2020',
        },
      ],
      en: {
        list: [
          {
            id: '001',
            date: {
              year: '2021',
              month: 'AUG',
              day: '09',
            },
            title: 'news title 1',
            image: 'https://picsum.photos/id/21/660/180',
          },
          {
            id: '002',
            date: {
              year: '2021',
              month: 'AUG',
              day: '09',
            },
            title: 'news title 2',
            image: 'https://picsum.photos/id/22/660/180',
          },
          {
            id: '003',
            date: {
              year: '2021',
              month: 'AUG',
              day: '09',
            },
            title: 'news title 3',
            image: 'https://picsum.photos/id/23/660/180',
          },
          {
            id: '004',
            date: {
              year: '2021',
              month: 'AUG',
              day: '09',
            },
            title: 'news title 1',
            image: 'https://picsum.photos/id/21/660/180',
          },
          {
            id: '005',
            date: {
              year: '2021',
              month: 'AUG',
              day: '09',
            },
            title: 'news title 2',
            image: 'https://picsum.photos/id/22/660/180',
          },
          {
            id: '006',
            date: {
              year: '2021',
              month: 'AUG',
              day: '09',
            },
            title: 'news title 3',
            image: 'https://picsum.photos/id/23/660/180',
          },
          {
            id: '007',
            date: {
              year: '2021',
              month: 'AUG',
              day: '09',
            },
            title: 'news title 1',
            image: 'https://picsum.photos/id/21/660/180',
          },
          {
            id: '008',
            date: {
              year: '2021',
              month: 'AUG',
              day: '09',
            },
            title: 'news title 2',
            image: 'https://picsum.photos/id/22/660/180',
          },
          {
            id: '009',
            date: {
              year: '2021',
              month: 'AUG',
              day: '09',
            },
            title: 'news title 3',
            image: 'https://picsum.photos/id/23/660/180',
          },
        ],
      },
      cn: {
        list: [
          {
            id: '001',
            date: {
              year: '2021',
              month: 'AUG',
              day: '09',
            },
            title: '新聞標題 1',
            image: 'https://picsum.photos/id/21/660/180',
          },
          {
            id: '002',
            date: {
              year: '2021',
              month: 'AUG',
              day: '09',
            },
            title: '新聞標題 2',
            image: 'https://picsum.photos/id/22/660/180',
          },
          {
            id: '003',
            date: {
              year: '2021',
              month: 'AUG',
              day: '09',
            },
            title: '新聞標題 3',
            image: 'https://picsum.photos/id/23/660/180',
          },
          {
            id: '004',
            date: {
              year: '2021',
              month: 'AUG',
              day: '09',
            },
            title: '新聞標題 1',
            image: 'https://picsum.photos/id/21/660/180',
          },
          {
            id: '005',
            date: {
              year: '2021',
              month: 'AUG',
              day: '09',
            },
            title: '新聞標題 2',
            image: 'https://picsum.photos/id/22/660/180',
          },
          {
            id: '006',
            date: {
              year: '2021',
              month: 'AUG',
              day: '09',
            },
            title: '新聞標題 3',
            image: 'https://picsum.photos/id/23/660/180',
          },
          {
            id: '007',
            date: {
              year: '2021',
              month: 'AUG',
              day: '09',
            },
            title: '新聞標題 1',
            image: 'https://picsum.photos/id/21/660/180',
          },
          {
            id: '008',
            date: {
              year: '2021',
              month: 'AUG',
              day: '09',
            },
            title: '新聞標題 2',
            image: 'https://picsum.photos/id/22/660/180',
          },
          {
            id: '009',
            date: {
              year: '2021',
              month: 'AUG',
              day: '09',
            },
            title: '新聞標題 3',
            image: 'https://picsum.photos/id/23/660/180',
          },
        ],
      },
      jp: {
        list: [
          {
            id: '001',
            date: {
              year: '2021',
              month: 'AUG',
              day: '09',
            },
            title: 'ニュース 1',
            image: 'https://picsum.photos/id/21/660/180',
          },
          {
            id: '002',
            date: {
              year: '2021',
              month: 'AUG',
              day: '09',
            },
            title: 'ニュース 2',
            image: 'https://picsum.photos/id/22/660/180',
          },
          {
            id: '003',
            date: {
              year: '2021',
              month: 'AUG',
              day: '09',
            },
            title: 'ニュース 3',
            image: 'https://picsum.photos/id/23/660/180',
          },
          {
            id: '004',
            date: {
              year: '2021',
              month: 'AUG',
              day: '09',
            },
            title: 'ニュース 1',
            image: 'https://picsum.photos/id/21/660/180',
          },
          {
            id: '005',
            date: {
              year: '2021',
              month: 'AUG',
              day: '09',
            },
            title: 'ニュース 2',
            image: 'https://picsum.photos/id/22/660/180',
          },
          {
            id: '006',
            date: {
              year: '2021',
              month: 'AUG',
              day: '09',
            },
            title: 'ニュース 3',
            image: 'https://picsum.photos/id/23/660/180',
          },
          {
            id: '007',
            date: {
              year: '2021',
              month: 'AUG',
              day: '09',
            },
            title: 'ニュース 1',
            image: 'https://picsum.photos/id/21/660/180',
          },
          {
            id: '008',
            date: {
              year: '2021',
              month: 'AUG',
              day: '09',
            },
            title: 'ニュース 2',
            image: 'https://picsum.photos/id/22/660/180',
          },
          {
            id: '009',
            date: {
              year: '2021',
              month: 'AUG',
              day: '09',
            },
            title: 'ニュース 3',
            image: 'https://picsum.photos/id/23/660/180',
          },
        ],
      },
    }
  }

  res.status(200).json(responseData)
}
