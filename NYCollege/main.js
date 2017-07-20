'use strict';

var colleges = {
  "adirondack community college" : {
    "campus": "Adirondack Community College",
    "institution_level": "2-year",
    "institution_type": "Community Colleges",
    "program_1": "Liberal Arts And Sciences",
    "program_2": "Business Administration",
    "program_3": "Nursing",
    "program_4": "Criminal Justice",
    "program_5": "Media Arts",
    "undergrad_enrollment": "3993",
    "campus_website": "http://www.sunyacc.edu",
    "address": "640 Bay Rd",
    "city": "Queensbury",
    "state": "NY",
    "zip": "12804",
  },
  "broome community college" : {
    "campus": "Broome Community College",
    "institution_level": "2-year",
    "institution_type": "Community Colleges",
    "program_1": "Liberal Arts And Sciences",
    "program_2": "Business Administration",
    "program_3": "Nursing",
    "program_4": "Criminal Justice",
    "program_5": "Human Services",
    "undergrad_enrollment": "5926",
    "campus_website": "http://www.sunybroome.edu",
    "address": "Upper Front St, PO BOX 1017",
    "city": "Binghamton",
    "state": "NY",
    "zip": "13902",
  },
  "cayuga county community college" : {
    "campus": "Cayuga County Community College",
    "institution_level": "2-year",
    "institution_type": "Community Colleges",
    "program_1": "Liberal Arts And Sciences",
    "program_2": "Business Administration",
    "program_3": "Criminal Justice",
    "program_4": "Nursing",
    "program_5": "Studio Art & Design",
    "undergrad_enrollment": "4184",
    "campus_website": "http://www.cayuga-cc.edu",
    "address": "197 Franklin St",
    "city": "Auburn",
    "state": "NY",
    "zip": "13021",
  },
  "clinton community college" : {
    "campus": "Clinton Community College",
    "institution_level": "2-year",
    "institution_type": "Community Colleges",
    "program_1": "Liberal Arts And Sciences",
    "program_2": "Criminal Justice",
    "program_3": "Nursing",
    "program_4": "Business Administration",
    "program_5": "Human Services",
    "undergrad_enrollment": "1862",
    "campus_website": "http://www.clinton.edu",
    "address": "136 Clinton Point Dr",
    "city": "Plattsburgh",
    "state": "NY",
    "zip": "12901",
  },
  "columbia greene community college" : {
    "campus": "Columbia-Greene Community College",
    "institution_level": "2-year",
    "institution_type": "Community Colleges",
    "program_1": "Liberal Arts And Sciences",
    "program_2": "Criminal Justice",
    "program_3": "Nursing",
    "program_4": "Business Administration",
    "program_5": "Fine Arts",
    "undergrad_enrollment": "1781",
    "campus_website": "http://www.sunycgcc.edu",
    "address": "4400 Route 23",
    "city": "Hudson",
    "state": "NY",
    "zip": "12534",
  },
  "corning community college" : {
    "campus": "Corning Community College",
    "institution_level": "2-year",
    "institution_type": "Community Colleges",
    "program_1": "Liberal Arts And Sciences",
    "program_2": "Nursing",
    "program_3": "Business Administration",
    "program_4": "Human Services",
    "program_5": "Criminal Justice",
    "undergrad_enrollment": "3972",
    "campus_website": "http://www.corning-cc.edu",
    "address": "1 Academic Dr",
    "city": "Corning",
    "state": "NY",
    "zip": "14830",
  },
  "dutchess community college" : {
    "campus": "Dutchess Community College",
    "institution_level": "2-year",
    "institution_type": "Community Colleges",
    "program_1": "Liberal Arts And Sciences",
    "program_2": "Nursing",
    "program_3": "Business Administration",
    "program_4": "Criminal Justice",
    "program_5": "Human Services",
    "undergrad_enrollment": "9546",
    "campus_website": "http://www.sunydutchess.edu",
    "address": "53 Pendell Rd",
    "city": "Poughkeepsie",
    "state": "NY",
    "zip": "12601",
  },
  "erie community college" : {
    "campus": "Erie Community College-City Campus",
    "institution_level": "2-year",
    "institution_type": "Community Colleges",
    "program_1": "Liberal Arts And Sciences",
    "program_2": "Business Administration",
    "program_3": "Criminal Justice",
    "program_4": "Nursing",
    "program_5": "Automotive Technology ",
    "undergrad_enrollment": "12022",
    "campus_website": "http://www.ecc.edu",
    "address": "121 Ellicott St",
    "city": "Buffalo",
    "state": "NY",
    "zip": "14203",
  },
  "fashion institute of technology" : {
    "campus": "Fashion Institute of Technology",
    "institution_level": "4-year",
    "institution_type": "Fashion Institute",
    "program_1": "Fashion Merchandising Management",
    "program_2": "Fashion Design",
    "program_3": "Advertising & Marketing Communications",
    "program_4": "Illustration",
    "program_5": "Interior Design",
    "undergrad_enrollment": "9386",
    "campus_website": "http://www.fitnyc.edu",
    "address": "Seventh Ave at 27 St",
    "city": "New York",
    "state": "NY",
    "zip": "10001",
  },
  "finger lakes community college" : {
    "campus": "Finger Lakes Community College",
    "institution_level": "2-year",
    "institution_type": "Community Colleges",
    "program_1": "Liberal Arts And Sciences",
    "program_2": "Criminal Justice",
    "program_3": "Business Administration",
    "program_4": "Human Services",
    "program_5": "Music Recording Technology",
    "undergrad_enrollment": "6755",
    "campus_website": "http://www.flcc.edu",
    "address": "3325 Marvin sands Dr",
    "city": "Canandaigua",
    "state": "NY",
    "zip": "14424",
  },
  "fulton montgomery community college" : {
    "campus": "Fulton-Montgomery Community College",
    "institution_level": "2-year",
    "institution_type": "Community Colleges",
    "program_1": "Liberal Arts And Sciences",
    "program_2": "Criminal Justice",
    "program_3": "Human Services",
    "program_4": "Business Administration",
    "program_5": "Nursing",
    "undergrad_enrollment": "2551",
    "campus_website": "http://fmcc.suny.edu",
    "address": "2805 State Hwy 67",
    "city": "Johnstown",
    "state": "NY",
    "zip": "12095",
  },
  "genesee community college" : {
    "campus": "Genesee Community College",
    "institution_level": "2-year",
    "institution_type": "Community Colleges",
    "program_1": "Liberal Arts And Sciences",
    "program_2": "Health Studies",
    "program_3": "Criminal Justice",
    "program_4": "Business Administration",
    "program_5": "Nursing",
    "undergrad_enrollment": "6521",
    "campus_website": "http://www.genesee.edu",
    "address": "One College Rd",
    "city": "Genesee",
    "state": "NY",
    "zip": "14020",
  },
  "herkimer county community college" : {
    "campus": "Herkimer County Community College",
    "institution_level": "2-year",
    "institution_type": "Community Colleges",
    "program_1": "Liberal Arts And Sciences",
    "program_2": "Criminal Justice",
    "program_3": "Human Services",
    "program_4": "Business Administration",
    "program_5": "Sports And Recreation Management",
    "undergrad_enrollment": "3020",
    "campus_website": "http://www.herkimer.edu",
    "address": "100 Reservoir Rd",
    "city": "Herkimer",
    "state": "NY",
    "zip": "13350",
  },
  "hudson valley community college" : {
    "campus": "Hudson Valley Community College",
    "institution_level": "2-year",
    "institution_type": "Community Colleges",
    "program_1": "Business Administration",
    "program_2": "Liberal Arts And Sciences",
    "program_3": "Criminal Justice",
    "program_4": "Human Services",
    "program_5": "Electrical Construction & Maintenance",
    "undergrad_enrollment": "11796",
    "campus_website": "http://www.hvcc.edu",
    "address": "80 Vandenburgh Ave",
    "city": "Troy",
    "state": "NY",
    "zip": "12180",
  },
  "jamestown community college" : {
    "campus": "Jamestown Community College",
    "institution_level": "2-year",
    "institution_type": "Community Colleges",
    "program_1": "Liberal Arts And Sciences",
    "program_2": "Nursing",
    "program_3": "Business Administration",
    "program_4": "Human Services",
    "program_5": "Criminal Justice",
    "undergrad_enrollment": "4826",
    "campus_website": "http://www.sunyjcc.edu",
    "address": "525 Falconer St",
    "city": "Jamestown",
    "state": "NY",
    "zip": "14701",
  },
  "jefferson community college" : {
    "campus": "Jefferson Community College",
    "institution_level": "2-year",
    "institution_type": "Community Colleges",
    "program_1": "Liberal Arts And Sciences",
    "program_2": "Business Administration",
    "program_3": "Criminal Justice",
    "program_4": "Human Services",
    "program_5": "Early Childhood",
    "undergrad_enrollment": "3748",
    "campus_website": "http://www.sunyjefferson.edu",
    "address": "1220 Coffeen St",
    "city": "Watertown",
    "state": "NY",
    "zip": "13601",
  },
  "mohawk valley community college" : {
    "campus": "Mohawk Valley Community College",
    "institution_level": "2-year",
    "institution_type": "Community Colleges",
    "program_1": "Liberal Arts And Sciences",
    "program_2": "Nursing",
    "program_3": "Criminal Justice",
    "program_4": "Business Administration",
    "program_5": "Human Services",
    "undergrad_enrollment": "6675",
    "campus_website": "http://www.mvcc.edu",
    "address": "1101 Sherman Dr",
    "city": "Utica",
    "state": "NY",
    "zip": "13501",
  },
  "monroe community college" : {
    "campus": "Monroe Community College",
    "institution_level": "2-year",
    "institution_type": "Community Colleges",
    "program_1": "Liberal Arts And Sciences",
    "program_2": "Business Administration",
    "program_3": "Human Services",
    "program_4": "Hospitality Management",
    "program_5": "Nursing",
    "undergrad_enrollment": "14586",
    "campus_website": "http://www.monroecc.edu",
    "address": "1000 E Henrietta Rd",
    "city": "Rochester",
    "state": "NY",
    "zip": "14623",
  },
  "nassau community college" : {
    "campus": "Nassau Community College",
    "institution_level": "2-year",
    "institution_type": "Community Colleges",
    "program_1": "Liberal Arts And Sciences",
    "program_2": "Business Administration",
    "program_3": "Criminal Justice",
    "program_4": "Nursing",
    "program_5": "Commercial Art",
    "undergrad_enrollment": "21558",
    "campus_website": "http://www.ncc.edu",
    "address": "1 Education Dr",
    "city": "Garden City",
    "state": "NY",
    "zip": "11530",
  },
  "niagara county community college" : {
    "campus": "Niagara County Community College",
    "institution_level": "2-year",
    "institution_type": "Community Colleges",
    "program_1": "Liberal Arts And Sciences",
    "program_2": "Criminal Justice",
    "program_3": "Business Administration",
    "program_4": "Nursing",
    "program_5": "Human Services",
    "undergrad_enrollment": "6116",
    "campus_website": "http://www.niagaracc.suny.edu",
    "address": "3111 Saunders Settlement",
    "city": "Sanborn",
    "state": "NY",
    "zip": "14132",
  },
  "north country community college" : {
    "campus": "North Country Community College",
    "institution_level": "2-year",
    "institution_type": "Community Colleges",
    "program_1": "Liberal Arts And Sciences",
    "program_2": "Criminal Justice",
    "program_3": "Business Administration",
    "program_4": "Human Services",
    "program_5": "Chemical Dependency Counseling",
    "undergrad_enrollment": "1883",
    "campus_website": "http://www.nccc.edu",
    "address": "23 Santanoni Ave, PO BOX 89",
    "city": "Essex",
    "state": "NY",
    "zip": "12983",
  },
  "onondaga community college" : {
    "campus": "Onondaga Community College",
    "institution_level": "2-year",
    "institution_type": "Community Colleges",
    "program_1": "Liberal Arts And Sciences",
    "program_2": "Business Administration",
    "program_3": "Human Services",
    "program_4": "Criminal Justice",
    "program_5": "Art",
    "undergrad_enrollment": "11886",
    "campus_website": "http://www.sunyocc.edu",
    "address": "4585 W Seneca Tpke",
    "city": "Syracuse",
    "state": "NY",
    "zip": "13215",
  },
  "orange county community college" : {
    "campus": "Orange County Community College",
    "institution_level": "2-year",
    "institution_type": "Community Colleges",
    "program_1": "Liberal Arts And Sciences",
    "program_2": "Criminal Justice",
    "program_3": "Nursing",
    "program_4": "Business Administration",
    "program_5": "Visual Communications Technology",
    "undergrad_enrollment": "6982",
    "campus_website": "http://orange.cc.ny.us",
    "address": "115 South St",
    "city": "Middletown",
    "state": "NY",
    "zip": "10940",
  },
  "rockland community college" : {
    "campus": "Rockland Community College",
    "institution_level": "2-year",
    "institution_type": "Community Colleges",
    "program_1": "Liberal Arts And Sciences",
    "program_2": "Nursing",
    "program_3": "Criminal Justice",
    "program_4": "Business Administration",
    "program_5": "Communication Media Arts",
    "undergrad_enrollment": "7180",
    "campus_website": "http://www.sunyrockland.edu",
    "address": "145 College Rd",
    "city": "Suffern",
    "state": "NY",
    "zip": "10901",
  },
  "schenectady county community college" : {
    "campus": "Schenectady County Community College",
    "institution_level": "2-year",
    "institution_type": "Community Colleges",
    "program_1": "Business Administration",
    "program_2": "Liberal Arts And Sciences",
    "program_3": "Hotel Technology, Culinary Arts",
    "program_4": "Health Studies",
    "program_5": "Criminal Justice",
    "undergrad_enrollment": "6126",
    "campus_website": "http://www.sunysccc.edu",
    "address": "78 Washington Ave",
    "city": "Schenectady",
    "state": "NY",
    "zip": "12305",
  },
  "suffolk county community college" : {
    "campus": "Suffolk County Community College-Ammerman Campus at Selden",
    "institution_level": "2-year",
    "institution_type": "Community Colleges",
    "program_1": "Liberal Arts And Sciences",
    "program_2": "Criminal Justice",
    "program_3": "Business Administration",
    "program_4": "Nursing",
    "program_5": "Food Service Administration: Culinary Arts",
    "undergrad_enrollment": "26829",
    "campus_website": "http://www.sunysuffolk.edu",
    "address": "533 College Rd",
    "city": "Selden",
    "state": "NY",
    "zip": "11784",
  },
  "sullivan county community college" : {
    "campus": "Sullivan County Community College",
    "institution_level": "2-year",
    "institution_type": "Community Colleges",
    "program_1": "Liberal Arts And Sciences",
    "program_2": "Criminal Justice",
    "program_3": "Business Administration",
    "program_4": "Human Services",
    "program_5": "Computer Graphics/Grapic Design",
    "undergrad_enrollment": "1592",
    "campus_website": "http://www.sunysullivan.edu",
    "address": "112 Colege Rd",
    "city": "Sullivan",
    "state": "NY",
    "zip": "12759",
  },
  "tompkins cortland community college" : {
    "campus": "Tompkins-Cortland Community College",
    "institution_level": "2-year",
    "institution_type": "Community Colleges",
    "program_1": "Liberal Arts And Sciences",
    "program_2": "Business Administration",
    "program_3": "Criminal Justice",
    "program_4": "Nursing",
    "program_5": "Early Childhood",
    "undergrad_enrollment": "3083",
    "campus_website": "http://www.tc3.edu",
    "address": "170 North St, PO BOX 139",
    "city": "Dryden",
    "state": "NY",
    "zip": "13053",
  },
  "ulster county community college" : {
    "campus": "Ulster County Community College",
    "institution_level": "2-year",
    "institution_type": "Community Colleges",
    "program_1": "Individual Studies: Telecommunications",
    "program_2": "Liberal Arts And Sciences",
    "program_3": "Veterinary Technology",
    "program_4": "Nursing",
    "program_5": "Criminal Justice",
    "undergrad_enrollment": "3468",
    "campus_website": "http://www.sunyulster.edu",
    "address": "491 Cottekill Rd",
    "city": "Stone Ridge",
    "state": "NY",
    "zip": "12484",
  },
  "westchester community college" : {
    "campus": "Westchester Community College",
    "institution_level": "2-year",
    "institution_type": "Community Colleges",
    "program_1": "Liberal Arts And Sciences",
    "program_2": "Criminal Justice",
    "program_3": "Business Administration",
    "program_4": "Early Childhood",
    "program_5": "Visual Arts",
    "undergrad_enrollment": "12966",
    "campus_website": "http://www.sunywcc.edu",
    "address": "75 Grasslands Rd",
    "city": "Valhalla",
    "state": "NY",
    "zip": "10595",
  },
  "suny brockport" : {
    "campus": "State University College at Brockport",
    "institution_level": "4-year",
    "institution_type": "Comprehensive Colleges",
    "program_1": "Nursing",
    "program_2": "Business Administration",
    "program_3": "Criminal Justice",
    "program_4": "Psychology",
    "program_5": "Health Science",
    "undergrad_enrollment": "7069",
    "campus_website": "http://www.brockport.edu",
    "address": "350 New Campus Dr",
    "city": "Brockport",
    "state": "NY",
    "zip": "14420",
  },
  "suny buffalo" : {
    "campus": "State University College at Buffalo",
    "institution_level": "4-year",
    "institution_type": "Comprehensive Colleges",
    "program_1": "Psychology",
    "program_2": "Business Administration",
    "program_3": "Criminal Justice",
    "program_4": "Fashion & Textile Technology",
    "program_5": "Public Communication",
    "undergrad_enrollment": "9187",
    "campus_website": "http://www.buffalostate.edu",
    "address": "1300 Elmwood Ave",
    "city": "Buffalo",
    "state": "NY",
    "zip": "14222",
  },
  "suny cortland" : {
    "campus": "State University College at Cortland",
    "institution_level": "4-year",
    "institution_type": "Comprehensive Colleges",
    "program_1": "Physical Education ",
    "program_2": "Childhood Education ",
    "program_3": "Kinesiology",
    "program_4": "Business Economics",
    "program_5": "Sport Management",
    "undergrad_enrollment": "6283",
    "campus_website": "http://www.cortland.edu",
    "address": "21 Graham Ave, PO BOX 2000",
    "city": "Cortland",
    "state": "NY",
    "zip": "13045",
  },
  "empire state college" : {
    "campus": "State University of New York Empire State College",
    "institution_level": "4-year",
    "institution_type": "Comprehensive Colleges",
    "program_1": "Business, Management & Economics",
    "program_2": "Community & Human Services",
    "program_3": "Labor Studies ",
    "program_4": "Science, Math & Technology",
    "program_5": "Human Development",
    "undergrad_enrollment": "10807",
    "campus_website": "http://www.esc.edu",
    "address": "2 Union Ave",
    "city": "Saratoga Springs",
    "state": "NY",
    "zip": "12866",
  },
  "suny fredonia" : {
    "campus": "State University College at Fredonia",
    "institution_level": "4-year",
    "institution_type": "Comprehensive Colleges",
    "program_1": "Music Education",
    "program_2": "Psychology",
    "program_3": "Business Administration",
    "program_4": "Childhood Inclusive Education",
    "program_5": "Criminal Justice",
    "undergrad_enrollment": "4582",
    "campus_website": "http://www.fredonia.edu",
    "address": "280 Central Ave",
    "city": "Fredonia",
    "state": "NY",
    "zip": "14063",
  },
  "suny geneseo" : {
    "campus": "State University College at Geneseo",
    "institution_level": "4-year",
    "institution_type": "Comprehensive Colleges",
    "program_1": "Biology",
    "program_2": "Psychology",
    "program_3": "Business Administration",
    "program_4": "Childhood Education & Special Education",
    "program_5": "English",
    "undergrad_enrollment": "5566",
    "campus_website": "http://www.geneseo.edu",
    "address": "1 College Circle",
    "city": "Geneseo",
    "state": "NY",
    "zip": "14454",
  },
  "suny new paltz" : {
    "campus": "State University College at New Paltz",
    "institution_level": "4-year",
    "institution_type": "Comprehensive Colleges",
    "program_1": "Psychology",
    "program_2": "Early Childhood & Childhood Education",
    "program_3": "Visual Arts",
    "program_4": "English",
    "program_5": "Sociology",
    "undergrad_enrollment": "6699",
    "campus_website": "http://www.newpaltz.edu",
    "address": "1 Hawk Dr",
    "city": "New Paltz",
    "state": "NY",
    "zip": "12561",
  },
  "suny old westbury" : {
    "campus": "State University College at Old Westbury",
    "institution_level": "4-year",
    "institution_type": "Comprehensive Colleges",
    "program_1": "Psychology",
    "program_2": "Accounting",
    "program_3": "Criminology",
    "program_4": "Biological Sciences",
    "program_5": "Business Administration",
    "undergrad_enrollment": "4125",
    "campus_website": "http://www.oldwestbury.edu",
    "address": "PO BOX 210",
    "city": "Old Westbury",
    "state": "NY",
    "zip": "11568",
  },
  "suny oneonta" : {
    "campus": "State University College at Oneonta",
    "institution_level": "4-year",
    "institution_type": "Comprehensive Colleges",
    "program_1": "Biology",
    "program_2": "Psychology",
    "program_3": "Business Economics",
    "program_4": "Childhood Education",
    "program_5": "Music Industry",
    "undergrad_enrollment": "5850",
    "campus_website": "http://www.oneonta.edu",
    "address": "108 Ravine Pkwy",
    "city": "Oneonta",
    "state": "NY",
    "zip": "13820",
  },
  "suny oswego" : {
    "campus": "State University College at Oswego",
    "institution_level": "4-year",
    "institution_type": "Comprehensive Colleges",
    "program_1": "Business Administration",
    "program_2": "Psychology",
    "program_3": "Childhood Education",
    "program_4": "Communication Studies",
    "program_5": "Public Justice",
    "undergrad_enrollment": "7104",
    "campus_website": "http://www.oswego.edu",
    "address": "7060 Route 104",
    "city": "Oswego",
    "state": "NY",
    "zip": "13126",
  },
  "suny plattsburgh" : {
    "campus": "State University College at Plattsburgh",
    "institution_level": "4-year",
    "institution_type": "Comprehensive Colleges",
    "program_1": "Psychology",
    "program_2": "Criminal Justice",
    "program_3": "Business Administration",
    "program_4": "Nursing",
    "program_5": "Biology",
    "undergrad_enrollment": "5377",
    "campus_website": "http://www.plattsburgh.edu",
    "address": "101 Broad St",
    "city": "Plattsburgh",
    "state": "NY",
    "zip": "12901",
  },
  "suny potsdam" : {
    "campus": "State University College at Potsdam",
    "institution_level": "4-year",
    "institution_type": "Comprehensive Colleges",
    "program_1": "Childhood/Early Childhood Education",
    "program_2": "Music Education K-12",
    "program_3": "Business Administration",
    "program_4": "Psychology",
    "program_5": "Biology",
    "undergrad_enrollment": "3614",
    "campus_website": "http://www.potsdam.edu",
    "address": "44 Pierrepont Ave",
    "city": "Potsdam",
    "state": "NY",
    "zip": "13676",
  },
  "suny purchase" : {
    "campus": "State University College at Purchase",
    "institution_level": "4-year",
    "institution_type": "Comprehensive Colleges",
    "program_1": "Psychology",
    "program_2": "Arts Management",
    "program_3": "New Media",
    "program_4": "Liberal Studies",
    "program_5": "Biology",
    "undergrad_enrollment": "4077",
    "campus_website": "http://www.purchase.edu",
    "address": "735 Anderson Hill Rd",
    "city": "Purchase",
    "state": "NY",
    "zip": "10577",
  },
  "suny albany" : {
    "campus": "State University of New York at Albany",
    "institution_level": "4-year",
    "institution_type": "Doctoral Degree Granting Institutions",
    "program_1": "Biology",
    "program_2": "Psychology",
    "program_3": "Business Administration",
    "program_4": "Political Science",
    "program_5": "Rhetoric & Communications",
    "undergrad_enrollment": "12907",
    "campus_website": "http://www.albany.edu",
    "address": "1400 Washington Ave",
    "city": "Albany",
    "state": "NY",
    "zip": "12222",
  },
  "alfred university" : {
    "campus": "New York State College of Ceramics at Alfred University",
    "institution_level": "4-year",
    "institution_type": "Doctoral Degree Granting Institutions",
    "program_1": "Ceramic Art",
    "program_2": "Ceramic Engineering",
    "program_3": "Materials Science & Engineering",
    "program_4": "Biomaterials Engineering",
    "program_5": "Glass Engineering Science",
    "undergrad_enrollment": "567",
    "campus_website": "http://www.alfred.edu",
    "address": "1 Saxon Dr",
    "city": "Alfred",
    "state": "NY",
    "zip": "14802",
  },
  "suny binghamton" : {
    "campus": "State University of New York at Binghamton",
    "institution_level": "4-year",
    "institution_type": "Doctoral Degree Granting Institutions",
    "program_1": "Business Administration",
    "program_2": "Biological Sciences",
    "program_3": "Accounting",
    "program_4": "English",
    "program_5": "Economics",
    "undergrad_enrollment": "13491",
    "campus_website": "http://www.binghamton.edu",
    "address": "4400 Vestal Pkwy E, PO BOX 6000",
    "city": "Binghamton",
    "state": "NY",
    "zip": "13901",
  },
  "buffalo university" : {
    "campus": "State University of New York at Buffalo",
    "institution_level": "4-year",
    "institution_type": "Doctoral Degree Granting Institutions",
    "program_1": "Business Administration",
    "program_2": "Psychology",
    "program_3": "Communication",
    "program_4": "Biological Sciences",
    "program_5": "Pharmacy",
    "undergrad_enrollment": "19953",
    "campus_website": "http://www.buffalo.edu",
    "address": "12 Capen Hall",
    "city": "Buffalo",
    "state": "NY",
    "zip": "14260",
  },
  "cornell" : {
    "campus": "Cornell Statutory Colleges",
    "institution_level": "4-year",
    "institution_type": "Doctoral Degree Granting Institutions",
    "program_1": "Nys College Of Agriculture And Life Sciences",
    "program_2": "Nys College Of Human Ecology",
    "program_3": "Nys School Of Industrial And Labor Relations ",
    "program_4": "Nys College Of Veterinary Medicine ",
    "undergrad_enrollment": "5599",
    "campus_website": "http://www.cornell.edu",
    "address": "Day Hall",
    "city": "Ithaca",
    "state": "NY",
    "zip": "14853",
  },
  "downstate medical" : {
    "campus": "State University of New York Health Science Center at Brooklyn",
    "institution_level": "4-year",
    "institution_type": "Doctoral Degree Granting Institutions",
    "program_1": "Nursing",
    "program_2": "Physician'S Assistant",
    "program_3": "Diagnostic Medical Imaging",
    "program_4": "Health Sciences",
    "undergrad_enrollment": "348",
    "campus_website": "http://www.downstate.edu",
    "address": "450 Clarkson Ave",
    "city": "Brooklyn",
    "state": "NY",
    "zip": "11203",
  },
  "environment science and forestry" : {
    "campus": "State University of New York College of Environmental Science and Forestry at Syracuse",
    "institution_level": "4-year",
    "institution_type": "Doctoral Degree Granting Institutions",
    "program_1": "Environmental Science",
    "program_2": "Conservation Biology",
    "program_3": "Environmental Biology",
    "program_4": "Landscape Architecture",
    "program_5": "Environmental Studies",
    "undergrad_enrollment": "1755",
    "campus_website": "http://www.esf.edu",
    "address": "1 Forestry Dr",
    "city": "Syracuse",
    "state": "NY",
    "zip": "13210",
  },
  "college of optometry" : {
    "campus": "State University of New York College of Optometry",
    "institution_level": "4-year",
    "institution_type": "Doctoral Degree Granting Institutions",
    "program_1": "Doctor Of Optometry",
    "program_2": "Vision Science",
    "program_3": "",
    "program_4": "",
    "program_5": "",
    "undergrad_enrollment": "0",
    "campus_website": "http://www.sunyopt.edu",
    "address": "100 East 24th St",
    "city": "New York",
    "state": "NY",
    "zip": "10010",
  },
  "suny stony brook" : {
    "campus": "State University of New York at Stony Brook",
    "institution_level": "4-year",
    "institution_type": "Doctoral Degree Granting Institutions",
    "program_1": "Biology",
    "program_2": "Psychology",
    "program_3": "Health Science",
    "program_4": "Business Management",
    "program_5": "Biochemistry",
    "undergrad_enrollment": "16683",
    "campus_website": "http://www.sunysb.edu",
    "address": "100 Nicolls Rd",
    "city": "Stony Brook",
    "state": "NY",
    "zip": "11794",
  },
  "upstate medical" : {
    "campus": "State University of New York Health Science Center at Syracuse",
    "institution_level": "4-year",
    "institution_type": "Doctoral Degree Granting Institutions",
    "program_1": "Nursing",
    "program_2": "Medical Technology",
    "program_3": "Medical Imaging Sciences",
    "program_4": "Respiratory Care ",
    "program_5": "Radiation Therapy Technology",
    "undergrad_enrollment": "219",
    "campus_website": "http://www.upstate.edu",
    "address": "750 East Adams St",
    "city": "Syracuse",
    "state": "NY",
    "zip": "13210",
  },
  "alfred state" : {
    "campus": "State University of New York College of Technology at Alfred",
    "institution_level": "4-year",
    "institution_type": "Technology Colleges",
    "program_1": "Nursing",
    "program_2": "Veterinary Science Technology",
    "program_3": "Health Information Technology",
    "program_4": "Architectural Technology",
    "program_5": "Building Trades/Construction",
    "undergrad_enrollment": "3699",
    "campus_website": "http://www.alfredstate.edu",
    "address": "10 Upper College Dr",
    "city": "Alfred",
    "state": "NY",
    "zip": "14802",
  },
  "suny canton" : {
    "campus": "State University of New York College of Technology at Canton",
    "institution_level": "4-year",
    "institution_type": "Technology Colleges",
    "program_1": "Nursing",
    "program_2": "Health Sciences Career Studies",
    "program_3": "Criminal Justice ",
    "program_4": "Legal Studies",
    "program_5": "Liberal Arts & Sciences",
    "undergrad_enrollment": "3140",
    "campus_website": "http://www.canton.edu",
    "address": "34 Cornell Dr",
    "city": "Canton",
    "state": "NY",
    "zip": "13617",
  },
  "suny cobleskill" : {
    "campus": "State University of New York College of Agriculture and Technology at Cobleskill",
    "institution_level": "4-year",
    "institution_type": "Technology Colleges",
    "program_1": "Animal Science",
    "program_2": "Social Science",
    "program_3": "Culinary Arts",
    "program_4": "Business Administration",
    "program_5": "Wildlife Management",
    "undergrad_enrollment": "2441",
    "campus_website": "http://www.cobleskill.edu",
    "address": "State Route 7",
    "city": "Cobleskill",
    "state": "NY",
    "zip": "12043",
  },
  "suny delhi" : {
    "campus": "State University of New York College of Technology at Delhi",
    "institution_level": "4-year",
    "institution_type": "Technology Colleges",
    "program_1": "Nursing",
    "program_2": "Liberal Arts & Sciences",
    "program_3": "Veterinary Science Technology",
    "program_4": "Hospitality Management",
    "program_5": "Business & Technology Management",
    "undergrad_enrollment": "3431",
    "campus_website": "http://www.delhi.edu",
    "address": "2 Main St",
    "city": "Delhi",
    "state": "NY",
    "zip": "13753",
  },
  "suny farmingdale" : {
    "campus": "State University of New York College of Technology at Farmingdale",
    "institution_level": "4-year",
    "institution_type": "Technology Colleges",
    "program_1": "Business Managment",
    "program_2": "Liberal Arts & Science",
    "program_3": "Science, Technology, & Society",
    "program_4": "Computer Programming & Information Systems",
    "program_5": "Nursing",
    "undergrad_enrollment": "8648",
    "campus_website": "http://www.farmingdale.edu",
    "address": "2350 Broadhollow Rd",
    "city": "Farmingdale",
    "state": "NY",
    "zip": "11735",
  },
  "suny maritime" : {
    "campus": "State University of New York Meritime College",
    "institution_level": "4-year",
    "institution_type": "Technology Colleges",
    "program_1": "Marine Transportation",
    "program_2": "Mechanical Engineering",
    "program_3": "International Transportation & Trade",
    "program_4": "Marine Operations",
    "program_5": "Naval Architecture",
    "undergrad_enrollment": "1677",
    "campus_website": "http://www.sunymaritime.edu",
    "address": "6 Pennyfield Ave",
    "city": "Throggs Neck",
    "state": "NY",
    "zip": "10465",
  },
  "suny morrisville" : {
    "campus": "State University of New York College of Agriculture and Technology at Morrisville",
    "institution_level": "4-year",
    "institution_type": "Technology Colleges",
    "program_1": "Humanities & Social Sciences",
    "program_2": "Nursing",
    "program_3": "Math & Science",
    "program_4": "Criminal Justice",
    "program_5": "Automotive Technology",
    "undergrad_enrollment": "2940",
    "campus_website": "http://www.morrisville.edu",
    "address": "80 Easton St",
    "city": "Morrisville",
    "state": "NY",
    "zip": "13408",
  },
  "suny institute of technology" : {
    "campus": "State University of New York Institute of Technology at Utica and Rome",
    "institution_level": "4-year",
    "institution_type": "Technology Colleges",
    "program_1": "Business Administration",
    "program_2": "Nursing ",
    "program_3": "Mechanical Engineering Technology",
    "program_4": "Computer & Information Science",
    "program_5": "Health Information Management",
    "undergrad_enrollment": "2065",
    "campus_website": "http://www.sunyit.edu",
    "address": "100 Seymour Rd",
    "city": "Utica",
    "state": "NY",
    "zip": "13504",
  }
};

