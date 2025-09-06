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
  },
  {
    id: "st-augustine-hippo",
    name: "St. Augustine of Hippo",
    title: "Doctor of the Church, Father of the Church",
    knownFor: "Doctor of Grace, Theologian, Philosopher",
    feastDay: "August 28",
    lifespan: "354-430",
    patronOf: "Brewers, Theologians, Printers, Augustinians",
    shortBio: "A brilliant theologian and philosopher who converted from Manichaeism to Christianity. His Confessions and City of God shaped Western Christianity for over a millennium.",
    fullBio: `Born Aurelius Augustinus in North Africa to Monica (Christian) and Patricius (pagan), Augustine embodied the cultural tensions of the late Roman Empire. His brilliant intellect led him to study rhetoric in Carthage, where he embraced Manichaeism and lived with a concubine, fathering a son, Adeodatus.

His restless spiritual journey took him to Rome and Milan, where he served as imperial professor of rhetoric. The eloquent sermons of St. Ambrose and his study of Neoplatonic philosophy gradually undermined his Manichaean beliefs. His dramatic conversion in 387, following the famous "Tolle, lege" ("Take up and read") moment in a Milan garden, led to his baptism by Ambrose.

Returning to North Africa to live monastically, Augustine was acclaimed by the people of Hippo and reluctantly ordained priest (391) and later bishop (c. 395). He spent the rest of his life in this bustling port city, serving as pastor, judge, and administrator while producing a vast body of theological works.

His major writings include the Confessions (the first spiritual autobiography), The City of God (a theological interpretation of history), and On Christian Doctrine (foundations of biblical interpretation). He died in 430 as the Vandals besieged Hippo, leaving a legacy that profoundly shaped Western thought.`,
    miracles: [
      "Healing of a blind man through relics at Milan",
      "Cured siblings Paul and Palladia of tremors at St. Stephen's shrine",
      "Numerous healing miracles documented in The City of God",
      "Posthumous miracles at his tomb and through his intercession"
    ],
    imageUrl: "https://page.gensparksite.com/v1/base64_upload/d4aae9d9354b14d83842b99705bb34cc",
    orderByDate: 430
  },
  {
    id: "st-patrick-ireland",
    name: "St. Patrick",
    title: "Apostle of Ireland, Bishop",
    knownFor: "Evangelization of Ireland, Missionary",
    feastDay: "March 17",
    lifespan: "c. 385-461",
    patronOf: "Ireland, Engineers, Nigeria, Excluded People",
    shortBio: "The patron saint of Ireland who was captured as a slave, escaped, and returned as a bishop to evangelize the Irish people, using the shamrock to explain the Trinity.",
    fullBio: `Born in Roman Britain to a Christian family, Patrick was captured by Irish raiders at age 16 and sold into slavery in Ireland. During six years of captivity as a shepherd, his faith deepened through constant prayer. In a dream, he was told to escape, and he successfully fled to Britain.

After his escape, Patrick experienced another vision in which he heard "the voice of the Irish" calling him to return and preach the Gospel to them. He studied for the priesthood and was eventually consecrated as a bishop with the mission to Ireland around 432.

Patrick's missionary work was extraordinarily successful. He traveled throughout Ireland, baptizing thousands, ordaining priests, and establishing monasteries and churches. He challenged the druids, confronted kings, and used indigenous customs and symbols to explain Christian doctrine—most famously using the three-leaved shamrock to explain the Trinity.

His missionary methods were revolutionary for the time. Rather than simply replacing pagan practices, he adapted and Christianized them where possible. He lit the Easter fire on the Hill of Slane in defiance of pagan customs, yet incorporated Celtic traditions into Christian worship. Patrick's work laid the foundation for Ireland's golden age of monasticism and scholarship.`,
    miracles: [
      "Lit the paschal fire that wouldn't extinguish despite druid opposition",
      "Banished snakes from Ireland (symbolic of paganism)",
      "Raised the dead to settle a legal dispute",
      "Caused a well to spring forth for baptisms",
      "Appeared to many after death to guide and protect Ireland"
    ],
    imageUrl: "https://page.gensparksite.com/v1/base64_upload/50c468d6b036dc95bc9aa7682967ded4",
    orderByDate: 461
  },
  {
    id: "st-hildegard-bingen",
    name: "St. Hildegard von Bingen",
    title: "Doctor of the Church, Sibyl of the Rhine",
    knownFor: "Mystic, Composer, Natural Scientist, Visionary",
    feastDay: "September 17",
    lifespan: "1098-1179",
    patronOf: "Musicians, Writers, Artists, Ecology, Creativity",
    shortBio: "A Benedictine abbess who was a polymath—mystic, composer, philosopher, physician, and visionary. Her works spanned theology, music, medicine, and natural history.",
    fullBio: `Born the tenth child to a noble family in the Rhine valley, Hildegard was dedicated to the Church as a "tithe" child and enclosed at age eight under the care of Jutta of Sponheim at Disibodenberg monastery. She had experienced divine visions since age three but kept them private for years.

When Jutta died in 1136, Hildegard was elected prioress. In 1141, at age 42, she received a powerful vision commanding her to "write down what you see and hear." With papal approval from Pope Eugenius III, she began recording her complex cosmic visions in Scivias ("Know the Ways of the Lord").

As her community grew, Hildegard founded her own abbey at Rupertsberg near Bingen around 1150. She proved to be a gifted administrator and fearless reformer, corresponding with popes, emperors, and bishops. She embarked on unprecedented preaching tours, calling for clerical reform and speaking against corruption.

Hildegard was a true polymath whose integrated worldview saw no division between science and spirituality. She composed more surviving chants than any other medieval composer, wrote the first morality play (Ordo Virtutum), and authored comprehensive works on medicine and natural history. Her concept of viriditas ("greening power") described the divine life-force flowing through all creation.`,
    miracles: [
      "Received continuous divine visions throughout her life",
      "Prophesied future events with remarkable accuracy",
      "Miraculous light appeared over her grave after death",
      "Numerous healings reported at her tomb",
      "Her body remained incorrupt for centuries"
    ],
    imageUrl: "https://page.gensparksite.com/v1/base64_upload/cfb8e2599fe07a2cdd7a9ac297251d1f",
    orderByDate: 1179
  },
  {
    id: "st-thomas-aquinas",
    name: "St. Thomas Aquinas",
    title: "Doctor of the Church, Angelic Doctor",
    knownFor: "Scholastic Theology, Summa Theologiae, Philosopher",
    feastDay: "January 28",
    lifespan: "c. 1225-1274",
    patronOf: "Students, Schools, Universities, Theologians, Philosophers",
    shortBio: "The greatest theologian of the Middle Ages who synthesized Aristotelian philosophy with Christian doctrine. His Summa Theologiae remains the foundation of Catholic theology.",
    fullBio: `Born to the noble Aquino family in southern Italy, Thomas was sent to the University of Naples where he encountered the newly established Dominican Order. Despite fierce family opposition—his brothers even imprisoned him for a year—Thomas remained committed to his Dominican vocation.

He studied under the great Albert the Great in Paris and Cologne, earning his doctorate and beginning his teaching career. Thomas was initially mocked by fellow students as the "Dumb Ox" due to his large size and quiet demeanor, but Albert prophetically declared that "this ox will fill the world with his bellowing."

Thomas's greatest achievement was the synthesis of Aristotelian philosophy with Christian theology, particularly in his masterwork, the Summa Theologiae. This systematic exposition of Catholic doctrine addressed virtually every theological question, from the nature of God to ethics and sacraments. He also wrote the Summa contra Gentiles, biblical commentaries, and numerous other works.

His method was revolutionary: he fairly presented opposing viewpoints before offering his own reasoned solutions. Thomas believed that reason and faith were complementary paths to truth. His work became so central to Catholic theology that Pope Leo XIII declared it the official philosophy of the Catholic Church in 1879.`,
    miracles: [
      "Received divine revelations while writing the Summa Theologiae",
      "Christ spoke to him from a crucifix, affirming his writings",
      "Levitated while celebrating Mass",
      "Multiplied food for the poor during a famine",
      "Appeared to students after death to resolve theological questions"
    ],
    imageUrl: "https://page.gensparksite.com/v1/base64_upload/b084fb7a77562af74a1ec6a07a30c23a",
    orderByDate: 1274
  },
  {
    id: "st-catherine-siena-mystic",
    name: "St. Catherine of Siena",
    title: "Doctor of the Church, Mystic and Diplomat",
    knownFor: "Mystic, Stigmatist, Papal Advisor, Church Reformer",
    feastDay: "April 29",
    lifespan: "1347-1380",
    patronOf: "Europe, Italy, Nurses, Fire Prevention, Politicians",
    shortBio: "A Dominican tertiary who experienced profound mystical visions and convinced Pope Gregory XI to return the papacy from Avignon to Rome, ending the 'Babylonian Captivity.'",
    fullBio: `Born the 24th of 25 children to a middle-class wool dyer in Siena, Catherine experienced her first vision of Christ at age six. She consecrated her virginity to Christ at seven and later joined the Dominican Third Order (Mantellate) at sixteen, living an austere life of prayer and penance in her family home.

After three years of seclusion, Christ commanded her to enter public life. She began ministering to the sick and poor, attracting a diverse group of followers called her "bella brigata" (beautiful brigade). Despite being illiterate, she became a powerful spiritual director and political advisor, dictating hundreds of letters to popes, kings, and nobles.

Catherine's most significant political achievement was convincing Pope Gregory XI to return the papacy from Avignon to Rome in 1377, ending nearly 70 years of "Babylonian Captivity." She fearlessly traveled to Avignon and through passionate letters and personal appeals, persuaded the wavering pontiff to restore the papal seat to Rome.

Her mystical life was extraordinary—she received invisible stigmata in 1375, experienced mystical marriage to Christ, and had her heart replaced by Christ's in a vision. Her theological masterpiece, The Dialogue, reveals profound insights into the spiritual life and God's mercy. She died in Rome at age 33, exhausted by her penances and efforts for Church unity.`,
    miracles: [
      "Received invisible stigmata visible only to herself",
      "Experienced mystical marriage to Christ with invisible ring",
      "Heart mystically replaced with Christ's heart",
      "Multiplied food during times of famine",
      "Converted hardened criminals through conversation",
      "Levitated during intense prayer"
    ],
    imageUrl: "https://page.gensparksite.com/v1/base64_upload/e64abde14b3451293db32ef11c6086ce",
    orderByDate: 1380
  },
  {
    id: "st-joan-arc",
    name: "St. Joan of Arc",
    title: "The Maid of Orléans, Martyr",
    knownFor: "Military Leader, Visionary, Martyr, Patron of France",
    feastDay: "May 30",
    lifespan: "c. 1412-1431",
    patronOf: "France, Soldiers, Prisoners, Martyrs, Women in Military",
    shortBio: "A peasant girl who claimed divine visions commanding her to crown the Dauphin and drive the English from France. She led French forces to victory before being martyred at age 19.",
    fullBio: `Born to a tenant farmer family in Domrémy during the Hundred Years' War, Joan was a pious but illiterate peasant girl living in a war-torn France largely occupied by the English. At about age 13, she began experiencing visions of St. Michael, St. Catherine, and St. Margaret, who commanded her to free France and ensure the coronation of the Dauphin Charles as king.

At age 16, Joan convinced local authorities to escort her to the Dauphin's court at Chinon. Despite being disguised among courtiers, she immediately identified Charles and convinced him of her divine mission after a private conversation. After theological examination cleared her of heresy, Charles gave her armor, a banner, and command of French forces.

Joan's military career was meteoric. In March 1429, she relieved the besieged city of Orléans, turning the tide of the war. Her presence inspired French troops and demoralized the English, who believed she was a witch. She won several more victories and enabled Charles VII's coronation at Reims Cathedral in July 1429, fulfilling the first part of her mission.

Captured by Burgundian allies of the English in 1430, Joan was sold to the English and tried for heresy and witchcraft by an ecclesiastical court. The trial was a political sham designed to discredit her and by extension, Charles VII's legitimacy. She was condemned for wearing men's clothing and claiming direct revelation from God, and was burned at the stake in Rouen on May 30, 1431, at age 19.`,
    miracles: [
      "Identified the disguised Dauphin Charles among his courtiers",
      "Prophesied her wounding at Orléans",
      "Found an ancient sword buried behind the altar at Sainte-Catherine-de-Fierbois",
      "Inspired French troops to impossible victories",
      "Her ashes were thrown into the Seine but reportedly would not sink"
    ],
    imageUrl: "https://page.gensparksite.com/v1/base64_upload/05d385b7933554838318c44b996e3e89",
    orderByDate: 1431
  },
  {
    id: "st-ignatius-loyola-founder",
    name: "St. Ignatius of Loyola",
    title: "Founder of the Society of Jesus",
    knownFor: "Spiritual Exercises, Jesuit Order, Counter-Reformation",
    feastDay: "July 31",
    lifespan: "1491-1556",
    patronOf: "Soldiers, Spiritual Retreats, Jesuits, Education",
    shortBio: "A Spanish soldier whose conversion after a battle wound led him to found the Society of Jesus. His Spiritual Exercises revolutionized Catholic spirituality and retreat work.",
    fullBio: `Born Íñigo López de Loyola to Basque nobility, Ignatius initially pursued military glory and courtly life. His transformation began in 1521 when a cannonball shattered his leg at the Battle of Pamplona. During his long convalescence, the only books available were lives of Christ and the saints, which gradually converted his heart from worldly to spiritual ambitions.

After recovery, Ignatius spent a year in prayer and penance at Manresa, where he experienced profound mystical insights that became the foundation of his Spiritual Exercises. These experiences taught him to discern God's will through attention to interior movements of consolation and desolation.

He studied theology in Paris, where he gathered his first companions, including St. Francis Xavier. Together they formed the Society of Jesus, approved by Pope Paul III in 1540. The Jesuits became known for their rigorous education, missionary zeal, and defense of papal authority during the Counter-Reformation.

As Superior General, Ignatius directed the rapidly expanding order from Rome, sending missionaries to India, Japan, Brazil, and other parts of the world. The Jesuits established schools and colleges worldwide, developing an educational system that emphasized both intellectual excellence and character formation. Ignatius spent his final years refining the Jesuit constitutions and directing the order's global mission until his death in 1556.`,
    miracles: [
      "Experienced profound visions of the Trinity at La Storta",
      "Levitated during Mass celebrations",
      "Healed numerous people through prayer and blessing",
      "Multiplied bread for the poor in Rome",
      "Appeared to Jesuit missionaries in visions after death"
    ],
    imageUrl: "https://page.gensparksite.com/v1/base64_upload/ba26a5b8318d5d23993bb55edb9ee901",
    orderByDate: 1556
  },
  {
    id: "st-teresa-avila-mystic",
    name: "St. Teresa of Ávila",
    title: "Doctor of the Church, Carmelite Reformer",
    knownFor: "Mystical Theology, Interior Castle, Carmelite Reform",
    feastDay: "October 15",
    lifespan: "1515-1582",
    patronOf: "Spain, Headache Sufferers, Those in Religious Life",
    shortBio: "A Spanish Carmelite nun who reformed her order and wrote masterpieces of mystical theology. The first woman declared a Doctor of the Church.",
    fullBio: `Born Teresa Sánchez de Cepeda y Ahumada to a noble Castilian family, she entered the Carmelite Monastery of the Incarnation in Ávila at age 20. For nearly two decades, she struggled with illness and tepid spiritual practice in a relaxed monastic environment that allowed extensive social interaction.

At age 39, Teresa experienced a profound conversion while praying before an image of the wounded Christ. This marked the beginning of increasingly intense mystical experiences, including visions, locutions, and levitations. Her most famous vision, the Transverberation, involved an angel piercing her heart with a golden spear, leaving her inflamed with divine love.

Recognizing the need for reform, Teresa founded the first Discalced (barefoot) Carmelite convent of St. Joseph in Ávila in 1562, returning to the primitive rule of poverty, enclosure, and contemplation. Despite fierce opposition from civil and religious authorities, she established 17 reformed convents throughout Spain, traveling constantly despite poor health.

Teresa collaborated with St. John of the Cross to reform the male branch of Carmelites. Her spiritual writings, particularly "The Interior Castle" and "The Way of Perfection," are masterpieces of mystical literature that describe the soul's journey to God through seven mansions, providing practical guidance for contemplative prayer. She was declared the first female Doctor of the Church in 1970.`,
    miracles: [
      "Experienced the Transverberation - angel piercing her heart with divine love",
      "Frequent levitations during prayer witnessed by many",
      "Experienced mystical marriage to Christ",
      "Bilocated to help distant convents in need",
      "Her body remains incorrupt after death",
      "Sweet fragrance emanates from her relics"
    ],
    imageUrl: "https://page.gensparksite.com/v1/base64_upload/2231434db5cb7323d196bd4221d31480",
    orderByDate: 1582
  },
  {
    id: "st-therese-lisieux",
    name: "St. Thérèse of Lisieux",
    title: "Doctor of the Church, The Little Flower",
    knownFor: "Little Way of Spiritual Childhood, Autobiography",
    feastDay: "October 1",
    lifespan: "1873-1897",
    patronOf: "Missions, Missionaries, France, Florists, Tuberculosis Patients",
    shortBio: "A French Carmelite nun who developed the 'Little Way' of spiritual childhood. Despite dying at 24, she became one of the most beloved saints through her autobiography.",
    fullBio: `Born Marie-Françoise-Thérèse Martin to a deeply religious middle-class family in Alençon, France, Thérèse experienced early loss when her mother died of breast cancer when she was four. The family moved to Lisieux, where she was raised by her father and older sisters, four of whom would eventually enter religious life.

Thérèse felt called to religious life from childhood but faced obstacles due to her young age. At 14, she experienced a Christmas conversion that transformed her from a sensitive, self-centered child into someone focused on others. After obtaining papal permission during a pilgrimage to Rome, she entered the Carmelite convent in Lisieux at age 15.

As a Carmelite, Thérèse embraced what she called the "Little Way" - a path to holiness through childlike trust, simplicity, and abandonment to God's mercy rather than through extraordinary penances or mystical experiences. She believed that sanctity was accessible to all through small acts of love and surrender to divine providence.

Thérèse contracted tuberculosis and died at age 24, but not before her superior ordered her to write her spiritual autobiography, "Story of a Soul." This work, along with her letters and poems, revealed a profound spiritual doctrine that emphasized God's merciful love and the universal call to holiness. She promised to spend her heaven doing good on earth, and the numerous miracles attributed to her intercession led to her rapid canonization in 1925.`,
    miracles: [
      "Shower of roses that fell during her profession ceremony",
      "Numerous miraculous cures attributed to her intercession after death",
      "Appeared in visions to many seeking her help",
      "Protected Lisieux during World War II bombings",
      "Miraculous preservation of her autobiography manuscript",
      "Inspired countless vocations through her 'Little Way'"
    ],
    imageUrl: "https://page.gensparksite.com/v1/base64_upload/3f6f332083232f690c24f1386970e306",
    orderByDate: 1897
  },
  {
    id: "st-maximilian-kolbe-martyr",
    name: "St. Maximilian Kolbe",
    title: "Martyr of Charity, Apostle of the Immaculate",
    knownFor: "Concentration Camp Martyr, Marian Devotion, Self-Sacrifice",
    feastDay: "August 14",
    lifespan: "1894-1941",
    patronOf: "Drug Addicts, Prisoners, Families, Pro-Life Movement, Journalists",
    shortBio: "A Polish Franciscan priest who volunteered to die in place of a condemned prisoner in Auschwitz. Known for his heroic charity and devotion to the Immaculate Virgin Mary.",
    fullBio: `Born Raymund Kolbe in Poland, he experienced a life-changing Marian vision at age 10 when the Virgin Mary offered him two crowns—white for purity and red for martyrdom—which he accepted both. At 13, he and his brother joined the Conventual Franciscans, where he took the name Maximilian and was ordained a priest in 1918.

Maximilian earned doctorates in philosophy and theology in Rome, where he founded the Militia Immaculata (Army of the Immaculate One) in 1917 to promote conversion through Mary's intercession. Returning to Poland, he established the monthly magazine "Knight of the Immaculate" and founded Niepokalanów, a large monastery that became a major Catholic publishing center.

He also established missions in Japan and India, demonstrating remarkable missionary zeal and organizational ability. His Japanese foundation thrived and continues today. When World War II began, he returned to Poland for health reasons and remained at Niepokalanów, converting it into a temporary hospital and shelter.

After refusing German citizenship and sheltering refugees (including an estimated 2,000 Jews), Maximilian was arrested by the Gestapo in February 1941 and sent to Auschwitz. In July 1941, when prisoners were selected to die by starvation as punishment for an escape, Maximilian volunteered to take the place of Franciszek Gajowniczek, a married man with children. After two weeks of starvation, he was killed by lethal injection on August 14, 1941. He was canonized by Pope John Paul II in 1982.`,
    miracles: [
      "Vision of the Virgin Mary offering crowns of purity and martyrdom",
      "Rapid growth of Niepokalanów and worldwide Marian movement",
      "Survived initial attempts on his life in the concentration camp",
      "Led prayers and maintained hope during the starvation bunker",
      "Posthumous healings and conversions through his intercession",
      "Inspired worldwide devotion to the Immaculate Virgin Mary"
    ],
    imageUrl: "https://page.gensparksite.com/v1/base64_upload/72323679317687927f8df1bb1ab44056",
    orderByDate: 1941
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