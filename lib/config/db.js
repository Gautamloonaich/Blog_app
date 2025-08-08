const {DB_USERNAME,DB_PASSWORD}=process.env;
export  const connectionstr="mongodb+srv://"+DB_USERNAME+":"+DB_PASSWORD+"@cluster0.04ocygm.mongodb.net/bloggitem?retryWrites=true&w=majority&appName=Cluster0";
console.log("username.............................",DB_USERNAME,DB_PASSWORD);