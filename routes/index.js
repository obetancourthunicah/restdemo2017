var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/// REST
// HTTP  GET -- consulta
//      POST -- nueva data
//      PUT  -- actualizar data
//      DELETE -- borrar data
var dummyStore = [];
var dummyData = {
  cuenta:"120630023",
  nombre:"Orlando J Betancourth",
  correo:"obetancourthunicah@gmail.com",
  curso:"Seminario de Software"
}


router.get('/api/alumnos/:alumcod/:tip',
  function(req,res,next){
      console.log(req.params);
      res.json(dummyData);
  }
 );//end api

 router.get('/api/alumnos/all',
   function(req,res,next){
       res.json(dummyStore);
   }
  );//end api

 router.post('/api/alumnos/new', function(req,res,next){
   var nData = Object.assign({},dummyData,req.body);
   dummyStore.push(nData);
   res.json(dummyStore);
  });//alumnos new

  router.put('/api/alumnos/:cuenta', function(req,res,next){
    var newDummy = dummyStore.map(
        function(currentElement , index){
            if(currentElement.cuenta === req.params.cuenta){
               var newElement = Object.assign({},currentElement,req.body);
               return newElement;
            }
            return currentElement;
          }
      ); //map
      dummyStore = newDummy;
      res.json(dummyStore);
   });//alumnos update

   router.delete('/api/alumnos/:cuenta', function(req,res,next){
     var newDummy = dummyStore.filter(
         function(currentElement , index){
             if(currentElement.cuenta === req.params.cuenta){
                  return false;
             }else{
                return true;
             }
           }
       ); //map
       dummyStore = newDummy;
       res.json(dummyStore);
    });//alumnos update

module.exports = router;
