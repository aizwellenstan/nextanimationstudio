// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    en: {
      greeting: 'Hello',
      name: 'Marco Chen',
      tag: `<a href="https://www.apple.com/tw/"><img src="https://picsum.photos/300/300"></a>`,
    },
    cn: {
      greeting: '你好',
      name: '馬可陳!',
      tag: `<a href="https://www.apple.com/tw/"><img src="https://picsum.photos/300/300"></a>`,
    },
    jp: {
      greeting: 'こんにちは',
      name: '陳さん!',
      tag: `<a href="https://www.apple.com/tw/"><img src="https://picsum.photos/300/300"></a>`,
    },
  })
}
