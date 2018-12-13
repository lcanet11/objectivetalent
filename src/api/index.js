import axios from 'axios'
const getJobs = async function () {
  let response
  try {
    response = await axios.get('https://api.ziprecruiter.com/jobs/v1?search=junior software marketing engineer developer database support architect junior data analyst science design UX enterprise hardware technical &location=New York, NY&radius_miles=80&days_ago=10&jobs_per_page=100&page=1&api_key=qfbg3uitqk8q2zb4jd2vwhwze469g35z')
  } catch (error) {
    console.log('error getting api', error)
  }
  return response
}
export default getJobs
