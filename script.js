/**
 * ============================================================================
 * PROJECT: ULTRA NEXT ZEN - 2050 GLASS-MODERN UI (app_3.js)
 * BRAND: श्री राम आधार ई सेवा केंद्र / Tez Shiva Nexus
 * AUTHOR / ADMIN: Sushil Kumar (Charkhari / Patha)
 * PURPOSE: Comprehensive Digital Seva & Operator Management System
 * ============================================================================
 */

// --- SECTION 1: INITIAL DATA & PORTAL SERVICES ---
const DEFAULT_SERVICES = [
    { 
        id: 's_job', 
        name: 'Sarkari Naukri Portal', 
        icon: '💼', 
        desc: 'नवीनतम सरकारी नौकरियां, एडमिट कार्ड, और रिजल्ट की जानकारी व आवेदन', 
        link: 'https://www.sarkariresult.com/', 
        actions: [
            { label: 'Sarkari Result Official', url: 'https://www.sarkariresult.com/' }, 
            { label: 'Latest Jobs Portal', url: 'https://www.sarkariresult.com/latestjob.php' }, 
            { label: 'Admit Card Section', url: 'https://www.sarkariresult.com/admitcard.php' }, 
            { label: 'Result Section', url: 'https://www.sarkariresult.com/result.php' }
        ], 
        documents: ['मैट्रिक (10th) मार्कशीट', 'इंटरमीडिएट (12th) मार्कशीट', 'स्नातक (Graduation) डिग्री', 'पासपोर्ट साइज फोटो', 'हस्ताक्षर (Signature)', 'आधार कार्ड', 'जाति व निवास प्रमाण पत्र'] 
    },
    { id: 's1', name: 'UP eDistrict BG Remove', icon: '🖼️', desc: 'उत्तर प्रदेश की ई-डिस्ट्रिक्ट एवं AI Background Remover टूल', link: 'https://www.remove.bg/', actions: [{ label: 'Upload & Remove BG', url: 'https://www.remove.bg/' }, { label: 'Edistrict Portal', url: 'https://edistrict.up.gov.in/' }, { label: 'Services List', url: 'https://edistrict.up.gov.in/eDistrictup/Services/services_hi.aspx' }], documents: ['पासपोर्ट साइज फोटो', 'आधार कार्ड', 'स्व-प्रमाणित घोषणा पत्र', 'राशन कार्ड /(सत्यापित प्रमाण पत्र)'] },
    { id: 's2', name: 'CSC Login', icon: '💻', desc: 'Common Service Centre', link: 'https://register.csc.gov.in/', actions: [{ label: 'Login Portal', url: 'https://digitalseva.csc.gov.in/' }, { label: 'Axis IBC', url: 'https://register.csc.gov.in/' }, { label: 'Status Check', url: 'https://register.csc.gov.in/register/status' }], documents: ['पैन कार्ड', 'आधार कार्ड', 'कैंसल चेक / bank पासबुक', 'TEC सर्टिफिकेट (रजिस्ट्रेशन हेतु)'] },
    { id: 's3', name: 'UP Agriculture', icon: '🌾', desc: 'किसान पंजीकरण, बीज बुकिंग एवं कृषि यंत्र', link: 'https://agriculture.up.gov.in/', actions: [{ label: 'UP Agriculture', url: 'https://agriculture.up.gov.in/' }, { label: 'Farmer Registration', url: 'https://agriculture.up.gov.in/registration/' }, { label: 'Krishi Yantra Booking', url: 'https://agriculture.up.gov.in/pmkusum/HomePagenext.aspx?id=ky' }, { label: 'Seed Booking', url: 'https://agriculture.up.gov.in/pmkusum/seed/SeedBooking.aspx' }, { label: 'Seed Booking Receipt', url: 'http://agriculture.up.gov.in/pmkusum/seed/DuplicateReceipt.aspx' }, { label: 'PM Solar Pump Booing', url: 'https://agriculture.up.gov.in/pmkusum/HomePagenext.aspx?id=SY' }, { label: 'PM Solar Pump Booing Status Check', url: 'https://agriculture.up.gov.in/pmkusum/token/FarmerYantraReport.aspx' }], documents: ['खतौनी की नकल', 'बैंक पासबुक', 'आधार कार्ड','जाति प्रमाण पत्र(SC & OBC)'] },
    { id: 's4', name: 'PM-KISAN', icon: '🚜', desc: 'सम्मान निधि, e-KYC, Registration', link: 'https://pmkisan.gov.in/', actions: [{ label: 'PM-KISAN', url: 'https://pmkisan.gov.in/' }, { label: 'New Registration', url: 'https://pmkisan.gov.in/RegistrationFormupdated.aspx' }, { label: 'Know Your Status', url: 'https://pmkisan.gov.in/BeneficiaryStatus_New.aspx' }, { label: 'Update Mobile Number', url: 'https://pmkisan.gov.in/MobileUpdation_Pub.aspx' }, { label: 'Beneficiary Status', url: 'https://pmkisan.gov.in/FarmerStatus.aspx' }, { label: 'Correction Registration', url: 'https://pmkisan.gov.in/SearchSelfRegisterfarmerDetailsnewUpdated.aspx' }, { label: 'Update Missing Info', url: 'https://pmkisan.gov.in/SearchBeneficiaryInformationUpdate.aspx' }, { label: 'e-KYC (Aadhaar)', url: 'https://exlink.pmkisan.gov.in/' }], documents: ['आधार कार्ड', 'खतौनी', 'पति पत्नी के आधार कार्ड ', 'मोबाइल नंबर', 'पिछले मालिकाना किसान का आधार ','मृत्यू प्रमाण पत्र(वरासत )' ] },
    { id: 's5', name: 'UP Pension Portal', icon: '👴', desc: 'वृद्धावस्था, विधवा एवं दिव्यांग पेंशन', link: 'https://sspy-up.gov.in/', actions: [{ label: 'UP Pension Portal', url: 'https://sspy-up.gov.in/' }, { label: 'Old Age Pension', url: 'https://sspy-up.gov.in/HindiPages/oldage_h.aspx' }, { label: 'Widow Pension', url: 'https://sspy-up.gov.in/HindiPages/widow_h.aspx#' }, { label: 'Disability Pension', url: 'https://sspy-up.gov.in/HindiPages/handicap_h.aspx' }, { label: 'Update Mobile Number', url: 'https://sspy-up.gov.in/oap/public_new/UserUpdateMobileNo.aspx' }, { label: 'Login/Ekyc Pension', url: 'https://sspy-up.gov.in/oap/public_new/UserLogin.aspx' }], documents: ['आधार कार्ड','जन्म का प्रमाण ', 'आय प्रमाण पत्र', 'बैंक पासबुक', 'पासपोर्ट साइज फोटो', 'दिव्यांगता/मृत्यु प्रमाण पत्र'] },
    { id: 's6', name: 'PAN CARD (CSC)', icon: '💳', desc: 'PAN Card New, Correction, Reprint', link: 'https://egovcsc.csccloud.in/', actions: [{ label: 'Apply New PAN (NSDL)', url: 'https://egovcsc.csccloud.in/' }, { label: 'Apply New PAN (UTI)', url: 'https://www.myutiitsl.com/panonlineservices/CSCLogin' }, { label: 'PAN Correction', url: 'https://egovcsc.csccloud.in/' }, { label: 'Track Status (NSDL)', url: 'https://tin.tin.proteantech.in/pantan/StatusTrack.html' }, { label: 'Track Status (UTI)', url: 'https://www.trackpan.utiitsl.com/PANONLINE/forms/TrackPan/trackApp#forward' }, { label: 'Reprint', url: 'https://onlineservices.proteantech.in/paam/ReprintEPan.html' }, { label: 'NSDL PAN', url: 'https://tinpan.proteantech.in/' }, { label: 'UTI PAN', url: 'https://www.pan.utiitsl.com/' }], documents: ['आधार कार्ड', 'जन्म का प्रमाण ','2 पासपोर्ट साइज फोटो', 'हस्ताक्षर (Signature) / अंगूठे का निशान','माइनर पैन कार्ड (पिता /माता आधार कार्ड ) ',] },
    { id: 's7', name: 'UP Shadi Anudan', icon: '💍', desc: 'शादी अनुदान योजना के ऑनलाइन आवेदन', link: 'https://shadianudan.upsdc.gov.in', actions: [{ label: 'UP Shadi Anudan', url: 'https://shadianudan.upsdc.gov.in' }, { label: 'New Application', url: 'https://shadianudan.upsdc.gov.in/SocialWelfare/Avedak_KYC.aspx' }, { label: 'Login/Correction', url: 'https://shadianudan.upsdc.gov.in/SocialWelfare/loginpanel.aspx' }, { label: 'Application Status', url: 'https://shadianudan.upsdc.gov.in/socialwelfare/Avedan_status.aspx' }, { label: 'About Us', url: 'https://shadianudan.upsdc.gov.in/AboutScheme.aspx' }], documents: ['आवेदक आधार कार्ड','बैंक पासबुक', 'शादी का कार्ड / प्रमाण','वर-वधू का आधार कार्ड', 'जन्म का प्रमाण (मार्कशीट /परिवार रजिस्टर नक़ल)', 'आय एवं जाति प्रमाण पत्र', ] },
    { id: 's8', name: 'Ayushman Bharat', icon: '🏥', desc: 'PM-JAY ऑनलाइन सेवाएं एवं पात्रता', link: 'https://beneficiary.nha.gov.in/', actions: [{ label: 'Ayushman Bharat', url: 'https://nha.gov.in/' }, { label: 'New Application', url: 'https://beneficiary.nha.gov.in/' }, { label: 'Correction/Download Card', url: 'https://beneficiary.nha.gov.in/' }, { label: 'KYC & Add Member', url: 'https://beneficiary.nha.gov.in/' }], documents: ['आधार कार्ड', 'राशन कार्ड (6 यूनिट) / PMJAY लेटर', 'आधार से लिंक मोबाइल नंबर'] },
    { id: 's9', name: 'UP Ration Card', icon: '🍚', desc: 'राशन कार्ड, लाभार्थी सूची एवं सेवाएं', link: 'https://fcs.up.gov.in/', actions: [{ label: 'UP Ration Card', url: 'https://fcs.up.gov.in/' }, { label: 'New Application', url: 'https://edistrict.up.gov.in/' }, { label: 'Track Application', url: 'https://fcs.up.gov.in/' }, { label: 'Complaint', url: 'https://cms.up.gov.in/jsk/User/Default.aspx' }, { label: 'Ration Card Division', url: 'https://nfsa.up.gov.in/Food/Public_Form/RCSearchServices.aspx?Flag=RS' }, { label: 'Ration Card Unit Transfer', url: 'https://nfsa.up.gov.in/Food/Public_Form/RCSearchServices.aspx?Flag=UT' }, { label: 'Ration Card Transfer', url: 'https://nfsa.up.gov.in/Food/Public_Form/RCSearchServices.aspx?Flag=RT' }, { label: 'Ration Card Surrender', url: 'https://nfsa.up.gov.in/Food/Public_Form/RCSearchServices.aspx?Flag=UD' }, { label: 'Change of Head of Ration Card in Case of Death', url: 'https://nfsa.up.gov.in/Food/Public_Form/RCSearchServices.aspx?Flag=HC' }], documents: ['मुखिया का फोटो', 'सभी सदस्यों के आधार कार्ड', 'आय प्रमाण पत्र', 'बैंक पासबुक'] },
    { id: 's10', name: 'LABOUR CARD UP', icon: '👷', desc: 'श्रमिक पंजीकरण, नवीनीकरण एवं योजनाएं', link: 'https://website.upbocw.in/', actions: [{ label: 'LABOUR CARD UP', url: 'https://website.upbocw.in/' }, { label: 'New & Correction Registration', url: 'https://labour.upbocw.in/' }, { label: 'Track Application', url: 'https://website.upbocw.in/LabourEstbDetail' }, { label: 'Certificate', url: 'https://website.upbocw.in/GetLabourCertificate' }, { label: 'Renewal', url: 'https://labour.upbocw.in/worker/renew' }, { label: 'Renewal Status', url: 'https://labour.upbocw.in/worker/renew' }, { label: 'Know Your Registration', url: 'https://website.upbocw.in/KnowYourReg' }, { label: 'Yojna Registration', url: 'https://labour.upbocw.in/worker/schemes' }, { label: 'Yojna Status', url: 'https://website.upbocw.in/SearchLabourProfile2' }, { label: 'Complaint', url: 'https://grievance.upbocw.in/' }], documents: ['आधार कार्ड', 'बैंक पासबुक', 'मोबाइल नम्बर',' राशन कार्ड ','नॉमिनी आधार कार्ड ', '90 दिन कार्य का प्रमाण पत्र '] },
    { id: 's11', name: 'Samaj Kalyan Vibhag', icon: '🤝', desc: 'छात्रवृत्ति, पेंशन एवं पारिवारिक लाभ', link: 'http://samajkalyan.up.gov.in/', actions: [{ label: 'Schemes Portal', url: 'http://samajkalyan.up.gov.in/' }, { label: 'Check Status', url: 'http://samajkalyan.up.gov.in/' }], documents: ['मृत्यु प्रमाण पत्र (पारिवारिक लाभ हेतु)', 'आय प्रमाण पत्र', 'आवेदक का आधार व बैंक पासबुक', 'फोटो'] },
    { id: 's12', name: 'Board of Revenue', icon: '📜', desc: 'भूमि एवं राजस्व संबंधी सेवाएं (BOR)', link: 'https://bor.up.nic.in/', actions: [{ label: 'Revenue Portal', url: 'https://bor.up.nic.in/' }, { label: 'Case Status', url: 'https://bor.up.nic.in/' }], documents: ['वाद संख्या (Case Number)', 'खतौनी', 'प्रार्थना पत्र'] },
    { id: 's13', name: 'UP Bhulekh', icon: '🗺️', desc: 'खसरा, खतौनी एवं प्लॉट/गाटा एवं भूमि का नक्शा ', link: 'https://upbhulekh.gov.in/', actions: [{ label: 'Khatauni Nakal', url: 'https://upbhulekh.gov.in/' }, { label: 'E-Khasra Portal', url: 'https://ekhasra.up.gov.in/' }, { label: 'Bhu Naksha(View Map)', url: 'https://upbhunaksha.gov.in/' }, { label: 'Khatauni Name & Ansh Correction', url: 'https://upbhulekh.gov.in/ansh/' }], documents: ['खाता संख्या / खसरा संख्या', 'खातेदार का नाम'] },
    { id: 's14', name: 'FAMILY ID UP', icon: '👨‍👩‍👧‍👦', desc: 'एक परिवार एक पहचान पोर्टल', link: 'https://familyid.up.gov.in/', actions: [{ label: 'Family ID Portal', url: 'https://familyid.up.gov.in/' }, { label: 'Register / Login & Correction', url: 'https://familyid.up.gov.in/portal/signin.aspx' }, { label: 'Family ID Staus', url: 'https://familyid.up.gov.in/portal/track.aspx' }], documents: ['आधार कार्ड', 'पंजीकृत मोबाइल नंबर', 'परिवार के सदस्यों का विवरण'] },
    { id: 's15', name: 'CM Krishak Durghatna', icon: '🌾', desc: 'उत्तर प्रदेश सरकार कृषि दुर्घटना बीमा एवं सहायता पोर्टल', link: 'https://bor.up.gov.in/KAS/Login/public_login.aspx', actions: [{ label: 'Portal Login / Apply', url: 'https://bor.up.gov.in/KAS/Login/public_login.aspx' }, { label: 'Check Application Status', url: 'https://bor.up.gov.in/KAS/Login/Search_application.aspx' }], documents: ['आधार कार्ड', 'खतौनी (भूमि अभिलेख)', 'मृत्यु प्रमाण पत्र / विकलांगता प्रमाण पत्र', 'एफआईआर / पंचनामा (दुर्घटना की स्थिति में)', 'बैंक पासबुक विवरण'] },
    { id: 's16', name: 'UP Varasat', icon: '👨‍👩‍👦', desc: 'वरासत/उत्तराधिकार ऑनलाइन आवेदन', link: 'https://rccms.up.gov.in/Varasat/userlogin', actions: [{ label: 'Apply Varasat', url: 'https://rccms.up.gov.in/Varasat/userlogin' }, { label: 'Track Application', url: 'https://rccms.up.gov.in/Varasat/searchApplication' }, { label: 'आदेश की प्रति देखें', url: 'https://rccms.up.gov.in/Varasat/searchApplication' }], documents: ['मृतक का मृत्यु प्रमाण पत्र', 'परिवार रजिस्टर की नकल', 'वारिसान के आधार कार्ड', 'खतौनी की नकल'] },
    { id: 's17', name: 'Swavlamban (UDID)', icon: '🦽', desc: 'दिव्यांगजनों के लिए Disability Certificate', link: 'https://swavlambancard.gov.in/', actions: [{ label: 'Swavlamban (UDID)', url: 'https://swavlambancard.gov.in/' }, { label: 'Apply UDID Card', url: 'https://swavlambancard.gov.in/Applyforudid' }, { label: 'Correction', url: 'https://swavlambancard.gov.in/login' }, { label: 'Track Status', url: 'https://swavlambancard.gov.in/track-your-application' }, { label: 'Download Card', url: 'https://swavlambancard.gov.in/login' }], documents: ['आधार कार्ड','पासपोर्ट फोटो', 'हस्ताक्षर / अंगूठा','आधार कार्ड', 'मेडिकल प्रमाण पत्र (यदि हो)'] },
    { id: 's18', name: 'Driving Licence', icon: '🚗', desc: 'Sarathi Parivahan - DL Services', link: 'https://sarathi.parivahan.gov.in/', actions: [{ label: 'Apply Learner DL', url: 'https://sarathi.parivahan.gov.in/' }, { label: 'Vehicle Related Services RC', url: 'https://parivahan.gov.in/en/content/vehicle-related-services' }, { label: 'Know Your Vehicle Details', url: 'https://services.parivahan.gov.in/ntr/#/knowurdetails/login' }, { label: 'Know Your Licence Details', url: 'https://services.parivahan.gov.in/ntr/#/knowurdetails/login' }], documents: ['आधार कार्ड (जन्म व पता प्रमाण)', 'पासपोर्ट साइज फोटो', 'हस्ताक्षर (Signature)','ड्राईवर लाइसेंस कॉपी'] },
    { id: 's19', name: 'Farmer Registry', icon: '📋', desc: 'किसानों का डिजिटल रिकॉर्ड/फार्मर ID', link: 'https://upfr.agristack.gov.in/', actions: [{ label: 'Farmer Registry Official Site', url: 'https://upfr.agristack.gov.in/' }, { label: 'Farmer Register', url: 'https://upfr.agristack.gov.in/' }, { label: 'Get ID Status', url: 'https://upfr.agristack.gov.in/farmer-registry-up/#/checkEnrolmentStatus' }], documents: ['आधार कार्ड', 'खतौनी', 'मोबाइल नंबर'] },
    { id: 's20', name: 'UP Scholarship', icon: '🎓', desc: 'Pre-Matric, Post-Matric छात्रवृत्ति', link: 'https://scholarship.up.gov.in/', actions: [{ label: 'UP Scholarship', url: 'https://scholarship.up.gov.in/' }, { label: 'Student Login/Status', url: 'https://scholarship.up.gov.in/' }, { label: 'OTR Registration', url: 'https://scholarship.up.gov.in/RegWithOTR.aspx' }, { label: 'Registration', url: 'https://scholarship.up.gov.in/RegistrationNew.aspx' }, { label: 'Student Login', url: 'https://scholarship.up.gov.in/index.aspx#' }, { label: 'Login Renual', url: 'https://scholarship.up.gov.in/index.aspx#' }], documents: [ 'आधार कार्ड (मोबाइल लिंक अनिवार्य)','पिछली कक्षा की मार्कशीट', 'आय एवं जाति प्रमाण पत्र', 'बैंक पासबुक', 'फीस रसीद'] },
    { id: 's21', name: 'MyAadhaar (UIDAI)', icon: '🪪', desc: 'आधार डाउनलोड, PVC, Update Status', link: 'https://myaadhaar.uidai.gov.in/', actions: [{ label: 'Aadhaar Official Site & Login', url: 'https://myaadhaar.uidai.gov.in/' }, { label: 'Download Aadhaar', url: 'https://myaadhaar.uidai.gov.in/genricDownloadAadhaar/en' }, { label: 'Check Update Status', url: 'https://myaadhaar.uidai.gov.in/CheckAadhaarStatus/en' }, { label: 'Find Aadhaar / Retrieve VID', url: 'https://myaadhaar.uidai.gov.in/retrieve-eid-uid/en' }, { label: 'Lock / Unlock Biometrics', url: 'https://myaadhaar.uidai.gov.in/lock-unlock-aadhaar/en' }, { label: 'Check Mobile / Email Link Status', url: 'https://myaadhaar.uidai.gov.in/check-aadhaar-validity/en' }, { label: 'Document Update', url: 'https://myaadhaar.uidai.gov.in/du/en_IN' }, { label: 'Generate or Retrieve VID', url: 'https://myaadhaar.uidai.gov.in/genericGenerateOrRetriveVID/en' }, { label: 'Register Complaint', url: 'https://myaadhaar.uidai.gov.in/grievance-feedback/en' }, { label: 'Register Complaint Status', url: 'https://myaadhaar.uidai.gov.in/grievance-feedback-status/en' }], documents: ['आधार नंबर / एनरोलमेंट आईडी', 'रजिस्टर्ड मोबाइल नंबर (OTP हेतु)'] },
    { id: 's22', name: 'Voter ID Portal', icon: '🗳️', desc: 'नया Voter ID, सुधार एवं Download', link: 'https://voters.eci.gov.in/', actions: [{ label: 'New Registration (Form 6)', url: 'https://voters.eci.gov.in/' }, { label: 'Correction (Form 8)', url: 'https://voters.eci.gov.in/' }, { label: 'Download e-EPIC', url: 'https://voters.eci.gov.in/' }], documents: ['पासपोर्ट साइज फोटो', 'आयु प्रमाण (आधार/मार्कशीट)', 'पता प्रमाण (आधार/बिजली बिल)', 'परिवार के किसी सदस्य का वोटर आईडी'] },
    { id: 's23', name: 'e-Shram Card', icon: '🛠️', desc: 'श्रमिक पंजीकरण एवं eShram Download', link: 'https://eshram.gov.in/', actions: [{ label: 'Register on e-Shram', url: 'https://eshram.gov.in/' }, { label: 'Update Profile', url: 'https://eshram.gov.in/' }, { label: 'Download Card', url: 'https://eshram.gov.in/' }], documents: ['आधार कार्ड', 'आधार से लिंक मोबाइल नंबर', 'बैंक पासबुक', 'व्यवसाय का विवरण'] },
    { id: 's24', name: 'जन्म एवं मृत्यु पंजीकरण (CRS)', icon: '👶', desc: 'भारत सरकार - जन्म और मृत्यु प्रमाण पत्र पोर्टल', link: 'https://crsorgi.gov.in/', actions: [{ label: 'CRS Portal', url: 'https://dc.crsorgi.gov.in/crs/' }, { label: 'Apply for Birth & Death Certificate', url: 'https://dc.crsorgi.gov.in/crs/Auth/general-public/' }, { label: 'Birth & Death Certificate Form', url: 'https://dc.crsorgi.gov.in/assets/download/all_forms_CRS_2019_new.pdf' }], documents: ['अस्पताल का जन्म/मृत्यु प्रमाण पत्र (यदि लागू हो)', 'माता-पिता/आवेदक का पहचान पत्र', 'माता-पिता का विवाह प्रमाण पत्र (जन्म के लिए)', 'शपथ पत्र (निर्धारित प्रारूप पर)'] },
    { id: 's25', name: 'राष्ट्रीय पारिवारिक लाभ (NFBS)', icon: '🏛️', desc: 'उत्तर प्रदेश सरकार वित्तीय सहायता पोर्टल', link: 'https://nfbs.upsdc.gov.in/', actions: [{ label: 'Official Site(NFBS)', url: 'https://nfbs.upsdc.gov.in/ ' }, { label: 'Apply', url: 'https://nfbs.upsdc.gov.in/Registration_New.aspx' }, { label: 'Status', url: 'https://nfbs.upsdc.gov.in/login.aspx' }, { label: 'Login/Correction', url: 'https://nfbs.upsdc.gov.in/login.aspx' }, { label: 'Find Reg. Number', url: 'https://nfbs.upsdc.gov.in/forgetReg.aspx' }], documents: ['मृत्यु प्रमाण पत्र', 'बीपीएल राशन कार्ड', 'आधार कार्ड', 'बैंक पासबुक', 'आय, जाति , निवास', 'परिवार रजिस्टर नक़ल'] },
    { id: 's26', name: 'Railway Ticket Booking', icon: '🚂', desc: 'IRCTC ट्रेन टिकट बुकिंग प्लेटफॉर्म', link: 'https://cscsafar.in/', actions: [{ label: 'Book Train Ticket', url: 'https://cscsafar.in/' }, { label: 'Check PNR', url: 'https://cscsafar.in/' }, { label: 'PNR Enquiry', url: 'https://indianrail.gov.in/' }, { label: 'Train Schedule', url: 'https://indianrail.gov.in/' }], documents: ['यात्री का आधार कार्ड' , 'यात्रा की तिथि व स्टेशन', 'मोबाइल नंबर'] },
    { id: 's27', name: 'ABHA Card', icon: '🪪', desc: 'Create and Download ABHA (Ayushman Bharat Health Account) ID', link: 'https://abha.abdm.gov.in/', actions: [{ label: 'ABHA Official Site', url: 'https://abha.abdm.gov.in/' }, { label: 'Create ABHA', url: 'https://abha.abdm.gov.in/abha/v3/register' }, { label: 'Login & Download ABHA', url: 'https://abha.abdm.gov.in/abha/v3/login' }], documents: ['आधार कार्ड ',' (मोबाइल लिंक)', 'ड्राइविंग लाइसेंस'] },
    { id: 's28', name: 'UPPCL eWallet', icon: '💡', desc: 'UP बिजली बिल भुगतान व नया कनेक्शन व सुधार ', link: 'https://ewallet.uppcl.org/', actions: [{ label: 'Pay Bill', url: 'https://ewallet.uppcl.org/' }, { label: 'Uttar Pradesh Power Corporation', url: 'https://uppcl.org/' }, { label: 'Jhatpat Connection', url: 'https://jhatpatportal.uppcl.org/' }, { label: 'Tube-Well Connection', url: 'https://uppcl.org/uppcl/hi/article/new-electricity-connection-for-private-tube-well' }, { label: 'Consumer Reg. & Login', url: 'https://consumer.uppcl.org/' }, { label: 'Complaint/Status(CGRF)', url: 'https://cgrf.uppcl.org/' }], documents: ['फोटो','आधार कार्ड (मोबाइल लिंक)', 'निवास प्रमाण/राशन कार्ड (अनिवार्य)','स्वामित्व का प्रमाण','बिजली बिल का अकाउंट नंबर (Account No)'] },
    { id: 's29', name: 'PM Vishwakarma', icon: '🔨', desc: 'कारीगरों के लिए योजना एवं ऋण', link: 'https://pmvishwakarma.gov.in/', actions: [{ label: 'Applicant Login', url: 'https://pmvishwakarma.gov.in/' }, { label: 'New Registration', url: 'https://pmvishwakarma.gov.in/' }], documents: ['आधार कार्ड (मोबाइल लिंक)', 'राशन कार्ड (अनिवार्य)', 'बैंक पासबुक'] },
    { id: 's30', name: 'Vishwakarma Shram', icon: '🪚', desc: 'विश्वकर्मा श्रम सम्मान योजना (UP)', link: 'https://msme.up.gov.in/', actions: [{ label: 'Apply Online', url: 'https://msme.up.gov.in/login/registration_login' }, { label: 'Status Check', url: 'https://msme.up.gov.in/login/registration_login' }], documents: ['फोटो & सिग्नेचर','आधार कार्ड', 'बैंक पासबुक', 'जाति & निवास प्रमाण पत्र', 'पारंपरिक कारीगर होने का प्रमाण'] },
    { id: 's31', name: 'CM YUVA', icon: '🚀', desc: 'युवा उद्यमी विकास अभियान (UP)', link: 'https://msme.up.gov.in/', actions: [{ label: 'Apply for Loan', url: 'https://msme.up.gov.in/' }, { label: 'Apply/Correction & Status', url: 'https://msme.up.gov.in/login/registration_login' }], documents: ['फोटो & सिग्नेचर','आधार कार्ड', 'बैंक पासबुक', 'जाति & निवास प्रमाण पत्र', 'शैक्षिक योग्यता प्रमाण पत्र', 'अनुभव प्रमाण पत्र', 'पैन कार्ड एवं बैंक डिटेल','प्रोजेक्ट रिपोर्ट','कोटेशन','उद्यम रजिस्ट्रेशन','कौशल प्रशिक्षण प्रमाण पत्र'] },
    { id: 's32', name: 'DigiLocker', icon: '🔒', desc: 'Digital Document Wallet', link: 'https://www.digilocker.gov.in/', actions: [{ label: 'Sign In / Sign Up', url: 'https://www.digilocker.gov.in/' }, { label: 'Issued Documents', url: 'https://www.digilocker.gov.in/' }], documents: ['आधार कार्ड', 'आधार लिंक मोबाइल नंबर'] },
    { id: 's33', name: 'UP Police Character', icon: '👮', desc: 'चरित्र प्रमाण पत्र (Character Certificate)', link: 'https://uppolice.gov.in/', actions: [{ label: 'Apply Certificate', url: 'https://uppolice.gov.in/' }, { label: 'Download Status', url: 'https://uppolice.gov.in/' }], documents: ['पासपोर्ट साइज फोटो', 'पहचान पत्र (आधार)', 'ग्राम प्रधान/पार्षद का प्रमाण (यदि मांगा जाए)'] },
    { id: 's34', name: 'e-Challan', icon: '🚦', desc: 'Online Traffic Challan Payment', link: 'https://echallan.parivahan.gov.in/', actions: [{ label: 'Check Challan', url: 'https://echallan.parivahan.gov.in/' }, { label: 'Pay Online', url: 'https://echallan.parivahan.gov.in/' }], documents: ['गाड़ी का नंबर (Vehicle No)', 'चेसिस / इंजन नंबर (अंतिम 5 अंक)'] },
    { id: 's35', name: 'Virtual Court Challan', icon: '⚖️', desc: 'e-Court Challan Payment Portal', link: 'https://vcourts.gov.in/', actions: [{ label: 'View Virtual Court', url: 'https://vcourts.gov.in/' }, { label: 'Pay Fine', url: 'https://vcourts.gov.in/' }], documents: ['चालान नंबर या गाड़ी का नंबर', 'मोबाइल नंबर'] },
    { id: 's36', name: 'UP Board (UPMSP)', icon: '🏫', desc: 'परीक्षा, परिणाम एवं टाइम-टेबल', link: 'https://upmsp.edu.in/', actions: [{ label: 'Results Portal', url: 'https://upmsp.edu.in/' }, { label: 'Download Time Table', url: 'https://upmsp.edu.in/' }], documents: ['रोल नंबर (Roll Number)', 'विद्यालय का कोड'] },
    { id: 's37', name: 'Navodaya (JNVST)', icon: '🎒', desc: 'नवोदय विद्यालय प्रवेश परीक्षा', link: 'https://cbseitms.rcil.gov.in/', actions: [{ label: 'Apply Class 6/9', url: 'https://cbseitms.rcil.gov.in/' }, { label: 'Admit Card', url: 'https://cbseitms.rcil.gov.in/' }], documents: ['प्रधानाचार्य द्वारा सत्यापित फॉर्म', 'छात्र का फोटो, हस्ताक्षर', 'अभिभावक के हस्ताक्षर', 'आधार कार्ड'] },
    { id: 's38', name: 'CM-SVY Vivah', icon: '🎀', desc: 'मुख्यमंत्री सामूहिक विवाह योजना (UP)', link: 'https://cmsvy.upsdc.gov.in/', actions: [{ label: 'New Application', url: 'https://cmsvy.upsdc.gov.in/' }, { label: 'Application Status', url: 'https://cmsvy.upsdc.gov.in/' }], documents: ['वर-वधू का आधार', 'आयु प्रमाण पत्र', 'आय प्रमाण पत्र (वधू पक्ष)', 'वधू का बैंक पासबुक'] },
    { id: 's39', name: 'JP Narayan Vidyalaya', icon: '📚', desc: 'सर्वोदय विद्यालय प्रवेश एवं आवेदन', link: 'https://ats.upsdc.gov.in/', actions: [{ label: 'Admission Apply', url: 'https://ats.upsdc.gov.in/' }, { label: 'Check Status', url: 'https://ats.upsdc.gov.in/' }], documents: ['छात्र का आधार', 'फोटो व हस्ताक्षर', 'पिछली कक्षा की मार्कशीट (यदि लागू हो)'] },
    { id: 's40', name: 'Bundelkhand Univ', icon: '🏛️', desc: 'Admission, Exam, Result (BU Jhansi)', link: 'https://www.bujhansi.ac.in/', actions: [{ label: 'Results & Exam', url: 'https://www.bujhansi.ac.in/' }, { label: 'Admission Portal', url: 'https://www.bujhansi.ac.in/' }], documents: ['रोल नंबर', 'रजिस्ट्रेशन आईडी (एडमिशन हेतु)', 'शैक्षिक प्रमाण पत्र'] },
    { id: 's41', name: 'Fasal Bima Yojana', icon: '☂️', desc: 'PMFBY - फसल बीमा सेवाएं', link: 'https://pmfby.gov.in/', actions: [{ label: 'Farmer Login', url: 'https://pmfby.gov.in/' }, { label: 'Calculate Premium', url: 'https://pmfby.gov.in/' }], documents: ['खसरा/खतौनी', 'बैंक पासबुक', 'आधार कार्ड', 'फसल बोने का प्रमाण (प्रधान/पटवारी से)'] },
    { id: 's42', name: 'NSDL PAN (Protean)', icon: '💳', desc: 'PAN Card Services (Protean)', link: 'https://www.protean-tinpan.com/', actions: [{ label: 'Apply PAN', url: 'https://www.protean-tinpan.com/' }, { label: 'Track Status', url: 'https://www.protean-tinpan.com/' }], documents: ['आधार कार्ड', '2 फोटो', 'सिग्नेचर', 'Acknowledgement Number (ट्रैकिंग के लिए)'] },
    { id: 's43', name: 'UTIITSL PAN', icon: '💳', desc: 'PAN Card Services (UTIITSL)', link: 'https://www.pan.utiitsl.com/', actions: [{ label: 'PAN Application', url: 'https://www.pan.utiitsl.com/' }, { label: 'Track PAN', url: 'https://www.pan.utiitsl.com/' }], documents: ['आधार कार्ड', '2 फोटो', 'सिग्नेचर', 'कूपन नंबर (ट्रैकिंग के लिए)'] },
    { id: 's44', name: 'Income Tax e-Filing', icon: '💰', desc: 'ITR filing, e-Verify & PAN Services', link: 'https://www.incometax.gov.in/', actions: [{ label: 'File ITR', url: 'https://www.incometax.gov.in/' }, { label: 'e-Verify Return', url: 'https://www.incometax.gov.in/' }, { label: 'Link Aadhaar Status', url: 'https://www.incometax.gov.in/' }], documents: ['पैन कार्ड', 'आधार कार्ड', 'बैंक स्टेटमेंट / Form 16', 'मोबाइल नंबर'] },
    { id: 's45', name: 'APAAR ID', icon: '🆔', desc: 'One Nation, One Student ID', link: 'https://www.abc.gov.in/', actions: [{ label: 'Create APAAR ID', url: 'https://www.abc.gov.in/' }], documents: ['आधार कार्ड ', '(मोबाइल लिंक)', 'स्कूल/कॉलेज का डिटेल्स /आईडी कार्ड'] },
    { id: 's46', name: 'निःशुल्क बोरिंग योजना', icon: '💧', desc: 'Minor Irrigation UP Online Portal', link: 'https://miuponline.in/', actions: [{ label: 'Official Site', url: 'https://miuponline.in/' }, { label: 'Apply Online', url: 'https://miuponline.in/Home/Signup' }, { label: 'Login/Correction', url: 'https://miuponline.in/Home/CandidateLogin' }, { label: 'Check Status', url: 'https://miuponline.in/Home/CandidateLogin' }], documents: ['फोटो','आधार कार्ड', 'बैंक पासबुक','खतौनी / भूमि का स्वामित्व प्रमाण', 'घोषणा पत्र / शपथ-पत्र' ,] },
    { id: 's47', name: 'Parivahan Sewa', icon: '🚌', desc: 'Vehicle Registration, RC, Permit', link: 'https://parivahan.gov.in/', actions: [{ label: 'Vehicle Registration (RC)', url: 'https://parivahan.gov.in/' }, { label: 'Fancy Number Booking', url: 'https://parivahan.gov.in/' }], documents: ['RC (Registration Certificate)', 'वाहन बीमा (Insurance)', 'प्रदूषण प्रमाण पत्र (PUC)'] },
    { id: 's48', name: 'Passport Seva', icon: '🛂', desc: 'नया Passport, Renewal, Appointment', link: 'https://www.passportindia.gov.in/', actions: [{ label: 'New User Registration', url: 'https://www.passportindia.gov.in/' }, { label: 'Check Appointment Status', url: 'https://www.passportindia.gov.in/' }], documents: ['आधार कार्ड', '10th की मार्कशीट', 'पैन कार्ड / वोटर आईडी', 'बैंक पासबुक'] },
    { id: 's49', name: 'DBT / NPCI Bank', icon: '🏦', desc: 'Aadhaar Bank Linking & DBT', link: 'https://www.npci.org.in/', actions: [{ label: 'Official Site', url: 'https://www.npci.org.in/' }, { label: 'DBT / NPCI Bank Link', url: 'https://www.npci.org.in/' }, { label: 'DBT/NPCI Status', url: 'https://myaadhaar.uidai.gov.in/du/en_IN' }, { label: 'UPI Complaint/Status', url: 'https://www.npci.org.in/upi-complaint' }], documents: ['आधार कार्ड', 'बैंक अकाउंट नंबर'] },
    { id: 's50', name: 'PFMS', icon: '💸', desc: 'Public Financial Management System', link: 'https://pfms.nic.in/', actions: [{ label: 'PFMS', url: 'https://pfms.nic.in/' }, { label: 'Know Your Payments', url: 'https://pfms.nic.in/SitePages/KnowYourPayment_Dw_NewNew.aspx' }], documents: ['बैंक अकाउंट नंबर', 'NSP एप्लीकेशन आईडी (छात्रों के लिए)'] },
    { id: 's51', name: 'UP Jansunwai IGRS', icon: '📢', desc: 'शिकायत दर्ज एवं जनसमस्याओं का निस्तारण', link: 'https://jansunwai.up.nic.in/', actions: [{ label: 'UP Jansunwai', url: 'https://jansunwai.up.nic.in/' }, { label: 'Register Grievance', url: 'https://jansunwai.up.nic.in/onlineComplaint' }, { label: 'Track Status', url: 'https://jansunwai.up.nic.in/ComplaintTracker' }], documents: ['शिकायत प्रार्थना पत्र', 'आधार कार्ड', 'संबंधित प्रमाण (फोटो/दस्तावेज़)'] },
    { id: 's52', name: 'CPGRAMS', icon: '📝', desc: 'Centralised Public Grievance System', link: 'https://pgportal.gov.in/', actions: [{ label: 'CPGRAMS', url: 'https://pgportal.gov.in/' }, { label: 'Lodge Public Grievance', url: 'https://pgportal.gov.in/' }, { label: 'View Status', url: 'https://pgportal.gov.in/' }], documents: ['लिखित शिकायत', 'सपोर्टिंग डाक्यूमेंट्स (PDF)'] },
    { id: 's53', name: 'Tele-Law', icon: '⚖️', desc: 'कानूनी सलाह और परामर्श', link: 'https://tele-law.in/', actions: [{ label: 'Register for Legal Advice', url: 'https://tele-law.in/' }], documents: ['पहचान पत्र (आधार)', 'केस/विवाद से जुड़े दस्तावेज़'] },
    { id: 's54', name: 'CSC Safar Air/Bus', icon: '✈️', desc: 'Bus & Air Ticket Booking (CSC)', link: 'https://air.cscsafar.in/', actions: [{ label: 'Book Flight Ticket', url: 'https://air.cscsafar.in/' }, { label: 'Book Bus Ticket', url: 'https://air.cscsafar.in/' }], documents: ['यात्री का नाम (आधार के अनुसार)', 'आयु/लिंग', 'संपर्क सूत्र (मोबाइल/ईमेल)'] },
    { id: 's55', name: 'PMAY-G (Gramin)', icon: '🏡', desc: 'प्रधानमंत्री ग्रामीण आवास योजना', link: 'https://pmayg.nic.in/', actions: [{ label: 'Beneficiary Details', url: 'https://pmayg.nic.in/' }, { label: 'Track PMAY-G Status', url: 'https://pmayg.nic.in/' }], documents: ['रजिस्ट्रेशन नंबर', 'आधार कार्ड'] },
    { id: 's56', name: 'PMAY-U 2.0 (Urban)', icon: '🏢', desc: 'प्रधानमंत्री शहरी आवास योजना', link: 'https://pmay-urban.gov.in/', actions: [{ label: 'Apply Online', url: 'https://pmay-urban.gov.in/' }, { label: 'Check Assessment Status', url: 'https://pmay-urban.gov.in/' }], documents: ['आधार कार्ड', 'आय प्रमाण पत्र', 'ज़मीन/घर के कागज़ात', 'बैंक पासबुक'] },
    { id: 's57', name: 'SBM Gramin', icon: '🚽', desc: 'ग्रामीण शौचालय - Swachh Bharat', link: 'https://sbm.gov.in/', actions: [{ label: 'Apply for Toilet', url: 'https://sbm.gov.in/' }, { label: 'Track Application', url: 'https://sbm.gov.in/' }], documents: ['आधार कार्ड', 'बैंक पासबुक', 'आवेदक का फोटो'] },
    { id: 's58', name: 'MoHUA', icon: '🏙️', desc: 'Ministry of Housing and Urban Affairs', link: 'https://www.mohua.gov.in/', actions: [{ label: 'Official Portal', url: 'https://www.mohua.gov.in/' }], documents: ['योजना के अनुसार आवश्यक दस्तावेज़'] }
];

