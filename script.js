// =======================================================
// أولاً: تعريف البيانات
// =======================================================

// ** بيانات أسعار الرحلات الثابتة لكل مدينة (طيران + مواصلات + ربح) **
const BASE_PRICES = {
    istanbul: { flight: 210, transport: 36, profit: 10, totalBase: 256 },
    antalya: { flight: 200, transport: 25, profit: 20, totalBase: 245 },
    // بيانات طرابزون الأساسية
    trabzon: { flight: 220, transport: 50, profit: 30, totalBase: 300 }, 
    cairo: { flight: 213, transport: 10, profit: 25, totalBase: 248 },
    beirut: { flight: 180, transport: 0, profit: 15, totalBase: 195 }
};

// ** أسعار الفنادق لكل ليلة ولكل شخص (أو سعر العرض الثابت) **
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
        { name: "Cilicia Hotel - 4 Star", totalDailyCost: 25, stars: 4 }, 
        { name: "Crowne Plaza Hamra - 5 Star", totalDailyCost: 40, stars: 5 },
    ],
    // بيانات طرابزون (السعر ثابت للإقامة حسب الليالي)
    trabzon: [
        { 
            name: "RAMADA PLAZA TRABZON", 
            stars: 5, 
            pricesByNights: { 4: 200, 5: 240, 7: 320 } 
        },
        { 
            name: "NOVOTEL TRABZON", 
            stars: 4, 
            pricesByNights: { 4: 150, 5: 180, 7: 250 } 
        },
        { 
            name: "شقق فندقية راقية", 
            stars: 0, 
            pricesByNights: { 4: 180, 5: 220, 7: 300 } 
        },
    ],
    // المدن ذات الأسعار الثابتة الكاملة (للتخطيط القديم)
    batumi: [
        { name: "Sheraton Batumi - 5 Star", price: 380, nights: 8, stars: 5 },
        { name: "Le Meridien Batumi - 5 Star", price: 420, nights: 8, stars: 5 },
        { name: "Sky Inn Batumi - 4 Star", price: 290, nights: 8, stars: 4 },
    ],
    tbilisi: [
        { name: "Shine Palace", price: 379, singlePrice: 479, nights: 7, stars: 3, meals: "بدون فطور" },
        { name: "Shine Palace", price: 399, singlePrice: 499, nights: 7, stars: 3, meals: "فطور فقط" },
        { name: "Green Tower", price: 429, singlePrice: 529, nights: 7, stars: 4, meals: "فطور فقط" },
        { name: "Redline (Marjan city center)", price: 449, singlePrice: 599, nights: 7, stars: 4, meals: "فطور فقط" },
        { name: "Carousel (Marjan city center)", price: 479, singlePrice: 629, nights: 7, stars: 5, meals: "فطور فقط" },
        { name: "Panorama Lisi", price: 499, singlePrice: 699, nights: 7, stars: 5, meals: "فطور فقط" },
        { name: "Marjan Plaza", price: 579, singlePrice: 779, nights: 7, stars: 5, meals: "فطور فقط" },
        { name: "Ramada By Wyndham", price: 599, singlePrice: 799, nights: 7, stars: 5, meals: "فطور فقط" },
        { name: "Preference Hualing", price: 599, singlePrice: 799, nights: 7, stars: 5, meals: "فطور فقط" },
        { name: "Royal Tulip with Casino", price: 629, singlePrice: 829, nights: 7, stars: 5, meals: "فطور فقط" },
        { name: "Pullman Tbilisi", price: 749, singlePrice: 949, nights: 7, stars: 5, meals: "فطور فقط" },
    ],
    // ⭐️⭐️ البيانات الجديدة لـ "باتومي وتبليسي" (8 ليالي) ⭐️⭐️
    batumiTbilisi: [
        { nameTbilisi: "Shine Palace", nameBatumi: "Skyline", price: 399, meals: "بدون فطور", roomType: "ستاندرد", stars: 3, singlePrice: 479, nights: 8 },
        { nameTbilisi: "Shine Palace", nameBatumi: "Skyline", price: 449, meals: "فطور فقط", roomType: "ستاندرد", stars: 3, singlePrice: 499, nights: 8 },
        { nameTbilisi: "Redline (Marjan city center)", nameBatumi: "Legacy", price: 469, meals: "فطور فقط", roomType: "ستاندرد", stars: 4, singlePrice: 529, nights: 8 },
        { nameTbilisi: "Redline (Marjan city center)", nameBatumi: "Wyn Residences", price: 479, meals: "فطور فقط", roomType: "ستاندرد", stars: 4, singlePrice: 599, nights: 8 },
        { nameTbilisi: "Carousel (Marjan city center)", nameBatumi: "Legacy", price: 489, meals: "فطور فقط", roomType: "ستاندرد", stars: 4, singlePrice: 629, nights: 8 },
        { nameTbilisi: "Carousel (Marjan city center)", nameBatumi: "Wyn Residences", price: 499, meals: "فطور فقط", roomType: "ستاندرد", stars: 4, singlePrice: 699, nights: 8 },
        { nameTbilisi: "Redline (Marjan city center)", nameBatumi: "Steps Batumi", price: 519, meals: "فطور فقط", roomType: "ستاندرد", stars: 4, singlePrice: 599, nights: 8 },
        { nameTbilisi: "Carousel (Marjan city center)", nameBatumi: "Steps Batumi", price: 529, meals: "فطور فقط", roomType: "ستاندرد", stars: 4, singlePrice: 629, nights: 8 },
        { nameTbilisi: "Ramada By Wyndham", nameBatumi: "Steps Batumi", price: 549, meals: "فطور فقط", roomType: "ستاندرد", stars: 5, singlePrice: 779, nights: 8 },
        { nameTbilisi: "Royal Tulip Hotel & Casino", nameBatumi: "Steps Batumi", price: 579, meals: "فطور فقط", roomType: "ستاندرد", stars: 5, singlePrice: 799, nights: 8 },
        { nameTbilisi: "Royal Tulip Hotel & Casino", nameBatumi: "The Grandeur", price: 629, meals: "فطور فقط", roomType: "ستاندرد", stars: 5, singlePrice: 829, nights: 8 },
        { nameTbilisi: "Royal Tulip Hotel & Casino", nameBatumi: "JRW Welmond", price: 679, meals: "فطور فقط", roomType: "ستاندرد", stars: 5, singlePrice: 829, nights: 8 }
    ]
};



