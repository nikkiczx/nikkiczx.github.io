import express from 'express'
import routes from './routes/index'

const app = express()
const port = 3000

app.use('/api', routes)

//start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`)
})

{
    /*async function getCountry(country: string) {
  const getApi = await axios(
    `https://restcountries.eu/rest/v2/name/${country}`
  );
  const data = getApi.data;
    const countryData = {'capital': data[0].capital, 'region': data[0].region, 'numericCode': data[0].numericCode};
  return countryData;
}
*/
}
