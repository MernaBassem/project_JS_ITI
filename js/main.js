document.addEventListener('scroll', () => {
    var a = document.getElementById('link');
    if (window.scrollY > 150) {
        a.classList.add("scrolled");
    }
    else {
        a.classList.remove("scrolled");
    }
})



//slider
var image = document.getElementById("image1");
var arr = [];
arr.push("image/makeUp/5.jpeg");
arr.push("image/car/pexels-photo-170811.jpeg");
arr.push("image/phone/2.webp");
arr.push("image/makeUp/4.jpeg");
arr.push("image/phone/07ml3nh3QrzTLZ9UycfQQB2-52.webp");
arr.push("image/car/3.jpg");

arr.push("image/car/6.jpg");
arr.push("image/makeUp/1.jpg");
arr.push("image/phone/1.webp");
arr.push("image/lab/best-cheap-laptops-646786e23599f.png");
arr.push("image/phone/3.webp");
arr.push("image/makeUp/3.jpg");
arr.push("image/lab/6.jpg");
arr.push("image/car/3.jpeg");
arr.push("image/lab/4.webp");

var index = 0;

var play_imag = function () {
    index = (index + 1)%arr.length;
    image.src = arr[index];
}


setInterval(
    play_imag, 2000
)

function back() {
    index = (index - 1 + arr.length)%arr.length;
    image.src = arr[index];
  
}

function next2() {
    index = (index + 1)%arr.length;
    image.src = arr[index];
    

}




// change profolio

var lab_item = document.getElementById("pro_lab");
var car_item = document.getElementById("pro_car");
var phone_item = document.getElementById("pro_phone");
var makeup_item = document.getElementById("pro_makeup");


var lab_info = document.getElementById("lab_info");
var phone_info = document.getElementById("phone_info");
var car_info = document.getElementById("car_info");
var makeup_info = document.getElementById("makeup_info");

/////////////////////////
////////////////////////////////




function lab() {
    lab_item.style.display = "block";
    car_item.style.display = "none";
    phone_item.style.display = "none";
    makeup_item.style.display = "none";

    lab_info.classList.add("active");
    phone_info.classList.remove("active");
    car_info.classList.remove("active");
    makeup_info.classList.remove("active");
}

function phone() {
    lab_item.style.display = "none";
    car_item.style.display = "none";
    phone_item.style.display = "block";
    makeup_item.style.display = "none";

    lab_info.classList.remove("active");
    phone_info.classList.add("active");
    car_info.classList.remove("active");
    makeup_info.classList.remove("active");

}

function car() {
    lab_item.style.display = "none";
    car_item.style.display = "block";
    phone_item.style.display = "none";
    makeup_item.style.display = "none";

    lab_info.classList.remove("active");
    phone_info.classList.remove("active");
    car_info.classList.add("active");
    makeup_info.classList.remove("active");
}

function makeup() {
    lab_item.style.display = "none";
    car_item.style.display = "none";
    phone_item.style.display = "none";
    makeup_item.style.display = "block";

    lab_info.classList.remove("active");
    phone_info.classList.remove("active");
    car_info.classList.remove("active");
    makeup_info.classList.add("active");
}

var All_img = Array.from(document.querySelectorAll("#category .container img"));
var imgs_lab = Array.from(document.querySelectorAll("#category .container #pro_lab img"));
var imgs_phone = Array.from(document.querySelectorAll("#category .container #pro_phone img"));
var imgs_car = Array.from(document.querySelectorAll("#category .container #pro_car img"));
var imgs_makeup = Array.from(document.querySelectorAll("#category .container #pro_makeup img"));

var light_box = document.getElementById("light-box");
var light_box1 = document.getElementById("light-box1");
var light_box2 = document.getElementById("light-box2");
var light_box3 = document.getElementById("light-box3");
var box_data = document.getElementById("box-data");
var box_data1 = document.getElementById("box-data1");
var box_data2 = document.getElementById("box-data2");
var box_data3 = document.getElementById("box-data3");
var nextSlider = document.getElementById("next");
var prevSlider = document.getElementById("prev");
var exit = document.getElementById("exit");
var nextSlider1 = document.getElementById("next1");
var prevSlider1 = document.getElementById("prev1");
var exit1 = document.getElementById("exit1");
var nextSlider2 = document.getElementById("next2");
var prevSlider2 = document.getElementById("prev2");
var exit2 = document.getElementById("exit2");
var nextSlider3 = document.getElementById("next3");
var prevSlider3 = document.getElementById("prev3");
var exit3 = document.getElementById("exit3");
var currentIndex = 0;
/////////////////////////////////////

function closeSlide() {
    light_box.classList.add('d-none');
    light_box1.classList.add('d-none');
    light_box2.classList.add('d-none');
    light_box3.classList.add('d-none');
    card.classList.add('d-none');

}