// =======================================================
// ثانياً: وظائف التنقل
// =======================================================

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
}

// =======================================================
// ثالثاً: وظائف الحساب
// =======================================================

const generateStars = (count) => "⭐".repeat(count);

/**
 * دالة حساب السعر للمدن ذات التسعير المتحرك (اسطنبول، أنطاليا، القاهرة، بيروت، طرابزون)
 */
function calculateTripPrice(city) {
    if (city === 'batumi' || city === 'tbilisi' || city === 'batumiTbilisi') return;

    const hotelSelect = document.getElementById(`${city}-hotel`);
    const nightsElement = document.getElementById(`${city}-nights`); 
    const peopleCountInput = document.getElementById(`${city}-people-count`);
    const resultBox = document.getElementById(`${city}-result`);

    const hotelIndex = parseInt(hotelSelect.value);
    const nights = parseInt(nightsElement.value);
    const peopleCount = parseInt(peopleCountInput.value) || 0;

    if (hotelIndex === 0 || isNaN(nights) || peopleCount === 0 || nights < 1) {
        resultBox.style.display = 'none';
        checkFormValidity(city);
        return;
    }

    const selectedHotel = hotelPrices[city][hotelIndex - 1];
    const basePrices = BASE_PRICES[city];

    let totalCostPerPerson;
    let hotelCost;

    if (city === 'beirut') {
        const dailyCost = selectedHotel.totalDailyCost;
        hotelCost = dailyCost * nights;
        totalCostPerPerson = hotelCost + basePrices.totalBase;
    } else if (city === 'trabzon') {
        const nightsKey = nights.toString();
        hotelCost = selectedHotel.pricesByNights[nightsKey];
        
        if (typeof hotelCost === 'undefined') {
            resultBox.innerHTML = `<p>خطأ: سعر الإقامة غير محدد لـ ${nights} ليالٍ في هذا الفندق. الرجاء اختيار عدد ليالي متوفر.</p>`;
            resultBox.style.display = 'block';
            checkFormValidity(city);
            return;
        }
        totalCostPerPerson = hotelCost + basePrices.totalBase;
    } else {
        hotelCost = selectedHotel.pricePerNight * nights;
        totalCostPerPerson = hotelCost + basePrices.totalBase;
    }

    const totalPrice = totalCostPerPerson * peopleCount;

    resultBox.innerHTML = `
        <h3>ملخص طلب ${city.toUpperCase()}</h3>
        <div class="result-row">
            <span>السعر للشخص الواحد:</span> <strong>${totalCostPerPerson.toFixed(2)} دينار</strong>
        </div>
        <div class="result-row">
         
        </div>
        <div class="result-row">
            
        </div>
        <div class="result-row result-note">
            <small>*يشمل السعر الإجمالي تكلفة الرحلة الأساسية (طيران ومواصلات) والإقامة (${nights} ليالي). الأسعار تقديرية وقد تختلف حسب تاريخ السفر.</small>
        </div>
    `;
    resultBox.style.display = 'block';

    checkFormValidity(city);
}


