// =======================================================
// أولاً: تعريف البيانات بالدينار الأردني (JD)
// =======================================================

const CURRENCY = 'دينار';
const UMRAH_WHATSAPP_NUMBER =   '962777938441'; // ⬅️⬅️ رقم واتساب العمرة المخصص
const REGULAR_WHATSAPP_NUMBER = '962777938441'; // رقم الواتساب العام (يجب استبداله برقمكم)

// ** بيانات أسعار الرحلات الثابتة لكل مدينة **
const BASE_PRICES = {
    istanbul: { flight: 210, transport: 36, profit: 10, totalBase: 256, nights: 4 },
    antalya: { flight: 200, transport: 25, profit: 20, totalBase: 245, nights: 4 },
    cairo: { flight: 213, transport: 10, profit: 25, totalBase: 248, nights: 4 },
    beirut: { flight: 180, transport: 20, profit: 20, totalBase: 220, nights: 4 },
};

// ** أسعار الفنادق لكل ليلة ولكل شخص **
const hotelPrices = {
    istanbul: [
        { name: "GRAND MILAN - Fatih ", pricePerNight: 11,stars:3 }, 
        { name: "BAYKAL - Fatih", pricePerNight: 14,stars:3 },
        { name: " KAYA MADRID - fatih ", pricePerNight: 14,stars:4 }, 
        { name: "THE BIANCHO OLD CITY- Fatih", pricePerNight: 18,stars:3 },
        { name: "TAKSİM MAXWELL - Taksim", pricePerNight: 12,stars:3 }, 
        { name: "CUMBALI PLAZA HOTEL - Taksim", pricePerNight: 14,stars:3 },
        { name: "UNIQUE SUITE- Taksim", pricePerNight: 16,stars:3 },
        { name: "REGENCY WORLD SUITE- Taksim", pricePerNight: 20,stars:3 },
        { name: "GALATA GREENLAND- Taksim", pricePerNight: 21,stars:3 },
        { name: "GLORIOUS HOTEL - Fatih", pricePerNight: 56,stars:4 },
        { name: "NEW EMIN HOTEL- Fatih", pricePerNight: 18,stars:4 },
        { name: "VATAN ASUR HOTEL- Fatih", pricePerNight: 20,stars:4 },
        { name: "SORRISO HOTEL- Fatih", pricePerNight: 23,stars:4 },
        { name: "PIYA SPORT- Fatih", pricePerNight: 29,stars:4 },
        { name: "EUROSTARS HOTEL OLD CITY- Sirkeci", pricePerNight: 37,stars:4 },
        { name: "Nova Plaza Orion Hotel- Taksim", pricePerNight: 24,stars:4 },
        { name: "Nova Plaza Crystal Hotel- Taksim", pricePerNight: 26,stars:4 },
        { name: "THE GREEN PARK HOTEL - Taksim", pricePerNight: 23,stars:4 },
        { name: "FOUR SIDES  LION HOTEL- Taksim", pricePerNight: 25,stars:4 },
        { name: "METROPOLITAN HOTELS - Taksim", pricePerNight: 26,stars:4 },
        { name: "GOLDEN AGE HOTEL- Taksim", pricePerNight: 30,stars:4 },
        { name: "ARTS HOTEL - Taksim", pricePerNight: 32,stars:4 },
        { name: "GRAND STAR & SPA- Taksim", pricePerNight: 19,stars:4 },
        { name: "MINEO PARK - Taksim", pricePerNight: 20,stars:4 },
        { name: "MINEO PARK- TAKSIM", pricePerNight: 17,stars:4 },
        { name: "OTTOMANS LIFE DELUXE", pricePerNight: 43,stars:5 },
        { name: "MERCURE ISTANBUL BOMONTI- Sisli", pricePerNight: 33,stars:5 },
        { name: "ELITE WORLD- TAKSIM", pricePerNight: 43,stars:5 },
    ],
    antalya: [
        { name: "Gender hotel- B.B ", pricePerNight: 27,stars:4 },
        { name: "IC green palace- ALL", pricePerNight: 63,stars:5 }, 
        { name: "Rixos park- belek- ALL", pricePerNight: 63,stars:5 },
        { name: "Sueno deluxe- belek- ALL", pricePerNight: 82,stars:5, }, 
        { name: "Aydınbey queen palace- ALL", pricePerNight: 43,stars:5 },
        { name: "Grand park lara- ALL", pricePerNight: 54,stars:5 },
        { name: "Megasarya westbeach- ALL", pricePerNight: 51.5,stars:5 },
        { name: "kremlin palace- ALL ", pricePerNight: 54.5,stars:5 },
        { name: "Baia lara - ALL ", pricePerNight: 60.5,stars:5 },
        { name: "Limak deluxe lara - ALL ", pricePerNight: 72.5,stars:5 },
        { name: "Nirvana cosmopolitan lara- ALL ", pricePerNight: 70.5,stars:5 },
        { name: "royal  seginus- ALL ", pricePerNight: 73.5,stars:5 },
        { name: "Rixos park belek- ALL ", pricePerNight: 63.5,stars:5 },
    ], 
    cairo: [
        { name: "Aracan Pyramids Hotel ", pricePerNight: 19,stars:4 }, 
        { name: "Marwa Palace Cairo  ", pricePerNight: 27,stars:4 },
        { name: "Pyramisa Suites Hotel Cairo ", pricePerNight: 45,stars:5 },
        { name: "Cleopatra Hotel ", pricePerNight: 30.5,stars:3 },
        { name: "Hilton Cairo Grand Nile ", pricePerNight: 63,stars:5 },
        { name: "Holiday Inn Cairo - Citystars ", pricePerNight: 64,stars:5 },
        { name: "Ramses Hilton ", pricePerNight: 69,stars:5 },
        { name: "Novotel Cairo El Borg ", pricePerNight: 70,stars:5 },
        { name: "Sofitel Cairo Downtown Nile ", pricePerNight: 71.35,stars:5 },
        { name: "Sofitel Cairo Nile El Gezirah ", pricePerNight: 87.30,stars:5 }, 
    ],
    beirut: [
        { name: "The Mayflower Hotel", pricePerNight: 18, stars: 3 }, 
        { name: "Coral Beach Hotel & Resort", pricePerNight: 24, stars: 4 }, 
        { name: "Lancaster Raouche Hotel", pricePerNight: 30, stars: 5 },
    ]
};