function next() {
    currentIndex++

    if (currentIndex == imgs_lab.length) {
        currentIndex = 0;
    }
    var currentElementSrc = imgs_lab[currentIndex].getAttribute('src');
    box_data.style.backgroundImage = `url(${currentElementSrc})`
    /////////////////////////

    if (currentIndex == imgs_phone.length) {
        currentIndex = 0;
    }
    var currentElementSrc = imgs_phone[currentIndex].getAttribute('src');
    box_data1.style.backgroundImage = `url(${currentElementSrc})`
    /////////
    if (currentIndex == imgs_car.length) {
        currentIndex = 0;
    }
    var currentElementSrc = imgs_car[currentIndex].getAttribute('src');
    box_data2.style.backgroundImage = `url(${currentElementSrc})`
    ///////////////////
    if (currentIndex == imgs_makeup.length) {
        currentIndex = 0;
    }
    var currentElementSrc = imgs_makeup[currentIndex].getAttribute('src');
    box_data3.style.backgroundImage = `url(${currentElementSrc})`



}
function prev() {
    currentIndex--

    if (currentIndex < 0) {
        currentIndex = imgs_lab.length - 1;
    }
    var currentElementSrc1 = imgs_lab[currentIndex].getAttribute('src');
    box_data.style.backgroundImage = `url(${currentElementSrc1})`

    ////////////////////
    if (currentIndex < 0) {
        currentIndex = imgs_phone.length - 1;
    }
    var currentElementSrc = imgs_phone[currentIndex].getAttribute('src');
    box_data1.style.backgroundImage = `url(${currentElementSrc})`
    /////////
    if (currentIndex < 0) {
        currentIndex = imgs_car.length - 1;
    }
    var currentElementSrc = imgs_car[currentIndex].getAttribute('src');
    box_data2.style.backgroundImage = `url(${currentElementSrc})`
    ///////////
    if (currentIndex < 0) {
        currentIndex = imgs_makeup.length - 1;
    }
    var currentElementSrc = imgs_makeup[currentIndex].getAttribute('src');
    box_data3.style.backgroundImage = `url(${currentElementSrc})`



}

for (var i = 0; i < imgs_lab.length; i++) {
    imgs_lab[i].addEventListener("click", function (e) {
        light_box.classList.remove('d-none');
        var curentSrc = e.target.getAttribute('src');
        var currentTarget = e.target;
        currentIndex = imgs_lab.indexOf(currentTarget);
        box_data.style.backgroundImage = `url(${curentSrc})`
    })
}
for (var i = 0; i < imgs_phone.length; i++) {
    imgs_phone[i].addEventListener("click", function (e) {
        light_box1.classList.remove('d-none');
        var curentSrc = e.target.getAttribute('src');
        var currentTarget = e.target;
        currentIndex = imgs_phone.indexOf(currentTarget);
        box_data1.style.backgroundImage = `url(${curentSrc})`
    })
}
for (var i = 0; i < imgs_car.length; i++) {
    imgs_car[i].addEventListener("click", function (e) {
        light_box2.classList.remove('d-none');
        var curentSrc = e.target.getAttribute('src');
        var currentTarget = e.target;
        currentIndex = imgs_car.indexOf(currentTarget);
        box_data2.style.backgroundImage = `url(${curentSrc})`
    })
}
for (var i = 0; i < imgs_makeup.length; i++) {
    imgs_makeup[i].addEventListener("click", function (e) {
        light_box3.classList.remove('d-none');
        var curentSrc = e.target.getAttribute('src');
        var currentTarget = e.target;
        currentIndex = imgs_makeup.indexOf(currentTarget);
        box_data3.style.backgroundImage = `url(${curentSrc})`
    })
}


/////////////////////////////////////////
//////////////////////////////////////////////////

exit.addEventListener('click', function () {
    closeSlide();
})

nextSlider.addEventListener('click', function () {
    next();
})

prevSlider.addEventListener('click', function () {
    prev();
})

exit1.addEventListener('click', function () {
    closeSlide();
})

nextSlider1.addEventListener('click', function () {
    next();
})

prevSlider1.addEventListener('click', function () {
    prev();
})
exit2.addEventListener('click', function () {
    closeSlide();
})

nextSlider2.addEventListener('click', function () {
    next();
})

prevSlider2.addEventListener('click', function () {
    prev();
})
exit3.addEventListener('click', function () {
    closeSlide();
})

nextSlider3.addEventListener('click', function () {
    next();
})

prevSlider3.addEventListener('click', function () {
    prev();
})

document.addEventListener("click", function (e) {
    if (e.target == light_box || e.target == light_box1 || e.target == light_box2 || e.target == light_box3 || e.target == card) {
        closeSlide();
    }
})

document.addEventListener('keydown', function (e) {
    switch (e.key) {
        case "ArrowRight":
            next();
            break;
        case "ArrowLeft":
            prev();
            break;
        case "Escape":
            closeSlide();
            break;
    }
})





//card//////////////////////////////
// localStorage.setItem('pro_arr', JSON.stringify(data));
var exit4 = document.getElementById("exit4");
var card = document.getElementById("card");
var card_icon = document.getElementById("card-icon");
var card_info = document.getElementsByClassName("all_data");
// card_info[0].innerHTML = JSON.parse(localStorage.getItem("pro_arr"));