/**
 * دالة حساب السعر للمدن ذات التسعير الثابت (باتومي، تبليسي، باتومي وتبليسي المدمجة)
 */
function calculateFixedTripPrice(city) {
    if (city === 'trabzon') return; 

    // ⭐️ تحديد الـ ID الصحيح (باتومي تستخدم hotel، والباقي option) ⭐️
    let hotelSelectId = `${city}-hotel`; 
    if (city === 'tbilisi' || city === 'batumiTbilisi') {
        hotelSelectId = `${city}-option`;
    }
    
    const hotelSelect = document.getElementById(hotelSelectId);
    const peopleCountInput = document.getElementById(`${city}-people-count`);
    const resultBox = document.getElementById(`${city}-result`);
    
    const optionIndex = parseInt(hotelSelect.value);
    const peopleCount = parseInt(peopleCountInput.value) || 0;
    
    if (optionIndex === 0 || peopleCount === 0 || peopleCount < 1) {
        resultBox.style.display = 'none';
        checkFormValidity(city); 
        return;
    }
    
    const selectedOffer = hotelPrices[city][optionIndex - 1]; 
    let pricePerPerson;

    // استخدام سعر الـ singlePrice إذا كان العدد 1 (غرفة مفردة)
    if (peopleCount === 1 && selectedOffer.singlePrice) {
        pricePerPerson = selectedOffer.singlePrice;
    } else {
        pricePerPerson = selectedOffer.price;
    }

    const totalPrice = pricePerPerson * peopleCount;
    const nights = selectedOffer.nights; 

    resultBox.innerHTML = `
        <h3>ملخص طلب ${city.toUpperCase()}</h3>
        <div class="result-row">
            <span>السعر للشخص الواحد:</span> <strong>${pricePerPerson.toFixed(2)} دينار</strong>
        </div>
        <div class="result-row">
            <span>عدد الأشخاص:</span> <strong>${peopleCount}</strong>
        </div>
        <div class="result-row">
            <span>السعر الإجمالي:</span> <strong>${totalPrice.toFixed(2)} دينار</strong>
        </div>
        <div class="result-row result-note">
            <small>*يشمل السعر إقامة ${nights} ليالٍ، وطيران دولي، وتأمين صحي، ومواصلات. الأسعار تقديرية وقد تختلف.</small>
        </div>
    `;
    resultBox.style.display = 'block';

    checkFormValidity(city); 
}

// =======================================================
// رابعاً: وظائف التحقق من صحة النموذج (Validation)
// =======================================================

/**
 * دالة عامة للتحقق من صحة حقول نموذج مدينة
 */
function checkFormValidity(city) {
    // تحديد ما إذا كانت المدينة تعتمد على تسعير ثابت
    const isFixedPrice = ['batumi', 'tbilisi', 'batumiTbilisi'].includes(city);
    // تحديد ما إذا كانت المدينة لديها ليالي محددة (طرابزون)
    const isRestrictedNights = city === 'trabzon';
    
    // تحديد الـ IDs بناءً على نوع المدينة
    let hotelSelectId = `${city}-hotel`;
    if (city === 'tbilisi' || city === 'batumiTbilisi') {
        hotelSelectId = `${city}-option`;
    }
    
    const hotelSelect = document.getElementById(hotelSelectId);
    const dateInput = document.getElementById(`${city}-date`);
    const peopleCountInput = document.getElementById(`${city}-people-count`);
    const phoneInput = document.getElementById(`${city}-phone`);
    const sendButton = document.getElementById(`${city}-send-btn`);
    const nightsInput = document.getElementById(`${city}-nights`);

    // الشروط المشتركة
    const isValidShared = hotelSelect && hotelSelect.value !== '0' && 
                          dateInput && dateInput.value !== '' && 
                          peopleCountInput && parseInt(peopleCountInput.value) >= 1 && 
                          phoneInput && phoneInput.value.length > 5;

    let isNightsValid = true;
    
    // التحقق من الليالي للمدن التي تحتاجها
    if (!isFixedPrice) {
        if (isRestrictedNights) {
            isNightsValid = nightsInput && nightsInput.value !== '0';
        } else {
            isNightsValid = nightsInput && parseInt(nightsInput.value) >= 1;
        }
    }
    
    const isValidForm = isFixedPrice ? isValidShared : (isValidShared && isNightsValid);

    if (sendButton) {
        sendButton.disabled = !isValidForm;
    }
}


