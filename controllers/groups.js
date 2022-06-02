const Group = require('../models/group');

exports.getIndex= (req,res,next)=>{
    Group.fetchAll()
    .then(groups =>{
        res.render('groups/index',{
            groups:groups
        })
    })
    .catch(err=>{
        console.log(err);
    })
    ;  
}
exports.getGroup = (req,res,next)=>{
    const groupId = req.params.groupId;
    // Group.findById(groupId,group=>{
    //     res.render('./groups/group-details', {group:group});
    // })
    console.log(groupId);
    Group.findById(groupId)
    .then(group =>{
        res.render('./groups/group-details', {group:group});
        console.log(group);
    })
    .catch(err=>{
        console.log(err);
    });
}

exports.getAllGroups= (req,res,next)=>{
    Group.fetchAll()
    .then(groups =>{
        res.render('groups/index',{
            groups:groups
        })
    })
    .catch(err=>{
        console.log(err);
    })
    ;
}
