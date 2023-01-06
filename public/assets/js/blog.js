

let blogs = []

function getData(event) {
    event.preventDefault()

    // Deklarasi variable sama dom buat nangkep valuenya
    let title = document.getElementById("name").value
    let startDate = document.getElementById("start-date").value
    let endDate = document.getElementById("end-date").value
    let description = document.getElementById("message").value
    let image = document.getElementById("input-upload").files
    
    // Deklarasi variable buat icon technology
    //Pengkondisian buat masukin images icon ke variable
    let nodeJsImg = (document.getElementById("nodeJs").checked == true)? 'assets/images/nodejs.png' : ""
    let reactJsImg = (document.getElementById("reactJs").checked == true)? 'assets/images/reactJs.png' : ""
    let javaScriptImg = (document.getElementById("javascript").checked == true)? './assets/images/javaScript.png' : ""
    let typeScriptImg = (document.getElementById("typeScript").checked == true)? './assets/images/typeScript.png' : ""

     image = URL.createObjectURL(image[0])

    //Mengdeklarasikan variable addBlog
    let addBlog = {
       title,
       startDate,
       endDate,
        description,
        nodeJsImg,
        reactJsImg,
        javaScriptImg,
        typeScriptImg,
        postedAt: new Date(),
        image

    }
    //Mempush value yang ada di project ke blogs
    blogs.push(addBlog)
    console.table(blogs)
     showData()
 }
// //------------- C ----------------//
//Merender data yang telah kita submit
function showData() {
     document.getElementById("card-box").innerHTML = ""
    //Loop perulangan
     for (let i= 0; i <= blogs.length; i++){
         document.getElementById("card-box").innerHTML += `
         <h1 class="text-center fw-bold pt-3">MY PROJECT</h1>
         <div class="project_item col">
         <div class="project_img card mx-3 mt-3 w-90 pt-3 pb-3 rounded-5">
             <img class="card-img-top w-100 px-3 rounded-5" src="${blogs[i].image}" alt="Avatar profil" id="image"/> 

             <div class="project_content card-body bg-light mb-3 ms-3 me-3">
             <p class="title card-title">
                 <a class="text-decoration-none text-black" href="project-detail.html" target="_blank" style="list-style: none">${blogs[i].title}</a>
             </p>
             <p class="duration card-text">Durasi: ${getDuration(blogs[i].startDate, blogs[i].endDate)}</p>
             <p class="description card-text">${blogs[i].description}</p>
             <div class="technology">
                <ul class="list-items-sm justify-content-center text-d d-flex flex-wrap gap-3" style="list-style: none">
                    <li>
                        <img src="${blogs[i].nodeJsImg}" alt="">
                    </li>
                    <li>
                        <img src="${blogs[i].reactJsImg}" alt="">
                    </li>
                    <li>
                        <img style="width: 50%;" src="${blogs[i].javaScriptImg}" alt="">
                    </li>
                    <li>
                        <img src="${blogs[i].typeScriptImg}" alt="">
                    </li>
                </ul> 
             </div>
             <div class="btn-group d-flex w-100 gap-2" style="margin-top:24px;">
                 <button class="btn-edit btn btn-sm w-100">edit</button>
                 <button class="btn-delete btn btn-sm w-100">delete</button>
             </div>
         </div>

         </div>                  
       </div
        `
        
    }
}

//Fungsi menambahkan durasi waktu

function getDuration(start, end) {
    let Start = new Date(start)
    let End = new Date(end)

           //jarak waktu, ini adalah pengkondisian//
    let distance = End - Start

    let yearDistance = Math.floor(distance / (12 * 30 * 24 * 60 * 60 * 1000))
    if (yearDistance != 0) {
        return yearDistance + ' tahun'
    }else {
        let monthDistance = Math.floor(distance / (30 * 24 * 60 * 60 * 1000))
        if (monthDistance != 0) {
            return monthDistance + ' bulan'
        } else {
            let weekDistance = Math.floor(distance / (7 * 24 * 60 * 60 * 1000))
            if (weekDistance != 0) {
                return weekDistance + ' minggu'
            } else {
                let daysDistance = Math.floor(distance / (24 * 60 * 60 * 1000))
                if (daysDistance != 0) {
                    return daysDistance + ' hari'
                } else {
                    let hoursDistance = Math.floor(distance / (60 * 60 * 1000))
                    if (hoursDistance != 0) {
                        return hoursDistance + ' jam'
                    } else {
                        let minuteDistance = Math.floor(distance / (60 * 1000))
                        if (minuteDistance != 0) {
                            return minuteDistance + ' menit'
                        } else {
                            let secondDistance = Math.floor(distance / 1000)
                            if (secondDistance != 0)
                                return secondDistance + ' detik'
                        }
                    }
                }
            }
        }
    }

    
}