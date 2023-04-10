
var images=["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/qqyYvVbq/grandpa.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg"]


var names= ["Meu album de Familia O.L.P","Vitor(Papai),Ale(Mamae),Lucas(Irmao mais velho),Eu(Pedro)"]
var i = 0;
function update() 
{
    i++;
    var numbers_of_family_member_in_Array= 5
    if(i > numbers_of_family_member_in_Array)
    {
    i = 0;

}
var updateImage = images[i];
var updateName = names[i];
document.getElementById("family_member_image").src =updateImage;
document.getElementById("family_member_name").src =updateName;
}