// =======================================================
// خامساً: وظائف تعبئة البيانات
// =======================================================


/**
 * تعبئة القوائم المنسدلة للفنادق (للمدن المتحركة)
 */
function populateHotelsDropdowns() {
    const citiesForCalc = ['istanbul', 'antalya', 'cairo', 'beirut', 'trabzon'];
    citiesForCalc.forEach(city => {
        const dropdown = document.getElementById(`${city}-hotel`);
        if (!dropdown) return;
        
        const placeholderText = city === 'antalya' ? 'اختر منتجعاً' : 'اختر فندقاً';
        dropdown.innerHTML = `<option value="0" disabled selected>${placeholderText}</option>`;

        hotelPrices[city].forEach((hotel, index) => {
            const option = document.createElement('option');
            option.value = index + 1; // القيمة تبدأ من 1 لأن 0 محجوزة لـ disabled
            const hotelName = hotel.name.trim();
            const starRating = generateStars(hotel.stars || 0);
            
            // ⭐️⭐️ تم إزالة السعر من اسطنبول، أنطاليا، والقاهرة كما طلب سابقاً ⭐️⭐️
            if (city === 'beirut') {
                 // بيروت: إظهار السعر اليومي لأنها باقة يومية ثابتة
                 option.textContent = `${hotelName} ${starRating} | ${hotel.totalDailyCost} دينار/اليوم`;
            } else {
                 // اسطنبول، أنطاليا، القاهرة، طرابزون: إظهار الاسم والنجوم فقط
                 option.textContent = `${hotelName} ${starRating}`;
            }
            // ⭐️⭐️ نهاية التعديل ⭐️⭐️

            dropdown.appendChild(option);
        });

        // ربط الدوال بالتغيير
        dropdown.addEventListener('change', () => calculateTripPrice(city));
        
        // ربط الليالي بالـ Trabzon
        if (city === 'trabzon') {
            document.getElementById('trabzon-nights').addEventListener('change', () => calculateTripPrice('trabzon'));
        }
    });
}

/**
 * دالة لتعبئة جدول أسعار الباقات الثابتة (باتومي، تبليسي)
 */
function populateFixedPricesTable(city) {
    const container = document.getElementById(`${city}-prices-table-container`);
    const dropdown = document.getElementById(`${city}-option`);
    if (!container || !dropdown) return;

    let tableHTML = `
        <div class="trip-details-box">
            <h4>تفاصيل باقات ${city.toUpperCase()} (7 ليالٍ)</h4>
            <p>يشمل السعر (للفرد في الغرفة المزدوجة/الثلاثية): طيران دولي، إقامة، وجبات محددة، مواصلات داخلية وجولات سياحية.</p>
        </div>
        <table class="prices-table">
            <thead>
                <tr>
                    <th>الفندق</th>
                    <th>النجوم</th>
                    <th>وجبات الطعام</th>
                    <th>السعر الأساسي (دينار)</th>
                </tr>
            </thead>
            <tbody>
    `;

    dropdown.innerHTML = `<option value="0" disabled selected>اختر فندقاً من الجدول أعلاه</option>`;

    hotelPrices[city].forEach((option, index) => {
        const optionValue = index + 1;
        const starDisplay = `<span class="star-rating">${generateStars(option.stars)}</span>`;
        
        tableHTML += `
            <tr>
                <td>${option.name}</td>
                <td>${starDisplay}</td>
                <td>${option.meals}</td>
                <td><strong>${option.price.toFixed(2)}</strong></td>
            </tr>
        `;

        const optionElement = document.createElement('option');
        optionElement.value = optionValue;
        optionElement.textContent = `${option.name} - ${option.meals} (السعر: ${option.price} دينار)`;
        dropdown.appendChild(optionElement);
    });

    tableHTML += '</tbody></table>';
    container.innerHTML = tableHTML;
    dropdown.addEventListener('change', () => calculateFixedTripPrice(city));
}

function populateBatumiPrices() {
    populateFixedPricesTable('batumi');
}
function populateTbilisiPrices() {
    populateFixedPricesTable('tbilisi');
}


