let image=document.getElementById("image");
let imageFileName=image.value;
let imageTypes=["image/jpg","image/jpeg","image/png","image/webp"];
let imageNotif=document.getElementById("imageNotification");
imageNotif.innerHTML="";
for(let i=0;i<imageTypes.length;i++){
    if(imageFileName.type==imageTypes[i]){
       let imageNotification=document.createElement("p");
        imageNotification.innerHTML="Succesfully Uploaded Your Image";
        imageNotif.append(imageNotification);
    }
    else{
        imageNotification.innerHTML="Upload Correct Image File";
        imageNotif.append(imageNotification);
    }
}
if(imageFileName.size>3*(1024*1024)){
    imageNotification.innerHTML="Image size should be less than 3kb";
    imageNotif.append(imageNotification);
}