// --- SECTION 2: GLOBAL SETTINGS & STATE MANAGEMENT ---
const DEFAULT_SETTINGS = {
    centerName: 'Tez Shiva Nexus',
    whatsapp: '+918077330917',
    channel: 'https://t.me/yourchannel',
    receiptFooter: 'Thank you for choosing us! Visit again.',
    theme: 'dark'
};

let savedOps = JSON.parse(localStorage.getItem('unz_ops'));
let operators = (savedOps && savedOps.length > 0) ? savedOps : [{ id: '8077330917', password: 'Vishnu##807733', name: 'Sushil Kumar', role: 'admin' }];

let customers = JSON.parse(localStorage.getItem('unz_cust')) || [];
let services = JSON.parse(localStorage.getItem('unz_serv')) || DEFAULT_SERVICES;
if(!localStorage.getItem('unz_serv')) {
    localStorage.setItem('unz_serv', JSON.stringify(services));
}

let settings = JSON.parse(localStorage.getItem('unz_set')) || DEFAULT_SETTINGS;
let currentSession = JSON.parse(sessionStorage.getItem('unz_session')) || null;
let currentActiveService = null;
let activeReportTab = 'daily';

// --- SECTION 3: UTILITY & HELPER FUNCTIONS ---
const getVisibleCustomers = () => {
    return customers; 
};