/*
    Route the incoming request based on type (LaunchRequest, IntentRequest, etc.).
    The JSON body of the request is provided in the event parameter.
*/
exports.handler = function(event, context) {
  try {
    console.log("event.session.application.applicationId=" + event.session.application.applicationId);

    /*
      Uncomment this IF STATEMENT and populate it with your skill's application ID
      To prevent someone else from configuring a skill that sends requests to this function.
    */

    if (event.session.application.applicationId !== "amzn1.ask.skill.") {
      context.fail("Invalid Application ID");
    }

    if (event.session.new) {
      onSessionStarted({requestId: event.request.requestId}, event.session);
    }

    if (event.request.type === "LaunchRequest") {
      onLaunch(event.request, event.session, function callback(sessionAttributes, speechletResponse) {
        context.succeed(buildResponse(sessionAttributes, speechletResponse));
      });
    } else if (event.request.type === "IntentRequest") {
      onIntent(event.request, event.session, function callback(sessionAttributes, speechletResponse) {
        context.succeed(buildResponse(sessionAttributes, speechletResponse));
      });
    } else if (event.request.type === "SessionEndedRequest") {
      onSessionEnded(event.request, event.session);
      context.succeed();
    }
  } catch (e) {
    context.fail("Exception: " + e);
  }
};

