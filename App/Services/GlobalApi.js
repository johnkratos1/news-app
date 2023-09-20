import { create } from "apisauce";


const api = create({
    baseURL: 'https://newsapi.org/v2',
  })

const apiKey = '?country=us&apiKey=7b2c8735f9f44a0fba25b9e4277bda12'

const getTopHeadlines = api.get('/top-headlines'+apiKey)
const getByCategory=(category)=>api.get('/everything?q='+category+"&apiKey=7b2c8735f9f44a0fba25b9e4277bda12")


export default{
    getTopHeadlines,
    getByCategory
}