const saveToLocal = () => {
    localStorage.setItem('unz_ops', JSON.stringify(operators));
    localStorage.setItem('unz_cust', JSON.stringify(customers));
    localStorage.setItem('unz_serv', JSON.stringify(services));
    localStorage.setItem('unz_set', JSON.stringify(settings));
    autoSaveMasterBackup();
};

const showToast = (msg, type = 'success') => {
    const container = document.getElementById('toastContainer');
    if(!container) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    if(type === 'error') toast.style.borderLeftColor = '#ff3366';
    toast.innerText = msg;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
};

const formatCurrency = (amount) => Number(amount).toLocaleString('en-IN');
const generateId = () => 'ID_' + Math.random().toString(36).substr(2, 9);
const getTodayString = () => new Date().toISOString().split('T')[0];

/**
 * FUNCTION: getServiceBadge
 * PURPOSE: टेक्स्ट या सर्विस टाइप के आधार पर ऑटोमैटिक सिंबल/आइकन और कलर बैज जनरेट करना।
 */
const getServiceBadge = (type, workStr) => {
    const searchString = (type && type !== 'Auto Service' ? type : workStr).toLowerCase();
    
    const badges = [
        { k: 'naukri', i: '💼', c: '#3b82f6', n: 'Sarkari Job' },
        { k: 'job', i: '💼', c: '#3b82f6', n: 'Sarkari Job' },
        { k: 'new', i: '✨', c: '#10b981', n: 'New Apply' },
        { k: 'correction', i: '✏️', c: '#f59e0b', n: 'Correction' },
        { k: 'ekyc', i: '🔐', c: '#06b6d4', n: 'e-KYC' },
        { k: 'kyc', i: '🔐', c: '#06b6d4', n: 'e-KYC' },
        { k: 'pan', i: '💳', c: '#f59e0b', n: 'PAN Card' },
        { k: 'aadhaar', i: '🪪', c: '#34d399', n: 'Aadhaar' },
        { k: 'uidai', i: '🪪', c: '#34d399', n: 'Aadhaar' },
        { k: 'kisan', i: '🌾', c: '#10b981', n: 'Agriculture' },
        { k: 'agriculture', i: '🌾', c: '#10b981', n: 'Agriculture' },
        { k: 'pension', i: '👴', c: '#8b5cf6', n: 'Pension' },
        { k: 'ayushman', i: '🏥', c: '#ef4444', n: 'Ayushman' },
        { k: 'ration', i: '🍚', c: '#f472b6', n: 'Ration Card' },
        { k: 'voter', i: '🗳️', c: '#3b82f6', n: 'Voter ID' },
        { k: 'labour', i: '👷', c: '#eab308', n: 'Labour Card' },
        { k: 'shram', i: '🛠️', c: '#eab308', n: 'e-Shram' },
        { k: 'police', i: '👮', c: '#6366f1', n: 'Police Cert' },
        { k: 'scholarship', i: '🎓', c: '#14b8a6', n: 'Scholarship' },
        { k: 'parivahan', i: '🚗', c: '#ec4899', n: 'Parivahan' },
        { k: 'dl', i: '🚗', c: '#ec4899', n: 'Driving Licence' },
        { k: 'passport', i: '🛂', c: '#0ea5e9', n: 'Passport' },
        { k: 'ticket', i: '🚂', c: '#f97316', n: 'Tickets' },
        { k: 'bhulekh', i: '🗺️', c: '#84cc16', n: 'Bhulekh' }
    ];

    let match = badges.find(b => searchString.includes(b.k));
    if(match) {
        return `<span style="background:${match.c}25; color:${match.c}; padding:4px 8px; border-radius:6px; font-size:0.85em; font-weight:bold; white-space:nowrap;">${match.i} ${match.n}</span>`;
    }
    
    const displayTitle = type && type !== 'Auto Service' ? type.substring(0,14) + (type.length > 14 ? '..' : '') : 'Auto Service';
    return `<span style="background:rgba(0,198,255,0.15); color:#00c6ff; padding:4px 8px; border-radius:6px; font-size:0.85em; font-weight:bold; white-space:nowrap;">⚡ ${displayTitle}</span>`;
};

