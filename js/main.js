
// هنا مسكت دف زيرو
let zero = document.getElementById('zero')
// هنا مسكت دف جايلد الي هو ابن الدف زيروو 
let child = document.getElementById('child');



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
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/// عملت فكشن لعرض مصفوفة البيززا في شهد 2 دف
function displayallPizza() { 
    ///عملت متغير كارتوتة 
    let cartona = " ";
    //// اعمل فورر لووب لان عندي اكثر من عنصر في مصفوفة البيززاا
    //اخذت فقط 6 عناصر من اجل شكل الموقع 
    // اما البقية فتكون في صفحة ثانية
    
    for(let i = 0; i < allPizza.length; i++) {
        cartona+= 
        /// هنا راح استخدم بيك تيب حتى اضع كود اج تي ام ايل في الجافا سكربت 
        `
        <div class="col-md-3 mb-3" onclick="getPizzaById('${allPizza[i].recipe_id}')">
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

 ///// هنا اعمل فكشن تعرضلي المصفوفة بيززا عن طريق الاي دي
 async function getPizzaById(id) {
    /// هنا اتصلت ب اي بي اي  واجلب كل البياتات الخاصة بال اي دي

let c = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${id}`);
/// هنا احول البيانات الي اجت الى مصفوفة حتى يسهل القراءة 

let b = await c.json();
//هنا استدعي فقط الريسبشن من اي بي اي واضعها في مصفوفة ال اي دي

let element = b.recipe;
/// هنا طبعتها

console.log(element);
// هنا استدعي فكشن العرض
displayPizzaById(element)


//بعدها اضهر الدف زيروو الي موجود داخله الجايلد 
// الي يحيتوي على الكارتونة الي بيها المحتويات 
// الي جبتها عن طريق الاي دي 

zero.style.visibility = 'visible';
// ايضا وضعت لون الخلفية للجايلد دف
child.style.backgroundColor = "#eee"
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// عملت فكشن عشان اعرض الكارتونة في دف جايلد 
// بمتغير اليمنت الي هو نفسة المصفوفة اول بيززا
function displayPizzaById(elementid) {
    
/// اول مرة اضعها في متفير كارتونة 2

let cartona = 
`
<div class="col-md-12" id="saly">
<img src="${elementid.image_url}" style="width:100%; height: 250px" class="mb-3">
<h2 class="mb-1"> ${elementid.title}</h2>
<p class="mb-">${elementid.publisher}</p>
<a href="${elementid.source_url}" class="text-warning mb-2">more info </a>
<ul> 
`
// هنا ايضا احضر الانكريدنتس الي هي مصفوفة داخل المصفوفة الام 
// واجلبها على شكل قائمة واضعها مرة اخرى في الكارتونة
for(let i = 0 ; i < elementid.ingredients.length; i++) {
 cartona+=`<li class="pb-2 list-unstyled">${elementid.ingredients[i]}</li>`
}
    `
    </ul>
    </div>
    `
    /// اضع الكارتونة في دف جايلد دف
 child.innerHTML = cartona;







///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// هنا مسكت الايقونة الي على اليسار داخل زيروو دف 
let left = document.getElementById('left');
// هنا مسكت الايقونة الي على اليمين داخل زيروو دف
let right = document.getElementById('right');

// اضهرهن مع الزيرو دف

    right.style.visibility = 'visible';
    left.style.visibility = "visible";

    // اعمل متغير يتماشى مع المصفوفة اوول بيززا
let counter =0;

// عند النقر على رايت طبقلي الفكشن
right.addEventListener("click", nextright)
function nextright() {
    // اضل ازيد المتغير
    counter++;
// احط شرط اذا وصلت للنهاية ارجع للاول صورة
if(counter == elementid) {

    counter =0;  
}
// بعدها اضعها في الكارتونة
cartona =
`
<div class="col-md-12" id="saly">
<img src="${allPizza[`${counter}`].image_url}" style="width:100%; height: 250px" class="mb-3">
<h2 class="mb-1"> ${allPizza[`${counter}`].title}</h2>
<p class="mb-">${allPizza[`${counter}`].publisher}</p>
<a href="${allPizza[`${counter}`].source_url}" class="text-warning mb-2">more info </a>
<ul> 
`
// هنا ايضا احضر الانكريدنتس الي هي مصفوفة داخل المصفوفة الام 
// واجلبها على شكل قائمة واضعها مرة اخرى في الكارتونة


for( i = 0 ; i < elementid.ingredients.length; i++) {
     
 cartona+= `<li class="pb-2 list-unstyled">${elementid.ingredients[`${counter}`]}</li>`
 counter++;

}
    `
    </ul>

    </div>
   `
child.innerHTML = cartona
}

left.addEventListener("click", prevLeft)

// عند النقر على رايت طبقلي الفكشن

function prevLeft() {
    // انقص المتغيير
    counter--;

    // اضع شرط اذا وصل اصغر من الصفر ارجع لاخر صورة
    if(counter < 0) {
    
        counter = elementid;  
    }
    // اضعها في الكاراونة
    cartona =
    `
    <div class="col-md-12" id="saly">
    <img src='${allPizza[`${counter}`].image_url}' style="width:100%; height: 250px" class="mb-3">
    <h2 class="mb-1"> ${allPizza[`${counter}`].title}</h2>
    <p class="mb-">${allPizza[`${counter}`].publisher}</p>
    <a href="${allPizza[`${counter}`].source_url}" class="text-warning mb-2">more info </a>
    <ul> 
    `
    // هنا ايضا احضر الانكريدنتس الي هي مصفوفة داخل المصفوفة الام 
    // واجلبها على شكل قائمة واضعها مرة اخرى في الكارتونة
    
    for( i = 0 ; i< elementid.ingredients.length; i++) {       
     cartona+=`<li class="pb-2 list-unstyled">${elementid.ingredients[`${counter}`]}</li>`
     counter++; 
    }
        `
        </ul>
    
        </div>
       `
    child.innerHTML = cartona
} 
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




}
// مسكت الايفونة كلوس الي اعمل بها فكشن
// عندما اضغط عليها يختفي زيروو دف الاب 
// الي شايل كل المحتويات الجاية عن طريق الاي دي
let closee = document.getElementById('close');
// هنا عملت الحدث الي هو كليك اي الدوسة
closee.addEventListener('click', closeDisplay);
// هنا عملت الفكشن الي استدعيتها بالحدث
function closeDisplay(){
// وضعت هيدن للفايسبلتي حتى يختفي زيروو الدف الاب
zero.style.visibility = "hidden";
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// سوف اعمل في الجيكويري

// هنا اجد مدى بعد شريحة الاباوت عن بداية الصفحة
let x = $('.about').offset().top;  
// هنا كل ما اعمل سكروول نفذلي فكشن
 $(window).scroll(function() {
    //  هنا احسب بعد السكروول عن بداية الصفحة
 let y = $(window).scrollTop();
//  اكول للناف تضبف كلاس بيجي كلر  الي يغيرلي لون خلفية الناف فقط في حالة 
// بغد السكروول بكون اكبر من بعد الشريحة الاباوت
         $('.nav').toggleClass('bgcolor', y > x)

 })

 // هنا اجد مدى بعد شريحة الريفيوو عن بداية الصفحة
 let c = $('.revio').offset().top;
 // هنا كل ما اعمل سكروول نفذلي فكشن

 $(window).scroll(function() {
         //  هنا احسب بعد السكروول عن بداية الصفحة من فوق
 let y = $(window).scrollTop();
 //  اكول للناف تضبف  كلاس في اي الي حيظهرلي البوتن فقط في حالة 
// بغد السكروول بكون اكبر من بعد الشريحة الريفيوو
         $('.extra').toggleClass('ve', y > c)
         $(".extra").click(function(){
             $("html").animate({scrollTop: "0"})
         })

 })


$("a[href^='#']").click(function(e) {
    let x_href = $(e.target).attr("href");
    let ahref = $(x_href).offset().top;
    $("body, html").animate({scrollTop : ahref}, 2000)
})

