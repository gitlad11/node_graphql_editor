import axios from 'axios'

const get_items = async ()  => {
    const files =  await axios.get('http://localhost:3004/api/files')
    console.log(files.data)
    return files.data
}

const remove_item = async (name) => {
    const response = await axios.post('http://localhost:3004/api/files/delete')
    console.log(response.status)
   
}

export { get_items, remove_item }