// //////////////////

exit4.addEventListener('click', function () {
    closeSlide();
})


///////////////////////////
var data =[];
if (localStorage.getItem("pro_arr") != null){
    data=JSON.parse(localStorage.getItem("pro_arr"));
    dispaly();

}
function dispaly() {
    // card.classList.remove('d-none');  
    localStorage.setItem('pro_arr', JSON.stringify(data)); 
    if(localStorage.setItem('pro_arr', JSON.stringify(data)) == null){
        card_info[0].innerHTML = JSON.parse(localStorage.getItem("pro_arr"))
    }
}
// data = JSON.parse(localStorage.getItem("pro_arr"));
card_icon.addEventListener("click", function () {
    card.classList.remove('d-none');  
    localStorage.setItem('pro_arr', JSON.stringify(data)); 
    if(localStorage.setItem('pro_arr', JSON.stringify(data)) == null){
        card_info[0].innerHTML = JSON.parse(localStorage.getItem("pro_arr"))
        
    }

                 
    
})
// //////////// lenovo
var lab_lenovo = document.getElementById("lab-lenovo");
var delete_lenovo = document.getElementById("Delete");
var lenovo_number = document.getElementById("lab-leno");
var leno = document.getElementById("leno");
var lenovo_count = 0;

lab_lenovo.addEventListener("click", function () {
    lenovo_count++
    lenovo_number.innerHTML = lenovo_count;
    var cartona = leno.innerHTML;

    data[0] = cartona
    localStorage.setItem('pro_arr',JSON.stringify(data))
})
// Delete Type Lenovo//////////////////////////
function Labremove() {
    lenovo_count--
    lenovo_number.innerHTML = lenovo_count;
   var  cartona = leno.innerHTML;

    data[0]=cartona;
    localStorage.setItem('pro_arr', JSON.stringify(data));
    card_info[0].innerHTML = JSON.parse(localStorage.getItem("pro_arr"));
    if (lenovo_count == 0 || lenovo_count < 0) {
        cartona = ``;
        data[0] = cartona;
        localStorage.removeItem('pro_arr',JSON.stringify(data));
        localStorage.setItem('pro_arr', JSON.stringify(data));
        card_info[0].innerHTML = JSON.parse(localStorage.getItem("pro_arr"))

     }

}



//apple lab///////////////////////////////
var apple = document.getElementById("app");
var lab_apple = document.getElementById("lab-apple");
var apple_number = document.getElementById("lab-app");
var apple_count = 0;


lab_apple.addEventListener("click", function () {
    apple_count++
    apple_number.innerHTML = apple_count;
    var cartona1 = app.innerHTML;
    data[1] = cartona1
    localStorage.setItem('pro_arr',JSON.stringify(data))
})
//Delete Type Apple  /////////////////
function Appleremove(){
    apple_count--
    apple_number.innerHTML = apple_count;
   var  cartona1 = app.innerHTML;
    data[1]=cartona1;
    localStorage.setItem('pro_arr', JSON.stringify(data));
    card_info[0].innerHTML = JSON.parse(localStorage.getItem("pro_arr"));
    if (apple_count == 0 || apple_count < 0) {
        cartona1 = ``;
        data[1] = cartona1;
        localStorage.removeItem('pro_arr',JSON.stringify(data));
        localStorage.setItem('pro_arr', JSON.stringify(data));
        card_info[0].innerHTML = JSON.parse(localStorage.getItem("pro_arr"));
     }
}

//dell////////////////////////////

var dell = document.getElementById("dell");
var lab_dell = document.getElementById("lab-dell");
var dell_number = document.getElementById("num-dell");
var dell_count = 0;


lab_dell.addEventListener("click", function () {
    dell_count++
    dell_number.innerHTML = dell_count;
    var cartona2 = dell.innerHTML;
    data[2] = cartona2
    localStorage.setItem('pro_arr',JSON.stringify(data))


})

//Remove Lab Dell ///////////////////////////////

function Dellremove(){
    dell_count--
    dell_number.innerHTML = dell_count;
    var cartona2 = dell.innerHTML;
    data[2]=cartona2;
    localStorage.setItem('pro_arr', JSON.stringify(data));
    card_info[0].innerHTML = JSON.parse(localStorage.getItem("pro_arr"));
    if (dell_count == 0 || dell_count < 0) {
        cartona2 = ``;
        data[2] = cartona2;
        localStorage.removeItem('pro_arr',JSON.stringify(data));
        localStorage.setItem('pro_arr', JSON.stringify(data));
        card_info[0].innerHTML = JSON.parse(localStorage.getItem("pro_arr"))
     }
}

//asus////////////////////////////

var asus = document.getElementById("asus");
var lab_asus = document.getElementById("lab-asus");
var asus_number = document.getElementById("num-asus");
var asus_count = 0;

