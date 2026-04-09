const masterPerfumes = [
    // --- 既存の8個 ---
    { id: 0, name: 'ブルガリ プールオム', img: 'images/Bvlgari-Pour-Homme-min.png', type: 'clean', style: 'minimal', quote: '揺るぎない誠実さと清潔感。' },
    { id: 1, name: 'LV イマジナシオン', img: 'images/Imagination-min-1.png', type: 'luxury', style: 'luxury', quote: '知性を磨き上げる、至高の紅茶。' },
    { id: 2, name: 'Dior ソヴァージュ', img: 'images/dior-sauvage-min.png', type: 'power', style: 'luxury', quote: '本能を呼び覚ます、野生の気品。' },
    { id: 3, name: 'レイジーサンデーモーニング', img: 'images/replica-lazy-sunday-morning-min.png', type: 'clean', style: 'minimal', quote: '安らぎに包まれる、特別な休日。' },
    { id: 4, name: 'クリード アバントゥス', img: 'images/creed-aventus-min.jpg', type: 'power', style: 'luxury', quote: '圧倒的な成功者の余裕とカリスマ性。' },
    { id: 5, name: 'ジョーマローン イングリッシュペア', img: 'images/jomalone-english-pear-and-freesia-min.jpg', type: 'clean', style: 'minimal', quote: '洗練された果実の甘さと透明感。' },
    { id: 6, name: 'ワンダーウッド', img: 'images/wonderwood-min.png', type: 'luxury', style: 'art' , quote: '神秘的な森の奥深くを歩くような芸術性。'},
    { id: 7, name: 'エンディミオン コンサントレ', img: 'images/penhaligon-endymion-intense-min.png', type: 'luxury', style: 'art', quote: '甘く優雅な、夜を支配する紳士の香り。' },

    // --- 新規追加（CSVデータより抽出） ---
    { id: 8, name: 'Aesop タシット', img: 'images/aesop-tacit-min-2.png', type: 'clean', style: 'minimal', quote: '森林の中で深呼吸するような、バジルの爽やかさ。' },
    { id: 9, name: 'Le Labo ガイアック10', img: 'images/gaiac-10-min.png', type: 'luxury', style: 'minimal', quote: 'ウッドとムスクが溶け合う、至高の日常着。' },
   { 
    id: 10, 
    name: 'エルメス ナイルの庭', 
    img: 'images/un-jardin-sur-le-nil-min.png',
    type: 'clean', 
    style: 'minimal',
    quote: 'グレープフルーツが弾ける、水辺の静寂を纏う香り。',
    
    review_url: 'nile.html'  // ← ここをファイル名と一致させる
},
    { id: 11, name: 'Byredo ブランシュ', img: 'images/blanche-1.jpg', type: 'clean', style: 'minimal', quote: '洗いたての洗濯物のような、純粋な清潔感。' },
    { id: 12, name: 'Le Labo アナザー13', img: 'images/another-13-min.png', type: 'luxury', style: 'art', quote: '都会的で中毒性のある、硬質でクールな刺激。' },
    { id: 13, name: 'R fragrance ティーブレイク', img: 'images/r-fragrance-tea-min.jpg', type: 'clean', style: 'art', quote: '淹れたての紅茶そのもの。心安らぐリラックスタイム。' },
    { id: 14, name: 'Celine パラード', img: 'images/celine-parade-min.jpg', type: 'luxury', style: 'luxury', quote: '高級感漂う、上品で大人の色気を纏う。' }
];
