var images = ["https://i.postimg.cc/MKdhy06Z/family.jpg","hariprsad.PNG", "divya.JPG" , "namish.JPG", "nimish.JPG", "aavani.JPG"];
var names = ["Fmaily Book","Hariprasad ap", "Divya vs", "Namish D Hari", "Nimish D Hari", "Aavani"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array )
    {
        i = 0;
    }
    var updatedImage = images[i];
    var updatedName  = names[i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}