lab_asus.addEventListener("click", function () {
    asus_count++
    asus_number.innerHTML = asus_count;
   var cartona3 = asus.innerHTML;
    data[3] = cartona3
    localStorage.setItem('pro_arr',JSON.stringify(data))


})

//Remove Lab asus ///////////////////////////////

function Asusremove(){
    asus_count--
    asus_number.innerHTML = asus_count;
    var cartona3= asus.innerHTML;
    data[3]=cartona3;
    localStorage.setItem('pro_arr', JSON.stringify(data));
    card_info[0].innerHTML = JSON.parse(localStorage.getItem("pro_arr"));
    if (asus_count == 0 || asus_count < 0) {
        cartona3 = ``;
        data[3] = cartona3;
        localStorage.removeItem('pro_arr',JSON.stringify(data));
        localStorage.setItem('pro_arr', JSON.stringify(data));
        card_info[0].innerHTML = JSON.parse(localStorage.getItem("pro_arr"))
     }
}


//hp////////////////////////////

var hp = document.getElementById("hp");
var lab_hp = document.getElementById("lab-hp");
var hp_number = document.getElementById("num-hp");
var hp_count = 0;

lab_hp.addEventListener("click", function () {
    hp_count++
    hp_number.innerHTML = hp_count;
   var cartona4 = hp.innerHTML;
    data[4] = cartona4
    localStorage.setItem('pro_arr',JSON.stringify(data))


})

//Remove Lab asus ///////////////////////////////

function hpremove(){
    hp_count--
    hp_number.innerHTML = hp_count;
    var cartona4= hp.innerHTML;
    data[4]=cartona4;
    localStorage.setItem('pro_arr', JSON.stringify(data));
    card_info[0].innerHTML = JSON.parse(localStorage.getItem("pro_arr"));
    if (hp_count == 0 || hp_count < 0) {
        cartona4 = ``;
        data[4] = cartona4;
        localStorage.removeItem('pro_arr',JSON.stringify(data));
        localStorage.setItem('pro_arr', JSON.stringify(data));
        card_info[0].innerHTML = JSON.parse(localStorage.getItem("pro_arr"))
     }
}
//acer////////////////////////////////////

var acer = document.getElementById("acer");
var lab_acer = document.getElementById("lab-acer");
var acer_number = document.getElementById("num-acer");
var acer_count = 0;

lab_acer.addEventListener("click", function () {
    acer_count++
    acer_number.innerHTML = acer_count;
   var cartona5 = acer.innerHTML;
    data[5] = cartona5
    localStorage.setItem('pro_arr',JSON.stringify(data))


})

//Remove Lab asus ///////////////////////////////

function acerRemove(){
    acer_count--
    acer_number.innerHTML =acer_count;
    var cartona5= acer.innerHTML;
    data[5]=cartona5;
    localStorage.setItem('pro_arr', JSON.stringify(data));
    card_info[0].innerHTML = JSON.parse(localStorage.getItem("pro_arr"));
    if (acer_count == 0 || acer_count < 0) {
        cartona5 = ``;
        data[5] = cartona5;
        localStorage.removeItem('pro_arr',JSON.stringify(data));
        localStorage.setItem('pro_arr', JSON.stringify(data));
        card_info[0].innerHTML = JSON.parse(localStorage.getItem("pro_arr"))
     }
}

//iphone////////////////////////////////////

var iphone = document.getElementById("iphone");
var phone_iphone = document.getElementById("phone-iphone");
var iphone_number = document.getElementById("num-iphone");
var iphone_count = 0;

phone_iphone.addEventListener("click", function () {
    iphone_count++
    iphone_number.innerHTML = iphone_count;
    var cartona6 = iphone.innerHTML;
    data[6] = cartona6
    localStorage.setItem('pro_arr',JSON.stringify(data))


})

//Remove iphone ///////////////////////////////

function iphoneRemove(){
    iphone_count--
    iphone_number.innerHTML =iphone_count;
    var cartona6= iphone.innerHTML;
    data[6]=cartona6;
    localStorage.setItem('pro_arr', JSON.stringify(data));
    card_info[0].innerHTML = JSON.parse(localStorage.getItem("pro_arr"));
    if (iphone_count == 0 || iphone_count < 0) {
        cartona6 = ``;
        data[6] = cartona6;
        localStorage.removeItem('pro_arr',JSON.stringify(data));
        localStorage.setItem('pro_arr', JSON.stringify(data));
        card_info[0].innerHTML = JSON.parse(localStorage.getItem("pro_arr"))
     }
}

//samsung////////////////////////////////////

var samsung = document.getElementById("samsung");
var phone_samsung = document.getElementById("phone-samsung");
var samsung_number = document.getElementById("num-samsung");
var samsung_count = 0;

phone_samsung.addEventListener("click", function () {
    samsung_count++
    samsung_number.innerHTML =samsung_count;
    var cartona7= samsung.innerHTML;
    data[7] = cartona7
    localStorage.setItem('pro_arr',JSON.stringify(data))


})

//Remove samsung ///////////////////////////////