// ** باقات الرحلات الثابتة والموحدة (تبليسي + العمرة + جورجيا وأرمينيا) **
const fixedTrips = {
    
    // ⭐️⭐️ 1. بيانات تبليسي القديمة (12 باقة مفصلة) ⭐️⭐️
    tbilisi: {
        packages: [
            { name: "Shine Palace", price: 459, singlePrice: 559, nights: 7, stars: 3, meals: "بدون فطور", armeniaHotel: "Benefice", armeniaStars: 3 },
            { name: "Green Tower", price: 509, singlePrice: 609, nights: 7, stars: 4, meals: "فطور فقط", armeniaHotel: "Grand Fortune", armeniaStars: 3 },
            { name: "Redline (Marjan city center)", price: 519, singlePrice: 619, nights: 7, stars: 4, meals: "فطور فقط", armeniaHotel: "Dynasty", armeniaStars: 4 },
            { name: "Carousel (Marjan city center)", price: 529, singlePrice: 629, nights: 7, stars: 5, meals: "فطور فقط", armeniaHotel: "Dynasty", armeniaStars: 4 },
            { name: "Redline (Marjan city center)", price: 549, singlePrice: 649, nights: 7, stars: 4, meals: "فطور فقط", armeniaHotel: "Caucasus", armeniaStars: 5 },
            { name: "Carousel (Marjan city center)", price: 569, singlePrice: 669, nights: 7, stars: 5, meals: "فطور فقط", armeniaHotel: "Caucasus", armeniaStars: 5 },
            { name: "Panorama Lisi", price: 569, singlePrice: 669, nights: 7, stars: 5, meals: "فطور فقط", armeniaHotel: "Dynasty", armeniaStars: 4 },
            { name: "Panorama Lisi", price: 589, singlePrice: 689, nights: 7, stars: 5, meals: "فطور فقط", armeniaHotel: "Caucasus", armeniaStars: 5 },
            { name: "Royal Tulip Hotel & Casino", price: 619, singlePrice: 719, nights: 7, stars: 5, meals: "فطور فقط", armeniaHotel: "Dynasty", armeniaStars: 4 },
            { name: "Preference Hualing", price: 619, singlePrice: 719, nights: 7, stars: 5, meals: "فطور فقط", armeniaHotel: "Dynasty", armeniaStars: 4 },
            { name: "Royal Tulip Hotel & Casino", price: 649, singlePrice: 749, nights: 7, stars: 5, meals: "فطور فقط", armeniaHotel: "Caucasus", armeniaStars: 5 },
            { name: "Preference Hualing", price: 649, singlePrice: 749, nights: 7, stars: 5, meals: "فطور فقط", armeniaHotel: "Caucasus", armeniaStars: 5 },
        ]
    },
    
    // ⭐️⭐️ 2. بيانات جورجيا وأرمينيا (12 باقة - مطابقة للصورة الأخيرة) ⭐️⭐️
    georgiaArmenia: {
        packages: [
            { name: "Shine Palace", price: 459, singlePrice: 559, nights: 7, stars: 3, meals: "بدون فطور", georgiaHotel: "Shine Palace", armeniaHotel: "Benefice", armeniaStars: 3 },
            { name: "Green Tower", price: 509, singlePrice: 609, nights: 7, stars: 4, meals: "فطور فقط", georgiaHotel: "Green Tower", armeniaHotel: "Grand Fortune", armeniaStars: 3 },
            { name: "Redline (Marjan city center)", price: 519, singlePrice: 619, nights: 7, stars: 4, meals: "فطور فقط", georgiaHotel: "Redline (Marjan city center)", armeniaHotel: "Dynasty", armeniaStars: 4 },
            { name: "Carousel (Marjan city center)", price: 529, singlePrice: 629, nights: 7, stars: 5, meals: "فطور فقط", georgiaHotel: "Carousel (Marjan city center)", armeniaHotel: "Dynasty", armeniaStars: 4 },
            { name: "Redline (Marjan city center)", price: 549, singlePrice: 649, nights: 7, stars: 4, meals: "فطور فقط", georgiaHotel: "Redline (Marjan city center)", armeniaHotel: "Caucasus", armeniaStars: 5 },
            { name: "Carousel (Marjan city center)", price: 569, singlePrice: 669, nights: 7, stars: 5, meals: "فطور فقط", georgiaHotel: "Carousel (Marjan city center)", armeniaHotel: "Caucasus", armeniaStars: 5 },
            { name: "Panorama Lisi", price: 569, singlePrice: 669, nights: 7, stars: 5, meals: "فطور فقط", georgiaHotel: "Panorama Lisi", armeniaHotel: "Dynasty", armeniaStars: 4 },
            { name: "Panorama Lisi", price: 589, singlePrice: 689, nights: 7, stars: 5, meals: "فطور فقط", georgiaHotel: "Panorama Lisi", armeniaHotel: "Caucasus", armeniaStars: 5 },
            { name: "Royal Tulip Hotel & Casino", price: 619, singlePrice: 719, nights: 7, stars: 5, meals: "فطور فقط", georgiaHotel: "Royal Tulip Hotel & Casino", armeniaHotel: "Dynasty", armeniaStars: 4 },
            { name: "Preference Hualing", price: 619, singlePrice: 719, nights: 7, stars: 5, meals: "فطور فقط", georgiaHotel: "Preference Hualing", armeniaHotel: "Dynasty", armeniaStars: 4 },
            { name: "Royal Tulip Hotel & Casino", price: 649, singlePrice: 749, nights: 7, stars: 5, meals: "فطور فقط", georgiaHotel: "Royal Tulip Hotel & Casino", armeniaHotel: "Caucasus", armeniaStars: 5 },
            { name: "Preference Hualing", price: 649, singlePrice: 749, nights: 7, stars: 5, meals: "فطور فقط", georgiaHotel: "Preference Hualing", armeniaHotel: "Caucasus", armeniaStars: 5 },
        ],  
        details: [
            "تذكرة طيران ذهاب وعودة (على الخطوط الجوية الأردنية)",
            "الإقامة 7 ليالٍ: 4 ليالي في تبليسي، 3 ليالي في يريفان (أرمينيا).",
            "جميع الجولات السياحية والتنقلات بين المدن والحدود.",
            "استقبال وتوديع المطار في كلا البلدين.",
            "مرشد سياحي مرافق طوال الرحلة.",
            "تأمين صحي للسفر."
        ],
        startDate: "الرحلة كل يوم جمعة"
    },
    
    umrahPackages: {
        dates: {
            meccaOnly: ["20/11", "27/11"], 
            meccaMedina: ["15/11", "22/11", "29/11"]
        },
        meccaOnly: [
            { hotel: "فندق أبراج التيسير", distance: "1200 متر", prices: { double: 215, triple: 200, quad: 185, quintuple: 175 } },
            { hotel: "رزانة الحفاير أو سما الأماني أو دياري السعد", distance: "500 متر", prices: { double: 235, triple: 210, quad: 200, quintuple: 195 } },
            { hotel: "فندق تاج بارك", distance: "900 متر", prices: { double: 270, triple: 240, quad: 215, quintuple: null } }
        ],
        meccaMedina: [
            { medinaHotel: "مدينة مركزية", medinaDistance: "350 متر", meccaHotel: "أبراج الكسوة", meccaDistance: "1200 متر مع مواصلات", nightsMedina: 2, nightsMecca: 7, prices: { double: 295, triple: 255, quad: 230, quintuple: 220 } },
            { medinaHotel: "مدينة مركزية", medinaDistance: "350 متر", meccaHotel: "رزانة الحفاير", meccaDistance: "500 متر", nightsMedina: 2, nightsMecca: 7, prices: { double: 315, triple: 270, quad: 245, quintuple: 225 } }
        ],
        details: {
            meccaOnly: ["استقبال من قبل مندوبين الشركة في ومكة المكرمة", "الاقامة في الفنادق المطلوبة ولمدة 7 ليالي في مكة المكرمة.", "النقل حافلات - VIP. حديثة (31 مقعد)", "رسوم التأشيرة والحاسب الالي والتأمين الطبي."],
            meccaMedina: ["رسوم التأشيرة والحاسب الالي والتأمين الطبي.", "المزارات في المدينة المنورة (مسجد قباء - جبل أحد - مصنع التمور)"]
        },
        notes: {
            shared: [ ],
            meccaMedina: []
        }
    }
};

