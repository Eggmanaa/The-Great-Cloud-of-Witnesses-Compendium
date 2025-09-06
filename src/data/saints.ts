export interface Saint {
  id: string;
  name: string;
  title: string;
  knownFor: string;
  feastDay: string;
  lifespan: string;
  patronOf: string;
  shortBio: string;
  fullBio: string;
  miracles: string[];
  imageUrl: string;
  orderByDate: number; // For chronological ordering
}

export const saints: Saint[] = [
  {
    id: "st-agnes",
    name: "St. Agnes",
    title: "Virgin and Martyr",
    knownFor: "Virgin-Martyr of the Early Church",
    feastDay: "January 21",
    lifespan: "c. 291-304",
    patronOf: "Chastity, Young Girls, Rape Survivors",
    shortBio: "A young Roman virgin who consecrated herself to Christ and suffered martyrdom at age 13 during the Diocletian persecution. Her unwavering faith and purity made her one of the most celebrated virgin-martyrs.",
    fullBio: `St. Agnes was a member of Roman nobility who consecrated her virginity to Christ at a young age. During the Diocletian persecution, she refused all suitors, declaring herself the bride of Christ. When exposed in a brothel as punishment, her hair miraculously grew to cover her body, and those who attempted to violate her were struck blind or dead.

She was condemned to be burned at the stake, but the flames would not touch her. Finally, she was beheaded at the age of 13. Her death inspired many Roman maidens to consecrate themselves to Christ. St. Ambrose and St. Augustine wrote extensively about her courage and purity.

Agnes appeared to the Emperor Constantine's daughter, curing her of leprosy, which led to the construction of a basilica in her honor. Her name is mentioned in the Roman Canon of the Mass, and two lambs are blessed each year on her feast day to provide wool for the pallia of archbishops.`,
    miracles: [
      "Hair miraculously grew to preserve her modesty when exposed",
      "Those who attempted to violate her were struck blind or dead",
      "Flames refused to burn her at the stake",
      "Posthumously cured Emperor Constantine's daughter of leprosy"
    ],
    imageUrl: "https://page.gensparksite.com/v1/base64_upload/0d767881d312ac1fba21d3b64f2a2121",
    orderByDate: 304
  },
  {
    id: "st-anthony-padua",
    name: "St. Anthony of Padua",
    title: "Doctor of the Church",
    knownFor: "Preacher, Theologian, 'Wonder-Worker'",
    feastDay: "June 13",
    lifespan: "1195-1231",
    patronOf: "Lost Articles, The Poor, Travelers",
    shortBio: "A Franciscan friar known as the 'Hammer of Heretics' for his powerful preaching and deep scriptural knowledge. Famous for miracles and helping people find lost items.",
    fullBio: `Born Fernando Martins de Bulhões in Lisbon, Portugal, to a noble family, St. Anthony initially joined the Augustinian Canons. After witnessing the relics of Franciscan martyrs, he joined the Franciscan Order, taking the name Anthony.

His attempt to achieve martyrdom in Morocco was thwarted by illness. Returning to Europe, his ship was blown off course to Sicily. At an ordination ceremony in Forlì, when no one was prepared to preach, Anthony delivered such an eloquent sermon that it launched his public ministry.

St. Francis himself appointed Anthony as the first teacher of theology to the friars. His preaching was so powerful that shops would close and people would camp overnight to hear him. He earned the title "Hammer of Heretics" for his effectiveness in combating heresy through preaching.

Anthony died at age 36 in Padua and was canonized less than a year later - one of the fastest canonizations in history. Pope Pius XII declared him a Doctor of the Church in 1946.`,
    miracles: [
      "Sermon to the Fish - When people refused to listen, fish gathered to hear him preach",
      "Miracle of the Mule - A mule knelt before the Eucharist, converting a heretic",
      "Reattached a severed foot through prayer",
      "His tongue was found incorrupt 30 years after death"
    ],
    imageUrl: "https://page.gensparksite.com/v1/base64_upload/a5c6a0206450a3701c75709b73e16469",
    orderByDate: 1231
  },
  {
    id: "st-francis-assisi",
    name: "St. Francis of Assisi",
    title: "Founder of the Franciscan Order",
    knownFor: "Radical Poverty, Love for Creation, Stigmatist",
    feastDay: "October 4",
    lifespan: "c. 1181-1226",
    patronOf: "Animals, Ecology, Italy",
    shortBio: "The son of a wealthy merchant who renounced everything to follow Christ in absolute poverty. Founded the Franciscan Orders and received the stigmata, becoming the 'Mirror of Christ.'",
    fullBio: `Born Giovanni di Pietro Bernardone to a wealthy cloth merchant in Assisi, Francis lived a carefree youth filled with luxury and dreams of knighthood. Captured in battle and imprisoned in Perugia, he began to reconsider his life.

After a vision at San Damiano where Christ told him to "rebuild My church," Francis began physically repairing churches. His dramatic public renunciation of his father and inheritance marked his complete conversion. He embraced "Lady Poverty" and began attracting followers.

In 1209, he received papal approval for his new religious order. Francis created the first Christmas nativity scene in Greccio and composed the Canticle of the Sun. His profound love for all creation made him speak to animals as brothers and sisters.

In 1224, while in prayer on Mount La Verna, he received the stigmata - the wounds of Christ - becoming the first recorded person to bear these marks. He died in 1226 at the Portiuncula, the little chapel he had restored.`,
    miracles: [
      "Received the stigmata - the five wounds of Christ",
      "Tamed the Wolf of Gubbio through peaceful negotiation",
      "Preached to the birds who listened attentively",
      "Multiplied food for his friars",
      "Appeared in visions to save ships from storms"
    ],
    imageUrl: "https://page.gensparksite.com/v1/base64_upload/9820802aca447fe4412f2ede2e238c58",
    orderByDate: 1226
  },
  {
    id: "st-catherine-siena",
    name: "St. Catherine of Siena",
    title: "Doctor of the Church",
    knownFor: "Mystic, Political Influencer, Stigmatist",
    feastDay: "April 29",
    lifespan: "1347-1380",
    patronOf: "Italy, Europe, Nurses, Fire Prevention",
    shortBio: "A Dominican tertiary who experienced profound mystical visions, received invisible stigmata, and convinced Pope Gregory XI to return the papacy from Avignon to Rome.",
    fullBio: `Born Caterina di Giacomo di Benincasa in Siena as the 23rd of 25 children, Catherine experienced her first vision of Christ at age six. She consecrated her virginity to Christ at seven and joined the Dominican Third Order at sixteen.

After three years of seclusion, Christ appeared to her, telling her to enter public life. She began caring for the sick and poor, attracting followers called "Caterinati." Her mystical experiences included a mystical marriage to Christ and receiving invisible stigmata in 1375.

Catherine played a crucial role in Church history by convincing Pope Gregory XI to return the papacy from Avignon to Rome in 1377, ending the "Babylonian Captivity." She worked tirelessly for Church reform and unity during the Western Schism.

Her spiritual writings, especially "The Dialogue," reveal profound theological insights. She died at 33, exhausted from her penances and efforts for the Church. She was declared a Doctor of the Church in 1970 by Pope Paul VI.`,
    miracles: [
      "Received invisible stigmata visible only to herself",
      "Experienced mystical marriage to Christ",
      "Multiplied food during famine",
      "Healed countless sick through prayer",
      "Levitated during prayer",
      "Converted hardened criminals through conversation"
    ],
    imageUrl: "https://page.gensparksite.com/v1/base64_upload/c54cbc5e131aa154768fb86686cfc647",
    orderByDate: 1380
  },
  {
    id: "st-ignatius-loyola",
    name: "St. Ignatius of Loyola",
    title: "Founder of the Society of Jesus",
    knownFor: "Spiritual Exercises, Jesuit Order, Education",
    feastDay: "July 31",
    lifespan: "1491-1556",
    patronOf: "Soldiers, Spiritual Retreats, Education",
    shortBio: "A Spanish soldier whose conversion after battle injury led him to found the Society of Jesus (Jesuits). His Spiritual Exercises revolutionized Catholic spirituality and education.",
    fullBio: `Born Íñigo López de Loyola to Basque nobility, Ignatius pursued military glory until a cannonball shattered his leg at the Battle of Pamplona in 1521. During his long convalescence, reading about Christ and the saints transformed his life.

After recovery, he spent a year in prayer at Manresa, where he experienced profound mystical insights that became the foundation for his Spiritual Exercises. He studied theology in Paris, where he gathered his first companions, including St. Francis Xavier.

In 1540, Pope Paul III approved the Society of Jesus, with Ignatius as its first Superior General. The Jesuits became known for their educational work, missionary zeal, and role in the Counter-Reformation. They established schools, colleges, and missions worldwide.

Ignatius spent his final years in Rome, directing the rapidly growing order and refining its constitutions. His motto "Ad Maiorem Dei Gloriam" (For the Greater Glory of God) continues to inspire Jesuit work in education, social justice, and evangelization.`,
    miracles: [
      "Experienced visions of the Trinity and Christ during prayer",
      "Levitated during Mass celebration",
      "Healed the sick through prayer",
      "Multiplied bread for the poor",
      "Appeared to missionaries in visions after death"
    ],
    imageUrl: "https://page.gensparksite.com/v1/base64_upload/ad58dac60a57144a63e61f50984e678f",
    orderByDate: 1556
  },
  {
    id: "st-teresa-avila",
    name: "St. Teresa of Ávila",
    title: "Doctor of the Church",
    knownFor: "Carmelite Reformer, Mystic, Spiritual Writer",
    feastDay: "October 15",
    lifespan: "1515-1582",
    patronOf: "Spain, Headaches, Those in Religious Orders",
    shortBio: "A Spanish Carmelite nun who reformed her order and experienced extraordinary mystical visions. Her writings on prayer and the spiritual life made her the first woman Doctor of the Church.",
    fullBio: `Born Teresa Sánchez de Cepeda y Ahumada to a noble Spanish family, she entered the Carmelite Monastery of the Incarnation at 20. After years of struggle with prayer and illness, she experienced a profound conversion at age 39.

Teresa began experiencing increasingly intense mystical experiences, including visions, locutions, and levitations. Her most famous vision, the Transverberation, involved an angel piercing her heart with a golden spear, leaving her inflamed with divine love.

Recognizing the need for reform, she founded the Discalced Carmelites, establishing 17 reformed convents despite fierce opposition. She collaborated with St. John of the Cross to reform the male branch of the order.

Her spiritual writings, including "The Interior Castle" and "The Way of Perfection," are masterpieces of mystical literature. She described the soul's journey to God through seven mansions, providing practical guidance for contemplative prayer. She died in 1582 and was declared a Doctor of the Church in 1970.`,
    miracles: [
      "Experienced the Transverberation - heart pierced by angel's spear",
      "Levitated frequently during prayer",
      "Experienced mystical marriage to Christ",
      "Bilocated to help distant convents",
      "Her body remains incorrupt",
      "Fragrant oil flows from her relics"
    ],
    imageUrl: "https://page.gensparksite.com/v1/base64_upload/75c4fb81624b71c06a1e5d2f6065b040",
    orderByDate: 1582
  },
  {
    id: "our-lady-guadalupe",
    name: "Our Lady of Guadalupe",
    title: "Queen of the Americas",
    knownFor: "Marian Apparition, Evangelization of the Americas",
    feastDay: "December 12",
    lifespan: "Apparition in 1531",
    patronOf: "The Americas, Mexico, The Unborn",
    shortBio: "The Virgin Mary appeared to St. Juan Diego in 1531, leaving her miraculous image on his tilma. This apparition led to the conversion of millions and became the most powerful religious symbol of the Americas.",
    fullBio: `In December 1531, just ten years after the Spanish conquest of the Aztec Empire, the Virgin Mary appeared to Juan Diego, an indigenous convert, on Tepeyac Hill outside Mexico City. Speaking in his native Nahuatl, she requested a church be built on the site.

The bishop initially doubted Juan Diego's account and requested a sign. On December 12, the Virgin sent Juan Diego to gather roses from the barren hilltop. When he opened his tilma (cloak) before the bishop, the roses fell out, revealing the miraculous image of Our Lady imprinted on the fabric.

The image is a theological and cultural masterpiece, blending Christian and Aztec symbolism. She appears as a mestiza (mixed race), standing on the moon (conquering Aztec moon god), surrounded by the sun (greater than sun god), with stars matching the constellation of December 12, 1531.

The tilma, made of cactus fiber that should deteriorate within 30 years, has survived nearly 500 years. Scientific studies find no explanation for the image's properties. Within seven years of the apparition, nine million indigenous people converted to Christianity.`,
    miracles: [
      "Miraculous image appeared on Juan Diego's tilma",
      "Tilma has survived 500 years despite fragile material",
      "Image has no brush strokes or undersketch",
      "Eyes reflect multiple figures with properties of human eyes",
      "Survived acid spill and bomb explosion unharmed",
      "Stars on mantle match constellation of December 12, 1531"
    ],
    imageUrl: "https://page.gensparksite.com/v1/base64_upload/57d7dfe4deddfa9a1400ea88918d1f62",
    orderByDate: 1531
  },
  {
    id: "st-padre-pio",
    name: "St. Padre Pio",
    title: "Stigmatist of San Giovanni Rotondo",
    knownFor: "Stigmatist, Mystic, Confessor",
    feastDay: "September 23",
    lifespan: "1887-1968",
    patronOf: "Civil Defense Volunteers, Adolescents",
    shortBio: "A Capuchin friar who bore the visible wounds of Christ for 50 years. Known for his marathon confessions, bilocation, reading of souls, and founding a major hospital.",
    fullBio: `Born Francesco Forgione in Pietrelcina, Italy, Padre Pio entered the Capuchin novitiate at 15. From childhood, he experienced visions of Jesus, Mary, and his guardian angel, which he thought were normal for everyone.

On September 20, 1918, while praying after Mass, he received the visible stigmata - the five wounds of Christ - which remained on his body for 50 years, bleeding continuously and causing constant pain. He was the first priest to bear these visible marks.

His confessional became a pilgrimage destination, where he spent up to 16 hours daily hearing confessions. He could read souls, telling penitents their sins before they spoke, and refused absolution to the unrepentant. Many reported miraculous conversions after confession with him.

Padre Pio founded the Casa Sollievo della Sofferenza (Home for Relief of Suffering), one of the world's most advanced hospitals. He formed prayer groups worldwide and emphasized the importance of the Rosary. He died in 1968, and his stigmata disappeared, leaving no trace.`,
    miracles: [
      "Bore the stigmata for 50 years",
      "Bilocated to assist people worldwide",
      "Read souls and knew sins before confession",
      "Prophesied future events accurately",
      "Healed countless people through prayer",
      "Appeared to pilots during WWII, preventing bombing of his monastery"
    ],
    imageUrl: "https://page.gensparksite.com/v1/base64_upload/6d3d3a21f825f4381cd308071b8fc65f",
    orderByDate: 1968
  },
  {
    id: "st-gabriel-archangel",
    name: "St. Gabriel the Archangel",
    title: "Messenger of God",
    knownFor: "Divine Messenger of the Incarnation",
    feastDay: "September 29",
    lifespan: "N/A (Angelic Being)",
    patronOf: "Messengers, Telecommunications Workers, Postal Workers",
    shortBio: "One of the three named archangels in Scripture, Gabriel is God's chief messenger who announced the Incarnation to Mary and appeared to Daniel, Zechariah, and Joseph.",
    fullBio: `St. Gabriel is one of the three archangels named in Scripture (along with Michael and Raphael). His name means "God is my strength" or "Strength of God." As God's chief messenger, Gabriel plays a pivotal role in salvation history.

In the Old Testament, Gabriel appears to the prophet Daniel to explain his visions about the coming of the Messiah. He is described as having the appearance of a man but moving with supernatural speed and power.

Gabriel's most significant role comes in the New Testament. He appears to Zechariah to announce the birth of John the Baptist, striking him mute when he doubts. Six months later, Gabriel appears to the Virgin Mary in Nazareth, announcing that she would conceive the Son of God through the Holy Spirit - the Annunciation.

Church tradition also attributes to Gabriel the appearance to St. Joseph in dreams, the announcement to the shepherds of Christ's birth, and the strengthening of Jesus in the Garden of Gethsemane. He is often depicted with a lily (symbol of the Annunciation) or a trumpet (for the Last Judgment).`,
    miracles: [
      "Announced the Incarnation to the Virgin Mary",
      "Revealed prophecies to Daniel about the Messiah",
      "Announced John the Baptist's birth to Zechariah",
      "Appeared to St. Joseph in dreams",
      "Strengthened Jesus in Gethsemane (tradition)",
      "Will blow the trumpet at the Last Judgment (tradition)"
    ],
    imageUrl: "https://page.gensparksite.com/v1/base64_upload/3028d2154ab0f8be4c4abd8ff3f9edc1",
    orderByDate: 0 // Angelic being, no earthly date
  },
  {
    id: "st-carlo-acutis",
    name: "St. Carlo Acutis",
    title: "The Cyber-Apostle of the Eucharist",
    knownFor: "First Millennial Saint, Computer Programming, Eucharistic Devotion",
    feastDay: "October 12",
    lifespan: "1991-2006",
    patronOf: "Youth, Computer Programmers, Internet Users",
    shortBio: "A teenage computer genius who used technology to spread devotion to the Eucharist. The first millennial to be canonized, he shows that holiness is possible in the digital age.",
    fullBio: `Born in London to wealthy Italian parents, Carlo Acutis moved to Milan as an infant. Despite his parents' minimal faith practice, Carlo developed an intense personal devotion from early childhood, inspiring his family's conversion.

Carlo was a normal teenager who enjoyed video games, soccer, and computers, but he disciplined himself, limiting PlayStation to one hour weekly as penance. He attended daily Mass, calling the Eucharist his "highway to heaven."

Considered a computer genius, Carlo saw the internet as a tool for evangelization. At age 14, he spent two and a half years creating a website cataloging Eucharistic miracles worldwide. This project became an international exhibition traveling to thousands of parishes.

Carlo defended bullied classmates, especially those with disabilities, and used his money to help the homeless. He faced his diagnosis of acute leukemia with remarkable faith, offering his sufferings for the Pope and Church. He died at 15, saying he wanted to go "straight to heaven."

His body, displayed in jeans and sneakers in Assisi, attracts young pilgrims worldwide. He will be canonized in 2025, becoming the first millennial saint.`,
    miracles: [
      "Healing of Matheus Vianna from rare pancreatic disease",
      "Healing of Valeria Valverde from severe brain injury",
      "Inspired numerous conversions through his witness",
      "His Eucharistic miracles website continues evangelizing posthumously",
      "Multiple reported healings through his intercession"
    ],
    imageUrl: "https://page.gensparksite.com/v1/base64_upload/5e60a61d61c01cf649e9baef66c50204",
    orderByDate: 2006
  }
];

// Helper function to get saints sorted by date
export function getSaintsSortedByDate(): Saint[] {
  return [...saints].sort((a, b) => {
    // Gabriel (angelic being) goes first
    if (a.orderByDate === 0) return -1;
    if (b.orderByDate === 0) return 1;
    return a.orderByDate - b.orderByDate;
  });
}