function samsungRemove(){
    samsung_count--
    samsung_number.innerHTML =samsung_count;
    var cartona7= samsung.innerHTML;
    data[7]=cartona7;
    localStorage.setItem('pro_arr', JSON.stringify(data));
    card_info[0].innerHTML = JSON.parse(localStorage.getItem("pro_arr"));
    if (samsung_count == 0 || samsung_count < 0) {
        cartona7= ``;
        data[7] = cartona7;
        localStorage.removeItem('pro_arr',JSON.stringify(data));
        localStorage.setItem('pro_arr', JSON.stringify(data));
        card_info[0].innerHTML = JSON.parse(localStorage.getItem("pro_arr"))
     }
}

//nokia////////////////////////////////////

var nokia = document.getElementById("nokia");
var phone_nokia= document.getElementById("phone-nokia");
var nokia_number = document.getElementById("num-nokia");
var nokia_count = 0;

phone_nokia.addEventListener("click", function () {
    nokia_count++
    nokia_number.innerHTML =nokia_count;
    var cartona8= nokia.innerHTML;
    data[8] = cartona8
    localStorage.setItem('pro_arr',JSON.stringify(data))


})

//Remove nokia ///////////////////////////////

function nokiaRemove(){
    nokia_count--
    nokia_number.innerHTML =nokia_count;
    var cartona8= nokia.innerHTML;
    data[8]=cartona8;
    localStorage.setItem('pro_arr', JSON.stringify(data));
    card_info[0].innerHTML = JSON.parse(localStorage.getItem("pro_arr"));
    if (nokia_count == 0 || nokia_count < 0) {
        cartona8= ``;
        data[8] = cartona8;
        localStorage.removeItem('pro_arr',JSON.stringify(data));
        localStorage.setItem('pro_arr', JSON.stringify(data));
        card_info[0].innerHTML = JSON.parse(localStorage.getItem("pro_arr"))
     }
}

//oppo////////////////////////////////////

var oppo = document.getElementById("oppo");
var phone_oppo= document.getElementById("phone-oppo");
var oppo_number = document.getElementById("num-oppo");
var oppo_count = 0;

phone_oppo.addEventListener("click", function () {
    oppo_count++
    oppo_number.innerHTML =oppo_count;
    var cartona9= oppo.innerHTML;
    data[9] = cartona9
    localStorage.setItem('pro_arr',JSON.stringify(data))


})

//Remove oppo ///////////////////////////////

function oppoRemove(){
    oppo_count--
    oppo_number.innerHTML =oppo_count;
    var cartona9= oppo.innerHTML;
    data[9]=cartona9;
    localStorage.setItem('pro_arr', JSON.stringify(data));
    card_info[0].innerHTML = JSON.parse(localStorage.getItem("pro_arr"));
    if (oppo_count == 0 || oppo_count < 0) {
        cartona9= ``;
        data[9] = cartona9;
        localStorage.removeItem('pro_arr',JSON.stringify(data));
        localStorage.setItem('pro_arr', JSON.stringify(data));
        card_info[0].innerHTML = JSON.parse(localStorage.getItem("pro_arr"))
     }
}

//huawei////////////////////////////////////

var huawei = document.getElementById("huawei");
var phone_huawei= document.getElementById("phone-huawei");
var huawei_number = document.getElementById("num-huawei");
var huawei_count = 0;

phone_huawei.addEventListener("click", function () {
    huawei_count++
    huawei_number.innerHTML =huawei_count;
    var cartona10= huawei.innerHTML;
    data[10] = cartona10
    localStorage.setItem('pro_arr',JSON.stringify(data))


})

//Remove huawei ///////////////////////////////

function huaweiRemove(){
    huawei_count--
    huawei_number.innerHTML =huawei_count;
    var cartona10= huawei.innerHTML;
    data[10]=cartona10;
    localStorage.setItem('pro_arr', JSON.stringify(data));
    card_info[0].innerHTML = JSON.parse(localStorage.getItem("pro_arr"));
    if (huawei_count == 0 || huawei_count < 0) {
        cartona10= ``;
        data[10] = cartona10;
        localStorage.removeItem('pro_arr',JSON.stringify(data));
        localStorage.setItem('pro_arr', JSON.stringify(data));
        card_info[0].innerHTML = JSON.parse(localStorage.getItem("pro_arr"))
     }
}

//vivo////////////////////////////////////

var vivo = document.getElementById("vivo");
var phone_vivo= document.getElementById("phone-vivo");
var vivo_number = document.getElementById("num-vivo");
var vivo_count = 0;

phone_vivo.addEventListener("click", function () {
    vivo_count++
    vivo_number.innerHTML =vivo_count;
    var cartona11= vivo.innerHTML;
    data[11] = cartona11
    localStorage.setItem('pro_arr',JSON.stringify(data))


})

//Remove vivo ///////////////////////////////