// Called when the session starts.
function onSessionStarted(sessionStartedRequest, session) {
  console.log("onSessionStarted requestId=" + sessionStartedRequest.requestId + ", sessionId=" + session.sessionId);
  // Add any session init logic here.
}

// Called when the user specifies an intent for the skill.
function onIntent(intentRequest, session, callback) {
  console.log("onIntent requestId=" + intentRequest.requestId + ", sessionId=" + session.sessionId);

  var intent = intentRequest.intent;
  var intentName = intentRequest.intent.name;

  // Dispatch to custom intents here.
  if ("UniversityIntent" === intentName) {
    handleUserResponse(intent, session, callback);
  } else if ("TwoYearIntent" === intentName) {
    twoYearList(intent, session, callback);
  } else if ("FourYearIntent" === intentName) {
    fourYearList(intent, session, callback);
  } else if ("CommunityIntent" === intentName) {
    communityColleges(intent, session, callback);
  } else if ("FashionIntent" === intentName) {
    fashionColleges(intent, session, callback);
  } else if ("DoctoralIntent" === intentName) {
    doctoralColleges(intent, session, callback);
  } else if ("TechnologyIntent" === intentName) {
    technologyColleges(intent, session, callback);
  } else if ("AMAZON.HelpIntent" === intentName) {
    getHelp(intent, session, callback);
  } else if ("AMAZON.YesIntent" === intentName) {
    if (session.attributes.previousPlace === "User Response") {
      nextUniversity(intent, session, callback);
    } else if (session.attributes.previousPlace === "Next University") {
      newUniversity(intent, session, callback);
    }
  } else if ("AMAZON.NoIntent" === intentName) {
    if (session.attributes.previousPlace === "Next University") {
      searchForUniversityBy(intent, session, callback);
    } else {
      endSession(intent, session, callback);
    }
  } else if ("AMAZON.StopIntent" === intentName) {
    endSession(intent, session, callback);
  } else if ("AMAZON.CancelIntent" === intentName) {
    endSession(intent, session, callback);
  } else {
    throw "Invalid Intent";
  }
}