// =======================================================
// ثانياً: المتغيرات الأساسية للموقع
// =======================================================
let currentCity = '';
let isFixedPriceTrip = false;

// =======================================================
// ثالثاً: دوال التحكم في الواجهة (Display/Navigation)
// =======================================================

function showPage(pageId) {
    document.getElementById('trip-selector').classList.add('hidden');
    
    document.querySelectorAll('.calculator-container').forEach(page => {
        page.classList.add('hidden');
    });
    const selectedPage = document.getElementById(pageId);
    selectedPage.classList.remove('hidden');
    selectedPage.classList.add('fade-in');
    
    // 1. منطق رحلة تبليسي 
    if (pageId === 'tbilisi-page') {
        currentCity = 'tbilisi';
        isFixedPriceTrip = true;
        populateTbilisiPackages(); 
        
        const dateInput = document.getElementById('tbilisi-date');
        const nextFriday = getNextFriday(2); 
        if(dateInput) dateInput.value = nextFriday;
        
        updatePriceAndValidity('tbilisi');
        
    // 2. منطق رحلة جورجيا وأرمينيا 
    } else if (pageId === 'georgiaArmenia-page') { 
        currentCity = 'georgiaArmenia';
        isFixedPriceTrip = true;
        
        populateGeorgiaArmeniaPackages(); 
        
        const dateInput = document.getElementById('georgiaArmenia-date');
        const nextFriday = getNextFriday(2); 
        if(dateInput) dateInput.value = nextFriday;
        
        updatePriceAndValidity('georgiaArmenia');
        
    // 3. منطق العمرة
    } else if (pageId === 'umrah-page') { 
        currentCity = 'umrah';
        isFixedPriceTrip = true;
        populateUmrahTables();     
        populateUmrahDetails();    
        populateUmrahTravelDates(); 
        populateUmrahHotels(); 
        checkUmrahValidity(); 
    }
}