function vivoRemove(){
    vivo_count--
    vivo_number.innerHTML =vivo_count;
    var cartona11= vivo.innerHTML;
    data[11]=cartona11;
    localStorage.setItem('pro_arr', JSON.stringify(data));
    card_info[0].innerHTML = JSON.parse(localStorage.getItem("pro_arr"));
    if (vivo_count == 0 || vivo_count < 0) {
        cartona11= ``;
        data[11] = cartona11;
        localStorage.removeItem('pro_arr',JSON.stringify(data));
        localStorage.setItem('pro_arr', JSON.stringify(data));
        card_info[0].innerHTML = JSON.parse(localStorage.getItem("pro_arr"))
     }
}
//car1////////////////////////////////////

var car1 = document.getElementById("car1");
var car_car1= document.getElementById("car-car1");
var car1_number = document.getElementById("num-car1");
var car1_count = 0;

car_car1.addEventListener("click", function () {
    car1_count++
    car1_number.innerHTML =car1_count;
    var cartona12= car1.innerHTML;
    data[12] = cartona12
    localStorage.setItem('pro_arr',JSON.stringify(data))


})

//Remove car1 ///////////////////////////////

function car1Remove(){
    car1_count--
    car1_number.innerHTML =car1_count;
    var cartona12= car1.innerHTML;
    data[12]=cartona12;
    localStorage.setItem('pro_arr', JSON.stringify(data));
    card_info[0].innerHTML = JSON.parse(localStorage.getItem("pro_arr"));
    if (car1_count == 0 || car1_count < 0) {
        cartona12= ``;
        data[12] = cartona12;
        localStorage.removeItem('pro_arr',JSON.stringify(data));
        localStorage.setItem('pro_arr', JSON.stringify(data));
        card_info[0].innerHTML = JSON.parse(localStorage.getItem("pro_arr"))
     }
}
//car2////////////////////////////////////

var car2 = document.getElementById("car2");
var car_car2= document.getElementById("car-car2");
var car2_number = document.getElementById("num-car2");
var car2_count = 0;

car_car2.addEventListener("click", function () {
    car2_count++
    car2_number.innerHTML =car2_count;
    var cartona13= car2.innerHTML;
    data[13] = cartona13
    localStorage.setItem('pro_arr',JSON.stringify(data))


})

//Remove car2 ///////////////////////////////

function car2Remove(){
    car2_count--
    car2_number.innerHTML =car2_count;
    var cartona13= car2.innerHTML;
    data[13]=cartona13;
    localStorage.setItem('pro_arr', JSON.stringify(data));
    card_info[0].innerHTML = JSON.parse(localStorage.getItem("pro_arr"));
    if (car2_count == 0 || car2_count < 0) {
        cartona13= ``;
        data[13] = cartona13;
        localStorage.removeItem('pro_arr',JSON.stringify(data));
        localStorage.setItem('pro_arr', JSON.stringify(data));
        card_info[0].innerHTML = JSON.parse(localStorage.getItem("pro_arr"))
     }
}
//car3////////////////////////////////////

var car3 = document.getElementById("car3");
var car_car3= document.getElementById("car-car3");
var car3_number = document.getElementById("num-car3");
var car3_count = 0;

car_car3.addEventListener("click", function () {
    car3_count++
    car3_number.innerHTML =car3_count;
    var cartona14= car3.innerHTML;
    data[14] = cartona14
    localStorage.setItem('pro_arr',JSON.stringify(data))


})

//Remove car3 ///////////////////////////////

function car3Remove(){
    car3_count--
    car3_number.innerHTML =car3_count;
    var cartona14= car3.innerHTML;
    data[14]=cartona14;
    localStorage.setItem('pro_arr', JSON.stringify(data));
    card_info[0].innerHTML = JSON.parse(localStorage.getItem("pro_arr"));
    if (car3_count == 0 || car3_count < 0) {
        cartona14= ``;
        data[14] = cartona14;
        localStorage.removeItem('pro_arr',JSON.stringify(data));
        localStorage.setItem('pro_arr', JSON.stringify(data));
        card_info[0].innerHTML = JSON.parse(localStorage.getItem("pro_arr"))
     }
}

//car4////////////////////////////////////

var car4 = document.getElementById("car4");
var car_car4= document.getElementById("car-car4");
var car4_number = document.getElementById("num-car4");
var car4_count = 0;

car_car4.addEventListener("click", function () {
    car4_count++
    car4_number.innerHTML =car4_count;
    var cartona15= car4.innerHTML;
    data[15] = cartona15
    localStorage.setItem('pro_arr',JSON.stringify(data))


})

//Remove car4 ///////////////////////////////

function car4Remove(){
    car4_count--
    car4_number.innerHTML =car4_count;
    var cartona15= car4.innerHTML;
    data[15]=cartona15;
    localStorage.setItem('pro_arr', JSON.stringify(data));
    card_info[0].innerHTML = JSON.parse(localStorage.getItem("pro_arr"));
    if (car4_count == 0 || car4_count < 0) {
        cartona15= ``;
        data[15] = cartona15;
        localStorage.removeItem('pro_arr',JSON.stringify(data));
        localStorage.setItem('pro_arr', JSON.stringify(data));
        card_info[0].innerHTML = JSON.parse(localStorage.getItem("pro_arr"))
     }
}

