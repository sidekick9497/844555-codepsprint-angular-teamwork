//alert("script added");

function animateLoading()
{
    setTimeout(() => {
        $(".loader").hide();
        console.log("showing content")
       // $(".maincontent").show();
       $( ".maincontent" ).fadeIn( 3000, function() {
        // Animation complete\

      });
    }, 2500);
}
function animateNav()
{   
    $(".animateNav").css({"visibility":"visible"});
    /*anime({
        targets: '.animateNav',
        
        duration:2000
      }).play();
*/
}
function animate()
{

    console.log("animating");

    anime({
        targets: '.animatethis',
        scale:[0,1],
        translateX: ['-100', '0'],
        duration:3000
      }).play();
      
}
function UserDetails(name, address,city,userPackage,trainer,phone) {
    this.name = name;
    this.address = address;
    this.city = city;
    this.package = userPackage;
    this.trainer = trainer;
    this.phone = phone;
  }


var user_details =  new UserDetails("harry","address","chn","20","male","78788");
console.log(user_details)
localStorage.setItem('user',JSON.stringify(user_details));
//console.log(localStorage.getItem('user'))
var mUser = JSON.parse(localStorage.getItem('user'));
console.log(mUser.name)

$('.inputPhoneNumber').keyup(function()
{
    //console.log("keyUp");
    var id = $(this).attr('id');
    id = parseInt(id.slice(-1))+1
    var idElemet = "#phone"+id;
    console.log(idElemet);
    $(idElemet).focus();
  
});
$('.inputPackage').click(function()
{
    var cost = $(this).val()
    $("#inr").val(cost);
})
function saveUserDetails()
{   console.log("details are getting saved")
    var firstName = $("#inputFirstname").val();
    console.log(firstName);
    var secondName = $("#inputLastname").val();
    var name = firstName + " " + secondName;
    var address = $("#inputAddress2").val();
    var city = $("#inputCity").val();
    var trainer = $("#inputTrainer").val();
    var package = 1000;
    var phone = 112233;
    USER_DETAILS = 'USER_DETAIL';
    var userDetails = JSON.parse(localStorage.getItem(USER_DETAILS));
    console.log(userDetails);
    if(userDetails == null)
    {
        userDetails = [];
    }
    var user = (new UserDetails(name,address,city,package,trainer,phone));
    userDetails.push(user);
    localStorage.setItem(USER_DETAILS,JSON.stringify(userDetails));
    console.log(JSON.parse(localStorage.getItem(USER_DETAILS)));
}