// ⭐️⭐️ دالة الحاسبة الرئيسية - تم تصحيح منطق الإظهار ⭐️⭐️
function showCalculator(city, title) {
    currentCity = city;
    isFixedPriceTrip = false;
    document.getElementById('trip-selector').classList.add('hidden');
    const calculatorPage = document.getElementById('calculator-page');
    calculatorPage.classList.remove('hidden');
    calculatorPage.classList.add('fade-in');
    
    // 1. تحديث العنوان
    document.getElementById('calculator-title').textContent = title;
    
    // 2. إدارة تفاصيل العرض (الحل لمشكلة التكرار)
    // إخفاء جميع صناديق التفاصيل أولاً
    document.querySelectorAll('.details-box .city-details').forEach(el => {
        el.classList.add('hidden');
    });
    // إظهار صندوق التفاصيل الخاص بالمدينة المختارة فقط
    const detailsDiv = document.getElementById(`details-${city}`);
    if (detailsDiv) {
        detailsDiv.classList.remove('hidden');
    }

    // 3. تعبئة قائمة الفنادق (الحل لمشكلة تكرار فنادق اسطنبول)
    populateHotelsDropdowns(city);
    
    // إعادة تعيين الإعدادات الافتراضية
    document.getElementById('nights-input-group').style.display = 'block'; 
    const defaultNights = BASE_PRICES[city] ? BASE_PRICES[city].nights : 4;
    document.getElementById('nights-count').value = defaultNights;
    document.getElementById('people-count').value = 2;
    document.getElementById('travel-date').value = '';
    document.getElementById('phone').value = '';

    updatePriceAndValidity(city);
}

function showSelector() {
    document.querySelectorAll('.calculator-container').forEach(page => {
        page.classList.add('hidden');
    });
    const selectorPage = document.getElementById('trip-selector');
    selectorPage.classList.remove('hidden');
    selectorPage.classList.add('fade-in');
    currentCity = '';
    isFixedPriceTrip = false;
}

// =======================================================
// رابعاً: دوال تعبئة البيانات (التركيز على دوال الرحلات الثابتة)
// =======================================================

function populateHotelsDropdowns(city) {
    const select = document.getElementById('hotel-select');
    select.innerHTML = '';
    
    if (hotelPrices[city] && hotelPrices[city].length > 0) {
        hotelPrices[city].forEach((hotel, index) => {
            const option = document.createElement('option');
            option.value = hotel.pricePerNight;
            const stars = '⭐'.repeat(hotel.stars); 
            option.textContent = `${hotel.name} ${stars}`; 
            select.appendChild(option);
        });
        select.value = hotelPrices[city][0].pricePerNight; 
    } else {
        select.innerHTML = '<option value="0" disabled selected>لا توجد فنادق متاحة لهذه المدينة حالياً</option>';
    }
    updatePriceAndValidity(city);
}

/**
 * ⭐️⭐️ دالة تعبئة جدول تبليسي (12 باقة - الشكل القديم المفصل) ⭐️⭐️
 */
function populateTbilisiPackages() {
    const city = 'tbilisi';
    const packages = fixedTrips[city].packages;
    const container = document.getElementById(`${city}-prices-table-container`);
    const dropdown = document.getElementById(`${city}-option`);

    let tableHTML = `
        <h4>تبليسي وأرمينيا (الباقة الشاملة) - 7 ليالٍ / 8 أيام</h4>
        <table class="prices-table">
            <thead>
                <tr>
                    <th>فندق تبليسي</th>
                    <th>فندق أرمينيا</th>
                    <th>الوجبات</th>
                    <th>سعر الشخص (مزدوجة/ثلاثية)</th>
                    <th>سعر الشخص (مفردة)</th>
                </tr>
            </thead>
            <tbody>
    `;

    dropdown.innerHTML = `<option value="0" disabled selected>اختر باقة من الجدول أعلاه</option>`;

    packages.forEach((option, index) => {
        const optionValue = index + 1;
        const tbilisiStars = '⭐'.repeat(option.stars);
        const armeniaStars = '⭐'.repeat(option.armeniaStars);
        
        tableHTML += `
            <tr>
                <td>${option.name} ${tbilisiStars}</td>
                <td>${option.armeniaHotel} ${armeniaStars}</td>
                <td>${option.meals}</td>
                <td><strong>${option.price.toFixed(0)}</strong> ${CURRENCY}</td>
                <td><strong>${option.singlePrice.toFixed(0)}</strong> ${CURRENCY}</td>
            </tr>
        `;

        const optionElement = document.createElement('option');
        optionElement.value = optionValue;
        optionElement.textContent = `${option.name} / ${option.armeniaHotel} - ${option.price} ${CURRENCY}`;
        dropdown.appendChild(optionElement);
    });

    tableHTML += '</tbody></table>';
    container.innerHTML = tableHTML;
    
    dropdown.addEventListener('change', () => updatePriceAndValidity('tbilisi'));
    dropdown.value = '1';
}

/**
 * ⭐️⭐️ دالة تعبئة جدول جورجيا وأرمينيا (12 باقة - المطابقة للصورة الأخيرة) ⭐️⭐️
 */
