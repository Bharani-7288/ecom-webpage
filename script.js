// let product = [
//     {
//         img_src_1 : "",
//         img_src_2:"images/product1-effect.jpg",
//         pname:"shirt",
//         pprice:"1000"
//     },
//     {
//         img_src_1 : "images/product2.jpg",
//         img_src_2:"images/product2-effect.jpg",
//         pname:"Black Sweatshat",
//         pprice:"1000"
//     },
//     {
//         img_src_1 : "images/product3.jpg",
//         img_src_2:"images/product3-effect.jpg",
//         pname:"Brown Sweatshat",
//         pprice:"1000"
//     },
//     {
//         img_src_1 : "images/product4.jpg",
//         img_src_2:"images/product4-effect.jpg",
//         pname:"shirt",
//         pprice:"1000"
//     }
// ]

// for (let i=1 ; i<product.length ;i++)
// {
//     let main_img = document.createElement("div")
//     main_img.classList.add("main-div")

//     let main_div = document.createElement("div")
//     main_div.classList.add("main-img")

//     let first_img = document.createElement("div")
//     first_img.classList.add('first_img')

//     let img1 = document.createElement("img")
//     img1.setAttribute("src",product[i].img_src_1)

//     let second_img = document.createElement("div")
//     second_img.classList.add("second-img")

//     let img2 = document.createElement("img")
//     img2.setAttribute("src",product[i].img_src_2)

//     let third_img = document.createElement("div")
//     third_img.classList.add("third_img")

//     let btn1 = document.createElement("img")
//     btn1.classList.add("btn")
//     btn1.innerText='Add to Cart'

//     // ------

//     let para = document.createElement("div")
//     para.classList.add("main-div-text")

//     let p1 = document.createElement("p")
//     p1.innerHTML=product[i].pname

//     let p2 = document.createElement("p")
//     p1.innerHTML=product[i].pprice

//     para.appendChild(p1)
//     para.appendChild(p2)

//     main_div.append(first_img,second_img,third_img)
//     first_img.appendChild(img1)
//     second_img.appendChild(img2)
//     third_img.appendChild(btn1)

//     main_img.append(main_div,para)

//     document.getElementById("product-section").append(main_img)
// }



document.getElementById("nav-li-1").addEventListener('click',function(){
    document.getElementById("banner").scrollIntoView({behavior:"smooth"})
})

document.getElementById("nav-li-2").addEventListener('click',function(){
    document.getElementById("section").scrollIntoView({behavior:"smooth"})
})

document.getElementById("nav-li-3").addEventListener('click',function(){
    document.getElementById("product-section-1").scrollIntoView({behavior:"smooth"})
})

document.getElementById("nav-li-4").addEventListener('click',function(){
    document.getElementById("product-section-2").scrollIntoView({behavior:"smooth"})
})

document.getElementById("nav-li-5").addEventListener('click',function(){
    document.getElementById("product-section-5").scrollIntoView({behavior:"smooth"})
})

document.getElementById("nav-li-6").addEventListener('click',function(){
    document.getElementById("product-section-6").scrollIntoView({behavior:"smooth"})
})


let variable = false
document.getElementById("menu").addEventListener("click",function(){

    if (variable===false)
    {
        document.getElementById("header").style.height='50px'
        variable = true
    }
    else
    {
        document.getElementById("header").style.height='270px'
        variable=false
    }
    
})


// scroll event 

// window.addEventListener("scroll",function(){
//     console.log(this.window.scrollY)
// })


// top button 

document.getElementById("top").addEventListener("click",function(){
    document.getElementById("header").scrollIntoView({behavior:"smooth"})
})

window.addEventListener("scroll",function(){
        if (window.scrollY>171)
        {
            this.document.getElementById("top").style.display='flex'
        }
        else
        {
            document.getElementById("top").style.display='none'
        }
    })


document.getElementById("moon").addEventListener("click", function() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    document.getElementById("sun").style.display='inline'
    document.getElementById("moon").style.display='none'
    document.querySelector(".logo").style.color='white'
    document.querySelector(".slide").style.color='black'
    document.querySelector(".footer").style.color='white'
    document.querySelector(".header").style.backgroundColor='black'
    document.querySelector(".nav-items").style.color='white'
    document.querySelector(".util-items").style.color='white'
    document.getElementById("top").style.backgroundColor='white'
    document.getElementById("top").style.color='black'
});

document.getElementById("sun").addEventListener("click", function() {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    document.getElementById("sun").style.display='none'
    document.getElementById("moon").style.display='inline'
    document.querySelector(".logo").style.color='black'
    document.querySelector(".nav-items").style.color='black'
    document.querySelector(".util-items").style.color='black'
    document.querySelector(".footer").style.color='black'
    document.querySelector(".header").style.backgroundColor='white'
    document.getElementById("top").style.backgroundColor='black'
    document.getElementById("top").style.color='white'
});
