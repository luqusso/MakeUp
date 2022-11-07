const { app, BrowserWindow } = require('electron');
const fs = require('fs')
const path = require('path')

// this code will variables assigned from buttons
var btnCreate = document.getElementById('btnCreate')
var btnRead = document.getElementById('btnRead')
var btnUpdate = document.getElementById('btnUpdate')
var btnDelete = document.getElementById('btnDelete')
var fileName = document.getElementById('fileName')
var fileContents = document.getElementById('fileContents')

let pathName = path.join(__dirname, 'Files')

// this code will create function
btnCreate.addEventListener('click', function(){  
  let file = path.join(pathName, fileName.value)
  let contents = fileContents.value
  fs.writeFile(file, contents, function(err){ 
    if(err){
      return console.log(err)
    }
    var txtfile = document.getElementById("fileName").value
    alert(txtfile+ " file has been submitted")    
    console.log("Text file has been created")
  })
})
// this code will read function
btnRead.addEventListener('click', function(){  
  let file = path.join(pathName, fileName.value)
  fs.readFile(file, function(err, data){ 
    if(err){
      return console.log(err)
    }
    fileContents.value = data
    console.log("The file was read!")
  })
})
// this code will function
btnUpdate.addEventListener('click', function(){  
  let file = path.join(pathName, fileName.value)
  let contents = fileContents.value
  fs.readFile(file, 'utf8', function(err,data){ 
    if(err){
      return console.log(err)
    }
    fs.writeFile(file, contents, 'utf8', function(err) {
      if (err) {
        return console.log(err);
      }
      var txtfile = document.getElementById("fileName").value
      alert(txtfile + " File has been updated")   
    })
  })
})
// this code will delete function
btnDelete.addEventListener('click', function(){  
  let file = path.join(pathName, fileName.value)
  fs.unlink(file, function(err){ 
    if(err){
      return console.log(err)
    }
    fileName.value = ""
    fileContents.value = ""
    // this code will display file deleted message
    var txtfile = document.getElementById("fileName").value
    console.log("The file was deleted!")
    alert(" File has been deleted.")
    
  })
})