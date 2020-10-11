const btn = document.getElementById('generate_code');
    btn.addEventListener('click', generateQR);

    function generateQR(){
        const text = document.getElementById('data').value;

        const url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`;

        document.getElementById('qr_img').src = url;
}