// --- SECTION 4: UI INJECTION & DYNAMIC ELEMENTS (SPECIAL "NEW UPDATES" & MODALS INJECTION) ---
const injectDynamicUI = () => {
    if(!document.getElementById('unzDynamicStyles')) {
        document.head.insertAdjacentHTML('beforeend', `
            <style id="unzDynamicStyles">
                @keyframes zoomInUnz { 0% { opacity: 0; transform: scale(0.92); } 100% { opacity: 1; transform: scale(1); } }
                
                @keyframes textBlinkUnz {
                    0% { opacity: 1; }
                    50% { opacity: 0.3; }
                    100% { opacity: 1; }
                }

                .nav-item.special-update-btn {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    width: 100%;
                    padding: 12px 16px;
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(245, 158, 11, 0.3);
                    border-radius: 10px;
                    color: #f59e0b !important;
                    font-weight: bold !important;
                    cursor: pointer;
                    text-align: left;
                    transition: all 0.3s ease;
                    margin-bottom: 8px;
                }
                .nav-item.special-update-btn:hover, .nav-item.special-update-btn.active {
                    background: rgba(245, 158, 11, 0.15);
                    border-color: #f59e0b;
                }
                .nav-item.special-update-btn span.blink-text {
                    animation: textBlinkUnz 1.5s infinite ease-in-out;
                }

                .report-table-print { width: 100%; border-collapse: collapse; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #fff; margin-top: 15px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
                .report-table-print th, .report-table-print td { padding: 10px 12px; border: 1px solid #333; text-align: center; font-size: 13px; color: #000; }
                .report-table-print thead th { border:none; padding: 12px; }
                .report-table-print tbody tr:nth-child(even) { background-color: #f2f2f2; }
                
                .bg-col1 { background-color: #607d8b !important; color: white !important; font-weight: bold; }
                .bg-col2 { background-color: #4db6ac !important; color: white !important; font-weight: bold; }
                .bg-col3 { background-color: #ff9800 !important; color: white !important; font-weight: bold; }
                
                .grand-total { background-color: #cccccc !important; font-weight: bold; font-size: 14px; }

                @media print {
                    * { -webkit-print-color-adjust: exact !important; color-adjust: exact !important; print-color-adjust: exact !important; }
                    body * { display: none !important; }
                    #reportContent, #reportContent * { display: block !important; visibility: visible !important; }
                    #reportContent { position: absolute !important; left: 0 !important; top: 0 !important; width: 100% !important; background: #fff !important; color: #000 !important; margin: 0 !important; padding: 10px !important; }
                    #reportContent table { display: table !important; width: 100% !important; }
                    #reportContent tr { display: table-row !important; }
                    #reportContent th, #reportContent td { display: table-cell !important; }
                    #customerReceiptModal, #customerReceiptArea, #customerReceiptArea * { display: block !important; visibility: visible !important; }
                    #customerReceiptModal { position: absolute !important; left: 0 !important; top: 0 !important; width: 100% !important; background: #fff !important; z-index: 99999 !important; }
                }
            </style>
        `);
    }

    const contentBody = document.querySelector('.content-body');
    
    // --- SPECIAL "NEW UPDATES & SARKARI YOJANA" SECTION ---
    if(contentBody && !document.getElementById('newUpdatesSection')) {
        const newUpdatesHTML = `
            <section id="newUpdatesSection" class="view-section hidden">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; flex-wrap: wrap; gap: 15px;">
                    <div>
                        <h2 style="color: #f59e0b; margin: 0;">🚀 New Updates & Sarkari Yojana Hub</h2>
                        <p class="text-muted" style="margin: 5px 0 0 0; font-size: 0.9em;">ताज़ा सरकारी नौकरियां, योजनाएं, एडमिट कार्ड और ऑनलाइन फॉर्म डायरेक्ट लिंक्स।</p>
                    </div>
                    ${currentSession && (currentSession.role === 'admin' || currentSession.id === '8077330917') ? `
                        <button onclick="openAddNewUpdateModal()" class="btn-primary" style="width: auto; background: linear-gradient(135deg, #f59e0b, #d97706); padding: 10px 18px;">➕ Add New Update / Yojana</button>
                    ` : ''}
                </div>
                <div id="newUpdatesGridContainer" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">
                    <!-- Dynamic Cards Rendered Here -->
                </div>
            </section>
        `;
        contentBody.insertAdjacentHTML('beforeend', newUpdatesHTML);
    }

    // --- TOOL MENU SECTION (Cyber Cafe Tools: Photo Editing, PDF Converters, AI Tools, Calculators) ---
    if(contentBody && !document.getElementById('toolMenu')) {
        const toolMenuHTML = `
            <section id="toolMenu" class="view-section hidden">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; flex-wrap: wrap; gap: 15px;">
                    <div>
                        <h2 style="color: #00c6ff; margin: 0;">🛠️ Cyber Cafe Utility & AI Tools</h2>
                        <p class="text-muted" style="margin: 5px 0 0 0; font-size: 0.9em;">फोटो रिसाइज़र, पीडीएफ कंप्रेसर, स्कैनर, और ऑनलाइन यूटिलिटी टूल्स जो रोजाना साइबर कैफे में काम आते हैं।</p>
                    </div>
                </div>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;">
                    <div class="stat-card" style="background: rgba(17, 24, 39, 0.9); border: 1px solid var(--border); border-radius: 16px; padding: 20px; display: flex; flex-direction: column; justify-content: space-between;">
                        <div>
                            <div style="font-size: 2.2rem; margin-bottom: 10px;">🖼️</div>
                            <h3 style="color: var(--cyan); font-size: 1.1rem; margin-bottom: 8px;">Image Resizer & Crop (Photo/Sign)</h3>
                            <p style="font-size: 0.85em; color: var(--text-muted); margin-bottom: 15px;">पासपोर्ट फोटो और सिग्नेचर को 20KB-50KB में रिसाइज और क्रॉप करें (Govt Exams के लिए)।</p>
                        </div>
                        <button onclick="window.open('https://www.iloveimg.com/resize-image', '_blank')" class="btn-primary" style="padding: 8px 12px; font-size: 0.85em; background: linear-gradient(135deg, #3b82f6, #1d4ed8);">Open Tool</button>
                    </div>

                    <div class="stat-card" style="background: rgba(17, 24, 39, 0.9); border: 1px solid var(--border); border-radius: 16px; padding: 20px; display: flex; flex-direction: column; justify-content: space-between;">
                        <div>
                            <div style="font-size: 2.2rem; margin-bottom: 10px;">📄</div>
                            <h3 style="color: var(--cyan); font-size: 1.1rem; margin-bottom: 8px;">PDF Compressor & Merge</h3>
                            <p style="font-size: 0.85em; color: var(--text-muted); margin-bottom: 15px;">बड़ी PDF फाइलों का साइज़ कम करें या कई PDF को आपस में जोड़ें (Merge/Compress)।</p>
                        </div>
                        <button onclick="window.open('https://www.ilovepdf.com/', '_blank')" class="btn-primary" style="padding: 8px 12px; font-size: 0.85em; background: linear-gradient(135deg, #ef4444, #b91c1c);">Open Tool</button>
                    </div>

                    <div class="stat-card" style="background: rgba(17, 24, 39, 0.9); border: 1px solid var(--border); border-radius: 16px; padding: 20px; display: flex; flex-direction: column; justify-content: space-between;">
                        <div>
                            <div style="font-size: 2.2rem; margin-bottom: 10px;">✨</div>
                            <h3 style="color: var(--cyan); font-size: 1.1rem; margin-bottom: 8px;">AI Background Remover</h3>
                            <p style="font-size: 0.85em; color: var(--text-muted); margin-bottom: 15px;">फोटो का बैकग्राउंड तुरंत हटाएं और वाइट या कोई अन्य बैकग्राउंड जोड़ें।</p>
                        </div>
                        <button onclick="window.open('https://www.remove.bg/', '_blank')" class="btn-primary" style="padding: 8px 12px; font-size: 0.85em; background: linear-gradient(135deg, #10b981, #047857);">Open Tool</button>
                    </div>

                    <div class="stat-card" style="background: rgba(17, 24, 39, 0.9); border: 1px solid var(--border); border-radius: 16px; padding: 20px; display: flex; flex-direction: column; justify-content: space-between;">
                        <div>
                            <div style="font-size: 2.2rem; margin-bottom: 10px;">🔄</div>
                            <h3 style="color: var(--cyan); font-size: 1.1rem; margin-bottom: 8px;">JPG to PDF Converter</h3>
                            <p style="font-size: 0.85em; color: var(--text-muted); margin-bottom: 15px;">मार्कशीट, आधार या अन्य फोटो को सिंगल या मल्टी-पेज PDF फॉर्मेट में बदलें।</p>
                        </div>
                        <button onclick="window.open('https://www.ilovepdf.com/jpg_to_pdf', '_blank')" class="btn-primary" style="padding: 8px 12px; font-size: 0.85em; background: linear-gradient(135deg, #f59e0b, #b45309);">Open Tool</button>
                    </div>

                    <div class="stat-card" style="background: rgba(17, 24, 39, 0.9); border: 1px solid var(--border); border-radius: 16px; padding: 20px; display: flex; flex-direction: column; justify-content: space-between;">
                        <div>
                            <div style="font-size: 2.2rem; margin-bottom: 10px;">🔤</div>
                            <h3 style="color: var(--cyan); font-size: 1.1rem; margin-bottom: 8px;">Hindi Typing & Unicode Tool</h3>
                            <p style="font-size: 0.85em; color: var(--text-muted); margin-bottom: 15px;">कृतिदेव (Kruti Dev) से मंगल (Unicode) फॉन्ट कनवर्टर और ऑनलाइन हिंदी टाइपिंग।</p>
                        </div>
                        <button onclick="window.open('https://www.google.com/intl/hi/inputtools/try/', '_blank')" class="btn-primary" style="padding: 8px 12px; font-size: 0.85em; background: linear-gradient(135deg, #8b5cf6, #6d28d9);">Open Tool</button>
                    </div>

                    <div class="stat-card" style="background: rgba(17, 24, 39, 0.9); border: 1px solid var(--border); border-radius: 16px; padding: 20px; display: flex; flex-direction: column; justify-content: space-between;">
                        <div>
                            <div style="font-size: 2.2rem; margin-bottom: 10px;">🖨️</div>
                            <h3 style="color: var(--cyan); font-size: 1.1rem; margin-bottom: 8px;">Print & Document Tools</h3>
                            <p style="font-size: 0.85em; color: var(--text-muted); margin-bottom: 15px;">पैन कार्ड, आधार कार्ड या वोटर आईडी कार्ड को प्रिंट साइज (CR80) में सेट करें।</p>
                        </div>
                        <button onclick="window.open('https://www.cleverpdf.com/', '_blank')" class="btn-primary" style="padding: 8px 12px; font-size: 0.85em; background: linear-gradient(135deg, #06b6d4, #0e7490);">Open Tool</button>
                    </div>
                </div>
            </section>
        `;
        contentBody.insertAdjacentHTML('beforeend', toolMenuHTML);
    }

    // --- SERVICE ACTION MODAL (Guarantees service modal & type options open reliably) ---
    if(!document.getElementById('serviceActionModal')) {
        const serviceActionModalHTML = `
            <div id="serviceActionModal" class="modal hidden" onclick="if(event.target === this) closeModal('serviceActionModal')">
                <div class="modal-content" style="max-width: 550px; background: #111827; color: #fff; border: 1px solid var(--border);">
                    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; border-bottom: 1px solid var(--border); padding-bottom: 12px;">
                        <div style="display: flex; align-items: center; gap: 12px;">
                            <span id="saIcon" style="font-size: 2rem;">⚡</span>
                            <h3 id="saServiceName" style="color: #f59e0b; margin: 0;">Service Actions</h3>
                        </div>
                        <button class="close-btn" onclick="closeModal('serviceActionModal')">✕</button>
                    </div>
                    <div style="display: flex; gap: 10px; margin-bottom: 15px;">
                        <button onclick="openDocumentGuide()" class="btn-secondary" style="flex:1; font-size:0.85em;">📎 Document Guide</button>
                        <button onclick="openYouTubeTutorial()" class="btn-secondary" style="flex:1; font-size:0.85em; color:var(--pink);">🎥 Video Tutorial</button>
                    </div>
                    <div id="dynamicActionButtons" style="display: grid; grid-template-columns: 1fr; gap: 10px; max-height: 250px; overflow-y: auto; margin-bottom: 15px;">
                        <!-- Dynamic action buttons -->
                    </div>
                    <div style="display: flex; gap: 10px; border-top: 1px solid var(--border); padding-top: 15px;">
                        <button onclick="addCustomerForCurrentService()" class="btn-primary" style="flex:1; background: linear-gradient(135deg, #10b981, #059669);">➕ Add Customer Entry</button>
                        <button onclick="closeModal('serviceActionModal')" class="btn-secondary">Close</button>
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', serviceActionModalHTML);
    }

    // --- SIDE MEDIA PANEL (Document / Video Guide Drawer) ---
    if(!document.getElementById('sideMediaPanel')) {
        const sidePanelHTML = `
            <div id="sideMediaPanel" style="position: fixed; right: 0; top: 0; width: 0; height: 100%; background: #0b0f19; border-left: 1px solid var(--border); z-index: 10000; transition: width 0.3s ease; overflow-x: hidden; padding: 20px; box-shadow: -5px 0 25px rgba(0,0,0,0.5);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; border-bottom: 1px solid var(--border); padding-bottom: 10px;">
                    <h3 id="sidePanelTitle" style="color: var(--cyan); margin: 0; font-size: 1.1rem;">Guide</h3>
                    <button class="close-btn" onclick="closeSidePanel()">✕</button>
                </div>
                <div id="sidePanelContent" style="color: var(--text-main);"></div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', sidePanelHTML);
    }

    // --- ADD / EDIT UPDATE MODAL FOR ADMIN CONTROL ---
    if(!document.getElementById('updateModalAdmin')) {
        const updateModalHTML = `
            <div id="updateModalAdmin" class="modal hidden" onclick="if(event.target === this) closeModal('updateModalAdmin')">
                <div class="modal-content" style="max-width: 500px; background: #111827; color: #fff; border: 1px solid var(--border);">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                        <h3 id="updateModalTitle" style="color: #f59e0b; margin: 0;">Add New Update / Yojana</h3>
                        <button class="close-btn" onclick="closeModal('updateModalAdmin')">✕</button>
                    </div>
                    <form id="adminUpdateForm" onsubmit="saveNewUpdateItem(event)">
                        <input type="hidden" id="editUpdateId">
                        <div class="input-group" style="margin-bottom: 15px;">
                            <label>Title (योजना या नौकरी का नाम):</label>
                            <input type="text" id="upTitle" required placeholder="जैसे: UP Police Constable 2026" style="width:100%; padding:10px; border-radius:8px; background:rgba(0,0,0,0.3); border:1px solid var(--border); color:#fff;">
                        </div>
                        <div class="input-group" style="margin-bottom: 15px;">
                            <label>Icon / Emoji (आइकन):</label>
                            <input type="text" id="upIcon" required value="🔥" style="width:100%; padding:10px; border-radius:8px; background:rgba(0,0,0,0.3); border:1px solid var(--border); color:#fff;">
                        </div>
                        <div class="input-group" style="margin-bottom: 15px;">
                            <label>Description (विवरण):</label>
                            <textarea id="upDesc" required placeholder="संक्षिप्त विवरण..." style="width:100%; padding:10px; border-radius:8px; background:rgba(0,0,0,0.3); border:1px solid var(--border); color:#fff; height:70px;"></textarea>
                        </div>
                        <div class="input-group" style="margin-bottom: 15px;">
                            <label>Apply / Main Link URL:</label>
                            <input type="url" id="upLink" required placeholder="https://..." style="width:100%; padding:10px; border-radius:8px; background:rgba(0,0,0,0.3); border:1px solid var(--border); color:#fff;">
                        </div>
                        <div class="input-group" style="margin-bottom: 20px;">
                            <label>YouTube Video Tutorial URL (वैकल्पिक):</label>
                            <input type="url" id="upVideo" placeholder="https://youtube.com/..." style="width:100%; padding:10px; border-radius:8px; background:rgba(0,0,0,0.3); border:1px solid var(--border); color:#fff;">
                        </div>
                        <div style="display: flex; gap: 10px;">
                            <button type="submit" class="btn-primary" style="flex:1;">Save Update</button>
                            <button type="button" onclick="closeModal('updateModalAdmin')" class="btn-secondary">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', updateModalHTML);
    }

    const sidebarNav = document.querySelector('.sidebar-nav');
    if(sidebarNav) {
        const existingSpecialBtn = document.getElementById('navSpecialUpdates');
        if(existingSpecialBtn) existingSpecialBtn.remove();

        const specialNavBtn = `
            <button class="nav-item special-update-btn" id="navSpecialUpdates" data-target="newUpdatesSection">
                <span>🚀</span> <span class="blink-text">New Updates & Yojana</span>
            </button>
        `;
        sidebarNav.insertAdjacentHTML('afterbegin', specialNavBtn);

        const existingOpBtn = document.getElementById('navOperators');
        if(existingOpBtn) existingOpBtn.remove();

        if (currentSession && (currentSession.role === 'admin' || currentSession.id === '8077330917')) {
            const opNavBtn = `<button class="nav-item" id="navOperators" data-target="operators">👥 Operators</button>`;
            const settingsNavBtn = document.querySelector('.nav-item[data-target="settings"]');
            if(settingsNavBtn) settingsNavBtn.insertAdjacentHTML('beforebegin', opNavBtn);
            else sidebarNav.insertAdjacentHTML('beforeend', opNavBtn);
        }

        if(!document.querySelector('.nav-item[data-target="toolMenu"]')) {
            const toolNavBtn = `<button class="nav-item" data-target="toolMenu">🛠️ Tool Menu</button>`;
            const settingsNavBtn = document.querySelector('.nav-item[data-target="settings"]');
            if(settingsNavBtn) settingsNavBtn.insertAdjacentHTML('beforebegin', toolNavBtn);
            else sidebarNav.insertAdjacentHTML('beforeend', toolNavBtn);
        }
        bindNavEvents();
    }

    if(contentBody && !document.getElementById('operators')) {
        contentBody.insertAdjacentHTML('beforeend', `<section id="operators" class="view-section hidden"></section>`);
    }

    if(!document.getElementById('customerReceiptModal')) {
        const custReceiptModal = `
        <div id="customerReceiptModal" class="modal hidden" onclick="if(event.target === this) closeModal('customerReceiptModal')">
            <div class="modal-content" style="width: 90%; max-width: 480px; background: #fff; color: #000;">
                <div id="customerReceiptArea" style="padding: 10px; background:#fff; color:#000;">
                    <div style="text-align: center; border-bottom: 2px dashed #333; padding-bottom: 12px; margin-bottom: 15px;">
                        <h2 style="margin: 0; font-size: 18px; color: #111;">${settings.centerName}</h2>
                        <p style="margin: 3px 0; font-size: 12px; color: #555;">Digital Service Center & Online Portal</p>
                        <p style="margin: 2px 0; font-size: 11px; color: #666;">Proprietor: Sushil Kumar | Mob: 8077330917</p>
                    </div>
                    <div style="font-size: 13px; line-height: 1.6; color:#000;">
                        <p style="margin: 4px 0;"><strong>Date:</strong> <span id="crpDate">-</span></p>
                        <p style="margin: 4px 0;"><strong>Reg Type:</strong> <span id="crpServiceType">-</span></p>
                        <p style="margin: 4px 0;"><strong>Reg No:</strong> <span id="crpRegNo">-</span></p>
                        <p style="margin: 4px 0;"><strong>Customer Name:</strong> <span id="crpName">-</span></p>
                        <p style="margin: 4px 0;"><strong>Mobile:</strong> <span id="crpMobile">-</span></p>
                        <p style="margin: 4px 0;"><strong>Work Description:</strong> <span id="crpWork">-</span></p>
                        <hr style="border: 0; border-top: 1px solid #ddd; margin: 10px 0;">
                        <p style="margin: 4px 0;"><strong>Total Amount:</strong> ₹<span id="crpTotal">0</span></p>
                        <p style="margin: 4px 0;"><strong>Paid Amount:</strong> ₹<span id="crpPaid">0</span></p>
                        <p style="margin: 4px 0; color: #d97706;"><strong>Due Amount:</strong> ₹<span id="crpDue">0</span></p>
                    </div>
                    <div style="margin-top: 20px; text-align: center; border-top: 1px dashed #333; padding-top: 12px; font-size: 11px; color: #666;">
                        <p style="margin: 0;">${settings.receiptFooter}</p>
                        <p style="margin: 4px 0 0 0;">Operator: <strong id="crpOperator">Sushil Kumar</strong></p>
                    </div>
                </div>
                <div style="display: flex; gap: 10px; margin-top: 20px;">
                    <button onclick="window.print()" class="btn-primary" style="flex:1;">🖨️ Print Receipt</button>
                    <button onclick="closeModal('customerReceiptModal')" class="btn-secondary">Close</button>
                </div>
            </div>
        </div>`;
        document.body.insertAdjacentHTML('beforeend', custReceiptModal);
    }
};

// --- SPECIAL UPDATES LOCALSTORAGE & RENDER LOGIC ---
let customUpdates = JSON.parse(localStorage.getItem('unz_custom_updates')) || [
    { id: 'up_1', title: 'UP Police Constable 2026', icon: '👮', desc: 'नवीनतम सरकारी नौकरी एवं एडमिट कार्ड लिंक', link: 'https://www.sarkariresult.com/', video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
    { id: 'up_2', title: 'PM Kisan 20th Installment', icon: '🌾', desc: 'पीएम किसान योजना स्टेटस एवं e-KYC चेक करें', link: 'https://pmkisan.gov.in/', video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
];

const saveCustomUpdates = () => {
    localStorage.setItem('unz_custom_updates', JSON.stringify(customUpdates));
    renderNewUpdatesGrid();
};

window.renderNewUpdatesGrid = () => {
    const grid = document.getElementById('newUpdatesGridContainer');
    if(!grid) return;
    grid.innerHTML = '';

    const isAdmin = currentSession && (currentSession.role === 'admin' || currentSession.id === '8077330917');

    customUpdates.forEach(item => {
        const card = document.createElement('div');
        card.className = 'stat-card';
        card.style.cssText = 'background: rgba(17, 24, 39, 0.9); border: 1px solid rgba(245, 158, 11, 0.3); border-radius: 16px; padding: 20px; display: flex; flex-direction: column; justify-content: space-between; position: relative;';
        
        card.innerHTML = `
            <div>
                <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                    <span style="font-size: 2.2rem; background: rgba(245, 158, 11, 0.15); padding: 8px 12px; border-radius: 12px;">${item.icon}</span>
                    <div>
                        <h3 style="color: #f59e0b; font-size: 1.1rem; margin: 0;">${item.title}</h3>
                        <span style="font-size: 0.75em; color: var(--green);">● Active & Live</span>
                    </div>
                </div>
                <p style="font-size: 0.85em; color: var(--text-muted); margin-bottom: 15px; line-height: 1.5;">${item.desc}</p>
            </div>
            <div>
                <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 10px;">
                    <button onclick="window.open('${item.link}', '_blank')" class="btn-primary" style="flex:1; padding: 8px 12px; font-size: 0.85em; background: linear-gradient(135deg, #10b981, #059669);">🌐 Apply / Portal</button>
                    ${item.video ? `<button onclick="window.open('${item.video}', '_blank')" class="btn-secondary" style="padding: 8px 12px; font-size: 0.85em; color: var(--pink);">🎥 Tutorial</button>` : ''}
                </div>
                ${isAdmin ? `
                    <div style="display: flex; gap: 8px; border-top: 1px solid var(--border); padding-top: 10px; margin-top: 5px;">
                        <button onclick="editUpdateItem('${item.id}')" class="btn-secondary" style="flex:1; padding: 4px; font-size: 0.75em; color: var(--cyan);">✏️ Edit</button>
                        <button onclick="deleteUpdateItem('${item.id}')" class="btn-secondary" style="flex:1; padding: 4px; font-size: 0.75em; color: var(--danger);">🗑️ Delete</button>
                    </div>
                ` : ''}
            </div>
        `;
        grid.appendChild(card);
    });
};

window.openAddNewUpdateModal = () => {
    document.getElementById('adminUpdateForm').reset();
    document.getElementById('editUpdateId').value = '';
    document.getElementById('updateModalTitle').innerText = 'Add New Update / Yojana';
    document.getElementById('updateModalAdmin')?.classList.remove('hidden');
};

window.editUpdateItem = (id) => {
    const item = customUpdates.find(u => u.id === id);
    if(!item) return;
    document.getElementById('editUpdateId').value = item.id;
    document.getElementById('upTitle').value = item.title;
    document.getElementById('upIcon').value = item.icon;
    document.getElementById('upDesc').value = item.desc;
    document.getElementById('upLink').value = item.link;
    document.getElementById('upVideo').value = item.video || '';
    document.getElementById('updateModalTitle').innerText = 'Edit Update / Yojana';
    document.getElementById('updateModalAdmin')?.classList.remove('hidden');
};

window.saveNewUpdateItem = (e) => {
    e.preventDefault();
    const id = document.getElementById('editUpdateId').value;
    const title = document.getElementById('upTitle').value.trim();
    const icon = document.getElementById('upIcon').value.trim();
    const desc = document.getElementById('upDesc').value.trim();
    const link = document.getElementById('upLink').value.trim();
    const video = document.getElementById('upVideo').value.trim();

    if(id) {
        customUpdates = customUpdates.map(u => u.id === id ? { id, title, icon, desc, link, video } : u);
        showToast("Update modified successfully!");
    } else {
        const newObj = { id: 'up_' + Date.now(), title, icon, desc, link, video };
        customUpdates.unshift(newObj);
        showToast("New update added successfully!");
    }
    saveCustomUpdates();
    closeModal('updateModalAdmin');
};

window.deleteUpdateItem = (id) => {
    if(confirm("Are you sure you want to delete this update?")) {
        customUpdates = customUpdates.filter(u => u.id !== id);
        saveCustomUpdates();
        showToast("Update deleted successfully!", "error");
    }
};

// --- SECTION 5: BACKUP & AUTHENTICATION MODULE ---
window.downloadBackupJSON = () => {
    const backupData = { centerName: settings.centerName, exportDate: new Date().toLocaleString(), operators, customers, settings, customUpdates };
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(backupData, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `TezShivaNexus_Backup_${getTodayString()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showToast("Backup downloaded successfully!");
};

window.restoreBackupJSON = (event) => {
    const fileReader = new FileReader();
    if(event.target.files && event.target.files[0]) {
        fileReader.readAsText(event.target.files[0], "UTF-8");
        fileReader.onload = (e) => {
            try {
                const parsed = JSON.parse(e.target.result);
                if(parsed.customers && parsed.operators) {
                    if(confirm(`Restore backup from ${parsed.exportDate || 'unknown date'}?`)) {
                        customers = parsed.customers;
                        operators = parsed.operators;
                        if(parsed.settings) settings = parsed.settings;
                        if(parsed.customUpdates) {
                            customUpdates = parsed.customUpdates;
                            saveCustomUpdates();
                        }
                        saveToLocal();
                        renderCustomers();
                        renderDashboard();
                        showToast("Data restored successfully!");
                    }
                } else { showToast("Invalid backup file format!", "error"); }
            } catch(err) { showToast("Error reading JSON backup file", "error"); }
        };
    }
};

const loginForm = document.getElementById('loginForm');
if(loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const idVal = document.getElementById('loginId')?.value.trim();
        const passVal = document.getElementById('loginPassword')?.value.trim();
        const op = operators.find(o => o.id === idVal && o.password === passVal);
        if(op) {
            currentSession = { id: op.id, name: op.name, role: op.role };
            sessionStorage.setItem('unz_session', JSON.stringify(currentSession));
            if(document.getElementById('rememberMe')?.checked) localStorage.setItem('unz_remember', op.id);
            else localStorage.removeItem('unz_remember');
            initApp();
            showToast('Login Successful!');
        } else { showToast('Invalid Operator/Admin ID or Password', 'error'); }
    });
}

