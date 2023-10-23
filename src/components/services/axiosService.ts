import axios from 'axios';

export default async function myAxios(data:string):Promise<any>{
    const instance=axios.create({
        baseURL: 'https://pokeapi.co/api/v2/pokemon/'
    });

    return instance.get('/'+data);
}