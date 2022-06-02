const groupsData = require('./groups');

const Group = require('../models/group');

exports.addGroup = (req,res,next)=>{
    const group =new Group(req.body.title,req.body.description);
    group.save()
    .then(
        result=>{
            console.log('Product is Created');
            res.redirect('/');
        }
    ).catch(err=>{
        console.log(err);
    });
}

exports.groupForm = (req,res,next)=>{
    res.render('create-group');
}