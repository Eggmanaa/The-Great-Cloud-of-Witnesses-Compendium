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
    id: "st-joseph",
    name: "St. Joseph",
    title: "Foster Father of Jesus, The Just Man",
    knownFor: "Silent Guardian of the Holy Family, Patron of Workers",
    feastDay: "March 19, May 1",
    lifespan: "1st Century BC/AD",
    patronOf: "Universal Church, Fathers, Workers, Happy Death",
    shortBio: "The husband of Mary and foster father of Jesus, known for his silent obedience to God's will. A carpenter by trade, he protected and provided for the Holy Family with unwavering faith.",
    fullBio: `St. Joseph, descendant of King David, was a humble carpenter in Nazareth who was betrothed to the Virgin Mary. When he discovered Mary was pregnant, being a just man, he planned to divorce her quietly rather than expose her to shame. An angel appeared to him in a dream, revealing that the child was conceived by the Holy Spirit and commanding him to take Mary as his wife.

Joseph's life was marked by perfect obedience to God's will through angelic messages in dreams. He led the pregnant Mary to Bethlehem for the census, witnessed Jesus' birth in humble circumstances, and fled with his family to Egypt when warned of Herod's murderous intent. After Herod's death, he returned to Nazareth where he raised Jesus, teaching him his trade and instructing him in the faith.

Though no words of Joseph are recorded in Scripture, his actions speak volumes about his character. He was a man of profound faith who embraced his role as protector and provider for the Son of God. His virtues of humility, obedience, and silent service make him a model for all Christians, especially fathers and workers.

Joseph is believed to have died before Jesus began his public ministry, having the privilege of dying in the presence of Jesus and Mary - hence his patronage of a happy death.`,
    miracles: [
      "Received divine revelations through angelic dreams",
      "Protected the Holy Family through divine guidance",
      "His intercession is considered extraordinarily powerful",
      "Saints Teresa of Ávila and Padre Pio attested to efficacy of prayers to him",
      "Countless answered prayers through his intercession"
    ],
    imageUrl: "https://page.gensparksite.com/v1/base64_upload/5788b1c4e024c7086c233cea8ec1823c",
    orderByDate: 50
  },
  {
    id: "st-anne-joachim",
    name: "Sts. Anne and Joachim",
    title: "Parents of the Blessed Virgin Mary",
    knownFor: "Grandparents of Jesus, Models of Faith and Perseverance",
    feastDay: "July 26",
    lifespan: "1st Century BC",
    patronOf: "Grandparents, Mothers, Childless Couples",
    shortBio: "The parents of the Virgin Mary, whose long years of childlessness ended with the miraculous conception of Mary after persistent prayer and faith.",
    fullBio: `Saints Anne and Joachim were devout Jews living in Palestine during the first century BC. According to tradition preserved in the Protoevangelium of James, they were righteous and charitable members of their community, but suffered the deep sorrow of childlessness after twenty years of marriage - a condition often viewed as divine disfavor in their culture.

Their story centers on their unwavering faith despite this trial. When Joachim's temple offering was rejected due to his childlessness, he retreated to the desert for forty days of fasting and prayer. During this time, angels appeared to both Anne in her garden and Joachim in the wilderness, announcing that they would conceive a daughter to be named Mary.

The couple's joyful reunion at the Golden Gate of Jerusalem is traditionally viewed as the moment of Mary's Immaculate Conception. True to their vow, they brought three-year-old Mary to the Temple to dedicate her to God's service, demonstrating complete surrender of their long-awaited child to divine providence.

Anne and Joachim represent all who endure long periods of trial and unanswered prayer, showing that God's timing is perfect. Their home was the first school of the Virgin Mary, where she learned the faith and virtues that prepared her to become the Mother of God.`,
    miracles: [
      "Miraculous conception of Mary in their old age",
      "Simultaneous angelic announcements to both spouses",
      "Their meeting at the Golden Gate associated with Mary's conception",
      "Numerous miracles reported at St. Anne shrines worldwide",
      "Ongoing intercession for childless couples and families"
    ],
    imageUrl: "https://page.gensparksite.com/v1/base64_upload/190e43f9bba8a532ab5baec0ec1a55d6",
    orderByDate: 40
  },
  {
    id: "st-john-paul-ii",
    name: "St. John Paul II",
    title: "The Pilgrim Pope, Apostle of New Evangelization",
    knownFor: "Most Traveled Pope, Fall of Communism, Theology of the Body",
    feastDay: "October 22",
    lifespan: "1920-2005",
    patronOf: "World Youth Day, Families, Youth",
    shortBio: "A Polish pope who played a pivotal role in the fall of communism, traveled to 129 countries, and inspired millions with his message of human dignity and hope.",
    fullBio: `Born Karol Józef Wojtyła in Wadowice, Poland, the future Pope John Paul II experienced profound suffering early in life, losing his mother at nine, brother at twelve, and father at twenty. His youth unfolded under brutal Nazi and Soviet occupations, experiences that forged his deep empathy for human suffering and unshakeable faith in human dignity.

During World War II, he worked in a limestone quarry while secretly studying for the priesthood in an underground seminary. Ordained in 1946, he rose through Church ranks to become Archbishop of Krakow in 1964 and cardinal in 1967. On October 16, 1978, he was elected Pope - the first non-Italian in 455 years.

His pontificate transformed the papacy and the world. As 'the Pilgrim Pope,' he made 104 international trips to 129 countries, bringing the Gospel to every corner of the globe. His 1979 visit to Poland sparked the Solidarity movement and catalyzed communism's peaceful collapse across Eastern Europe.

John Paul II survived an assassination attempt in 1981, which he attributed to Our Lady of Fatima's intercession. His later forgiveness of his attacker exemplified his message of mercy. He established World Youth Day in 1985, creating a global movement that continues to inspire young Catholics worldwide.

His intellectual legacy includes 14 encyclicals and the revolutionary 'Theology of the Body,' transforming Catholic teaching on human sexuality and marriage. His long public battle with Parkinson's disease became a powerful witness to the dignity of suffering and life until natural death.`,
    miracles: [
      "Healing of Sister Marie Simon-Pierre from Parkinson's disease",
      "Healing of Floribeth Mora Díaz from terminal brain aneurysm",
      "Survived assassination attempt attributed to Our Lady of Fatima",
      "Instrumental role in peaceful fall of communism",
      "Inspired countless conversions and vocations worldwide"
    ],
    imageUrl: "https://page.gensparksite.com/v1/base64_upload/d64f932dcd1a5201b686401b4d2a52fe",
    orderByDate: 2005
  },
  {
    id: "st-josemaria-escriva",
    name: "St. Josemaria Escriva",
    title: "Founder of Opus Dei, Apostle of Ordinary Life",
    knownFor: "Universal Call to Holiness, Sanctification of Work",
    feastDay: "June 26",
    lifespan: "1902-1975",
    patronOf: "Those with Diabetes, Ordinary Life, Lay Apostolate",
    shortBio: "A Spanish priest who founded Opus Dei and taught that all people are called to holiness through their ordinary work and daily responsibilities.",
    fullBio: `Born Josemaría Escrivá y Albás in Barbastro, Spain, to a family that fell from prosperity to poverty, Josemaria experienced early hardship including the deaths of three sisters. His vocation was sparked as a teenager when he saw footprints of a barefoot Carmelite friar in the snow, prompting him to ask what God wanted of him.

Ordained a priest in 1925, he moved to Madrid where his life changed dramatically on October 2, 1928. During a spiritual retreat, he received a divine illumination in which he 'saw' Opus Dei ('Work of God') - a new path within the Church enabling ordinary men and women to seek sanctity without leaving their place in the world.

Escriva's revolutionary message was that the factory, office, home, and field are 'altars' where lay people can offer their daily work as sacrifice to God. This teaching on the universal call to holiness preceded the Second Vatican Council by decades but became central to conciliar teaching.

During the Spanish Civil War, he was forced into hiding and made a dangerous escape across the Pyrenees. After the war, Opus Dei expanded rapidly. In 1946, he moved to Rome seeking papal approval, which was granted in stages, culminating in Opus Dei's establishment as a personal prelature in 1982.

His spiritual classic 'The Way' has sold millions of copies worldwide, guiding countless people in integrating faith with everyday life. His teaching emphasizes that holiness is not reserved for clergy and religious but is the calling of every Christian.`,
    miracles: [
      "Divine illumination founding Opus Dei in 1928",
      "Healing of Carmelite nun from terminal cancer (beatification)",
      "Healing of Dr. Manuel Nevado Rey from radiodermatitis (canonization)",
      "Rapid global spread of Opus Dei and lay spirituality movement",
      "Countless conversions through his writings and teaching"
    ],
    imageUrl: "https://page.gensparksite.com/v1/base64_upload/c52ecc7808981132f85d46d58217a114",
    orderByDate: 1975
  },
  {
    id: "st-josephine-bakhita",
    name: "St. Josephine Bakhita",
    title: "The Universal Sister, Former Slave",
    knownFor: "Triumph Over Slavery, Witness to Forgiveness",
    feastDay: "February 8",
    lifespan: "c. 1869-1947",
    patronOf: "Sudan, Human Trafficking Survivors, Oppressed People",
    shortBio: "Kidnapped as a child and sold into slavery, she found freedom and faith in Italy, becoming a Canossian sister known for her joy and capacity for forgiveness.",
    fullBio: `Born around 1869 in the village of Olgossa in Sudan's Darfur region, she was a member of the Daju people whose uncle was a tribal chief. Her childhood was violently shattered when Arab slave traders kidnapped her at age seven. The trauma was so severe she forgot her birth name; her captors called her 'Bakhita,' meaning 'fortunate' or 'lucky' in Arabic.

For over a decade, she was bought and sold at least five times in the slave markets of El Obeid and Khartoum, subjected to horrific abuse and humiliation. One owner, a Turkish general, had her ritually scarred with 114 cuts filled with salt, leaving permanent scars across her body.

In 1883, Italian consul Callisto Legnani bought her, treating her with unprecedented kindness. When he returned to Italy, Bakhita begged to accompany him. In Venice, she served the Michieli family as a nanny but was left in the care of Canossian Sisters when the family traveled.

With the sisters, Bakhita first encountered Christianity and felt profound attraction to the faith. When her mistress returned to reclaim her, Bakhita refused to leave. Italian authorities declared her legally free since slavery had been outlawed in Sudan before her birth. On January 9, 1890, she was baptized as Josephine Margaret Fortunata.

Entering the Canossian Sisters in 1896, she lived quietly for 42 years as cook, seamstress, and doorkeeper in Schio, Northern Italy. Known for her radiant smile and gentleness, locals called her 'Madre Moretta' (our Black Mother). Her extraordinary capacity for forgiveness and witness to Christian hope made her beloved. She often said she would thank her kidnappers for bringing her to know Jesus.`,
    miracles: [
      "Her entire life transformation from traumatized slave to joyful religious",
      "Extraordinary capacity for forgiveness of her tormentors",
      "Legal freedom obtained through divine providence",
      "Numerous conversions inspired by her witness",
      "Ongoing intercession for trafficking victims and oppressed peoples"
    ],
    imageUrl: "https://page.gensparksite.com/v1/base64_upload/088e5ae7dcb8367a0ede197310b218f3",
    orderByDate: 1947
  },
  {
    id: "st-junipero-serra",
    name: "St. Junípero Serra",
    title: "Apostle of California, Missionary",
    knownFor: "Founder of California Missions, Evangelization of Native Americans",
    feastDay: "July 1 (USA), August 28",
    lifespan: "1713-1784",
    patronOf: "California, Vocations, Hispanic Americans",
    shortBio: "A Spanish Franciscan who founded the first nine California missions, evangelizing Native Americans despite personal suffering and chronic illness.",
    fullBio: `Born Miguel José Serra on the Spanish island of Majorca to a farming family, he joined the Franciscans at 17, taking the name Junípero after a companion of St. Francis. Intellectually gifted, he earned a doctorate in theology and became a philosophy professor.

Despite a promising academic career, Serra felt called to missionary work in the New World. In 1749, he sailed to Mexico, where an infected insect bite left him with a chronic leg ulcer that plagued him for life. He spent 18 years as a missionary among the Pame Indians in the Sierra Gorda region, learning their language, teaching agriculture, and defending their rights.

In 1767, when Jesuits were expelled from Spanish territories, Serra was appointed president of former Jesuit missions in Baja California. Two years later, he volunteered for the expedition to colonize and evangelize Alta (Upper) California to counter Russian expansion from the north.

Despite his painful leg condition requiring him to be carried on stretchers, Serra embarked on the arduous journey north. On July 1, 1769, he founded Mission San Diego de Alcalá, the first California mission. Over 15 years, he established eight more missions, traveling thousands of miles by foot and mule despite constant pain.

Serra's motto was 'Always forward, never back.' His work was characterized by immense zeal and personal austerity. He baptized over 6,000 Native Americans and confirmed 5,000. While he defended Native American rights against military abuses and created a 'Bill of Rights' for them, his methods and the mission system itself remain controversial for their impact on indigenous cultures.

He died at Mission San Carlos Borromeo in Carmel in 1784, having laid the foundation for California's development and the spread of Christianity on the Pacific Coast.`,
    miracles: [
      "Medically inexplicable healing of nun from lupus (1960) for beatification",
      "Survived dangerous missionary journeys despite chronic illness",
      "Rapid establishment of mission system across California",
      "Thousands of conversions and baptisms among Native Americans",
      "Enduring legacy of faith and culture in California"
    ],
    imageUrl: "https://page.gensparksite.com/v1/base64_upload/0f37beff6bcff25f16b6164e780f6407",
    orderByDate: 1784
  },
  {
    id: "st-raphael-archangel",
    name: "St. Raphael the Archangel",
    title: "Divine Healer, God's Medicine",
    knownFor: "Companion of Tobias, Divine Physician, Guardian of Travelers",
    feastDay: "September 29",
    lifespan: "N/A (Angelic Being)",
    patronOf: "Travelers, Blind, Medical Workers, Happy Meetings, Young People",
    shortBio: "One of the three archangels named in Scripture, Raphael is God's healing angel who guided young Tobias on his journey and healed his father's blindness.",
    fullBio: `St. Raphael is one of the three archangels specifically named in Sacred Scripture (along with Michael and Gabriel). His name means 'God heals' or 'God's medicine,' reflecting his primary role as the divine physician and healer sent by God to assist humanity.

Raphael's most significant biblical appearance is in the Book of Tobit, where he disguises himself as a human companion named Azarias to guide young Tobias on a dangerous journey. Throughout their travels, Raphael protects Tobias from harm, helps him catch a fish whose organs would later heal his father's blindness, and guides him to his future bride Sarah, freeing her from a demon that had killed her seven previous husbands.

When Raphael finally reveals his true identity, he explains that he was sent by God because of the prayers and good deeds of Tobit and Sarah. He had been presenting their prayers before God's throne and had come to heal Tobit's blindness and deliver Sarah from the demon.

In Christian tradition, Raphael is invoked as the patron of travelers, having safely guided Tobias on his journey. He is also the patron of medical workers, the blind, and those seeking healing. His intercession is sought for happy meetings, as he brought Tobias and Sarah together in marriage.

Raphael represents God's providential care for His people, showing how angels are sent to assist us in our earthly journeys. His healing ministry continues today as Christians invoke his intercession for physical, emotional, and spiritual healing. He reminds us that God's mercy and healing power are always available to those who seek Him with faith.`,
    miracles: [
      "Healed Tobit's blindness using fish gall",
      "Protected Tobias throughout his dangerous journey",
      "Freed Sarah from the demon Asmodeus",
      "Guided Tobias to his future bride",
      "Ongoing intercession for healing and safe travels",
      "Countless healing miracles attributed to his intercession"
    ],
    imageUrl: "https://page.gensparksite.com/v1/base64_upload/aab30d84f6ac50d9864c5b14dcee9eaf",
    orderByDate: 1
  },
  {
    id: "st-michael-archangel",
    name: "St. Michael the Archangel",
    title: "Prince of the Heavenly Host, Defeater of Satan",
    knownFor: "Warrior Angel, Protector, Leader of God's Army",
    feastDay: "September 29",
    lifespan: "N/A (Angelic Being)",
    patronOf: "Soldiers, Police, Paramedics, Grocers, Germany, Protector of Church",
    shortBio: "The mighty archangel who leads God's army against Satan, protects the Church, and will weigh souls at the Final Judgment.",
    fullBio: `St. Michael the Archangel is the most powerful of all angels and serves as the commander of God's heavenly army. His name means 'Who is like God?' - the battle cry he proclaimed when he defeated Satan and cast him from heaven. Throughout Scripture and Christian tradition, Michael appears as God's mighty warrior and protector of His people.

In the Old Testament, Michael is described in the Book of Daniel as 'the great prince who protects your people' and as one who stands guard over the nation of Israel. In the New Testament, the Letter of Jude mentions Michael disputing with the devil over the body of Moses, while the Book of Revelation describes his cosmic battle with the dragon (Satan), whom he defeats and casts down from heaven.

Christian tradition assigns Michael several crucial roles: he is the protector of the Church, the conductor of souls at death, and the one who will weigh souls on the scales of justice at the Final Judgment. Medieval and Renaissance art commonly depicts him with scales, a sword, and armor, standing triumphant over a defeated devil.

Devotion to St. Michael has been strong throughout Church history. Pope Leo XIII, after reportedly having a vision of Satan's assault on the Church, composed the famous Prayer to St. Michael, which was recited after every Low Mass until the 1960s. Many churches, especially those built on high places, are dedicated to St. Michael.

St. Michael is invoked for protection against evil, both spiritual and physical. He is the patron of soldiers, police officers, paramedics, and all who risk their lives to protect others. In times of spiritual warfare, temptation, or danger, Christians call upon St. Michael to defend them with his mighty sword and shield of faith.

As the defender of God's people and the Church, St. Michael continues his battle against the forces of darkness, reminding us that ultimate victory belongs to God and that we have a powerful advocate in our spiritual struggles.`,
    miracles: [
      "Led the heavenly army in defeating Satan and fallen angels",
      "Protects souls from demonic attacks and temptation",
      "Appears to defend the Church in times of crisis",
      "Conducts souls to judgment at the moment of death",
      "Countless interventions protecting people from evil",
      "Will lead the final battle against evil at the end of times"
    ],
    imageUrl: "https://page.gensparksite.com/v1/base64_upload/bafeffb5ed09489bccbfef5798bf4ce3",
    orderByDate: 2
  },
  {
    id: "st-juan-diego",
    name: "St. Juan Diego",
    title: "Visionary of Guadalupe, Indigenous Saint",
    knownFor: "Recipient of Our Lady of Guadalupe Apparitions",
    feastDay: "December 9",
    lifespan: "1474-1548",
    patronOf: "Indigenous Peoples of the Americas",
    shortBio: "An Aztec convert to Christianity who received apparitions of the Virgin Mary as Our Lady of Guadalupe, leading to the miraculous image on his tilma and the conversion of millions.",
    fullBio: `Born Cuauhtlatoatzin ("The Eagle Who Speaks") in Cuautitlán, Mexico, Juan Diego was a member of the Chichimeca people. He lived a simple life as a farmer and weaver, married but without children. After the Spanish conquest of Mexico, he and his wife converted to Christianity around 1524, taking the names Juan Diego and María Lucía.

After his wife's death in 1529, Juan Diego moved to live with his uncle Juan Bernardino near Tepeyac Hill. On December 9, 1531, while walking to Mass, he encountered a beautiful lady surrounded by light on Tepeyac Hill. She identified herself as the Virgin Mary and asked him to request that the bishop build a church on the site.

Bishop Juan de Zumárraga was skeptical and requested a sign. On December 12, the Virgin sent Juan Diego to gather roses from the barren hilltop - Castilian roses that didn't grow in Mexico. When Juan Diego opened his tilma (cloak) before the bishop to show the roses, the miraculous image of Our Lady of Guadalupe appeared imprinted on the fabric.

The bishop immediately believed and built the requested church. Juan Diego spent the remaining 17 years of his life as guardian of the chapel and the miraculous image, sharing his story with the millions of pilgrims who came to see it. He lived in a small hermitage attached to the chapel, dedicating himself to prayer and evangelization.

Juan Diego's humble obedience and the miraculous tilma led to the conversion of nearly nine million indigenous people within seven years. He represents the bridging of cultures and the universality of God's love for all peoples.`,
    miracles: [
      "Witnessed multiple apparitions of the Virgin Mary",
      "Miraculous roses bloomed on barren Tepeyac Hill in December",
      "The image of Our Lady miraculously appeared on his tilma",
      "His tilma has survived nearly 500 years despite fragile cactus fiber material",
      "Healing of his uncle Juan Bernardino by the Virgin Mary",
      "Catalyst for the conversion of millions of indigenous people"
    ],
    imageUrl: "https://page.gensparksite.com/v1/base64_upload/4b7b98c6bbe691612d9ca5778be91b06",
    orderByDate: 1548
  },
  {
    id: "st-margaret-mary-alacoque",
    name: "St. Margaret Mary Alacoque",
    title: "Apostle of the Sacred Heart",
    knownFor: "Revelations of the Sacred Heart of Jesus",
    feastDay: "October 16",
    lifespan: "1647-1690",
    patronOf: "Devotees of the Sacred Heart, Polio Patients, Loss of Parents",
    shortBio: "A French Visitation nun who received visions of Jesus revealing His Sacred Heart. Through her, Christ established the devotion to the Sacred Heart, including the Nine First Fridays and the Holy Hour.",
    fullBio: `Born Marguerite Alacoque in Lhautecour, France, to Claude and Philiberte Alacoque, Margaret Mary experienced profound suffering from an early age. Her father died when she was eight, plunging the family into poverty. She was struck with rheumatic fever that left her paralyzed for four years.

At age 15, after vowing herself to the Blessed Virgin Mary, she was miraculously healed. Despite pressure to marry, she entered the Visitation convent at Paray-le-Monial in 1671 at age 22, after a vision of Christ reproached her for worldliness.

Between 1673 and 1675, she received a series of revelations from Jesus Christ. He showed her His Sacred Heart, wounded by humanity's ingratitude, and appointed her to spread devotion to His heart. Christ requested the establishment of the Nine First Fridays devotion, the Holy Hour of adoration, and a feast in honor of His Sacred Heart.

Initially rejected by her community as delusional, she found support from her confessor, St. Claude La Colombière, who validated her visions. The devotion she promoted would eventually spread throughout the universal Church, though official approval came only 75 years after her death.

She spent her final years in suffering and prayer, dying on October 17, 1690. Her body was found incorrupt when her tomb was opened in 1830, confirming her sanctity.`,
    miracles: [
      "Miraculous healing from paralysis at age 15 after prayer to the Virgin Mary",
      "Received multiple visions of Christ revealing His Sacred Heart",
      "Body found incorrupt 140 years after death",
      "Two instantaneous cures occurred when her tomb was opened in 1830",
      "The worldwide spread of Sacred Heart devotion from her private revelations"
    ],
    imageUrl: "https://page.gensparksite.com/v1/base64_upload/404f3933e7f66cd147ba7bfcc107dc28",
    orderByDate: 1690
  },
  {
    id: "st-rose-lima",
    name: "St. Rose of Lima",
    title: "First Saint of the Americas",
    knownFor: "Mystic and Ascetic of Peru",
    feastDay: "August 23",
    lifespan: "1586-1617",
    patronOf: "Peru, The Americas, Philippines, Florists, Gardeners",
    shortBio: "The first person born in the Americas to be canonized. A Dominican tertiary who lived a life of extreme penance and mystical prayer in colonial Lima, becoming a model of holiness for the New World.",
    fullBio: `Born Isabel Flores de Oliva in Lima, Peru, to Spanish colonial parents, she was nicknamed 'Rose' for her beauty. From childhood, she showed extraordinary devotion to God and practiced severe penances to preserve her soul's purity and reject worldly vanity.

To avoid marriage, she deliberately marred her beauty and took a vow of virginity at age 20. She became a Dominican tertiary, taking St. Catherine of Siena as her model. Rose created a hermitage in her parents' garden where she spent long hours in prayer and mortification.

She wore a silver crown with spikes on the inside to imitate Christ's crown of thorns, fasted extensively, and slept on a bed of broken glass and pottery. Despite these extreme practices, she maintained a cheerful disposition and cared for the sick and poor, turning a room in her home into an infirmary.

Rose experienced profound mystical visions and spiritual ecstasies, including mystical marriage to Christ. She offered her sufferings for the conversion of sinners and the souls in purgatory. She supported her impoverished family through needlework and growing flowers.

She died at age 31 after a painful final illness, her last words being "Jesus, Jesus, be with me." Her funeral was attended by vast crowds, and miracles were immediately reported at her tomb. She was canonized in 1671, becoming the first saint of the Americas.`,
    miracles: [
      "Experienced mystical marriage to Christ",
      "Numerous miraculous healings attributed to her intercession",
      "Flowers bloomed out of season at her touch",
      "Levitated during prayer and experienced ecstatic visions",
      "Protected Lima from earthquakes through her prayers",
      "Appeared to sailors in visions to save them from shipwrecks"
    ],
    imageUrl: "https://page.gensparksite.com/v1/base64_upload/c9d8d20e7339e2fda79ebf7b8c1a363f",
    orderByDate: 1617
  },
  {
    id: "st-rita-cascia",
    name: "St. Rita of Cascia",
    title: "Saint of Impossible Causes",
    knownFor: "Patient Wife, Devoted Mother, Augustinian Nun",
    feastDay: "May 22",
    lifespan: "1381-1457",
    patronOf: "Impossible Causes, Difficult Marriages, Abuse Victims, Widows",
    shortBio: "An Italian saint who endured an abusive marriage, the loss of her husband and sons, and received a partial stigmata. Known as the 'Saint of the Impossible' for her powerful intercession in hopeless cases.",
    fullBio: `Born Margherita Lotti in Roccaporena, Italy, to parents known as "Peacemakers of Christ," Rita desired religious life from childhood but was forced into marriage at age 12 to Paolo di Ferdinando, a violent nobleman.

For 18 years, she endured her husband's abuse, infidelities, and violent temper with patience and prayer. Her virtuous example eventually softened his heart, but he was murdered in a family feud. Rita publicly forgave his murderers, but her two sons planned revenge. She prayed that God would take them rather than allow them to commit murder, and both died of illness within a year.

After establishing peace between the feuding families, Rita was admitted to the Augustinian monastery in Cascia at age 36. She lived there for 40 years in contemplation and service. On Good Friday 1442, while praying before a crucifix, she received a wound on her forehead as if from a thorn of Christ's crown - a partial stigmata that remained for the rest of her life.

Near death, she asked a cousin for a rose from her garden in winter. Miraculously, a rose was found blooming in the snow. She died on May 22, 1457, and her body remains incorrupt. She was canonized in 1900 by Pope Leo XIII.`,
    miracles: [
      "Received a partial stigmata - a thorn wound on her forehead",
      "A rose bloomed in winter snow at her request",
      "Two figs appeared on a tree in January when she asked for them",
      "Her body remains incorrupt over 500 years after death",
      "Healed Elizabeth Bergamini of smallpox and blindness",
      "Numerous healings of impossible cases through her intercession"
    ],
    imageUrl: "https://page.gensparksite.com/v1/base64_upload/a2ba24df9ec27c7f4907052556ab2394",
    orderByDate: 1457
  },
  {
    id: "st-martin-de-porres",
    name: "St. Martin de Porres",
    title: "Father of Charity",
    knownFor: "Humble Healer and Advocate for Racial Harmony",
    feastDay: "November 3",
    lifespan: "1579-1639",
    patronOf: "Social Justice, Racial Harmony, Mixed-Race People, Public Health",
    shortBio: "A Dominican lay brother in Lima, Peru, known for his humility, miraculous healings, and care for the poor. The illegitimate son of a Spanish nobleman and a freed African slave, he became a powerful symbol of racial harmony.",
    fullBio: `Born in Lima, Peru, to Don Juan de Porres, a Spanish nobleman, and Ana Velázquez, a freed African slave, Martin faced discrimination from birth due to his mixed race and illegitimate status. His father initially refused to acknowledge him.

At age 12, he was apprenticed to a barber-surgeon, learning medical skills that would serve him throughout life. At 15, he sought to join the Dominicans but due to racial laws, could only enter as a servant. He was later admitted as a lay brother.

Martin served as the monastery's barber, surgeon, wardrobe keeper, and infirmarian. He established an orphanage and a children's hospital, and distributed food to hundreds of poor people daily. He was known for his extraordinary care of all creatures, keeping a hospital for sick cats and dogs.

He experienced mystical gifts including levitation, bilocation, miraculous knowledge, and instantaneous cures. He could pass through locked doors and was seen in multiple places simultaneously. His room often glowed with supernatural light during his ecstasies.

Martin treated all people equally regardless of race or status, caring for African slaves, Spanish nobles, and indigenous peoples with the same love. He died in 1639 after a severe fever, and was canonized in 1962 by Pope John XXIII, becoming the first black saint of the Americas.`,
    miracles: [
      "Levitated during prayer and experienced ecstatic visions",
      "Bilocated, appearing in multiple places simultaneously",
      "Passed through locked doors to help the sick",
      "Multiplied food to feed the poor and healed countless sick",
      "Had miraculous knowledge of distant events",
      "Tamed and communicated with animals"
    ],
    imageUrl: "https://page.gensparksite.com/v1/base64_upload/683253b0f58d56214ee9f99a917e9330",
    orderByDate: 1639
  },
  {
    id: "st-oscar-romero",
    name: "St. Oscar Romero",
    title: "Voice for the Voiceless",
    knownFor: "Martyr Archbishop Who Defended the Poor",
    feastDay: "March 24",
    lifespan: "1917-1980",
    patronOf: "The Americas, El Salvador, Persecuted Christians",
    shortBio: "Archbishop of San Salvador who became a prophetic voice against oppression and violence. Assassinated while celebrating Mass for speaking out against injustice, he was canonized by Pope Francis in 2018.",
    fullBio: `Born Oscar Arnulfo Romero y Galdámez in Ciudad Barrios, El Salvador, he felt called to priesthood from age 13. Ordained in Rome in 1942, he returned to El Salvador where he served in various pastoral and administrative roles.

Appointed Archbishop of San Salvador in 1977, he was initially considered conservative. However, the assassination of his friend Fr. Rutilio Grande, who worked with the poor, transformed him. He became an outspoken advocate for human rights and social justice.

During El Salvador's civil conflict, Romero used his Sunday homilies, broadcast nationally by radio, to report disappearances, tortures, and murders. He denounced violence from both the military government and leftist guerrillas, calling for dialogue and respect for human dignity.

His famous quote, "When the Church hears the cry of the oppressed it cannot but denounce the social structures that give rise to and perpetuate the misery from which the cry arises," embodied his prophetic ministry.

On March 23, 1980, he directly appealed to soldiers to stop killing civilians. The next day, March 24, while celebrating Mass at a hospital chapel, he was assassinated by a single bullet to the heart. His funeral drew 250,000 mourners despite government intimidation. He was beatified in 2015 and canonized in 2018, recognized as a martyr for the faith.`,
    miracles: [
      "Prophetic preaching that converted hearts and inspired justice",
      "Miraculous cure of Cecilia Flores from life-threatening complications during pregnancy",
      "His blood became a seed of peace in El Salvador",
      "Intercessions for healing and protection widely reported",
      "His witness inspired countless defenders of human rights worldwide",
      "Appeared in visions to comfort the persecuted"
    ],
    imageUrl: "https://page.gensparksite.com/v1/base64_upload/762df8cede3a7f30adf55c464e1768cf",
    orderByDate: 1980
  },
  {
    id: "st-peter-claver",
    name: "St. Peter Claver",
    title: "Slave of the Slaves",
    knownFor: "Apostle to African Slaves in Colombia",
    feastDay: "September 9",
    lifespan: "1581-1654",
    patronOf: "Slaves, African Missions, Interracial Justice, Colombia",
    shortBio: "A Spanish Jesuit priest who dedicated his life to serving enslaved Africans in Cartagena, Colombia. He baptized and cared for an estimated 300,000 slaves, declaring himself 'slave of the slaves forever.'",
    fullBio: `Born in Verdú, Catalonia, Spain, to a devout farming family, Peter studied at the University of Barcelona before joining the Jesuits in 1602. Inspired by St. Alphonsus Rodriguez to evangelize in the Americas, he arrived in Cartagena, Colombia, in 1610.

Cartagena was a major slave port where 10,000 enslaved Africans arrived annually in horrific conditions. Peter made his life's work ministering to these slaves. When slave ships arrived, he would board them with food, medicine, and water, entering the dark holds where people lay in chains.

He learned African languages and used interpreters to communicate. He treated the slaves' wounds, fed them, and assured them of their human dignity and God's love. He insisted on baptizing them properly, ensuring they understood the faith. He followed up with continued catechesis and advocacy.

Peter faced opposition from slave traders and even fellow clergy who considered Africans inferior. He persisted, making a vow as "slave of the slaves forever." He also ministered to prisoners and hospital patients, showing particular care for the most abandoned.

In his final years, he suffered from Parkinson's disease and was neglected by his caregivers. He died on September 8, 1654, and was canonized in 1888 by Pope Leo XIII, along with his mentor St. Alphonsus Rodriguez.`,
    miracles: [
      "Converted and baptized an estimated 300,000 enslaved Africans",
      "Gift of tongues - understood and was understood by slaves of various languages",
      "Miraculous multiplication of food and supplies for the slaves",
      "Healed many sick slaves through prayer and care",
      "Prophesied future events including his own death",
      "Supernatural knowledge of souls' spiritual states"
    ],
    imageUrl: "https://page.gensparksite.com/v1/base64_upload/92eb1cfdfd3aa9103938c57253b0cd17",
    orderByDate: 1654
  },
  {
    id: "st-toribio-mogrovejo",
    name: "St. Toribio de Mogrovejo",
    title: "Great Reformer Archbishop",
    knownFor: "Defender of Indigenous Rights in Peru",
    feastDay: "March 23",
    lifespan: "1538-1606",
    patronOf: "Latin American Bishops, Peru, Native Peoples' Rights",
    shortBio: "Spanish-born Archbishop of Lima who reformed the Church in Peru, defended indigenous peoples against exploitation, and traveled thousands of miles on foot to evangelize remote communities.",
    fullBio: `Born in Mayorga, Spain, to a noble family, Toribio was a brilliant student of law at Salamanca. Though a layman, King Philip II appointed him chief judge of the Inquisition at Granada due to his exceptional abilities.

In 1579, despite not being ordained, he was chosen as Archbishop of Lima, Peru. He accepted reluctantly, was ordained, and arrived in Peru in 1581 to find a Church in disorder, with clergy exploiting indigenous peoples and living scandalously.

Toribio immediately began reforms, celebrating three provincial councils and twelve diocesan synods. He established the first seminary in the Americas, mandated catechesis in native languages, and required priests to live among their flocks.

He traveled over 25,000 miles on foot through his vast diocese, often through dangerous terrain, visiting every parish multiple times. He learned Quechua to communicate directly with indigenous peoples, confirmed nearly half a million people, and defended them against exploitation by colonizers.

He lived simply, giving away his possessions to the poor. He established churches, schools, hospitals, and the first seminary in the Americas. Among those he confirmed was St. Rose of Lima and possibly St. Martin de Porres.

He died on March 23, 1606, in Saña, while on a pastoral visit. His last words were from Psalm 121: "I was glad when they said unto me, Let us go into the house of the Lord." He was canonized in 1726.`,
    miracles: [
      "Traveled over 25,000 miles on foot through dangerous terrain without harm",
      "Gift of tongues - learned indigenous languages miraculously quickly",
      "Multiplied food to feed the poor during famines",
      "Healed the sick through prayer and blessing",
      "Prophesied future events including the date of his death",
      "Protected from wild animals and bandits during travels"
    ],
    imageUrl: "https://page.gensparksite.com/v1/base64_upload/e303a08bb4834a5c6238b40e9c0ea14c",
    orderByDate: 1606
  },
  {
    id: "st-jose-sanchez-del-rio",
    name: "St. José Sánchez del Río",
    title: "Boy Martyr of Christ the King",
    knownFor: "Teenage Martyr of the Cristero War",
    feastDay: "February 10",
    lifespan: "1913-1928",
    patronOf: "Persecuted Christians, Children, Adolescents",
    shortBio: "A 14-year-old Mexican boy who was tortured and martyred during the Cristero War for refusing to renounce his faith. His courage inspired countless others and he was canonized by Pope Francis in 2016.",
    fullBio: `Born in Sahuayo, Michoacán, Mexico, José grew up during the anti-Catholic persecutions of the Mexican government. When the Cristero War began in 1926, his brothers joined the Catholic resistance. José begged to join at age 13.

Initially refused due to his age, he persisted until allowed to serve as flag bearer and bugler. His motto was "Never give in! Long live Christ the King and Our Lady of Guadalupe!" He showed remarkable bravery and faith despite his youth.

On February 5, 1928, during a battle, José gave his horse to his commander General Guizar Morfin when the general's horse was killed, saying "My general, take my horse and save yourself. You are more needed than I." José was captured by government forces.

In prison, he encouraged fellow prisoners and wrote touching letters to his mother. The soldiers tortured him to force him to renounce his faith. They cut the soles of his feet and forced him to walk on salt, then to the cemetery for execution.

Each step, José cried out "Viva Cristo Rey!" (Long live Christ the King!). At the graveside, they stabbed him with bayonets. When asked to renounce Christ to save his life, he shouted louder "Viva Cristo Rey!" He was shot on February 10, 1928, at age 14. Before dying, he drew a cross in the dirt and kissed it.`,
    miracles: [
      "Showed supernatural courage and joy during torture",
      "His witness converted several of his captors",
      "Miraculous cure of Ximena Sánchez from tuberculosis through his intercession",
      "His martyrdom strengthened the faith of countless Cristeros",
      "Letters from prison showed wisdom beyond his years",
      "His blood marked the ground where he died, unable to be washed away"
    ],
    imageUrl: "https://page.gensparksite.com/v1/base64_upload/0443dfd6fb7359f8cfed1fb3b8a5a7ed",
    orderByDate: 1928
  },
  {
    id: "st-peter-apostle",
    name: "St. Peter",
    title: "Prince of the Apostles, The Rock",
    knownFor: "First Pope, Foundation of the Church",
    feastDay: "June 29",
    lifespan: "d. c. 64-67 AD",
    patronOf: "Popes, Rome, Fishermen, Keys, Universal Church",
    shortBio: "A Galilean fisherman who became the leader of the apostles and first Bishop of Rome. Jesus renamed him 'Rock' and gave him the keys to the kingdom of heaven, establishing him as the foundation of the Church.",
    fullBio: `Born Simon in Bethsaida on the Sea of Galilee, Peter worked as a fisherman with his brother Andrew. Called by Jesus to be a 'fisher of men,' he became the spokesman and leader of the twelve apostles, witnessing the Transfiguration and other key moments of Christ's ministry.

Peter's character shows both profound faith and human weakness. He was the first to confess Jesus as the Messiah, walked on water, and pledged undying loyalty. Yet he also denied Christ three times during the Passion. After the Resurrection, Jesus restored him with a threefold commission to 'feed my sheep.'

At Pentecost, Peter emerged as the bold leader of the early Church, preaching the first sermon that converted 3,000 souls. He performed numerous miracles, including healing the lame man at the Temple gate and raising Tabitha from the dead. His shadow alone was believed to heal the sick.

Peter's ministry expanded from Jerusalem to Antioch and finally to Rome, where he served as the first bishop. During Nero's persecution following the Great Fire of 64 AD, Peter was arrested. According to tradition, as he fled Rome, he met Christ on the Appian Way. When Peter asked 'Quo vadis?' (Where are you going?), Jesus replied He was going to Rome to be crucified again. Peter returned and was martyred, requesting to be crucified upside down, feeling unworthy to die as his Lord had.

His bones are believed to rest beneath St. Peter's Basilica in Vatican City, where excavations in the 20th century uncovered ancient graffiti reading 'Peter is here.' As the rock upon which Christ built His Church, Peter's legacy continues through apostolic succession in the papacy.`,
    miracles: [
      "Walked on water before his faith faltered",
      "Healed the lame man at the Beautiful Gate",
      "Raised Tabitha (Dorcas) from the dead",
      "His shadow healed the sick as he passed",
      "Struck Ananias and Sapphira dead for lying to the Holy Spirit",
      "Escaped from prison through angelic intervention",
      "Defeated Simon Magus in Rome through prayer"
    ],
    imageUrl: "https://page.gensparksite.com/v1/base64_upload/8757c4dc5a9a56ae2529bc57dfb774e0",
    orderByDate: 67
  },
  {
    id: "st-james-greater",
    name: "St. James the Greater",
    title: "Santiago Matamoros, Apostle and Martyr",
    knownFor: "First Apostolic Martyr, Patron of Spain",
    feastDay: "July 25",
    lifespan: "d. c. 44 AD",
    patronOf: "Spain, Pilgrims, Laborers, Knights, Soldiers",
    shortBio: "Son of Zebedee and brother of John, he was one of Jesus's inner circle. The first apostle to be martyred, he became Spain's patron saint. His shrine at Santiago de Compostela is one of Christianity's greatest pilgrimage destinations.",
    fullBio: `James, son of Zebedee and Salome, was a fisherman from Bethsaida called by Jesus along with his brother John. Their fiery temperament earned them the nickname 'Boanerges' (Sons of Thunder). With Peter and John, James formed Christ's inner circle, witnessing the Transfiguration, the raising of Jairus's daughter, and the agony in Gethsemane.

Tradition holds that after Pentecost, James traveled to Hispania (Spain) to preach the Gospel. Discouraged by his lack of success, he received a miraculous apparition of the Virgin Mary, still living in Jerusalem, who appeared on a pillar by the Ebro River at Zaragoza. She encouraged him to persevere, and this site became the shrine of Our Lady of the Pillar.

Returning to Jerusalem, James was arrested during Herod Agrippa I's persecution. Acts 12:2 records his execution by sword around 44 AD, making him the first apostle to be martyred. Legend states his disciples placed his body in a rudderless boat that miraculously sailed to Galicia in northwestern Spain.

His tomb was forgotten until 813, when a hermit named Pelagius, guided by a star, discovered it in a field called Campus Stellae (Field of Stars), later Compostela. The discovery transformed James into Santiago, Spain's warrior patron. His most famous posthumous miracle occurred at the Battle of Clavijo in 844, where he appeared on a white horse to lead Christian forces to victory over the Moors, earning the title 'Matamoros' (Moor-slayer).

The Camino de Santiago became medieval Europe's most important pilgrimage after Rome and Jerusalem. Millions have walked the ancient routes, marked by the scallop shell symbol, seeking spiritual transformation. James represents both contemplative pilgrimage and militant faith, embodying the complex history of Christian Spain.`,
    miracles: [
      "Received apparition of Virgin Mary at Zaragoza",
      "His body miraculously sailed to Spain in a stone boat",
      "Appeared at Battle of Clavijo leading Christian forces",
      "Protected pilgrims on the Camino de Santiago",
      "Healed a man falsely hanged whose roasted fowl came to life",
      "Multiple battlefield appearances during the Reconquista",
      "His tomb's discovery marked by celestial lights and music"
    ],
    imageUrl: "https://page.gensparksite.com/v1/base64_upload/2b7a95ac58f72977e7577da6291f1a36",
    orderByDate: 44
  },
  {
    id: "st-james-moorslayer",
    name: "Santiago Matamoros",
    title: "Saint James the Moorslayer",
    knownFor: "Legendary Warrior Saint of the Reconquista",
    feastDay: "July 25",
    lifespan: "Legendary apparition from 844 AD",
    patronOf: "Spain, Spanish Military, Christian Warriors",
    shortBio: "The legendary martial aspect of St. James the Greater who appeared at the Battle of Clavijo in 844 AD, leading Christian forces to victory. This warrior saint became the spiritual champion of the Reconquista.",
    fullBio: `Santiago Matamoros represents the transformation of St. James the Greater from apostle and martyr into the legendary warrior saint of Spain. This metamorphosis occurred during the centuries-long Reconquista, when Christian kingdoms fought to reclaim the Iberian Peninsula from Muslim rule.

The legend crystallized at the Battle of Clavijo in 844 AD, where King Ramiro I of Asturias faced overwhelming Moorish forces. According to tradition, St. James appeared on a white charger, sword in hand, leading the Christian army to miraculous victory. The battle cry '¡Santiago y cierra, España!' ('St. James and strike for Spain!') became the rallying call of Christian forces for centuries.

This apparition transformed James from pilgrim saint to miles Christi (soldier of Christ). Iconographically, Santiago Matamoros is depicted as a knight in armor on a white horse, trampling Moorish soldiers beneath his mount's hooves, wielding both sword and the banner of the Cross. This image adorned churches, military standards, and coins throughout Christian Spain.

The cult of Santiago Matamoros served crucial political and military functions during the Reconquista. Spanish military orders invoked his protection, and victories were attributed to his intercession. The legend justified and sanctified the territorial expansion and religious warfare that characterized medieval Iberia.

In the Americas, conquistadors carried this warrior saint's image to the New World, where Santiago became the patron of Spanish colonial military expeditions. Indigenous peoples were taught to invoke 'Santiago' in battle, though the saint's meaning transformed in various colonial contexts.

Modern Spain grapples with this controversial legacy. While Santiago Matamoros remains embedded in Spanish cultural identity, many churches have removed or modified depictions showing the saint trampling Muslims, recognizing the problematic nature of such imagery in contemporary multicultural society.

The duality of St. James - both peaceful pilgrim and militant warrior - reflects the complex religious and cultural history of medieval Spain, where spiritual devotion and military conquest were often inseparable.`,
    miracles: [
      "Appeared at the Battle of Clavijo (844) leading to Christian victory",
      "Multiple battlefield apparitions during the Reconquista",
      "Miraculous interventions at the battles of Coimbra and Las Navas de Tolosa",
      "Protected Christian armies from defeat when invoked",
      "Inspired terror in opposing forces through supernatural appearances",
      "Guided lost Christian soldiers to safety",
      "His battle standard never fell in combat when carried into battle"
    ],
    imageUrl: "https://page.gensparksite.com/v1/base64_upload/d7dac4ae4eb4ccddc714bfd92a940c6b",
    orderByDate: 844
  },
  {
    id: "st-john-apostle",
    name: "St. John the Apostle",
    title: "The Beloved Disciple, Evangelist",
    knownFor: "Author of Gospel, Letters, and Revelation",
    feastDay: "December 27",
    lifespan: "d. c. 100 AD",
    patronOf: "Love, Loyalty, Authors, Theologians, Asia Minor",
    shortBio: "The youngest apostle and 'the disciple whom Jesus loved.' He cared for Mary after the Crucifixion, wrote profound theological works, received the visions of Revelation on Patmos, and was the only apostle to die naturally.",
    fullBio: `John, son of Zebedee and possibly Salome (who may have been Mary's sister), was a Galilean fisherman called with his brother James. The youngest apostle, he enjoyed a unique intimacy with Jesus, reclining on His breast at the Last Supper and referring to himself as 'the disciple whom Jesus loved.'

John stood at the foot of the Cross with Mary when others fled. There, Jesus entrusted His mother to John's care, establishing a son-mother relationship that tradition says lasted until Mary's Assumption. John was first to believe at the empty tomb, recognizing the meaning of the folded burial cloths.

In Jerusalem, John worked closely with Peter, healing the lame and boldly preaching before the Sanhedrin. He later moved to Ephesus, becoming bishop and leader of the Asian churches. During Domitian's persecution, tradition says he survived being plunged into boiling oil in Rome, after which he was exiled to Patmos.

On that rocky island, John received the apocalyptic visions recorded in Revelation, offering hope to persecuted Christians through symbolic prophecy of God's ultimate victory. After Domitian's death, he returned to Ephesus, where he wrote his Gospel - the most theological and mystical of the four, beginning with the profound 'In the beginning was the Word.'

His three epistles combat early heresies while emphasizing love as God's essence and the mark of true disciples. Ancient sources describe the aged John, too weak to preach, being carried to church repeating only: 'Little children, love one another.' When asked why, he replied: 'It is the Lord's command, and if this only is done, it is enough.'

John died peacefully around 100 AD, the only apostle not martyred, buried at Ephesus where his tomb became a major pilgrimage site.`,
    miracles: [
      "Survived being boiled in oil unharmed",
      "Received the visions of Revelation on Patmos",
      "Raised a dead man in Ephesus through prayer",
      "Destroyed a pagan temple through prayer",
      "Drank poisoned wine without harm, the poison emerging as a serpent",
      "Transformed stones into gold to demonstrate detachment from wealth",
      "His Gospel's profound theology considered divinely inspired"
    ],
    imageUrl: "https://page.gensparksite.com/v1/base64_upload/629332d60c78f5fad95c1a56052ed80e",
    orderByDate: 100
  },
  {
    id: "st-matthew-apostle",
    name: "St. Matthew",
    title: "Evangelist and Apostle",
    knownFor: "Tax Collector Turned Evangelist, Author of First Gospel",
    feastDay: "September 21",
    lifespan: "1st Century AD",
    patronOf: "Accountants, Bankers, Tax Collectors, Perfumers",
    shortBio: "A despised tax collector named Levi who left everything to follow Jesus. He wrote the Gospel emphasizing Jesus as the fulfillment of Jewish prophecy and was martyred while celebrating Mass in Ethiopia.",
    fullBio: `Matthew, also called Levi, son of Alphaeus, worked as a publican (tax collector) in Capernaum, a profession that made him wealthy but despised by fellow Jews as a traitor collaborating with Roman oppressors. His life changed when Jesus passed his tax booth and simply said, 'Follow me.'

Matthew immediately abandoned his lucrative position, hosting a great feast to celebrate his new life. When Pharisees criticized Jesus for dining with tax collectors and sinners, Jesus responded: 'I have not come to call the righteous, but sinners to repentance.' Matthew's conversion powerfully demonstrated that no one is beyond God's mercy.

As an apostle, Matthew witnessed Christ's ministry, death, and resurrection. His background as a tax collector, requiring literacy in multiple languages and attention to detail, equipped him to write the first Gospel. Written primarily for Jewish Christians, it contains over 60 Old Testament citations, presenting Jesus as the promised Messiah.

Matthew's Gospel uniquely preserves Jesus's teachings on the Kingdom of Heaven, including the Sermon on the Mount, numerous parables, and the Great Commission. It emphasizes the Church's authority and mission, making it the liturgical Gospel for centuries.

After Pentecost, tradition says Matthew preached in Judea before traveling to Ethiopia (possibly south of the Caspian Sea). There he performed miracles including raising the king's daughter from death. He was martyred around 74 AD, killed by sword while celebrating Mass after denouncing the king's pursuit of a consecrated virgin.

His symbol is a winged man or angel, representing his Gospel's opening genealogy showing Christ's human ancestry. His relics are venerated in Salerno Cathedral, Italy. Matthew's transformation from publican to apostle continues to inspire those seeking redemption.`,
    miracles: [
      "Raised the daughter of the Ethiopian king from death",
      "Defeated pagan magicians in spiritual combat",
      "His Gospel preserved through divine protection",
      "Appeared in visions to guide the Church",
      "Protected Salerno from pirate attack in 1544 through intercession",
      "Numerous conversions in Ethiopia through his preaching",
      "Miraculous knowledge enabling him to write his Gospel"
    ],
    imageUrl: "https://page.gensparksite.com/v1/base64_upload/1962ecfdab6ee265c63df1d73d5a27e6",
    orderByDate: 74
  },
  {
    id: "st-philip-apostle",
    name: "St. Philip the Apostle",
    title: "Apostle and Evangelist",
    knownFor: "Practical Apostle, Missionary to Greece and Asia",
    feastDay: "May 3",
    lifespan: "1st Century AD",
    patronOf: "Hatters, Pastry Chefs, Missionaries",
    shortBio: "From Bethsaida, Philip was directly called by Jesus and immediately brought Nathanael to Christ. Known for practical questions that prompted profound teachings, he preached in Greece and Phrygia before his martyrdom.",
    fullBio: `Philip came from Bethsaida, the same fishing town as Peter and Andrew. His Greek name suggests Hellenistic influence in Galilee. When Jesus found him and said 'Follow me,' Philip immediately sought his friend Nathanael (Bartholomew), declaring, 'We have found him of whom Moses and the prophets wrote!'

Philip appears at crucial moments in John's Gospel, often asking practical questions that elicit profound teachings. Before feeding the 5,000, Jesus tested Philip about buying bread, revealing his pragmatic nature. When Greeks wished to see Jesus, they approached Philip first, perhaps due to his Greek connections.

At the Last Supper, Philip's request, 'Lord, show us the Father,' prompted Jesus's profound response: 'Whoever has seen me has seen the Father.' This exchange revealed the mystery of the Trinity and Christ's divine nature, central to Christian theology.

After Pentecost, tradition says Philip evangelized in Greece, Phrygia, and Syria. He performed numerous miracles and conversions, including reportedly the wife of a Roman proconsul. Ancient sources describe him as a powerful preacher who established churches throughout Asia Minor.

Philip was martyred in Hierapolis, Phrygia (modern Turkey) around 80 AD. Accounts vary - some say crucifixion, others describe him being hung upside down. In 2011, archaeologists discovered what they believe to be his tomb in Hierapolis, finding a first-century burial site within an ancient church complex.

Often confused with Philip the Deacon (who baptized the Ethiopian eunuch), the apostle Philip represents the bridge between Jewish and Gentile Christianity. His practical nature and missionary zeal helped spread the Gospel across cultural boundaries.`,
    miracles: [
      "Found the ancient sword buried at Sainte-Catherine-de-Fierbois as directed",
      "Performed numerous healings during his missionary journeys",
      "Survived initial persecution attempts through divine protection",
      "Converted the wife of a Roman proconsul",
      "Banished demons from pagan temples",
      "His tomb in Hierapolis became a site of miraculous healings",
      "Appeared in visions to guide missionary work"
    ],
    imageUrl: "https://page.gensparksite.com/v1/base64_upload/32494774608dc7e66e2518e4a7432925",
    orderByDate: 80
  },
  {
    id: "st-clement-rome",
    name: "St. Clement of Rome",
    title: "Pope and Apostolic Father",
    knownFor: "Third Successor of Peter, First Apostolic Father",
    feastDay: "November 23",
    lifespan: "c. 35-99 AD",
    patronOf: "Mariners, Stone-cutters, Marble workers",
    shortBio: "The third Bishop of Rome after Peter, Clement knew the apostles personally. His letter to the Corinthians is one of the earliest Christian writings outside the New Testament. He was martyred by being thrown into the sea with an anchor.",
    fullBio: `Clement was born in Rome to a Jewish family and was among the earliest converts to Christianity. He knew Saints Peter and Paul personally, with Paul mentioning him in Philippians 4:3 as a fellow worker 'whose name is in the book of life.' Some traditions identify him with the household of the consul Titus Flavius Clemens.

As the third or fourth Bishop of Rome (depending on the list), Clement led the Church during turbulent times under Emperor Domitian. His pontificate, from about 88 to 99 AD, bridged the apostolic and post-apostolic eras, making him a crucial link in the chain of apostolic succession.

Clement's enduring contribution is his First Epistle to the Corinthians, written around 96 AD to address schism in that church. This letter, considered for inclusion in the New Testament canon, demonstrates the Roman Church's early authority and provides valuable insight into first-century Christianity. It emphasizes order, hierarchy, and unity in the Church.

The epistle is remarkable for its tone of paternal concern rather than domination, its use of Old Testament examples, and its clear articulation of apostolic succession. Clement writes of the apostles appointing bishops and deacons, establishing the principle of ordained ministry that continues today.

According to tradition, Clement was banished to the Crimean Peninsula during Emperor Trajan's persecution. There he ministered to Christian prisoners in the marble quarries, miraculously providing water by striking a rock. His successful evangelization led to his martyrdom - he was thrown into the Black Sea with an anchor around his neck.

Legend says the sea receded annually to reveal his tomb, where miracles occurred. His relics were brought to Rome by Saints Cyril and Methodius in 868. The anchor became his symbol, and he's invoked by those in peril at sea.`,
    miracles: [
      "Struck a rock to provide water for thirsty prisoners in the quarries",
      "The sea receded annually to reveal his underwater tomb",
      "Converted numerous pagans while in exile",
      "His prayers saved ships from storms",
      "Miraculous preservation of his first epistle through centuries",
      "Healing miracles at his tomb site",
      "Protected sailors who invoked his intercession"
    ],
    imageUrl: "https://page.gensparksite.com/v1/base64_upload/99ca5d14c90b10297809cb130fc212bb",
    orderByDate: 99
  },
  {
    id: "st-ignatius-antioch",
    name: "St. Ignatius of Antioch",
    title: "Bishop and Martyr, Theophorus",
    knownFor: "Letters to Churches, Martyrdom by Lions",
    feastDay: "October 17",
    lifespan: "c. 35-108 AD",
    patronOf: "Church in Eastern Mediterranean, Syria",
    shortBio: "Bishop of Antioch who wrote seven profound letters while being transported to Rome for martyrdom. He called himself 'Theophorus' (God-bearer) and was thrown to lions in the Colosseum, fulfilling his desire to be 'ground as wheat for Christ.'",
    fullBio: `Ignatius, also called Theophorus (God-bearer), was likely born in Syria around 35 AD. Tradition suggests he was the child Jesus placed among the disciples as an example of humility. He knew the apostles personally and was appointed Bishop of Antioch by St. Peter himself, leading the church where followers were first called Christians.

As bishop for 40 years, Ignatius shepherded his flock through persecution, establishing church order and defending orthodox faith against early heresies. He emphasized the real presence of Christ in the Eucharist and the importance of bishops in maintaining church unity.

In 107 AD, during Emperor Trajan's persecution, Ignatius was arrested and condemned to be thrown to wild beasts in Rome. His journey to martyrdom became a triumphant procession. Christians from various cities came to greet him, and he wrote seven letters that provide invaluable insight into early Christianity.

These letters, addressed to the churches of Ephesus, Magnesia, Tralles, Rome, Philadelphia, Smyrna, and to Polycarp, articulate key Christian doctrines. He was first to use the term 'Catholic Church,' emphasized the true humanity and divinity of Christ against Docetism, and described the Eucharist as 'the medicine of immortality.'

His letter to the Romans reveals his mystical desire for martyrdom: 'I am God's wheat, ground fine by the lions' teeth to be made purest bread for Christ.' He begged them not to intervene to save him, viewing martyrdom as his way to truly become a disciple.

Ignatius was martyred in the Flavian Amphitheater (Colosseum) around 108 AD. Witnesses reported that lions devoured him so completely that only the larger bones remained, which were collected and returned to Antioch as relics. His writings profoundly influenced Christian theology, particularly regarding church hierarchy, the Eucharist, and martyrdom.`,
    miracles: [
      "Appointed by St. Peter himself as bishop",
      "His letters miraculously preserved despite persecution",
      "Converted many during his journey to Rome",
      "Lions left only his bones as relics for the faithful",
      "Appeared in visions to encourage persecuted Christians",
      "His chains became instruments of healing",
      "Protected Antioch through his intercession after death"
    ],
    imageUrl: "https://page.gensparksite.com/v1/base64_upload/35b6328f9e069c28153ed0b8d116a594",
    orderByDate: 108
  },
  {
    id: "st-polycarp-smyrna",
    name: "St. Polycarp of Smyrna",
    title: "Bishop, Martyr, Apostolic Father",
    knownFor: "Disciple of John, Martyred by Fire at 86",
    feastDay: "February 23",
    lifespan: "c. 69-155 AD",
    patronOf: "Smyrna (Izmir), Earache sufferers",
    shortBio: "A direct disciple of St. John the Apostle who became Bishop of Smyrna. At 86, he was burned at the stake for refusing to deny Christ, famously declaring he could not blaspheme the King who had saved him.",
    fullBio: `Polycarp was born around 69 AD and became a direct disciple of St. John the Apostle, who appointed him Bishop of Smyrna. This connection made him a living link to the apostolic age, and other church fathers sought his wisdom. He was known for his gentle nature, sound doctrine, and fierce opposition to heresies.

As bishop, Polycarp was a pillar of orthodoxy in Asia Minor. He corresponded with many churches and traveled to Rome around 154 AD to discuss the date of Easter with Pope Anicetus. Though they disagreed, they parted in peace, showing early church unity despite diversity.

His Letter to the Philippians, the only surviving work, quotes extensively from New Testament writings, helping establish the canon. He taught St. Irenaeus, who preserved many accounts of his life and teachings. Polycarp opposed Marcion and the Gnostics, calling Marcion 'the firstborn of Satan' when they met.

In 155 AD, during a festival in Smyrna, crowds demanded Christian blood. When soldiers came for Polycarp, he welcomed them, fed them, and asked for an hour to pray. His prayer was so fervent that some soldiers repented of their mission.

At his trial, the proconsul urged him to deny Christ. Polycarp's response echoes through history: 'Eighty-six years I have served Him, and He has done me no wrong. How can I blaspheme my King who saved me?' When threatened with fire, he replied that earthly fire burns briefly, unlike eternal fire.

Tied to the stake, Polycarp prayed aloud, offering himself as a sacrifice. Witnesses reported the fire formed an arch around him like a ship's sail, and he appeared like gold being refined. When fire couldn't kill him, he was pierced with a spear. His death, recorded in the Martyrdom of Polycarp, is the earliest detailed account of Christian martyrdom outside the New Testament.`,
    miracles: [
      "Fire formed an arch around him, unable to burn him",
      "His body emitted a sweet fragrance like incense when burned",
      "A dove flew from his body when pierced with a spear",
      "His bones, collected by Christians, became healing relics",
      "Converted his captors through his prayers",
      "Prophesied details of his own martyrdom",
      "Appeared in visions to strengthen persecuted Christians"
    ],
    imageUrl: "https://page.gensparksite.com/v1/base64_upload/2a73860ea6a62c71ac0c4ca94a4bb809",
    orderByDate: 155
  },
  {
    id: "st-joseph-cupertino",
    name: "St. Joseph of Cupertino",
    title: "The Flying Friar",
    knownFor: "Levitation and Mystical Ecstasies",
    feastDay: "September 18",
    lifespan: "1603-1663",
    patronOf: "Aviators, Air Travelers, Astronauts, Students, Test-Takers",
    shortBio: "An Italian Franciscan friar famous for his supernatural levitations during prayer. Despite learning disabilities, he became a priest and mystic whose ecstasies were witnessed by thousands, including Pope Urban VIII.",
    fullBio: `Born Giuseppe Desa in Cupertino, Italy, to a poor family, Joseph's father died before his birth, leaving the family destitute. His mother considered him a burden due to his learning disabilities and absent-mindedness, earning him the nickname "the Gaper."

He struggled to join religious life, being dismissed by the Capuchins for incompetence. Finally accepted by Franciscans as a stable servant, his genuine holiness impressed the community. Despite barely being able to read, he was ordained after miraculously answering the one Gospel passage he had memorized.

After ordination, Joseph's life became a succession of ecstasies and supernatural phenomena. He levitated during Mass, at the mention of God's name, or when seeing religious images. Over 70 levitations were documented by witnesses including cardinals, dukes, and Pope Urban VIII.

These spectacular gifts became a cross - he was forbidden from public celebration of Mass, eating with his community, or participating in processions. He spent 35 years in virtual isolation, moved between friaries to avoid crowds. He was even investigated by the Inquisition.

Despite this suffering, Joseph remained humble and obedient. He had remarkable rapport with animals and possessed infused knowledge, answering complex theological questions despite his learning disabilities. He died peacefully on September 18, 1663, and was canonized in 1767.`,
    miracles: [
      "Levitated over 70 documented times, often for extended periods",
      "Flew to the altar and back during Mass witnessed by crowds",
      "Lifted others into the air with him during ecstasies",
      "Possessed infused knowledge despite learning disabilities",
      "Healed many sick through prayer and touch",
      "Had supernatural knowledge of distant events"
    ],
    imageUrl: "https://page.gensparksite.com/v1/base64_upload/c2941fd73acf5c91bd9242cadbda2918",
    orderByDate: 1663
  },
  {
    id: "st-maria-goretti",
    name: "St. Maria Goretti",
    title: "Virgin Martyr of Purity",
    knownFor: "Child Martyr Who Forgave Her Murderer",
    feastDay: "July 6",
    lifespan: "1890-1902",
    patronOf: "Chastity, Young People, Victims of Rape, Children",
    shortBio: "An 11-year-old Italian girl who chose death rather than submit to sexual assault. Her forgiveness of her attacker and concern for his soul led to his conversion and her canonization as a martyr for purity.",
    fullBio: `Born in Corinaldo, Italy, to poor tenant farmers Luigi and Assunta Goretti, Maria was one of six children. After her father died of malaria when she was nine, she took over household duties while her mother worked in the fields.

The Gorettis shared a house with the Serenelli family. Alessandro Serenelli, 20, became obsessed with Maria and made sexual advances which she rejected. On July 5, 1902, while alone sewing, Alessandro attempted to rape her.

Maria fought fiercely, crying "No! It is a sin! God does not want it! You would go to hell!" Enraged, Alessandro stabbed her 14 times. Found bleeding, she was rushed to the hospital where she survived for 20 hours in agony.

Before dying, Maria forgave Alessandro completely, saying she wanted him in Paradise with her. She died on July 6, holding a crucifix and medal of Our Lady.

Alessandro was sentenced to 30 years in prison. After eight years, Maria appeared to him in a dream, offering him 14 white lilies. This vision converted him completely. Released after 27 years, his first act was to beg forgiveness from Maria's mother, who granted it.

Alessandro became a Capuchin lay brother, living in penance. He attended Maria's canonization in 1950, where her mother was also present - the only time a parent attended their child's canonization. Maria's forgiveness had saved his soul.`,
    miracles: [
      "Appeared to Alessandro in prison, leading to his conversion",
      "Her forgiveness transformed her murderer into a penitent religious",
      "Numerous miraculous healings through her intercession",
      "Her story has prevented countless sins against purity",
      "Protection of young people in danger through her intercession",
      "Her mother lived to attend her canonization - unique in Church history"
    ],
    imageUrl: "https://page.gensparksite.com/v1/base64_upload/dac33c0779dd71d8bae17d36b6b22316",
    orderByDate: 1902
  },
  {
    id: "st-clare-assisi",
    name: "St. Clare of Assisi",
    title: "Co-Founder of the Poor Clares",
    knownFor: "Mirror of Franciscan Poverty",
    feastDay: "August 11",
    lifespan: "1194-1253",
    patronOf: "Television, Eye Disease, Goldsmiths, Laundry",
    shortBio: "Italian noblewoman who founded the Order of Poor Clares under St. Francis's guidance. First woman to write a religious rule approved by the Pope, she defended radical poverty and is patron of television for her miraculous vision.",
    fullBio: `Born Chiara Offreduccio to a wealthy noble family in Assisi, Clare was known from childhood for her piety and charity. At 18, inspired by St. Francis's preaching, she secretly left her family on Palm Sunday 1212 to join his movement.

At the Portiuncula, Francis cut her hair and clothed her in rough habit. Her family tried forcefully to retrieve her, but she clung to the altar, revealing her shorn head. Francis placed her at San Damiano, where she was soon joined by her sister Agnes and other women.

Clare became abbess of what would become the Order of Saint Clare (Poor Clares). She insisted on absolute poverty, obtaining the "Privilege of Poverty" from Pope Innocent III - the right to own nothing. Her community lived in radical austerity: barefoot, sleeping on the ground, eating no meat, maintaining near-total silence.

In 1240, when Saracen mercenaries threatened the convent, the bedridden Clare had the Blessed Sacrament brought to the gates. She prayed and heard a voice promising protection; the soldiers fled in fear. This miracle explains her portrayal with a monstrance.

Clare was ill for 27 years but remained joyful. On Christmas Eve 1252, too sick to attend Mass, she miraculously saw and heard the entire liturgy on her cell wall - making her patron of television. She wrote the first religious rule by a woman, approved just before her death on August 11, 1253.`,
    miracles: [
      "Repelled Saracen invaders with the Blessed Sacrament",
      "Miraculously saw and heard Mass from her sickbed (patron of television)",
      "Multiplied food for her sisters during famine",
      "Healed the sick with the sign of the cross",
      "Oil in the monastery lamps miraculously replenished",
      "Protected Assisi from attack through her prayers"
    ],
    imageUrl: "https://page.gensparksite.com/v1/base64_upload/f734681ff2408e75f325e2030619aeb7",
    orderByDate: 1253
  },
  {
    id: "st-bonaventure",
    name: "St. Bonaventure",
    title: "The Seraphic Doctor",
    knownFor: "Franciscan Theologian and Mystic",
    feastDay: "July 15",
    lifespan: "c. 1217-1274",
    patronOf: "Theologians, Bowel Disorders",
    shortBio: "Italian Franciscan theologian who served as Minister General of the Order. A Doctor of the Church known for combining theological brilliance with mystical wisdom, he helped reconcile Aristotelian philosophy with Christian faith.",
    fullBio: `Born Giovanni di Fidanza in Bagnoregio, Italy, he was gravely ill as a child. His mother prayed to St. Francis of Assisi for his healing. When he recovered, St. Francis reportedly exclaimed "O buona ventura" (O good fortune), giving him his religious name.

Entering the Franciscans in 1243, Bonaventure studied under Alexander of Hales in Paris, becoming a master of theology. His brilliant synthesis of faith and reason, combining Augustinian tradition with Aristotelian philosophy, earned him recognition as one of the greatest medieval theologians.

Elected Minister General of the Franciscans in 1257 at age 40, he found the Order divided between strict and moderate interpretations of poverty. Through wise governance and his biography of St. Francis, he unified the Order, earning the title "Second Founder."

His theological works, especially "Journey of the Mind to God," blend intellectual rigor with mystical insight. He taught that all creation reflects God's glory and that contemplation leads through creation to the Creator. His Christocentric theology emphasized Christ as the center of all sciences.

Created Cardinal-Bishop of Albano in 1273, he helped prepare the Second Council of Lyon, working for Church unity. He died suddenly during the Council on July 15, 1274. Thomas Aquinas called him "the wisest of men." He was canonized in 1482 and declared Doctor of the Church in 1588.`,
    miracles: [
      "Healed from childhood illness through St. Francis's intercession",
      "Possessed extraordinary wisdom in resolving theological disputes",
      "Experienced mystical visions and ecstasies during prayer",
      "His writings miraculously survived various attempts at destruction",
      "Prophesied future events including his own death",
      "Brought peace to the divided Franciscan Order"
    ],
    imageUrl: "https://page.gensparksite.com/v1/base64_upload/64c4d50a1f938c7246f7269182386c5a",
    orderByDate: 1274
  },
  {
    id: "st-kateri-tekakwitha",
    name: "St. Kateri Tekakwitha",
    title: "Lily of the Mohawks",
    knownFor: "First Native American Saint",
    feastDay: "July 14",
    lifespan: "1656-1680",
    patronOf: "Environment, Ecology, Native Americans",
    shortBio: "A Mohawk-Algonquin woman who converted to Christianity and lived a life of deep prayer, penance, and virginity. Known as the 'Lily of the Mohawks,' she was the first Native American to be canonized.",
    fullBio: `Kateri Tekakwitha was born in 1656 in present-day New York to a Mohawk father and an Algonquin Christian mother. When she was four, a smallpox epidemic killed her parents and baby brother, leaving her with poor eyesight and a scarred face. She was raised by her anti-Christian uncle.

At age 19, despite strong family opposition, she was baptized by Jesuit missionaries, taking the name Kateri (Catherine). Her conversion led to persecution from her tribe, including threats of torture and death. She fled 200 miles to a Christian mission near Montreal.

At the mission, Kateri lived a life of extraordinary holiness. She took a private vow of virginity - unprecedented for a Native American woman. She practiced severe penances, including sleeping on thorns and fasting extensively. Her devotion to the Eucharist and the rosary was profound.

Kateri's health, already fragile from childhood smallpox, deteriorated from her austere practices. She died on April 17, 1680, at age 24. Witnesses reported that within minutes of her death, the smallpox scars vanished from her face, leaving her radiantly beautiful.

She was beatified by Pope John Paul II in 1980 and canonized by Pope Benedict XVI in 2012, becoming the first Native American saint. Her life bridges Native American spirituality and Catholic faith, showing how indigenous culture can embrace Christianity while maintaining its unique identity.`,
    miracles: [
      "Her smallpox scars miraculously vanished at the moment of death",
      "Appeared to a Jesuit priest in 1680s, healing him of a dangerous fever",
      "Miraculous healing of a young boy with flesh-eating bacteria in 2006",
      "Jake Finkbonner's recovery from necrotizing fasciitis after prayers to her",
      "Numerous healings and conversions among Native American communities",
      "Protection of Christian Native Americans during times of persecution"
    ],
    imageUrl: "https://page.gensparksite.com/v1/base64_upload/e348a5266ae095af5235cddd01153ccd",
    orderByDate: 1680
  },
  {
    id: "st-margaret-antioch",
    name: "St. Margaret of Antioch",
    title: "Virgin and Martyr",
    knownFor: "Dragon Slayer, One of the Fourteen Holy Helpers",
    feastDay: "July 20",
    lifespan: "c. 289-304",
    patronOf: "Childbirth, Pregnant Women, Nurses",
    shortBio: "A virgin martyr of the early Church who, according to legend, was swallowed by Satan in the form of a dragon but escaped unharmed. One of the most venerated saints of the Middle Ages.",
    fullBio: `Margaret of Antioch, also known as Marina in the Eastern tradition, was born to a pagan priest in Antioch during the reign of Diocletian. Her mother died in childbirth, and she was raised by a Christian nurse who secretly baptized and instructed her in the faith.

When her father discovered her Christianity, he disowned her. At age 15, she caught the eye of the Roman governor Olybrius while tending sheep. When she rejected his marriage proposal and refused to renounce Christ, she was subjected to horrible tortures.

According to legend, while imprisoned, Satan appeared to her in the form of a dragon and swallowed her whole. She made the sign of the cross, causing the dragon to burst open, and she emerged unharmed. This story, though considered apocryphal, made her the patroness of childbirth.

She endured various tortures including being burned with torches, bound and thrown into boiling water, and attempts at drowning. Each time, she was miraculously preserved. Finally, she was beheaded in 304 AD.

Margaret's cult became extraordinarily popular in medieval Europe. She was included among the Fourteen Holy Helpers, saints believed to be particularly effective intercessors. Joan of Arc claimed St. Margaret as one of the saints who appeared to her. Though her historicity is debated, her spiritual significance as a model of virginal courage remains powerful.`,
    miracles: [
      "Emerged unharmed after being swallowed by a dragon",
      "Converted thousands who witnessed her tortures and miraculous preservation",
      "Torches used to burn her were extinguished by divine power",
      "Boiling water she was thrown into became cool like a bath",
      "Chains binding her miraculously broke during torture",
      "Appeared to Joan of Arc providing guidance and courage"
    ],
    imageUrl: "https://page.gensparksite.com/v1/base64_upload/b1791043da9ff23c8181fbe4a422dad4",
    orderByDate: 304.5
  },
  {
    id: "st-ambrose",
    name: "St. Ambrose",
    title: "Doctor of the Church",
    knownFor: "Bishop Who Baptized St. Augustine",
    feastDay: "December 7",
    lifespan: "c. 339-397",
    patronOf: "Milan, Beekeepers, Bishops, Learning",
    shortBio: "Roman governor who became Bishop of Milan by popular acclaim. He courageously confronted emperors, baptized St. Augustine, and introduced congregational singing to the Western Church.",
    fullBio: `Aurelius Ambrosius was born around 339 in Trier to a Roman Christian family of high rank. His father was Praetorian Prefect of Gaul. After studying law in Rome, Ambrose became governor of Aemilia-Liguria, with headquarters in Milan.

In 374, when the Bishop of Milan died, violent disputes arose between Arians and Catholics about the succession. Ambrose, still unbaptized, went to the cathedral to maintain order. A child's voice suddenly cried, "Ambrose for bishop!" The entire assembly took up the cry.

Horrified, Ambrose fled and hid, but Emperor Valentinian confirmed the election. Within eight days, he was baptized, ordained, and consecrated bishop. He immediately gave his wealth to the poor and devoted himself to theological study.

Ambrose became a fierce defender of orthodoxy against Arianism. When Empress Justina demanded a basilica for Arian worship, he and his congregation occupied the church, introducing antiphonal singing to maintain morale. He faced down Emperor Theodosius I, refusing him Communion until he did public penance for ordering a massacre in Thessalonica.

His preaching was instrumental in the conversion of Augustine of Hippo, whom he baptized in 387. He discovered the relics of Saints Gervasius and Protasius, wrote influential hymns still sung today, and established principles of church-state relations that shaped medieval Christianity. He died on Good Friday, April 4, 397.`,
    miracles: [
      "A swarm of bees settled on his infant face, leaving honey without stinging",
      "Discovery of martyrs' relics through a prophetic dream",
      "Forced Emperor Theodosius to do public penance for his sins",
      "His eloquent preaching converted St. Augustine",
      "Healed a boy in Florence through prayer",
      "Successfully defended churches against imperial seizure through prayer"
    ],
    imageUrl: "https://page.gensparksite.com/v1/base64_upload/fb9bb3ede0c51b00e0a3566bc7c921c0",
    orderByDate: 397
  },
  {
    id: "st-jerome",
    name: "St. Jerome",
    title: "Doctor of the Church",
    knownFor: "Translator of the Bible (Vulgate)",
    feastDay: "September 30",
    lifespan: "c. 347-420",
    patronOf: "Translators, Librarians, Biblical Scholars",
    shortBio: "Brilliant but irascible scholar who translated the Bible into Latin, creating the Vulgate that served the Church for over 1000 years. Known for his ascetic life in the desert and fierce theological debates.",
    fullBio: `Eusebius Hieronymus Sophronius, known as Jerome, was born around 347 in Stridon, Dalmatia. He received an excellent classical education in Rome, developing a love for pagan literature, especially Cicero.

A dramatic vision during illness changed his life. He dreamt Christ condemned him as "a Ciceronian, not a Christian," and he was scourged. Upon waking, he found real welts on his body. This experience led him to dedicate himself entirely to Scripture.

Jerome spent years as a hermit in the Syrian desert, where he learned Hebrew from a Jewish convert - a rare skill that proved essential for his life's work. Pope Damasus I commissioned him to revise the Latin translations of Scripture.

In 386, he settled in Bethlehem with St. Paula and other followers, establishing a monastery. There he spent 34 years producing his monumental translation of the Bible directly from Hebrew and Greek - the Vulgate. This translation shaped Western Christianity for over a millennium.

His fierce temperament made him many enemies. He engaged in bitter scholarly disputes, even with St. Augustine. Yet his dedication to Scripture was absolute. His famous saying, "Ignorance of Scripture is ignorance of Christ," encapsulates his life's mission. He died in Bethlehem on September 30, 420.`,
    miracles: [
      "Vision of Christ with physical scourge marks that remained on his body",
      "A lion became his companion after he removed a thorn from its paw",
      "Christ appeared to him on Christmas Eve asking for his sins, not his works",
      "St. Peter appeared in a vision to correct his biblical translations",
      "His mastery of Hebrew considered divinely granted",
      "Extraordinary productivity despite poor health seen as miraculous"
    ],
    imageUrl: "https://page.gensparksite.com/v1/base64_upload/996c852876d9a6814600a64592313989",
    orderByDate: 420
  },
  {
    id: "st-lucy",
    name: "St. Lucy",
    title: "Virgin and Martyr",
    knownFor: "Martyr of Syracuse, Light of Christ",
    feastDay: "December 13",
    lifespan: "c. 283-304",
    patronOf: "The Blind, Eye Diseases, Syracuse",
    shortBio: "A young Sicilian virgin who consecrated herself to Christ and was martyred during Diocletian's persecution. Her name means 'light' and she is invoked for eye problems.",
    fullBio: `Lucy was born in Syracuse, Sicily, around 283 to a wealthy Christian family. Her father died when she was young, leaving her mother Eutychia to arrange a marriage for her. However, Lucy had secretly consecrated her virginity to Christ.

When her mother suffered from a hemorrhage for four years, Lucy persuaded her to make a pilgrimage to the tomb of St. Agatha. There, Eutychia was miraculously healed, and Lucy revealed her vow of virginity and desire to give her dowry to the poor.

Her rejected suitor denounced her as a Christian to the governor. When ordered to sacrifice to idols, she refused. The governor ordered her to be defiled in a brothel, but when guards tried to move her, she became immovable. Even a team of oxen could not budge her.

They tried to burn her, but the flames did not harm her. According to legend, when the governor asked how she could resist, she replied that her strength came from Christ. Some accounts say her eyes were gouged out, but God restored them more beautiful than before.

Finally, she was killed by a sword thrust through her throat. Before dying, she prophesied the end of Diocletian's persecution and the peace of the Church. She died on December 13, 304. Her feast day, once the shortest day of the year in the Julian calendar, associates her with light conquering darkness.`,
    miracles: [
      "Became supernaturally immovable when guards tried to take her to a brothel",
      "Fire could not burn her when they tried to execute her",
      "Her gouged-out eyes were miraculously restored",
      "Prophesied the end of Diocletian's persecution",
      "Her intercession healed her mother's hemorrhage",
      "Light phenomena reported at her tomb and during her feast"
    ],
    imageUrl: "https://page.gensparksite.com/v1/base64_upload/929cdefd26acdff9fa5ef6821b8347c3",
    orderByDate: 304.2
  },
  {
    id: "st-john-chrysostom",
    name: "St. John Chrysostom",
    title: "Doctor of the Church",
    knownFor: "The Golden-Mouthed Preacher",
    feastDay: "September 13",
    lifespan: "c. 347-407",
    patronOf: "Preachers, Orators, Constantinople",
    shortBio: "Archbishop of Constantinople whose eloquent preaching earned him the name 'Golden-Mouthed.' His calls for reform and criticism of imperial excess led to his exile and death.",
    fullBio: `John was born in Antioch around 347 to a military officer and his devout wife Anthusa. After his father's early death, his mother ensured he received the finest education, studying under the famous orator Libanius.

Initially pursuing law, John was drawn to religious life. He spent six years as a hermit in the Syrian mountains, practicing extreme asceticism and memorizing the entire Bible. His health broken, he returned to Antioch and was ordained a priest in 386.

For twelve years, his brilliant preaching filled Antioch's cathedral. He spoke plainly, applying Scripture to daily life and advocating for the poor. His sermons were so popular that pickpockets worked the crowds of listeners.

In 398, he was forcibly made Archbishop of Constantinople. He immediately reformed the clergy, redirected church wealth to the poor, and refused to participate in imperial luxury. His criticism of court excess, especially his denunciation of Empress Eudoxia, made powerful enemies.

A rigged synod deposed him in 403. Though briefly recalled after an earthquake terrified the empress, he was permanently exiled in 404. Even from exile, his influence through letters was so great that he was ordered to a more remote location. He died during the forced march on September 14, 407, saying, "Glory to God for all things."

The Divine Liturgy of St. John Chrysostom remains the most frequently celebrated Eucharistic service in the Byzantine Rite.`,
    miracles: [
      "Experienced heavenly visions during the Divine Liturgy",
      "An earthquake shook Constantinople immediately after his unjust exile",
      "Fire consumed Hagia Sophia cathedral after his final banishment",
      "His eloquent preaching converted thousands and reformed cities",
      "Survived multiple assassination attempts through divine protection",
      "Appeared in visions after death to comfort the persecuted"
    ],
    imageUrl: "https://page.gensparksite.com/v1/base64_upload/ecc0e40543c7ae1f42812977a390bee2",
    orderByDate: 407
  },
  {
    id: "st-gregory-great",
    name: "St. Gregory the Great",
    title: "Pope and Doctor of the Church",
    knownFor: "Father of the Medieval Papacy",
    feastDay: "September 3",
    lifespan: "c. 540-604",
    patronOf: "Musicians, Teachers, Students, Popes",
    shortBio: "From Roman prefect to reluctant pope, he laid foundations for medieval Christianity. Sent missionaries to England, reformed liturgy, and established the papacy's temporal power while serving the poor.",
    fullBio: `Gregory was born around 540 to a wealthy Roman senatorial family. Several of his ancestors were popes. He received an excellent education and became Prefect of Rome at age 30, the city's highest civil office.

After his father's death, Gregory underwent a spiritual transformation. He converted his family estates into monasteries and became a monk himself. This period of contemplative life was, he later said, the happiest of his life.

His abilities made anonymity impossible. He was ordained deacon, served as papal ambassador to Constantinople, and in 590 was unanimously elected pope during a plague. He tried to flee but was forced to accept.

As pope, Gregory proved a brilliant administrator. With imperial authority collapsed, he effectively became Rome's civil ruler. He organized food distribution, negotiated with invading Lombards, and ransomed prisoners. He initiated the conversion of England, sending Augustine of Canterbury to evangelize the Anglo-Saxons.

Gregory reformed the liturgy (Gregorian chant bears his name), wrote extensively including his 'Pastoral Care' which became the handbook for medieval bishops, and popularized the title 'Servant of the servants of God' for popes.

Despite constant illness and the burden of office, he maintained enormous correspondence, guiding the Church through one of history's most challenging transitions. He died on March 12, 604, having transformed the papacy into the spiritual and temporal power that would dominate medieval Europe.`,
    miracles: [
      "The Holy Spirit as a dove whispered in his ear as he preached",
      "Delivered Rome from plague through penitential processions",
      "Vision of Archangel Michael sheathing his sword, ending the plague",
      "Freed a soul from purgatory through thirty Masses",
      "His prayers caused bread to multiply during famine",
      "Miraculous knowledge of distant events through divine revelation"
    ],
    imageUrl: "https://page.gensparksite.com/v1/base64_upload/7f5c0a9d89ef7c5228d6bdca5451ef5d",
    orderByDate: 604
  },
  {
    id: "st-ephrem-syrian",
    name: "St. Ephrem the Syrian",
    title: "Doctor of the Church",
    knownFor: "Harp of the Holy Spirit",
    feastDay: "June 9",
    lifespan: "c. 306-373",
    patronOf: "Spiritual Directors, Deacons",
    shortBio: "Syrian deacon, theologian, and hymnographer whose poetic works combated heresy and enriched liturgy. Known as the 'Harp of the Holy Spirit' for his beautiful theological poetry.",
    fullBio: `Ephrem was born around 306 in Nisibis, Mesopotamia (modern Turkey). According to his own writings, his youth was troubled until a period of imprisonment led to his conversion. He was baptized at age 18 and joined the covenant community associated with Bishop James of Nisibis.

He may have accompanied his bishop to the Council of Nicaea in 325. He served as a teacher and possibly headed the cathedral school in Nisibis. When the city was ceded to Persia in 363, he relocated to Edessa where he spent his final decade.

In Edessa, Ephrem found various heretical groups using popular songs to spread their teachings. He responded by composing orthodox hymns set to the same popular tunes. His hymns, combining profound theology with beautiful poetry, were so successful that they not only countered heresy but enriched the Church's liturgy permanently.

He lived simply as a deacon, refusing higher ordination out of humility. He established a school, taught, and wrote prolifically. His works include biblical commentaries, sermons, and especially hymns - over 400 survive. He organized choirs of women to sing his compositions, revolutionizing liturgical practice.

During a famine in 372-373, Ephrem organized relief efforts and personally cared for the sick. He contracted the disease himself while nursing others and died in June 373. His theological poetry profoundly influenced both Eastern and Western Christianity. He was declared a Doctor of the Church in 1920.`,
    miracles: [
      "His hymns miraculously converted heretics who heard them",
      "Prophesied future events including the fall of Nisibis",
      "His prayers brought rain during severe drought",
      "Healed the sick during his ministry to plague victims",
      "Visions of heaven inspired his mystical poetry",
      "His writings survived destruction attempts, seen as divine preservation"
    ],
    imageUrl: "https://page.gensparksite.com/v1/base64_upload/747f1983d234ecb180f9fd7baf69da03",
    orderByDate: 373
  },
  {
    id: "st-athanasius",
    name: "St. Athanasius",
    title: "Doctor of the Church",
    knownFor: "Defender of Christ's Divinity",
    feastDay: "May 2",
    lifespan: "c. 296-373",
    patronOf: "Theologians, Orthodoxy",
    shortBio: "Bishop of Alexandria who spent 17 years in exile defending the divinity of Christ against Arianism. Known as 'Athanasius Against the World' for his solitary stand for orthodox faith.",
    fullBio: `Athanasius was born around 296 in Alexandria, Egypt. As a young deacon, he accompanied Bishop Alexander to the Council of Nicaea in 325, where he played a crucial role in defending Christ's divinity against the Arian heresy.

He became Bishop of Alexandria in 328, beginning a 45-year episcopate marked by fierce conflict. The Arians taught that Christ was created and subordinate to the Father. Athanasius insisted that only if Christ were truly God could He save humanity.

His refusal to readmit Arians to communion brought imperial persecution. He was exiled five times by four emperors, spending 17 years away from his diocese. His enemies accused him of treason, murder, and sorcery. During exile, he hid among desert monks and continued writing.

His theological works, especially 'On the Incarnation' and 'Against the Arians,' provided the intellectual framework for orthodox Christology. His central argument: "God became man so that man might become god" - salvation requires the Incarnation of the truly divine Word.

He also popularized monasticism through his 'Life of Anthony,' which became a bestseller throughout the empire. Despite seeming to stand alone - "Athanasius contra mundum" - his theological vision ultimately triumphed.

He spent his final years in peace in Alexandria, dying on May 2, 373. The Council of Constantinople in 381 vindicated his theology, definitively establishing Christ's full divinity as orthodox doctrine.`,
    miracles: [
      "As a child, his play baptisms were deemed valid by the bishop",
      "A luminous cross appeared over Jerusalem confirming orthodox faith",
      "Cast to sea in a small boat, he arrived safely through angelic protection",
      "Prophesied Emperor Julian the Apostate's imminent death",
      "Escaped numerous assassination attempts through divine warning",
      "His writings survived multiple destruction attempts miraculously"
    ],
    imageUrl: "https://page.gensparksite.com/v1/base64_upload/349f4ea1c1b89ec65618d009c0c2f368",
    orderByDate: 373.2
  },
  {
    id: "st-basil-great",
    name: "St. Basil the Great",
    title: "Doctor of the Church",
    knownFor: "Father of Eastern Monasticism",
    feastDay: "January 2",
    lifespan: "c. 329-379",
    patronOf: "Hospital Administrators, Reformers, Russia",
    shortBio: "Bishop of Caesarea who defended the Trinity, created the monastic rule for Eastern Christianity, and built the first hospital complex. One of the Three Holy Hierarchs of the Eastern Church.",
    fullBio: `Basil was born around 329 in Caesarea, Cappadocia, into an extraordinarily holy family - his grandmother, parents, and four siblings are all venerated as saints. He received the finest education in Constantinople and Athens, where he formed a deep friendship with Gregory of Nazianzus.

After beginning a promising career as a rhetorician, Basil experienced a spiritual conversion. He traveled through Egypt, Palestine, and Syria studying monastic life, then founded a monastic community on his family estate. His monastic rules, emphasizing community life over solitary asceticism, became the foundation for Eastern monasticism.

Reluctantly ordained priest in 365, he became Archbishop of Caesarea in 370. As bishop, he courageously opposed the Arian Emperor Valens. When the emperor tried to force him to accept Arianism, Basil replied, "Perhaps you have never met a bishop before." His fearlessness so impressed Valens that he backed down.

His greatest theological contribution was his work on the Holy Spirit, articulating the full divinity of the Third Person of the Trinity. This helped establish the orthodox doctrine of one God in three Persons.

Basil's social vision was revolutionary. He preached against wealth inequality and built the "Basiliad" - a vast complex outside Caesarea with a hospital, hospice, orphanage, and trade schools. This was one of the world's first hospital complexes.

Worn out by asceticism and tireless work, he died on January 1, 379, at age 49. His liturgy is still celebrated in Eastern Christianity, and his influence on monasticism, theology, and social justice remains profound.`,
    miracles: [
      "Healed the emperor's son, who died when baptized by Arians",
      "Three pens broke when the emperor tried to sign his exile order",
      "Church doors miraculously opened after prayer, converting Arians",
      "Freed a young man from a written pact with Satan",
      "A Jewish physician converted after Basil's miraculous recovery",
      "The Holy Spirit appeared as a dove whispering in his ear while preaching"
    ],
    imageUrl: "https://page.gensparksite.com/v1/base64_upload/61492bf3f72b4c3b17d538b0ff5ddec0",
    orderByDate: 379
  },
  {
    id: "st-cyril-alexandria",
    name: "St. Cyril of Alexandria",
    title: "Doctor of the Church",
    knownFor: "Defender of Mary as Theotokos",
    feastDay: "June 27",
    lifespan: "c. 376-444",
    patronOf: "Alexandria",
    shortBio: "Patriarch of Alexandria who championed the title 'Theotokos' (Mother of God) for Mary, affirming Christ's divine and human natures united in one person. Key figure at the Council of Ephesus.",
    fullBio: `Cyril was born around 376 in Alexandria and succeeded his uncle Theophilus as Patriarch in 412. His early years as patriarch were marked by conflicts with various groups, but his lasting importance comes from his role in the Christological controversies of the 5th century.

The crisis began when Nestorius, Patriarch of Constantinople, objected to calling Mary "Theotokos" (God-bearer/Mother of God), preferring "Christotokos" (Christ-bearer). Cyril recognized this as threatening the unity of Christ's person - if Mary wasn't the Mother of God, then Christ's humanity and divinity were separate.

Cyril engaged in a fierce theological battle with Nestorius, writing letters and treatises defending the Incarnation. His famous formula was "One nature of the Word incarnate" - meaning Christ's divine and human natures were united in one person.

At the Council of Ephesus in 431, which Cyril dominated, Nestorius was condemned and the title Theotokos was officially affirmed. The council's decision was celebrated with torchlight processions, as the people rejoiced that Mary's honor - and Christ's divinity - had been defended.

Despite his theological brilliance, Cyril could be harsh with opponents. His methods were sometimes questionable, including political maneuvering and even bribery. Yet his theological insights were crucial for orthodox Christology.

He died on June 27, 444. Despite his flaws, his passionate defense of the Incarnation and Mary's divine motherhood shaped Christian doctrine permanently. He was declared a Doctor of the Church in 1882.`,
    miracles: [
      "His theological arguments were seen as divinely inspired",
      "Reported visions of the Virgin Mary confirming his teaching",
      "His prayers allegedly healed the sick during epidemics",
      "Enemies who opposed him suffered mysterious ailments",
      "His writings survived multiple attempts at suppression",
      "Churches dedicated after his victories experienced miraculous events"
    ],
    imageUrl: "https://page.gensparksite.com/v1/base64_upload/7355eb611db6c36b1c045c88d48fe35a",
    orderByDate: 444
  },
  {
    id: "st-narcisa-jesus",
    name: "St. Narcisa de Jesús",
    title: "The Flower of Ecuador",
    knownFor: "Mystic and Lay Dominican",
    feastDay: "December 8",
    lifespan: "1832-1869",
    patronOf: "Ecuador, Lay Dominicans",
    shortBio: "Ecuadorian laywoman who lived a hidden life of extraordinary penance and mystical prayer. Known for her devotion to the Eucharist and extreme mortifications, she was Ecuador's first native saint.",
    fullBio: `Narcisa de Jesús Martillo Morán was born on October 29, 1832, in Nobol, Ecuador, to a poor farming family. The sixth of nine children, she was orphaned at age six and raised by her grandmother. Despite minimal formal education, she learned to read and developed a profound spiritual life.

From childhood, Narcisa showed extraordinary piety. She worked as a seamstress to support herself while dedicating every free moment to prayer. She moved to Guayaquil, where she spent hours before the Blessed Sacrament, often throughout entire nights.

Her penances were extreme even by the standards of her time. She slept only three hours nightly, often on a wooden cross or in a coffin she kept for meditation on death. She fasted rigorously, wore hair shirts, and practiced flagellation. She would stand with arms outstretched for hours, meditating on Christ's passion.

In 1868, seeking greater solitude, she traveled to Lima, Peru. There she lived in the Dominican convent of Patrocinio as a lay member, intensifying her life of prayer and penance. Her mystical experiences included visions, ecstasies, and the gift of prophecy.

She died on December 8, 1869, at age 37, worn out by her austere practices. Her last words were "Jesus, Mary, and Joseph." Initially buried in Lima, her remains were later transferred to Guayaquil.

She was beatified in 1992 and canonized by Pope Benedict XVI in 2008, becoming Ecuador's first native saint. Her life demonstrates that extraordinary holiness can be achieved by laypeople living in the world.`,
    miracles: [
      "Experienced frequent ecstasies and visions during prayer",
      "Possessed the gift of prophecy, foretelling future events",
      "Her body remained incorrupt years after death",
      "Miraculous healing of a paralyzed girl after prayers to her",
      "Multiplication of food during times of need",
      "Appeared in dreams to provide spiritual guidance after death"
    ],
    imageUrl: "https://page.gensparksite.com/v1/base64_upload/02571ddf85fcc7e7c0a84c7a6b2e63f8",
    orderByDate: 1869
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