// Called when the user ends the session. Is not called when the skill returns shouldEndSession=true.
function onSessionEnded(sessionEndedRequest, session) {
  console.log("onSessionEnded requestId=" + sessionEndedRequest.requestId + ", sessionId=" + session.sessionId);
  // Add any cleanup logic here.
}

function getWelcomeResponse(callback) {
  var sessionAttributes = {};
  var CARD_TITLE = "Welcome to NY College";
  var speechOutput = "Hello, trying to decide what New York college best suits your needs? All you have to do is say, tell me about, and the college of your choice.  Which college are you interested in?  ";
  var repromptText = "What college would you like information on?  ";
  var shouldEndSession = false;

  sessionAttributes = {
    "speechOutput": speechOutput,
    "repromptText": repromptText,
    "previousPlace": "Welcome"
  };

  callback(sessionAttributes, buildSpeechletResponse(CARD_TITLE, speechOutput, repromptText, shouldEndSession));
}

function handleUserResponse(intent, session, callback) {
  var sessionAttributes = {};
  var CARD_TITLE = "New York State University";
  var school = intent.slots.School.value.toLowerCase();
  var speechOutput;
  var repromptText;
  var shouldEndSession = false;

  if (!colleges[school]) {
    speechOutput = "I'm sorry, I didn't quite understand what you University you wanted. Please try again, or ask about a different university.  ";
    repromptText = "Try asking again or, about a different university.  ";
  } else {
    var campus = colleges[school].campus;
    var institution_level = colleges[school].institution_level;
    var institution_type = colleges[school].institution_type;
    var program_1 = colleges[school].program_1;
    var program_2 = colleges[school].program_2;
    var program_3 = colleges[school].program_3;
    var program_4 = colleges[school].program_4;
    var program_5 = colleges[school].program_5;
    var undergrad_enrollment = colleges[school].undergrad_enrollment;
    var campus_website = colleges[school].campus_website;
    var address = colleges[school].address;
    var city = colleges[school].city;
    var state = colleges[school].state;
    var zip = colleges[school].zip;
    speechOutput = campus + " is a " + institution_level + " university that is classified in the " + institution_type " category of schools. "
    + "There is " + undergrad_enrollment + " undergraduate students that attended "
    + campus + " as of 2015. With some of the most popular areas of study being "
    + program_1 + ", " + program_2 + ", " + program_3 + ", " + program_4 + ", and "
    + program_5 + ". The university is located at " + address + ", "
    + city + ", " + state + ", " + zip + ". If you would like more in depth information about this university, please visit their website, located at " + campus_website + ". Would you like to hear about another university?  ";
    repromptText = "Would you like to hear about another university? If not you can simply say, no, stop, or cancel.  ";
  }

  sessionAttributes = {
    "speechOutput": speechOutput,
    "repromptText": repromptText,
    "previousPlace": "User Response"
  };

  callback(sessionAttributes, buildSpeechletResponse(CARD_TITLE, speechOutput, repromptText, shouldEndSession));
}

