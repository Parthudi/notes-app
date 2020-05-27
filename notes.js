const fs = require('fs')
const color = require('chalk')

 const addnotes = (title,body) => {
    const notes = loadnotes()
  //  const duplicate = notes.filter((note)=> note.title === title)
               //when return statement is false then filter statements does filtering/add them
  
               const dupil = notes.find((note) => note.title === title)

     if(!dupil)
        {
            notes.push({
                title: title,
                body: body
        
            })
           savenotes(notes)
           console.log(color.green.inverse('new note added'))
        }
     else {
          console.log('Note is already there')
     }
   
}

const removenotes =  (title) => {
    const notes = loadnotes()
    const duplicate1 = notes.filter((note) => note.title!==title )
         //when return statement is false then filter statements does filtering/remove them
      console.log(duplicate1)  
     if(notes.length > duplicate1.length)       //in notes object all the notes are there & in duplicate1 due to using notes.filter it also has the
                                                //same notes as notes so initially the length of both notes & duplicate are same
         {
             console.log(color.green.inverse('note removed'))
             savenotes(duplicate1)
         }
     else{
             console.log(color.red.inverse('note not found'))
     }       
    
}

const listnotes = () => {
    const notes = loadnotes()
    console.log(color.green.inverse('Your Notes'))
    
    notes.forEach((note) => {
                console.log(note.title)

        })
}

const readnotes = (title) => {
    const notes = loadnotes()
    const search = notes.find((note) => note.title === title )
    if(search)
        {
               console.log(color.green.inverse('TITLE: ' +search.title))
                console.log('BODY: ' +search.body)
        }
    else {
            console.log(color.red.inverse('no search found'))
    }
}

const savenotes = (notes) => {
       const dataaa  = JSON.stringify(notes)  //before writing file always stringify i.e convert obj. into JSON
        fs.writeFileSync('notes.json', dataa)
    }

const loadnotes = () => {
    try{
            const buffer = fs.readFileSync('notes.json')
            const read   = buffer.toString()
            return JSON.parse(read)
          }
        catch (e) {
                    return []
        }
}



module.exports = {
        removenotes: removenotes,
        addnotes: addnotes,
        listnotes: listnotes,
        readnotes: readnotes
}