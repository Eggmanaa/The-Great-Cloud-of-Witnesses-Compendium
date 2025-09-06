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
    imageUrl: "https://page.gensparksite.com/v1/base64_upload/4d0338933992558c191f5a4d884ac516",
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
    id: "st-monica-mother",
    name: "St. Monica",
    title: "Mother of St. Augustine, Patron of Mothers",
    knownFor: "Persistent Prayer, Mother of Augustine, Patience",
    feastDay: "August 27",
    lifespan: "c. 331-387",
    patronOf: "Mothers, Married Women, Difficult Marriages, Abuse Victims",
    shortBio: "The mother of St. Augustine whose persistent prayers and tears over 30 years led to her son's dramatic conversion. A model of patience and faith for Christian mothers.",
    fullBio: `Born in North Africa to a Christian family, Monica was given in marriage to Patricius, a pagan man of violent temper. Despite his infidelity and harsh treatment, she won him over through her gentle patience and prayer, leading to his conversion and baptism shortly before his death.

Monica's greatest trial was her brilliant son Augustine, who abandoned Christianity for Manichaeism and lived a dissolute life. For over 17 years, she followed him with her prayers and tears - from North Africa to Rome to Milan. When Augustine tried to escape her influence by sailing to Rome, she arrived at the port too late, spending the night in prayer at a nearby chapel.

Her persistence was legendary. When a bishop grew weary of her constant pleas to debate her son and convert him, he famously told her, "Go your way; as sure as you live, it is impossible that the son of such tears should perish." Her prayers were answered in 387 when Augustine was baptized by St. Ambrose in Milan.

Monica died later that year at Ostia while preparing to return to Africa with Augustine. She told him, "Nothing is far from God, and I do not fear that He will not know where to find me at the resurrection." Her feast day is celebrated the day before Augustine's, honoring the mother whose faith made possible one of Christianity's greatest theologians.`,
    miracles: [
      "Converted her violent pagan husband through patient prayer",
      "Her 30 years of tears and prayers led to Augustine's conversion",
      "Received a vision promising Augustine's eventual conversion",
      "Prophesied her own death at Ostia",
      "Countless conversions inspired by her example of maternal persistence"
    ],
    imageUrl: "https://page.gensparksite.com/v1/base64_upload/e64abde14b3451293db32ef11c6086ce",
    orderByDate: 387
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
    imageUrl: "https://page.gensparksite.com/v1/base64_upload/266aff4969e512854a8bf5600f02cba9",
    orderByDate: 1431
  },
  {
    id: "st-francis-xavier-missionary",
    name: "St. Francis Xavier",
    title: "Apostle of the Indies and Japan",
    knownFor: "Great Missionary, Co-founder of Jesuits, Far East Evangelist",
    feastDay: "December 3",
    lifespan: "1506-1552",
    patronOf: "Missions, Missionaries, India, Japan, China, East Indies",
    shortBio: "A Spanish Jesuit missionary who evangelized vast territories in Asia, baptizing hundreds of thousands. One of the greatest Christian missionaries after St. Paul.",
    fullBio: `Born Francisco de Jasso y Azpilicueta in the Kingdom of Navarre, Francis Xavier met Ignatius of Loyola while studying at the University of Paris. Initially resistant to Ignatius's spiritual influence, he was gradually won over by the famous question, "What does it profit a man to gain the whole world and lose his soul?"

Francis became one of the founding members of the Society of Jesus in 1540. When King John III of Portugal requested missionaries for the Portuguese colonies in the East, Francis volunteered and set sail for India in 1541, never to return to Europe.

His missionary journeys were extraordinary in scope and success. He worked among the pearl fishers of southern India, where he baptized entire villages. He traveled to Ceylon (Sri Lanka), Malacca, the Molucca Islands (Spice Islands), and in 1549 became the first Christian missionary to Japan, where he spent over two years establishing the foundation of Japanese Christianity.

Francis adapted his methods to local cultures, learning languages and customs. He translated Christian prayers and doctrine into local languages and trained native clergy. His letters describe baptizing so many people that his arms ached from the repetitive motion. He is credited with over 300,000 baptisms during his missionary career.

Francis died in 1552 on Shangchuan Island off the coast of China, within sight of his goal to evangelize the Chinese Empire. His body was found incorrupt when exhumed months later, and miracles were reported at his tomb.`,
    miracles: [
      "Raised the dead on multiple occasions during his missions",
      "Spoke in tongues, understood by people of different languages",
      "Calmed storms at sea through prayer",
      "His crucifix fell into the sea and was returned by a crab",
      "Body remained incorrupt after death",
      "Miraculous healings at his tomb and through his relics"
    ],
    imageUrl: "https://page.gensparksite.com/v1/base64_upload/ba26a5b8318d5d23993bb55edb9ee901",
    orderByDate: 1552
  },
  {
    id: "st-john-cross-mystic",
    name: "St. John of the Cross",
    title: "Doctor of the Church, Mystic of the Dark Night",
    knownFor: "Dark Night of the Soul, Carmelite Reformer, Mystical Poetry",
    feastDay: "December 14",
    lifespan: "1542-1591",
    patronOf: "Mystics, Contemplatives, Spanish Poets, Carmelites",
    shortBio: "A Spanish Carmelite friar and mystic who collaborated with St. Teresa of Ávila in reforming the Carmelite Order. His spiritual writings on the 'Dark Night of the Soul' are classics of mystical theology.",
    fullBio: `Born Juan de Yepes y Álvarez in Fontiveros, Castile, John experienced poverty from childhood after his father died young. He worked in a hospital while studying with the Jesuits, then joined the Carmelites in 1563, taking the name John of St. Matthias.

After ordination in 1567, John met St. Teresa of Ávila, who convinced him to join her reform of the Carmelite Order rather than become a Carthusian hermit. He became the first friar of the Discalced Carmelites, taking the name John of the Cross, and established the first reformed monastery for men.

The reform movement faced fierce opposition from the unreformed Carmelites. In 1577, John was kidnapped and imprisoned in Toledo for nine months in a tiny cell where he could barely stand. During this brutal captivity, he composed some of his greatest mystical poetry, including verses of his masterwork "The Dark Night of the Soul."

After his escape, John continued the reform work, founding monasteries and serving as spiritual director. His major works - "The Ascent of Mount Carmel," "The Dark Night of the Soul," "The Spiritual Canticle," and "The Living Flame of Love" - describe the soul's journey to union with God through purification and love.

John's doctrine of the "dark night" describes the passive purifications God works in the soul, where apparent spiritual dryness actually leads to deeper union with the Divine. He died in 1591 and was declared a Doctor of the Church in 1926.`,
    miracles: [
      "Composed mystical poetry during imprisonment through divine inspiration",
      "Experienced profound mystical unions described in his writings",
      "Prophetic visions about the future of the Carmelite reform",
      "Levitation witnessed during intense prayer",
      "Appeared in visions to guide souls in the mystical life",
      "His writings continue to guide countless souls to mystical union"
    ],
    imageUrl: "https://page.gensparksite.com/v1/base64_upload/2231434db5cb7323d196bd4221d31480",
    orderByDate: 1591
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
    imageUrl: "https://page.gensparksite.com/v1/base64_upload/47c79eca1ad4365b3d257a21a1f6695f",
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
  },
  {
    id: "st-cecilia-virgin-martyr",
    name: "St. Cecilia",
    title: "Virgin and Martyr, Patron of Musicians",
    knownFor: "Patron Saint of Music, Virgin Martyr of Rome",
    feastDay: "November 22",
    lifespan: "c. 200-230",
    patronOf: "Musicians, Music, Organ Builders, Poets, Singers",
    shortBio: "A noble Roman virgin who converted her husband and brother-in-law to Christianity. She is venerated as the patron saint of musicians for 'singing in her heart' to God during her wedding.",
    fullBio: `According to the 5th-century Acts of St. Cecilia, she was born into a noble Roman family and from childhood had vowed her virginity to God. Against her will, she was given in marriage to a young pagan nobleman named Valerian.

On their wedding night, Cecilia told Valerian that an angel of God watched over her and would punish him if he violated her vow of virginity. Valerian asked to see the angel, and Cecilia replied that he could only see the angel if he were baptized. After his baptism by Pope Urban I, Valerian returned to find Cecilia in prayer with the angel beside her, who placed crowns of roses and lilies on both their heads.

Cecilia then converted Valerian's brother Tiburtius to Christianity. Both brothers dedicated themselves to burying the bodies of martyred Christians, until they were arrested and executed by the prefect Almachius. Cecilia was subsequently arrested and ordered to sacrifice to the Roman gods. When she refused, Almachius condemned her to death.

The executioners attempted to suffocate her in her own bathroom by lighting fires and sealing the room, but she survived unharmed. They then tried to behead her, but after three blows she was still alive, lingering for three days before dying. During this time, she continued to preach and distribute her possessions to the poor.

In 821, Pope Paschal I discovered her incorrupt body in the Catacomb of St. Praetextatus and translated her remains to the Church of Santa Cecilia in Trastevere, where they remain today.`,
    miracles: [
      "Survived being suffocated by fire and steam in her bathroom",
      "Lived for three days after partial beheading, continuing to preach",
      "Her body was found incorrupt in 821, nearly 600 years after her death",
      "Converted her husband and brother-in-law through her witness",
      "Angels appeared to place crowns on her and Valerian's heads",
      "Countless conversions through her intercession and example"
    ],
    imageUrl: "https://page.gensparksite.com/v1/base64_upload/cfb8e2599fe07a2cdd7a9ac297251d1f",
    orderByDate: 230
  },
  {
    id: "st-vincent-de-paul-charity",
    name: "St. Vincent de Paul",
    title: "Apostle of Charity, Father of the Poor",
    knownFor: "Champion of the Poor, Founder of Charitable Organizations",
    feastDay: "September 27",
    lifespan: "1581-1660",
    patronOf: "Charitable Societies, Hospitals, Volunteers, Madagascar",
    shortBio: "A French priest known as the 'Apostle of Charity' who revolutionized care for the poor and founded the Vincentians and Daughters of Charity. His name is synonymous with charitable work worldwide.",
    fullBio: `Born to a peasant family in Pouy, Gascony, Vincent was ordained a priest at the unusually young age of 19 in 1600. After completing his studies at the University of Toulouse, he allegedly was captured by Barbary pirates and spent two years as a slave before escaping and making his way to Rome and then Paris.

In Paris, Vincent came under the spiritual direction of Cardinal Pierre de Bérulle and was appointed to the parish of Clichy. His conversion from a career-focused young priest to a servant of the poor began around 1617 during his service as tutor to the Gondi family. Moved by the spiritual neglect of peasants on their estates, he began preaching missions in rural areas.

This experience led Vincent to found the Congregation of the Mission (Vincentians/Lazarists) in 1625, dedicated to evangelizing the rural poor and training clergy for parish ministry. The congregation emphasized practical charity alongside spiritual care, revolutionizing seminary education and pastoral formation.

Working with St. Louise de Marillac, Vincent cofounded the Daughters of Charity in 1633, the first non-cloistered religious community of women devoted to active service. These sisters worked directly with the poor, sick, and abandoned rather than living in enclosed convents.

Vincent organized the Ladies of Charity, wealthy women who funded and personally served in hospitals, orphanages, and institutions for foundlings. His systematic approach to charity included visiting homes, providing medical care, education, and spiritual formation. He ransomed over 1,200 Christian slaves from North Africa and organized relief efforts during wars and famines.

His influence extended to court, where he served as confessor to Queen Anne of Austria and advisor on ecclesiastical matters. He opposed Jansenism and worked for reform within the Church. Vincent died in 1660, leaving behind a vast network of charitable institutions that continues worldwide today.`,
    miracles: [
      "Numerous miraculous cures through his prayers and relics",
      "Multiplied food for the poor during times of famine",
      "Prophetic insights about people's spiritual conditions",
      "Appeared in visions to guide the development of his congregations",
      "Miraculous knowledge of distant events and hidden sins",
      "His charitable works continue to multiply globally through his spiritual sons and daughters"
    ],
    imageUrl: "https://page.gensparksite.com/v1/base64_upload/3f6f332083232f690c24f1386970e306",
    orderByDate: 1660
  },
  {
    id: "st-john-bosco-youth",
    name: "St. John Bosco",
    title: "Don Bosco, Father and Teacher of Youth",
    knownFor: "Educator of Youth, Founder of Salesians, Preventive System",
    feastDay: "January 31",
    lifespan: "1815-1888",
    patronOf: "Youth, Apprentices, Editors, Publishers, Magicians, Students",
    shortBio: "An Italian priest who devoted his life to educating poor and abandoned youth. He founded the Salesian religious order and developed the 'Preventive System' of education based on reason, religion, and loving-kindness.",
    fullBio: `Born Giovanni Melchior Bosco during a time of drought and famine near Turin, John lost his father at age two and was raised in poverty by his devoted mother, Margaret. Despite their hardships, she instilled in him a deep faith and love for learning.

As a boy, John taught himself acrobatics and magic tricks after seeing a traveling circus. He would gather other children, perform for them, and end each show with prayers or moral instruction - an early sign of his calling to reach youth through joy and attraction rather than fear.

Determined to become a priest despite his family's poverty, John worked various jobs while pursuing his education. He came under the guidance of Fr. Joseph Cafasso, who introduced him to the spirituality of St. Francis de Sales and prepared him for ordination in 1841.

In Turin's industrial boom, John witnessed the plight of young people who came from rural areas seeking work but found themselves homeless and exploited. Starting with just one boy in 1841, he began gathering street children in borrowed spaces, providing them with education, religious instruction, recreation, and job training.

His approach, called the 'Preventive System,' was revolutionary. Instead of punishment after wrongdoing, he emphasized prevention through reason, religion, and loving-kindness (amorevolezza). He created an atmosphere where young people felt loved and valued, making discipline unnecessary.

By 1847, John's work had grown into a large institution featuring schools, workshops for learning trades, and a church. In 1859, he founded the Society of St. Francis de Sales (Salesians) with 22 companions to continue this mission. In 1872, with St. Mary Mazzarello, he cofounded the Daughters of Our Lady Help of Christians (Salesian Sisters) for girls.

John was also a gifted writer and publisher, producing educational and spiritual books for young people and adults. His congregation spread throughout Europe and to South America during his lifetime. He died in 1888, having transformed the lives of thousands of young people and established a worldwide movement of education and youth ministry.`,
    miracles: [
      "Prophetic dreams that guided major decisions throughout his life",
      "Multiplication of food to feed hundreds of hungry boys",
      "Predicted the deaths of several individuals and his own death",
      "Healing of the sick through his prayers and blessing",
      "Appeared in dreams and visions to guide his spiritual sons and daughters",
      "The mysterious 'Grey One' (protective dog) that appeared when he was in danger",
      "Bilocation reported by witnesses who saw him in multiple places simultaneously"
    ],
    imageUrl: "https://page.gensparksite.com/v1/base64_upload/05d385b7933554838318c44b996e3e89",
    orderByDate: 1888
  },
  {
    id: "st-josephine-bakhita",
    name: "St. Josephine Bakhita",
    title: "Our Mother Moretta, Slave of Christ",
    knownFor: "From Slavery to Sainthood, Religious Sister",
    feastDay: "February 8",
    lifespan: "c. 1869-1947",
    patronOf: "Sudan, Victims of Human Trafficking, Slavery Survivors",
    shortBio: "A Sudanese-Italian Canossian religious sister who was enslaved as a child but found freedom and faith in Italy. Her remarkable journey from brutal captivity to religious consecration made her a powerful witness to God's transforming love.",
    fullBio: `Born in Darfur, Sudan, around 1869, Bakhita (meaning "fortunate") was given this name by her captors after being kidnapped at age seven. She forgot her birth name due to the trauma. Over the next twelve years, she was bought and sold multiple times, experiencing brutal treatment that left her with 114 scars from torture.

In 1883, she was purchased by the Italian consul Callisto Legnani, who treated her kindly. When he returned to Italy in 1885, she insisted on going with him. She was given to the Michieli family and became nanny to their daughter. When the family moved to Sudan, Bakhita and the child were left with the Canossian Sisters in Venice.

It was with the sisters that Bakhita first learned about God. She later wrote, "Seeing the sun, the moon and the stars, I said to myself: Who could be the Master of these beautiful things? And I felt a great desire to see him, to know him and to pay him homage."

On January 9, 1890, she was baptized and confirmed, taking the name Josephine. When the Michieli family returned to claim her, she refused to leave. The case went to court, which ruled that since slavery was illegal in Italy, she had always been free. She chose to remain with the Canossian Sisters and received the religious habit in 1896.

For the next 42 years, she worked as a cook, sacristan, and portress at the convent in Schio. She was known for her gentleness, charismatic voice, and constant smile. Her holiness and story spread, and she became known as "Madre Moretta" (our Black Mother).

During World War II, the people of Schio credited her prayers for protecting the town from bombing. She died on February 8, 1947, with her last words being "Our Lady! Our Lady!" She was canonized by Pope John Paul II in 2000, becoming the first person from Sudan to be canonized.`,
    miracles: [
      "Protected the town of Schio from bombing during WWII through her prayers",
      "Miraculous healing of Eva da Costa in Brazil from diabetic ulcers",
      "Healing of a woman with knee arthrosis after praying for Bakhita's intercession",
      "Numerous conversions through her gentle witness and story",
      "Prophetic knowledge of people's spiritual needs"
    ],
    imageUrl: "https://page.gensparksite.com/v1/base64_upload/088e5ae7dcb8367a0ede197310b218f3",
    orderByDate: 1947
  },
  {
    id: "st-benedict-nursia",
    name: "St. Benedict of Nursia",
    title: "Father of Western Monasticism",
    knownFor: "Founder of Benedictine Order, Rule of St. Benedict",
    feastDay: "July 11",
    lifespan: "c. 480-547",
    patronOf: "Europe, Monks, Students, Farmers, Engineers",
    shortBio: "The founder of Western monasticism who established the Benedictine Order and wrote the Rule of St. Benedict. His balanced approach to religious life through prayer and work ('Ora et Labora') shaped European civilization.",
    fullBio: `Born in Nursia (modern Norcia) around 480 AD into a noble Roman family, Benedict was sent to Rome for his education. Disgusted by the vice and corruption he witnessed in the city, he fled to the mountains of Subiaco around 500 AD, where he lived as a hermit in a cave for three years.

His holiness attracted disciples, and he established twelve monasteries in the Subiaco area, each with twelve monks. Around 529, he moved to Monte Cassino, where he founded the famous monastery that would become the motherhouse of the Benedictine Order.

At Monte Cassino, Benedict wrote his Rule, a guide for monastic life that balanced prayer, work, and study. The Rule emphasized moderation, community life, obedience, and stability. Its wisdom and practicality made it the standard for Western monasticism. The motto "Ora et Labora" (Pray and Work) summarized the Benedictine approach.

Benedict's Rule provided for a self-sufficient community with designated times for prayer (the Divine Office), manual labor, and sacred reading (Lectio Divina). This structure preserved classical learning through the Dark Ages, as Benedictine monasteries became centers of education, agriculture, and hospitality.

Benedict performed numerous miracles during his lifetime, including raising the dead and multiplying food. He had the gift of prophecy and could read hearts. His sister, St. Scholastica, also founded a religious community nearby.

He died on March 21, 547, standing in prayer in the chapel, supported by his monks. He was buried beside his sister Scholastica. His influence on Western civilization is immeasurable, as Benedictine monasteries preserved classical knowledge, developed agriculture, and evangelized Europe.`,
    miracles: [
      "Caused water to flow from a rock through prayer",
      "Raised a young monk from the dead",
      "Multiplied bread during a famine",
      "Read the thoughts and sins of his monks",
      "Prophesied his own death and future events",
      "Made a broken sieve whole through prayer"
    ],
    imageUrl: "https://page.gensparksite.com/v1/base64_upload/da4cf32336217b555a24f662c21cd7e0",
    orderByDate: 547
  },
  {
    id: "st-josemaria-escriva",
    name: "St. Josemaría Escrivá",
    title: "Founder of Opus Dei",
    knownFor: "Universal Call to Holiness, Sanctification of Work",
    feastDay: "June 26",
    lifespan: "1902-1975",
    patronOf: "Opus Dei Members, Workers, Diabetics",
    shortBio: "A Spanish priest who founded Opus Dei, teaching that all people are called to holiness through their ordinary work and daily life. His message of finding God in everyday activities revolutionized lay spirituality.",
    fullBio: `Born in Barbastro, Spain, on January 9, 1902, Josemaría Escrivá experienced early hardship when his family's textile business failed. The death of three younger sisters deepened his spiritual sensitivity. Seeing footprints of a barefoot Carmelite in the snow, he felt called to the priesthood.

Ordained in 1925, he served in rural parishes and pursued doctoral studies in Madrid. On October 2, 1928, during a retreat, he received a divine inspiration to found Opus Dei (Work of God), an organization dedicated to helping lay people seek holiness through their ordinary work and daily duties.

The Spanish Civil War (1936-1939) brought persecution and danger. Escrivá had to flee Madrid, crossing the Pyrenees on foot to escape to the Nationalist zone. After the war, he worked tirelessly to spread Opus Dei throughout Spain and eventually worldwide.

In 1946, he moved to Rome to seek papal approval for Opus Dei. He spent the rest of his life there, guiding the organization's growth and writing extensively. His main work, "The Way," contains 999 points of spiritual advice and has been translated into dozens of languages.

Escrivá's central message was the universal call to holiness - that sanctity is not reserved for priests and religious but is accessible to all through the faithful performance of daily work and duties. He taught that professional work, when done well and offered to God, becomes a path to holiness.

He emphasized the importance of: spiritual childhood, devotion to Mary and Joseph, daily mental prayer, frequent confession and communion, and unity with the Pope. His approach combined traditional Catholic spirituality with a modern understanding of the lay apostolate.

He died suddenly on June 26, 1975, after looking at an image of Our Lady of Guadalupe. Opus Dei had spread to six continents with over 60,000 members. He was canonized by Pope John Paul II in 2002.`,
    miracles: [
      "Miraculous cure of Dr. Manuel Nevado Rey from radiodermatitis",
      "Healing of a Chilean girl from a malignant tumor",
      "Numerous spiritual conversions through his intercession",
      "Bilocation reported by witnesses",
      "Prophetic knowledge of future events",
      "Multiplication of food during times of scarcity"
    ],
    imageUrl: "https://page.gensparksite.com/v1/base64_upload/c52ecc7808981132f85d46d58217a114",
    orderByDate: 1975
  },
  {
    id: "st-michael-archangel",
    name: "St. Michael the Archangel",
    title: "Prince of the Heavenly Host",
    knownFor: "Defender Against Evil, Leader of God's Army",
    feastDay: "September 29",
    lifespan: "N/A (Angelic Being)",
    patronOf: "Police Officers, Soldiers, Paratroopers, Grocers, The Sick",
    shortBio: "The warrior archangel who leads God's army against Satan. His name means 'Who is like God?' and he is invoked for protection against evil and as the guardian of the Church.",
    fullBio: `St. Michael the Archangel is one of the three archangels mentioned by name in Scripture (along with Gabriel and Raphael). His name in Hebrew, "Mi-ka-El," means "Who is like God?" - a battle cry against the pride of Satan who sought to be like the Most High.

In the Book of Revelation, Michael is depicted as the leader of God's army in the war in heaven: "And there was war in heaven. Michael and his angels fought against the dragon, and the dragon and his angels fought back. But he was not strong enough, and they lost their place in heaven" (Revelation 12:7-8).

Michael appears several times in Scripture. In the Book of Daniel, he is called "one of the chief princes" and "the great prince who protects your people." In the Letter of Jude, he is shown disputing with the devil over the body of Moses, demonstrating his role as defender against evil.

Church tradition assigns Michael four primary offices:
1. To fight against Satan and the forces of evil
2. To rescue the souls of the faithful from the power of the enemy at the hour of death
3. To be the champion of God's people, both the Jews in the Old Testament and Christians in the New
4. To bring souls to judgment and weigh them on his scales

Throughout history, Michael has been invoked in times of danger. The famous prayer to St. Michael was composed by Pope Leo XIII after a vision of the spiritual battle between good and evil. Many churches and shrines are dedicated to him, including Mont-Saint-Michel in France and the Castel Sant'Angelo in Rome.

The Archangel Michael is often depicted in art as a warrior in armor, wielding a sword or spear, standing over or fighting a dragon or Satan. Sometimes he holds scales, representing his role in the particular judgment of souls. His appearance to various saints and at apparition sites like Garabandal demonstrates his continued role as protector of the Church.`,
    miracles: [
      "Cast Satan and rebellious angels out of heaven",
      "Appeared to stop a plague in Rome (590 AD) at Castel Sant'Angelo",
      "Apparitions at Monte Gargano, Italy (490 AD)",
      "Appeared to Joan of Arc, guiding her mission",
      "Protected the Church through various interventions throughout history",
      "Numerous healings and deliverances through his intercession"
    ],
    imageUrl: "https://page.gensparksite.com/v1/base64_upload/bafeffb5ed09489bccbfef5798bf4ce3",
    orderByDate: 0 // Angelic being, no earthly date
  },
  {
    id: "st-junipero-serra",
    name: "St. Junípero Serra",
    title: "Apostle of California",
    knownFor: "Founder of California Missions, Evangelizer",
    feastDay: "July 1",
    lifespan: "1713-1784",
    patronOf: "California, Hispanic Americans, Religious Vocations",
    shortBio: "A Spanish Franciscan friar who founded nine of the 21 California missions, bringing Christianity and European civilization to the region. Despite physical limitations, he walked thousands of miles evangelizing.",
    fullBio: `Born Miguel José Serra in Petra, Mallorca, Spain, on November 24, 1713, he was the son of humble farmers. Despite his family's poverty, his intellectual gifts were recognized, and he was able to study at the Franciscan university in Palma.

Joining the Franciscans at 16, he took the name Junípero after St. Juniper, a companion of St. Francis. Ordained in 1737, he became a renowned preacher and professor of philosophy. However, he felt called to missionary work and in 1749, at age 35, left his prestigious position to evangelize in the New World.

After a difficult voyage, he arrived in Mexico and worked among the indigenous peoples of the Sierra Gorda region for nine years. In 1767, when the Jesuits were expelled from Spanish territories, Serra was chosen to take over the missions of Baja California.

In 1769, at age 56, he joined the Portolá expedition to Alta California. Despite a chronic leg infection that caused him constant pain, he walked thousands of miles establishing missions. He founded Mission San Diego de Alcalá (1769), the first of nine missions he would personally establish along the California coast.

Serra's missionary method combined evangelization with practical education. The missions taught agriculture, crafts, and European customs alongside Christianity. He fought to protect indigenous peoples from military abuse, often conflicting with Spanish soldiers and governors.

He developed a close relationship with the Native Americans, learning their languages and defending their rights. He obtained special faculties from the Pope to confirm converts, becoming the first priest in the Americas with this privilege.

Serra's missions formed the foundation of many major California cities, including San Diego, San Francisco, and Santa Clara. He baptized over 6,000 Native Americans and confirmed 5,000.

He died at Mission San Carlos Borromeo in Carmel on August 28, 1784, and was canonized by Pope Francis in 2015, despite controversy over the impact of colonization on indigenous peoples.`,
    miracles: [
      "Miraculous healing of his leg infection allowing him to continue walking",
      "Multiplication of food supplies at the missions during shortages",
      "Healing of a Native American child from serious illness",
      "Numerous conversions through his preaching and example",
      "Protection of missions from attacks through his prayers",
      "Posthumous healings through his intercession"
    ],
    imageUrl: "https://page.gensparksite.com/v1/base64_upload/0f37beff6bcff25f16b6164e780f6407",
    orderByDate: 1784
  },
  {
    id: "st-joseph-carpenter",
    name: "St. Joseph",
    title: "Foster Father of Jesus, Spouse of Mary",
    knownFor: "Protector of the Holy Family, Model of Workers",
    feastDay: "March 19 (St. Joseph) and May 1 (St. Joseph the Worker)",
    lifespan: "1st century BC - 1st century AD",
    patronOf: "Universal Church, Fathers, Workers, Carpenters, Dying",
    shortBio: "The foster father of Jesus and spouse of the Virgin Mary. A righteous man who protected and provided for the Holy Family, he is the model of humble service and obedient faith.",
    fullBio: `St. Joseph, though mentioned sparingly in Scripture, plays a crucial role in salvation history as the foster father of Jesus Christ and the spouse of the Blessed Virgin Mary. He was of the royal lineage of David, fulfilling the messianic prophecies that the Christ would come from David's line.

The Gospels describe Joseph as a "just man" (Matthew 1:19), indicating his faithfulness to God's law and his compassionate character. When he discovered Mary was pregnant before their marriage was consummated, he planned to divorce her quietly to avoid public shame, showing his merciful nature.

His life was marked by divine interventions through dreams. An angel appeared to him in a dream to reveal that Mary's child was conceived by the Holy Spirit and that he should take her as his wife. He obeyed immediately, demonstrating perfect faith and obedience to God's will.

Joseph protected the Holy Family during their flight to Egypt to escape Herod's massacre of infants, staying there until another angelic dream told him it was safe to return. He settled in Nazareth, where he worked as a carpenter (or more broadly, a craftsman), teaching Jesus his trade.

The last mention of Joseph in Scripture is when Jesus was twelve years old at the Temple. Church tradition holds that Joseph died before Jesus began his public ministry, in the arms of Jesus and Mary - making him the patron of a happy death.

Joseph's silence in Scripture - not a single word of his is recorded - speaks to his humility and action-oriented faith. He is the model of masculine virtue: protective, providing, and self-sacrificing. His manual labor sanctified work itself, showing that holiness can be achieved through ordinary daily tasks.

Pope Pius IX declared him Patron of the Universal Church in 1870, and Pope Francis added his name to the Eucharistic Prayers. In 2020, Pope Francis declared a Year of St. Joseph, highlighting his importance for our times.`,
    miracles: [
      "Received divine messages through angelic dreams",
      "Protected the Christ Child from Herod's persecution",
      "Numerous miraculous interventions for those who invoke his aid",
      "Special assistance to the dying who call upon him",
      "Providential help in finding employment and housing",
      "Protection of families and the Church through his intercession"
    ],
    imageUrl: "https://page.gensparksite.com/v1/base64_upload/5788b1c4e024c7086c233cea8ec1823c",
    orderByDate: 30 // Approximate death date
  },
  {
    id: "st-john-paul-ii",
    name: "St. John Paul II",
    title: "Pope, The Great",
    knownFor: "First Polish Pope, World Youth Day, Fall of Communism",
    feastDay: "October 22",
    lifespan: "1920-2005",
    patronOf: "World Youth Day, Young Catholics, Families",
    shortBio: "The first Polish pope who helped end Communist rule in Europe, revolutionized the papacy through his travels, and connected with youth worldwide. His motto 'Be not afraid!' inspired millions.",
    fullBio: `Born Karol Józef Wojtyła on May 18, 1920, in Wadowice, Poland, he experienced profound loss early in life. His mother died when he was eight, his older brother when he was twelve, and his father when he was twenty. These experiences deepened his faith and reliance on the Blessed Virgin Mary.

During the Nazi occupation of Poland, he worked in a quarry and chemical factory while secretly studying for the priesthood in an underground seminary. He was ordained in 1946 and sent to Rome for doctoral studies. He earned doctorates in theology and philosophy, becoming a professor and eventually Archbishop of Kraków.

Elected Pope on October 16, 1978, at age 58, he was the first non-Italian pope in 455 years and the youngest in 132 years. He chose the name John Paul II to honor his predecessors.

His 27-year pontificate was marked by:

- Extensive Travel: He visited 129 countries, more than all previous popes combined, earning him the title "Pilgrim Pope."

- Youth Ministry: He established World Youth Day in 1985, drawing millions of young people to the faith.

- Role in Ending Communism: His support for Poland's Solidarity movement and his moral authority helped bring about the fall of the Iron Curtain.

- Theological Contributions: He wrote 14 encyclicals, including "Evangelium Vitae" (Gospel of Life) and developed the Theology of the Body.

- Ecumenical and Interfaith Outreach: He was the first pope to visit a synagogue and a mosque, and he made historic apologies for Church failures.

- Marian Devotion: His motto "Totus Tuus" (Totally Yours) expressed his dedication to Mary. He credited her with saving his life during the 1981 assassination attempt.

On May 13, 1981, he was shot in St. Peter's Square but survived, later forgiving and visiting his would-be assassin in prison. He saw Mary's hand in his survival, placing the bullet in the crown of Our Lady of Fatima.

His final years were marked by Parkinson's disease, which he bore with remarkable courage, showing the dignity of suffering. He died on April 2, 2005, and was canonized by Pope Francis in 2014.`,
    miracles: [
      "Miraculous survival of assassination attempt in 1981",
      "Healing of Sister Marie Simon-Pierre from Parkinson's disease",
      "Healing of Floribeth Mora Diaz from brain aneurysm",
      "Numerous conversions through his witness and teaching",
      "Inspired the fall of Communism in Eastern Europe",
      "Countless testimonies of graces received through his intercession"
    ],
    imageUrl: "https://page.gensparksite.com/v1/base64_upload/d64f932dcd1a5201b686401b4d2a52fe",
    orderByDate: 2005
  },
  {
    id: "st-raphael-archangel",
    name: "St. Raphael the Archangel",
    title: "Medicine of God, Divine Healer",
    knownFor: "Healer, Guide, Patron of Travelers",
    feastDay: "September 29",
    lifespan: "N/A (Angelic Being)",
    patronOf: "Travelers, Blind, Nurses, Physicians, Medical Workers, Happy Meetings",
    shortBio: "One of the three archangels named in Scripture, Raphael's name means 'God heals.' He is known for his role in the Book of Tobit as a healer and guide, and is invoked for physical and spiritual healing.",
    fullBio: `St. Raphael is one of the three archangels specifically named in Sacred Scripture, along with Michael and Gabriel. His name in Hebrew means "God heals" or "Medicine of God," reflecting his special role as the angel of healing and wholeness.

Raphael's most extensive appearance in Scripture is in the Book of Tobit, where he takes human form as "Azarias" to accompany young Tobias on a dangerous journey. Throughout this journey, Raphael:

- Protects Tobias from harm during his travels
- Teaches him how to use fish parts to create medicine that heals his father Tobit's blindness
- Helps him safely retrieve his family's money
- Arranges his marriage to Sarah, after freeing her from a demon that had killed her seven previous husbands
- Reveals his true identity only at the end, saying "I am Raphael, one of the seven angels who stand before the Lord"

In the Gospel of John, tradition identifies Raphael as the angel who stirred the waters at the Pool of Bethesda, where the sick would gather hoping for healing. This connection reinforces his role as the angel of healing.

Church tradition also associates Raphael with:

- The angel who healed Abraham after his circumcision
- The angel who gave Noah the knowledge of medicine after the flood
- One of the three angels who visited Abraham (along with Michael and Gabriel)
- The guardian of the Tree of Life in Eden

As patron of travelers, Raphael is invoked for protection during journeys, both physical and spiritual. His guidance of Tobias serves as the model for how he accompanies all who call upon him, leading them safely through life's challenges.

In art, Raphael is typically depicted as a young man in traveler's clothes, often carrying a staff and a fish (referencing the Book of Tobit). Sometimes he holds a small container of medicine or is shown with Tobias. His youthful appearance emphasizes his role as a friendly companion and guide.

Devotion to St. Raphael encourages trust in God's healing power and providence, reminding us that we are never alone on our journey through life.`,
    miracles: [
      "Healed Tobit's blindness through the fish remedy",
      "Freed Sarah from demonic oppression",
      "Protected Tobias throughout his dangerous journey",
      "Stirred the healing waters at the Pool of Bethesda (tradition)",
      "Numerous healings through his intercession",
      "Guides souls safely through life's journey"
    ],
    imageUrl: "https://page.gensparksite.com/v1/base64_upload/aab30d84f6ac50d9864c5b14dcee9eaf",
    orderByDate: 0 // Angelic being, no earthly date
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