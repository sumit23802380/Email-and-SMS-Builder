// const fs =require('fs');
// // const grps = [];
// const path = require('path');

// const p =path.join(path.dirname(process.mainModule.filename),'data','groups.json');

// const getGroupsFromFile = cb => {
//     fs.readFile(p, (err, fileContent) => {
//       if (err) {
//         cb([]);
//       } else {
//         cb(JSON.parse(fileContent));
//       }
//     });
//   };

// module.exports = class Group{
//     constructor(title,description){
//         this.title=title;
//         this.description=description;
//     }

//     save(){
//         // grps.push(this);
//         this.id=Math.random().toString();
//         fs.readFile(p,(err,fileContent)=>{
//             let groups =[];
//             if(!err){
//                 groups = JSON.parse(fileContent);
//             }
//             groups.push(this);
//             fs.writeFile(p,JSON.stringify(groups),(err)=>{
//                 console.log(err);
//             });
//         })
//     }

//     static fetchAll(cb){
//         // return grps;
//         fs.readFile(p,(err,fileContent)=>{
//             if(err){
//                 cb([]);
//             }
//             cb(JSON.parse(fileContent));
//         })
//     }
//     static findById(id,cb){
//         getGroupsFromFile(groups =>{
//             const group = groups.find(p => p.id ===id);
//             cb(group)
//         })
//     }
// }

const mongodb = require('mongodb');
const mongoConnect = require('../util/database').mongoConnect;
const getDb = require('../util/database').getDb;

class Group {
    constructor(title, description) {
        this.title = title;
        this.description = description;
    }

    save() {
        const db = getDb();
        return db.collection('groups').insertOne(this).then(result => {
            console.log(result);
        })
            .catch(err => {
                console.log(err);
            });
    }
    static fetchAll() {
        const db =getDb();
        return db.collection('groups').find().toArray()
        .then(groups =>{
            console.log(groups);
            return groups;
        })
        .catch(err =>{
            console.log(err);
        });

    }
    static findById(groupId) {
        const db =getDb();
        return db.collection('groups').find({_id : new mongodb.ObjectId(groupId)}).next()
        .then(group=>{
            console.log(group);
            return group;
        })
        .catch(err=>{
            console.log(err);
        })
    }
} 


module.exports = Group;