function nextUniversity(intent, session, callback) {
  var sessionAttributes = {};
  var CARD_TITLE = "Do You Know What You're Looking For?";
  var speechOutput = "Do you know which university you want to hear about?  ";
  var repromptText = speechOutput;
  var shouldEndSession = false;

  sessionAttributes = {
    "speechOutput": speechOutput,
    "repromptText": repromptText,
    "previousPlace": "Next University"
  };

  callback(sessionAttributes, buildSpeechletResponse(CARD_TITLE, speechOutput, repromptText, shouldEndSession));
}

function newUniversity(intent, session, callback) {
  var sessionAttributes = {};
  var CARD_TITLE = "What university do you want to know about?  ";
  var speechOutput = "What university do you want to know about?  ";
  var repromptText = speechOutput;
  var shouldEndSession = false;

  sessionAttributes = {
    "speechOutput": speechOutput,
    "repromptText": repromptText,
    "previousPlace": "New University"
  };

  callback(sessionAttributes, buildSpeechletResponse(CARD_TITLE, speechOutput, repromptText, shouldEndSession));
}

function searchForUniversityBy(intent, session, callback) {
  var sessionAttributes = {};
  var CARD_TITLE = "New University";
  var speechOutput = "You can get a list of universities from the following criteria. "
  + "Institution Level: 2-year or 4-year universities. "
  + "Institution Type: Community Colleges, Fashion Colleges, Comprehensive Colleges, Doctoral Degree Granting Colleges, or Technology Colleges. "
  + "To get a list of universities say, give me a list of, and one of the search criteria. ";
  var repromptText = "To get a list of universities say, give me a list of, and one of the search criteria. ";
  var shouldEndSession = false;

  sessionAttributes = {
    "speechOutput": speechOutput,
    "repromptText": repromptText,
    "previousPlace": "Search For"
  };

  callback(sessionAttributes, buildSpeechletResponse(CARD_TITLE, speechOutput, repromptText, shouldEndSession));
}

