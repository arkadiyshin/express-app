export const LIMIT_DEFAULT = 10;
export const LIST_OF_FILTERS =
    [
        'name', 
        'breed_group', 
        'temperament', 
        'origin', 
        'country_code',
    ];

    
const dogs =
    [
        {
            "weight": {
                "imperial": "6 - 13",
                "metric": "3 - 6"
            },
            "height": {
                "imperial": "9 - 11.5",
                "metric": "23 - 29"
            },
            "id": 1,
            "name": "Affenpinscher",
            "bred_for": "Small rodent hunting, lapdog",
            "breed_group": "Toy",
            "life_span": "10 - 12 years",
            "temperament": "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",
            "origin": "Germany, France",
            "reference_image_id": "BJa4kxc4X",
            "image": {
                "id": "BJa4kxc4X",
                "width": 1600,
                "height": 1199,
                "url": "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg"
            }
        },
        {
            "weight": {
                "imperial": "50 - 60",
                "metric": "23 - 27"
            },
            "height": {
                "imperial": "25 - 27",
                "metric": "64 - 69"
            },
            "id": 2,
            "name": "Afghan Hound",
            "country_code": "AG",
            "bred_for": "Coursing and hunting",
            "breed_group": "Hound",
            "life_span": "10 - 13 years",
            "temperament": "Aloof, Clownish, Dignified, Independent, Happy",
            "origin": "Afghanistan, Iran, Pakistan",
            "reference_image_id": "hMyT4CDXR",
            "image": {
                "id": "hMyT4CDXR",
                "width": 606,
                "height": 380,
                "url": "https://cdn2.thedogapi.com/images/hMyT4CDXR.jpg"
            }
        },
        {
            "weight": {
                "imperial": "44 - 66",
                "metric": "20 - 30"
            },
            "height": {
                "imperial": "30",
                "metric": "76"
            },
            "id": 3,
            "name": "African Hunting Dog",
            "bred_for": "A wild pack animal",
            "life_span": "11 years",
            "temperament": "Wild, Hardworking, Dutiful",
            "origin": "",
            "reference_image_id": "rkiByec47",
            "image": {
                "id": "rkiByec47",
                "width": 500,
                "height": 335,
                "url": "https://cdn2.thedogapi.com/images/rkiByec47.jpg"
            }
        },
        {
            "weight": {
                "imperial": "40 - 65",
                "metric": "18 - 29"
            },
            "height": {
                "imperial": "21 - 23",
                "metric": "53 - 58"
            },
            "id": 4,
            "name": "Airedale Terrier",
            "bred_for": "Badger, otter hunting",
            "breed_group": "Terrier",
            "life_span": "10 - 13 years",
            "temperament": "Outgoing, Friendly, Alert, Confident, Intelligent, Courageous",
            "origin": "United Kingdom, England",
            "reference_image_id": "1-7cgoZSh",
            "image": {
                "id": "1-7cgoZSh",
                "width": 645,
                "height": 430,
                "url": "https://cdn2.thedogapi.com/images/1-7cgoZSh.jpg"
            }
        },
        {
            "weight": {
                "imperial": "90 - 120",
                "metric": "41 - 54"
            },
            "height": {
                "imperial": "28 - 34",
                "metric": "71 - 86"
            },
            "id": 5,
            "name": "Akbash Dog",
            "bred_for": "Sheep guarding",
            "breed_group": "Working",
            "life_span": "10 - 12 years",
            "temperament": "Loyal, Independent, Intelligent, Brave",
            "origin": "",
            "reference_image_id": "26pHT3Qk7",
            "image": {
                "id": "26pHT3Qk7",
                "width": 600,
                "height": 471,
                "url": "https://cdn2.thedogapi.com/images/26pHT3Qk7.jpg"
            }
        },
        {
            "weight": {
                "imperial": "65 - 115",
                "metric": "29 - 52"
            },
            "height": {
                "imperial": "24 - 28",
                "metric": "61 - 71"
            },
            "id": 6,
            "name": "Akita",
            "bred_for": "Hunting bears",
            "breed_group": "Working",
            "life_span": "10 - 14 years",
            "temperament": "Docile, Alert, Responsive, Dignified, Composed, Friendly, Receptive, Faithful, Courageous",
            "reference_image_id": "BFRYBufpm",
            "image": {
                "id": "BFRYBufpm",
                "width": 1280,
                "height": 853,
                "url": "https://cdn2.thedogapi.com/images/BFRYBufpm.jpg"
            }
        },
        {
            "weight": {
                "imperial": "55 - 90",
                "metric": "25 - 41"
            },
            "height": {
                "imperial": "18 - 24",
                "metric": "46 - 61"
            },
            "id": 7,
            "name": "Alapaha Blue Blood Bulldog",
            "description": "The Alapaha Blue Blood Bulldog is a well-developed, exaggerated bulldog with a broad head and natural drop ears. The prominent muzzle is covered by loose upper lips. The prominent eyes are set well apart. The Alapaha's coat is relatively short and fairly stiff. Preferred colors are blue merle, brown merle, or red merle all trimmed in white or chocolate and white. Also preferred are the glass eyes (blue) or marble eyes (brown and blue mixed in a single eye). The ears and tail are never trimmed or docked. The body is sturdy and very muscular. The well-muscled hips are narrower than the chest. The straight back is as long as the dog is high at the shoulders. The dewclaws are never removed and the feet are cat-like.",
            "bred_for": "Guarding",
            "breed_group": "Mixed",
            "life_span": "12 - 13 years",
            "history": "",
            "temperament": "Loving, Protective, Trainable, Dutiful, Responsible",
            "reference_image_id": "33mJ-V3RX",
            "image": {
                "id": "33mJ-V3RX",
                "width": 1828,
                "height": 2065,
                "url": "https://cdn2.thedogapi.com/images/33mJ-V3RX.jpg"
            }
        },
        {
            "weight": {
                "imperial": "38 - 50",
                "metric": "17 - 23"
            },
            "height": {
                "imperial": "23 - 26",
                "metric": "58 - 66"
            },
            "id": 8,
            "name": "Alaskan Husky",
            "bred_for": "Sled pulling",
            "breed_group": "Mixed",
            "life_span": "10 - 13 years",
            "temperament": "Friendly, Energetic, Loyal, Gentle, Confident",
            "reference_image_id": "-HgpNnGXl",
            "image": {
                "id": "-HgpNnGXl",
                "width": 500,
                "height": 500,
                "url": "https://cdn2.thedogapi.com/images/-HgpNnGXl.jpg"
            }
        },
        {
            "weight": {
                "imperial": "65 - 100",
                "metric": "29 - 45"
            },
            "height": {
                "imperial": "23 - 25",
                "metric": "58 - 64"
            },
            "id": 9,
            "name": "Alaskan Malamute",
            "bred_for": "Hauling heavy freight, Sled pulling",
            "breed_group": "Working",
            "life_span": "12 - 15 years",
            "temperament": "Friendly, Affectionate, Devoted, Loyal, Dignified, Playful",
            "reference_image_id": "dW5UucTIW",
            "image": {
                "id": "dW5UucTIW",
                "width": 1023,
                "height": 769,
                "url": "https://cdn2.thedogapi.com/images/dW5UucTIW.jpg"
            }
        },
        {
            "weight": {
                "imperial": "60 - 120",
                "metric": "27 - 54"
            },
            "height": {
                "imperial": "22 - 27",
                "metric": "56 - 69"
            },
            "id": 10,
            "name": "American Bulldog",
            "breed_group": "Working",
            "life_span": "10 - 12 years",
            "temperament": "Friendly, Assertive, Energetic, Loyal, Gentle, Confident, Dominant",
            "reference_image_id": "pk1AAdloG",
            "image": {
                "id": "pk1AAdloG",
                "width": 1669,
                "height": 1377,
                "url": "https://cdn2.thedogapi.com/images/pk1AAdloG.jpg"
            }
        },
        {
            "weight": {
                "imperial": "30 - 150",
                "metric": "14 - 68"
            },
            "height": {
                "imperial": "14 - 17",
                "metric": "36 - 43"
            },
            "id": 11,
            "name": "American Bully",
            "country_code": "US",
            "bred_for": "Family companion dog",
            "breed_group": "",
            "life_span": "8 – 15 years",
            "temperament": "Strong Willed, Stubborn, Friendly, Clownish, Affectionate, Loyal, Obedient, Intelligent, Courageous",
            "reference_image_id": "sqQJDtbpY",
            "image": {
                "id": "sqQJDtbpY",
                "width": 1024,
                "height": 683,
                "url": "https://cdn2.thedogapi.com/images/sqQJDtbpY.jpg"
            }
        },
        {
            "weight": {
                "imperial": "20 - 40",
                "metric": "9 - 18"
            },
            "height": {
                "imperial": "15 - 19",
                "metric": "38 - 48"
            },
            "id": 12,
            "name": "American Eskimo Dog",
            "country_code": "US",
            "bred_for": "Circus performer",
            "breed_group": "Non-Sporting",
            "life_span": "12 - 15 years",
            "temperament": "Friendly, Alert, Reserved, Intelligent, Protective",
            "reference_image_id": "Bymjyec4m",
            "image": {
                "id": "Bymjyec4m",
                "width": 1000,
                "height": 802,
                "url": "https://cdn2.thedogapi.com/images/Bymjyec4m.jpg"
            }
        },
        {
            "weight": {
                "imperial": "7 - 10",
                "metric": "3 - 5"
            },
            "height": {
                "imperial": "9 - 12",
                "metric": "23 - 30"
            },
            "id": 13,
            "name": "American Eskimo Dog (Miniature)",
            "country_code": "US",
            "bred_for": "Companionship",
            "life_span": "13 – 15 years",
            "temperament": "Friendly, Alert, Reserved, Intelligent, Protective",
            "reference_image_id": "_gn8GLrE6",
            "image": {
                "id": "_gn8GLrE6",
                "width": 730,
                "height": 487,
                "url": "https://cdn2.thedogapi.com/images/_gn8GLrE6.jpg"
            }
        },
        {
            "weight": {
                "imperial": "65 - 75",
                "metric": "29 - 34"
            },
            "height": {
                "imperial": "21 - 28",
                "metric": "53 - 71"
            },
            "id": 14,
            "name": "American Foxhound",
            "country_code": "US",
            "bred_for": "Fox hunting, scent hound",
            "breed_group": "Hound",
            "life_span": "8 - 15 years",
            "temperament": "Kind, Sweet-Tempered, Loyal, Independent, Intelligent, Loving",
            "reference_image_id": "S14n1x9NQ",
            "image": {
                "id": "S14n1x9NQ",
                "width": 3000,
                "height": 2400,
                "url": "https://cdn2.thedogapi.com/images/S14n1x9NQ.jpg"
            }
        },
        {
            "weight": {
                "imperial": "30 - 60",
                "metric": "14 - 27"
            },
            "height": {
                "imperial": "17 - 21",
                "metric": "43 - 53"
            },
            "id": 15,
            "name": "American Pit Bull Terrier",
            "country_code": "US",
            "bred_for": "Fighting",
            "breed_group": "Terrier",
            "life_span": "10 - 15 years",
            "temperament": "Strong Willed, Stubborn, Friendly, Clownish, Affectionate, Loyal, Obedient, Intelligent, Courageous",
            "reference_image_id": "HkC31gcNm",
            "image": {
                "id": "HkC31gcNm",
                "width": 300,
                "height": 244,
                "url": "https://cdn2.thedogapi.com/images/HkC31gcNm.png"
            }
        },
        {
            "weight": {
                "imperial": "50 - 60",
                "metric": "23 - 27"
            },
            "height": {
                "imperial": "17 - 19",
                "metric": "43 - 48"
            },
            "id": 16,
            "name": "American Staffordshire Terrier",
            "country_code": "US",
            "bred_for": "",
            "breed_group": "Terrier",
            "life_span": "12 - 15 years",
            "temperament": "Tenacious, Friendly, Devoted, Loyal, Attentive, Courageous",
            "reference_image_id": "rJIakgc4m",
            "image": {
                "id": "rJIakgc4m",
                "width": 357,
                "height": 500,
                "url": "https://cdn2.thedogapi.com/images/rJIakgc4m.jpg"
            }
        },
        {
            "weight": {
                "imperial": "25 - 45",
                "metric": "11 - 20"
            },
            "height": {
                "imperial": "15 - 18",
                "metric": "38 - 46"
            },
            "id": 17,
            "name": "American Water Spaniel",
            "country_code": "US",
            "bred_for": "Bird flushing and retrieving",
            "breed_group": "Sporting",
            "life_span": "10 - 12 years",
            "temperament": "Friendly, Energetic, Obedient, Intelligent, Protective, Trainable",
            "reference_image_id": "SkmRJl9VQ",
            "image": {
                "id": "SkmRJl9VQ",
                "width": 1600,
                "height": 1264,
                "url": "https://cdn2.thedogapi.com/images/SkmRJl9VQ.jpg"
            }
        },
        {
            "weight": {
                "imperial": "80 - 150",
                "metric": "36 - 68"
            },
            "height": {
                "imperial": "27 - 29",
                "metric": "69 - 74"
            },
            "id": 18,
            "name": "Anatolian Shepherd Dog",
            "bred_for": "Livestock herding",
            "breed_group": "Working",
            "life_span": "11 - 13 years",
            "temperament": "Steady, Bold, Independent, Confident, Intelligent, Proud",
            "reference_image_id": "BJT0Jx5Nm",
            "image": {
                "id": "BJT0Jx5Nm",
                "width": 1216,
                "height": 1131,
                "url": "https://cdn2.thedogapi.com/images/BJT0Jx5Nm.jpg"
            }
        },
        {
            "weight": {
                "imperial": "48 - 55",
                "metric": "22 - 25"
            },
            "height": {
                "imperial": "20 - 22",
                "metric": "51 - 56"
            },
            "id": 19,
            "name": "Appenzeller Sennenhund",
            "bred_for": "Herding livestock, pulling carts, and guarding the farm",
            "life_span": "12 – 14 years",
            "temperament": "Reliable, Fearless, Energetic, Lively, Self-assured",
            "reference_image_id": "HkNkxlqEX",
            "image": {
                "id": "HkNkxlqEX",
                "width": 400,
                "height": 600,
                "url": "https://cdn2.thedogapi.com/images/HkNkxlqEX.jpg"
            }
        },
        {
            "weight": {
                "imperial": "44 - 62",
                "metric": "20 - 28"
            },
            "height": {
                "imperial": "17 - 20",
                "metric": "43 - 51"
            },
            "id": 21,
            "name": "Australian Cattle Dog",
            "country_code": "AU",
            "bred_for": "Cattle herding, herding trials",
            "breed_group": "Herding",
            "life_span": "12 - 14 years",
            "temperament": "Cautious, Energetic, Loyal, Obedient, Protective, Brave",
            "reference_image_id": "IBkYVm4v1",
            "image": {
                "id": "IBkYVm4v1",
                "width": 736,
                "height": 850,
                "url": "https://cdn2.thedogapi.com/images/IBkYVm4v1.jpg"
            }
        },
        {
            "weight": {
                "imperial": "31 - 46",
                "metric": "14 - 21"
            },
            "height": {
                "imperial": "17 - 20",
                "metric": "43 - 51"
            },
            "id": 22,
            "name": "Australian Kelpie",
            "country_code": "AU",
            "bred_for": "Farm dog, Cattle herding",
            "breed_group": "Herding",
            "life_span": "10 - 13 years",
            "temperament": "Friendly, Energetic, Alert, Loyal, Intelligent, Eager",
            "reference_image_id": "Hyq1ge9VQ",
            "image": {
                "id": "Hyq1ge9VQ",
                "width": 800,
                "height": 533,
                "url": "https://cdn2.thedogapi.com/images/Hyq1ge9VQ.jpg"
            }
        },
        {
            "weight": {
                "imperial": "35 - 65",
                "metric": "16 - 29"
            },
            "height": {
                "imperial": "18 - 23",
                "metric": "46 - 58"
            },
            "id": 23,
            "name": "Australian Shepherd",
            "country_code": "AU",
            "bred_for": "Sheep herding",
            "breed_group": "Herding",
            "life_span": "12 - 16 years",
            "temperament": "Good-natured, Affectionate, Intelligent, Active, Protective",
            "reference_image_id": "B1-llgq4m",
            "image": {
                "id": "B1-llgq4m",
                "width": 1200,
                "height": 733,
                "url": "https://cdn2.thedogapi.com/images/B1-llgq4m.jpg"
            }
        },
        {
            "weight": {
                "imperial": "14 - 16",
                "metric": "6 - 7"
            },
            "height": {
                "imperial": "10 - 11",
                "metric": "25 - 28"
            },
            "id": 24,
            "name": "Australian Terrier",
            "country_code": "AU",
            "bred_for": "Cattle herdering, hunting snakes and rodents",
            "breed_group": "Terrier",
            "life_span": "15 years",
            "temperament": "Spirited, Alert, Loyal, Companionable, Even Tempered, Courageous",
            "reference_image_id": "r1Ylge5Vm",
            "image": {
                "id": "r1Ylge5Vm",
                "width": 1081,
                "height": 720,
                "url": "https://cdn2.thedogapi.com/images/r1Ylge5Vm.jpg"
            }
        },
        {
            "weight": {
                "imperial": "33 - 55",
                "metric": "15 - 25"
            },
            "height": {
                "imperial": "23 - 29",
                "metric": "58 - 74"
            },
            "id": 25,
            "name": "Azawakh",
            "bred_for": "Livestock guardian, hunting",
            "breed_group": "Hound",
            "life_span": "10 - 13 years",
            "temperament": "Aloof, Affectionate, Attentive, Rugged, Fierce, Refined",
            "reference_image_id": "SkvZgx94m",
            "image": {
                "id": "SkvZgx94m",
                "width": 1024,
                "height": 768,
                "url": "https://cdn2.thedogapi.com/images/SkvZgx94m.jpg"
            }
        },
        {
            "weight": {
                "imperial": "40 - 65",
                "metric": "18 - 29"
            },
            "height": {
                "imperial": "20 - 26",
                "metric": "51 - 66"
            },
            "id": 26,
            "name": "Barbet",
            "bred_for": "Hunting water game",
            "life_span": "13 – 15 years",
            "temperament": "Obedient, Companionable, Intelligent, Joyful",
            "reference_image_id": "HyWGexcVQ",
            "image": {
                "id": "HyWGexcVQ",
                "width": 853,
                "height": 1280,
                "url": "https://cdn2.thedogapi.com/images/HyWGexcVQ.jpg"
            }
        },
        {
            "weight": {
                "imperial": "22 - 24",
                "metric": "10 - 11"
            },
            "height": {
                "imperial": "16 - 17",
                "metric": "41 - 43"
            },
            "id": 28,
            "name": "Basenji",
            "bred_for": "Hunting",
            "breed_group": "Hound",
            "life_span": "10 - 12 years",
            "temperament": "Affectionate, Energetic, Alert, Curious, Playful, Intelligent",
            "reference_image_id": "H1dGlxqNQ",
            "image": {
                "id": "H1dGlxqNQ",
                "width": 740,
                "height": 493,
                "url": "https://cdn2.thedogapi.com/images/H1dGlxqNQ.jpg"
            }
        },
        {
            "weight": {
                "imperial": "35 - 40",
                "metric": "16 - 18"
            },
            "height": {
                "imperial": "13 - 15",
                "metric": "33 - 38"
            },
            "id": 29,
            "name": "Basset Bleu de Gascogne",
            "bred_for": "Hunting on foot.",
            "breed_group": "Hound",
            "life_span": "10 - 14 years",
            "temperament": "Affectionate, Lively, Agile, Curious, Happy, Active",
            "reference_image_id": "BkMQll94X",
            "image": {
                "id": "BkMQll94X",
                "width": 1280,
                "height": 853,
                "url": "https://cdn2.thedogapi.com/images/BkMQll94X.jpg"
            }
        },
        {
            "weight": {
                "imperial": "50 - 65",
                "metric": "23 - 29"
            },
            "height": {
                "imperial": "14",
                "metric": "36"
            },
            "id": 30,
            "name": "Basset Hound",
            "bred_for": "Hunting by scent",
            "breed_group": "Hound",
            "life_span": "12 - 15 years",
            "temperament": "Tenacious, Friendly, Affectionate, Devoted, Sweet-Tempered, Gentle",
            "reference_image_id": "Sy57xx9EX",
            "image": {
                "id": "Sy57xx9EX",
                "width": 1024,
                "height": 640,
                "url": "https://cdn2.thedogapi.com/images/Sy57xx9EX.jpg"
            }
        },
        {
            "weight": {
                "imperial": "20 - 35",
                "metric": "9 - 16"
            },
            "height": {
                "imperial": "13 - 15",
                "metric": "33 - 38"
            },
            "id": 31,
            "name": "Beagle",
            "bred_for": "Rabbit, hare hunting",
            "breed_group": "Hound",
            "life_span": "13 - 16 years",
            "temperament": "Amiable, Even Tempered, Excitable, Determined, Gentle, Intelligent",
            "reference_image_id": "Syd4xxqEm",
            "image": {
                "id": "Syd4xxqEm",
                "width": 1000,
                "height": 667,
                "url": "https://cdn2.thedogapi.com/images/Syd4xxqEm.jpg"
            }
        },
        {
            "weight": {
                "imperial": "45 - 55",
                "metric": "20 - 25"
            },
            "height": {
                "imperial": "20 - 22",
                "metric": "51 - 56"
            },
            "id": 32,
            "name": "Bearded Collie",
            "bred_for": "Sheep herding",
            "breed_group": "Herding",
            "life_span": "12 - 14 years",
            "temperament": "Self-confidence, Hardy, Lively, Alert, Intelligent, Active",
            "reference_image_id": "A09F4c1qP",
            "image": {
                "id": "A09F4c1qP",
                "width": 733,
                "height": 733,
                "url": "https://cdn2.thedogapi.com/images/A09F4c1qP.jpg"
            }
        },
        {
            "weight": {
                "imperial": "80 - 110",
                "metric": "36 - 50"
            },
            "height": {
                "imperial": "24 - 27.5",
                "metric": "61 - 70"
            },
            "id": 33,
            "name": "Beauceron",
            "bred_for": "Boar herding, hunting, guarding",
            "breed_group": "Herding",
            "life_span": "10 - 12 years",
            "temperament": "Fearless, Friendly, Intelligent, Protective, Calm",
            "reference_image_id": "HJQ8ge5V7",
            "image": {
                "id": "HJQ8ge5V7",
                "width": 720,
                "height": 563,
                "url": "https://cdn2.thedogapi.com/images/HJQ8ge5V7.jpg"
            }
        },
        {
            "weight": {
                "imperial": "17 - 23",
                "metric": "8 - 10"
            },
            "height": {
                "imperial": "15 - 16",
                "metric": "38 - 41"
            },
            "id": 34,
            "name": "Bedlington Terrier",
            "bred_for": "Killing rat, badger, other vermin",
            "breed_group": "Terrier",
            "life_span": "14 - 16 years",
            "temperament": "Affectionate, Spirited, Intelligent, Good-tempered",
            "reference_image_id": "ByK8gx947",
            "image": {
                "id": "ByK8gx947",
                "width": 804,
                "height": 531,
                "url": "https://cdn2.thedogapi.com/images/ByK8gx947.jpg"
            }
        },
        {
            "weight": {
                "imperial": "40 - 80",
                "metric": "18 - 36"
            },
            "height": {
                "imperial": "22 - 26",
                "metric": "56 - 66"
            },
            "id": 36,
            "name": "Belgian Malinois",
            "bred_for": "Stock herding",
            "breed_group": "Herding",
            "life_span": "12 - 14 years",
            "temperament": "Watchful, Alert, Stubborn, Friendly, Confident, Hard-working, Active, Protective",
            "reference_image_id": "r1f_ll5VX",
            "image": {
                "id": "r1f_ll5VX",
                "width": 604,
                "height": 453,
                "url": "https://cdn2.thedogapi.com/images/r1f_ll5VX.jpg"
            }
        },
        {
            "weight": {
                "imperial": "40 - 65",
                "metric": "18 - 29"
            },
            "height": {
                "imperial": "22 - 26",
                "metric": "56 - 66"
            },
            "id": 38,
            "name": "Belgian Tervuren",
            "bred_for": "Guarding, Drafting, Police work.",
            "breed_group": "Herding",
            "life_span": "10 - 12 years",
            "temperament": "Energetic, Alert, Loyal, Intelligent, Attentive, Protective",
            "reference_image_id": "B1KdxlcNX",
            "image": {
                "id": "B1KdxlcNX",
                "width": 645,
                "height": 380,
                "url": "https://cdn2.thedogapi.com/images/B1KdxlcNX.jpg"
            }
        },
        {
            "weight": {
                "imperial": "65 - 120",
                "metric": "29 - 54"
            },
            "height": {
                "imperial": "23 - 27.5",
                "metric": "58 - 70"
            },
            "id": 41,
            "name": "Bernese Mountain Dog",
            "bred_for": "Draft work",
            "breed_group": "Working",
            "life_span": "7 - 10 years",
            "temperament": "Affectionate, Loyal, Intelligent, Faithful",
            "reference_image_id": "S1fFlx5Em",
            "image": {
                "id": "S1fFlx5Em",
                "width": 640,
                "height": 427,
                "url": "https://cdn2.thedogapi.com/images/S1fFlx5Em.jpg"
            }
        },
        {
            "weight": {
                "imperial": "10 - 18",
                "metric": "5 - 8"
            },
            "height": {
                "imperial": "9.5 - 11.5",
                "metric": "24 - 29"
            },
            "id": 42,
            "name": "Bichon Frise",
            "bred_for": "Companion",
            "breed_group": "Non-Sporting",
            "life_span": "15 years",
            "temperament": "Feisty, Affectionate, Cheerful, Playful, Gentle, Sensitive",
            "reference_image_id": "HkuYlxqEQ",
            "image": {
                "id": "HkuYlxqEQ",
                "width": 480,
                "height": 360,
                "url": "https://cdn2.thedogapi.com/images/HkuYlxqEQ.jpg"
            }
        },
        {
            "weight": {
                "imperial": "65 - 100",
                "metric": "29 - 45"
            },
            "height": {
                "imperial": "23 - 27",
                "metric": "58 - 69"
            },
            "id": 43,
            "name": "Black and Tan Coonhound",
            "bred_for": "Hunting raccoons, night hunting",
            "breed_group": "Hound",
            "life_span": "10 - 12 years",
            "temperament": "Easygoing, Gentle, Adaptable, Trusting, Even Tempered, Lovable",
            "reference_image_id": "HJAFgxcNQ",
            "image": {
                "id": "HJAFgxcNQ",
                "width": 556,
                "height": 380,
                "url": "https://cdn2.thedogapi.com/images/HJAFgxcNQ.jpg"
            }
        },
        {
            "weight": {
                "imperial": "80 - 110",
                "metric": "36 - 50"
            },
            "height": {
                "imperial": "23 - 27",
                "metric": "58 - 69"
            },
            "id": 45,
            "name": "Bloodhound",
            "bred_for": "Trailing",
            "breed_group": "Hound",
            "life_span": "8 - 10 years",
            "temperament": "Stubborn, Affectionate, Gentle, Even Tempered",
            "reference_image_id": "Skdcgx9VX",
            "image": {
                "id": "Skdcgx9VX",
                "width": 586,
                "height": 600,
                "url": "https://cdn2.thedogapi.com/images/Skdcgx9VX.jpg"
            }
        },
        {
            "weight": {
                "imperial": "45 - 80",
                "metric": "20 - 36"
            },
            "height": {
                "imperial": "21 - 27",
                "metric": "53 - 69"
            },
            "id": 47,
            "name": "Bluetick Coonhound",
            "bred_for": "Hunting with a superior sense of smell.",
            "breed_group": "Hound",
            "life_span": "12 - 14 years",
            "temperament": "Friendly, Intelligent, Active",
            "reference_image_id": "rJxieg9VQ",
            "image": {
                "id": "rJxieg9VQ",
                "width": 731,
                "height": 599,
                "url": "https://cdn2.thedogapi.com/images/rJxieg9VQ.jpg"
            }
        },
        {
            "weight": {
                "imperial": "110 - 200",
                "metric": "50 - 91"
            },
            "height": {
                "imperial": "22 - 27",
                "metric": "56 - 69"
            },
            "id": 48,
            "name": "Boerboel",
            "bred_for": "Guarding the homestead, farm work.",
            "breed_group": "Working",
            "life_span": "10 - 12 years",
            "temperament": "Obedient, Confident, Intelligent, Dominant, Territorial",
            "reference_image_id": "HyOjge5Vm",
            "image": {
                "id": "HyOjge5Vm",
                "width": 1200,
                "height": 669,
                "url": "https://cdn2.thedogapi.com/images/HyOjge5Vm.jpg"
            }
        },
        {
            "weight": {
                "imperial": "30 - 45",
                "metric": "14 - 20"
            },
            "height": {
                "imperial": "18 - 22",
                "metric": "46 - 56"
            },
            "id": 50,
            "name": "Border Collie",
            "bred_for": "Sheep herder",
            "breed_group": "Herding",
            "life_span": "12 - 16 years",
            "temperament": "Tenacious, Keen, Energetic, Responsive, Alert, Intelligent",
            "reference_image_id": "sGQvQUpsp",
            "image": {
                "id": "sGQvQUpsp",
                "width": 1080,
                "height": 1080,
                "url": "https://cdn2.thedogapi.com/images/sGQvQUpsp.jpg"
            }
        },
        {
            "weight": {
                "imperial": "11.5 - 15.5",
                "metric": "5 - 7"
            },
            "height": {
                "imperial": "11 - 16",
                "metric": "28 - 41"
            },
            "id": 51,
            "name": "Border Terrier",
            "bred_for": "Fox bolting, ratting",
            "breed_group": "Terrier",
            "life_span": "12 - 14 years",
            "temperament": "Fearless, Affectionate, Alert, Obedient, Intelligent, Even Tempered",
            "reference_image_id": "HJOpge9Em",
            "image": {
                "id": "HJOpge9Em",
                "width": 674,
                "height": 450,
                "url": "https://cdn2.thedogapi.com/images/HJOpge9Em.jpg"
            }
        },
        {
            "weight": {
                "imperial": "10 - 25",
                "metric": "5 - 11"
            },
            "height": {
                "imperial": "16 - 17",
                "metric": "41 - 43"
            },
            "id": 53,
            "name": "Boston Terrier",
            "bred_for": "Ratting, Companionship",
            "breed_group": "Non-Sporting",
            "life_span": "11 - 13 years",
            "temperament": "Friendly, Lively, Intelligent",
            "reference_image_id": "rkZRggqVX",
            "image": {
                "id": "rkZRggqVX",
                "width": 1010,
                "height": 673,
                "url": "https://cdn2.thedogapi.com/images/rkZRggqVX.jpg"
            }
        },
        {
            "weight": {
                "imperial": "70 - 110",
                "metric": "32 - 50"
            },
            "height": {
                "imperial": "23.5 - 27.5",
                "metric": "60 - 70"
            },
            "id": 54,
            "name": "Bouvier des Flandres",
            "bred_for": "Cattle herding",
            "breed_group": "Herding",
            "life_span": "10 - 15 years",
            "temperament": "Protective, Loyal, Gentle, Intelligent, Familial, Rational",
            "reference_image_id": "Byd0xl5VX",
            "image": {
                "id": "Byd0xl5VX",
                "width": 680,
                "height": 454,
                "url": "https://cdn2.thedogapi.com/images/Byd0xl5VX.jpg"
            }
        },
        {
            "weight": {
                "imperial": "50 - 70",
                "metric": "23 - 32"
            },
            "height": {
                "imperial": "21.5 - 25",
                "metric": "55 - 64"
            },
            "id": 55,
            "name": "Boxer",
            "bred_for": "Bull-baiting, guardian",
            "breed_group": "Working",
            "life_span": "8 - 10 years",
            "temperament": "Devoted, Fearless, Friendly, Cheerful, Energetic, Loyal, Playful, Confident, Intelligent, Bright, Brave, Calm",
            "reference_image_id": "ry1kWe5VQ",
            "image": {
                "id": "ry1kWe5VQ",
                "width": 645,
                "height": 430,
                "url": "https://cdn2.thedogapi.com/images/ry1kWe5VQ.jpg"
            }
        },
        {
            "weight": {
                "imperial": "25 - 40",
                "metric": "11 - 18"
            },
            "height": {
                "imperial": "14 - 18",
                "metric": "36 - 46"
            },
            "id": 56,
            "name": "Boykin Spaniel",
            "bred_for": "Turkey retrieving",
            "breed_group": "Sporting",
            "life_span": "10 - 14 years",
            "temperament": "Friendly, Energetic, Companionable, Intelligent, Eager, Trainable",
            "reference_image_id": "ryHJZlcNX",
            "image": {
                "id": "ryHJZlcNX",
                "width": 577,
                "height": 634,
                "url": "https://cdn2.thedogapi.com/images/ryHJZlcNX.jpg"
            }
        },
        {
            "weight": {
                "imperial": "55 - 88",
                "metric": "25 - 40"
            },
            "height": {
                "imperial": "21.5 - 26.5",
                "metric": "55 - 67"
            },
            "id": 57,
            "name": "Bracco Italiano",
            "bred_for": "Versatile gun dog",
            "breed_group": "Sporting",
            "life_span": "10 - 12 years",
            "temperament": "Stubborn, Affectionate, Loyal, Playful, Companionable, Trainable",
            "reference_image_id": "S13yZg5VQ",
            "image": {
                "id": "S13yZg5VQ",
                "width": 750,
                "height": 505,
                "url": "https://cdn2.thedogapi.com/images/S13yZg5VQ.jpg"
            }
        },
        {
            "weight": {
                "imperial": "70 - 90",
                "metric": "32 - 41"
            },
            "height": {
                "imperial": "22 - 27",
                "metric": "56 - 69"
            },
            "id": 58,
            "name": "Briard",
            "bred_for": "Herding, guarding sheep",
            "breed_group": "Herding",
            "life_span": "10 - 12 years",
            "temperament": "Fearless, Loyal, Obedient, Intelligent, Faithful, Protective",
            "reference_image_id": "rkVlblcEQ",
            "image": {
                "id": "rkVlblcEQ",
                "width": 768,
                "height": 576,
                "url": "https://cdn2.thedogapi.com/images/rkVlblcEQ.jpg"
            }
        },
        {
            "weight": {
                "imperial": "30 - 45",
                "metric": "14 - 20"
            },
            "height": {
                "imperial": "17.5 - 20.5",
                "metric": "44 - 52"
            },
            "id": 59,
            "name": "Brittany",
            "bred_for": "Pointing, retrieving",
            "breed_group": "Sporting",
            "life_span": "12 - 14 years",
            "temperament": "Agile, Adaptable, Quick, Intelligent, Attentive, Happy",
            "reference_image_id": "HJWZZxc4X",
            "image": {
                "id": "HJWZZxc4X",
                "width": 900,
                "height": 600,
                "url": "https://cdn2.thedogapi.com/images/HJWZZxc4X.jpg"
            }
        },
        {
            "weight": {
                "imperial": "50 - 70",
                "metric": "23 - 32"
            },
            "height": {
                "imperial": "21 - 22",
                "metric": "53 - 56"
            },
            "id": 61,
            "name": "Bull Terrier",
            "bred_for": "Bull baiting, Fighting",
            "breed_group": "Terrier",
            "life_span": "10 - 12 years",
            "temperament": "Trainable, Protective, Sweet-Tempered, Keen, Active",
            "reference_image_id": "VSraIEQGd",
            "image": {
                "id": "VSraIEQGd",
                "width": 1080,
                "height": 1080,
                "url": "https://cdn2.thedogapi.com/images/VSraIEQGd.jpg"
            }
        },
        {
            "weight": {
                "imperial": "25 - 33",
                "metric": "11 - 15"
            },
            "height": {
                "imperial": "10 - 14",
                "metric": "25 - 36"
            },
            "id": 62,
            "name": "Bull Terrier (Miniature)",
            "bred_for": "An elegant man's fashion statement",
            "life_span": "11 – 14 years",
            "temperament": "Trainable, Protective, Sweet-Tempered, Keen, Active, Territorial",
            "reference_image_id": "BkKZWlcVX",
            "image": {
                "id": "BkKZWlcVX",
                "width": 674,
                "height": 450,
                "url": "https://cdn2.thedogapi.com/images/BkKZWlcVX.jpg"
            }
        },
        {
            "weight": {
                "imperial": "100 - 130",
                "metric": "45 - 59"
            },
            "height": {
                "imperial": "24 - 27",
                "metric": "61 - 69"
            },
            "id": 64,
            "name": "Bullmastiff",
            "bred_for": "Estate guardian",
            "breed_group": "Working",
            "life_span": "8 - 12 years",
            "temperament": "Docile, Reliable, Devoted, Alert, Loyal, Reserved, Loving, Protective, Powerful, Calm, Courageous",
            "reference_image_id": "r1ifZl5E7",
            "image": {
                "id": "r1ifZl5E7",
                "width": 850,
                "height": 638,
                "url": "https://cdn2.thedogapi.com/images/r1ifZl5E7.jpg"
            }
        },
        {
            "weight": {
                "imperial": "13 - 14",
                "metric": "6 - 6"
            },
            "height": {
                "imperial": "9 - 10",
                "metric": "23 - 25"
            },
            "id": 65,
            "name": "Cairn Terrier",
            "bred_for": "Bolting of otter, foxes, other vermin",
            "breed_group": "Terrier",
            "life_span": "14 - 15 years",
            "temperament": "Hardy, Fearless, Assertive, Gay, Intelligent, Active",
            "reference_image_id": "Sk7Qbg9E7",
            "image": {
                "id": "Sk7Qbg9E7",
                "width": 1254,
                "height": 836,
                "url": "https://cdn2.thedogapi.com/images/Sk7Qbg9E7.jpg"
            }
        },
        {
            "weight": {
                "imperial": "88 - 120",
                "metric": "40 - 54"
            },
            "height": {
                "imperial": "23.5 - 27.5",
                "metric": "60 - 70"
            },
            "id": 67,
            "name": "Cane Corso",
            "bred_for": "Companion, guard dog, and hunter",
            "breed_group": "Working",
            "life_span": "10 - 11 years",
            "temperament": "Trainable, Reserved, Stable, Quiet, Even Tempered, Calm",
            "reference_image_id": "r15m-lc4m",
            "image": {
                "id": "r15m-lc4m",
                "width": 645,
                "height": 380,
                "url": "https://cdn2.thedogapi.com/images/r15m-lc4m.jpg"
            }
        },
        {
            "weight": {
                "imperial": "25 - 38",
                "metric": "11 - 17"
            },
            "height": {
                "imperial": "10.5 - 12.5",
                "metric": "27 - 32"
            },
            "id": 68,
            "name": "Cardigan Welsh Corgi",
            "bred_for": "Cattle droving",
            "breed_group": "Herding",
            "life_span": "12 - 14 years",
            "temperament": "Affectionate, Devoted, Alert, Companionable, Intelligent, Active",
            "reference_image_id": "SyXN-e9NX",
            "image": {
                "id": "SyXN-e9NX",
                "width": 800,
                "height": 600,
                "url": "https://cdn2.thedogapi.com/images/SyXN-e9NX.jpg"
            }
        },
        {
            "weight": {
                "imperial": "50 - 95",
                "metric": "23 - 43"
            },
            "height": {
                "imperial": "20 - 26",
                "metric": "51 - 66"
            },
            "id": 69,
            "name": "Catahoula Leopard Dog",
            "bred_for": "Driving livestock",
            "breed_group": "Herding",
            "life_span": "10 - 12 years",
            "temperament": "Energetic, Inquisitive, Independent, Gentle, Intelligent, Loving",
            "reference_image_id": "BJcNbec4X",
            "image": {
                "id": "BJcNbec4X",
                "width": 650,
                "height": 650,
                "url": "https://cdn2.thedogapi.com/images/BJcNbec4X.jpg"
            }
        },
        {
            "weight": {
                "imperial": "80 - 100",
                "metric": "36 - 45"
            },
            "height": {
                "imperial": "24 - 33.5",
                "metric": "61 - 85"
            },
            "id": 70,
            "name": "Caucasian Shepherd (Ovcharka)",
            "bred_for": "Guard dogs, defending sheep from predators, mainly wolves, jackals and bears",
            "breed_group": "Working",
            "life_span": "10 - 12 years",
            "temperament": "Alert, Quick, Dominant, Powerful, Calm, Strong",
            "reference_image_id": "r1rrWe5Em",
            "image": {
                "id": "r1rrWe5Em",
                "width": 1024,
                "height": 682,
                "url": "https://cdn2.thedogapi.com/images/r1rrWe5Em.jpg"
            }
        },
        {
            "weight": {
                "imperial": "13 - 18",
                "metric": "6 - 8"
            },
            "height": {
                "imperial": "12 - 13",
                "metric": "30 - 33"
            },
            "id": 71,
            "name": "Cavalier King Charles Spaniel",
            "bred_for": "Flushing small birds, companion",
            "breed_group": "Toy",
            "life_span": "10 - 14 years",
            "temperament": "Fearless, Affectionate, Sociable, Patient, Playful, Adaptable",
            "reference_image_id": "HJRBbe94Q",
            "image": {
                "id": "HJRBbe94Q",
                "width": 961,
                "height": 558,
                "url": "https://cdn2.thedogapi.com/images/HJRBbe94Q.jpg"
            }
        },
        {
            "weight": {
                "imperial": "55 - 80",
                "metric": "25 - 36"
            },
            "height": {
                "imperial": "21 - 26",
                "metric": "53 - 66"
            },
            "id": 76,
            "name": "Chesapeake Bay Retriever",
            "bred_for": "Water Retriever",
            "breed_group": "Sporting",
            "life_span": "10 - 13 years",
            "temperament": "Affectionate, Intelligent, Quiet, Dominant, Happy, Protective",
            "reference_image_id": "9BXwUeCc2",
            "image": {
                "id": "9BXwUeCc2",
                "width": 600,
                "height": 600,
                "url": "https://cdn2.thedogapi.com/images/9BXwUeCc2.jpg"
            }
        },
        {
            "weight": {
                "imperial": "10 - 13",
                "metric": "5 - 6"
            },
            "height": {
                "imperial": "11 - 13",
                "metric": "28 - 33"
            },
            "id": 78,
            "name": "Chinese Crested",
            "bred_for": "Ratting, lapdog, curio",
            "breed_group": "Toy",
            "life_span": "10 - 14 years",
            "temperament": "Affectionate, Sweet-Tempered, Lively, Alert, Playful, Happy",
            "reference_image_id": "B1pDZx9Nm",
            "image": {
                "id": "B1pDZx9Nm",
                "width": 1200,
                "height": 798,
                "url": "https://cdn2.thedogapi.com/images/B1pDZx9Nm.jpg"
            }
        },
        {
            "weight": {
                "imperial": "45 - 60",
                "metric": "20 - 27"
            },
            "height": {
                "imperial": "18 - 20",
                "metric": "46 - 51"
            },
            "id": 79,
            "name": "Chinese Shar-Pei",
            "bred_for": "Fighting",
            "breed_group": "Non-Sporting",
            "life_span": "10 years",
            "temperament": "Suspicious, Affectionate, Devoted, Reserved, Independent, Loving",
            "reference_image_id": "B1ruWl94Q",
            "image": {
                "id": "B1ruWl94Q",
                "width": 1049,
                "height": 761,
                "url": "https://cdn2.thedogapi.com/images/B1ruWl94Q.jpg"
            }
        },
        {
            "weight": {
                "imperial": "50 - 90",
                "metric": "23 - 41"
            },
            "height": {
                "imperial": "22 - 26",
                "metric": "56 - 66"
            },
            "id": 80,
            "name": "Chinook",
            "bred_for": "Sled pulling",
            "breed_group": "Working",
            "life_span": "12 - 15 years",
            "temperament": "Friendly, Alert, Dignified, Intelligent, Calm",
            "reference_image_id": "Sypubg54Q",
            "image": {
                "id": "Sypubg54Q",
                "width": 600,
                "height": 478,
                "url": "https://cdn2.thedogapi.com/images/Sypubg54Q.jpg"
            }
        },
        {
            "weight": {
                "imperial": "40 - 70",
                "metric": "18 - 32"
            },
            "height": {
                "imperial": "17 - 20",
                "metric": "43 - 51"
            },
            "id": 81,
            "name": "Chow Chow",
            "bred_for": "Guardian, cart pulling, hunting",
            "breed_group": "Non-Sporting",
            "life_span": "12 - 15 years",
            "temperament": "Aloof, Loyal, Independent, Quiet",
            "reference_image_id": "ry8KWgqEQ",
            "image": {
                "id": "ry8KWgqEQ",
                "width": 1010,
                "height": 673,
                "url": "https://cdn2.thedogapi.com/images/ry8KWgqEQ.jpg"
            }
        },
        {
            "weight": {
                "imperial": "55 - 85",
                "metric": "25 - 39"
            },
            "height": {
                "imperial": "17 - 20",
                "metric": "43 - 51"
            },
            "id": 84,
            "name": "Clumber Spaniel",
            "bred_for": "Bird flushing, retrieving",
            "breed_group": "Sporting",
            "life_span": "10 - 12 years",
            "temperament": "Affectionate, Loyal, Dignified, Gentle, Calm, Great-hearted",
            "reference_image_id": "rkeqWgq4Q",
            "image": {
                "id": "rkeqWgq4Q",
                "width": 762,
                "height": 533,
                "url": "https://cdn2.thedogapi.com/images/rkeqWgq4Q.jpg"
            }
        },
        {
            "weight": {
                "imperial": "20 - 30",
                "metric": "9 - 14"
            },
            "height": {
                "imperial": "14 - 15",
                "metric": "36 - 38"
            },
            "id": 86,
            "name": "Cocker Spaniel",
            "bred_for": "Bird flushing, retrieving",
            "breed_group": "Sporting",
            "life_span": "12 - 15 years",
            "temperament": "Trainable, Friendly, Affectionate, Playful, Quiet, Faithful",
            "reference_image_id": "1lFmrzECl",
            "image": {
                "id": "1lFmrzECl",
                "width": 1080,
                "height": 1080,
                "url": "https://cdn2.thedogapi.com/images/1lFmrzECl.jpg"
            }
        },
        {
            "weight": {
                "imperial": "20 - 30",
                "metric": "9 - 14"
            },
            "height": {
                "imperial": "14 - 15",
                "metric": "36 - 38"
            },
            "id": 87,
            "name": "Cocker Spaniel (American)",
            "bred_for": "Hunting the American woodcock",
            "breed_group": "Sporting",
            "life_span": "12 - 15 years",
            "temperament": "Outgoing, Sociable, Trusting, Joyful, Even Tempered, Merry",
            "reference_image_id": "HkRcZe547",
            "image": {
                "id": "HkRcZe547",
                "width": 1024,
                "height": 640,
                "url": "https://cdn2.thedogapi.com/images/HkRcZe547.jpg"
            }
        },
        {
            "weight": {
                "imperial": "9 - 15",
                "metric": "4 - 7"
            },
            "height": {
                "imperial": "9 - 11",
                "metric": "23 - 28"
            },
            "id": 89,
            "name": "Coton de Tulear",
            "bred_for": "Accompanying ladies on long sea voyages, ratters onboard ship.",
            "breed_group": "Non-Sporting",
            "life_span": "13 - 16 years",
            "temperament": "Affectionate, Lively, Playful, Intelligent, Trainable, Vocal",
            "reference_image_id": "SyviZlqNm",
            "image": {
                "id": "SyviZlqNm",
                "width": 2464,
                "height": 1638,
                "url": "https://cdn2.thedogapi.com/images/SyviZlqNm.jpg"
            }
        },
        {
            "weight": {
                "imperial": "50 - 55",
                "metric": "23 - 25"
            },
            "height": {
                "imperial": "19 - 23",
                "metric": "48 - 58"
            },
            "id": 92,
            "name": "Dalmatian",
            "bred_for": "Carriage dog - trot alongside carriages to protect the occupants from banditry or other interference",
            "breed_group": "Non-Sporting",
            "life_span": "10 - 13 years",
            "temperament": "Outgoing, Friendly, Energetic, Playful, Sensitive, Intelligent, Active",
            "reference_image_id": "SkJ3blcN7",
            "image": {
                "id": "SkJ3blcN7",
                "width": 1200,
                "height": 800,
                "url": "https://cdn2.thedogapi.com/images/SkJ3blcN7.jpg"
            }
        },
        {
            "weight": {
                "imperial": "66 - 88",
                "metric": "30 - 40"
            },
            "height": {
                "imperial": "24 - 28",
                "metric": "61 - 71"
            },
            "id": 94,
            "name": "Doberman Pinscher",
            "bred_for": "Guardian",
            "breed_group": "Working",
            "life_span": "10 years",
            "temperament": "Fearless, Energetic, Alert, Loyal, Obedient, Confident, Intelligent",
            "reference_image_id": "HyL3bl94Q",
            "image": {
                "id": "HyL3bl94Q",
                "width": 1140,
                "height": 640,
                "url": "https://cdn2.thedogapi.com/images/HyL3bl94Q.jpg"
            }
        },
        {
            "weight": {
                "imperial": "80 - 100",
                "metric": "36 - 45"
            },
            "height": {
                "imperial": "23.5 - 27",
                "metric": "60 - 69"
            },
            "id": 95,
            "name": "Dogo Argentino",
            "bred_for": "Big-game hunting",
            "breed_group": "Working",
            "life_span": "10 - 12 years",
            "temperament": "Friendly, Affectionate, Cheerful, Loyal, Tolerant, Protective",
            "reference_image_id": "S1nhWx94Q",
            "image": {
                "id": "S1nhWx94Q",
                "width": 650,
                "height": 467,
                "url": "https://cdn2.thedogapi.com/images/S1nhWx94Q.jpg"
            }
        },
        {
            "weight": {
                "imperial": "50 - 70",
                "metric": "23 - 32"
            },
            "height": {
                "imperial": "22 - 24.5",
                "metric": "56 - 62"
            },
            "id": 98,
            "name": "Dutch Shepherd",
            "bred_for": "Farms, watchdog, guard duty",
            "life_span": "15 years",
            "temperament": "Reliable, Affectionate, Alert, Loyal, Obedient, Trainable",
            "reference_image_id": "BkE6Wg5E7",
            "image": {
                "id": "BkE6Wg5E7",
                "width": 856,
                "height": 511,
                "url": "https://cdn2.thedogapi.com/images/BkE6Wg5E7.jpg"
            }
        },
        {
            "weight": {
                "imperial": "45 - 80",
                "metric": "20 - 36"
            },
            "height": {
                "imperial": "24 - 25",
                "metric": "61 - 64"
            },
            "id": 101,
            "name": "English Setter",
            "bred_for": "Bird setting, retrieving",
            "breed_group": "Sporting",
            "life_span": "12 years",
            "temperament": "Strong Willed, Mischievous, Affectionate, Energetic, Playful, Companionable, Gentle, Hard-working, Intelligent, Eager, People-Oriented",
            "reference_image_id": "By4A-eqVX",
            "image": {
                "id": "By4A-eqVX",
                "width": 1024,
                "height": 683,
                "url": "https://cdn2.thedogapi.com/images/By4A-eqVX.jpg"
            }
        },
        {
            "weight": {
                "imperial": "44 - 66",
                "metric": "20 - 30"
            },
            "height": {
                "imperial": "18 - 23",
                "metric": "46 - 58"
            },
            "id": 102,
            "name": "English Shepherd",
            "bred_for": "Herding & guarding livestock, farm watch dog",
            "breed_group": "Working",
            "life_span": "10 - 13 years",
            "temperament": "Kind, Energetic, Independent, Adaptable, Intelligent, Bossy",
            "reference_image_id": "H1QyMe5EQ",
            "image": {
                "id": "H1QyMe5EQ",
                "width": 1920,
                "height": 1280,
                "url": "https://cdn2.thedogapi.com/images/H1QyMe5EQ.jpg"
            }
        },
        {
            "weight": {
                "imperial": "35 - 50",
                "metric": "16 - 23"
            },
            "height": {
                "imperial": "19 - 20",
                "metric": "48 - 51"
            },
            "id": 103,
            "name": "English Springer Spaniel",
            "bred_for": "Bird flushing, retrieving",
            "breed_group": "Sporting",
            "life_span": "12 - 14 years",
            "temperament": "Affectionate, Cheerful, Alert, Intelligent, Attentive, Active",
            "reference_image_id": "Hk0Jfe5VQ",
            "image": {
                "id": "Hk0Jfe5VQ",
                "width": 1440,
                "height": 1080,
                "url": "https://cdn2.thedogapi.com/images/Hk0Jfe5VQ.jpg"
            }
        },
        {
            "weight": {
                "imperial": "8 - 14",
                "metric": "4 - 6"
            },
            "height": {
                "imperial": "10",
                "metric": "25"
            },
            "id": 104,
            "name": "English Toy Spaniel",
            "bred_for": "Companion of kings",
            "breed_group": "Toy",
            "life_span": "10 - 12 years",
            "temperament": "Affectionate, Reserved, Playful, Gentle, Happy, Loving",
            "reference_image_id": "SkIgzxqNQ",
            "image": {
                "id": "SkIgzxqNQ",
                "width": 800,
                "height": 696,
                "url": "https://cdn2.thedogapi.com/images/SkIgzxqNQ.jpg"
            }
        },
        {
            "weight": {
                "imperial": "6 - 8",
                "metric": "3 - 4"
            },
            "height": {
                "imperial": "10 - 12",
                "metric": "25 - 30"
            },
            "id": 105,
            "name": "English Toy Terrier",
            "bred_for": "Rat-baiting",
            "life_span": "12 - 13 years",
            "temperament": "Stubborn, Alert, Companionable, Intelligent, Cunning, Trainable",
            "reference_image_id": "SJ6eMxqEQ",
            "image": {
                "id": "SJ6eMxqEQ",
                "width": 645,
                "height": 430,
                "url": "https://cdn2.thedogapi.com/images/SJ6eMxqEQ.jpg"
            }
        },
        {
            "weight": {
                "imperial": "40 - 70",
                "metric": "18 - 32"
            },
            "height": {
                "imperial": "20.5 - 23.5",
                "metric": "52 - 60"
            },
            "id": 107,
            "name": "Eurasier",
            "bred_for": "Companionship",
            "breed_group": "Non-Sporting",
            "life_span": "12 - 14 years",
            "temperament": "Alert, Reserved, Intelligent, Even Tempered, Watchful, Calm",
            "reference_image_id": "S1VWGx9Nm",
            "image": {
                "id": "S1VWGx9Nm",
                "width": 800,
                "height": 532,
                "url": "https://cdn2.thedogapi.com/images/S1VWGx9Nm.jpg"
            }
        },
        {
            "weight": {
                "imperial": "35 - 50",
                "metric": "16 - 23"
            },
            "height": {
                "imperial": "17 - 18",
                "metric": "43 - 46"
            },
            "id": 108,
            "name": "Field Spaniel",
            "bred_for": "Bird flushing, retrieving",
            "breed_group": "Sporting",
            "life_span": "11 - 15 years",
            "temperament": "Docile, Cautious, Sociable, Sensitive, Adaptable, Familial",
            "reference_image_id": "SkJfGecE7",
            "image": {
                "id": "SkJfGecE7",
                "width": 1280,
                "height": 906,
                "url": "https://cdn2.thedogapi.com/images/SkJfGecE7.jpg"
            }
        },
        {
            "weight": {
                "imperial": "33 - 53",
                "metric": "15 - 24"
            },
            "height": {
                "imperial": "16 - 21",
                "metric": "41 - 53"
            },
            "id": 110,
            "name": "Finnish Lapphund",
            "bred_for": "Herding reindeer",
            "breed_group": "Herding",
            "life_span": "12 - 15 years",
            "temperament": "Friendly, Keen, Faithful, Calm, Courageous",
            "reference_image_id": "S1KMGg5Vm",
            "image": {
                "id": "S1KMGg5Vm",
                "width": 1066,
                "height": 800,
                "url": "https://cdn2.thedogapi.com/images/S1KMGg5Vm.jpg"
            }
        },
        {
            "weight": {
                "imperial": "23 - 28",
                "metric": "10 - 13"
            },
            "height": {
                "imperial": "15.5 - 20",
                "metric": "39 - 51"
            },
            "id": 111,
            "name": "Finnish Spitz",
            "bred_for": "Hunting birds, small mammals",
            "breed_group": "Non-Sporting",
            "life_span": "12 - 15 years",
            "temperament": "Playful, Loyal, Independent, Intelligent, Happy, Vocal",
            "reference_image_id": "3PjHlQbkV",
            "image": {
                "id": "3PjHlQbkV",
                "width": 500,
                "height": 417,
                "url": "https://cdn2.thedogapi.com/images/3PjHlQbkV.jpg"
            }
        },
        {
            "weight": {
                "imperial": "28",
                "metric": "13"
            },
            "height": {
                "imperial": "11 - 12",
                "metric": "28 - 30"
            },
            "id": 113,
            "name": "French Bulldog",
            "bred_for": "Lapdog",
            "breed_group": "Non-Sporting",
            "life_span": "9 - 11 years",
            "temperament": "Playful, Affectionate, Keen, Sociable, Lively, Alert, Easygoing, Patient, Athletic, Bright",
            "reference_image_id": "HyWNfxc47",
            "image": {
                "id": "HyWNfxc47",
                "width": 740,
                "height": 430,
                "url": "https://cdn2.thedogapi.com/images/HyWNfxc47.jpg"
            }
        },
        {
            "weight": {
                "imperial": "25 - 45",
                "metric": "11 - 20"
            },
            "height": {
                "imperial": "17 - 20",
                "metric": "43 - 51"
            },
            "id": 114,
            "name": "German Pinscher",
            "bred_for": "Watchdog, Hunting vermin on the farm.",
            "breed_group": "Working",
            "life_span": "12 - 14 years",
            "temperament": "Spirited, Lively, Intelligent, Loving, Even Tempered, Familial",
            "reference_image_id": "B1u4zgqE7",
            "image": {
                "id": "B1u4zgqE7",
                "width": 740,
                "height": 480,
                "url": "https://cdn2.thedogapi.com/images/B1u4zgqE7.jpg"
            }
        },
        {
            "weight": {
                "imperial": "50 - 90",
                "metric": "23 - 41"
            },
            "height": {
                "imperial": "22 - 26",
                "metric": "56 - 66"
            },
            "id": 115,
            "name": "German Shepherd Dog",
            "bred_for": "Herding, Guard dog",
            "breed_group": "Herding",
            "life_span": "10 - 13 years",
            "temperament": "Alert, Loyal, Obedient, Curious, Confident, Intelligent, Watchful, Courageous",
            "reference_image_id": "SJyBfg5NX",
            "image": {
                "id": "SJyBfg5NX",
                "width": 600,
                "height": 425,
                "url": "https://cdn2.thedogapi.com/images/SJyBfg5NX.jpg"
            }
        },
        {
            "weight": {
                "imperial": "45 - 70",
                "metric": "20 - 32"
            },
            "height": {
                "imperial": "21 - 25",
                "metric": "53 - 64"
            },
            "id": 116,
            "name": "German Shorthaired Pointer",
            "bred_for": "General hunting",
            "breed_group": "Sporting",
            "life_span": "12 - 14 years",
            "temperament": "Boisterous, Bold, Affectionate, Intelligent, Cooperative, Trainable",
            "reference_image_id": "SJqBMg5Nm",
            "image": {
                "id": "SJqBMg5Nm",
                "width": 1395,
                "height": 1230,
                "url": "https://cdn2.thedogapi.com/images/SJqBMg5Nm.jpg"
            }
        },
        {
            "weight": {
                "imperial": "65 - 90",
                "metric": "29 - 41"
            },
            "height": {
                "imperial": "23.5 - 27.5",
                "metric": "60 - 70"
            },
            "id": 119,
            "name": "Giant Schnauzer",
            "bred_for": "Herding, guarding",
            "breed_group": "Working",
            "life_span": "10 - 12 years",
            "temperament": "Strong Willed, Kind, Loyal, Intelligent, Dominant, Powerful",
            "reference_image_id": "H1NIzlcV7",
            "image": {
                "id": "H1NIzlcV7",
                "width": 900,
                "height": 600,
                "url": "https://cdn2.thedogapi.com/images/H1NIzlcV7.jpg"
            }
        },
        {
            "weight": {
                "imperial": "32 - 40",
                "metric": "15 - 18"
            },
            "height": {
                "imperial": "12.5 - 14",
                "metric": "32 - 36"
            },
            "id": 120,
            "name": "Glen of Imaal Terrier",
            "bred_for": "Rid the home and farm of vermin, and hunt badger and fox",
            "breed_group": "Terrier",
            "life_span": "12 - 15 years",
            "temperament": "Spirited, Agile, Loyal, Gentle, Active, Courageous",
            "reference_image_id": "H1oLMe94m",
            "image": {
                "id": "H1oLMe94m",
                "width": 645,
                "height": 380,
                "url": "https://cdn2.thedogapi.com/images/H1oLMe94m.jpg"
            }
        },
        {
            "weight": {
                "imperial": "55 - 75",
                "metric": "25 - 34"
            },
            "height": {
                "imperial": "21.5 - 24",
                "metric": "55 - 61"
            },
            "id": 121,
            "name": "Golden Retriever",
            "bred_for": "Retrieving",
            "breed_group": "Sporting",
            "life_span": "10 - 12 years",
            "temperament": "Intelligent, Kind, Reliable, Friendly, Trustworthy, Confident",
            "reference_image_id": "HJ7Pzg5EQ",
            "image": {
                "id": "HJ7Pzg5EQ",
                "width": 900,
                "height": 652,
                "url": "https://cdn2.thedogapi.com/images/HJ7Pzg5EQ.jpg"
            }
        },
        {
            "weight": {
                "imperial": "45 - 80",
                "metric": "20 - 36"
            },
            "height": {
                "imperial": "23 - 27",
                "metric": "58 - 69"
            },
            "id": 123,
            "name": "Gordon Setter",
            "bred_for": "Find and point gamebirds",
            "breed_group": "Sporting",
            "life_span": "10 - 12 years",
            "temperament": "Fearless, Alert, Loyal, Confident, Gay, Eager",
            "reference_image_id": "SJ5vzx5NX",
            "image": {
                "id": "SJ5vzx5NX",
                "width": 622,
                "height": 467,
                "url": "https://cdn2.thedogapi.com/images/SJ5vzx5NX.jpg"
            }
        },
        {
            "weight": {
                "imperial": "110 - 190",
                "metric": "50 - 86"
            },
            "height": {
                "imperial": "28 - 32",
                "metric": "71 - 81"
            },
            "id": 124,
            "name": "Great Dane",
            "bred_for": "Hunting & holding boars, Guardian",
            "breed_group": "Working",
            "life_span": "7 - 10 years",
            "temperament": "Friendly, Devoted, Reserved, Gentle, Confident, Loving",
            "reference_image_id": "B1Edfl9NX",
            "image": {
                "id": "B1Edfl9NX",
                "width": 800,
                "height": 732,
                "url": "https://cdn2.thedogapi.com/images/B1Edfl9NX.jpg"
            }
        },
        {
            "weight": {
                "imperial": "85 - 115",
                "metric": "39 - 52"
            },
            "height": {
                "imperial": "25 - 32",
                "metric": "64 - 81"
            },
            "id": 125,
            "name": "Great Pyrenees",
            "bred_for": "Sheep guardian",
            "breed_group": "Working",
            "life_span": "10 - 12 years",
            "temperament": "Strong Willed, Fearless, Affectionate, Patient, Gentle, Confident",
            "reference_image_id": "B12uzg9V7",
            "image": {
                "id": "B12uzg9V7",
                "width": 800,
                "height": 550,
                "url": "https://cdn2.thedogapi.com/images/B12uzg9V7.png"
            }
        },
        {
            "weight": {
                "imperial": "50 - 70",
                "metric": "23 - 32"
            },
            "height": {
                "imperial": "27 - 30",
                "metric": "69 - 76"
            },
            "id": 127,
            "name": "Greyhound",
            "bred_for": "Coursing hares",
            "breed_group": "Hound",
            "life_span": "10 - 13 years",
            "temperament": "Affectionate, Athletic, Gentle, Intelligent, Quiet, Even Tempered",
            "reference_image_id": "ryNYMx94X",
            "image": {
                "id": "ryNYMx94X",
                "width": 1024,
                "height": 681,
                "url": "https://cdn2.thedogapi.com/images/ryNYMx94X.jpg"
            }
        },
        {
            "weight": {
                "imperial": "12",
                "metric": "5"
            },
            "height": {
                "imperial": "9 - 11",
                "metric": "23 - 28"
            },
            "id": 128,
            "name": "Griffon Bruxellois",
            "bred_for": "Hunt and kill vermin in stables",
            "life_span": "10 – 15 years",
            "temperament": "Self-important, Inquisitive, Alert, Companionable, Sensitive, Watchful",
            "reference_image_id": "ryoYGec4Q",
            "image": {
                "id": "ryoYGec4Q",
                "width": 645,
                "height": 380,
                "url": "https://cdn2.thedogapi.com/images/ryoYGec4Q.jpg"
            }
        },
        {
            "weight": {
                "imperial": "40 - 60",
                "metric": "18 - 27"
            },
            "height": {
                "imperial": "18 - 22",
                "metric": "46 - 56"
            },
            "id": 129,
            "name": "Harrier",
            "bred_for": "Hunting hares by trailing them",
            "breed_group": "Hound",
            "life_span": "12 - 15 years",
            "temperament": "Outgoing, Friendly, Cheerful, Sweet-Tempered, Tolerant, Active",
            "reference_image_id": "B1IcfgqE7",
            "image": {
                "id": "B1IcfgqE7",
                "width": 1920,
                "height": 1080,
                "url": "https://cdn2.thedogapi.com/images/B1IcfgqE7.jpg"
            }
        },
        {
            "weight": {
                "imperial": "7 - 13",
                "metric": "3 - 6"
            },
            "height": {
                "imperial": "8.5 - 11.5",
                "metric": "22 - 29"
            },
            "id": 130,
            "name": "Havanese",
            "bred_for": "Companionship",
            "breed_group": "Toy",
            "life_span": "14 - 15 years",
            "temperament": "Affectionate, Responsive, Playful, Companionable, Gentle, Intelligent",
            "reference_image_id": "rkXiGl9V7",
            "image": {
                "id": "rkXiGl9V7",
                "width": 800,
                "height": 507,
                "url": "https://cdn2.thedogapi.com/images/rkXiGl9V7.jpg"
            }
        },
        {
            "weight": {
                "imperial": "35 - 70",
                "metric": "16 - 32"
            },
            "height": {
                "imperial": "24 - 27",
                "metric": "61 - 69"
            },
            "id": 134,
            "name": "Irish Setter",
            "bred_for": "Bird setting, retrieving",
            "breed_group": "Sporting",
            "life_span": "10 - 11 years",
            "temperament": "Affectionate, Energetic, Lively, Independent, Playful, Companionable",
            "reference_image_id": "S1osGeqVm",
            "image": {
                "id": "S1osGeqVm",
                "width": 818,
                "height": 522,
                "url": "https://cdn2.thedogapi.com/images/S1osGeqVm.jpg"
            }
        },
        {
            "weight": {
                "imperial": "25 - 27",
                "metric": "11 - 12"
            },
            "height": {
                "imperial": "18",
                "metric": "46"
            },
            "id": 135,
            "name": "Irish Terrier",
            "breed_group": "Terrier",
            "life_span": "12 - 16 years",
            "temperament": "Respectful, Lively, Intelligent, Dominant, Protective, Trainable",
            "reference_image_id": "By-hGecVX",
            "image": {
                "id": "By-hGecVX",
                "width": 800,
                "height": 626,
                "url": "https://cdn2.thedogapi.com/images/By-hGecVX.jpg"
            }
        },
        {
            "weight": {
                "imperial": "105 - 180",
                "metric": "48 - 82"
            },
            "height": {
                "imperial": "30 - 35",
                "metric": "76 - 89"
            },
            "id": 137,
            "name": "Irish Wolfhound",
            "bred_for": "Coursing wolves, elk",
            "breed_group": "Hound",
            "life_span": "6 - 8 years",
            "temperament": "Sweet-Tempered, Loyal, Dignified, Patient, Thoughtful, Generous",
            "reference_image_id": "Hyd2zgcEX",
            "image": {
                "id": "Hyd2zgcEX",
                "width": 1000,
                "height": 630,
                "url": "https://cdn2.thedogapi.com/images/Hyd2zgcEX.jpg"
            }
        },
        {
            "weight": {
                "imperial": "7 - 15",
                "metric": "3 - 7"
            },
            "height": {
                "imperial": "13 - 15",
                "metric": "33 - 38"
            },
            "id": 138,
            "name": "Italian Greyhound",
            "bred_for": "Lapdog",
            "breed_group": "Toy",
            "life_span": "12 - 15 years",
            "temperament": "Mischievous, Affectionate, Agile, Athletic, Companionable, Intelligent",
            "reference_image_id": "SJAnzg9NX",
            "image": {
                "id": "SJAnzg9NX",
                "width": 640,
                "height": 377,
                "url": "https://cdn2.thedogapi.com/images/SJAnzg9NX.jpg"
            }
        },
        {
            "weight": {
                "imperial": "4 - 9",
                "metric": "2 - 4"
            },
            "height": {
                "imperial": "8 - 11",
                "metric": "20 - 28"
            },
            "id": 140,
            "name": "Japanese Chin",
            "bred_for": "Lapdog",
            "breed_group": "Toy",
            "life_span": "12 - 14 years",
            "temperament": "Alert, Loyal, Independent, Intelligent, Loving, Cat-like",
            "reference_image_id": "r1H6feqEm",
            "image": {
                "id": "r1H6feqEm",
                "width": 900,
                "height": 581,
                "url": "https://cdn2.thedogapi.com/images/r1H6feqEm.jpg"
            }
        },
        {
            "weight": {
                "imperial": "15 - 19",
                "metric": "7 - 9"
            },
            "height": {
                "imperial": "12 - 15",
                "metric": "30 - 38"
            },
            "id": 141,
            "name": "Japanese Spitz",
            "bred_for": "Companion",
            "life_span": "10 – 16 years",
            "temperament": "Affectionate, Obedient, Playful, Companionable, Intelligent, Proud",
            "reference_image_id": "HksaMxqNX",
            "image": {
                "id": "HksaMxqNX",
                "width": 600,
                "height": 351,
                "url": "https://cdn2.thedogapi.com/images/HksaMxqNX.jpg"
            }
        }
    ];

export default dogs;