//car5////////////////////////////////////

var car5 = document.getElementById("car5");
var car_car5= document.getElementById("car-car5");
var car5_number = document.getElementById("num-car5");
var car5_count = 0;

car_car5.addEventListener("click", function () {
    car5_count++
    car5_number.innerHTML =car5_count;
    var cartona16= car5.innerHTML;
    data[16] = cartona16
    localStorage.setItem('pro_arr',JSON.stringify(data))


})

//Remove car5 ///////////////////////////////

function car5Remove(){
    car5_count--
    car5_number.innerHTML =car5_count;
    var cartona16= car5.innerHTML;
    data[16]=cartona16;
    localStorage.setItem('pro_arr', JSON.stringify(data));
    card_info[0].innerHTML = JSON.parse(localStorage.getItem("pro_arr"));
    if (car5_count == 0 || car5_count < 0) {
        cartona16= ``;
        data[16] = cartona16;
        localStorage.removeItem('pro_arr',JSON.stringify(data));
        localStorage.setItem('pro_arr', JSON.stringify(data));
        card_info[0].innerHTML = JSON.parse(localStorage.getItem("pro_arr"))
     }
}


//car6////////////////////////////////////

var car6 = document.getElementById("car6");
var car_car6= document.getElementById("car-car6");
var car6_number = document.getElementById("num-car6");
var car6_count = 0;

car_car6.addEventListener("click", function () {
    car6_count++
    car6_number.innerHTML =car6_count;
    var cartona17= car6.innerHTML;
    data[17] = cartona17
    localStorage.setItem('pro_arr',JSON.stringify(data))


})

//Remove car6 ///////////////////////////////

function car6Remove(){
    car6_count--
    car6_number.innerHTML =car6_count;
    var cartona17= car6.innerHTML;
    data[17]=cartona17;
    localStorage.setItem('pro_arr', JSON.stringify(data));
    card_info[0].innerHTML = JSON.parse(localStorage.getItem("pro_arr"));
    if (car6_count == 0 || car6_count < 0) {
        cartona17= ``;
        data[17] = cartona17;
        localStorage.removeItem('pro_arr',JSON.stringify(data));
        localStorage.setItem('pro_arr', JSON.stringify(data));
        card_info[0].innerHTML = JSON.parse(localStorage.getItem("pro_arr"))
     }
}

//makeup1////////////////////////////////////

var makeup1 = document.getElementById("makeup1");
var makeup_makeup1= document.getElementById("makeup-makeup1");
var makeup1_number = document.getElementById("num-makeup1");
var makeup1_count = 0;

makeup_makeup1.addEventListener("click", function () {
    makeup1_count++
    makeup1_number.innerHTML =makeup1_count;
    var cartona18= makeup1.innerHTML;
    data[18] = cartona18
    localStorage.setItem('pro_arr',JSON.stringify(data))


})

//Remove makeup1 ///////////////////////////////

function makeup1Remove(){
    makeup1_count--
    makeup1_number.innerHTML =makeup1_count;
    var cartona18= makeup1.innerHTML;
    data[18]=cartona18;
    localStorage.setItem('pro_arr', JSON.stringify(data));
    card_info[0].innerHTML = JSON.parse(localStorage.getItem("pro_arr"));
    if (makeup1_count == 0 || makeup1_count < 0) {
        cartona18= ``;
        data[18] = cartona18;
        localStorage.removeItem('pro_arr',JSON.stringify(data));
        localStorage.setItem('pro_arr', JSON.stringify(data));
        card_info[0].innerHTML = JSON.parse(localStorage.getItem("pro_arr"))
     }
}

//makeup2////////////////////////////////////

var makeup2 = document.getElementById("makeup2");
var makeup_makeup2= document.getElementById("makeup-makeup2");
var makeup2_number = document.getElementById("num-makeup2");
var makeup2_count = 0;

makeup_makeup2.addEventListener("click", function () {
    makeup2_count++
    makeup2_number.innerHTML =makeup2_count;
    var cartona19= makeup2.innerHTML;
    data[19] = cartona19
    localStorage.setItem('pro_arr',JSON.stringify(data))


})

//Remove makeup2 ///////////////////////////////

function makeup2Remove(){
    makeup2_count--
    makeup2_number.innerHTML =makeup2_count;
    var cartona19= makeup2.innerHTML;
    data[19]=cartona19;
    localStorage.setItem('pro_arr', JSON.stringify(data));
    card_info[0].innerHTML = JSON.parse(localStorage.getItem("pro_arr"));
    if (makeup2_count == 0 || makeup2_count < 0) {
        cartona19= ``;
        data[19] = cartona19;
        localStorage.removeItem('pro_arr',JSON.stringify(data));
        localStorage.setItem('pro_arr', JSON.stringify(data));
        card_info[0].innerHTML = JSON.parse(localStorage.getItem("pro_arr"))
     }
}

//makeup3////////////////////////////////////