function populateGeorgiaArmeniaPackages() {
    const tripKey = 'georgiaArmenia';
    const packages = fixedTrips[tripKey].packages;
    const container = document.getElementById(`${tripKey}-prices-table-container`);
    const dropdown = document.getElementById(`${tripKey}-option`);
    
    if (!container || !dropdown || packages.length === 0) {
        return; 
    }

    // 1. بناء الجدول المطابق للصورة (4 أعمدة)
    let html = `
        <div class="prices-table-container">
            <h4>رحلة جورجيا وأرمينيا (7 ليالٍ)</h4>
            <table class="prices-table">
                <thead>
                    <tr>
                        <th>اسم الفندق في جورجيا</th>
                        <th>اسم الفندق في أرمينيا</th>
                        <th>وجبات الطعام</th>
                        <th>سعر الشخص في الغرفة الثنائية أو الثلاثية</th>
                    </tr>
                </thead>
                <tbody>
    `;
    
    dropdown.innerHTML = '<option value="0" disabled selected>اختر باقة من الجدول أعلاه</option>';

    packages.forEach((pkg, index) => {
        const georgiaStars = '⭐'.repeat(pkg.stars || 3);
        const armeniaStars = '⭐'.repeat(pkg.armeniaStars || 3); 
        const optionValue = index + 1;

        // بناء صف الجدول
        html += `
            <tr>
                <td>${pkg.georgiaHotel} ${georgiaStars}</td>
                <td>${pkg.armeniaHotel} ${armeniaStars}</td>
                <td>${pkg.meals}</td>
                <td><strong>${pkg.price}</strong> ${CURRENCY}</td>
            </tr>
        `;

        // 2. تعبئة القائمة المنسدلة (بالشكل المبسّط المطلوب)
        const option = document.createElement('option');
        option.value = optionValue;
        
        option.textContent = `${pkg.georgiaHotel} / ${pkg.armeniaHotel} - ${pkg.price} ${CURRENCY}`;
        dropdown.appendChild(option);
    });

    html += `</tbody></table></div>`;
    container.innerHTML = html;
    
    // 3. تعبئة التفاصيل
    const detailsContainer = document.getElementById('georgiaArmenia-details-content');
    if(detailsContainer && fixedTrips[tripKey].details) {
         let listHTML = fixedTrips[tripKey].details.map(item => `<li>${item}</li>`).join('');
         detailsContainer.innerHTML = `<ul style="padding-right: 20px;">${listHTML}</ul>`;
    }
    
    dropdown.addEventListener('change', () => updatePriceAndValidity(tripKey));
    dropdown.value = '1'; 
}


/**
 * ⭐️⭐️ دالة تعبئة جداول العمرة ⭐️⭐️
 */
function populateUmrahTables() {
    const data = fixedTrips.umrahPackages;
    const tablesContainer = document.getElementById('umrah-tables-container');
    
    const meccaOnlyTable = generateUmrahTable(data.meccaOnly, 'عمرة مكة فقط', data.dates.meccaOnly, 7);
    const meccaMedinaTable = generateUmrahMedinaTable(data.meccaMedina, 'عمرة مكة والمدينة', data.dates.meccaMedina);
    
    tablesContainer.innerHTML = meccaOnlyTable + meccaMedinaTable;
}

// Helper function to generate table HTML (Mecca Only)
function generateUmrahTable(packages, title, dates, nights) {
    let html = `
        <div class="prices-table-container">
            <h4>${title} - ${nights} ليالٍ في مكة</h4>
            <p style="margin-top: -10px;">تواريخ الرحلات: <strong>${dates.join('، ')}</strong></p>
            <table class="prices-table umrah-table">
                <thead>
                    <tr>
                        <th>الفندق (مكة)</th>
                        <th>البعد</th>
                        <th>ثنائي</th>
                        <th>ثلاثي</th>
                        <th>رباعي</th>
                        <th>خماسي</th>
                    </tr>
                </thead>
                <tbody>
    `;
    packages.forEach(pkg => {
        html += `
            <tr>
                <td>${pkg.hotel}</td>
                <td>${pkg.distance}</td>
                <td><strong>${pkg.prices.double}</strong> ${CURRENCY}</td>
                <td><strong>${pkg.prices.triple}</strong> ${CURRENCY}</td>
                <td><strong>${pkg.prices.quad}</strong> ${CURRENCY}</td>
                <td>${pkg.prices.quintuple !== null ? `<strong>${pkg.prices.quintuple}</strong> ${CURRENCY}` : '—'}</td>
            </tr>
        `;
    });
    html += '</tbody></table></div>';
    return html;
}

// Helper function to generate table HTML (Mecca & Medina)
function generateUmrahMedinaTable(packages, title, dates) {
    let html = `
        <div class="prices-table-container">
            <h4>${title} - (2 ليلتان مدينة / 7 ليالٍ مكة)</h4>
            <p style="margin-top: -10px;">تواريخ الرحلات: <strong>${dates.join('، ')}</strong></p>
            <table class="prices-table umrah-table">
                <thead>
                    <tr>
                        <th>فندق المدينة (2 ليلة)</th>
                        <th>فندق مكة (7 ليالي)</th>
                        <th>ثنائي</th>
                        <th>ثلاثي</th>
                        <th>رباعي</th>
                        <th>خماسي</th>
                    </tr>
                </thead>
                <tbody>
    `;
    packages.forEach(pkg => {
        html += `
            <tr>
                <td>${pkg.medinaHotel} (${pkg.medinaDistance})</td>
                <td>${pkg.meccaHotel} (${pkg.meccaDistance})</td>
                <td><strong>${pkg.prices.double}</strong> ${CURRENCY}</td>
                <td><strong>${pkg.prices.triple}</strong> ${CURRENCY}</td>
                <td><strong>${pkg.prices.quad}</strong> ${CURRENCY}</td>
                <td><strong>${pkg.prices.quintuple}</strong> ${CURRENCY}</td>
            </tr>
        `;
    });
    html += '</tbody></table></div>';
    return html;
}

