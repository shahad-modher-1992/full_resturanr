
//// اعمل مصفوفة خاصة بالشي الي ابحث عنه
let allPizza = [];
///هنا اعمل اساينك فكشن
async function getPizza() {
/// هنا اتصلت ب اي بي اي  واجلب كل البياتات الخاصة بالبيتزا
let allresips = await fetch(`https://forkify-api.herokuapp.com/api/search?&q=pizza`)
/// هنا احول البيانات الي اجت الى مصفوفة حتى يسهل القراءة 
let allresipsJson= await allresips.json();
///  هنا استدعي فقط الريسبشن من اي بي اي واضعها في مصفوفة البيززا
allPizza = allresipsJson.recipes;
/// هنا طبعتها في الكونسل
console.log(allPizza);
/// استدعاء فكشن العرض

displayallPizza()
}

/// عملت فكشن لعرض مصفوفة البيززا في شهد 2 دف
function displayallPizza() { 
    ///عملت متغير كارتوتة 
    let cartona = " ";
    //// اعمل فورر لووب لان عندي اكثر من عنصر في مصفوفة البيززاا
    for(let i = 0; i < allPizza.length; i++) {
        cartona+= 
        /// هنا راح استخدم بيك تيب حتى اضع كود اج تي ام ايل في الجافا سكربت 
        `
        <div class="col-md-4 mb-3">
        <img src='${allPizza[i].image_url}' style="height:250px ;width:100%" class="img-fluid">
        <h2 class="my-2 text-secondary"> ${allPizza[i].title}</h2>
        <p class="mb-2 lead">${allPizza[i].publisher}</p>
        <a href="${allPizza[i].source_url}" class="mb-2 text-warning">detalies </a>
        </div>
        `
    }
    //هنا مسكت دف شهد
    let shahad = document.getElementById('shahad')
    //هنا اضع الكارتونة في الدف شهد
    shahad.innerHTML = cartona;
 }
 ////هتا استدعي الفكشن الي تعمل كل الشغل
 getPizza()


//  مسكت الانبت الي اعمل فيه السيرج
let inputName = document.getElementById('inputname');

// اعمل حدذ الي هو اول ما ارفع ايدي من الكيبورد ينفذلي فكشن
inputName.addEventListener('keyup', function() {
// الفكشن تتطبق على الانبت الي موجود في الصفحة
searchInArray(inputName.value)
})

// عملت فكشن بمتغير الي هو قيمة الانبت 
function searchInArray(search) {
///عملت متغير كارتوتة 
let cartona = " ";

//// اعمل فورر لووب لان عندي اكثر من عنصر في مصفوفة البيززاا

for(let i = 0; i < allPizza.length; i++) {

    // هنا ابحث في العنوان لكل وجبة او مصفوفة 
    // اذا كان مطابق مع الانبت فاليو 
    // يعرضلي الكارتونة في الدف شهد فقط المطابقة
    // مع تحويل الانبت فاليو والعنوان في المصفوفة 
    // الى حروف صغيرة حتى لا تخرجلي هذه المشاكل في البحث

    if(allPizza[i].title.toLowerCase().includes(search.toLowerCase())) {
        cartona+= 
        /// هنا راح استخدم بيك تيب حتى اضع كود اج تي ام ايل في الجافا سكربت
    
        `
        <div class="col-md-4 mb-3">
        <img src='${allPizza[i].image_url}' style="height:250px ;width:100%" class="img-fluid">
        <h2 class="my-2 text-secondary"> ${allPizza[i].title}</h2>
        <p class="mb-2 lead">${allPizza[i].publisher}</p>
        <a href="${allPizza[i].source_url}" class="mb-2 text-warning">detalies </a>
        </div>
        `
    }
   
}
//هنا مسكت دف شهد
let shahad = document.getElementById('shahad')
//هنا اضع الكارتونة في الدف شهد
shahad.innerHTML = cartona;
}


// هنا اجد مدى بعد شريحة السيرج عن بداية الصفحة
let x = $('#search').offset().top;  
// هنا كل ما اعمل سكروول نفذلي فكشن
 $(window).scroll(function() {
    //  هنا احسب بعد السكروول عن بداية الصفحة
 let y = $(window).scrollTop();
//  اكول للناف تضبف كلاس بيجي كلر  الي يغيرلي لون خلفية الناف فقط في حالة 
// بغد السكروول بكون اكبر من بعد الشريحة السيرج
         $('.nav').toggleClass('bgcolor', y > x)

 })