function twoYearList(intent, session, callback) {
  var sessionAttributes = {};
  var CARD_TITLE = "2-Year universities";
  var speechOutput = "Some notable two year universities include: "
  + "Adirondack Community College. "
  + "Broome Community College. "
  + "Fulton-Montgomery Community College. "
  + "Herkimer County Community College. "
  + "Hudson Valley Community College. "
  + "Onondaga Community College. "
  + "And, Schenectady County Community College. ";
  var repromptText = "Which university would you like to hear about?  ";
  var shouldEndSession = false;

  sessionAttributes = {
    "speechOutput": speechOutput,
    "repromptText": repromptText,
    "previousPlace": "Two Year"
  };

  callback(sessionAttributes, buildSpeechletResponse(CARD_TITLE, speechOutput, repromptText, shouldEndSession));
}

function fourYearList(intent, session, callback) {
  var sessionAttributes = {};
  var CARD_TITLE = "4-Year universities";
  var speechOutput = "Some notable four year universities include: "
  + "SUNY Brockport. "
  + "SUNY New Paltz. "
  + "SUNY Oneonta. "
  + "SUNY Binghamton. "
  + "SUNY Albany. "
  + "SUNY Canton. "
  + "SUNY Cobleskill. "
  + "And, SUNY Delhi. ";
  var repromptText = "Which university would you like to hear about?  ";
  var shouldEndSession = false;

  sessionAttributes = {
    "speechOutput": speechOutput,
    "repromptText": repromptText,
    "previousPlace": "Four Year"
  };

  callback(sessionAttributes, buildSpeechletResponse(CARD_TITLE, speechOutput, repromptText, shouldEndSession));
}

