import Dexie from 'dexie';
import { resolvePath } from 'react-router-dom';
import Toastify from "../containers/ToastNotification/Toastify";

const OfflineSync = () => {
    const { notifyWarning, notifySuccess,notifyError } = Toastify();   
    //store category data in indexDB
    const saveCategoryInOffline =  (data) => {
        //console.log("data",data);
        //set the database
        const db = new Dexie("Category");
        //create the database store
        db.version(1).stores({
            postCategory: "name"
        })
    
        //adding data to the indexDB
         db.postCategory.add({
            name: data.name
        }).then(()=>{
            notifySuccess("Data storing Success!!..")
        });
    
        db.open()
        .then(()=>{
            notifySuccess("Data stored in IndexDB.")
        })
        .catch((err) => {
            notifyWarning("Dexie error: ",err.stack || err);
        })
    
        
    };
    //store product data in indexDB
    const saveProductInOffline =  (data) => {
        //console.log("product data",data);
        //set the database
        const db = new Dexie("Product");
        //create the database store
        db.version(1).stores({
            postProduct: "name ,description ,price ,categoryid ,imagename"
        })

        //adding data to the indexDB
         db.postProduct.add({
            name: data.name,
            description: data.description,
            price: data.price,
            categoryid: data.categoryid,
            imagename: data.imagename
        }).then(()=>{
            notifySuccess("product storing Success!!..")
        });

        db.open()
        .then(()=>{
            notifySuccess("product stored in IndexDB.")
        })
        .catch((err) => {
            notifyWarning("Dexie error: ",err.stack || err);
        })
    };
    //store image in IndexDB
    const saveImageOffline = (image)=>{

        let reader = new FileReader();

        reader.readAsDataURL(image);

        reader.onload = (e) =>{

            //set the database
            const db = new Dexie("Image");

            db.version(1).stores({
                Image: "image"
            })

            //adding data to the indexDB
            db.Image.add({
                image: e.target.result
            }).then(()=>{
                notifySuccess("Image added!!..")
            });

            db.open()
            .then(()=>{
                notifySuccess("Image stored in IndexDB.")
            })
            .catch((err) => {
                notifyWarning("Dexie error: ",err.stack || err);
            })
            
        }

        
    };

    return{
        saveCategoryInOffline,saveProductInOffline,
        saveImageOffline
    }
}

export default OfflineSync