const logoutBtn = document.getElementById('logoutBtn');
if(logoutBtn) {
    logoutBtn.addEventListener('click', () => {
        sessionStorage.removeItem('unz_session');
        currentSession = null;
        document.getElementById('appContainer')?.classList.add('hidden');
        document.getElementById('loginScreen')?.classList.remove('hidden');
        showToast('Logged out successfully');
    });
}

const initApp = () => {
    try {
        if(!currentSession) return;
        injectDynamicUI();
        document.getElementById('loginScreen')?.classList.add('hidden');
        document.getElementById('appContainer')?.classList.remove('hidden');
        
        const topBar = document.querySelector('.top-bar .user-info');
        if(topBar && !document.getElementById('quickFindBtn')) {
            topBar.insertAdjacentHTML('afterbegin', `<button id="quickFindBtn" class="btn-primary" style="padding: 6px 14px; width: auto; font-size: 0.85em;" onclick="quickFind()">🔍 Find</button>`);
        }
        
        const operatorNameEl = document.getElementById('currentOperatorName');
        if(operatorNameEl) operatorNameEl.innerText = currentSession.name;

        applyTheme(settings.theme);
        updateClock();
        renderDashboard();
        renderServicesGrid();
        renderNewUpdatesGrid();
        setupSupportWidget();
    } catch (error) { console.error("Error during initApp:", error); }
};

