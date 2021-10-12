export default function handler(req, res) {
  res.status(200).json({
    en: {
      intro: `
      <p>The only constant in this world is constant change. Just like the essence of animation, every beautiful minute and second accumulates wonderful frame by <frame className="" /></p>
      <p>
      In the future, we will not only watch animated images in front of TV or in movie theaters, but also experience the touch of animation brought to us through handheld devices, VR devices, or in interactive exhibitions.
      </p>
      <p>Animation not only shows the bright future imagined, but also inspires us to create a future beyond imagination.</p>
      <p> We change the view you see You’ll change the view of world.</p>
      <p>
      We have the most complete image creative team in the industry. From creativity to production, production to logistics, complete and diversified integrated services next animation use animation to predict the future.
      </p>`,
    },
    cn: {
      intro: `
      <p>這世界唯一不變的，就是不斷的改變。就像動畫的本質一樣，每個美好的分秒，都積累著逐幀的精彩。</p>
      <p>
        在未來，我們不僅僅會是在電視前、電影院中觀看動畫影像甚至還會透過手持裝置、VR裝置、或是置身於互動展覽來體驗動畫所帶給我們的感動。
      </p>
      <p>動畫不但展示著想像中美好的未來也啟發著我們創造更超乎想像的未來。</p>
      <p> We change the view you see You’ll change the view of world.</p>
      <p>
        我們擁有業界最完整的影像創意團隊從創意到製片、製作再到後勤完整而多元的整合服務next animation
        用動畫，預見未來。
      </p>`,
    },
    jp: {
      intro: `
      <p>この世界で唯一一定しているのは絶え間ない変化です。 アニメーションの本質と同じように、美しい分と秒ごとに素晴らしいフレームごとに蓄積されます。</p>
      <p>
      将来的には、テレビの前や映画館でアニメーションを見るだけでなく、ハンドヘルドデバイスやVRデバイス、インタラクティブな展示会などでアニメーションの感触を体験することもできます。
      </p>
      <p>アニメーションは、想像された明るい未来を示すだけでなく、想像を超えた未来を創造するように私たちを鼓舞します。</p>
      <p> We change the view you see You’ll change the view of world.</p>
      <p>
      業界で最も完全な画像クリエイティブチームがあります。創造性から制作、制作からロジスティクス、完全で多様な統合サービスの次のアニメーションまで
      アニメーションを使用して未来を予測します。
      </p>`,
    },
    video: 'https://www.youtube.com/embed/ZbwBVWnonzA',
    team: [
      {
        id: '1',
        department: 'DEVELOP',
        member: [
          {
            id: '1',
            name: 'bochinG young',
            title: 'ceo',
            type: '#fff000',
            image: {
              url: 'https://picsum.photos/id/31/300/300',
              width: 300,
              height: 300,
            },
          },
          {
            id: '2',
            name: 'bochinG young',
            title: 'ceo',
            type: '#fff000',
            image: {
              url: 'https://picsum.photos/id/31/300/300',
              width: 300,
              height: 300,
            },
          },
          {
            id: '3',
            name: 'bochinG young',
            title: 'ceo',
            type: '#fff000',
            image: {
              url: 'https://picsum.photos/id/31/300/300',
              width: 300,
              height: 300,
            },
          },
        ],
      },
      {
        id: '2',
        department: 'CREATIVE',
        member: [
          {
            id: '1',
            name: 'bochinG young',
            title: 'ceo',
            type: '#fff000',
            image: {
              url: 'https://picsum.photos/id/31/300/300',
              width: 300,
              height: 300,
            },
          },
          {
            id: '2',
            name: 'bochinG young',
            title: 'ceo',
            type: '#fff000',
            image: {
              url: 'https://picsum.photos/id/31/300/300',
              width: 300,
              height: 300,
            },
          },
        ],
      },
    ],
    client: [
      {
        id: '1',
        image: {
          url: 'https://picsum.photos/id/101/300/120',
          width: 300,
          height: 120,
        },
      },
      {
        id: '2',
        image: {
          url: 'https://picsum.photos/id/101/140/120',
          width: 140,
          height: 120,
        },
      },
      {
        id: '3',
        image: {
          url: 'https://picsum.photos/id/101/340/120',
          width: 340,
          height: 120,
        },
      },
      {
        id: '4',
        image: {
          url: 'https://picsum.photos/id/101/200/120',
          width: 200,
          height: 120,
        },
      },
      {
        id: '5',
        image: {
          url: 'https://picsum.photos/id/101/240/120',
          width: 240,
          height: 120,
        },
      },
      {
        id: '6',
        image: {
          url: 'https://picsum.photos/id/101/340/120',
          width: 340,
          height: 120,
        },
      },
      {
        id: '7',
        image: {
          url: 'https://picsum.photos/id/101/200/120',
          width: 200,
          height: 120,
        },
      },
    ],
  })
}
