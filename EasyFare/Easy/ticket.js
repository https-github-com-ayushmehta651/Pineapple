var qrcode = new QRCode("qrcode");
 function makeCode () {		
      	var elText ="Thx For Booking with us and going green!!";
 	qrcode.makeCode(elText);
}
 makeCode();