function communityColleges(intent, session, callback) {
  var sessionAttributes = {};
  var CARD_TITLE = "Community Colleges";
  + "Adirondack Community College. "
  + "Broome Community College. "
  + "Fulton-Montgomery Community College. "
  + "Herkimer County Community College. "
  + "Hudson Valley Community College. "
  + "Onondaga Community College. "
  + "And, Schenectady County Community College.  ";
  var repromptText = "Which university would you like to hear about?  ";
  var shouldEndSession = false;

  sessionAttributes = {
    "speechOutput": speechOutput,
    "repromptText": repromptText,
    "previousPlace": "Community Colleges"
  };

  callback(sessionAttributes, buildSpeechletResponse(CARD_TITLE, speechOutput, repromptText, shouldEndSession));
}

function fashionColleges(intent, session, callback) {
  var sessionAttributes = {};
  var CARD_TITLE = "Fashion Colleges";
  var speechOutput = "The Fashion Institute of Technology is currently the only Fashion College in New York I know about.  ";
  var repromptText = "Which university would you like to hear about?  ";
  var shouldEndSession = false;

  sessionAttributes = {
    "speechOutput": speechOutput,
    "repromptText": repromptText,
    "previousPlace": "Fashion Colleges"
  };

  callback(sessionAttributes, buildSpeechletResponse(CARD_TITLE, speechOutput, repromptText, shouldEndSession));
}

