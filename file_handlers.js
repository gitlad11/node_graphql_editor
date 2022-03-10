const fs = require("fs").promises;
const path = require('path')

///получение всех txt файлов
const get_files = async () => {
    const directoryPath = path.join(__dirname, 'Files');
    var entries = await fs.readdir(directoryPath);
    
    return entries
}

///чтение содержимого файла
const cat_file = async (name) => {
        var n = ''
        if(name.endsWith('.txt')){
            n = './Files/' +  name;
        } else {
            n = './Files/' +  name + '.txt'
        }
        const data = await fs.readFile(n, 'UTF-8');
        return data;
}

///изменение содержимого файла
const write_file = async (name, data) => {
    var n = '';
        if(name.endsWith('.txt')){
            n = './Files/' +  name;
        } else {
            n ='./Files/' +  name + '.txt'
        }
    const file = await fs.writeFile(n, data)

}

///создание файла
const create_file = async (name) => {
    var n = '';
        if(name.endsWith('.txt')){
            n = './Files/' + name;
        } else {
            n = './Files/' + name + '.txt'
        }
    var file = await fs.writeFile(path.resolve(__dirname, n), 'utf8', '');
    console.log(file)
}

///удаленние файла 
const remove_file = async (name) => {
    var n = './Files/' + name;
    var error = await fs.unlink(path.resolve(__dirname, n));
    if(error){
        console.log(error)
    } else {
        console.log("Файл удален!")
    }
}

get_files()

module.exports = { get_files, cat_file, write_file, create_file, remove_file }