var makeup3 = document.getElementById("makeup3");
var makeup_makeup3= document.getElementById("makeup-makeup3");
var makeup3_number = document.getElementById("num-makeup3");
var makeup3_count = 0;

makeup_makeup3.addEventListener("click", function () {
    makeup3_count++
    makeup3_number.innerHTML =makeup3_count;
    var cartona20= makeup3.innerHTML;
    data[20] = cartona20
    localStorage.setItem('pro_arr',JSON.stringify(data))


})

//Remove makeup3 ///////////////////////////////

function makeup3Remove(){
    makeup3_count--
    makeup3_number.innerHTML =makeup3_count;
    var cartona20= makeup3.innerHTML;
    data[20]=cartona20;
    localStorage.setItem('pro_arr', JSON.stringify(data));
    card_info[0].innerHTML = JSON.parse(localStorage.getItem("pro_arr"));
    if (makeup3_count == 0 || makeup3_count < 0) {
        cartona20= ``;
        data[20] = cartona20;
        localStorage.removeItem('pro_arr',JSON.stringify(data));
        localStorage.setItem('pro_arr', JSON.stringify(data));
        card_info[0].innerHTML = JSON.parse(localStorage.getItem("pro_arr"))
     }
}
//makeup4////////////////////////////////////

var makeup4 = document.getElementById("makeup4");
var makeup_makeup4= document.getElementById("makeup-makeup4");
var makeup4_number = document.getElementById("num-makeup4");
var makeup4_count = 0;

makeup_makeup4.addEventListener("click", function () {
    makeup4_count++
    makeup4_number.innerHTML =makeup4_count;
    var cartona21= makeup4.innerHTML;
    data[21] = cartona21
    localStorage.setItem('pro_arr',JSON.stringify(data))


})

//Remove makeup4 ///////////////////////////////

function makeup4Remove(){
    makeup4_count--
    makeup4_number.innerHTML =makeup4_count;
    var cartona21= makeup4.innerHTML;
    data[21]=cartona21;
    localStorage.setItem('pro_arr', JSON.stringify(data));
    card_info[0].innerHTML = JSON.parse(localStorage.getItem("pro_arr"));
    if (makeup4_count == 0 || makeup4_count < 0) {
        cartona21= ``;
        data[21] = cartona21;
        localStorage.removeItem('pro_arr',JSON.stringify(data));
        localStorage.setItem('pro_arr', JSON.stringify(data));
        card_info[0].innerHTML = JSON.parse(localStorage.getItem("pro_arr"))
     }
}
//makeup5////////////////////////////////////

var makeup5 = document.getElementById("makeup5");
var makeup_makeup5= document.getElementById("makeup-makeup5");
var makeup5_number = document.getElementById("num-makeup5");
var makeup5_count = 0;

makeup_makeup5.addEventListener("click", function () {
    makeup5_count++
    makeup5_number.innerHTML =makeup5_count;
    var cartona22= makeup5.innerHTML;
    data[22] = cartona22
    localStorage.setItem('pro_arr',JSON.stringify(data))


})

//Remove makeup5 ///////////////////////////////

function makeup5Remove(){
    makeup5_count--
    makeup5_number.innerHTML =makeup5_count;
    var cartona22= makeup5.innerHTML;
    data[22]=cartona22;
    localStorage.setItem('pro_arr', JSON.stringify(data));
    card_info[0].innerHTML = JSON.parse(localStorage.getItem("pro_arr"));
    if (makeup5_count == 0 || makeup5_count < 0) {
        cartona22= ``;
        data[22] = cartona22;
        localStorage.removeItem('pro_arr',JSON.stringify(data));
        localStorage.setItem('pro_arr', JSON.stringify(data));
        card_info[0].innerHTML = JSON.parse(localStorage.getItem("pro_arr"))
     }
}

//makeup6////////////////////////////////////

var makeup6 = document.getElementById("makeup6");
var makeup_makeup6= document.getElementById("makeup-makeup6");
var makeup6_number = document.getElementById("num-makeup6");
var makeup6_count = 0;

makeup_makeup6.addEventListener("click", function () {
    makeup6_count++
    makeup6_number.innerHTML =makeup6_count;
    var cartona23= makeup6.innerHTML;
    data[23] = cartona23
    localStorage.setItem('pro_arr',JSON.stringify(data))


})

//Remove makeup6 ///////////////////////////////

function makeup6Remove(){
    makeup6_count--
    makeup6_number.innerHTML =makeup6_count;
    var cartona23= makeup6.innerHTML;
    data[23]=cartona23;
    localStorage.setItem('pro_arr', JSON.stringify(data));
    card_info[0].innerHTML = JSON.parse(localStorage.getItem("pro_arr"));
    if (makeup6_count == 0 || makeup6_count < 0) {
        cartona23= ``;
        data[23] = cartona23;
        localStorage.removeItem('pro_arr',JSON.stringify(data));
        localStorage.setItem('pro_arr', JSON.stringify(data));
        card_info[0].innerHTML = JSON.parse(localStorage.getItem("pro_arr"))
     }
}