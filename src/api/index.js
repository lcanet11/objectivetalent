import axios from 'axios'
const getJobs = async function () {
  let response
  try {
    response = await axios.get('https://api.ziprecruiter.com/jobs/v1?search=Software engineer data scientist data analyst software designer &location=New York, NY&radius_miles=40&days_ago=10&jobs_per_page=100&page=1&api_key=qfbg3uitqk8q2zb4jd2vwhwze469g35z')
  } catch (error) {
    console.log('error getting api', error)
  }
  return response
}
export default getJobs
