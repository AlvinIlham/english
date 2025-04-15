const vocabularyData = [
  // A
  {
    id: 1,
    word: "Apple",
    pronunciation: "ˈæp.əl",
    partOfSpeech: "kata benda",
    definition: "A round fruit with firm, white flesh and a green, red, or yellow skin",
    indonesianDefinition: "Buah bulat dengan daging putih yang keras dan kulit berwarna hijau, merah, atau kuning",
    examples: [
      {
        english: "I eat an apple every morning.",
        indonesian: "Saya makan apel setiap pagi."
      },
      {
        english: "She prefers green apples over red ones.",
        indonesian: "Dia lebih suka apel hijau daripada yang merah."
      }
    ],
    category: "A",
    level: "beginner",
  },
  {
    id: 2,
    word: "Adventure",
    pronunciation: "ədˈven.tʃər",
    partOfSpeech: "kata benda",
    definition: "An unusual, exciting, or dangerous experience, journey, or series of events",
    indonesianDefinition: "Pengalaman, perjalanan, atau serangkaian peristiwa yang tidak biasa, menarik, atau berbahaya",
    examples: [
      {
        english: "They went on an adventure in the Amazon rainforest.",
        indonesian: "Mereka pergi berpetualang di hutan hujan Amazon."
      },
      {
        english: "Life is an adventure that must be lived boldly.",
        indonesian: "Hidup adalah petualangan yang harus dijalani dengan berani."
      }
    ],
    category: "A",
    level: "intermediate",
  },
  
  // B
  {
    id: 3,
    word: "Book",
    pronunciation: "bʊk",
    partOfSpeech: "kata benda",
    definition: "A written or printed work consisting of pages bound together",
    indonesianDefinition: "Karya tertulis atau tercetak yang terdiri dari halaman-halaman yang dijilid bersama",
    examples: [
      {
        english: "She reads a book before going to sleep.",
        indonesian: "Dia membaca buku sebelum tidur."
      },
      {
        english: "The library has thousands of books.",
        indonesian: "Perpustakaan memiliki ribuan buku."
      }
    ],
    category: "B",
    level: "beginner",
  },
  {
    id: 4,
    word: "Beautiful",
    pronunciation: "ˈbjuː.tɪ.fəl",
    partOfSpeech: "kata sifat",
    definition: "Having beauty; pleasing to the senses or mind aesthetically",
    indonesianDefinition: "Memiliki keindahan; menyenangkan bagi indera atau pikiran secara estetika",
    examples: [
      {
        english: "The sunset was beautiful.",
        indonesian: "Matahari terbenam itu indah."
      },
      {
        english: "She has a beautiful singing voice.",
        indonesian: "Dia memiliki suara menyanyi yang indah."
      }
    ],
    category: "B",
    level: "beginner",
  },
  
  // C
  {
    id: 5,
    word: "Computer",
    pronunciation: "kəmˈpjuː.tər",
    partOfSpeech: "kata benda",
    definition: "An electronic device for storing and processing data",
    indonesianDefinition: "Perangkat elektronik untuk menyimpan dan memproses data",
    examples: [
      {
        english: "She uses her computer for work.",
        indonesian: "Dia menggunakan komputernya untuk bekerja."
      },
      {
        english: "The computer needs to be upgraded.",
        indonesian: "Komputer itu perlu ditingkatkan."
      }
    ],
    category: "C",
    level: "beginner",
  },
  {
    id: 6,
    word: "Creative",
    pronunciation: "kriˈeɪ.tɪv",
    partOfSpeech: "kata sifat",
    definition: "Having or showing an ability to make new things or think of new ideas",
    indonesianDefinition: "Memiliki atau menunjukkan kemampuan untuk membuat hal-hal baru atau memikirkan ide-ide baru",
    examples: [
      {
        english: "She is a very creative artist.",
        indonesian: "Dia adalah seniman yang sangat kreatif."
      },
      {
        english: "We need creative solutions to this problem.",
        indonesian: "Kita membutuhkan solusi kreatif untuk masalah ini."
      }
    ],
    category: "C",
    level: "intermediate",
  },
  
  // D
  {
    id: 7,
    word: "Dog",
    pronunciation: "dɒɡ",
    partOfSpeech: "kata benda",
    definition: "A domesticated carnivorous mammal that typically has a long snout, an acute sense of smell, and a barking, howling, or whining voice",
    indonesianDefinition: "Mamalia karnivora yang dijinakkan yang biasanya memiliki moncong panjang, indra penciuman yang tajam, dan suara menggonggong, melolong, atau merengek",
    examples: [
      {
        english: "The dog barked at the mailman.",
        indonesian: "Anjing itu menggonggong pada tukang pos."
      },
      {
        english: "She takes her dog for a walk every morning.",
        indonesian: "Dia membawa anjingnya berjalan-jalan setiap pagi."
      }
    ],
    category: "D",
    level: "beginner",
  },
  {
    id: 8,
    word: "Delicious",
    pronunciation: "dɪˈlɪʃ.əs",
    partOfSpeech: "kata sifat",
    definition: "Highly pleasant to the taste",
    indonesianDefinition: "Sangat enak untuk dicicipi",
    examples: [
      {
        english: "The cake was absolutely delicious.",
        indonesian: "Kue itu benar-benar lezat."
      },
      {
        english: "She cooked a delicious meal for us.",
        indonesian: "Dia memasak makanan yang lezat untuk kami."
      }
    ],
    category: "D",
    level: "beginner",
  },
  
  // E
  {
    id: 9,
    word: "Education",
    pronunciation: "ˌed.jʊˈkeɪ.ʃən",
    partOfSpeech: "kata benda",
    definition: "The process of receiving or giving systematic instruction, especially at a school or university",
    indonesianDefinition: "Proses menerima atau memberikan instruksi sistematis, terutama di sekolah atau universitas",
    examples: [
      {
        english: "A good education is essential for success.",
        indonesian: "Pendidikan yang baik sangat penting untuk kesuksesan."
      },
      {
        english: "She values education highly.",
        indonesian: "Dia sangat menghargai pendidikan."
      }
    ],
    category: "E",
    level: "intermediate",
  },
  {
    id: 10,
    word: "Elephant",
    pronunciation: "ˈel.ɪ.fənt",
    partOfSpeech: "kata benda",
    definition: "A very large animal with thick grey skin, large ears, two curved outer teeth called tusks and a long nose called a trunk",
    indonesianDefinition: "Hewan yang sangat besar dengan kulit abu-abu tebal, telinga besar, dua gigi luar melengkung yang disebut gading dan hidung panjang yang disebut belalai",
    examples: [
      {
        english: "The elephant is the largest land animal.",
        indonesian: "Gajah adalah hewan darat terbesar."
      },
      {
        english: "We saw wild elephants on our safari.",
        indonesian: "Kami melihat gajah liar dalam safari kami."
      }
    ],
    category: "E",
    level: "beginner",
  },
  
  // F
  {
    id: 11,
    word: "Friend",
    pronunciation: "frend",
    partOfSpeech: "kata benda",
    definition: "A person whom one knows and with whom one has a bond of mutual affection",
    indonesianDefinition: "Seseorang yang dikenal dan dengan siapa seseorang memiliki ikatan kasih sayang timbal balik",
    examples: [
      {
        english: "She's my best friend.",
        indonesian: "Dia adalah teman terbaik saya."
      },
      {
        english: "Friends should support each other.",
        indonesian: "Teman-teman harus saling mendukung."
      }
    ],
    category: "F",
    level: "beginner",
  },
  {
    id: 12,
    word: "Future",
    pronunciation: "ˈfjuː.tʃər",
    partOfSpeech: "kata benda",
    definition: "The time that will come after the present or events that will happen then",
    indonesianDefinition: "Waktu yang akan datang setelah saat ini atau peristiwa yang akan terjadi kemudian",
    examples: [
      {
        english: "Nobody knows what the future holds.",
        indonesian: "Tidak ada yang tahu apa yang akan terjadi di masa depan."
      },
      {
        english: "We need to plan for the future.",
        indonesian: "Kita perlu merencanakan masa depan."
      }
    ],
    category: "F",
    level: "intermediate",
  },
  
  // G
  {
    id: 13,
    word: "Garden",
    pronunciation: "ˈɡɑː.dən",
    partOfSpeech: "kata benda",
    definition: "A piece of ground, often near a house, used for growing flowers, fruit, or vegetables",
    indonesianDefinition: "Sebidang tanah, sering dekat rumah, yang digunakan untuk menanam bunga, buah, atau sayuran",
    examples: [
      {
        english: "She spends hours working in her garden.",
        indonesian: "Dia menghabiskan berjam-jam bekerja di kebunnya."
      },
      {
        english: "The garden is full of beautiful flowers.",
        indonesian: "Kebun itu penuh dengan bunga-bunga indah."
      }
    ],
    category: "G",
    level: "beginner",
  },
  {
    id: 14,
    word: "Global",
    pronunciation: "ˈɡləʊ.bəl",
    partOfSpeech: "kata sifat",
    definition: "Relating to the whole world; worldwide",
    indonesianDefinition: "Berkaitan dengan seluruh dunia; di seluruh dunia",
    examples: [
      {
        english: "Climate change is a global issue.",
        indonesian: "Perubahan iklim adalah masalah global."
      },
      {
        english: "The company has a global presence.",
        indonesian: "Perusahaan itu memiliki kehadiran global."
      }
    ],
    category: "G",
    level: "intermediate",
  },
  
  // H
  {
    id: 15,
    word: "Happy",
    pronunciation: "ˈhæp.i",
    partOfSpeech: "kata sifat",
    definition: "Feeling or showing pleasure or contentment",
    indonesianDefinition: "Merasa atau menunjukkan kesenangan atau kepuasan",
    examples: [
      {
        english: "She looks happy today.",
        indonesian: "Dia terlihat bahagia hari ini."
      },
      {
        english: "We are happy with the results.",
        indonesian: "Kami senang dengan hasilnya."
      }
    ],
    category: "H",
    level: "beginner",
  },
  {
    id: 16,
    word: "History",
    pronunciation: "ˈhɪs.tər.i",
    partOfSpeech: "kata benda",
    definition: "The study of past events, particularly in human affairs",
    indonesianDefinition: "Studi tentang peristiwa masa lalu, khususnya dalam urusan manusia",
    examples: [
      {
        english: "She studies ancient history.",
        indonesian: "Dia mempelajari sejarah kuno."
      },
      {
        english: "History tends to repeat itself.",
        indonesian: "Sejarah cenderung berulang."
      }
    ],
    category: "H",
    level: "intermediate",
  },
  
  // I
  {
    id: 17,
    word: "Important",
    pronunciation: "ɪmˈpɔː.tənt",
    partOfSpeech: "kata sifat",
    definition: "Of great significance or value; likely to have a profound effect on success, survival, or well-being",
    indonesianDefinition: "Sangat penting atau bernilai; kemungkinan memiliki efek mendalam pada kesuksesan, kelangsungan hidup, atau kesejahteraan",
    examples: [
      {
        english: "This is an important decision.",
        indonesian: "Ini adalah keputusan penting."
      },
      {
        english: "Health is more important than wealth.",
        indonesian: "Kesehatan lebih penting daripada kekayaan."
      }
    ],
    category: "I",
    level: "beginner",
  },
  {
    id: 18,
    word: "Innovation",
    pronunciation: "ˌɪn.əˈveɪ.ʃən",
    partOfSpeech: "kata benda",
    definition: "The action or process of innovating; a new method, idea, product, etc.",
    indonesianDefinition: "Tindakan atau proses berinovasi; metode, ide, produk baru, dll.",
    examples: [
      {
        english: "The company is known for its innovation.",
        indonesian: "Perusahaan itu dikenal karena inovasinya."
      },
      {
        english: "Innovation is key to staying competitive.",
        indonesian: "Inovasi adalah kunci untuk tetap kompetitif."
      }
    ],
    category: "I",
    level: "advanced",
  },
  
  // J
  {
    id: 19,
    word: "Journey",
    pronunciation: "ˈdʒɜː.ni",
    partOfSpeech: "kata benda",
    definition: "An act of traveling from one place to another",
    indonesianDefinition: "Tindakan bepergian dari satu tempat ke tempat lain",
    examples: [
      {
        english: "The journey to the mountain took three days.",
        indonesian: "Perjalanan ke gunung memakan waktu tiga hari."
      },
      {
        english: "Life is a journey, not a destination.",
        indonesian: "Hidup adalah perjalanan, bukan tujuan."
      }
    ],
    category: "J",
    level: "intermediate",
  },
  {
    id: 20,
    word: "Joy",
    pronunciation: "dʒɔɪ",
    partOfSpeech: "kata benda",
    definition: "A feeling of great pleasure and happiness",
    indonesianDefinition: "Perasaan senang dan bahagia yang besar",
    examples: [
      {
        english: "The birth of her child brought her great joy.",
        indonesian: "Kelahiran anaknya membawa kegembiraan besar baginya."
      },
      {
        english: "The children's faces were full of joy.",
        indonesian: "Wajah anak-anak itu penuh dengan kegembiraan."
      }
    ],
    category: "J",
    level: "beginner",
  },
  
  // K
  {
    id: 21,
    word: "Knowledge",
    pronunciation: "ˈnɒl.ɪdʒ",
    partOfSpeech: "kata benda",
    definition: "Facts, information, and skills acquired by a person through experience or education",
    indonesianDefinition: "Fakta, informasi, dan keterampilan yang diperoleh seseorang melalui pengalaman atau pendidikan",
    examples: [
      {
        english: "She has extensive knowledge of ancient history.",
        indonesian: "Dia memiliki pengetahuan luas tentang sejarah kuno."
      },
      {
        english: "Knowledge is power.",
        indonesian: "Pengetahuan adalah kekuatan."
      }
    ],
    category: "K",
    level: "intermediate",
  },
  {
    id: 22,
    word: "Kind",
    pronunciation: "kaɪnd",
    partOfSpeech: "kata sifat",
    definition: "Having or showing a friendly, generous, and considerate nature",
    indonesianDefinition: "Memiliki atau menunjukkan sifat ramah, murah hati, dan penuh perhatian",
    examples: [
      {
        english: "She is a very kind person.",
        indonesian: "Dia adalah orang yang sangat baik."
      },
      {
        english: "It was kind of you to help.",
        indonesian: "Sungguh baik hati Anda untuk membantu."
      }
    ],
    category: "K",
    level: "beginner",
  },
  
  // L
  {
    id: 23,
    word: "Language",
    pronunciation: "ˈlæŋ.ɡwɪdʒ",
    partOfSpeech: "kata benda",
    definition: "The method of human communication, either spoken or written, consisting of the use of words in a structured and conventional way",
    indonesianDefinition: "Metode komunikasi manusia, baik lisan maupun tertulis, yang terdiri dari penggunaan kata-kata dengan cara yang terstruktur dan konvensional",
    examples: [
      {
        english: "English is a global language.",
        indonesian: "Bahasa Inggris adalah bahasa global."
      },
      {
        english: "She speaks three languages fluently.",
        indonesian: "Dia berbicara tiga bahasa dengan lancar."
      }
    ],
    category: "L",
    level: "intermediate",
  },
  {
    id: 24,
    word: "Love",
    pronunciation: "lʌv",
    partOfSpeech: "kata benda",
    definition: "An intense feeling of deep affection",
    indonesianDefinition: "Perasaan kasih sayang yang mendalam dan intens",
    examples: [
      {
        english: "A mother's love for her child is unconditional.",
        indonesian: "Cinta seorang ibu untuk anaknya tidak bersyarat."
      },
      {
        english: "Love conquers all.",
        indonesian: "Cinta mengalahkan segalanya."
      }
    ],
    category: "L",
    level: "beginner",
  },
  
  // M
  {
    id: 25,
    word: "Music",
    pronunciation: "ˈmjuː.zɪk",
    partOfSpeech: "kata benda",
    definition: "Vocal or instrumental sounds (or both) combined in such a way as to produce beauty of form, harmony, and expression of emotion",
    indonesianDefinition: "Suara vokal atau instrumental (atau keduanya) yang dikombinasikan sedemikian rupa untuk menghasilkan keindahan bentuk, harmoni, dan ekspresi emosi",
    examples: [
      {
        english: "Classical music helps me relax.",
        indonesian: "Musik klasik membantu saya bersantai."
      },
      {
        english: "She has a passion for music.",
        indonesian: "Dia memiliki hasrat untuk musik."
      }
    ],
    category: "M",
    level: "beginner",
  },
  {
    id: 26,
    word: "Mountain",
    pronunciation: "ˈmaʊn.tɪn",
    partOfSpeech: "kata benda",
    definition: "A large natural elevation of the earth's surface rising abruptly from the surrounding level",
    indonesianDefinition: "Elevasi alami yang besar dari permukaan bumi yang naik secara tiba-tiba dari level sekitarnya",
    examples: [
      {
        english: "They climbed the highest mountain in the region.",
        indonesian: "Mereka mendaki gunung tertinggi di wilayah itu."
      },
      {
        english: "The mountain was covered in snow.",
        indonesian: "Gunung itu tertutup salju."
      }
    ],
    category: "M",
    level: "beginner",
  },
  
  // N
  {
    id: 27,
    word: "Nature",
    pronunciation: "ˈneɪ.tʃər",
    partOfSpeech: "kata benda",
    definition: "The phenomena of the physical world collectively, including plants, animals, the landscape, and other features and products of the earth",
    indonesianDefinition: "Fenomena dunia fisik secara kolektif, termasuk tumbuhan, hewan, lanskap, dan fitur serta produk bumi lainnya",
    examples: [
      {
        english: "We should protect nature.",
        indonesian: "Kita harus melindungi alam."
      },
      {
        english: "She loves spending time in nature.",
        indonesian: "Dia suka menghabiskan waktu di alam."
      }
    ],
    category: "N",
    level: "intermediate",
  },
  {
    id: 28,
    word: "Night",
    pronunciation: "naɪt",
    partOfSpeech: "kata benda",
    definition: "The period of darkness in each twenty-four hours; the time from sunset to sunrise",
    indonesianDefinition: "Periode kegelapan dalam setiap dua puluh empat jam; waktu dari matahari terbenam hingga matahari terbit",
    examples: [
      {
        english: "The stars shine brightly at night.",
        indonesian: "Bintang-bintang bersinar terang di malam hari."
      },
      {
        english: "I couldn't sleep last night.",
        indonesian: "Saya tidak bisa tidur tadi malam."
      }
    ],
    category: "N",
    level: "beginner",
  },
  
  // O
  {
    id: 29,
    word: "Ocean",
    pronunciation: "ˈəʊ.ʃən",
    partOfSpeech: "kata benda",
    definition: "A very large expanse of sea",
    indonesianDefinition: "Hamparan laut yang sangat luas",
    examples: [
      {
        english: "The Pacific Ocean is the largest ocean on Earth.",
        indonesian: "Samudra Pasifik adalah samudra terbesar di Bumi."
      },
      {
        english: "The ocean is home to countless species.",
        indonesian: "Lautan adalah rumah bagi tak terhitung spesies."
      }
    ],
    category: "O",
    level: "beginner",
  },
  {
    id: 30,
    word: "Opportunity",
    pronunciation: "ˌɒp.əˈtjuː.nə.ti",
    partOfSpeech: "kata benda",
    definition: "A time or set of circumstances that makes it possible to do something",
    indonesianDefinition: "Waktu atau serangkaian keadaan yang memungkinkan untuk melakukan sesuatu",
    examples: [
      {
        english: "She seized the opportunity to study abroad.",
        indonesian: "Dia memanfaatkan kesempatan untuk belajar di luar negeri."
      },
      {
        english: "This job is a great opportunity for you.",
        indonesian: "Pekerjaan ini adalah kesempatan bagus untuk Anda."
      }
    ],
    category: "O",
    level: "intermediate",
  },
  
  // P
  {
    id: 31,
    word: "Peace",
    pronunciation: "piːs",
    partOfSpeech: "kata benda",
    definition: "Freedom from disturbance; tranquility",
    indonesianDefinition: "Kebebasan dari gangguan; ketenangan",
    examples: [
      {
        english: "All we want is peace in the region.",
        indonesian: "Yang kita inginkan hanyalah perdamaian di wilayah ini."
      },
      {
        english: "The countryside offers peace and quiet.",
        indonesian: "Pedesaan menawarkan kedamaian dan ketenangan."
      }
    ],
    category: "P",
    level: "intermediate",
  },
  {
    id: 32,
    word: "Problem",
    pronunciation: "ˈprɒb.ləm",
    partOfSpeech: "kata benda",
    definition: "A matter or situation regarded as unwelcome or harmful and needing to be dealt with and overcome",
    indonesianDefinition: "Masalah atau situasi yang dianggap tidak diinginkan atau berbahaya dan perlu ditangani dan diatasi",
    examples: [
      {
        english: "We need to solve this problem quickly.",
        indonesian: "Kita perlu menyelesaikan masalah ini dengan cepat."
      },
      {
        english: "Every problem has a solution.",
        indonesian: "Setiap masalah memiliki solusi."
      }
    ],
    category: "P",
    level: "beginner",
  },
  
  // Q
  {
    id: 33,
    word: "Quality",
    pronunciation: "ˈkwɒl.ə.ti",
    partOfSpeech: "kata benda",
    definition: "The standard of something as measured against other things of a similar kind; the degree of excellence of something",
    indonesianDefinition: "Standar sesuatu yang diukur terhadap hal-hal serupa lainnya; tingkat keunggulan sesuatu",
    examples: [
      {
        english: "We focus on quality, not quantity.",
        indonesian: "Kami fokus pada kualitas, bukan kuantitas."
      },
      {
        english: "The quality of the product is excellent.",
        indonesian: "Kualitas produk tersebut sangat baik."
      }
    ],
    category: "Q",
    level: "intermediate",
  },
  {
    id: 34,
    word: "Question",
    pronunciation: "ˈkwes.tʃən",
    partOfSpeech: "kata benda",
    definition: "A sentence worded or expressed so as to elicit information",
    indonesian: "Setiap masalah memiliki solusi."
  }
]
