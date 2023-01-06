//alert("hallo saya batch 43")
//console.log("hello world")
//document.write("Hallo Batch 43")
//document.writeln("Hallo Batch 43")

//variabel
//var, let, const.

//data yg bisa diubah
//var gelas = "susu"
//var gelas ="air putih"

//let kirim = "nasi putih"
//---- merubah"let gausah diketik let lagi jadi 'kirim = "nasi goreng" ' ""
//let kirim = "nasi goreng"


//data yg tidak bisa di ubah
//constant
//const nama = "adi"
//nama = "nugroho"
//--data pakai const gabakal bisa berubah

//type data
//data primitif dan non primitif
    //type data primitif --> satu nilai 
    //string-->data "apapun yg didalam sini adalah string"
    //int--> 1,2,3,4,5
    //booleap--> (true dan false)
    //undefined -->belum dideklarasikan
    //null-->tidak ada datanya

//type data non-primitif -->
        //->object
        //->array ->belom

        // let dataDiri = {
        //     nama: "Septian",
        //     alamat: "Tangerang"
        // }

        // dua suku kata
        // let darahMuda = benar
        //let darah_muda = benar
        //let darah-muda = salah->error

        //pake bahasa inggris
        //const increment

//operator
//operator aritmatika
//let angkaAwal = 10
//let angkaTambah =20

//console.log(angkaAwal+angkaTambah)
//bisa juga
//bikin tambahan let hasil = angkaAwal + angkaTambah
//jadi console.log=(hasil)


//let myName = "Septian"
//let myJob = "selai kacang"
//let myIntro = " nama saya " + myName + " pekerjaan saya menjadi " + myJob -> cara 1
//let myIntro = `nama saya ${myName} pekerjaan saya menjadi ${myJob}` ->cara 2


// pngkondisian
//if else
// const umur = 17

// if(umur === 17) {
//     console.log("mas dandi umurnya dibawah 17 tahun")
// }
// else {
//     console.log("umur mas dandi diatas 17")
// }
// == , !=(tidak sama dengan) , ===

//function
// 1.function biasa
// function increment(){
//     let kota = "jakarta"
//     return kota
// }

// increment()

// const decrement = function() {
//     console.log("jakarta")
// }

// decrement

// const hasil = () => {
//     console.log("halo")
// }

// hasil()

//paramater
// function sayHello(nilaiAwal, nilaiAkhir) {
//     return nilaiAwal + nilaiAkhir
// }


    function getData(){
    
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let phoneNumber = document.getElementById("phone").value
    let subject = document.getElementById("subject").value
    let message = document.getElementById("message").value

    if(name =="") {
        return alert("Nama tidak boleh kosong")
    } else if(email == "") {
        return alert("email tidak boleh kosong")
    } else if(phoneNumber == ""){
        return alert("telepon tidak boleh kosong")
    } else if(subject == ""){
        return alert("subject tidak boleh kosong")
    } else if (message == ""){
        return alert("pesan tidak boleh kosong")
    }

    let emailReciver = "septianadi8892@gmail.com"

    let mailTo = document.createElement('a')
    mailTo.href = `mailTo:${emailReciver}?subject=${subject}&body=Halo nama saya ${name}, ${message}, nomor telepon saya ${phoneNumber}`
    mailTo.click()

    let users = {
        myName: name,
        myEmail: email,
        myPhone: phoneNumber,
        mySubject: subject,
        myMessage: message
    }




    }

    // let users = {
    //     myName: name,
    //     myEmail: email,
    //     myPhone: phoneNumber,
    //     mySubject: subject,
    //     myMessage: message
    // }
    
    // --> di let users bisa pakai ini juga
    
//     console.log(name)
//     console.log(email)
//     console.log(phoneNumber)
//     console.log(subject)
//     console.log(message)