window.quickFind = () => {
    const query = prompt("🔍 FIND CUSTOMER \nEnter Mobile No, Reg No, or Name:");
    if(query && query.trim() !== "") {
        document.querySelector('.nav-item[data-target="customers"]')?.click();
        const searchInput = document.getElementById('globalSearch');
        if(searchInput) searchInput.value = query;
        renderCustomers(query.toLowerCase());
        showToast("Showing search results...");
    }
};

const bindNavEvents = () => {
    document.querySelectorAll('.nav-item').forEach(link => {
        if(link.dataset.bound) return;
        link.dataset.bound = 'true';
        link.addEventListener('click', (e) => {
            if(e.currentTarget.id === 'logoutBtn') return;
            const targetId = e.currentTarget.getAttribute('data-target');
            if(!targetId) return;

            if(targetId === 'operators') {
                const key = prompt("Enter Supervisor / Admin Passcode to manage Operators:");
                if(key !== "842684") { showToast("Access Denied! Invalid Passcode.", "error"); return; }
            }

            document.querySelectorAll('.nav-item').forEach(l => l.classList.remove('active'));
            e.currentTarget.classList.add('active');
            document.querySelectorAll('.view-section').forEach(sec => sec.classList.add('hidden'));
            document.getElementById(targetId)?.classList.remove('hidden');
            
            if(targetId === 'customers') renderCustomers();
            if(targetId === 'dashboard') renderDashboard();
            if(targetId === 'services') renderServicesGrid();
            if(targetId === 'newUpdatesSection') renderNewUpdatesGrid();
            if(targetId === 'dataMenu') generateReport(activeReportTab);
            if(targetId === 'operators') renderOperatorsMenu();
        });
    });
};
bindNavEvents();

