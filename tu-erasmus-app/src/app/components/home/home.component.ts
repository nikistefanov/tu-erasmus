import { AfterViewInit, Component } from '@angular/core';

declare var svgMap: any;
var data = {
    data: {
        partners: {
          name: 'Erasmus+ Partners',
          format: '{0}',
          thousandSeparator: ','
        },

        count: {
          name: 'Total',
          format: '{0}',
          thousandSeparator: ',',
          thresholdMax: 2,
          thresholdMin: 0
        }
      },
      applyData: 'count',
      values: {

        AL: {partners: 'European University of Tirana </br> University of Vlora "Ismail Kemaly"',  count: 2},

        BE: {partners: 'Gent University',  count: 1},

        BG: {partners: 'Technical University - Varna',  count: 1},

        HR: {partners: 'University of Zagreb </br> University of Osijek – UNIOS </br> University of Zadar, Department of Ecology, Agronomy and Aquaculture </br> CZECH TECHNICAL UNIVERSITY IN PRAGUE',  count: 4},

        CY: {partners: 'University of Nicosia </br> OCEANCREW MANAGMENT LTD. /OVERSEAS MARITIME LTD./ </br> Mediterranean Institute of Management',  count: 3},
        CZ: {partners: 'Brno University of Technology </br> Moravská vysoká škola Olomouc, Základní informace o škole </br> Technical University of Ostrava </br> Tomas Bata University </br> Palacky University Olomouc </br> University of West Bohemia in Pilsen </br> Mendel Univresity in Brno',  count: 7},

        DK: {partners: 'VIA University College',  count: 1},

        FI: {partners: 'CENTRIA University of Applied Sciences </br> OULU UNIVERSITY OF APPLIED SCIENCES',  count: 2},
        FR: {partners: 'Institut Régional du Travail Social Aquitaine </br> University of the Littoral Opal Coast </br> ESAIP Graduate School of Engineering',  count: 3},

        DE: {partners: 'Hochschule Bremen – University of Applied Sciences </br> University of Rostock </br> Hochschule Wismar </br> GALAXY POWER GmbH /COSMOS AGENCY LTD./ </br> TECHNISCHE UNIVERSITAET ILMENAU </br> Offenburg University of Applied Sciences </br>Schmalkalden University of Applied Sciences </br> Karlsruhe Institute of Technology',  count: 8},

        GR: {partners: 'Еastern Macedonia & Thrace Institute of Technology </br> National Technical University of Athens </br> University of Ioannina </br> AGRICULTURAL UNIVERSITY OF ATHENS </br> Stamco Ship Management Co Ltd',  count: 5},

        HU: {partners: 'Obuda University </br> Széchenyi István University',  count: 2},
        IS: {partners: 'University of Iceland',  count: 1},

        IE: {partners: 'Institute of Technology Blanchardstown',  count: 1},

        IT: {partners: 'UNVERSITA DI FOGGIA </br> Universita degli Studi di Bari Aldo Moro </br> UNIVERSITY OF VERONA </br> SAPIENZA UNIVERSITA DI ROMA </br> I.S.I.A. – Istituto Superiore per le Industrie Artistiche – Roma',  count: 5},

        LV: {partners: 'Mediterranean Institute of Management </br> The University of Economics and Culture',  count: 2},

        LT: {partners: 'Kaunas University of Technology </br> Vilnius Gediminas Technical University </br> Klaipeda University',  count: 3},

        MK: {partners: 'Goce Delcev University in Stip </br> “St Kliment Ohridski” University - Bitola </br> University of Information and Technology “Saint Paul the Apostle” - Ohrid </br> International Slavic University "Gavrilo Derzhavin" </br> University of Tetova',  count: 5},

        MT: {partners: 'VELIKO TIRNOVO SHIPPING CO LTD., /БМФ/ </br> W.J.Parnis England /IHB SHIPPING Co. C/O/',  count: 2},

        NL: {partners: 'Fontys University of Applied Science',  count: 1},

        PL: {partners: 'AGH University of Science and Technology - Krakow </br> Koszalin University of Technology </br> Wroclaw University of Technology </br> Wroclaw School of Information Technology WWSIS “Horyzont” </br> Maritime University of Szczecin </br> University of Life Sciences in Lublin </br> The East European State University in Przemysl </br> Poznan University of Technology',  count: 7},
        PT: {partners: 'University of Lisbon </br> Polytechnic institute of Coimbra </br> EIA - Ensino Investigacao e Admistracao, SA </br> Polytechnic Institute of Viana do Castelo',  count: 4},

        RO: {partners: 'Constanta Maritime University </br> University „Constantin Brancusi“ in Targu-Jiu </br> „Gheorghe Asachi“ Technical University of IASI </br> Transilvania University of Brasov </br> University of Alba Iulia </br> National University of Arts Bucharest </br> UNIVERSITY "DUNAREA DE JOS" OF GALATI </br> TECHNICAL UNIVERSITY OF CLUJ-NAPOCA </br> Ovidius University of Constanta </br> University "Lician Blaga" - Sibiu </br> Polytechnical University of Bucharest',  count: 11},

        RS: {partners: 'UNIVERSITY OF NOVI SAD </br> UNIVERSITY OF Kragujevac',  count: 2},

        SK: {partners: 'Slovak University of Agriculture in Nitra </br> University of Zilina',  count: 2},
        SI: {partners: 'University of Ljubljana </br> Academia Higher Education Colleges',  count: 2},

        ES: {partners: 'University of Cartagena </br> University of Deusto </br>University of Valencia </br> Universidad de Las Palmas de Grand Canaria </br> Universidad de Castilla - La Mancha',  count: 5},

        TR: {partners: 'Bayburt University </br> Kirikkale University </br> Yalova University </br> Karabuk University </br> Istanbul Tеknik Universitisi </br> Аntalya Bilim Univarsity </br> YILDIZ TECHNICAL UNIVERSITY </br> BEYKOZ UNIVERSITY </br> SIIRT UNIVERSITY </br> Adana Science and Technology University </br> Toros University - Mersin </br> Ordu University </br> Izmir Demokrasi University </br> BILECIK SEYH EDEBALI UNIVERSITY </br> Uşak University </br> Alanya Alaaddin Keykubat University </br> Trakya University </br> Sakarya University of Applied Sciences </br> Adiyaman University  </br> ERCIYES UNIVERSITY',  count: 20},

        GB: {partners: 'South Eastern Regional College (SERC), Bangor, N. Ireland </br> Salads Harvesting Services Ltd, част от G’s Group </br> Zodiac Maritime Ltd. London',  count: 3}
      }

}

@Component({
    selector: 'tu-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

    ngAfterViewInit(): void {
        new svgMap({
            targetElementID: 'svgMap',
            initialPan: { x: 750, y: 150 },
            initialZoom: 5,
            data: {
                data: {
                    partners: {
                        name: '',
                        format: '{0}',
                        thousandSeparator: ','
                    },
                    count: {
                        name: 'Общо',
                        format: '{0}',
                        thousandSeparator: ',',
                        thresholdMax: 2,
                        thresholdMin: 0
                    }
                },
                applyData: 'count',
                values: {
                    AL: {partners: 'European University of Tirana </br> University of Vlora "Ismail Kemaly"',  count: 2},

                    BE: {partners: 'Gent University',  count: 1},

                    BG: {partners: 'Technical University - Varna',  count: 1, link: "23"},
                }
            }
        });
    }
}

