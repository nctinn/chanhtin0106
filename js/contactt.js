function SendInfo()
{
    hoten = $("#txtHoTen").val();
    email = $("#txtEmail").val();
    phone = $("#txtPhone").val();
    donvi = $("#txtDonVi").val();
    guiden = $("#selGuiDen").val();
    noidung = $("#txtNoiDung").val();
    captcha = $("#txtCaptcha").val();
    
    console.log("Họ tên: ", hoten);
    console.log("Email: ",email);
    console.log("ĐT: ",phone);
    console.log("Đơn vị: ",donvi);
    console.log("Gửi đến: ",guiden);
    console.log("Nội dung: ",noidung);
    console.log("Mã captcha: ",captcha)
    
    //check hoten
    if (hoten == "" || hoten == null || hoten ==undefined){
        alert("Vui lòng nhập họ tên !!!")
        return;
    }
    //check email
    if (validateEmail(email) === false || validateEmail(email) === null){
        alert("Email sai định dạng !!!")
        return;
    }
    //check phone
    if (validatePhone(phone) === false || validatePhone(phone) === null){
        alert("SĐT sai định dạng !!!")
        return;
    }
    //check donvi
    if (donvi == "" || donvi == null || donvi == undefined){
        alert("Vui lòng nhập đơn vị !!!")
        return;
    }
    // check guiden
    if (guiden == "" || guiden == null || guiden == undefined){
        alert("Vui lòng chọn nơi nhận !!!")
        return;
    }
    // check noi dung
    if (noidung == "" || noidung == null || noidung == undefined){
        alert("Vui lòng nhập nội dung !!!")
        return;
    }
    //check captcha
    if (captcha == "" || captcha == null || captcha == undefined){
        alert("Vui lòng nhập mã captcha !!!")
        return;
    }
    else
    {
       if (captcha != "MY5N5")
       {
        alert("Mã captcha không chính xác !!!")
        return;
       } 
    }
}
const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
};

const validatePhone = (phone) => {
    return String(phone)
      .toLowerCase()
      .match(
        /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/
      );
};