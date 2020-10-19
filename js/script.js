if ($(window).width() > 600) {
    $('.toast').toast('show');
} else {
    $('.toast').toast('hide');
}

ScrollReveal().reveal('.reveal1');
ScrollReveal().reveal('.reveal2', {
    delay: 500
});

$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});


$(document).ready(function () {
    $("#btnLogin").click(() => {
        location.href = "login.html";
    });
    $("#menubtn").click(() => {
        location.href = "menu.html";
    });
    $("#bookingbtn").click(() => {
        location.href = "reservasi.html";
    });
    $("#locationbtn").click(() => {
        location.href = "lokasi.html";
    });
    $("#galeribtn").click(() => {
        location.href = "gallery.html";
    });
    $("#kontakbtn").click(() => {
        location.href = "kontak.html";
    });
    $("#cekLogin").click(()=>{
        uName = $("#exampleInputEmail1").val();
        uPw = $("#exampleInputPassword1").val();
        if(uName == 'admin' && uPw == 'admin'){
            location.href = 'admin_view.html';
        }else{
            location.href = 'contoh-setelah-login.html';
        }
    });
    $("#btnLogout").click(()=>{
        if(confirm("Yakin Logout ?")){
            location.href = 'index.html';
        }
    });
    $('table').on('click', '#acc', function(){
        if(confirm('Konfirmasi Reservasi ?')){
            $(this).closest('tr').remove();
            alert('Berhasil Mengonfirmasi');
        }
    });
    $('table').on('click', '#reject', function(){
        $('#ModalTolak').modal('toggle'); 
        $("#btnTolak").click(()=>{
            $('#ModalTolak').modal('hide');
            $(this).closest('tr').remove();
        });
    });
    $('table').on('click', '#reject1', function(){
        if(confirm('Hapus Pesan ?')){
            $(this).closest('tr').remove();
        }      
    });
    $('#register').click(()=>{
        if($('#exampleInputPassword1').val() != $('#exampleInputPassword2').val()){
            alert('Password dan Konfirmasi Password berbeda');
        }else{
            location.href = 'login.html';
        }
    })
    $('#gantiPass').click(()=>{
        if($('#exampleInputPassword1').val() != $('#exampleInputPassword2').val()){
            alert('Password dan Konfirmasi Password berbeda');
        }else{
            location.href = 'pengaturan.html';
        }
    })
});