/**
 * ⭐️⭐️ دالة تعبئة تفاصيل العمرة المشتركة (لأغراض العرض) ⭐️⭐️
 */
function populateUmrahDetails() {
    const detailsContainer = document.getElementById('umrah-details-content');
    const details = fixedTrips.umrahPackages.details.meccaMedina;
    const notes = fixedTrips.umrahPackages.notes.shared.concat(fixedTrips.umrahPackages.notes.meccaMedina);

    let listHTML = details.map(item => `<li>${item}</li>`).join('');
    let notesHTML = notes.map(item => `<li style="list-style-type: none; padding-right: 0;">${item.replace(':', ':<br>')}</li>`).join('');
    
    detailsContainer.innerHTML = `
        
        <ul style="padding-right: 20px;">
            ${listHTML}
        </ul>
        <ul style="padding-right: 20px;">
            ${notesHTML}
        </ul>
    `;
}

/**
 * دالة تعبئة قائمة التواريخ بناءً على نوع الباقة 
 */
function populateUmrahTravelDates() {
    const tripTypeSelect = document.getElementById('umrah-trip-type');
    const dateSelect = document.getElementById('umrah-travel-date');
    const selectedTrip = tripTypeSelect.value;
    
    dateSelect.innerHTML = '<option value="0" disabled selected>اختر تاريخ السفر</option>';
    
    if (selectedTrip === 'meccaOnly' || selectedTrip === 'meccaMedina') {
        const dates = fixedTrips.umrahPackages.dates[selectedTrip];
        dates.forEach(date => {
            const option = document.createElement('option');
            option.value = date;
            option.textContent = date;
            dateSelect.appendChild(option);
        });
        dateSelect.disabled = false;
    } else {
        dateSelect.disabled = true;
    }
}


/**
 * دالة تعبئة قائمة الفنادق بناءً على نوع الباقة 
 */
function populateUmrahHotels() {
    const tripTypeSelect = document.getElementById('umrah-trip-type');
    const hotelSelect = document.getElementById('umrah-hotel-select');
    const selectedTrip = tripTypeSelect.value;
    
    hotelSelect.innerHTML = '<option value="0" disabled selected>حدد الفندق المطلوب</option>';
    
    if (selectedTrip === 'meccaOnly' || selectedTrip === 'meccaMedina') {
        const packages = fixedTrips.umrahPackages[selectedTrip];
        packages.forEach((pkg, index) => {
            const option = document.createElement('option');
            option.value = index + 1; 
            if (selectedTrip === 'meccaOnly') {
                option.textContent = `${pkg.hotel} - ${pkg.distance}`;
            } else {
                option.textContent = `المدينة: ${pkg.medinaHotel} / مكة: ${pkg.meccaHotel}`;
            }
            hotelSelect.appendChild(option);
        });
        hotelSelect.disabled = false;
    } else {
        hotelSelect.disabled = true;
    }
    
    populateUmrahTravelDates();
}


// =======================================================
// خامساً: دوال الحساب والتحقق
// =======================================================

function updatePriceAndValidity(city = currentCity) {
    
    const isTbilisiPage = city === 'tbilisi';
    const isGeorgiaArmeniaPage = city === 'georgiaArmenia';
    const isFixedPage = isTbilisiPage || isGeorgiaArmeniaPage;
    const isUmrahPage = city === 'umrah';
    
    if (isUmrahPage) {
        checkUmrahValidity();
        return;
    }
    
    const cityPrefix = city; 
    
    // تحديد IDs العناصر
    const hotelSelectId = isFixedPage ? `${cityPrefix}-option` : 'hotel-select';
    const peopleCountInputId = isFixedPage ? `${cityPrefix}-people-count` : 'people-count';
    const dateInputId = isFixedPage ? `${cityPrefix}-date` : 'travel-date';
    const phoneInputId = isFixedPage ? `${cityPrefix}-phone` : 'phone';
    const resultBoxId = isFixedPage ? `calculation-result-${cityPrefix}` : 'calculation-result';
    const sendBtnId = isFixedPage ? `send-btn-${cityPrefix}` : 'send-btn';

    // جلب العناصر
    const hotelSelect = document.getElementById(hotelSelectId);
    const peopleCountInput = document.getElementById(peopleCountInputId);
    const dateInput = document.getElementById(dateInputId);
    const resultBox = document.getElementById(resultBoxId);
    const sendBtn = document.getElementById(sendBtnId);

    // التحقق من وجود العناصر
    if (!hotelSelect || !peopleCountInput || !resultBox || !sendBtn) return;
    
    const selectedValue = hotelSelect.value;
    const people = parseInt(peopleCountInput.value) || 1;
    
    let isFormValid = false;
    let finalPricePerPerson = 0;
    
    // التحقق من صلاحية الحقول
    isFormValid = (
    selectedValue && selectedValue !== '0' &&
    people > 0 && 
    dateInput && dateInput.value 
);
    
    let nights = 0;

    // **********************************************
    // ********* منطق حساب السعر للشخص الواحد *********
    // **********************************************
    
    if (isFixedPage) {
        const optionIndex = parseInt(selectedValue);
        const fixedTripKey = city;
        const selectedOffer = fixedTrips[fixedTripKey].packages[optionIndex - 1];
        
        // استخدام سعر المفرد إذا كان عدد الأشخاص 1، وإلا سعر الغرفة المزدوجة/الثلاثية
        if (people === 1 && selectedOffer.singlePrice) {
            finalPricePerPerson = selectedOffer.singlePrice;
        } else {
            finalPricePerPerson = selectedOffer.price;
        }
        nights = selectedOffer.nights;
        
    } else if (city && BASE_PRICES[city]) {
        // ... (منطق الرحلات العادية لم يتغير)
        const nightsInput = document.getElementById('nights-count');
        nights = parseInt(nightsInput.value) || BASE_PRICES[city].nights;
        const basePricePerPerson = BASE_PRICES[city].totalBase;
        const hotelCost = parseFloat(hotelSelect.value) * nights;
        finalPricePerPerson = basePricePerPerson + hotelCost;
    } 
    
    // **********************************************
    // ************ عرض النتيجة وتحديث الزر ***********
    // **********************************************
    
    if (finalPricePerPerson > 0) {
        const roomType = people === 1 ? 'المفردة' : 'المزدوجة/الثلاثية';
        resultBox.innerHTML = `
            <p class="result-text">السعر  للشخص في الغرفة ${roomType}:</p>
            <strong class="result-price">${Math.ceil(finalPricePerPerson)} ${CURRENCY}</strong>
        `;
    } else {
         resultBox.innerHTML = `
            <p class="result-text">السعر التقديري:</p>
            <strong class="result-price">-- ${CURRENCY}</strong>
        `;
    }

    sendBtn.disabled = !isFormValid;
    sendBtn.classList.toggle('active-send', isFormValid);
}