/**
 * ⭐️⭐️ تعبئة أسعار الباقة المدمجة (باتومي وتبليسي) ⭐️⭐️
 */
function populateBatumiTbilisiPrices() {
    const city = 'batumiTbilisi';
    const container = document.getElementById(`${city}-prices-table-container`);
    const dropdown = document.getElementById(`${city}-option`);
    if (!container || !dropdown) return;

    let tableHTML = `
        <div class="trip-details-box">
            <h4>تفاصيل باقة باتومي وتبليسي المدمجة (9 أيام / 8 ليالي)</h4>
            <p>يشمل السعر (للفرد في الغرفة المزدوجة/الثلاثية): طيران دولي، 4 ليالي باتومي و 4 ليالي تبليسي، تنقلات و جولات سياحية.</p>
        </div>
        <table class="prices-table">
            <thead>
                <tr>
                    <th>فندق باتومي</th>
                    <th>فندق تبليسي</th>
                    <th>وجبات الطعام</th>
                    <th>السعر للشخص (دينار)</th>
                </tr>
            </thead>
            <tbody>
    `;

    dropdown.innerHTML = `<option value="0" disabled selected>اختر باقة من الجدول أعلاه</option>`;

    hotelPrices.batumiTbilisi.forEach((option, index) => {
        const optionValue = index + 1;
        const starDisplay = `<span class="star-rating">${generateStars(option.stars)}</span>`;
        
        tableHTML += `
            <tr>
                <td>${option.nameBatumi}</td>
                <td>${option.nameTbilisi}</td>
                <td>${option.meals}</td>
                <td><strong>${option.price.toFixed(2)}</strong></td>
            </tr>
        `;

        const optionElement = document.createElement('option');
        optionElement.value = optionValue;
        optionElement.textContent = `${option.nameBatumi} و ${option.nameTbilisi} - ${option.meals} (السعر: ${option.price} دينار)`;
        dropdown.appendChild(optionElement);
    });

    tableHTML += '</tbody></table>';
    container.innerHTML = tableHTML;
    dropdown.addEventListener('change', () => calculateFixedTripPrice(city));
}


/**
 * دالة عامة لتعبئة صندوق التفاصيل لكل رحلة
 */
function populateTripDetails(city) {
    const detailsBox = document.getElementById(`${city}-trip-details-box`);
    if (!detailsBox) return;

    let listItems = '';
    
    if (city === 'istanbul' || city === 'antalya' || city === 'trabzon' || city === 'cairo' || city === 'beirut') {
        listItems = `
            <li>تذكرة طيران ذهاب وعودة</li>
            <li>جولات سياحية منظمة ومواصلات</li>
            <li>تأمين صحي للسفر</li>
        `;
    } else if (city === 'batumi' || city === 'tbilisi' || city === 'batumiTbilisi') {
        listItems = `
            <li>تذكرة طيران ذهاب وعودة</li>
            <li>إقامة في فنادق (حسب الباقة المختارة)</li>
            <li>جولات سياحية منظمة ومواصلات</li>
            <li>تأمين صحي للسفر</li>
        `;
    }

    detailsBox.innerHTML = `
        <h4>السعر يشمل:</h4>
        <ul>
            ${listItems}
        </ul>
    `;
}

// =======================================================
// سادساً: وظائف الإرسال (واتساب)
// =======================================================

/**
 * دالة عامة لإرسال الطلب عبر الواتساب (لجميع المدن العادية)
 */