const updateClock = () => {
    const clockEl = document.getElementById('liveClock');
    if(clockEl) clockEl.innerText = new Date().toLocaleTimeString('en-US', { hour12: true });
};
setInterval(updateClock, 1000);

// --- SECTION 6: DASHBOARD & CUSTOMER MANAGEMENT ---
const renderDashboard = () => {
    const today = getTodayString();
    let tCust = 0, tPaid = 0, tDue = 0, tdWork = 0;
    getVisibleCustomers().forEach(c => {
        tCust++;
        tPaid += Number(c.paid || 0);
        tDue += Number(c.due || 0);
        if(c.date === today) tdWork++;
    });
    if(document.getElementById('statTotalCust')) document.getElementById('statTotalCust').innerText = tCust;
    if(document.getElementById('statTotalPaid')) document.getElementById('statTotalPaid').innerText = '₹' + formatCurrency(tPaid);
    if(document.getElementById('statTotalDue')) document.getElementById('statTotalDue').innerText = '₹' + formatCurrency(tDue);
    if(document.getElementById('statTodayWork')) document.getElementById('statTodayWork').innerText = tdWork;
};

const renderCustomers = (filter = '') => {
    const tbody = document.getElementById('customerTableBody');
    if(!tbody) return;
    tbody.innerHTML = '';
    const filtered = getVisibleCustomers().filter(c => 
        (c.name || '').toLowerCase().includes(filter) || 
        (c.mobile || '').includes(filter) || 
        (c.regNo || '').toLowerCase().includes(filter) ||
        (c.work || '').toLowerCase().includes(filter) ||
        (c.serviceType || '').toLowerCase().includes(filter) ||
        (c.operator || '').toLowerCase().includes(filter)
    ).sort((a,b) => b.timestamp - a.timestamp);

    const emptyMsg = document.getElementById('emptyCustomers');
    if(filtered.length === 0) {
        emptyMsg?.classList.remove('hidden');
    } else {
        emptyMsg?.classList.add('hidden');
        filtered.forEach(c => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${c.date}</td>
                <td>${getServiceBadge(c.serviceType, c.work)}</td>
                <td><strong style="color:var(--cyan);">${c.regNo || '-'}</strong></td>
                <td>${c.name}</td>
                <td>${c.mobile}</td>
                <td>${c.work} <br><small style="color:var(--text-muted);">By: ${c.operator || 'Sushil Kumar'}</small></td>
                <td>₹${formatCurrency(c.total)}</td>
                <td class="text-green">₹${formatCurrency(c.paid)}</td>
                <td class="text-pink">₹${formatCurrency(c.due)}</td>
                <td>
                    <div class="action-btns">
                        <button onclick="printCustomerReceipt('${c.id}')" title="Print Receipt">🖨️</button>
                        <button onclick="editCustomer('${c.id}')" title="Edit">✏️</button>
                        <button onclick="deleteCustomer('${c.id}')" title="Delete" style="color:var(--danger)">🗑️</button>
                    </div>
                </td>
            `;
            tbody.appendChild(tr);
        });
    }
};

const ensureRegNoInput = () => {
    const custFormModalEl = document.getElementById('customerForm');
    if(custFormModalEl) {
        if(!document.getElementById('custRegNo')) {
            const nameGroup = custFormModalEl.querySelector('.form-row');
            const regNoHTML = `
                <div class="input-group" style="grid-column: span 2; margin-bottom: 12px;">
                    <label>Registration Number / Application No (वैकल्पिक/नया):</label>
                    <input type="text" id="custRegNo" placeholder="Enter Registration No or leave blank for auto-generate">
                </div>
            `;
            nameGroup?.insertAdjacentHTML('beforebegin', regNoHTML);
        }
    }
    
    const workInput = document.getElementById('custWork');
    if(workInput) {
        workInput.setAttribute('list', 'serviceList58');
        let datalist = document.getElementById('serviceList58');
        if(!datalist) {
            datalist = document.createElement('datalist');
            datalist.id = 'serviceList58';
            workInput.parentNode.appendChild(datalist);
        }
        datalist.innerHTML = services.map(s => `<option value="${s.name} - ${s.desc}">`).join('');
    }
};

document.getElementById('addCustomerBtn')?.addEventListener('click', () => {
    ensureRegNoInput();
    document.getElementById('customerForm')?.reset();
    if(document.getElementById('custId')) document.getElementById('custId').value = '';
    if(document.getElementById('custRegNo')) document.getElementById('custRegNo').value = '';
    if(document.getElementById('customerModalTitle')) document.getElementById('customerModalTitle').innerText = 'Add Customer';
    document.getElementById('customerModal')?.classList.remove('hidden');
});

const calculateDue = () => {
    const total = parseFloat(document.getElementById('custTotal')?.value) || 0;
    const paid = parseFloat(document.getElementById('custPaid')?.value) || 0;
    const dueEl = document.getElementById('custDue');
    if(dueEl) dueEl.value = Math.max(0, total - paid);
};
document.getElementById('custTotal')?.addEventListener('input', calculateDue);
document.getElementById('custPaid')?.addEventListener('input', calculateDue);

document.getElementById('customerForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    ensureRegNoInput();
    const id = document.getElementById('custId')?.value;
    const isNew = !id;
    const dateStr = getTodayString();
    
    const customRegNo = document.getElementById('custRegNo')?.value.trim();
    const autoRegNo = `REG-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    const regNo = customRegNo !== "" ? customRegNo : (isNew ? autoRegNo : (customers.find(c => c.id === id)?.regNo || autoRegNo));
    
    const workStr = document.getElementById('custWork')?.value || '';
    let serviceType = 'Auto Service';
    const matchedSrv = services.find(s => workStr.includes(s.name) || workStr.includes(s.desc));
    if(matchedSrv) {
        serviceType = matchedSrv.name;
    } else if(workStr.trim() !== '') {
        serviceType = workStr.split('-')[0].trim();
    }

    const customerObj = {
        id: isNew ? generateId() : id,
        name: document.getElementById('custName')?.value || '',
        mobile: document.getElementById('custMobile')?.value || '',
        address: document.getElementById('custAddress')?.value || '',
        work: workStr,
        serviceType,
        total: parseFloat(document.getElementById('custTotal')?.value) || 0,
        paid: parseFloat(document.getElementById('custPaid')?.value) || 0,
        due: parseFloat(document.getElementById('custDue')?.value) || 0,
        date: isNew ? dateStr : customers.find(c => c.id === id).date,
        timestamp: isNew ? Date.now() : customers.find(c => c.id === id).timestamp,
        operator: currentSession ? currentSession.name : 'Sushil Kumar',
        regNo
    };

    if(isNew) customers.push(customerObj);
    else customers = customers.map(c => c.id === id ? customerObj : c);

    saveToLocal();
    renderCustomers();
    renderDashboard();
    generateReport(activeReportTab);
    closeModal('customerModal');
    showToast(`Customer ${isNew ? 'Saved' : 'Updated'} Successfully`);
});

window.editCustomer = (id) => {
    ensureRegNoInput();
    const c = customers.find(x => x.id === id);
    if(!c) return;
    
    if(document.getElementById('custId')) document.getElementById('custId').value = c.id;
    if(document.getElementById('custRegNo')) document.getElementById('custRegNo').value = c.regNo || '';
    if(document.getElementById('custName')) document.getElementById('custName').value = c.name;
    if(document.getElementById('custMobile')) document.getElementById('custMobile').value = c.mobile;
    if(document.getElementById('custAddress')) document.getElementById('custAddress').value = c.address;
    if(document.getElementById('custWork')) document.getElementById('custWork').value = c.work;
    if(document.getElementById('custTotal')) document.getElementById('custTotal').value = c.total;
    if(document.getElementById('custPaid')) document.getElementById('custPaid').value = c.paid;
    if(document.getElementById('custDue')) document.getElementById('custDue').value = c.due;
    if(document.getElementById('customerModalTitle')) document.getElementById('customerModalTitle').innerText = 'Edit Customer';
    
    document.getElementById('customerModal')?.classList.remove('hidden');
};

window.printCustomerReceipt = (id) => {
    const c = customers.find(x => x.id === id);
    if(!c) return;
    if(document.getElementById('crpDate')) document.getElementById('crpDate').innerText = c.date;
    if(document.getElementById('crpServiceType')) document.getElementById('crpServiceType').innerText = c.serviceType || 'Auto Service';
    if(document.getElementById('crpRegNo')) document.getElementById('crpRegNo').innerText = c.regNo || '-';
    if(document.getElementById('crpName')) document.getElementById('crpName').innerText = c.name;
    if(document.getElementById('crpMobile')) document.getElementById('crpMobile').innerText = c.mobile;
    if(document.getElementById('crpWork')) document.getElementById('crpWork').innerText = c.work;
    if(document.getElementById('crpTotal')) document.getElementById('crpTotal').innerText = formatCurrency(c.total);
    if(document.getElementById('crpPaid')) document.getElementById('crpPaid').innerText = formatCurrency(c.paid);
    if(document.getElementById('crpDue')) document.getElementById('crpDue').innerText = formatCurrency(c.due);
    if(document.getElementById('crpOperator')) document.getElementById('crpOperator').innerText = c.operator || 'Sushil Kumar';
    document.getElementById('customerReceiptModal')?.classList.remove('hidden');
};

window.deleteCustomer = (id) => {
    if(confirm('Are you sure you want to delete this customer record?')) {
        customers = customers.filter(c => c.id !== id);
        saveToLocal();
        renderCustomers();
        renderDashboard();
        generateReport(activeReportTab);
        showToast('Customer Record Deleted', 'error');
    }
};

window.closeModal = (id) => {
    document.getElementById(id)?.classList.add('hidden');
    document.body.style.overflow = '';
};

// --- SECTION 7: SERVICES GRID & ACTION MODAL ---
const renderServicesGrid = (filterQuery = '') => {
    const servicesView = document.getElementById('services');
    if(!servicesView) return;
    
    let searchInput = document.getElementById('serviceSearchInput');
    if(!searchInput) {
        searchInput = document.createElement('input');
        searchInput.id = 'serviceSearchInput';
        searchInput.style.cssText = 'width: 100%; padding: 14px 20px; margin-bottom: 25px; border-radius: 12px; border: 1px solid var(--border); background: rgba(17, 24, 39, 0.8); color: var(--text-main); font-size: 1em; outline: none;';
        searchInput.placeholder = '🔍 Type service name to filter instantly...';
        searchInput.oninput = (e) => renderServicesGrid(e.target.value);
        servicesView.prepend(searchInput);
    }

    let grid = document.getElementById('servicesGrid');
    if(!grid) return;
    grid.innerHTML = '';
    const filtered = services.filter(s => s.name.toLowerCase().includes(filterQuery.toLowerCase()));

    filtered.forEach(s => {
        const div = document.createElement('div');
        div.className = 'service-glass-card';
        div.innerHTML = `
            <div class="service-glass-icon">${s.icon}</div>
            <div class="service-glass-name">${s.name}</div>
            <div style="font-size: 0.75em; color: var(--text-muted);">${s.desc}</div>
        `;
        div.onclick = () => openActionMenu(s.id);
        grid.appendChild(div);
    });
};

window.openActionMenu = (id) => {
    const s = services.find(x => x.id === id);
    if(!s) return;
    currentActiveService = s;
    closeSidePanel();

    if(document.getElementById('saIcon')) document.getElementById('saIcon').innerText = s.icon;
    if(document.getElementById('saServiceName')) document.getElementById('saServiceName').innerText = s.name;
    
    const actionsContainer = document.getElementById('dynamicActionButtons');
    if(actionsContainer) {
        actionsContainer.innerHTML = '';
        const actionList = (s.actions && s.actions.length > 0) ? s.actions : [{ label: 'New Apply', url: s.link }];
        actionList.forEach(act => {
            const btn = document.createElement('button');
            btn.className = 'service-action-btn';
            btn.innerHTML = `<span>🔗</span> ${act.label}`;
            btn.onclick = () => { window.open(act.url || s.link, '_blank'); };
            actionsContainer.appendChild(btn);
        });
    }
    document.getElementById('serviceActionModal')?.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; 
};

window.addCustomerForCurrentService = () => {
    if(!currentActiveService) return;
    closeModal('serviceActionModal');
    ensureRegNoInput();
    document.getElementById('customerForm')?.reset();
    if(document.getElementById('custId')) document.getElementById('custId').value = '';
    if(document.getElementById('custRegNo')) document.getElementById('custRegNo').value = '';
    if(document.getElementById('customerModalTitle')) document.getElementById('customerModalTitle').innerText = 'Add Customer - ' + currentActiveService.name;
    
    const workInput = document.getElementById('custWork');
    if(workInput) {
        workInput.value = `${currentActiveService.name} - ${currentActiveService.desc}`;
    }
    document.getElementById('customerModal')?.classList.remove('hidden');
};

window.openDocumentGuide = () => {
    const panel = document.getElementById('sideMediaPanel');
    const title = document.getElementById('sidePanelTitle');
    const content = document.getElementById('sidePanelContent');
    if(!panel || !currentActiveService) return;
    panel.style.width = '360px';
    title.innerText = `📎 Document Guide`;
    const requiredDocs = (currentActiveService.documents && currentActiveService.documents.length > 0) ? currentActiveService.documents : ['आधार कार्ड', 'मोबाइल नंबर'];
    content.innerHTML = `<ul style="padding-left: 20px; font-size: 0.9em; line-height: 1.8;">${requiredDocs.map(d=>`<li>${d}</li>`).join('')}</ul>`;
};

window.openYouTubeTutorial = () => {
    const panel = document.getElementById('sideMediaPanel');
    const title = document.getElementById('sidePanelTitle');
    const content = document.getElementById('sidePanelContent');
    if(!panel) return;
    panel.style.width = '380px';
    title.innerText = `🎥 Video Tutorial`;
    content.innerHTML = `<div style="width:100%; aspect-ratio:16/9; background:#000;"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe></div>`;
};

window.closeSidePanel = () => {
    const panel = document.getElementById('sideMediaPanel');
    if(panel) panel.style.width = '0px';
};

// --- SECTION 8: REPORTS & EXCEL EXPORT ---
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        e.currentTarget.classList.add('active');
        const tab = e.currentTarget.getAttribute('data-tab');
        activeReportTab = tab;
        generateReport(tab);
    });
});

