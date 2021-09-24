(function () {
    "use strict";

    function scrollToCaptcha(parent) {
        $(parent).scrollTop($("#captchaSignUp").position().top);
    }

    function shuffle(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    function randInt(min, max) {
        if (max === undefined) {
            max = min;
            min = 0;
        }
        return Math.floor(Math.random() * (max + 1 - min)) + min;
    }

    function year() {
        return 2021 - randInt(24, 98);
    }

    function choose(l) {
        const i = randInt(l.length);
        return l[i];
    }

    function email(fn, ln, by) {
        const domains = ['aol.com', 'hotmail.com', 'ymail.com', 'gmail.com'];
        const type = Math.floor();
        const end = "@" + choose(domains)
        switch (randInt(3)) {
            case 1:
                return fn + "." + ln.substr(0, randInt(2, 5)) + "." + by + end;
                break;
            case 2:
                return fn.substr(0, randInt(1, 2)) + "." + ln + "." + by + end;
                break;
            default:
                return fn + "." + ln + end;
        }
    }

    const fnames = [
        'Kyler',
        'Eliya',
        'Lexie',
        'Haven',
        'Aubriella',
        'Jonael',
        'Cruz',
        'Javan',
        'Tristin',
        'Valen',
        'Gino',
        'Jerick',
        'Kristian',
        'Arius',
        'Rayshawn',
        'Kayle',
        'Adiel',
        'Adael',
        'Luiza',
        'Mayar',
        'Alijah',
        'Kolbe',
        'Mariana',
        'Amari',
        'Freddie',
        'Torsten',
        'Arlin',
        'Silver',
        'Diana',
        'Abhiram',
        'Daylon',
        'Lionel',
        'Adalynne',
        'Deshawn',
        'Emari',
        'Nicolai',
        'Nadia',
        'Kyle',
        'Brinkley',
        'Desiree',
        'Montrell',
        'Aziyah',
        'Caileigh',
        'Dontrell',
        'Natasha',
        'Devansh',
        'Tayten',
        'Garrett',
        'Kallan',
        'Braxton',
        'Elian',
        'Linkoln',
        'Orin',
        'Taran',
        'Jaycen',
        'Matheus',
        'Lilly',
        'Melanie',
        'Keane',
        'Ilona',
        'Kanon',
        'Jaydyn',
        'Tayshawn',
        'Leiana',
        'Whitman',
        'Karlyn',
        'Chloey',
        'Bensen',
        'Jusiah',
        'Liba',
        'Travion',
        'Delanie',
        'Lanya',
        'Ronni',
        'Noa',
        'Ames',
        'Artemis',
        'Justice',
        'Marshal',
        'Ahuva',
        'Khalil',
        'Linus',
        'Sommer',
        'Arwen',
        'Darwin',
        'Kamrynn',
        'Amadou',
        'Aaliah',
        'Arabella',
        'Vittorio',
        'Jaheim',
        'Zayan',
        'Fitz',
        'Noa',
        'Josh',
        'Izaac',
        'Jarrod',
        'Mckinleigh',
        'Jalil',
        'Arabelle',
        'Abubakr',
        'Asim',
        'Davian',
        'Arizona',
        'Tauriel',
        'Derik',
        'Lanah',
        'Joel',
        'Carter',
        'Alany',
        'Nicholas',
        'Caralyn',
        'Madigan',
        'Caris',
        'Noemie',
        'Loren',
        'Acen',
        'Damon',
        'Ainslie',
        'Darrick',
        'Moriah',
        'Deangelo',
        'Raniya',
        'Brett',
        'Greenlee',
        'Sora',
        'Rylea',
        'Taysom',
        'Wilmer',
        'Naomy',
        'Brookelynn',
        'Rony',
        'Elektra',
        'Yohana',
        'Luqman',
        'Gael',
        'Crystal',
        'Makiyah',
        'Benjamin',
        'Levy',
        'Donna',
        'Chrislynn',
        'Maite',
        'Pedro',
        'Kage',
        'Adella',
        'Sarah',
        'Jasiah',
        'Bexley',
        'Avyana',
        'Kalib',
        'Troy',
        'Keon',
        'Linley',
        'Victoria',
        'Keilani',
        'Erynn',
        'Eshaan',
        'Kassius',
        'Hallie',
        'Elowyn',
        'Yadiel',
        'Aahil',
        'Kaela',
        'Anessa',
        'Eugene',
        'Ailany',
        'Rina',
        'Talaya',
        'Delia',
        'Damoni',
        'Saray',
        'Derek',
        'Qasim',
        'Mariyah',
        'Lux',
        'Nate',
        'Ameir',
        'Amarri',
        'Kaisen',
        'Zaid',
        'Christelle',
        'Shanti',
        'Kobe',
        'Lanna',
        'Adonis',
        'Jovian',
        'Callee',
        'Sufyan',
        'Yolanda',
        'Carley',
        'Marshawn',
        'Willy',
        'Yoseph',
        'John',
        'Jocelynne',
        'Blake',
        'Shana',
        'Liesel',
        'Summer',
        'Manolo',
        'Lachlan',
        'Harlan',
        'Maylin',
        'Fannie',
        'Brendan',
        'Marin',
        'Kezia',
        'Kamar',
        'Adem',
        'Lexi',
        'Nikoli',
        'Xavian',
        'Benicio',
        'Ryley',
        'Mariafernanda',
        'Cathy',
        'Atticus',
        'Charley',
        'Jalaysia',
        'Douglas',
        'Hillel',
        'Lya',
        'Samar',
        'Amiracle',
        'Devontae',
        'Payzlee',
        'Lee',
        'Miguelangel',
        'Eddison',
        'Marcelo',
        'Janelle',
        'Gerard',
        'Dawsyn',
        'Xavion',
        'Charolette',
        'Aalia',
        'Jihad',
        'Nathaniel',
        'Arrow',
        'Adriana',
        'Geovani',
        'Charity',
        'Daksh',
        'Adalena',
        'Raygen',
        'Paisley',
        'Everest',
        'Micah',
        'Elisa',
        'Hoyt',
        'Kingdavid',
        'Dajuan',
        'Lakin',
        'Khristopher',
        'Jannah',
        'Branson',
        'Lynn',
        'Vail',
        'Trenton',
        'Nyjah',
        'Eiley',
        'Amaiah',
        'Destinee',
        'Lennox',
        'Braxtyn',
        'Beautiful',
        'Demitri',
        'Dhilan',
        'Avani',
        'Sanya',
        'Eesha',
        'Maira',
        'Dovid',
        'Obadiah',
        'Alyssa',
        'Serah',
        'Nilah',
        'Jacobo',
        'Egypt',
        'Jerson',
        'Kelton',
        'Nechama',
        'Ivyana',
        'Elanor',
        'Luka',
        'Fenix',
        'Shamar',
        'Keylor',
        'Avinash',
        'Franky',
        'Kiyah',
        'Nadir',
        'Aulani',
        'Maddelyn',
        'Nihal',
        'Aarin',
        'Emmalin',
        'Arnoldo',
        'Markeith',
        'Sumaya',
        'Tilly',
        'Emersen',
        'Hank',
        'Stevie',
        'Amiya',
        'Tycen',
        'Yusra',
        'Hector',
        'Milani',
        'Kelcie',
        'Sonora',
        'Wade',
        'Avraham',
        'Misha',
        'Maribella',
        'Taten',
        'Jenelle',
        'Elio',
        'Aylen',
        'Maxwell',
        'Aziel',
        'Fatou',
        'Brylynn',
        'Legend',
        'Storm',
        'Khaliah',
        'Zara',
        'Story',
        'Emmerson',
        'Lovely',
        'Miranda',
        'Vania',
        'Nadya',
        'Johnnie',
        'Blakley',
        'Karl',
        'Ione',
        'Teegan',
        'Kaidence',
        'Wells',
        'Zahraa',
        'Annastasia',
        'Fredrick',
        'Lawson',
        'Emmalynn',
        'Lathan',
        'Carlee',
        'Jamyiah',
        'Roberta',
        'Emory',
        'Aislynn',
        'Alonzo',
        'Darcy',
        'Ryne',
        'Trent',
        'Blade',
        'Jaiden',
        'Aymen',
        'Aryiah',
        'Delila',
        'Jaziah',
        'Wilhelmina',
        'Mazzy',
        'Perry',
        'Briasia',
        'Charlie',
        'Landon',
        'Kainoa',
        'Jania',
        'Frederic',
        'Jeremyah',
        'Elisabeth',
        'Karizma',
        'Oren',
        'Heaven',
        'Camila',
        'Nayomi',
        'Larry',
        'Antoinette',
        'Abrianna',
        'Jurnee',
        'Brentlee',
        'Gaston',
        'Henleigh',
        'Kidus',
        'Kiah',
        'Anasofia',
        'Harry',
        'Kathryn',
        'Captain',
        'Shaylee',
        'Francis',
        'Nadiyah',
        'Asma',
        'Fayth',
        'Nazir',
        'Kalaya',
        'Jalyn',
        'Alek',
        'Gene',
        'Aisley',
        'Kaniya',
        'Holland',
        'Calvin',
        'Thea',
        'Jamira',
        'Zya',
        'Maxen',
        'Domingo',
        'Emmanuella',
        'Anilah',
        'Md',
        'Raiden',
        'Harlen',
        'Mekhai',
        'Jazaria',
        'Mahir',
        'Judd',
        'Cree',
        'Sammy',
        'Leighann',
        'Nori',
        'Fianna',
        'Stormy',
        'Zahid',
        'Seth',
        'Trapper',
        'Dmitry',
        'Melany',
        'Riley',
        'Dalila',
        'Ellarose',
        'Korbin',
        'Hailey',
        'Anaya',
        'Evelina',
        'Bobbi',
        'Anaiya',
        'Tanvi',
        'Severin',
        'Lennix',
        'Joyce',
        'Breonna',
        'Aanika',
        'Barry',
        'Rockwell',
        'Svea',
        'Azaan',
        'Laiah',
        'Aayansh',
        'Destin',
        'Era',
        'Ryken',
        'Finnick',
        'Chanell',
        'Jessica',
        'Tasia',
        'Makeda',
        'Dalton',
        'Natalia',
        'Ariyan',
        'Faustina',
        'Holdyn',
        'Kyah',
        'Yaniel',
        'Huckleberry',
        'Caterina',
        'Bowen',
        'Layah',
        'Mihika',
        'Dillon',
        'Jamarcus',
        'Nikhil',
        'Samira',
        'Kaniyah',
        'Allyssa',
        'Santiago',
        'Zymir',
        'Jaiyana',
        'Uriel',
        'Kadrian',
        'Tess',
        'Maksim',
        'Chassidy',
        'Avery',
        'Iqra',
        'Jaxston',
        'Carlito',
        'Aicha',
        'Leandra',
        'Husna',
        'Gabriel',
        'Lexington',
        'Zaelynn',
        'Jeremias',
        'Gary',
        'Saharsh',
        'Zania',
        'Tala'
    ]
    const lnames = [
        'Short',
        'Jamerson',
        'Gee',
        'Doughty',
        'Mansfield',
        'Burnette',
        'Grimes',
        'Mielke',
        'Duggins',
        'Vermillion',
        'Burdick',
        'Claussen',
        'Barrios',
        'Dvorak',
        'Peeler',
        'Davalos',
        'Stanfield',
        'Mclamb',
        'Wilmot',
        'Nathan',
        'Bracken',
        'Weigel',
        'Dalton',
        'Davila',
        'Caceres',
        'Stetson',
        'Mcgaha',
        'Luevano',
        'Heath',
        'Heffernan',
        'Mcginn',
        'Muniz',
        'Heckman',
        'Brunner',
        'Finger',
        'Toscano',
        'Kemp',
        'Rhodes',
        'Pomeroy',
        'Koenig',
        'Sayles',
        'Falcone',
        'Nail',
        'Grainger',
        'Ziegler',
        'Osteen',
        'Espitia',
        'Patrick',
        'Leonardo',
        'Aguilar',
        'Saucedo',
        'Gaitan',
        'Hales',
        'Naughton',
        'Saucier',
        'Tabb',
        'Sutton',
        'Castro',
        'Pilkington',
        'Cureton',
        'Byrnes',
        'Hageman',
        'Clyde',
        'Babbitt',
        'Cater',
        'Cordle',
        'Hipp',
        'Saravia',
        'Cranston',
        'Loucks',
        'Esquibel',
        'Herrmann',
        'Cadet',
        'Summer',
        'Raley',
        'Sokol',
        'Cranford',
        'Hanna',
        'Conger',
        'Olivera',
        'Mcknight',
        'Marroquin',
        'Dann',
        'Judge',
        'Calvert',
        'Howlett',
        'Mcswain',
        'Carpio',
        'Avila',
        'Dillow',
        'Raynor',
        'Knotts',
        'Tarantino',
        'Tolbert',
        'Massie',
        'Pulliam',
        'Mccurry',
        'Despain',
        'Callender',
        'Monk',
        'Cantor',
        'Nyberg',
        'Blum',
        'Cruse',
        'Gottschalk',
        'Record',
        'Dunphy',
        'Pena',
        'Rosas',
        'Levasseur',
        'Russell',
        'Eichler',
        'Osterman',
        'Seale',
        'Bono',
        'Thornburg',
        'Alvares',
        'Haley',
        'Tepper',
        'Ressler',
        'Hyatt',
        'Hutson',
        'Otte',
        'Metzger',
        'Bucci',
        'Behnke',
        'Hawn',
        'Toombs',
        'Monroy',
        'Mather',
        'Windham',
        'Brooker',
        'Schuette',
        'Moyers',
        'Palomares',
        'Newton',
        'Wooten',
        'Coyne',
        'Moore',
        'Barner',
        'Arriaga',
        'Auer',
        'Blackman',
        'Gentry',
        'Hard',
        'Jackman',
        'Mason',
        'Cassidy',
        'Carbajal',
        'Sly',
        'Holston',
        'Copeland',
        'Halverson',
        'Mccaffrey',
        'Gomez',
        'Spann',
        'Payan',
        'Malinowski',
        'Alexis',
        'Medrano',
        'Dabney',
        'Nickerson',
        'Oden',
        'Groh',
        'Wingo',
        'Mims',
        'Thomasson',
        'Perdomo',
        'Stutz',
        'Grubb',
        'Camper',
        'Kavanaugh',
        'Daniel',
        'Granado',
        'Tackett',
        'Thigpen',
        'Villareal',
        'Honaker',
        'Callison',
        'Worden',
        'Otero',
        'Kimura',
        'Berumen',
        'Langley',
        'Sack',
        'Silver',
        'Billington',
        'Foxworth',
        'Mier',
        'Gagne',
        'Whittaker',
        'Lamar',
        'Celis',
        'Krajewski',
        'King',
        'Peay',
        'Black',
        'Schlueter',
        'Munro',
        'Sherman',
        'Apple',
        'Westbrook',
        'Wideman',
        'Brandenburg',
        'Brister',
        'Noble',
        'Mabry',
        'Fielder',
        'Rabe',
        'Tse',
        'Melton',
        'Wolfson',
        'Coffee',
        'Shipp',
        'Glasgow',
        'Hartsell',
        'Giddens',
        'Orozco',
        'Dejesus',
        'Polite',
        'Mccray',
        'Sistrunk',
        'Oviedo',
        'Rembert',
        'Clegg',
        'Sylvia',
        'Hower',
        'Crockett',
        'Sells',
        'Tarin',
        'Ybarra',
        'Villegas',
        'Deaton',
        'Laurence',
        'Warfield',
        'Lemmons',
        'Mele',
        'Pierrelouis',
        'Holmes',
        'Sales',
        'Goodman',
        'Kerby',
        'Stauffer',
        'Kates',
        'Riddell',
        'Gamache',
        'Harrison',
        'Helman',
        'Renteria',
        'Terrell',
        'Sell',
        'Mirza',
        'Grimaldo',
        'Malott',
        'Rochelle',
        'Moy',
        'Otto',
        'Mcculloch',
        'Natale',
        'Beard',
        'Alderson',
        'Collum',
        'Kunze',
        'Hummel',
        'Mckinley',
        'Poston',
        'Olinger',
        'Pridgen',
        'Walcott',
        'Falcon',
        'Cate',
        'Arbuckle',
        'Ridge',
        'Her',
        'Hoke',
        'Richards',
        'Pascua',
        'Wickham',
        'Tibbs',
        'Hsu',
        'Elizalde',
        'Acker',
        'Hanlon',
        'Pendley',
        'Rife',
        'Livesay',
        'Skiles',
        'Nielson',
        'Askins',
        'Sullins',
        'Ricciardi',
        'Wiese',
        'Cryer',
        'Pennell',
        'Gallego',
        'Lavallee',
        'Dewald',
        'Holbert',
        'Edmundson',
        'Mathewson',
        'Feeney',
        'Montiel',
        'Kiel',
        'Farris',
        'Derry',
        'Goldman',
        'Canchola',
        'Loera',
        'Massey',
        'Rouse',
        'Quimby',
        'Curcio',
        'Franks',
        'Lauer',
        'Jacobo',
        'Beene',
        'Hartshorn',
        'Bratcher',
        'Fulcher',
        'Bromley',
        'Lewin',
        'Loza',
        'Rogan',
        'Cipriano',
        'Mulkey',
        'Stockwell',
        'Straight',
        'Fitzpatrick',
        'Mckenney',
        'Chadwell',
        'Randazzo',
        'Sweeney',
        'Bill',
        'Hailey',
        'Hoy',
        'Crowl',
        'Pfeiffer',
        'Lamoureux',
        'Gupta',
        'Hepler',
        'Seidel',
        'Mulcahy',
        'Schaaf',
        'Overstreet',
        'Sloane',
        'Edmonds',
        'Suggs',
        'Ivey',
        'Paiz',
        'Magallanes',
        'Staley',
        'Wendt',
        'Lugo',
        'Shell',
        'Binns',
        'Rankin',
        'Garces',
        'Aguirre',
        'Dahlgren',
        'Springfield',
        'Fee',
        'Mckeever',
        'Simpkins',
        'Ashburn',
        'Kelso',
        'Pletcher',
        'Barton',
        'Morgan',
        'Dodds',
        'Higa',
        'Lohman',
        'Grau',
        'Teague',
        'Brokaw',
        'Fultz',
        'Yoder',
        'Gibson',
        'Hassell',
        'Wynn',
        'Maestas',
        'Baumgartner',
        'Eastman',
        'Worthy',
        'Smithers',
        'Gillispie',
        'Luo',
        'Dumont',
        'Appel',
        'Duvall',
        'Koch',
        'Oloughlin',
        'Lofton',
        'Osborn',
        'Privett',
        'Goforth',
        'Scanlan',
        'Andrus',
        'Mcclary',
        'Gambino',
        'Brothers',
        'Luis',
        'Royster',
        'Larosa',
        'Lejeune',
        'Powers',
        'Stanton',
        'Antonucci',
        'Fore',
        'Loeffler',
        'Saechao',
        'Mulder',
        'Willhite',
        'Sin',
        'Branch',
        'Palmieri',
        'Alessi',
        'Mccusker',
        'Hollenbeck',
        'Tisdale',
        'Damato',
        'Fanning',
        'Mejias',
        'Vest',
        'Steven',
        'Withers',
        'Papp',
        'Hess',
        'Teller',
        'Chesney',
        'Bird',
        'Reynolds',
        'Bull',
        'Smock',
        'Hamm',
        'Palmer',
        'Donovan',
        'Tharp',
        'Lavigne',
        'Echevarria',
        'Sanborn',
        'Spoon',
        'Yap',
        'Sherwood',
        'Smitherman',
        'Poppe',
        'Farnsworth',
        'Covey',
        'Brann',
        'Loredo',
        'Oliveros',
        'Steger',
        'Birch',
        'Reif',
        'Henshaw',
        'Cartagena',
        'Coney',
        'Townsend',
        'Gwaltney',
        'Robillard',
        'Kane',
        'Schneider',
        'Spinner',
        'Tolle',
        'Hiles',
        'Salerno',
        'Shockey',
        'Biggerstaff',
        'Abner',
        'Helms',
        'Silvers',
        'Rothwell',
        'Proctor',
        'Hutcheson',
        'Janssen',
        'Stovall',
        'Rickard',
        'Saleh',
        'Garza',
        'Hogg',
        'Hoggard',
        'Rutherford',
        'Ismail',
        'Reynoso',
        'Radford',
        'Lukas',
        'Benson',
        'Samaniego',
        'Montenegro',
        'Hickerson',
        'Braddock',
        'Gaskill',
        'Fitzwater',
        'Young',
        'Burchett',
        'Shabazz',
        'Pickering',
        'Doherty',
        'Scheid',
        'Willison',
        'Logsdon'
    ]

    const zips = [
        52240,
        52241,
        52242,
        52243,
        52244,
        52245,
        52246
    ]

    if (window.location.pathname === "/en/") {
        if ($("#divLoginMaster:visible").length < 1) {
            // signed in
            window.location = "https://www.40daysforlife.com/en/vigil-hours-signup.aspx?l_id=451";
        }

        $("#divLoginMaster").trigger('click');
        $("#pNoAccountMaster a").trigger('click');

        if ($("#aEuSignupConfirmMaster1:visible").length > 0) {
            console.log('gotta go fast');
            $("#aEuSignupConfirmMaster1").click();
        }

        const fn = choose(fnames);
        const ln = choose(lnames);
        const by = year();
        const em = email(fn, ln, by);
        const pwd = fn + "123";
        const zip = choose(zips);

        $("#first_name").val(fn);
        $("#last_name").val(ln);
        $("#email").val(em);
        $("#zip").val(zip);
        $("#password").val(pwd);
        $("input[name=confirm_password]").val(pwd);
        scrollToCaptcha(".-signup_overlay.popup_box");
    } else if (window.location.pathname === "/en/vigil-hours-signup.aspx") {
        var days = [1, 2, 3, 4, 5, 6, 7];
        var coverage = days.map(function (d) {
            var total = 0;
            $(".-day.-in_campaign:nth-child(" + d + ")").each(function (i, elem) {
                total += parseInt($(elem).find(".percentage").text());
            });
            return {day: d, cover: total};
        });
        coverage.sort(function (a, b) {
            return a.cover - b.cover;
        })
        days = coverage.map(x => x.day).slice(0, randInt(2, 5));

        function signUpDay(days) {
            var day = days.pop();
            $(".-day.-in_campaign:nth-child(" + day + ")").first().click()
            window.setTimeout(function () {
                console.log("clickity");
                var hours = $(".-hour_row.active .-hour_cell");
                shuffle(hours);
                hours.sort(function (a, b) {
                    return parseInt(a.textContent) - parseInt(b.textContent);
                });
                $(hours[0]).click();

                $("#styled-checkbox-counter").click()
                window.setTimeout(function () {
                    if (days.length > 0) {
                        $("#btnAddHours").click();
                        window.setTimeout(function () {
                            signUpDay(days);
                        }, 600);
                    } else {
                        console.log("done");
                        $("#btnSubmitHours").click();
                    }
                }, 400);
            }, 600)
        }

        signUpDay(days);
    } else if (window.location.pathname === "en/iowacity/sop") {
        $("#chkEmailOptIn").prop("checked", false);
        scrollToCaptcha(".vigil-local.sop");
    } else {
        window.location = "https://www.40daysforlife.com/en/";
    }
}());