function checkUmrahValidity() {
    const tripTypeSelect = document.getElementById('umrah-trip-type');
    const dateSelect = document.getElementById('umrah-travel-date');
    const hotelSelect = document.getElementById('umrah-hotel-select');
    const phoneInput = document.getElementById('umrah-phone');
    const sendButton = document.getElementById('umrah-send-btn');
    
    const isFormValid = (
        tripTypeSelect && tripTypeSelect.value !== '0' &&
        dateSelect && dateSelect.value !== '0' &&
        hotelSelect && hotelSelect.value !== '0' &&
        phoneInput && phoneInput.value.length >= 8 
    );

    if (sendButton) {
        sendButton.disabled = !isFormValid;
        sendButton.classList.toggle('active-send', isFormValid);
    }
}


// =======================================================
// سادساً: دالة إرسال الطلب (واتساب)
// =======================================================

function sendInquiryEmail(context = 'regular') {
    
    if (context === 'umrah') {
        const tripTypeSelect = document.getElementById('umrah-trip-type');
        const dateSelect = document.getElementById('umrah-travel-date');
        const hotelSelect = document.getElementById('umrah-hotel-select');
        const phoneInput = document.getElementById('umrah-phone'); 

        const sendUmrahButton = document.getElementById('umrah-send-btn');

        if (sendUmrahButton.disabled) {
            alert('يُرجى ملء جميع الحقول المطلوبة (نوع الباقة، التاريخ، الفندق، ورقم الهاتف) قبل إرسال الطلب.');
            return;
        }

        const tripType = tripTypeSelect.options[tripTypeSelect.selectedIndex].text;
        const travelDate = dateSelect.value;
        const selectedHotel = hotelSelect.options[hotelSelect.selectedIndex].text;
        const phone = phoneInput.value;
        
        let message = `مرحبا، أود الاستفسار عن تفاصيل العمرة براً:\n\n`;
        message += `🕋 نوع الرحلة: ${tripType}\n`;
        message += `📅 تاريخ السفر المطلوب: ${travelDate}\n`;
        message += `🏨 الفندق : ${selectedHotel}\n\n`;
        message += `📞 رقم التواصل: ${phone}\n\n`;
        message += `(أرجو التواصل معي لتزويدي بالأسعار النهائية وتفاصيل الحجز لهذا الخيار.)`;
        
        const url = `https://wa.me/${962777938441}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
        return;
    }
    
    // منطق إرسال المدن العادية وتبليسي وجورجيا/أرمينيا
    const city = currentCity;
    const isTbilisiPage = city === 'tbilisi';
    const isGeorgiaArmeniaPage = city === 'georgiaArmenia';
    const isFixedPage = isTbilisiPage || isGeorgiaArmeniaPage;

    // استخدام الـ ID المناسب بناءً على نوع الصفحة
    const hotelSelectId = isFixedPage ? `${city}-option` : 'hotel-select';
    const dateInputId = isFixedPage ? `${city}-date` : 'travel-date';
    const peopleCountInputId = isFixedPage ? `${city}-people-count` : 'people-count';
    const phoneInputId = isFixedPage ? `${city}-phone` : 'phone';
    const resultBoxId = isFixedPage ? `calculation-result-${city}` : 'calculation-result';
    const sendBtnId = isFixedPage ? `send-btn-${city}` : 'send-btn';

    const hotelSelect = document.getElementById(hotelSelectId);
    const dateInput = document.getElementById(dateInputId);
    const peopleCountInput = document.getElementById(peopleCountInputId);
    const sendBtn = document.getElementById(sendBtnId);
    
    if (sendBtn.disabled) {
        alert('يُرجى ملء جميع الحقول المطلوبة (الفندق/الباقة، الأشخاص، التاريخ، ورقم الهاتف).');
        return;
    }

    let cityName = '';
    if (isTbilisiPage) {
        cityName = 'تبليسي وأرمينيا (12 باقة)';
    } else if (isGeorgiaArmeniaPage) {
        cityName = 'جورجيا وأرمينيا (12 باقة)';
    } else {
        cityName = document.getElementById('calculator-title').textContent.replace('حاسبة السعر - ', '');
    }
    
    let selectedItem = hotelSelect.options[hotelSelect.selectedIndex].text;
    let people = peopleCountInput.value;
    let date = dateInput.value;
    let finalPriceElement = document.getElementById(resultBoxId).querySelector('.result-price');
    let finalPrice = finalPriceElement ? finalPriceElement.textContent : 'غير محدد';
    let nights = 'غير محدد';
    
    if (isFixedPage) {
        const optionIndex = parseInt(hotelSelect.value);
        if (optionIndex > 0) {
            nights = fixedTrips[city].packages[optionIndex - 1].nights;
        }
    } else {
         nights = document.getElementById('nights-count').value;
    }
    
    
    let message = `مرحبا ركن الأصالة، أود الاستفسار عن حجز رحلة:\n\n`;
    message += `🌍 الوجهة: ${cityName}\n`;
    message += `🏨 الفندق/ المختارة: ${selectedItem}\n`;
    message += `🌙 عدد الليالي: ${nights}\n`;
    message += `👥 عدد الأشخاص: ${people}\n`;
    message += `📅 تاريخ السفر: ${date}\n`;
    message += `💰 السعر  للشخص الواحد: ${finalPrice}\n\n`;
    

    const url = `https://wa.me/${962777938441}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}


// =======================================================
// سابعاً: الإعداد الأولي والدوال المساعدة
// =======================================================

function isFriday(dateString) {
    return new Date(dateString).getUTCDay() === 5;
}

function getNextFriday(minDays = 2) {
    const today = new Date();
    today.setDate(today.getDate() + minDays);
    let date = today;
    const day = date.getDay(); 
    const diff = (5 - day + 7) % 7;
    date.setDate(date.getDate() + diff);
    return date.toISOString().split('T')[0];
}

document.addEventListener('DOMContentLoaded', () => {
    // تحديد أقل تاريخ متاح للسفر والتحقق من يوم الجمعة
    const today = new Date();
    today.setDate(today.getDate() + 1);
    const minDate = today.toISOString().split('T')[0];
    document.querySelectorAll('input[type="date"]').forEach(input => {
        input.setAttribute('min', minDate);
        
        // التحقق من تاريخ السفر لتبليسي وجورجيا/أرمينيا
        if (input.id === 'tbilisi-date' || input.id === 'georgiaArmenia-date') {
            input.addEventListener('change', (event) => {
                const selectedDate = event.target.value;
                if (selectedDate && new Date(selectedDate).getUTCDay() !== 5) {
                    alert('لرحلات جورجيا/تبليسي، يجب اختيار يوم الجمعة للسفر.');
                    event.target.value = getNextFriday(); 
                    updatePriceAndValidity(currentCity);
                }
            });
        }
    });

    // ربط الدوال بالتغييرات للمدن العادية
    const regularInputs = document.querySelectorAll('#calculator-page input, #calculator-page select');
    regularInputs.forEach(input => {
        input.addEventListener('change', () => updatePriceAndValidity(currentCity));
        input.addEventListener('keyup', () => updatePriceAndValidity(currentCity)); 
    });
    
    // ربط الدوال بالتغييرات لصفحة تبليسي
    const tbilisiInputs = document.querySelectorAll('#tbilisi-page input, #tbilisi-page select');
    tbilisiInputs.forEach(input => {
        input.addEventListener('change', () => updatePriceAndValidity('tbilisi'));
        input.addEventListener('keyup', () => updatePriceAndValidity('tbilisi')); 
    });
    
    // ⬅️⭐️ ربط الدوال بالتغييرات لصفحة جورجيا/أرمينيا الجديدة
    const georgiaArmeniaInputs = document.querySelectorAll('#georgiaArmenia-page input, #georgiaArmenia-page select');
    georgiaArmeniaInputs.forEach(input => {
        input.addEventListener('change', () => updatePriceAndValidity('georgiaArmenia'));
        input.addEventListener('keyup', () => updatePriceAndValidity('georgiaArmenia')); 
    });
    
    // ⭐️⭐️ ربط الدوال بالتغييرات لصفحة العمرة ⭐️⭐️
    const umrahTripType = document.getElementById('umrah-trip-type');
    const umrahDateSelect = document.getElementById('umrah-travel-date');
    const umrahHotelSelect = document.getElementById('umrah-hotel-select');
    const umrahPhoneInput = document.getElementById('umrah-phone'); 

    if (umrahTripType) {
        umrahTripType.addEventListener('change', () => {
            populateUmrahHotels();
            checkUmrahValidity();
        });
    }
    if (umrahDateSelect) {
        umrahDateSelect.addEventListener('change', checkUmrahValidity);
    }
    if (umrahHotelSelect) {
        umrahHotelSelect.addEventListener('change', checkUmrahValidity);
    }
    if (umrahPhoneInput) {
        umrahPhoneInput.addEventListener('change', checkUmrahValidity);
        umrahPhoneInput.addEventListener('keyup', checkUmrahValidity);
    }
    
    // تحديث مبدئي لعناصر المدينة العادية عند التحميل
    currentCity = 'istanbul'; 
    populateHotelsDropdowns('istanbul');
});