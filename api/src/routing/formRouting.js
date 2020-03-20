const express = require('express');
const Form = require('../schemeModels/form.model');
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({extended: true}));

router.get('/', async (req, res) => {
   try{
      const forms = await Form.find();
      res.json(forms);
   }catch(err){
      res.json({message:err})
   }
});

router.get('/:formId', async (req, res) => {
   try{
      const form = await Form.findById(req.params.formId);
      res.json (form)
   } catch (err){
      res.json({message:err})
   }
});

router.get('/title/:formTitle', async (req, res) => {
   console.log(req.params.title);
   try{
      const form = await Form.find({title: req.params.formTitle});
      console.log(typeof form);
      res.json (form)
   } catch (err){
      res.json({message:err})
   }
});


router.post('/create', async (req, res) => {
   // hardcoded TODO change that
   try{
      console.log("jebac");
      const savedForm = await form.create(req.body);
      res.json(savedForm);
   } catch(err){
      res.json({message: err});
   }
});

router.delete('/:formId', async (req, res) => {
   try{
      const removedForm = await Form.deleteOne({ _id: req.params.formId});
      res.json(removedForm)
   } catch (err) {
      res.json({ message : err});
   }
});

// hardcoded TODO change that
router.patch('/:formId', async (req, res) => {
   try{
      const updatedForm = await Form.updateOne({ _id: req.params.formId},
          {$set: {name : req.body.name}},
          {$set: {surname : req.body.surname}}
          );
      res.json(updatedForm)
   } catch (err){
      res.json({ message: err});
   }
});


module.exports = router;