function sendInquiryEmail(city) {
    
    // تحديد الـ IDs بناءً على نوع المدينة
    let hotelSelectId = `${city}-hotel`;
    if (city === 'tbilisi' || city === 'batumiTbilisi') {
        hotelSelectId = `${city}-option`;
    }
    
    const hotelSelect = document.getElementById(hotelSelectId);
    const dateInput = document.getElementById(`${city}-date`);
    const peopleCountInput = document.getElementById(`${city}-people-count`);
    const phoneInput = document.getElementById(`${city}-phone`);
    const nightsInput = document.getElementById(`${city}-nights`);
    const resultBox = document.getElementById(`${city}-result`);

    const hotelName = hotelSelect ? hotelSelect.options[hotelSelect.selectedIndex].text : 'غير محدد';
    const date = dateInput ? dateInput.value : 'غير محدد';
    const peopleCount = peopleCountInput ? peopleCountInput.value : 'غير محدد';
    const phoneNumber = phoneInput ? phoneInput.value : 'غير محدد';
    
    let nights = 'غير محدد';
    if (nightsInput) {
        nights = nightsInput.value;
    } else if (city === 'batumi' || city === 'tbilisi' || city === 'batumiTbilisi') {
        const optionIndex = parseInt(hotelSelect.value);
        if (optionIndex > 0) {
            nights = hotelPrices[city][optionIndex - 1].nights;
        }
    }


    let finalPrice = 'غير محدد';
    const priceElement = resultBox.querySelector('.result-row strong');
    if (priceElement) {
        finalPrice = priceElement.textContent.trim();
    }

    // ⚠️⚠️ رقم الواتساب الافتراضي (الرجاء تغييره) ⚠️⚠️
    const whatsappNumber = "962777938441"; 
    
    const message = `
*طلب حجز رحلة سياحية*

*المدينة:* ${city.toUpperCase()}
*الفندق:* ${hotelName}
*عدد الأشخاص:* ${peopleCount}
*عدد الليالي:* ${nights}
*تاريخ السفر المطلوب:* ${date}
*السعر المحتسب للشخص:* ${finalPrice}

*رقم هاتف العميل:* ${phoneNumber}

الرجاء التواصل معي لتأكيد الحجز. شكراً.
    `;

    const encodedMessage = encodeURIComponent(message.trim());
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappLink, '_blank');
}



// =======================================================
// ثامناً: وظائف مساعدة للتاريخ والتهيئة
// =======================================================

function isFriday(dateString) {
    const date = new Date(dateString);
    return date.getDay() === 5;
}

function getNextFriday(minDays = 2) {
    const today = new Date();
    today.setDate(today.getDate() + minDays);
    let date = today;
    const day = date.getDay(); // 0 for Sunday, 5 for Friday
    const diff = (5 - day + 7) % 7;
    date.setDate(date.getDate() + diff);
    return date.toISOString().split('T')[0];
}


/**
 * تطبيق تاريخ اليوم كحد أدنى لتاريخ السفر
 * (تم تعديل هذه الدالة لإصلاح مشكلة زر العمرة فقط)
 */
function setMinDateForInputs() {
    const today = new Date().toISOString().split('T')[0];
    const minDate = today; 

    document.querySelectorAll('input[type="date"]').forEach(input => {
        input.setAttribute('min', minDate);

        // تطبيق قيد الجمعة على تبليسي فقط
        if (input.id === 'tbilisi-date') {
            input.addEventListener('change', (event) => {
                const selectedDate = event.target.value;
                if (selectedDate && !isFriday(selectedDate)) {
                    alert('لرحلات تبليسي، يجب اختيار يوم الجمعة للسفر.');
                    event.target.value = getNextFriday(); 
                    checkFormValidity('tbilisi');
                }
            });
            const nextFriday = getNextFriday(2); 
            input.setAttribute('min', nextFriday);
            input.value = nextFriday; 
        }
    });
    
    
}


document.addEventListener('DOMContentLoaded', () => {
    showPage('home-page');

    setMinDateForInputs(); 

    // تعبئة القوائم والجداول
    populateHotelsDropdowns();
    populateBatumiPrices();
    populateTbilisiPrices();
    
    
    // ⭐️⭐️ استعادة استدعاءات populateTripDetails المفقودة لجميع المدن ⭐️⭐️
    populateTripDetails('istanbul');
    populateTripDetails('antalya');
    populateTripDetails('trabzon');
    populateTripDetails('cairo');
    populateTripDetails('beirut');
    populateTripDetails('batumi');
    populateTripDetails('tbilisi');
    populateTripDetails('batumiTbilisi');
    // ⭐️⭐️ نهاية الاستعادة ⭐️⭐️
    
    // تحديث النتائج الأولية
    setTimeout(() => {
        calculateTripPrice('istanbul');
        calculateTripPrice('antalya');
        calculateTripPrice('trabzon');
        calculateTripPrice('cairo'); 
        calculateTripPrice('beirut'); 
        
        calculateFixedTripPrice('batumi');
        calculateFixedTripPrice('tbilisi');
        // حساب السعر الجديد 
        calculateFixedTripPrice('batumiTbilisi');
    }, 100); 

    // تطبيق التحقق الأولي لجميع المدن
    checkFormValidity('istanbul'); 
    checkFormValidity('antalya'); 
    checkFormValidity('cairo'); 
    checkFormValidity('beirut'); 
    checkFormValidity('trabzon');
    checkFormValidity('batumi');
    checkFormValidity('tbilisi');
    checkFormValidity('batumiTbilisi');
    
});