const generateReport = (type = 'daily') => {
    activeReportTab = type;
    const content = document.getElementById('reportContent');
    if(!content) return;
    const now = new Date();
    let filtered = [];
    let title = '';
    const visCust = getVisibleCustomers();

    if(type === 'daily') {
        const todayStr = getTodayString();
        filtered = visCust.filter(c => c.date === todayStr || c.date === now.toLocaleDateString());
        title = `📅 Daily Business Report - ${now.toLocaleDateString()}`;
    } else if(type === 'monthly') {
        const currentMonth = now.toISOString().slice(0, 7); 
        filtered = visCust.filter(c => c.date && c.date.startsWith(currentMonth));
        title = `📊 Monthly Business Report (${currentMonth})`;
    } else if(type === 'yearly') {
        const currentYear = now.getFullYear().toString();
        filtered = visCust.filter(c => c.date && c.date.startsWith(currentYear));
        title = `📈 Yearly Business Report (${currentYear})`;
    }

    let tPaid = 0, tDue = 0, tTotal = 0;
    filtered.forEach(c => { tTotal += Number(c.total || 0); tPaid += Number(c.paid || 0); tDue += Number(c.due || 0); });

    let screenRows = filtered.length > 0 ? filtered.map(c => `
        <tr>
            <td>${c.date}</td>
            <td>${getServiceBadge(c.serviceType, c.work)}</td>
            <td><strong style="color:var(--cyan);">${c.regNo || '-'}</strong></td>
            <td>${c.name}</td>
            <td>${c.mobile}</td>
            <td>${c.work}</td>
            <td>${c.operator || 'Sushil Kumar'}</td>
            <td>₹${formatCurrency(c.total)}</td>
            <td class="text-green">₹${formatCurrency(c.paid)}</td>
            <td class="text-pink">₹${formatCurrency(c.due)}</td>
            <td>
                <button onclick="printCustomerReceipt('${c.id}')" class="btn-secondary" style="padding:4px 8px; font-size:0.8em;">🖨️</button>
                <button onclick="editCustomer('${c.id}')" class="btn-secondary" style="padding:4px 8px; font-size:0.8em; color:var(--cyan)">✏️</button>
            </td>
        </tr>
    `).join('') : `<tr><td colspan="11" style="text-align:center; padding:20px;">No records found.</td></tr>`;

    let printRows = '';
    let opTotal = 0, opPaid = 0, opDue = 0;

    filtered.forEach((c) => {
        opTotal += Number(c.total || 0);
        opPaid += Number(c.paid || 0);
        opDue += Number(c.due || 0);

        printRows += `
            <tr>
                <td><b>${c.serviceType || 'Auto Service'}</b></td>
                <td><b>${c.regNo || '-'}</b></td>
                <td style="text-align:left;"><b>${c.name}</b><br><small>${c.mobile}</small></td>
                <td>${c.date}</td>
                <td style="text-align:left;">${c.work}</td>
                <td>₹${formatCurrency(c.total)}</td>
                <td style="color:#00796b;">₹${formatCurrency(opPaid)}</td>
                <td style="color:#c62828;">₹${formatCurrency(opDue)}</td>
            </tr>`;
    });

    content.innerHTML = `
        <div class="section-header">
            <h3 style="color:var(--text-main);">${title}</h3>
            <div style="display: flex; gap: 10px;">
                <button onclick="exportToExcel()" class="btn-primary" style="width: auto; padding: 10px 16px;">📥 Export Excel</button>
                <button onclick="window.print()" class="btn-secondary" style="width: auto; padding: 10px 16px; color:var(--cyan)">🖨️ Print PDF</button>
            </div>
        </div>

        <div class="table-container">
            <table class="data-table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Reg Type</th>
                        <th>Reg No</th>
                        <th>Customer Name</th>
                        <th>Mobile</th>
                        <th>Work Description</th>
                        <th>Operator</th>
                        <th>Total</th>
                        <th>Paid</th>
                        <th>Due</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>${screenRows}</tbody>
            </table>
        </div>

        <div id="printableReportContainer" style="display: none;">
            <div class="print-only-header" style="text-align: center; margin-bottom: 20px;">
                <h2 style="margin: 0; font-size: 22px; text-transform: uppercase;">${settings.centerName}</h2>
                <h4 style="margin: 5px 0 15px 0; font-weight: normal; font-size: 13px;">${title}</h4>
            </div>

            <table class="report-table-print">
                <thead>
                    <tr>
                        <th colspan="3" class="bg-col1">CUSTOMER DETAILS</th>
                        <th colspan="2" class="bg-col2">SERVICE INFO</th>
                        <th colspan="3" class="bg-col3">FINANCIALS (₹)</th>
                    </tr>
                    <tr style="background:#eaeaea; color:#000; font-weight:bold;">
                        <td>REG TYPE</td>
                        <td>REG NO</td>
                        <td>NAME & MOBILE</td>
                        <td>DATE</td>
                        <td>WORK DESCRIPTION</td>
                        <td>TOTAL</td>
                        <td>PAID</td>
                        <td>DUE</td>
                    </tr>
                </thead>
                <tbody>
                    ${printRows}
                    ${filtered.length > 0 ? `
                        <tr class="grand-total">
                            <td colspan="5" style="text-align: right; font-size:14px;">GRAND TOTAL</td>
                            <td>₹${formatCurrency(opTotal)}</td>
                            <td>₹${formatCurrency(opPaid)}</td>
                            <td>₹${formatCurrency(opDue)}</td>
                        </tr>
                    ` : ''}
                </tbody>
            </table>
        </div>
    `;
};

window.exportToExcel = () => {
    const visCust = getVisibleCustomers();
    if(visCust.length === 0) return showToast("No data to export", "error");
    let csv = "Date,RegType,RegNo,Name,Mobile,Work,Total,Paid,Due,Operator\r\n";
    visCust.forEach(c => {
        csv += `${c.date},"${c.serviceType || 'Auto Service'}",${c.regNo},"${c.name}",${c.mobile},"${c.work}",${c.total},${c.paid},${c.due},"${c.operator || 'Sushil Kumar'}"\r\n`;
    });
    const link = document.createElement("a");
    link.href = encodeURI("data:text/csv;charset=utf-8," + csv);
    link.download = "TezShivaNexus_Report.csv";
    document.body.appendChild(link); link.click(); link.remove();
};

const autoSaveMasterBackup = () => {
    try {
        localStorage.setItem('tez_shiva_master_backup_json', JSON.stringify({ center: settings.centerName, lastUpdated: new Date().toLocaleString(), data: customers }));
    } catch(e) {}
};

// --- SECTION 9: OPERATOR MANAGEMENT (SUPERVISOR/ADMIN ONLY) ---
window.renderOperatorsMenu = () => {
    let opView = document.getElementById('operators');
    if(!opView) return; 

    opView.innerHTML = `
        <div style="padding: 10px; animation: fadeIn 0.3s ease;">
            <h2 style="color: var(--text-main); margin-bottom: 20px;">👥 Operator & Supervisor Management</h2>
            <div class="report-content-card" style="margin-bottom: 25px;">
                <h4 style="color: var(--cyan); margin-bottom: 15px;">➕ Add New Operator</h4>
                <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
                    <input type="text" id="newOpName" placeholder="Operator Name" style="flex:1; min-width:160px; padding: 12px 16px; border-radius: 10px; border: 1px solid var(--border); background: rgba(0,0,0,0.3); color: var(--text-main); outline:none;" />
                    <input type="text" id="newOpId" placeholder="Login ID (Mobile No.)" style="flex:1; min-width:160px; padding: 12px 16px; border-radius: 10px; border: 1px solid var(--border); background: rgba(0,0,0,0.3); color: var(--text-main); outline:none;" />
                    <input type="text" id="newOpPass" placeholder="Password" style="flex:1; min-width:160px; padding: 12px 16px; border-radius: 10px; border: 1px solid var(--border); background: rgba(0,0,0,0.3); color: var(--text-main); outline:none;" />
                    <select id="newOpRole" style="padding: 12px 16px; border-radius: 10px; border: 1px solid var(--border); background: rgba(0,0,0,0.3); color: var(--text-main); cursor:pointer; outline:none;">
                        <option value="operator" style="background:#111827;">Operator</option>
                        <option value="admin" style="background:#111827;">Supervisor / Admin</option>
                    </select>
                    <button onclick="addNewOperator()" class="btn-primary" style="width: auto; padding: 12px 24px;">Add Now</button>
                </div>
            </div>
            <div class="table-container">
                <h4 style="color: var(--pink); padding: 15px 20px 5px 20px; margin-bottom: 10px;">📋 Existing Operators List</h4>
                <table class="data-table">
                    <thead>
                        <tr><th>Name</th><th>Login ID</th><th>Password</th><th>Role</th><th>Action</th></tr>
                    </thead>
                    <tbody id="operatorTableBody"></tbody>
                </table>
            </div>
        </div>
    `;
    updateOperatorTable();
};

window.updateOperatorTable = () => {
    const tbody = document.getElementById('operatorTableBody');
    if(!tbody) return;
    tbody.innerHTML = '';
    operators.forEach(op => {
        const isSystemAdmin = op.id === '8077330917'; 
        tbody.innerHTML += `
            <tr>
                <td>${op.name}</td>
                <td style="font-weight:bold; color:var(--cyan);">${op.id}</td>
                <td>${op.password}</td>
                <td style="text-transform: uppercase; font-size: 0.85em; color: ${op.role === 'admin' ? 'var(--green)' : 'var(--text-muted)'};">${op.role}</td>
                <td>
                    ${!isSystemAdmin ? `<button onclick="deleteOperator('${op.id}')" class="btn-secondary" style="padding: 6px 12px; font-size:0.85em; color:var(--danger); border-color:rgba(255,51,102,0.3);">Delete</button>` : '<span style="color:var(--text-muted); font-size:0.85em; font-weight:bold;">Main Admin</span>'}
                </td>
            </tr>
        `;
    });
};

window.addNewOperator = () => {
    const name = document.getElementById('newOpName').value.trim();
    const id = document.getElementById('newOpId').value.trim();
    const passVal = document.getElementById('newOpPass').value.trim();
    const role = document.getElementById('newOpRole').value;

    if(!name || !id || !passVal) return showToast("Please fill all fields", "error");
    if(operators.find(o => o.id === id)) return showToast("Operator ID already exists!", "error");

    operators.push({ id, password: passVal, name, role });
    saveToLocal();
    updateOperatorTable();
    showToast("Operator Added Successfully!");
};

window.deleteOperator = (id) => {
    if(confirm("Are you sure you want to delete this operator?")) {
        operators = operators.filter(o => o.id !== id);
        saveToLocal();
        updateOperatorTable();
        showToast("Operator Deleted!", "error");
    }
};

// --- SECTION 10: THEME & SUPPORT WIDGET ---
const applyTheme = (themeStr) => {
    const btn = document.getElementById('themeToggle');
    if(themeStr === 'light') {
        document.body.classList.add('light-theme');
        if(btn) btn.innerText = '🌙';
    } else {
        document.body.classList.remove('light-theme');
        if(btn) btn.innerText = '☀️';
    }
};

const setupSupportWidget = () => {
    const w = document.getElementById('supportWidget');
    if(sessionStorage.getItem('unz_support_closed')) return;
    setTimeout(() => { w?.classList.add('show'); }, 3000);
    
    document.getElementById('btnWhatsapp')?.addEventListener('click', () => window.open(`https://wa.me/${settings.whatsapp.replace(/[^0-9]/g, '')}`, '_blank'));
    document.getElementById('btnChannel')?.addEventListener('click', () => window.open(settings.channel, '_blank'));
};

window.onload = () => { 
    const rem = localStorage.getItem('unz_remember');
    if(rem && document.getElementById('loginId')) document.getElementById('loginId').value = rem;
    if(currentSession) initApp(); 
};