function comprehensiveColleges(intent, session, callback) {
  var sessionAttributes = {};
  var CARD_TITLE = "Comprehensive Colleges";
  var speechOutput = "Some notable comprehensive colleges include:  "
  + "SUNY Brockport. "
  + "SUNY New Paltz. "
  + "SUNY Oneonta. "
  + "SUNY Oswego. "
  + "SUNY Plattsburgh. "
  + "And, SUNY Potsdam.  ";
  var repromptText = "Which university would you like to hear about?  ";
  var shouldEndSession = false;

  sessionAttributes = {
    "speechOutput": speechOutput,
    "repromptText": repromptText,
    "previousPlace": "Comprehensive Colleges"
  };

  callback(sessionAttributes, buildSpeechletResponse(CARD_TITLE, speechOutput, repromptText, shouldEndSession));
}

function doctoralColleges(intent, session, callback) {
  var sessionAttributes = {};
  var CARD_TITLE = "Doctoral Colleges";
  var speechOutput = "Some notable doctoral colleges include:  "
  + "Cornell. "
  + "SUNY Stony Brook. "
  + "SUNY Binghamton. "
  + "And, SUNY Albany.  ";
  var repromptText = "Which university would you like to hear about?  ";
  var shouldEndSession = false;

  sessionAttributes = {
    "speechOutput": speechOutput,
    "repromptText": repromptText,
    "previousPlace": "Doctorial Colleges"
  };

  callback(sessionAttributes, buildSpeechletResponse(CARD_TITLE, speechOutput, repromptText, shouldEndSession));
}

function technologyColleges(intent, session, callback) {
  var sessionAttributes = {};
  var CARD_TITLE = "Technology Colleges";
  var speechOutput = "Some notable technology colleges include:  "
  + "SUNY Canton. "
  + "SUNY Cobleskill. "
  + "SUNY Delhi. "
  + "SUNY Farmingdale. "
  + "SUNY Maritime. "
  + "And, SUNY Morrisville.  ";
  var repromptText = "Which university would you like to hear about?  ";
  var shouldEndSession = false;

  sessionAttributes = {
    "speechOutput": speechOutput,
    "repromptText": repromptText,
    "previousPlace": "Technology Colleges"
  };

  callback(sessionAttributes, buildSpeechletResponse(CARD_TITLE, speechOutput, repromptText, shouldEndSession));
}

function getHelp(intent, session, callback) {
  if (!session.attributes) {
    session.attributes = {};
  }

  var CARD_TITLE = "NY College Help";
  var speechOutput = "To hear information about a New York State University say, tell me about, and the name of the university you wish to hear information on. "
  + "Or you can choose from various search criteria to get lists of some notable universities that falls within that criteria. "
  + "Search criteria includes: "
  + "Institution Level: 2-year or 4-year universities. "
  + "Institution Type: Community Colleges, Fashion Colleges, Comprehensive Colleges, Doctorial Degree Granting Colleges, or Technology Colleges. "
  + "What would you like to do?  ";
  var repromptText = "Say the name of the university you wish to know about or search for universities by search criteria. "
  + "What would you like to do?  ";

  var shouldEndSession = false;

  callback(session.attributes, buildSpeechletResponse(CARD_TITLE, speechOutput, repromptText, shouldEndSession));
}

function endSession(intent, session, callback) {
  var CARD_TITLE = "Goodbye, have a wonderful day!"
  callback(session.attributes, buildSpeechletResponse(CARD_TITLE, "Goodbye, thank you for using NY College, have a wonderful day!", "", true));
}

function buildSpeechletResponse(title, output, repromptText, shouldEndSession) {
  return {
    outputSpeech: {
      type: "PlainText",
      text: output
    },
    card: {
      type: "Simple",
      title: title,
      content: output
    },
    reprompt: {
      outputSpeech: {
        type: "PlainText",
        text: repromptText
      }
    },
    shouldEndSession: shouldEndSession
  };
}

function buildResponse(sessionAttributes, speechletResponse) {
  return {
    version: "1.0",
    sessionAttributes: sessionAttributes,
    response: speechletResponse
  };
}
